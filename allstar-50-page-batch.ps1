$ErrorActionPreference = "Stop"
Set-Location "C:\allstar-website"

function Write-Page {
  param([string]$Path, [string]$Content)
  $folder = Split-Path $Path -Parent
  if (!(Test-Path $folder)) {
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
  }
  Set-Content -Path $Path -Value $Content -Encoding UTF8
}

$pages = @(
  @{Slug="boxelder-bug-control-kansas-city"; Title="Boxelder Bug Control Kansas City"; Pest="boxelder bugs"},
  @{Slug="stink-bug-control-kansas-city"; Title="Stink Bug Control Kansas City"; Pest="stink bugs"},
  @{Slug="silverfish-control-kansas-city"; Title="Silverfish Control Kansas City"; Pest="silverfish"},
  @{Slug="earwig-control-kansas-city"; Title="Earwig Control Kansas City"; Pest="earwigs"},
  @{Slug="centipede-control-kansas-city"; Title="Centipede Control Kansas City"; Pest="centipedes"},
  @{Slug="millipede-control-kansas-city"; Title="Millipede Control Kansas City"; Pest="millipedes"},
  @{Slug="cricket-control-kansas-city"; Title="Cricket Control Kansas City"; Pest="crickets"},
  @{Slug="tick-control-kansas-city"; Title="Tick Control Kansas City"; Pest="ticks"},
  @{Slug="beetle-control-kansas-city"; Title="Beetle Control Kansas City"; Pest="beetles"},
  @{Slug="pantry-pest-control-kansas-city"; Title="Pantry Pest Control Kansas City"; Pest="pantry pests"},
  @{Slug="grain-beetle-control-kansas-city"; Title="Grain Beetle Control Kansas City"; Pest="grain beetles"},
  @{Slug="moth-control-kansas-city"; Title="Moth Control Kansas City"; Pest="moths"},
  @{Slug="carpet-beetle-control-kansas-city"; Title="Carpet Beetle Control Kansas City"; Pest="carpet beetles"},
  @{Slug="springtail-control-kansas-city"; Title="Springtail Control Kansas City"; Pest="springtails"},
  @{Slug="clover-mite-control-kansas-city"; Title="Clover Mite Control Kansas City"; Pest="clover mites"},
  @{Slug="sowbug-control-kansas-city"; Title="Sowbug Control Kansas City"; Pest="sowbugs"},
  @{Slug="pillbug-control-kansas-city"; Title="Pillbug Control Kansas City"; Pest="pillbugs"},
  @{Slug="yellowjacket-control-kansas-city"; Title="Yellowjacket Control Kansas City"; Pest="yellowjackets"},
  @{Slug="hornet-control-kansas-city"; Title="Hornet Control Kansas City"; Pest="hornets"},
  @{Slug="paper-wasp-control-kansas-city"; Title="Paper Wasp Control Kansas City"; Pest="paper wasps"},
  @{Slug="mouse-control-kansas-city"; Title="Mouse Control Kansas City"; Pest="mice"},
  @{Slug="rat-control-kansas-city"; Title="Rat Control Kansas City"; Pest="rats"},
  @{Slug="vole-control-kansas-city"; Title="Vole Control Kansas City"; Pest="voles"},
  @{Slug="german-cockroach-control-kansas-city"; Title="German Cockroach Control Kansas City"; Pest="German cockroaches"},
  @{Slug="american-cockroach-control-kansas-city"; Title="American Cockroach Control Kansas City"; Pest="American cockroaches"},
  @{Slug="brown-recluse-spider-control-kansas-city"; Title="Brown Recluse Spider Control Kansas City"; Pest="brown recluse spiders"},
  @{Slug="black-widow-spider-control-kansas-city"; Title="Black Widow Spider Control Kansas City"; Pest="black widow spiders"},
  @{Slug="wolf-spider-control-kansas-city"; Title="Wolf Spider Control Kansas City"; Pest="wolf spiders"},
  @{Slug="acrobat-ant-control-kansas-city"; Title="Acrobat Ant Control Kansas City"; Pest="acrobat ants"},
  @{Slug="odorous-house-ant-control-kansas-city"; Title="Odorous House Ant Control Kansas City"; Pest="odorous house ants"},
  @{Slug="pavement-ant-control-kansas-city"; Title="Pavement Ant Control Kansas City"; Pest="pavement ants"},
  @{Slug="field-ant-control-kansas-city"; Title="Field Ant Control Kansas City"; Pest="field ants"},
  @{Slug="subterranean-termite-control-kansas-city"; Title="Subterranean Termite Control Kansas City"; Pest="subterranean termites"},
  @{Slug="termite-prevention-kansas-city"; Title="Termite Prevention Kansas City"; Pest="termites"},
  @{Slug="termite-moisture-control-kansas-city"; Title="Termite Moisture Problems Kansas City"; Pest="moisture-related termites"},
  @{Slug="crawlspace-termite-inspection-kansas-city"; Title="Crawlspace Termite Inspection Kansas City"; Pest="crawlspace termite issues"},
  @{Slug="deck-pest-control-kansas-city"; Title="Deck Pest Control Kansas City"; Pest="deck pests"},
  @{Slug="patio-pest-control-kansas-city"; Title="Patio Pest Control Kansas City"; Pest="patio pests"},
  @{Slug="yard-pest-control-kansas-city"; Title="Yard Pest Control Kansas City"; Pest="yard pests"},
  @{Slug="foundation-pest-control-kansas-city"; Title="Foundation Pest Control Kansas City"; Pest="foundation pests"},
  @{Slug="attic-pest-control-kansas-city"; Title="Attic Pest Control Kansas City"; Pest="attic pests"},
  @{Slug="kitchen-pest-control-kansas-city"; Title="Kitchen Pest Control Kansas City"; Pest="kitchen pests"},
  @{Slug="bathroom-pest-control-kansas-city"; Title="Bathroom Pest Control Kansas City"; Pest="bathroom pests"},
  @{Slug="restaurant-pest-control-kansas-city"; Title="Restaurant Pest Control Kansas City"; Pest="restaurant pests"},
  @{Slug="office-pest-control-kansas-city"; Title="Office Pest Control Kansas City"; Pest="office pests"},
  @{Slug="warehouse-pest-control-kansas-city"; Title="Warehouse Pest Control Kansas City"; Pest="warehouse pests"},
  @{Slug="rental-property-pest-control-kansas-city"; Title="Rental Property Pest Control Kansas City"; Pest="rental property pests"},
  @{Slug="landlord-pest-control-kansas-city"; Title="Landlord Pest Control Kansas City"; Pest="rental pest problems"},
  @{Slug="move-in-pest-control-kansas-city"; Title="Move-In Pest Control Kansas City"; Pest="move-in pest issues"},
  @{Slug="move-out-pest-control-kansas-city"; Title="Move-Out Pest Control Kansas City"; Pest="move-out pest issues"}
)

