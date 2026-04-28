$ErrorActionPreference = "Stop"
Set-Location "C:\allstar-website"

Write-Host "Starting All Star SEO Monster Phase 4..." -ForegroundColor Cyan

# --------------------------------
# Folders
# --------------------------------
New-Item -ItemType Directory -Force -Path "src\app\components" | Out-Null
New-Item -ItemType Directory -Force -Path "src\app\blog" | Out-Null
New-Item -ItemType Directory -Force -Path "src\app\ants-kansas-city" | Out-Null
New-Item -ItemType Directory -Force -Path "src\app\wasp-control-kansas-city" | Out-Null
New-Item -ItemType Directory -Force -Path "src\app\flea-treatment-kansas-city" | Out-Null
New-Item -ItemType Directory -Force -Path "src\app\real-estate-termite-inspections-kansas-city" | Out-Null

$moreCities = @(
  "leawood-ks",
  "louisburg-ks",
  "harrisonville-mo",
  "peculiar-mo",
  "spring-hill-ks",
  "paola-ks",
  "cleveland-mo",
  "martin-city-mo",
  "loch-lloyd-mo",
  "bucyrus-ks",
  "freeman-mo",
  "drexel-mo"
)

foreach ($citySlug in $moreCities) {
  New-Item -ItemType Directory -Force -Path "src\app\cities\$citySlug" | Out-Null
}

# --------------------------------
# Conversion Banner Component
# --------------------------------
@"
import Link from "next/link";

export default function ConversionBanner() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-500">
          Need Pest Help Fast?
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-5xl">
          Call the Local Owner — Not a Call Center
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
          All Star Pest Solutions serves the south Kansas City metro with real pest solutions, no mandatory contracts, and over 30 years of experience.
        </p>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row">
          <a href="tel:9137387827" className="rounded-xl bg-red-700 px-7 py-4 text-center text-lg font-black text-white hover:bg-red-800">
            Call Now: (913) 738-7827
          </a>

          <a href="sms:9137387827" className="rounded-xl bg-white px-7 py-4 text-center text-lg font-black text-slate-950 hover:bg-slate-100">
            Text a Pest Photo
          </a>

          <Link href="/services" className="rounded-xl border-2 border-white px-7 py-4 text-center text-lg font-black text-white hover:bg-white hover:text-slate-950">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
"@ | Set-Content -Path "src\app\components\ConversionBanner.tsx" -Encoding UTF8

# --------------------------------
# FAQ Schema Component
# --------------------------------
@"
import Script from "next/script";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
"@ | Set-Content -Path "src\app\components\FAQSchema.tsx" -Encoding UTF8

