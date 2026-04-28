$ErrorActionPreference = "Stop"
Set-Location "C:\allstar-website"

function Write-FileSafe {
  param([string]$Path, [string]$Content)
  $folder = Split-Path $Path -Parent
  if (!(Test-Path $folder)) {
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
  }
  Set-Content -Path $Path -Value $Content -Encoding UTF8
}

$blocked = @(
  "atchison-ks","basehor-ks","bonner-springs-ks","la-tour-mo","baldwin-city-ks",
  "blue-springs-mo","buckner-mo","butler-mo","clinton-mo","creighton-mo",
  "de-soto-ks","east-lynne-mo","edgerton-ks","edwardsville-ks","eudora-ks",
  "excelsior-springs-mo","fontana-ks","garden-city-ks","garden-city-mo",
  "garnett-ks","gardner-ks","gladstone-mo","grain-valley-mo","greenwood-mo",
  "hillsdale-ks","holden-mo","independence-mo","kansas-city-ks","kingsville-mo",
  "knob-noster-mo","lake-lotawana-mo","lake-winnee-missouri","lake-winnebago-mo",
  "lake-quivira-ks","lansing-ks","leavenworth-ks","lawrence-ks","lexington-mo",
  "liberty-mo","north-kansas-city-mo","lone-jack-mo","linn-valley-ks",
  "mound-city-ks","oak-grove-mo","odessa-mo","ottawa-ks","oxford-ks",
  "parker-ks","platte-city-mo","pleasanton-ks","pleasant-hill-mo","rich-hill-mo",
  "richmond-mo","riverside-mo","roeland-park-ks","sedalia-mo","smithville-mo",
  "strasburg-mo","sugar-creek-mo","tonganoxie-ks","topeka-ks","urich-mo",
  "wellington-mo","warrensburg-mo","wellsville-ks","windsor-mo","westwood-ks"
)

$topCities = @(
  @{Slug="overland-park-ks"; Name="Overland Park KS"; Angle="large homes, established neighborhoods, wooded lots, and year-round pest pressure"},
  @{Slug="leawood-ks"; Name="Leawood KS"; Angle="high-value homes, mature landscaping, spiders, ants, rodents, and termite concerns"},
  @{Slug="prairie-village-ks"; Name="Prairie Village KS"; Angle="older homes, crawlspaces, basements, ants, spiders, rodents, and moisture-related pest issues"},
  @{Slug="mission-ks"; Name="Mission KS"; Angle="dense neighborhoods, older structures, roaches, ants, spiders, and rodent entry points"},
  @{Slug="shawnee-ks"; Name="Shawnee KS"; Angle="suburban homes, wooded areas, ants, spiders, mosquitoes, termites, and rodents"},
  @{Slug="lenexa-ks"; Name="Lenexa KS"; Angle="newer and established homes, garages, basements, ants, spiders, mosquitoes, and rodents"},
  @{Slug="olathe-ks"; Name="Olathe KS"; Angle="growing neighborhoods, slab homes, basements, ants, spiders, termites, and seasonal pests"},
  @{Slug="spring-hill-ks"; Name="Spring Hill KS"; Angle="new construction, rural edges, termites, spiders, ants, rodents, mosquitoes, and wasps"},
  @{Slug="stilwell-ks"; Name="Stilwell KS"; Angle="acreage homes, wooded lots, termite risk, rodents, spiders, mosquitoes, and outdoor pests"},
  @{Slug="louisburg-ks"; Name="Louisburg KS"; Angle="rural properties, crawlspaces, termites, rodents, ants, spiders, wasps, and mosquitoes"},
  @{Slug="belton-mo"; Name="Belton MO"; Angle="residential neighborhoods, basements, ants, spiders, roaches, rodents, termites, and wasps"},
  @{Slug="raymore-mo"; Name="Raymore MO"; Angle="suburban homes, slab foundations, ants, spiders, mosquitoes, termites, rodents, and wasps"},
  @{Slug="peculiar-mo"; Name="Peculiar MO"; Angle="country-edge homes, rodents, termites, ants, spiders, mosquitoes, fleas, and wasps"},
  @{Slug="harrisonville-mo"; Name="Harrisonville MO"; Angle="older homes, rural edges, termites, rodents, spiders, ants, roaches, and mosquitoes"},
  @{Slug="lees-summit-mo"; Name="Lee's Summit MO"; Angle="suburban neighborhoods, lake-area pest pressure, ants, spiders, rodents, mosquitoes, and termites"}
)

