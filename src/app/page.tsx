import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import EcoCommitment from "@/app/components/EcoCommitment";

const siteUrl = "https://allstarpestkc.com";

const serviceCities = [
  { name: "Belton", slug: "belton" },
  { name: "Bucyrus", slug: "bucyrus" },
  { name: "Cleveland", slug: "cleveland" },
  { name: "Drexel", slug: "drexel" },
  { name: "Freeman", slug: "freeman" },
  { name: "Grandview", slug: "grandview" },
  { name: "Harrisonville", slug: "harrisonville" },
  { name: "Leawood", slug: "leawood" },
  { name: "Loch Lloyd", slug: "loch-lloyd" },
  { name: "Louisburg, KS", slug: "louisburg" },
  { name: "Olathe", slug: "olathe" },
  { name: "Overland Park", slug: "overland-park" },
  { name: "Paola", slug: "paola" },
  { name: "Peculiar", slug: "peculiar" },
  { name: "Raymore", slug: "raymore" },
  { name: "South Kansas City", slug: "south-kansas-city" },
  { name: "Spring Hill", slug: "spring-hill" },
];

export const metadata: Metadata = {
  title: "All Star Pest Solutions | 30+ Years Experience",
  description:
    "Locally owned pest solutions company serving the South Kansas City Metro Area, including Belton, Bucyrus, Cleveland, Drexel, Freeman, Grandview, Harrisonville, Leawood, Loch Lloyd, Louisburg, Olathe, Overland Park, Paola, Peculiar, Raymore, South Kansas City, and Spring Hill.",
};

const homePageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#homepage`,
      url: siteUrl,
      name: "All Star Pest Solutions | 30+ Years Experience",
      description:
        "Locally owned pest solutions company serving the South Kansas City Metro Area, including Belton, Bucyrus, Cleveland, Drexel, Freeman, Grandview, Harrisonville, Leawood, Loch Lloyd, Louisburg, Olathe, Overland Park, Paola, Peculiar, Raymore, South Kansas City, and Spring Hill.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#localbusiness`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#homepage-services`,
      name: "Residential, Commercial, and Termite Pest Solutions",
      provider: {
        "@id": `${siteUrl}/#localbusiness`,
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Johnson County, KS" },
        { "@type": "AdministrativeArea", name: "Miami County, KS" },
        { "@type": "AdministrativeArea", name: "Cass County, MO" },
        { "@type": "AdministrativeArea", name: "Jackson County, MO" },
      ],
      serviceType: "Pest Solutions",
    },
  ],
};

