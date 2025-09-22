$ErrorActionPreference = "Stop"

$manifest = ".\src\data\pests.ts"
if (-not (Test-Path $manifest)) { throw "Manifest not found: $manifest" }

$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
Copy-Item $manifest "$manifest.bak-$stamp" -Force

$text = Get-Content $manifest -Raw -Encoding UTF8

# Find export and the first '[' after it (permissive)
$exp = [regex]::Match($text, 'export\s+const\s+pests\b', 'IgnoreCase')
if (-not $exp.Success) { throw "Could not find 'export const pests' in $manifest" }

$openIx = $text.IndexOf('[', $exp.Index)
if ($openIx -lt 0) { throw "Internal: '[' not found after 'export const pests'." }

# Walk to matching closing ']'
$depth=0; $closeIx=-1
for ($i=$openIx; $i -lt $text.Length; $i++) {
  switch ($text[$i]) {
    '[' { $depth++ }
    ']' { $depth--; if ($depth -eq 0) { $closeIx=$i; break } }
  }
}
if ($closeIx -lt 0) { throw "Could not find closing ']' for pests array." }

$prefix = $text.Substring(0,$openIx+1)   # includes '['
$segment= $text.Substring($openIx+1,$closeIx-$openIx-1)  # inside the array only
$suffix = $text.Substring($closeIx)       # starts at ']' through EOF

# Items to apply (adjust file names to exact casing in public\images\pests)
$imgDir = ".\public\images\pests"
$items = @(
  @{slug='bumble-bee';       name='Bumble Bee';       group='Other';        file='Bumble-Bee.jpg'}
  @{slug='cicada-killer';    name='Cicada Killer';    group='Wasp/Hornet';  file='Cicada-Killer.jpg'}
  @{slug='digger-wasp';      name='Digger Wasp';      group='Wasp/Hornet';  file='Digger-Wasp.jpg'}
  @{slug='european-hornet';  name='European Hornet';  group='Wasp/Hornet';  file='European-Hornet.jpg'}
  @{slug='honey-bee';        name='Honey Bee';        group='Other';        file='Honey-Bee.jpg'}
  @{slug='leaf-cutter-bee';  name='Leaf-Cutter Bee';  group='Other';        file='Leaf-Cutter-Bee.jpg'}
  @{slug='mason-bee';        name='Mason Bee';        group='Other';        file='Mason-Bee.jpg'}
  @{slug='mud-dauber';       name='Mud Dauber';       group='Wasp/Hornet';  file='Mud-Dauber.jpg'}
  @{slug='sweat-bee';        name='Sweat Bee';        group='Other';        file='Sweat-Bee.jpg'}
  @{slug='carpet-beetle';    name='Carpet Beetle';    group='Other';        file='Carpet-Beetle.jpg'}
  @{slug='clothes-moth';     name='Clothes Moth';     group='Other';        file='Clothes-Moth.jpg'}
  @{slug='drugstore-beetle'; name='Drugstore Beetle'; group='Other';        file='Drugstore-Beetle.jpg'}
  @{slug='flour-beetle';     name='Flour Beetle';     group='Other';        file='Flour-Beetle.jpg'}
  @{slug='grain-beetle';     name='Grain Beetle';     group='Other';        file='Grain-Beetle.jpg'}
  @{slug='japanese-beetle';  name='Japanese Beetle';  group='Other';        file='Japanese-Beetle.jpg'}
  @{slug='indian-meal-moth'; name='Indian Meal Moth'; group='Other';        file='Indian-Meal-Moth.jpg'}
  @{slug='pill-bug';         name='Pill Bug';         group='Other';        file='Pill-Bug.jpg'}
  @{slug='ladybug';          name='Ladybug';          group='Other';        file='Lady-Bug.jpg'}
  @{slug='millipede';        name='Millipede';        group='Other';        file='Millipede.jpg'}
  @{slug='mosquito';         name='Mosquito';         group='Other';        file='Mosquito.jpg'}
  @{slug='walking-stick';    name='Walking Stick';    group='Other';        file='Walking-Stick.jpg'}
  @{slug='cicada';           name='Cicada';           group='Other';        file='Cicada.jpg'}
  @{slug='praying-mantis';   name='Praying Mantis';   group='Other';        file='Praying-Mantis.jpg'}
  @{slug='roof-rat';         name='Roof Rat';         group='Rodent';       file='Roof-Rat.jpg'}
  @{slug='deer-mouse';       name='Deer Mouse';       group='Rodent';       file='Deer-Mouse.jpg'}
  @{slug='clover-mite';      name='Clover Mite';      group='Other';        file='Clover-Mite.jpg'}
)

# Helper: update image inside an object for a given slug within $segment (return new segment, bool updated)
function Ensure-ImageForSlug([string]$seg,[string]$slug,[string]$imageRel) {
  $m = [regex]::Match($seg, "(\{[^{}]*?slug:\s*`"$([regex]::Escape($slug))`"[^{}]*?\})", 'Singleline,IgnoreCase')
  if (-not $m.Success) { return ,$false }  # not found
  $obj = $m.Groups[1].Value
  if ($obj -match 'image:\s*"[^"]+"') {
    $newObj = [regex]::Replace($obj, 'image:\s*"[^"]+"', "image: `"$imageRel`"", 1)
  } else {
    # insert after 'name:' if present, else after slug
    if ($obj -match '(name:\s*"[^"]+"\s*,)') {
      $newObj = $obj -replace '(name:\s*"[^"]+"\s*,)', "`$1`r`n    image: `"$imageRel`","
    } else {
      $newObj = $obj -replace '(slug:\s*"[^"]+"\s*,)', "`$1`r`n    image: `"$imageRel`","
    }
  }
  $newSeg = $seg.Remove($m.Index,$m.Length).Insert($m.Index,$newObj)
  return $newSeg,$true
}

# First pass: update images for slugs that already exist
$toInsert = New-Object System.Collections.Generic.List[object]
foreach ($i in $items) {
  $full = Join-Path $imgDir $i.file
  if (-not (Test-Path $full)) { Write-Warning "Missing image: $($i.file) — skipping $($i.slug)"; continue }

  $imageRel = "/images/pests/$($i.file)"
  $res = Ensure-ImageForSlug -seg $segment -slug $i.slug -imageRel $imageRel
  if ($res.Count -gt 0 -and $res[1]) {
    $segment = $res[0]
  } else {
    $toInsert.Add($i)
  }
}

# Build all new entries (only once) and append before closing bracket
if ($toInsert.Count -gt 0) {
  $sb = New-Object System.Text.StringBuilder
  foreach ($i in $toInsert) {
    [void]$sb.AppendLine("  {")
    [void]$sb.AppendLine("    slug: `"$($i.slug)`",")
    [void]$sb.AppendLine("    name: `"$($i.name)`",")
    [void]$sb.AppendLine("    image: `"/images/pests/$($i.file)`",")
    [void]$sb.AppendLine("    group: `"$($i.group)`"")
    [void]$sb.AppendLine("  },")
  }
  # If segment isn't empty and doesn't end with a comma, add one
  $trim = $segment.TrimEnd()
  if ($trim -and $trim[-1] -ne ',') { $segment += ',' }
  $segment += "`r`n" + $sb.ToString().TrimEnd()
}

# Reassemble and save
$final = $prefix + $segment + $suffix
$final | Set-Content $manifest -Encoding UTF8
"Patched $manifest (backup: $manifest.bak-$stamp)"
