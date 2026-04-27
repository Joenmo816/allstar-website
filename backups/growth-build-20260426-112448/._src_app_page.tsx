import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EcoCommitment from "@/app/components/EcoCommitment";
import { serviceCities } from "@/data/service-cities";[
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
      "Pavement ants, odorous house ants, carpenter ants, and acrobat ants frequently invade homes searching for food and moisture.",
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

const trustPoints = [
  "30+ years of real field experience",
  "Licensed in Kansas and Missouri",
  "No mandatory contracts",
  "Eco-smart treatments",
  "Direct owner-level service",
  "Veteran & senior discounts",
];

const whyChooseUs = [
  {
    title: "Real Experience",
    description:
      "You are not getting a technician with a few weeks of training. You are getting Over 30 Years of Experience of real-world pest experience.",
  },
  {
    title: "No Contracts Required",
    description:
      "We earn your business with results, not by locking you into something you do not want.",
  },
  {
    title: "Eco-Smart Approach",
    description:
      "We use modern treatment methods designed to solve pest issues while protecting families, pets, pollinators, and wildlife.",
  },
  {
    title: "Direct Owner Contact",
    description:
      "When you call, you are dealing directly with the owner and technician who understands the problem and knows how to solve it.",
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

          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,22,56,0.96)_0%,rgba(16,61,156,0.82)_45%,rgba(16,61,156,0.40)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-8 px-6 pb-14 pt-16 lg:grid-cols-[minmax(0,1fr)_520px] lg:px-8">
            <div className="max-w-4xl text-white">
              <Image
                src="/logo-header-v2.png"
                alt="All Star Pest Solutions logo"
                width={1600}
                height={500}
                className="mb-6 h-auto w-full max-w-[500px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[780px]"
                priority
                unoptimized
              />

              <h1 className="text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
                Kansas City Pest Solutions Backed by 30+ Years of Real Experience
              </h1>

              <p className="mt-4 max-w-3xl text-xl leading-8 text-white/95 sm:text-2xl">
                Safe for families, pets, and beneficial insects. Locally owned.
                No contracts. Direct owner-level service for homes and businesses
                across the South Kansas City Metro.
              </p>

              <p className="mt-5 text-2xl font-black sm:text-3xl">
                30+ Years of Experience — Not 30 Days of Guesswork
              </p>

              <p className="mt-2 text-xl font-black text-red-300 sm:text-2xl">
                Guaranteed Service. Guaranteed Results.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-black text-black shadow-xl transition hover:bg-slate-100 sm:text-xl"
                >
                  FREE INSPECTION
                </Link>

                <a
                  href="tel:+19137387827"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-black text-white shadow-xl transition hover:bg-red-700 sm:text-xl"
                >
                  CALL (913) 738-STAR
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {trustPoints.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.08em] text-white"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative hidden h-[600px] w-[480px] -mb-10 lg:block">
              <Image
                src="/mascot.png"
                alt="All Star mascot"
                fill
                className="object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <EcoCommitment />

      {/* WHY CHOOSE US */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-5xl font-black leading-tight text-red-700">
            Why Homeowners Choose All Star Pest Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-slate-800 md:text-2xl">
            Big companies can throw big money at marketing. What they cannot fake
            is real field experience, local knowledge, and direct accountability.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-4 text-2xl font-black text-red-700">
                  {item.title}
                </h3>

                <p className="text-lg leading-relaxed text-slate-800">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERMITE / ANT WARNING */}
      <section className="bg-red-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border-2 border-red-600 bg-white p-10 shadow-xl">
            <h2 className="text-4xl font-black leading-tight text-red-700 md:text-5xl">
              Don’t Ignore Big Ants Inside Your Home
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-slate-800 md:text-2xl">
              One thing we’ve learned after more than 30 years in the field is
              this: when carpenter ants or acrobat ants are active inside a wall,
              that home needs a termite inspection.
            </p>

            <p className="mt-6 text-xl leading-relaxed text-slate-800 md:text-2xl">
              Those ants are often tied to moisture-damaged wood, wall voids, and
              structural trouble spots. The same conditions that attract ant
              activity can also support hidden termite damage.
            </p>

            <p className="mt-6 text-xl font-black leading-relaxed text-red-700 md:text-2xl">
              Waiting can be the difference between solving a pest problem now or
              paying thousands in repairs later — and most homeowners insurance
              does not cover termite damage.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-black text-white transition hover:bg-red-700 sm:text-xl"
              >
                SCHEDULE AN INSPECTION
              </Link>

              <a
                href="tel:+19137387827"
                className="inline-flex items-center justify-center rounded-xl border-2 border-red-600 bg-white px-8 py-4 text-lg font-black text-black transition hover:bg-red-50 sm:text-xl"
              >
                CALL (913) 738-STAR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PEST SECTION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-5xl font-black text-red-700">
            Common Pests Found in Kansas City Homes
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-slate-800 md:text-2xl">
            Pest problems do not stay small for long. The sooner the source is
            identified, the easier it is to protect your home and avoid bigger
            repair bills later.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pests.map((pest) => (
              <Link
                key={pest.slug}
                href={`/pest-library/${pest.slug}`}
                className={`group block rounded-2xl border-2 ${pest.border} bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
              >
                <h3 className="text-2xl font-black text-allstarInk group-hover:text-allstarRed">
                  {pest.name}
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-allstarSlate">
                  {pest.description}
                </p>

                <div className="mt-5 text-base font-black text-allstarBlueDark group-hover:text-allstarRed">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-allstarBlueLight py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-5xl font-black text-white">
            Service Areas
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-center text-xl leading-relaxed text-white/95 md:text-2xl">
            We proudly serve communities across the South Kansas City Metro with
            residential, commercial, and termite solutions.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="rounded-xl border border-white/20 bg-white px-5 py-4 text-center text-lg font-black text-allstarInk transition hover:bg-allstarRed hover:text-white"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-allstarBlueDark py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-black leading-tight text-white">
            Stop Letting Pest Problems Build Up
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/95 md:text-2xl">
            Whether you are seeing ants, spiders, rodents, cockroaches, or signs
            of moisture-related pest activity, the sooner it gets checked, the
            easier it is to solve.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-black text-black transition hover:bg-slate-100 sm:text-xl"
            >
              BOOK YOUR FREE INSPECTION
            </Link>

            <a
              href="tel:+19137387827"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-black text-white transition hover:bg-red-700 sm:text-xl"
            >
              CALL (913) 738-STAR
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

