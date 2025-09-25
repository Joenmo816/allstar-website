$ErrorActionPreference = "Stop"
Write-Host "[fix] start" -ForegroundColor Cyan

$root = Resolve-Path .
$app  = Join-Path $root "src\app"
if (!(Test-Path $app -PathType Container)) { throw "Missing: $app" }
Write-Host "[fix] app: $app" -ForegroundColor DarkCyan

function Strip-RouteGroups([string]$rel){
  $r = $rel -replace '/', '\'
  while ($r -match '\\\([^\\]+\)\\') { $r = $r -replace '\\\([^\\]+\)\\','\' }
  $r = $r -replace '^\([^\\]+\)\\',''
  return $r.TrimStart('\')
}

# find all page folders
$pages = Get-ChildItem $app -Recurse -Force -File -Include page.tsx,page.jsx,page.ts,page.js |
  ForEach-Object {
    $dir = Split-Path $_.FullName -Parent
    $rel = ($dir.Substring($app.Path.Length)).TrimStart('\','/')
    [pscustomobject]@{
      Dir      = $dir
      Rel      = $rel
      RouteKey = Strip-RouteGroups $rel
      HasGroup = ($rel -match '^\([^\\/]+\)') -or ($rel -match '\\\([^\\]+\)\\')
    }
  }

if (-not $pages) { Write-Host "[fix] no pages found" -ForegroundColor Yellow; exit 0 }

$dups = $pages | Group-Object RouteKey | Where-Object { $_.Count -gt 1 }
if (-not $dups) { Write-Host "[fix] no duplicate routes" -ForegroundColor Green; exit 0 }

$stamp  = Get-Date -Format 'yyyyMMdd-HHmmss'
$backup = Join-Path $root ("__backup_routes\" + $stamp)
New-Item $backup -ItemType Directory -Force | Out-Null
Write-Host "[fix] backup: $backup" -ForegroundColor DarkCyan

foreach ($d in $dups) {
  Write-Host "[fix] route: $($d.Name)" -ForegroundColor Yellow
  $items  = $d.Group
  $winner = $items | Where-Object { -not $_.HasGroup } | Select-Object -First 1
  if (-not $winner) { $winner = $items | Select-Object -First 1 }
  Write-Host "  keep: $($winner.Dir)" -ForegroundColor Green

  $losers = $items | Where-Object { $_.Dir -ne $winner.Dir }
  foreach ($l in $losers) {
    $relForBackup = $l.Rel -replace '[\\/:]','__'
    $dest = Join-Path $backup $relForBackup
    Copy-Item $l.Dir $dest -Recurse -Force
    Remove-Item $l.Dir -Recurse -Force
    Write-Host "  removed (saved): $($l.Dir)" -ForegroundColor DarkYellow
  }
}

# remove empty (group) dirs bottom-up
Get-ChildItem $app -Recurse -Force -Directory |
  Sort-Object FullName -Descending |
  ForEach-Object {
    if (-not (Get-ChildItem $_.FullName -Recurse -Force -ErrorAction SilentlyContinue)) {
      Remove-Item $_.FullName -Force
      Write-Host "  cleaned empty: $($_.FullName)" -ForegroundColor DarkGray
    }
  }

Write-Host "[fix] done" -ForegroundColor Cyan
