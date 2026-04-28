Write-Host "Adding Local SEO Schema..." -ForegroundColor Green

$layoutPath = "src\app\layout.tsx"
$content = Get-Content -Raw -Path $layoutPath

if ($content -notmatch "application/ld+json") {

$schema = @"

<script type=""application/ld+json"">
{
  ""@context"": ""https://schema.org"",
  ""@type"": ""LocalBusiness"",
  ""name"": ""All Star Pest Solutions"",
  ""image"": ""https://allstarpestkc.com/logo-header-v2.png"",
  ""url"": ""https://allstarpestkc.com"",
  ""telephone"": ""+1-913-738-7827"",
  ""address"": {
    ""@type"": ""PostalAddress"",
    ""streetAddress"": ""210 W. Cleveland St"",
    ""addressLocality"": ""Cleveland"",
    ""addressRegion"": ""MO"",
    ""postalCode"": ""64734"",
    ""addressCountry"": ""US""
  },
  ""areaServed"": ""Kansas City Metro"",
  ""priceRange"": ""$$"",
  ""sameAs"": [
    ""https://www.facebook.com/"",
    ""https://www.instagram.com/""
  ]
}
</script>

"@

$content = $content -replace "</body>", "$schema`n</body>"

Set-Content -Path $layoutPath -Value $content -Encoding UTF8

}

Write-Host "Schema added." -ForegroundColor Green

npm run build
