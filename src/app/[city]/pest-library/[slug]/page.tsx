import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { pests } from "@/data/pests.generated";
import { cities } from "@/data/cities";

type PestFacts = {
  biology?: string;
  behavior?: string;
  attractant?: string;
  lifecycle?: string;
  signs?: string;
  damage?: string;
  seasonality?: string;
  prevention?: string;
  monitoring?: string;
};

type PestRecord = {
  slug: string;
  name?: string;
  risk?: string;
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
  threat?: string;
  damage?: string;
  concern?: string;
  facts?: PestFacts;
};

type RiskLevel = "High" | "Medium" | "Low";

type PageProps = {
  params: Promise<{
    city: string;
    slug: string;
  }>;
};

const siteUrl = "https://allstarpestkc.com";

function titleCase(input: string) {
  return input.replace(/\b\w/g, (char) => char.toUpperCase());
}

function pluralizeWord(word: string) {
  const lower = word.toLowerCase();

  const irregulars: Record<string, string> = {
    mouse: "mice",
    goose: "geese",
  };

  if (irregulars[lower]) return irregulars[lower];
  if (lower.endsWith("s")) return lower;
  if (lower.endsWith("y") && !/[aeiou]y$/i.test(lower)) {
    return `${lower.slice(0, -1)}ies`;
  }

  return `${lower}s`;
}

function singularizeWord(word: string) {
  const lower = word.toLowerCase();

  const irregulars: Record<string, string> = {
    mice: "mouse",
    geese: "goose",
  };

  if (irregulars[lower]) return irregulars[lower];
  if (lower.endsWith("ies")) {
    return `${lower.slice(0, -3)}y`;
  }
  if (lower.endsWith("s") && !lower.endsWith("ss")) {
    return lower.slice(0, -1);
  }

  return lower;
}

function pluralizeName(name: string) {
  const trimmed = name.trim();
  const parts = trimmed.split(" ");

  if (parts.length === 0) return trimmed;

  const last = parts[parts.length - 1];
  parts[parts.length - 1] = titleCase(pluralizeWord(last));

  return parts.join(" ");
}

function slugToWords(slug: string) {
  return slug.split("-").filter(Boolean);
}

function wordsToSlug(words: string[]) {
  return words.join("-");
}

function getSlugVariants(slug: string) {
  const normalized = slug.toLowerCase().trim();
  const words = slugToWords(normalized);

  if (words.length === 0) {
    return [normalized];
  }

  const exact = wordsToSlug(words);

  const singularWords = [...words];
  singularWords[singularWords.length - 1] = singularizeWord(
    singularWords[singularWords.length - 1]
  );

  const pluralWords = [...words];
  pluralWords[pluralWords.length - 1] = pluralizeWord(
    pluralWords[pluralWords.length - 1]
  );

  return Array.from(
    new Set([exact, wordsToSlug(singularWords), wordsToSlug(pluralWords)])
  );
}

function getPestName(pest: PestRecord, slug: string) {
  return pest.name?.trim() || titleCase(slug.replace(/-/g, " "));
}