# --------------------------------
# More Service Pages
# --------------------------------
$servicePages = @(
  @{
    slug="ants-kansas-city"
    title="Ant Control Kansas City | Carpenter Ants, Acrobat Ants & More"
    desc="Ant control in Kansas City for carpenter ants, acrobat ants, pavement ants, odorous house ants, and other common ant problems."
    h1="Ant Control Kansas City | Stop Ants at the Source"
    body=@(
      "Ants are one of the most common pest problems around Kansas City homes, but not all ants are the same. Carpenter ants, acrobat ants, pavement ants, odorous house ants, and other species behave differently and require different treatment strategies.",
      "The biggest mistake homeowners make is spraying visible ants while missing the nest, moisture source, or entry point. That may scatter the colony and make the problem worse.",
      "If carpenter ants or acrobat ants are active inside walls, that can signal moisture-damaged wood. Those same conditions can also attract termites, which is why we recommend termite awareness when ants are found inside wall voids."
    )
  },
  @{
    slug="wasp-control-kansas-city"
    title="Wasp Control Kansas City | Nest Removal & Stinging Insect Help"
    desc="Wasp and stinging insect control in Kansas City from All Star Pest Solutions. Safe, targeted help for nests around homes and businesses."
    h1="Wasp Control Kansas City | Safe Help for Stinging Insects"
    body=@(
      "Wasps, hornets, and yellowjackets can become aggressive when nests are close to doors, decks, patios, rooflines, sheds, and high-traffic areas.",
      "All Star Pest Solutions provides targeted wasp control that focuses on the nest and the conditions attracting activity around the structure.",
      "We also believe in protecting pollinators. Honey bees and beneficial insects should be handled responsibly whenever possible."
    )
  },
  @{
    slug="flea-treatment-kansas-city"
    title="Flea Treatment Kansas City | Indoor & Yard Flea Control"
    desc="Flea treatment in Kansas City for homes, pets' resting areas, yards, and recurring flea problems."
    h1="Flea Treatment Kansas City | Break the Flea Cycle"
    body=@(
      "Fleas can be frustrating because adults are only part of the problem. Eggs, larvae, pupae, pets, wildlife, shaded yard areas, and indoor resting spots can all keep the cycle going.",
      "A strong flea plan treats the areas where fleas live and develop, not just the places where people get bitten.",
      "All Star Pest Solutions helps homeowners identify likely flea sources and create a practical treatment approach for the home and yard."
    )
  },
  @{
    slug="real-estate-termite-inspections-kansas-city"
    title="Real Estate Termite Inspections Kansas City | VA & FHA"
    desc="Real estate termite inspections in Kansas City for VA loans, FHA loans, home buyers, sellers, and agents."
    h1="Real Estate Termite Inspections Kansas City | VA, FHA & Home Sales"
    body=@(
      "Buying or selling a home? Termite inspections are often required for VA loans, FHA transactions, and many real estate closings.",
      "All Star Pest Solutions provides professional termite inspections with fast scheduling and clear communication for homeowners, buyers, sellers, and real estate agents.",
      "We inspect for visible evidence of termite activity, conditions conducive to termites, moisture concerns, wood-to-soil contact, and other warning signs that matter during a transaction."
    )
  }
)

foreach ($p in $servicePages) {
$content = @"
import type { Metadata } from "next";
import Link from "next/link";
import ConversionBanner from "../components/ConversionBanner";

export const metadata: Metadata = {
  title: "$($p.title)",
  description: "$($p.desc)",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          All Star Pest Solutions
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          $($p.h1)
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>$($p.body[0])</p>
          <p>$($p.body[1])</p>
          <p>$($p.body[2])</p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-3xl font-black">Why Choose All Star?</h2>
          <ul className="mt-5 grid gap-3 text-lg font-semibold text-slate-700 md:grid-cols-2">
            <li>✓ Over 30 years of experience</li>
            <li>✓ No mandatory contracts</li>
            <li>✓ Owner-operated service</li>
            <li>✓ Licensed in Kansas & Missouri</li>
            <li>✓ Veteran & senior discounts</li>
            <li>✓ Environmentally responsible approach</li>
          </ul>
        </div>

        <div className="mt-8">
          <Link href="/services" className="font-black text-red-700 hover:text-red-900">
            View all pest control services →
          </Link>
        </div>
      </section>

      <ConversionBanner />
    </main>
  );
}
"@
  Set-Content -Path "src\app\$($p.slug)\page.tsx" -Value $content -Encoding UTF8
}

# --------------------------------
# More City Pages
# --------------------------------
$cityMap = @{
  "leawood-ks"="Leawood KS"
  "louisburg-ks"="Louisburg KS"
  "harrisonville-mo"="Harrisonville MO"
  "peculiar-mo"="Peculiar MO"
  "spring-hill-ks"="Spring Hill KS"
  "paola-ks"="Paola KS"
  "cleveland-mo"="Cleveland MO"
  "martin-city-mo"="Martin City MO"
  "loch-lloyd-mo"="Loch Lloyd MO"
  "bucyrus-ks"="Bucyrus KS"
  "freeman-mo"="Freeman MO"
  "drexel-mo"="Drexel MO"
}

