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
    "Locally owned pest solutions company serving the South Kansas City Metro Area. Safe, effective treatments for homes and businesses.",
};

const homePageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "All Star Pest Solutions",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "All Star Pest Solutions",
      url: siteUrl,
      telephone: "+1-913-738-7827",
      email: "info@allstarpestkc.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "210 W. Cleveland St",
        addressLocality: "Cleveland",
        addressRegion: "MO",
        postalCode: "64734",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Belton" },
        { "@type": "City", name: "Bucyrus" },
        { "@type": "City", name: "Cleveland" },
        { "@type": "City", name: "Drexel" },
        { "@type": "City", name: "Freeman" },
        { "@type": "City", name: "Grandview" },
        { "@type": "City", name: "Harrisonville" },
        { "@type": "City", name: "Leawood" },
        { "@type": "City", name: "Loch Lloyd" },
        { "@type": "City", name: "Louisburg" },
        { "@type": "City", name: "Olathe" },
        { "@type": "City", name: "Overland Park" },
        { "@type": "City", name: "Paola" },
        { "@type": "City", name: "Peculiar" },
        { "@type": "City", name: "Raymore" },
        { "@type": "City", name: "South Kansas City" },
        { "@type": "City", name: "Spring Hill" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#homepage`,
      url: siteUrl,
      name: "All Star Pest Solutions | 30+ Years Experience",
      description:
        "Locally owned pest solutions company serving the South Kansas City Metro Area. Safe, effective treatments for homes and businesses.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#localbusiness`,
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Residential and Commercial Pest Solutions",
      provider: {
        "@id": `${siteUrl}/#localbusiness`,
      },
      serviceType: "Pest Solutions",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Johnson County, KS" },
        { "@type": "AdministrativeArea", name: "Miami County, KS" },
        { "@type": "AdministrativeArea", name: "Cass County, MO" },
        { "@type": "AdministrativeArea", name: "Jackson County, MO" },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <main className="bg-white text-allstarInk">
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageStructuredData),
        }}
      />

      <section className="relative overflow-hidden">
        <div className="relative min-h-[760px] w-full">
          <Image
            src="/kc-background.jpg"
            alt="South Kansas City Metro skyline"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,22,56,0.95)_0%,rgba(16,61,156,0.80)_45%,rgba(16,61,156,0.34)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

          <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-8 px-6 pb-14 pt-16 lg:grid-cols-[minmax(0,1fr)_520px] lg:px-8 xl:grid-cols-[minmax(0,1fr)_620px]">
            <div className="max-w-2xl text-white">
              <Image
                src="/logo-header-v2.png"
                alt="All Star Pest Solutions logo"
                width={1400}
                height={340}
                className="mb-5 h-auto w-full max-w-[310px] drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)] sm:max-w-[380px] lg:max-w-[440px]"
                priority
                unoptimized
              />

              <div className="mb-4 inline-flex rounded-md border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white shadow sm:text-sm">
                Locally Owned • Kansas &amp; Missouri Licensed
              </div>

              <h1 className="max-w-[12ch] text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Serving the South Kansas City Metro Area
              </h1>

              <p className="mt-4 text-xl font-black leading-tight text-white sm:text-2xl lg:text-3xl">
                30+ Years of Experience — Not 30 Days of Guesswork
              </p>

              <p className="mt-3 text-lg font-black text-white sm:text-xl">
                Guaranteed Service. Guaranteed Results.
              </p>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/95 sm:text-lg lg:text-xl">
                Safe, effective pest solutions for homes and businesses across
                the South Kansas City Metro Area.
              </p>

              <p className="mt-5 text-base font-semibold text-white/95 sm:text-lg">
                Serving communities including:
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {serviceCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-bold text-white transition hover:border-white hover:bg-white hover:text-allstarBlueDark"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>

              <p className="mt-6 text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                Call (913) 738-STAR
              </p>

              <p className="mt-2 text-base font-semibold text-white/90 sm:text-lg">
                No Contracts Required.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-xl bg-white px-7 text-base font-extrabold text-allstarBlueDark shadow-lg transition hover:bg-allstarBlueLight sm:text-lg"
                >
                  FREE INSPECTION
                </Link>

                <a
                  href="tel:+19137387827"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-xl bg-red-600 px-7 text-base font-extrabold text-white shadow-xl transition hover:bg-red-700 sm:text-lg"
                >
                  Call (913) 738-STAR
                </a>
              </div>

              <div className="mt-6 text-xl text-white">★★★★★</div>

              <p className="mt-1 text-sm text-white/90 sm:text-base">
                Trusted local service backed by real experience, not guesswork.
              </p>
            </div>

            <div className="relative order-first mx-auto flex w-full justify-center lg:order-none lg:justify-end">
              <div className="relative h-[300px] w-[260px] sm:h-[360px] sm:w-[310px] md:h-[420px] md:w-[360px] lg:h-[560px] lg:w-[460px] xl:h-[680px] xl:w-[560px]">
                <Image
                  src="/mascot.png"
                  alt="All Star Pest Solutions mascot"
                  fill
                  sizes="(max-width: 639px) 260px, (max-width: 767px) 310px, (max-width: 1023px) 360px, (max-width: 1279px) 460px, 560px"
                  priority
                  unoptimized
                  className="object-contain object-center lg:object-right-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <EcoCommitment />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-allstarBlueLight via-white to-allstarRedLight p-6 shadow-brand md:p-10">
            <h2 className="text-center text-3xl font-black leading-tight text-allstarRed md:text-4xl">
              Pest Solutions Across the South Kansas City Metro Area
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-allstarSlate md:text-lg">
              Looking for trusted local pest solutions near you? We proudly
              serve communities across the South Kansas City Metro Area with
              experienced, professional service backed by over 30 years in the
              industry.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-center text-base font-black text-allstarInk shadow-sm transition hover:-translate-y-0.5 hover:border-allstarRed hover:bg-allstarRed hover:text-white"
                >
                  {city.name} Pest Solutions
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-allstarBlueLight to-white py-14 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-3xl font-black leading-tight text-allstarRed md:text-4xl">
            Serving the South Kansas City Metro Area
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-8 text-allstarSlate md:text-xl">
            Providing residential and commercial pest solutions throughout
            Johnson County and Miami County in Kansas, along with Cass County
            and Jackson County in Missouri.
          </p>
        </div>
      </section>
    </main>
  );
}