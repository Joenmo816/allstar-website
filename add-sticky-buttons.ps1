Write-Host "Adding Sticky Call/Text Buttons..." -ForegroundColor Green

$componentPath = "src\components\StickyContact.tsx"
$layoutPath = "src\app\layout.tsx"

New-Item -ItemType Directory -Force -Path "src\components" | Out-Null

# Create Sticky Component
@"
"use client";

export default function StickyContact() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-slate-950 text-white flex">
      
      <a
        href="tel:9137387827"
        className="w-1/2 text-center py-4 font-black text-lg bg-red-600 hover:bg-red-700"
      >
        📞 Call Now
      </a>

      <a
        href="sms:9137387827"
        className="w-1/2 text-center py-4 font-black text-lg bg-green-600 hover:bg-green-700"
      >
        💬 Text Us
      </a>

    </div>
  );
}
"@ | Set-Content -Path $componentPath -Encoding UTF8

# Inject into layout
$content = Get-Content -Raw -Path $layoutPath

if ($content -notmatch "StickyContact") {

$content = $content -replace "export default function RootLayout", 'import StickyContact from "@/components/StickyContact";

export default function RootLayout'

$content = $content -replace "</body>", "<StickyContact />`n</body>"

Set-Content -Path $layoutPath -Value $content -Encoding UTF8

}

Write-Host "Sticky buttons added." -ForegroundColor Green

npm run build