export default function HomePage() {
  return (
    <div className="bg-white font-bold">
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageStructuredData),
        }}
      />

      <section className="relative overflow-hidden">
        <div className="relative min-h-[860px] w-full">
          <Image
            src="/kc-background.jpg"
            alt="South Kansas City Metro skyline"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/72 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          <div className="relative mx-auto grid min-h-[860px] max-w-7xl items-center gap-10 px-6 pb-20 pt-24 lg:grid-cols-[minmax(0,1.15fr)_380px] lg:px-8 xl:grid-cols-[minmax(0,1.1fr)_440px]">
            <div className="max-w-3xl text-white">
              <Image
                src="/logo.png"
                alt="All Star Pest Solutions logo"
                width={3480}
                height={3480}
                className="mb-6 h-auto w-full max-w-[320px] drop-shadow-xl sm:max-w-[420px] lg:max-w-[500px]"
                priority
              />

              <div className="mb-4 inline-flex rounded-md bg-yellow-400 px-4 py-2 text-sm font-black uppercase tracking-wide text-black shadow">
                Locally Owned • Kansas & Missouri Licensed
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-yellow-400 sm:text-5xl lg:text-6xl xl:text-7xl">
                Serving the South Kansas City Metro Area
              </h1>

              <p className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
                30 Years of Experience — Not 30 Days of Guesswork
              </p>

              <p className="mt-4 text-lg font-bold text-yellow-300 sm:text-xl">
                Guaranteed Service. Guaranteed Results.
              </p>

              <div className="mt-6 max-w-3xl">
                <p className="text-base leading-8 text-white/95 sm:text-lg lg:text-xl">
                  Serving the South Kansas City Metro Area, including:
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {serviceCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${city.slug}`}
                      className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-yellow-400 hover:text-black"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-3xl font-black leading-none text-yellow-400 sm:text-4xl">
                Call (913) 738-STAR
              </p>

              <p className="mt-4 text-lg text-white/95 sm:text-xl">
                No Contracts Required.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 text-lg font-extrabold text-black transition hover:bg-yellow-300"
                >
                  FREE INSPECTION
                </Link>

                <a
                  href="tel:19137387827"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-extrabold text-white transition hover:bg-red-700"
                >
                  Call (913) 738-STAR
                </a>
              </div>

              <div className="mt-8 text-2xl text-yellow-400">★★★★★</div>

              <p className="mt-2 text-lg text-white/95">
                Trusted pest solutions for homes and businesses across the South
                Kansas City Metro Area.
              </p>
            </div>

            <div className="relative mx-auto hidden h-[360px] w-[280px] lg:block xl:h-[470px] xl:w-[380px]">
              <Image
                src="/mascot.png"
                alt="All Star Pest Solutions mascot"
                fill
                sizes="(max-width: 1279px) 280px, 380px"
                priority
                className="object-contain object-right-bottom drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>
        </div>
      </section>

      <EcoCommitment />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-yellow-50 via-white to-red-50 p-8 shadow-sm md:p-12">
            <h2 className="text-center text-3xl font-black text-red-700 md:text-4xl">
              Pest Solutions Across the South Kansas City Metro Area
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-zinc-800">
              Looking for trusted local pest solutions near you? We proudly
              serve communities across the South Kansas City Metro Area with
              experienced, professional service backed by over 30 years in the
              industry.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="rounded-xl border border-zinc-200 bg-white px-5 py-4 text-center text-lg font-black text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:border-red-700 hover:bg-red-700 hover:text-white"
                >
                  {city.name} Pest Solutions
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-yellow-50 to-white py-20 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 text-4xl font-black text-red-700">
            Serving the South Kansas City Metro Area
          </h2>

          <p className="text-xl text-zinc-800">
            Providing residential and commercial pest solutions throughout
            Johnson County and Miami County in Kansas, along with Cass County
            and Jackson County in Missouri.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-14 text-4xl font-black text-red-700">
            Professional Pest Solutions
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            <div className="rounded-xl border-t-4 border-red-700 bg-yellow-50 p-10 shadow-md">
              <h3 className="mb-4 text-2xl font-black">
                Residential Pest Solutions
              </h3>
              <p className="mb-6 text-xl text-zinc-800">
                Protect your home from ants, spiders, rodents, cockroaches, and
                other nuisance pests.
              </p>
              <Link
                href="/residential"
                className="rounded-md bg-red-700 px-6 py-3 text-lg text-white"
              >
                Residential Pest Solutions
              </Link>
            </div>

            <div className="rounded-xl border-t-4 border-yellow-500 bg-yellow-50 p-10 shadow-md">
              <h3 className="mb-4 text-2xl font-black">
                Commercial Pest Solutions
              </h3>
              <p className="mb-6 text-xl text-zinc-800">
                Protect your business with professional pest management
                solutions.
              </p>
              <Link
                href="/commercial"
                className="rounded-md bg-red-700 px-6 py-3 text-lg text-white"
              >
                Commercial Pest Solutions
              </Link>
            </div>

            <div className="rounded-xl border-t-4 border-red-700 bg-yellow-50 p-10 shadow-md">
              <h3 className="mb-4 text-2xl font-black">
                Termite Inspections & Treatments
              </h3>
              <p className="mb-6 text-xl text-zinc-800">
                Protect your home from termite damage with professional
                inspections and treatments.
              </p>
              <Link
                href="/termite-services"
                className="rounded-md bg-red-700 px-6 py-3 text-lg text-white"
              >
                Termite Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-black">
            South Kansas City Metro Pest Solutions FAQs
          </h2>

          <div className="space-y-6 text-lg">
            <div>
              <h3 className="font-bold">
                What pests are common in South Kansas City area homes?
              </h3>
              <p>
                Ants, spiders, rodents, cockroaches, and termites are some of
                the most common pests we see in homes and businesses throughout
                the South Kansas City Metro Area.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Are your pest solutions safe for pets and children?
              </h3>
              <p>
                Yes. We use modern treatment methods designed to be effective
                while remaining mindful of families, pets, and beneficial
                insects.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Do you service areas outside Kansas City?
              </h3>
              <p>
                Yes. We proudly serve Belton, Bucyrus, Cleveland, Drexel,
                Freeman, Grandview, Harrisonville, Leawood, Loch Lloyd,
                Louisburg, Olathe, Overland Park, Paola, Peculiar, Raymore,
                South Kansas City, and Spring Hill.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}