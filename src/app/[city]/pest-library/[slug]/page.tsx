import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { cities } from "@/data/cities";

type CityRecord = {
  slug: string;
  name: string;
  state: string;
};

type PageProps = {
  params: Promise<{
    city: string;
  }>;
};

const DEFAULT_SERVICES = [
  "General Pest Control",
  "Ant Control",
  "Spider Control",
  "Roach Control",
  "Rodent Control",
  "Wasp & Hornet Treatment",
  "Termite Inspections",
  "Quarterly Pest Protection",
];

const CITY_CONTENT: Record<
  string,
  {
    heroTitle?: string;
    heroText?: string;
    introTitle?: string;
    introText?: string;
    serviceTitle?: string;
    serviceIntro?: string;
    nearbyTitle?: string;
    nearbyIntro?: string;
  }
> = {
  "overland-park": {
    heroTitle: "Professional Pest Control in Overland Park, KS",
  },
  paola: {
    heroTitle: "Pest Control in Paola, KS",
  },
  leawood: {
    heroTitle: "Pest Control in Leawood, KS",
  },
};

function getCityData(citySlug: string) {
  return (cities as CityRecord[]).find((entry) => entry.slug === citySlug);
}

function getNearbyCities(currentCitySlug: string, currentState: string) {
  const sameState = (cities as CityRecord[]).filter(
    (entry) => entry.slug !== currentCitySlug && entry.state === currentState
  );

  const fallback = (cities as CityRecord[]).filter((entry) => entry.slug !== currentCitySlug);

  return (sameState.length ? sameState : fallback).slice(0, 8);
}

function getCityContent(city: CityRecord) {
  const override = CITY_CONTENT[city.slug] ?? {};

  return {
    heroTitle: override.heroTitle ?? `Pest Control in ${city.name}, ${city.state}`,
    heroText:
      override.heroText ??
      `All Star Pest Solutions provides safe, effective pest control in ${city.name}, ${city.state}. We handle ants, spiders, roaches, rodents, wasps, and more with real experience, modern treatment methods, and service built around protecting your home, family, pets, and property.`,
    introTitle: override.introTitle ?? `Experienced Pest Control in ${city.name}, ${city.state}`,
    introText:
      override.introText ??
      `If you are dealing with recurring pest problems in ${city.name}, you need more than guesswork. With over 30 years of experience, All Star Pest Solutions delivers targeted treatments, honest recommendations, and dependable service for homes and businesses across the Kansas City metro.`,
    serviceTitle: override.serviceTitle ?? `Our Pest Control Services in ${city.name}`,
    serviceIntro:
      override.serviceIntro ??
      `We provide practical, professional pest solutions tailored to the pest pressure common in ${city.name}, ${city.state}.`,
    nearbyTitle: override.nearbyTitle ?? "Nearby Service Areas",
    nearbyIntro:
      override.nearbyIntro ??
      `We also provide pest control service in nearby communities throughout ${city.state}.`,
  };
}

export async function generateStaticParams() {
  return (cities as CityRecord[]).map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCityData(city);

  if (!cityData) {
    return {
      title: "Page Not Found | All Star Pest Solutions",
    };
  }

  const content = getCityContent(cityData);
  const canonical = `https://www.allstarpestkc.com/${cityData.slug}`;

  return {
    title: `${content.heroTitle} | All Star Pest Solutions`,
    description: `Need pest control in ${cityData.name}, ${cityData.state}? All Star Pest Solutions provides safe, effective service backed by over 30 years of experience.`,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${content.heroTitle} | All Star Pest Solutions`,
      description: `Need pest control in ${cityData.name}, ${cityData.state}? All Star Pest Solutions provides safe, effective service backed by over 30 years of experience.`,
      url: canonical,
      siteName: "All Star Pest Solutions",
      type: "website",
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city } = await params;
  const cityData = getCityData(city);

  if (!cityData) {
    notFound();
  }

  const content = getCityContent(cityData);
  const nearbyCities = getNearbyCities(cityData.slug, cityData.state);

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
            item: "https://www.allstarpestkc.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: cityData.name,
            item: `https://www.allstarpestkc.com/${cityData.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        name: `Pest Control in ${cityData.name}, ${cityData.state}`,
        serviceType: "Pest Control",
        provider: {
          "@id": "https://www.allstarpestkc.com/#localbusiness",
        },
        areaServed: {
          "@type": "City",
          name: `${cityData.name}, ${cityData.state}`,
        },
        description: content.heroText,
      },
    ],
  };

  return (
    <main className="bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-red-700">
              {cityData.name}, {cityData.state}
            </div>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-black md:text-6xl lg:text-7xl">
              {content.heroTitle}
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-2xl font-semibold leading-10 text-black md:text-3xl md:leading-[1.45]">
              {content.heroText}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-black uppercase tracking-[0.08em] text-white transition hover:bg-red-700"
              >
                Free Inspection
              </Link>

              <a
                href="tel:+19137387827"
                className="inline-flex items-center justify-center rounded-xl border-2 border-black px-8 py-4 text-lg font-black uppercase tracking-[0.08em] text-black transition hover:bg-black hover:text-white"
              >
                Call (913) 738-7827
              </a>
            </div>

            <p className="mt-6 text-xl font-bold text-black">
              30+ Years of Experience — Not 30 Days of Guesswork
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-black md:text-5xl">
              {content.introTitle}
            </h2>

            <p className="mt-6 text-2xl font-medium leading-10 text-black md:text-[1.75rem] md:leading-[1.55]">
              {content.introText}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-black md:text-5xl">
              {content.serviceTitle}
            </h2>

            <p className="mt-5 text-2xl font-medium leading-10 text-black md:text-[1.75rem] md:leading-[1.55]">
              {content.serviceIntro}
            </p>
          </div>

          <ul className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            {DEFAULT_SERVICES.map((service) => (
              <li
                key={service}
                className="rounded-2xl border border-zinc-200 bg-white px-6 py-5 text-xl font-bold text-black shadow-sm"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-black md:text-5xl">
              {content.nearbyTitle}
            </h2>

            <p className="mt-5 text-2xl font-medium leading-10 text-black md:text-[1.75rem] md:leading-[1.55]">
              {content.nearbyIntro}
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
            {nearbyCities.map((nearbyCity) => (
              <Link
                key={nearbyCity.slug}
                href={`/${nearbyCity.slug}`}
                className="rounded-full border-2 border-zinc-300 bg-white px-5 py-3 text-lg font-bold text-black transition hover:border-red-600 hover:text-red-700"
              >
                {nearbyCity.name}, {nearbyCity.state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Need Pest Control in {cityData.name}?
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-2xl font-semibold leading-10 text-white/90 md:text-3xl md:leading-[1.45]">
            Get experienced service, honest recommendations, and results you can trust.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+19137387827"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-black uppercase tracking-[0.08em] text-white transition hover:bg-red-700"
            >
              Call Now
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-black uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-black"
            >
              Request Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
