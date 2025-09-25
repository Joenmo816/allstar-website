param(
  [switch]$Apply,          # add -Apply to actually write changes
  [switch]$AddOrphans      # add -AddOrphans to create new pests from orphan images
)

$ErrorActionPreference = 'Stop'

$manifest = Join-Path (Resolve-Path .) "src\data\pests.ts"
$imgDir   = Join-Path (Resolve-Path .) "public\images\pests"

if (!(Test-Path $manifest)) { throw "Can't find $manifest" }
if (!(Test-Path $imgDir))   { throw "Can't find $imgDir"   }

Write-Host "Auditing:`n  $manifest`n  $imgDir`n" -ForegroundColor Cyan

# -------- helpers --------
function Kebab {
  param([string]$s)
  return ($s -replace '\s+', '-' -replace '[^a-z0-9\-]', '').ToLower()
}
function TitleFromFile {
  param([string]$fileLeaf) # e.g. "brown-recluse.jpg"
  $base = [IO.Path]::GetFileNameWithoutExtension($fileLeaf)
  # convert "brown-recluse" -> "Brown Recluse"
  return (($base -split '[-_]' | ForEach-Object { if ($_){ $_.Substring(0,1).ToUpper()+$_.Substring(1) } }) -join ' ')
}
function ReadText { param([string]$p) [IO.File]::ReadAllText($p,[Text.Encoding]::UTF8) }
function WriteText { param([string]$p,[string]$t) [IO.File]::WriteAllText($p,$t,[Text.Encoding]::UTF8) }

# find pests array block (by line)
$lines = [System.IO.File]::ReadAllLines($manifest)
$startIx = ($lines | Select-String -Pattern '^\s*export\s+const\s+pests\s*:' -SimpleMatch).LineNumber
if (-not $startIx) { throw "Could not find line starting with 'export const pests :' in $manifest" }
# find closing "];"
$endIx = ($lines | Select-String -Pattern '^\s*\]\s*;' | Select-Object -Last 1).LineNumber
if (-not $endIx -or $endIx -le $startIx) { throw "Could not locate the closing '];' of pests array." }

$text = ReadText $manifest
# simple entry scan
$pestMatches = [regex]::Matches($text,'slug:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"','IgnoreCase')
$pests = @()
foreach ($m in $pestMatches) {
  $slug = $m.Groups[1].Value
  $image= $m.Groups[2].Value
  $pests += [pscustomobject]@{ Slug=$slug; Image=$image }
}

# files present
$files = Get-ChildItem $imgDir -File -Include *.jpg,*.jpeg,*.png,*.webp
$byLeaf = @{}
foreach($f in $files){ $byLeaf[$f.Name] = $f }

# audit buckets
$missingImages   = New-Object System.Collections.Generic.List[string]
$caseFixes       = New-Object System.Collections.Generic.List[string]
$pathPatches     = New-Object System.Collections.Generic.List[string]
$orphans         = New-Object System.Collections.Generic.List[object]

