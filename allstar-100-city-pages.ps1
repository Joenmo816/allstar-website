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

$cities = @(
  @{Slug="kansas-city-mo"; Name="Kansas City MO"},
  @{Slug="overland-park-ks"; Name="Overland Park KS"},
  @{Slug="leawood-ks"; Name="Leawood KS"},
  @{Slug="prairie-village-ks"; Name="Prairie Village KS"},
  @{Slug="mission-ks"; Name="Mission KS"},
  @{Slug="shawnee-ks"; Name="Shawnee KS"},
  @{Slug="lenexa-ks"; Name="Lenexa KS"},
  @{Slug="olathe-ks"; Name="Olathe KS"},
  @{Slug="gardner-ks"; Name="Gardner KS"},
  @{Slug="edgerton-ks"; Name="Edgerton KS"},
  @{Slug="spring-hill-ks"; Name="Spring Hill KS"},
  @{Slug="stilwell-ks"; Name="Stilwell KS"},
  @{Slug="bucyrus-ks"; Name="Bucyrus KS"},
  @{Slug="louisburg-ks"; Name="Louisburg KS"},
  @{Slug="paola-ks"; Name="Paola KS"},
  @{Slug="osawatomie-ks"; Name="Osawatomie KS"},
  @{Slug="fontana-ks"; Name="Fontana KS"},
  @{Slug="drexel-mo"; Name="Drexel MO"},
  @{Slug="cleveland-mo"; Name="Cleveland MO"},
  @{Slug="freeman-mo"; Name="Freeman MO"},
  @{Slug="peculiar-mo"; Name="Peculiar MO"},
  @{Slug="raymore-mo"; Name="Raymore MO"},
  @{Slug="belton-mo"; Name="Belton MO"},
  @{Slug="grandview-mo"; Name="Grandview MO"},
  @{Slug="martin-city-mo"; Name="Martin City MO"},
  @{Slug="loch-lloyd-mo"; Name="Loch Lloyd MO"},
  @{Slug="harrisonville-mo"; Name="Harrisonville MO"},
  @{Slug="lees-summit-mo"; Name="Lee's Summit MO"},
  @{Slug="greenwood-mo"; Name="Greenwood MO"},
  @{Slug="pleasant-hill-mo"; Name="Pleasant Hill MO"},
  @{Slug="blue-springs-mo"; Name="Blue Springs MO"},
  @{Slug="independence-mo"; Name="Independence MO"},
  @{Slug="raytown-mo"; Name="Raytown MO"},
  @{Slug="liberty-mo"; Name="Liberty MO"},
  @{Slug="gladstone-mo"; Name="Gladstone MO"},
  @{Slug="north-kansas-city-mo"; Name="North Kansas City MO"},
  @{Slug="parkville-mo"; Name="Parkville MO"},
  @{Slug="platte-city-mo"; Name="Platte City MO"},
  @{Slug="riverside-mo"; Name="Riverside MO"},
  @{Slug="smithville-mo"; Name="Smithville MO"},
  @{Slug="excelsior-springs-mo"; Name="Excelsior Springs MO"},
  @{Slug="grain-valley-mo"; Name="Grain Valley MO"},
  @{Slug="oak-grove-mo"; Name="Oak Grove MO"},
  @{Slug="odessa-mo"; Name="Odessa MO"},
  @{Slug="holden-mo"; Name="Holden MO"},
  @{Slug="garden-city-mo"; Name="Garden City MO"},
  @{Slug="archie-mo"; Name="Archie MO"},
  @{Slug="adrian-mo"; Name="Adrian MO"},
  @{Slug="butler-mo"; Name="Butler MO"},
  @{Slug="rich-hill-mo"; Name="Rich Hill MO"},
  @{Slug="mound-city-ks"; Name="Mound City KS"},
  @{Slug="pleasanton-ks"; Name="Pleasanton KS"},
  @{Slug="la-cygne-ks"; Name="La Cygne KS"},
  @{Slug="linn-valley-ks"; Name="Linn Valley KS"},
  @{Slug="parker-ks"; Name="Parker KS"},
  @{Slug="garnett-ks"; Name="Garnett KS"},
  @{Slug="ottawa-ks"; Name="Ottawa KS"},
  @{Slug="wellsville-ks"; Name="Wellsville KS"},
  @{Slug="baldwin-city-ks"; Name="Baldwin City KS"},
  @{Slug="eudora-ks"; Name="Eudora KS"},
  @{Slug="de-soto-ks"; Name="De Soto KS"},
  @{Slug="bonner-springs-ks"; Name="Bonner Springs KS"},
  @{Slug="edwardsville-ks"; Name="Edwardsville KS"},
  @{Slug="kansas-city-ks"; Name="Kansas City KS"},
  @{Slug="roeland-park-ks"; Name="Roeland Park KS"},
  @{Slug="fairway-ks"; Name="Fairway KS"},
  @{Slug="merriam-ks"; Name="Merriam KS"},
  @{Slug="westwood-ks"; Name="Westwood KS"},
  @{Slug="lake-quivira-ks"; Name="Lake Quivira KS"},
  @{Slug="basehor-ks"; Name="Basehor KS"},
  @{Slug="tonganoxie-ks"; Name="Tonganoxie KS"},
  @{Slug="leavenworth-ks"; Name="Leavenworth KS"},
  @{Slug="lansing-ks"; Name="Lansing KS"},
  @{Slug="atchison-ks"; Name="Atchison KS"},
  @{Slug="lawrence-ks"; Name="Lawrence KS"},
  @{Slug="topeka-ks"; Name="Topeka KS"},
  @{Slug="richmond-mo"; Name="Richmond MO"},
  @{Slug="lexington-mo"; Name="Lexington MO"},
  @{Slug="warrensburg-mo"; Name="Warrensburg MO"},
  @{Slug="knob-noster-mo"; Name="Knob Noster MO"},
  @{Slug="clinton-mo"; Name="Clinton MO"},
  @{Slug="windsor-mo"; Name="Windsor MO"},
  @{Slug="sedalia-mo"; Name="Sedalia MO"},
  @{Slug="wellington-mo"; Name="Wellington MO"},
  @{Slug="buckner-mo"; Name="Buckner MO"},
  @{Slug="sugar-creek-mo"; Name="Sugar Creek MO"},
  @{Slug="lake-lotawana-mo"; Name="Lake Lotawana MO"},
  @{Slug="lake-winnee-missouri"; Name="Lake Winnebago MO"},
  @{Slug="lone-jack-mo"; Name="Lone Jack MO"},
  @{Slug="kingsville-mo"; Name="Kingsville MO"},
  @{Slug="strasburg-mo"; Name="Strasburg MO"},
  @{Slug="east-lynne-mo"; Name="East Lynne MO"},
  @{Slug="creighton-mo"; Name="Creighton MO"},
  @{Slug="urich-mo"; Name="Urich MO"},
  @{Slug="la-tour-mo"; Name="La Tour MO"},
  @{Slug="garden-city-ks"; Name="Garden City KS"},
  @{Slug="hillsdale-ks"; Name="Hillsdale KS"},
  @{Slug="aubry-ks"; Name="Aubry KS"},
  @{Slug="stanley-ks"; Name="Stanley KS"},
  @{Slug="oxford-ks"; Name="Oxford KS"}
)