function getText(
  pest: PestRecord,
  keys: (keyof PestRecord)[],
  fallback: string
) {
  for (const key of keys) {
    const value = pest[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return fallback;
}

function getFactText(
  pest: PestRecord,
  keys: (keyof PestFacts)[],
  fallback: string
) {
  if (!pest.facts) return fallback;

  for (const key of keys) {
    const value = pest.facts[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return fallback;
}

function findPestBySlug(slug: string) {
  const pestList = pests as PestRecord[];
  const variants = getSlugVariants(slug);

  for (const variant of variants) {
    const match = pestList.find((entry) => entry.slug === variant);
    if (match) {
      return match;
    }
  }

  return undefined;
}

function getIntroText(
  pest: PestRecord,
  pluralName: string,
  cityName: string,
  state: string
) {
  const fallback = `${pluralName} can become a problem in and around homes and businesses. In ${cityName}, ${state}, these pest issues are often tied to weather, moisture, structural gaps, and nearby harborage.`;

  const sourceText = getText(
    pest,
    ["shortDescription", "summary", "overview"],
    ""
  );

  if (!sourceText) {
    return fallback;
  }

  return `${sourceText} In ${cityName}, ${state}, these pest issues are often tied to weather, moisture, structural gaps, and nearby harborage.`;
}

function getAboutText(pluralName: string, cityName: string, state: string) {
  return `${pluralName} are a problem that should be identified correctly so the right treatment plan can be used. In ${cityName}, ${state}, the right solution depends on the species involved, where activity is showing up, what is attracting it, and how long the issue has been building.`;
}

function getBiologyText(pest: PestRecord, pluralName: string) {
  return getFactText(
    pest,
    ["biology"],
    getText(
      pest,
      ["biology", "appearance", "identification", "size"],
      `${pluralName} should be identified correctly so the right treatment method can be used.`
    )
  );
}

function getBehaviorText(pest: PestRecord, pluralName: string) {
  return getFactText(
    pest,
    ["behavior"],
    getText(
      pest,
      ["behavior", "habits", "activity"],
      `${pluralName} may be found around foundations, entry points, voids, food sources, moisture-prone areas, and landscaping depending on the species and time of year.`
    )
  );
}

function getHabitatText(pest: PestRecord, pluralName: string) {
  return getText(
    pest,
    ["habitat", "whereTheyLive", "environment"],
    `${pluralName} can live indoors, outdoors, or both depending on available food, moisture, shelter, and seasonal conditions.`
  );
}

function getConcernText(pest: PestRecord, pluralName: string) {
  const slug = pest.slug.toLowerCase();

  const concernOverrides: Record<string, string> = {
    "carpenter-ant":
      "Carpenter ants can excavate galleries in damp, damaged, or softened wood and may worsen structural problems over time. When carpenter ants are found inside walls, a termite inspection is strongly recommended because the same moisture conditions that support ant activity can also support hidden termite damage.",
    "acrobat-ant":
      "Acrobat ants often nest in damp or decayed wood, wall voids, and structural gaps. If acrobat ants are found inside walls, a termite inspection is strongly recommended because underlying moisture damage may also create conditions favorable to hidden termite activity.",
    termite:
      "Termites are a hidden structural threat that can cause extensive damage before any visible signs appear. Damage often occurs behind walls, under flooring, and inside structural wood members long before homeowners realize there is a problem.",
    "subterranean-termite":
      "Subterranean termites are a hidden structural threat that can cause extensive damage before any visible signs appear. Damage often occurs behind walls, under flooring, and inside structural wood members long before homeowners realize there is a problem.",
    "termite-swarmer":
      "Termite swarmers can be an early warning sign of an active termite colony nearby or inside the structure. A termite inspection should be scheduled quickly because termites are a hidden danger and major damage can happen long before it becomes visible.",
  };

  if (concernOverrides[slug]) {
    return concernOverrides[slug];
  }

  return getFactText(
    pest,
    ["damage"],
    getText(
      pest,
      ["threat", "damage", "concern"],
      `${pluralName} can create nuisance issues, contamination concerns, structural damage, bites, stings, or repeat infestations if the source is not identified and addressed correctly.`
    )
  );
}

function getDisplayRisk(pest: PestRecord): RiskLevel {
  const slug = pest.slug.toLowerCase();

  const highRiskSlugs = new Set([
    "acrobat-ant",
    "carpenter-ant",
    "termite",
    "termite-swarmer",
    "subterranean-termite",
    "formosan-termite",
    "drywood-termite",
    "brown-recluse",
    "black-widow",
    "brown-widow",
    "tick",
    "bed-bug",
    "rat",
    "roof-rat",
    "house-mouse",
    "deer-mouse",
    "german-cockroach",
    "american-cockroach",
    "brown-banded-cockroach",
    "oriental-cockroach",
    "paper-wasp",
    "red-wasp",
    "yellowjacket",
    "bald-faced-hornet",
    "european-hornet",
    "hornet",
    "wasp",
  ]);

  const mediumRiskSlugs = new Set([
    "argentine-ant",
    "odorous-house-ant",
    "pavement-ant",
    "pharaoh-ant",
    "fire-ant",
    "carpenter-bee",
    "bumble-bee",
    "honey-bee",
    "flea",
    "boxelder-bug",
    "asian-beetle",
    "lady-bug",
  ]);

  if (highRiskSlugs.has(slug)) {
    return "High";
  }

  if (mediumRiskSlugs.has(slug)) {
    return "Medium";
  }

  const combined = [
    pest.threat,
    pest.damage,
    pest.concern,
    pest.facts?.damage,
    pest.facts?.monitoring,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (
    combined.includes("structural damage") ||
    combined.includes("health concerns") ||
    combined.includes("higher concern") ||
    combined.includes("stinging risk") ||
    combined.includes("bites") ||
    combined.includes("wiring") ||
    combined.includes("contaminate food") ||
    combined.includes("moisture damage") ||
    combined.includes("wood deterioration")
  ) {
    return "High";
  }

  if (
    combined.includes("nuisance") ||
    combined.includes("contamination") ||
    combined.includes("structural voids")
  ) {
    return "Medium";
  }

  return "Low";
}

function getRiskBadgeClasses(risk: RiskLevel) {
  switch (risk) {
    case "High":
      return "border-red-300 bg-red-50 text-red-700";
    case "Medium":
      return "border-yellow-300 bg-yellow-50 text-yellow-700";
    default:
      return "border-emerald-300 bg-emerald-50 text-emerald-700";
  }
}

export async function generateStaticParams() {
  return cities.flatMap((city) =>
    (pests as PestRecord[]).map((pest) => ({
      city: city.slug,
      slug: pest.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city, slug } = await params;

  const cityData = cities.find((entry) => entry.slug === city);
  const pest = findPestBySlug(slug);

  if (!cityData || !pest) {
    return {
      title: "Page Not Found | All Star Pest Solutions",
    };
  }

  const pestName = getPestName(pest, pest.slug);
  const pluralName = pluralizeName(pestName);

  return {
    title: `${pluralName} Control in ${cityData.name}, ${cityData.state} | All Star Pest Solutions`,
    description: `Need help with ${pluralName.toLowerCase()} in ${cityData.name}, ${cityData.state}? All Star Pest Solutions provides safe, effective pest solutions backed by 30+ years of experience. No contracts. Call (913) 738-7827.`,
    alternates: {
      canonical: `${siteUrl}/${cityData.slug}/pest-library/${pest.slug}`,
    },
  };
}

export default async function CityPestPage({ params }: PageProps) {
  const { city, slug } = await params;

  const cityData = cities.find((entry) => entry.slug === city);
  const pest = findPestBySlug(slug);

  if (!cityData || !pest) {
    notFound();
  }

  if (slug !== pest.slug) {
    permanentRedirect(`/${cityData.slug}/pest-library/${pest.slug}`);
  }

  const pestName = getPestName(pest, pest.slug);
  const pluralName = pluralizeName(pestName);
  const displayRisk = getDisplayRisk(pest);

  const intro = getIntroText(pest, pluralName, cityData.name, cityData.state);
  const about = getAboutText(pluralName, cityData.name, cityData.state);
  const biology = getBiologyText(pest, pluralName);
  const behavior = getBehaviorText(pest, pluralName);
  const habitat = getHabitatText(pest, pluralName);
  const concern = getConcernText(pest, pluralName);

  const nearbyCityLinks = cities
    .filter((entry) => entry.slug !== cityData.slug)
    .slice(0, 8)
    .map((entry) => ({
      href: `/${entry.slug}/pest-library/${pest.slug}`,
      label: `${entry.name}, ${entry.state}`,
    }));

  return (
    <main className="bg-white text-black">
      <section className="bg-gradient-to-br from-black via-zinc-950 to-red-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-4 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
                {cityData.name}, {cityData.state}
              </span>
              <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                30+ Years Experience
              </span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                No Contracts
              </span>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${getRiskBadgeClasses(
                  displayRisk
                )}`}
              >
                {displayRisk} Risk
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              {pluralName} Control in {cityData.name}, {cityData.state}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 sm:text-xl">
              {intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+19137387827"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-red-700"
              >
                Call (913) 738-7827
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-white/15"
              >
                Get a Free Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black tracking-tight text-black">
              About {pluralName} in {cityData.name}
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-900">{about}</p>
          </div>

          <div className="rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-yellow-50 p-8 shadow-sm">
            <h2 className="text-2xl font-black tracking-tight text-black">
              Need Help in {cityData.name}?
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-900">
              All Star Pest Solutions provides pest solutions in {cityData.name},{" "}
              {cityData.state} backed by over 30 years of hands-on experience,
              modern treatment methods, and direct owner-level service.
            </p>

            <ul className="mt-5 space-y-3 text-base font-semibold leading-7 text-gray-900">
              <li>• Over 30 years of real field experience</li>
              <li>• No mandatory contracts</li>
              <li>• Safe, modern treatment methods</li>
              <li>• Locally owned and operated</li>
              <li>• You speak directly to the owner/technician</li>
            </ul>

            <div className="mt-6 space-y-3">
              <a
                href="tel:+19137387827"
                className="block rounded-2xl bg-zinc-950 px-5 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-red-700"
              >
                Call Now
              </a>

              <Link
                href="/contact"
                className="block rounded-2xl border border-zinc-300 px-5 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-black transition hover:border-red-500 hover:text-red-700"
              >
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-black tracking-tight text-black">
            Quick Facts About {pluralName}
          </h2>
          <p className="mt-2 text-base font-medium text-gray-800">
            What property owners in {cityData.name}, {cityData.state} should
            know.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-3xl border border-red-200 bg-gradient-to-br from-white via-red-50 to-yellow-50 p-6 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
              Biology / ID
            </h3>
            <p className="mt-3 text-base leading-8 text-gray-900">{biology}</p>
          </article>

          <article className="rounded-3xl border border-red-200 bg-gradient-to-br from-white via-red-50 to-yellow-50 p-6 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
              Behavior
            </h3>
            <p className="mt-3 text-base leading-8 text-gray-900">{behavior}</p>
          </article>

          <article className="rounded-3xl border border-red-200 bg-gradient-to-br from-white via-red-50 to-yellow-50 p-6 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
              Habitat
            </h3>
            <p className="mt-3 text-base leading-8 text-gray-900">{habitat}</p>
          </article>

          <article className="rounded-3xl border border-red-200 bg-gradient-to-br from-white via-red-50 to-yellow-50 p-6 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
              Main Concern
            </h3>
            <p className="mt-3 text-base leading-8 text-gray-900">{concern}</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
          <h2 className="text-2xl font-black tracking-tight text-black">
            Related Links
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/${cityData.slug}`}
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-black transition hover:border-red-500 hover:text-red-700"
            >
              {cityData.name} Pest Solutions
            </Link>

            <Link
              href={`/pest-library/${pest.slug}`}
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-black transition hover:border-red-500 hover:text-red-700"
            >
              General {pluralName} Page
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-black transition hover:border-red-500 hover:text-red-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black tracking-tight text-black">
            {pluralName} Problems in Nearby Areas
          </h2>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-900">
            Looking for information about {pluralName.toLowerCase()} in nearby
            service areas? Browse more city-specific pages below.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {nearbyCityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-black transition hover:border-red-500 hover:text-red-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}