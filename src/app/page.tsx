// src/app/page.tsx

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

const pests = [
  {
    name: "Ants",
    slug: "ants",
    description:
      "Pavement ants, odorous house ants, and carpenter ants frequently invade homes searching for food and moisture.",
    border: "border-red-500",
  },
  {
    name: "Spiders",
    slug: "spiders",
    description:
      "Kansas City homes commonly encounter wolf spiders, cellar spiders, and occasionally brown recluse spiders.",
    border: "border-yellow-500",
  },
  {
    name: "Rodents",
    slug: "rodents",
    description:
      "Mice and rats can enter homes through extremely small openings and quickly create sanitation and property damage issues.",
    border: "border-red-500",
  },
  {
    name: "Cockroaches",
    slug: "cockroaches",
    description:
      "Cockroaches are persistent household pests that can contaminate food and surfaces while spreading bacteria.",
    border: "border-yellow-500",
  },
];

export const metadata: Metadata = {
  title: "All Star Pest Solutions | 30+ Years Experience",
  description:
    "Locally owned pest solutions company serving the South Kansas City Metro Area. Safe, effective treatments for homes and businesses.",
};

export default function HomePage() {
  return (
    <main className="bg-white text-allstarInk">
      
      {/* HERO */}
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

          <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-8 px-6 pb-14 pt-16 lg:grid-cols-[minmax(0,1fr)_520px]">
            
            <div className="max-w-2xl text-white">

              <Image
                src="/logo-header-v2.png"
                alt="All Star Pest Solutions logo"
                width={1400}
                height={340}
                className="mb-5 h-auto w-full max-w-[310px]"
                priority
                unoptimized
              />

              <h1 className="text-5xl font-black leading-tight">
                Serving the South Kansas City Metro Area
              </h1>

              <p className="mt-4 text-2xl font-black">
                30+ Years of Experience — Not 30 Days of Guesswork
              </p>

              <p className="mt-2 text-xl font-black">
                Guaranteed Service. Guaranteed Results.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-xl bg-white px-6 py-4 font-bold text-allstarBlueDark"
                >
                  FREE INSPECTION
                </Link>

                <a
                  href="tel:+19137387827"
                  className="rounded-xl bg-red-600 px-6 py-4 font-bold text-white"
                >
                  Call (913) 738-STAR
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <EcoCommitment />

      {/* 🔥 NEW CLICKABLE PEST SECTION */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-black text-allstarRed md:text-4xl">
            Common Pests Found in Kansas City Homes
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pests.map((pest) => (
              <Link
                key={pest.slug}
                href={`/pest-library/${pest.slug}`}
                className={`group block rounded-2xl border-2 ${pest.border} bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
              >
                <h3 className="text-xl font-black text-allstarInk group-hover:text-allstarRed">
                  {pest.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-allstarSlate">
                  {pest.description}
                </p>

                <div className="mt-4 text-sm font-bold text-allstarBlueDark group-hover:text-allstarRed">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-black text-allstarRed">
            Service Areas
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="rounded-xl border bg-white px-4 py-4 text-center font-bold hover:bg-allstarRed hover:text-white"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}