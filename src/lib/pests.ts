$ErrorActionPreference = "Stop"

Write-Host "Fixing pest library TypeScript error + header overlap..." -ForegroundColor Green

# Backup
$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$backupDir = ".\backup-fix-build-header-$stamp"
New-Item -ItemType Directory -Force -Path $backupDir | Out-Null

if (Test-Path "src\lib\pests.ts") {
  Copy-Item "src\lib\pests.ts" "$backupDir\pests.ts" -Force
}

# Rewrite pests.ts with the fields your pest-library page expects
@'
export type Pest = {
  slug: string;
  name: string;
  description: string;
};

export const pests: Pest[] = [
  {
    slug: "ants",
    name: "Ants",
    description:
      "Ant problems are often tied to food, moisture, mulch beds, wall voids, foundation gaps, and nesting sites around the structure.",
  },
  {
    slug: "termites",
    name: "Termites",
    description:
      "Termites are a hidden property threat that can damage wood, framing, trim, sill plates, and structural areas before homeowners realize there is a problem.",
  },
  {
    slug: "spiders",
    name: "Spiders",
    description:
      "Spider activity is usually connected to insects, clutter, exterior lighting, basements, garages, and undisturbed areas.",
  },
  {
    slug: "wasps",
    name: "Wasps",
    description:
      "Wasps and stinging insects can become dangerous around doors, decks, rooflines, sheds, playgrounds, and high-traffic areas.",
  },
  {
    slug: "rodents",
    name: "Rodents",
    description:
      "Mice and rats can contaminate areas, damage insulation, chew wires, and keep returning unless entry points are addressed.",
  },
  {
    slug: "cockroaches",
    name: "Cockroaches",
    description:
      "Cockroach infestations require a structured plan with inspection, treatment, monitoring, and sanitation support.",
  },
  {
    slug: "mosquitoes",
    name: "Mosquitoes",
    description:
      "Mosquito problems are driven by shade, moisture, standing water, landscaping, gutters, and resting areas around the property.",
  },
];

export function getPestBySlug(slug: string) {
  return pests.find((pest) => pest.slug === slug);
}
