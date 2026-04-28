Write-Host "Running Pest Library Fix..." -ForegroundColor Green

# Create folders
New-Item -ItemType Directory -Force -Path "src\lib" | Out-Null
New-Item -ItemType Directory -Force -Path "src\app\pest-library\[slug]" | Out-Null

# Create pests.ts
@"
export const pests = [
  { slug: "ants", name: "Ants" },
  { slug: "termites", name: "Termites" },
  { slug: "spiders", name: "Spiders" },
  { slug: "wasps", name: "Wasps" },
  { slug: "rodents", name: "Rodents" },
  { slug: "cockroaches", name: "Cockroaches" },
  { slug: "mosquitoes", name: "Mosquitoes" },
];
"@ | Set-Content -Path "src\lib\pests.ts" -Encoding UTF8

# Create dynamic page
@"
import { pests } from "@/lib/pests";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return pests.map((p) => ({ slug: p.slug }));
}

export default function Page({ params }) {
  const pest = pests.find((p) => p.slug === params.slug);
  if (!pest) return notFound();

  return (
    <div style={{ padding: "40px" }}>
      <h1>{pest.name} Control Kansas City</h1>
      <p>Professional {pest.name.toLowerCase()} control and inspection services.</p>
    </div>
  );
}
"@ | Set-Content -LiteralPath "src\app\pest-library\[slug]\page.tsx" -Encoding UTF8

Write-Host "Pest Library System Created." -ForegroundColor Green
