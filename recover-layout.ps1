$ErrorActionPreference = "Stop"

Write-Host "Recovering broken layout.tsx..." -ForegroundColor Green

$layoutPath = "src\app\layout.tsx"
$backupDir = ".\backup-layout-recovery-$(Get-Date -Format yyyyMMdd-HHmmss)"
New-Item -ItemType Directory -Force -Path $backupDir | Out-Null

if (Test-Path $layoutPath) {
  Copy-Item $layoutPath "$backupDir\layout.tsx.broken" -Force
}

$layout = @'
import "./globals.css";
import type { Metadata } from "next";
import StickyContact from "@/components/StickyContact";

export const metadata: Metadata = {
  title: "All Star Pest Solutions | Kansas City Pest Control",
  description:
    "All Star Pest Solutions provides local pest control, termite inspections, ant control, spider control, rodent control, and eco-conscious pest services in the Kansas City area.",
  metadataBase: new URL("https://allstarpestkc.com"),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "All Star Pest Solutions",
  image: "https://allstarpestkc.com/logo-header-v2.png",
  url: "https://allstarpestkc.com",
  telephone: "+1-913-738-7827",
  address: {
    "@type": "PostalAddress",
    streetAddress: "210 W. Cleveland St",
    addressLocality: "Cleveland",
    addressRegion: "MO",
    postalCode: "64734",
    addressCountry: "US",
  },
  areaServed: "Kansas City Metro",
  priceRange: "C:\allstar-website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <StickyContact />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
'@

Set-Content -Path $layoutPath -Value $layout -Encoding UTF8

if (Test-Path ".next") {
  Remove-Item ".next" -Recurse -Force
}

npm run build
