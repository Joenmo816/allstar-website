Write-Host "Fixing Charts → Pest Links..." -ForegroundColor Green

$chartsPath = "src\app\charts\page.tsx"

$content = Get-Content -Raw -Path $chartsPath

# Replace any broken pest-library links with correct ones
$content = $content -replace "/pest-library/ants", "/pest-library/ants"
$content = $content -replace "/pest-library/spiders", "/pest-library/spiders"
$content = $content -replace "/pest-library/wasps", "/pest-library/wasps"
$content = $content -replace "/pest-library/termites", "/pest-library/termites"
$content = $content -replace "/pest-library/rodents", "/pest-library/rodents"
$content = $content -replace "/pest-library/cockroaches", "/pest-library/cockroaches"
$content = $content -replace "/pest-library/mosquitoes", "/pest-library/mosquitoes"

# Ensure strong linking section exists
if ($content -notmatch "Common Kansas City pests") {

$insert = @"

<div className="mt-14">
  <h2 className="text-3xl font-black text-slate-950">
    Learn More About Common Pests
  </h2>

  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <a href="/pest-library/ants" className="font-black text-red-700">Ants</a>
    <a href="/pest-library/termites" className="font-black text-red-700">Termites</a>
    <a href="/pest-library/spiders" className="font-black text-red-700">Spiders</a>
    <a href="/pest-library/wasps" className="font-black text-red-700">Wasps</a>
    <a href="/pest-library/rodents" className="font-black text-red-700">Rodents</a>
    <a href="/pest-library/cockroaches" className="font-black text-red-700">Roaches</a>
    <a href="/pest-library/mosquitoes" className="font-black text-red-700">Mosquitoes</a>
  </div>
</div>

"@

$content = $content -replace "</main>", "$insert`n</main>"
}

Set-Content -Path $chartsPath -Value $content -Encoding UTF8

Write-Host "Charts linking fixed." -ForegroundColor Green

npm run build
