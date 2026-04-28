Write-Host "Fixing Spider Chart Download UX..." -ForegroundColor Green

$path = "src\app\charts\page.tsx"
$content = Get-Content -Raw -Path $path

# Replace spider chart section with a stronger version
$content = $content -replace "(Spider Identification Chart[\s\S]*?Download Chart)", @"

Spider Identification Chart

<p className="mt-3 text-slate-700">
Compare common spiders found in basements, garages, and around your home.
Not sure what you're seeing? Use this chart or text us a photo.
</p>

<div className="mt-5 flex flex-col gap-3">
  <a href="/charts/spider-identification-chart.pdf"
     className="bg-red-600 text-white text-xl font-black px-6 py-4 rounded-xl text-center shadow-lg hover:bg-red-700">
     📥 Download Spider Chart (Tap Here)
  </a>

  <p className="text-sm text-slate-600 text-center">
    Opens instantly — you can save it to your phone or print it.
  </p>
</div>

"@

Set-Content -Path $path -Value $content -Encoding UTF8

Write-Host "Spider chart download fixed." -ForegroundColor Green

npm run build