foreach ($slug in $cityMap.Keys) {
  $city = $cityMap[$slug]

$cityContent = @"
import type { Metadata } from "next";
import Link from "next/link";
import ConversionBanner from "../../components/ConversionBanner";

export const metadata: Metadata = {
  title: "Pest Control $city | All Star Pest Solutions",
  description: "Pest control in $city for ants, termites, spiders, rodents, cockroaches, mosquitoes, bed bugs, wasps, fleas, and more.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Local Pest Control
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Pest Control $city | Local, Experienced, No Contracts
        </h1>

        <p className="mt-6 text-xl font-semibold leading-8 text-slate-700">
          All Star Pest Solutions serves $city with targeted pest control, termite inspections, ant treatments, spider control, rodent service, cockroach control, mosquito service, flea service, bed bug service, and wasp control.
        </p>

        <div className="mt-10 grid gap-6">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Pest Problems in $city</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Homes around $city can deal with ants, spiders, termites, rodents, mosquitoes, cockroaches, wasps, fleas, and occasional invaders. The right treatment depends on the pest, the structure, the season, and the conditions around the property.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Termites, Moisture & Ants Inside Walls</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              If you are seeing carpenter ants or acrobat ants inside walls, that can point to moisture-damaged wood. Moisture issues can also attract termites. Because termites are hidden damage-makers, a termite inspection is a smart move when ants show up inside walls.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Why $city Homeowners Call All Star</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              You get owner-operated service, over 30 years of experience, no mandatory contracts, veteran and senior discounts, and a company that cares about solving the problem instead of just selling a plan.
            </p>
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

      <ConversionBanner />
    </main>
  );
}
"@

  Set-Content -Path "src\app\cities\$slug\page.tsx" -Value $cityContent -Encoding UTF8
}

# --------------------------------
# Blog Hub
# --------------------------------
@"
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kansas City Pest Control Blog | All Star Pest Solutions",
  description: "Pest control tips for Kansas City homeowners including termites, ants, spiders, mosquitoes, rodents, cockroaches, and seasonal pest problems.",
};

const posts = [
  {
    title: "Termite Swarm Season in Kansas City",
    href: "/termite-swarm-season-kansas-city",
    text: "What termite swarmers mean and when to schedule an inspection."
  },
  {
    title: "Why Ants Inside Walls Can Be a Warning Sign",
    href: "/ants-inside-walls-termite-risk-kansas-city",
    text: "Carpenter ants, acrobat ants, moisture, and hidden termite risk."
  },
  {
    title: "Kansas City Spring Pest Checklist",
    href: "/spring-pest-checklist-kansas-city",
    text: "What homeowners should check as pests become active."
  }
];

export default function BlogPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Pest Control Education
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
          Kansas City Pest Control Blog
        </h1>

        <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
          Straight answers for homeowners dealing with termites, ants, spiders, rodents, mosquitoes, cockroaches, and other Kansas City pests.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.href} href={post.href} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-lg">
              <h2 className="text-2xl font-black">{post.title}</h2>
              <p className="mt-3 leading-7 text-slate-700">{post.text}</p>
              <p className="mt-5 font-black text-red-700">Read more →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
"@ | Set-Content -Path "src\app\blog\page.tsx" -Encoding UTF8

# --------------------------------
# Blog Articles
# --------------------------------
New-Item -ItemType Directory -Force -Path "src\app\ants-inside-walls-termite-risk-kansas-city" | Out-Null
New-Item -ItemType Directory -Force -Path "src\app\spring-pest-checklist-kansas-city" | Out-Null

@"
import type { Metadata } from "next";
import ConversionBanner from "../components/ConversionBanner";

