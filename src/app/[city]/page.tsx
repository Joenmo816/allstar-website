import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities } from "@/data/cities";
import { pests } from "@/data/pests.generated";

type PageProps = {
  params: Promise<{
    city: string;
  }>;
};

type PestRecord = {
  slug: string;
  name?: string;
  description?: string;
  shortDescription?: string;
  summary?: string;
  overview?: string;
};

const siteUrl = "https://allstarpestkc.com";

function titleCase(input: string) {
  return input.replace(/\b\w/g, (char) => char.toUpperCase());
}

function getPestName(pest: PestRecord) {
  return pest.name?.trim() || titleCase(pest.slug.replace(/-/g, " "));
}

function getPestSummary(pest: PestRecord, cityName: string, cityState: string) {
  const pestName = getPestName(pest);
  const raw =
    pest.description ||
    pest.shortDescription ||
    pest.summary ||
    pest.overview ||
    `${pestName} can become a problem in and around homes and businesses.`;

  return `${raw} In ${cityName}, ${cityState}, issues are often tied to weather, moisture, landscaping, and structural entry points.`;
}

function getFeaturedPests() {
  const preferred = [
    "ants",
    "spiders",
    "rodents",
    "cockroaches",
    "termites",
    "wasps",
    "mosquitoes",
    "fleas",
  ];

  const pestMap = new Map((pests as PestRecord[]).map((pest) => [pest.slug, pest]));
  const ordered = preferred
    .map((slug) => pestMap.get(slug))
    .filter(Boolean) as PestRecord[];

  const fallback = (pests as PestRecord[]).filter((pest) => !preferred.includes(pest.slug));

  return [...ordered, ...fallback].slice(0, 8);
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const cityData = cities.find((entry) => entry.slug === city);

  if (!cityData) {
    return {
      title: "Page Not Found | All Star Pest Solutions",
    };
  }

  const title = `Pest Control in ${cityData.name}, ${cityData.state} | All Star Pest Solutions`;
  const description = `Need pest control in ${cityData.name}, ${cityData.state}? All Star Pest Solutions provides safe, effective service for ants, spiders, rodents, termites, and more. 30+ years experience. No contracts.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${cityData.slug}`,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city } = await params;
  const cityData = cities.find((entry) => entry.slug === city);

  if (!cityData) {
    notFound();
  }

  const featuredPests = getFeaturedPests();

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
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Pest Control in {cityData.name}, {cityData.state}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 sm:text-xl">
              All Star Pest Solutions provides safe, effective pest control in {cityData.name}, {cityData.state} for ants, spiders, rodents, termites, and more. Locally owned service backed by over 30 years of real experience.
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
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black tracking-tight text-black">
              Local Pest Control in {cityData.name}
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-900">
              Homes and businesses in {cityData.name}, {cityData.state} can deal with ants, spiders, rodents, termites, and other pest issues throughout the year depending on weather, moisture, food sources, landscaping, and structural conditions.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-900">
              Proper identification matters. The right solution depends on the pest, where activity is happening, what is attracting it, and how long the issue has been building.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-900">
              We provide direct owner-level service, modern treatment methods, and real-world experience without locking customers into mandatory contracts.
            </p>
          </div>

          <div className="rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-yellow-50 p-8 shadow-sm">
            <h2 className="text-2xl font-black tracking-tight text-black">
              Why All Star Pest Solutions?
            </h2>

            <ul className="mt-5 space-y-3 text-base font-semibold leading-7 text-gray-900">
              <li>• Over 30 years of real pest control experience</li>
              <li>• No mandatory contracts</li>
              <li>• Locally owned and operated</li>
              <li>• Kansas &amp; Missouri licensed</li>
              <li>• Safe, modern treatment methods</li>
              <li>• You talk directly to the owner/technician</li>
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
            Common Pests in {cityData.name}, {cityData.state}
          </h2>
          <p className="mt-2 text-base font-medium text-gray-800">
            Browse city-specific pest pages below.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featuredPests.map((pest) => {
            const pestName = getPestName(pest);

            return (
              <Link
                key={pest.slug}
                href={`/${cityData.slug}/pest-library/${pest.slug}`}
                className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-black tracking-tight text-black group-hover:text-red-700">
                  {pestName}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-800">
                  {getPestSummary(pest, cityData.name, cityData.state)}
                </p>

                <div className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-red-700">
                  Learn More
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