foreach ($p in $pages) {
  $slug = $p.Slug
  $title = $p.Title
  $pest = $p.Pest

  $content = @"
import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";
import SeoInternalLinks from "../components/SeoInternalLinks";

export const metadata: Metadata = {
  title: "$title | All Star Pest Solutions",
  description: "$title from All Star Pest Solutions. Local Kansas City pest control with 30+ years experience, no mandatory contracts, and owner-operated service.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Kansas City Pest Control
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          $title
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>
            All Star Pest Solutions provides local help for $pest in the Kansas City metro. Pest problems are not all the same, and the right service depends on the pest, the structure, the season, and the conditions around the property.
          </p>

          <p>
            With over 30 years of pest control experience, we focus on the source of the issue instead of just treating what you can see. Entry points, moisture, food sources, nesting areas, crawlspaces, basements, garages, yards, and wall voids can all play a role.
          </p>

          <p>
            When you call All Star Pest Solutions, you speak directly with the local owner and technician. No call center. No mandatory contracts. Just honest pest control built around real results.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-3xl font-black">Why Homeowners Call All Star</h2>
          <ul className="mt-5 grid gap-3 text-lg font-semibold text-slate-700 md:grid-cols-2">
            <li>✓ 30+ years of pest control experience</li>
            <li>✓ No mandatory contracts</li>
            <li>✓ Owner-operated local service</li>
            <li>✓ Licensed in Kansas & Missouri</li>
            <li>✓ Veteran & senior discounts</li>
            <li>✓ Environmentally responsible approach</li>
          </ul>
        </div>
      </section>

      <StrongCTA />
      <SeoInternalLinks />
    </main>
  );
}
"@

  Write-Page -Path "src\app\$slug\page.tsx" -Content $content
}

# Update sitemap with 50 new pages
$sitemapRoutes = $pages | ForEach-Object { '  "/' + $_.Slug + '",' }
$sitemapRoutesText = $sitemapRoutes -join "`n"

$sitemap = @"
import type { MetadataRoute } from "next";

const baseUrl = "https://allstarpestkc.com";

const routes = [
  "",
  "/about",
  "/services",
  "/cities",
  "/faqs",
  "/contact",
  "/reviews",
  "/blog",
  "/guarantee",
  "/discounts",
  "/text-a-pest-photo",
  "/general-pest-control-kansas-city",
  "/home-pest-control-kansas-city",
  "/commercial-pest-control-kansas-city",
  "/termite-inspection-kansas-city",
  "/termite-treatment-kansas-city",
  "/ants-kansas-city",
  "/spider-control-kansas-city",
  "/rodent-control-kansas-city",
  "/cockroach-exterminator-kansas-city",
  "/bed-bug-treatment-kansas-city",
  "/mosquito-control-kansas-city",
  "/wasp-control-kansas-city",
  "/flea-treatment-kansas-city",
$sitemapRoutesText
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.85,
  }));
}
"@

Write-Page -Path "src\app\sitemap.ts" -Content $sitemap

Write-Host "Created 50 new SEO pages and updated sitemap." -ForegroundColor Green

npm run build
