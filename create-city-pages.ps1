$basePath = "C:\allstar-website\src\app"

$cities = @(
"kansas-city|Kansas City|MO",
"overland-park|Overland Park|KS",
"olathe|Olathe|KS",
"lenexa|Lenexa|KS",
"leawood|Leawood|KS",
"raymore|Raymore|MO",
"belton|Belton|MO",
"spring-hill|Spring Hill|KS",
"stillwell|Stillwell|KS",
"grandview|Grandview|MO",
"harrisonville|Harrisonville|MO",
"louisburg|Louisburg|KS",
"paola|Paola|KS",
"osawatomie|Osawatomie|KS",
"cleveland|Cleveland|MO",
"drexel|Drexel|MO",
"peculiar|Peculiar|MO",
"freeman|Freeman|MO"
)

foreach ($city in $cities) {

    $parts = $city.Split("|")
    $slug = $parts[0]
    $name = $parts[1]
    $state = $parts[2]

    $folderPath = Join-Path $basePath $slug

    if (Test-Path $folderPath) {
        Remove-Item $folderPath -Recurse -Force
    }

    New-Item -ItemType Directory -Path $folderPath | Out-Null

    $filePath = Join-Path $folderPath "page.tsx"

    $content = @"
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pest Control in $name, $state | All Star Pest Solutions",
  description: "Professional pest control services in $name, $state. Call (913) 738-7827 today.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold mb-4">
        Pest Control in $name, $state
      </h1>

      <p className="mb-6 text-gray-700">
        All Star Pest Solutions provides residential and commercial pest control in $name, $state.
        We treat ants, spiders, termites, rodents, cockroaches, and more.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Our Services in $name
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>General Pest Control</li>
        <li>Ant & Spider Treatments</li>
        <li>Rodent Control</li>
        <li>Termite Treatments</li>
        <li>Wasp Removal</li>
      </ul>

      <div className="mt-10 text-center">
        <a
          href="tel:+19137387827"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Call (913) 738-7827
        </a>
      </div>

    </main>
  );
}
"@

    $content | Out-File -FilePath $filePath -Encoding UTF8

    Write-Host "Created page for $name"
}

Write-Host "All pages successfully created."