foreach ($city in $topCities) {
  if ($blocked -contains $city.Slug) {
    throw "Blocked city detected and skipped: $($city.Slug)"
  }

  $slug = $city.Slug
  $name = $city.Name
  $angle = $city.Angle

  $content = @"
import type { Metadata } from "next";
import Link from "next/link";
import StrongCTA from "../../components/StrongCTA";
import SeoInternalLinks from "../../components/SeoInternalLinks";

export const metadata: Metadata = {
  title: "Pest Control $name | All Star Pest Solutions",
  description:
    "Pest control in $name for ants, termites, spiders, rodents, cockroaches, mosquitoes, bed bugs, fleas, wasps, and more. No mandatory contracts.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Local Pest Control
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Pest Control $name
        </h1>

        <p className="mt-6 text-xl font-semibold leading-8 text-slate-700">
          All Star Pest Solutions provides owner-operated pest control in $name
          with over 30 years of experience, no mandatory contracts, and targeted
          service for real pest problems.
        </p>

        <div className="mt-10 grid gap-6">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Pest Problems We See Around $name</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Homes in $name can deal with $angle. The right treatment depends on
              the pest, the structure, the season, and the conditions around the property.
              We do not believe in quick sprays that ignore the source of the problem.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Services Available in $name</h2>
            <ul className="mt-5 grid gap-3 text-lg font-semibold text-slate-700 md:grid-cols-2">
              <li>✓ Ant control</li>
              <li>✓ Carpenter ant treatment</li>
              <li>✓ Termite inspections</li>
              <li>✓ Spider control</li>
              <li>✓ Rodent control</li>
              <li>✓ Cockroach control</li>
              <li>✓ Mosquito control</li>
              <li>✓ Bed bug and flea service</li>
              <li>✓ Wasp and hornet control</li>
              <li>✓ One-time or recurring service</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Ants Inside Walls? Think Termites Too.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Carpenter ants and acrobat ants are often tied to moisture-damaged wood.
              Those same moisture conditions can also attract termites. Ants may even prey
              on termites, which means ant activity inside walls should not be ignored.
              If you are seeing ants inside a wall, a termite inspection is a smart move.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white">
            <h2 className="text-3xl font-black">Why $name Homeowners Call All Star</h2>
            <ul className="mt-5 grid gap-3 text-lg font-semibold text-slate-200 md:grid-cols-2">
              <li>✓ 30+ years of pest control experience</li>
              <li>✓ No mandatory contracts</li>
              <li>✓ Owner-operated service</li>
              <li>✓ Licensed in Kansas & Missouri</li>
              <li>✓ Veteran and senior discounts</li>
              <li>✓ Pollinator-conscious approach</li>
            </ul>
          </article>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:9137387827"
            className="rounded-xl bg-red-700 px-7 py-4 text-center text-lg font-black text-white"
          >
            Call (913) 738-7827
          </a>

          <Link
            href="/services"
            className="rounded-xl border-2 border-slate-950 px-7 py-4 text-center text-lg font-black text-slate-950"
          >
            View Services
          </Link>
        </div>
      </section>

      <StrongCTA />
      <SeoInternalLinks />
    </main>
  );
}
"@

  Write-FileSafe -Path "src\app\cities\$slug\page.tsx" -Content $content
}

$cityLinks = $topCities | ForEach-Object {
  '  ["' + $_.Name + '", "/cities/' + $_.Slug + '"],'
}
$cityLinksText = $cityLinks -join "`n"

$citiesHub = @"
import type { Metadata } from "next";
import Link from "next/link";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Service Areas | South Kansas City Pest Control | All Star Pest Solutions",
  description:
    "All Star Pest Solutions serves selected south Kansas City metro communities with pest control and termite inspection services.",
};

const cities = [
$cityLinksText
];

export default function CitiesPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Service Areas
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-tight md:text-6xl">
          Pest Control Service Areas Across the South Kansas City Metro
        </h1>

        <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
          We focus on the communities we can serve well — with real local pest control,
          termite inspections, honest recommendations, and no mandatory contracts.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cities.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-black shadow-sm hover:shadow-lg"
            >
              Pest Control {name}
              <span className="mt-3 block text-sm font-black text-red-700">
                View city page →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <StrongCTA />
    </main>
  );
}
"@

Write-FileSafe -Path "src\app\cities\page.tsx" -Content $citiesHub

$cityRoutes = $topCities | ForEach-Object {
  '  "/cities/' + $_.Slug + '",'
}
$cityRoutesText = $cityRoutes -join "`n"

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
$cityRoutesText
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : route.startsWith("/cities") ? 0.82 : 0.9,
  }));
}
"@

Write-FileSafe -Path "src\app\sitemap.ts" -Content $sitemap

Write-Host "Built top 15 approved city pages properly and updated cities hub/sitemap." -ForegroundColor Green

npm run build