# 1) for every pest.ts entry, make sure the file exists exactly as referenced
foreach ($p in $pests) {
  $rel = $p.Image -replace '^/','' # strip leading slash
  $abs = Join-Path (Resolve-Path .) $rel

  if (Test-Path $abs -PathType Leaf) {
    # exact match exists — good
    continue
  }

  # see if a different-cased leaf exists (Windows can hide this problem locally, Next.js doesn’t)
  $leafWanted = [IO.Path]::GetFileName($abs)
  $cand = $files | Where-Object { $_.Name -ieq $leafWanted } | Select-Object -First 1
  if ($cand) {
    $caseFixes.Add("$($p.Slug): wants '$leafWanted' but actual on disk is '$($cand.Name)'")
    if ($Apply) {
      # patch pests.ts image to exact-case file name
      $safeSlug  = [regex]::Escape($p.Slug)
      $pattern   = "(?ms)(slug:\s*`"$safeSlug`"[\s\S]*?image:\s*`")([^`"]+)(`")"
      $newRel    = "/images/pests/$($cand.Name)"
      $text = [regex]::Replace($text,$pattern,{
        param($m) $m.Groups[1].Value + $newRel + $m.Groups[3].Value
      },1)
      $pathPatches.Add("patched $($p.Slug): '$($p.Image)' -> '$newRel'")
    }
    continue
  }

  # try any file with same slug ignoring punctuation
  $norm = Kebab ([IO.Path]::GetFileNameWithoutExtension($leafWanted))
  $cand2 = $files | Where-Object { (Kebab $_.BaseName) -eq $norm }
  if ($cand2.Count -eq 1) {
    $newRel = "/images/pests/$($cand2[0].Name)"
    if ($Apply) {
      $safeSlug  = [regex]::Escape($p.Slug)
      $pattern   = "(?ms)(slug:\s*`"$safeSlug`"[\s\S]*?image:\s*`")([^`"]+)(`")"
      $text = [regex]::Replace($text,$pattern,{
        param($m) $m.Groups[1].Value + $newRel + $m.Groups[3].Value
      },1)
    }
    $pathPatches.Add("patched $($p.Slug): '$($p.Image)' -> '$newRel'")
  }
  elseif ($cand2.Count -gt 1) {
    $missingImages.Add("$($p.Slug): ambiguous files -> " + ($cand2.Name -join ', '))
  }
  else {
    $missingImages.Add("$($p.Slug): missing '$($leafWanted)'")
  }
}

# 2) Orphans: images that aren’t referenced by pests.ts
$knownLeaves = $pests | ForEach-Object {
  $_.Image -replace '^/','' | Split-Path -Leaf
} | Select-Object -Unique

foreach ($f in $files) {
  if ($knownLeaves -notcontains $f.Name) {
    $orphans.Add([pscustomobject]@{
      Leaf = $f.Name
      Slug = (Kebab $f.BaseName)
      Name = (TitleFromFile $f.Name)
      Group= 'Other'
    })
  }
}

# ----- report -----
Write-Host "`n=== Report (DryRun=$(-not $Apply)) ===" -ForegroundColor Yellow
Write-Host "`nMissing/ambiguous images for existing pests:" -ForegroundColor DarkYellow
if ($missingImages.Count) { $missingImages | ForEach-Object { " - $_" } } else { " (none)" }

Write-Host "`nCase/extension fixes to apply in pests.ts:" -ForegroundColor DarkYellow
if ($caseFixes.Count) { $caseFixes | ForEach-Object { " - $_" } } else { " (none)" }

Write-Host "`nPests image path patches:" -ForegroundColor DarkYellow
if ($pathPatches.Count) { $pathPatches | ForEach-Object { " - $_" } } else { " (none)" }

Write-Host "`nOrphan images (not referenced):" -ForegroundColor DarkYellow
if ($orphans.Count) { $orphans | ForEach-Object { " - $($_.Leaf)  -> will add slug '$($_.Slug)'" } } else { " (none)" }

# ----- apply writes -----
if ($Apply) {
  if ($pathPatches.Count) {
    Write-Host "`nWriting pests.ts path patches..." -ForegroundColor Green
  }

  if ($AddOrphans -and $orphans.Count) {
    Write-Host "Adding $($orphans.Count) orphan images as new pests..." -ForegroundColor Green
    # insert before the closing "];"
    $lines = [System.IO.File]::ReadAllLines($manifest)
    $endIx = ($lines | Select-String -Pattern '^\s*\]\s*;' | Select-Object -Last 1).LineNumber
    if (-not $endIx) { throw "Could not locate closing ]; to insert orphans." }

    $sb = New-Object System.Text.StringBuilder
    foreach ($o in $orphans) {
      [void]$sb.AppendLine("  { slug: `"$($o.Slug)`", name: `"$($o.Name)`", group: `"$($o.Group)`", image: `"/images/pests/$($o.Leaf)`" },")
    }
    $segment = $sb.ToString()

    $pre  = ($lines[0..($endIx-2)]   -join "`r`n")
    $post = ($lines[($endIx-1)..($lines.Count-1)] -join "`r`n")
    $text = $pre + "`r`n" + $segment + $post
  }

  WriteText $manifest $text
  Write-Host "`nSaved: $manifest" -ForegroundColor Green
  "`nTip: run  pnpm dev  and refresh /pests to verify."
}
