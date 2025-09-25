$ErrorActionPreference = "Stop"
$repo = (Resolve-Path .).Path
$public      = Join-Path $repo "public"
$components  = Join-Path $repo "src\components"
$appDir      = Join-Path $repo "src\app"
$stylesDir   = Join-Path $repo "src\styles"

foreach ($p in @($public,$components,$appDir,$stylesDir)) { if (!(Test-Path $p)) { New-Item -ItemType Directory -Path $p -Force | Out-Null } }

# ---------- Assets sanity ----------
if (!(Test-Path (Join-Path $public "star.png")))  { Write-Warning "Missing public\star.png (favicons)."; }
if (!(Test-Path (Join-Path $public "logo.png")))  { Write-Warning "Missing public\logo.png (header logo)."; }
if (!(Test-Path (Join-Path $public "images\kc.jpg"))) { Write-Warning "Missing public\images\kc.jpg (hero image)."; }

# Generate favicons from star.png if present
$star = Join-Path $public "star.png"
if (Test-Path $star) {
  Copy-Item $star (Join-Path $public "favicon-32x32.png") -Force
  Copy-Item $star (Join-Path $public "favicon-16x16.png") -Force
  Copy-Item $star (Join-Path $public "apple-touch-icon.png") -Force
  Copy-Item $star (Join-Path $public "icon.png") -Force
}

# ---------- Brand colors in globals.css ----------
$globals = Join-Path $stylesDir "globals.css"
if (!(Test-Path $globals)) { New-Item -ItemType File $globals | Out-Null }
$g = Get-Content $globals -Raw
if ($g -notmatch "--brand-teal") {
  Add-Content $globals @'
:root{ --brand-teal:#0aa587; --brand-blue:#145a86; --brand-ink:#0f172a; }
.text-brand-teal{color:var(--brand-teal)} .text-brand-blue{color:var(--brand-blue)}
.bg-brand-teal{background-color:var(--brand-teal)} .bg-brand-blue{background-color:var(--brand-blue)}
.border-brand-teal{border-color:var(--brand-teal)}
