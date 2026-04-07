import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { pests } from "@/data/pests.generated";
import { cities } from "@/data/cities";

type PestRecord = {
  slug: string;
  name?: string;
  image?: string;
  imageUrl?: string;
  photo?: string;
  photoUrl?: string;
  heroImage?: string;
  heroImageUrl?: string;
  description?: string;
  shortDescription?: string;
  summary?: string;
  overview?: string;
  about?: string;
  longDescription?: string;
  details?: string;
  biology?: string;
  appearance?: string;
  identification?: string;
  size?: string;
  behavior?: string;
  habits?: string;
  activity?: string;
  habitat?: string;
  whereTheyLive?: string;
  environment?: string;
  risk?: string;
  threat?: string;
  damage?: string;
  concern?: string;
};

type PageProps = {
  params: Promise<{
    city: string;
    slug: string;
  }>;
};

const NON_TARGET_POLLINATORS = new Set(["honey-bee", "bumble-bee", "mason-bee"]);

function titleCase(input: string) {
  return input.replace(/\b\w/g, (char) => char.toUpperCase());
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function isNonTargetPollinator(slug: string) {
  return NON_TARGET_POLLINATORS.has(slug);
}

function pluralizeName(name: string) {
  const trimmed = name.trim();
  const lower = trimmed.toLowerCase();

  const irregulars: Record<string, string> = {
    "honey bee": "Honey Bees",
    "bumble bee": "Bumble Bees",
    "mason bee": "Mason Bees",
    mouse: "Mice",
    goose: "Geese",
  };

  if (irregulars[lower]) return irregulars[lower];
  if (lower.endsWith("s")) return trimmed;
  if (lower.endsWith("y") && !/[aeiou]y$/i.test(lower)) return `${trimmed.slice(0, -1)}ies`;

  return `${trimmed}s`;
}

function smartPluralizeSentence(text: string, singularName: string, pluralName: string) {
  if (!text?.trim()) return text;

  let result = text.trim();
  const singularEscaped = escapeRegExp(singularName);
  const pluralEscaped = escapeRegExp(pluralName);

  if (singularName.trim()) {
    result = result.replace(new RegExp(`\\b${singularEscaped}\\b`, "gi"), pluralName);
  }

  result = result.replace(/\bis a pest\b/gi, "are pests");
  result = result.replace(/\bis a common pest\b/gi, "are common pests");
  result = result.replace(/\bis an occasional invader\b/gi, "are occasional invaders");
  result = result.replace(/\bis often found\b/gi, "are often found");
  result = result.replace(/\bis commonly found\b/gi, "are commonly found");
  result = result.replace(/\bis known to\b/gi, "are known to");
  result = result.replace(/\bit is\b/gi, "they are");
  result = result.replace(/\bit can\b/gi, "they can");
  result = result.replace(/\bit may\b/gi, "they may");
  result = result.replace(/\bit has\b/gi, "they have");
  result = result.replace(/\bthis pest\b/gi, pluralName.toLowerCase());
  result = result.replace(new RegExp(`^${pluralEscaped} is\\b`, "i"), `${pluralName} are`);
  result = result.replace(new RegExp(`^${pluralEscaped} was\\b`, "i"), `${pluralName} were`);

  return result;
}

function sentenceCase(text: string) {
  if (!text?.trim()) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getPestImageSrc(pest: PestRecord) {
  return (
    pest.image ||
    pest.imageUrl ||
    pest.photo ||
    pest.photoUrl ||
    pest.heroImage ||
    pest.heroImageUrl ||
    "/images/pest-library/default-pest.png"
  );
}

function getFactValue(pest: PestRecord, keys: (keyof PestRecord)[], fallback: string) {
  for (const key of keys) {
    const value = pest[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return fallback;
}

function getPestDescription(
  pest: PestRecord,
  cityName: string,
  cityState: string,
  pluralName: string
) {
  if (isNonTargetPollinator(pest.slug)) {
    return `${pluralName} in ${cityName}, ${cityState} are beneficial pollinators and should not be treated as routine target pests. If they are nesting too close to a home, structure, doorway, patio, or other high-traffic area, the best recommendation is live relocation or contacting a local beekeeper or humane removal specialist.`;
  }

  const raw =
    pest.description ||
    pest.shortDescription ||
    pest.summary ||
    pest.overview ||
    `${pluralName} can become a problem in and around homes and structures.`;

  const cleaned = smartPluralizeSentence(raw, pest.name ?? "", pluralName);

  return `${sentenceCase(cleaned)} In ${cityName}, ${cityState}, ${pluralName.toLowerCase()} can become active around homes, foundations, garages, landscaping, crawl spaces, and entry points depending on the season and property conditions.`;
}

function getAboutText(
  pest: PestRecord,
  cityName: string,
  cityState: string,
  pluralName: string
) {
  if (isNonTargetPollinator(pest.slug)) {
    return `${pluralName} are beneficial pollinators that play an important role in the environment around ${cityName}, ${cityState}. When they are found near a home or structure, the goal should be correct identification and safe live relocation whenever possible rather than standard treatment.`;
  }

  const raw =
    pest.about ||
    pest.longDescription ||
    pest.details ||
    pest.description ||
    `${pluralName} may be encountered in and around homes or structures and should be identified correctly so the right strategy can be used.`;

  return smartPluralizeSentence(raw, pest.name ?? "", pluralName);
}

function getCityLinks(currentCitySlug: string, pestSlug: string) {
  return cities
    .filter((city) => city.slug !== currentCitySlug)
    .slice(0, 8)
    .map((city) => ({
      href: `/${city.slug}/pest-library/${pestSlug}`,
      label: `${city.name}, ${city.state}`,
    }));
}

export async function generateStaticParams() {
  return cities.flatMap((city) =>
    (pests as PestRecord[]).map((pest) => ({
      city: city.slug,
      slug: pest.slug,
    }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, slug } = await params;

  const cityData = cities.find((entry) => entry.slug === city);
  const pest = (pests as PestRecord[]).find((entry) => entry.slug === slug);

  if (!cityData || !pest) {
    return {
      title: "Page Not Found | All Star Pest Solutions",
    };
  }

  const pestName = pest.name ?? titleCase(slug.replace(/-/g, " "));
  const pluralName = pluralizeName(pestName);
  const beneficial = isNonTargetPollinator(pest.slug);

  const title = `${pluralName} in ${cityData.name}, ${cityData.state} | All Star Pest Solutions`;
  const description = beneficial
    ? `${pluralName} in ${cityData.name}, ${cityData.state} are beneficial pollinators. Learn when to avoid treatment and when to contact a beekeeper or live removal specialist.`
    : `Need help with ${pluralName.toLowerCase()} in ${cityData.name}, ${cityData.state}? All Star Pest Solutions provides safe, modern pest solutions for homes and businesses across the Kansas City metro.`;

  const canonical = `https://allstarpestkc.com/${cityData.slug}/pest-library/${pest.slug}`;
  const imageUrl = getPestImageSrc(pest);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "All Star Pest Solutions",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${pluralName} in ${cityData.name}, ${cityData.state}`,
        },
      ],
    },
  };
}

export default async function CityPestPage({ params }: PageProps) {
  const { city, slug } = await params;

  const cityData = cities.find((entry) => entry.slug === city);
  const pest = (pests as PestRecord[]).find((entry) => entry.slug === slug);

  if (!cityData || !pest) {
    notFound();
  }

  const pestName = pest.name ?? titleCase(slug.replace(/-/g, " "));
  const pluralName = pluralizeName(pestName);
  const beneficial = isNonTargetPollinator(pest.slug);

  const imageSrc = getPestImageSrc(pest);
  const description = getPestDescription(pest, cityData.name, cityData.state, pluralName);
  const aboutText = getAboutText(pest, cityData.name, cityData.state, pluralName);

  const biology = getFactValue(
    pest,
    ["biology", "appearance", "identification", "size"],
    beneficial
      ? `${pluralName} vary by species, so correct identification matters before any action is taken.`
      : `${pluralName} should be correctly identified so the right treatment strategy can be used.`
  );

  const behavior = getFactValue(
    pest,
    ["behavior", "habits", "activity"],
    beneficial
      ? `${pluralName} are active pollinators and may be seen around flowers, landscaping, eaves, sheds, fencing, or other sheltered areas.`
      : `${pluralName} may be found around foundations, entry points, voids, food sources, moisture-prone areas, or landscaping depending on the species.`
  );

  const habitat = getFactValue(
    pest,
    ["habitat", "whereTheyLive", "environment"],
    beneficial
      ? `${pluralName} may nest or shelter in ground areas, protected cavities, wood openings, or other quiet spaces around the property.`
      : `${pluralName} can live indoors, outdoors, or both depending on shelter, moisture, food availability, and seasonal conditions.`
  );

  const risk = getFactValue(
    pest,
    ["risk", "threat", "damage", "concern"],
    beneficial
      ? `These are beneficial pollinators. The main concern is location near doors, patios, play areas, sidewalks, or structural entry points where human contact becomes more likely.`
      : `${pluralName} can create nuisance issues, contamination concerns, bites or stings, structural damage, or repeat infestations if the source is not addressed correctly.`
  );

  const nearbyCityLinks = getCityLinks(cityData.slug, pest.slug);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://allstarpestkc.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: cityData.name,
            item: `https://allstarpestkc.com/${cityData.slug}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Pest Library",
            item: `https://allstarpestkc.com/pest-library`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: pluralName,
            item: `https://allstarpestkc.com/${cityData.slug}/pest-library/${pest.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        name: beneficial
          ? `${pluralName} Identification in ${cityData.name}, ${cityData.state}`
          : `${pluralName} Solutions in ${cityData.name}, ${cityData.state}`,
        serviceType: beneficial ? "Pest Identification" : "Pest Solutions",
        provider: {
          "@type": "LocalBusiness",
          name: "All Star Pest Solutions",
          telephone: "+1-913-738-7827",
          url: "https://allstarpestkc.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "210 W. Cleveland St",
            addressLocality: "Cleveland",
            addressRegion: "MO",
            postalCode: "64734",
            addressCountry: "US",
          },
        },
        areaServed: {
          "@type": "City",
          name: `${cityData.name}, ${cityData.state}`,
        },
        description,
      },
    ],
  };

  return (
    <main className="bg-white text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-red-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,210,0,0.18),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:px-8 lg:py-24">
          <div className="relative z-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-yellow-400/40 bg-yellow-400/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
                {cityData.name}, {cityData.state}
              </span>

              {beneficial && (
                <span className="rounded-full border border-emerald-400/40 bg-emerald-400/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                  Non-Target / Beneficial Pollinator
                </span>
              )}
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              {pluralName} in {cityData.name}, {cityData.state}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-200 sm:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Get a Free Inspection
              </Link>

              <a
                href="tel:+19137387827"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Call (913) 738-7827
              </a>
            </div>
          </div>

          <div className="relative z-10 flex justify-center md:justify-end">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-red-500/10" />
              <Image
                src={imageSrc}
                alt={`${pluralName} in ${cityData.name}, ${cityData.state}`}
                width={700}
                height={700}
                className="relative z-10 h-auto w-full max-w-md object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black tracking-tight text-zinc-950">
              About {pluralName} in {cityData.name}
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-700">{aboutText}</p>

            {!beneficial && (
              <p className="mt-4 text-base leading-8 text-zinc-700">
                In {cityData.name}, {cityData.state}, seasonal activity, moisture, food sources,
                landscaping, crawl spaces, garages, attics, and structural gaps can all contribute
                to recurring pest pressure. Proper identification and a targeted plan make a big
                difference.
              </p>
            )}

            {beneficial && (
              <p className="mt-4 text-base leading-8 text-zinc-700">
                When {pluralName.toLowerCase()} are active near a home in {cityData.name}, it is
                important to separate beneficial pollinator activity from a true structural pest
                issue. Safe relocation is usually the best path when human contact is the concern.
              </p>
            )}
          </div>

          <div className="rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-yellow-50 p-8 shadow-sm">
            <h2 className="text-2xl font-black tracking-tight text-zinc-950">
              Need Help in {cityData.name}?
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-700">
              All Star Pest Solutions proudly serves {cityData.name}, {cityData.state} and the
              surrounding Kansas City metro with safe, modern, effective pest solutions.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="tel:+19137387827"
                className="block rounded-2xl bg-zinc-950 px-5 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-red-700"
              >
                Call Now
              </a>

              <Link
                href="/contact"
                className="block rounded-2xl border border-zinc-300 px-5 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-zinc-950 transition hover:border-red-500 hover:text-red-700"
              >
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-zinc-950">
              Quick Facts About {pluralName}
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              What homeowners in {cityData.name}, {cityData.state} should know.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-3xl border border-red-200 bg-gradient-to-br from-white via-red-50 to-yellow-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
              Biology / ID
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-700">{biology}</p>
          </article>

          <article className="rounded-3xl border border-red-200 bg-gradient-to-br from-white via-red-50 to-yellow-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
              Behavior
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-700">{behavior}</p>
          </article>

          <article className="rounded-3xl border border-red-200 bg-gradient-to-br from-white via-red-50 to-yellow-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
              Habitat
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-700">{habitat}</p>
          </article>

          <article className="rounded-3xl border border-red-200 bg-gradient-to-br from-white via-red-50 to-yellow-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
              Main Concern
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-700">{risk}</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
          <h2 className="text-2xl font-black tracking-tight text-zinc-950">
            {pluralName} Are Common Across the KC Metro
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-zinc-700">
            Looking for information about {pluralName.toLowerCase()} in nearby areas? Browse
            city-specific pages below to find the same pest in surrounding service areas.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {nearbyCityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-800 transition hover:border-red-500 hover:text-red-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl bg-zinc-950 px-8 py-10 text-white">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight">
                Seeing {pluralName} in Your Home or Around Your Property?
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-300">
                {beneficial
                  ? `If ${pluralName.toLowerCase()} are creating a concern near entry points, patios, decks, or other living areas in ${cityData.name}, the safest next step is correct identification and guidance on live relocation options.`
                  : `If you are dealing with ${pluralName.toLowerCase()} in ${cityData.name}, ${cityData.state}, All Star Pest Solutions can inspect the issue, identify the source, and recommend the right solution for your home or business.`}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+19137387827"
                className="rounded-2xl bg-yellow-400 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-black transition hover:bg-yellow-300"
              >
                Call (913) 738-7827
              </a>

              <Link
                href="/contact"
                className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-white/15"
              >
                Book a Free Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}