export const metadata: Metadata = {
  title: "Ants Inside Walls Kansas City | Termite Risk Warning",
  description: "Why carpenter ants or acrobat ants inside walls can point to moisture problems and hidden termite risk in Kansas City homes.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Ants & Termite Risk</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Ants Inside Walls Can Be a Warning Sign</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Seeing ants inside a wall is not something to brush off. Carpenter ants and acrobat ants are often associated with moisture-damaged wood.</p>
          <p>Those same moisture problems can also attract termites. Ants may also prey on termites, which means ant activity can sometimes appear around a deeper hidden issue.</p>
          <p>If ants are active inside walls, All Star Pest Solutions recommends identifying the ant species, locating moisture conditions, and considering a termite inspection.</p>
        </div>
      </section>
      <ConversionBanner />
    </main>
  );
}
"@ | Set-Content -Path "src\app\ants-inside-walls-termite-risk-kansas-city\page.tsx" -Encoding UTF8

@"
import type { Metadata } from "next";
import ConversionBanner from "../components/ConversionBanner";

export const metadata: Metadata = {
  title: "Kansas City Spring Pest Checklist | All Star Pest Solutions",
  description: "Spring pest checklist for Kansas City homeowners: termites, ants, spiders, mosquitoes, wasps, rodents, moisture, and entry points.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Spring Pest Checklist</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Kansas City Spring Pest Checklist</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Spring is when many Kansas City pests become active again. Termites swarm, ants trail, spiders move, mosquitoes breed, and wasps begin nesting.</p>
          <p>Check around the foundation, crawlspace, basement, garage, windows, door frames, gutters, mulch beds, wood piles, and areas where moisture collects.</p>
          <p>If you see termite swarmers, discarded wings, ants inside walls, mud tubes, rodent droppings, or heavy mosquito activity, it is time to call All Star Pest Solutions.</p>
        </div>
      </section>
      <ConversionBanner />
    </main>
  );
}
"@ | Set-Content -Path "src\app\spring-pest-checklist-kansas-city\page.tsx" -Encoding UTF8

# --------------------------------
# Robots.txt
# --------------------------------
@"
User-agent: *
Allow: /

Sitemap: https://allstarpestkc.com/sitemap.xml
"@ | Set-Content -Path "public\robots.txt" -Encoding UTF8

# --------------------------------
# Sitemap Route
# --------------------------------
@"
import type { MetadataRoute } from "next";

const baseUrl = "https://allstarpestkc.com";

const routes = [
  "",
  "/services",
  "/cities",
  "/faqs",
  "/contact",
  "/reviews",
  "/blog",
  "/termite-inspection-kansas-city",
  "/real-estate-termite-inspections-kansas-city",
  "/carpenter-ant-treatment-kansas-city",
  "/ants-kansas-city",
  "/spider-control-kansas-city",
  "/rodent-control-kansas-city",
  "/cockroach-exterminator-kansas-city",
  "/bed-bug-treatment-kansas-city",
  "/mosquito-control-kansas-city",
  "/wasp-control-kansas-city",
  "/flea-treatment-kansas-city",
  "/termite-swarm-season-kansas-city",
  "/ants-inside-walls-termite-risk-kansas-city",
  "/spring-pest-checklist-kansas-city",
  "/cities/overland-park-ks",
  "/cities/belton-mo",
  "/cities/raymore-mo",
  "/cities/lees-summit-mo",
  "/cities/stilwell-ks",
  "/cities/leawood-ks",
  "/cities/louisburg-ks",
  "/cities/harrisonville-mo",
  "/cities/peculiar-mo",
  "/cities/spring-hill-ks",
  "/cities/paola-ks",
  "/cities/cleveland-mo",
  "/cities/martin-city-mo",
  "/cities/loch-lloyd-mo",
  "/cities/bucyrus-ks",
  "/cities/freeman-mo",
  "/cities/drexel-mo"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : route.startsWith("/cities") ? 0.8 : 0.9,
  }));
}
"@ | Set-Content -Path "src\app\sitemap.ts" -Encoding UTF8

Write-Host "Phase 4 files created. Running build..." -ForegroundColor Green
npm run build