foreach ($city in $cities) {
  $slug = $city.Slug
  $name = $city.Name

  $content = @"
import type { Metadata } from "next";
import Link from "next/link";
import StrongCTA from "../../components/StrongCTA";
import SeoInternalLinks from "../../components/SeoInternalLinks";

export const metadata: Metadata = {
  title: "Pest Control $name | All Star Pest Solutions",
  description: "Pest control in $name for ants, termites, spiders, rodents, cockroaches, mosquitoes, bed bugs, fleas, wasps, and more. No mandatory contracts.",
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
          All Star Pest Solutions provides targeted pest control in $name for homeowners,
          businesses, real estate transactions, rentals, crawlspaces, basements, garages,
          yards, and seasonal pest problems.
        </p>

        <div className="mt-10 grid gap-6">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Pest Control Services in $name</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              We help with ants, carpenter ants, acrobat ants, termites, spiders, rodents,
              cockroaches, mosquitoes, bed bugs, fleas, wasps, hornets, pantry pests,
              occasional invaders, and other common Kansas City area pest problems.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Termites, Moisture, and Ants Inside Walls</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              If you are seeing carpenter ants or acrobat ants inside walls, that can point
              to moisture-damaged wood. Moisture can also attract termites. Because termites
              are hidden damage-makers, a termite inspection is a smart move when ants show up
              inside walls.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Why $name Homeowners Call All Star</h2>
            <ul className="mt-5 grid gap-3 text-lg font-semibold text-slate-700 md:grid-cols-2">
              <li>✓ 30+ years of pest control experience</li>
              <li>✓ No mandatory contracts</li>
              <li>✓ Owner-operated local service</li>
              <li>✓ Licensed in Kansas & Missouri</li>
              <li>✓ Veteran & senior discounts</li>
              <li>✓ Environmentally responsible approach</li>
            </ul>
          </article>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href="tel:9137387827" className="rounded-xl bg-red-700 px-7 py-4 text-center text-lg font-black text-white">
            Call (913) 738-7827
          </a>

          <Link href="/services" className="rounded-xl border-2 border-slate-950 px-7 py-4 text-center text-lg font-black text-slate-950">
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

  Write-Page -Path "src\app\cities\$slug\page.tsx" -Content $content
}

# Rewrite cities hub page
$cityCards = $cities | ForEach-Object { '  ["' + $_.Name + '", "/cities/' + $_.Slug + '"],' }
$cityCardsText = $cityCards -join "`n"

$citiesHub = @"
import type { Metadata } from "next";
import Link from "next/link";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Service Areas | Kansas City Pest Control | All Star Pest Solutions",
  description: "All Star Pest Solutions serves Kansas and Missouri communities across the Kansas City metro with pest control and termite inspection services.",
};

const cities = [
$cityCardsText
];

export default function CitiesPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Service Areas
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-tight md:text-6xl">
          Pest Control Service Areas Across the Kansas City Metro
        </h1>

        <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
          All Star Pest Solutions serves homeowners and businesses across Kansas and Missouri with pest control, termite inspections, ant control, spider control, rodent control, cockroach service, mosquito control, flea treatment, bed bug service, and wasp control.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cities.map(([name, href]) => (
            <Link key={href} href={href} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-black shadow-sm hover:shadow-lg">
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

Write-Page -Path "src\app\cities\page.tsx" -Content $citiesHub

# Append/replace sitemap with core + 100 city pages
$cityRoutes = $cities | ForEach-Object { '  "/cities/' + $_.Slug + '",' }
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
    priority: route === "" ? 1 : route.startsWith("/cities") ? 0.8 : 0.9,
  }));
}
"@

Write-Page -Path "src\app\sitemap.ts" -Content $sitemap

Write-Host "Created 100 static city pages, rebuilt cities hub, and updated sitemap." -ForegroundColor Green

npm run build
