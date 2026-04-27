import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EcoCommitment from "@/app/components/EcoCommitment";
import QuickLeadForm from "@/app/components/QuickLeadForm";
import { serviceCities, featuredCities } from "@/data/service-cities";

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
  "Free inspection",
  "Starting at $89",
  "No mandatory contracts",
  "Guaranteed re-service",
  "Owner-operated",
  "Veteran & senior discounts",
];

const whyChooseUs = [
  {
    title: "Talk Directly to the Owner",
    description:
      "No call-center runaround. When you call, you talk to the person responsible for solving the problem.",
  },
  {
    title: "30+ Years of Field Experience",
    description:
      "You are not getting 30 days of training. You are getting decades of real pest, termite, rodent, and inspection experience.",
  },
  {
    title: "No Contracts Required",
    description:
      "You can choose recurring protection, but we do not force mandatory contracts to earn your business.",
  },
  {
    title: "Guaranteed Re-Service",
    description:
      "If pests come back between scheduled visits, we come back and make it right.",
  },
];

export const metadata: Metadata = {
  title: "Pest Control in South Kansas City | Free Inspection | All Star Pest Solutions",
  description:
    "Owner-operated pest control in the South Kansas City metro. Free inspection, no contracts, starting at $89, guaranteed re-service, and 30+ Years of Experience.",
};

export default function HomePage() {
  return (
    <main className="bg-white text-allstarInk">
      <section className="relative overflow-hidden">
        <div className="relative min-h-[820px] w-full">
          <Image
            src="/kc-background.jpg"
            alt="South Kansas City Metro skyline"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,22,56,0.97)_0%,rgba(16,61,156,0.84)_48%,rgba(198,40,40,0.42)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

          <div className="relative mx-auto grid min-h-[820px] max-w-7xl items-center gap-10 px-6 pb-16 pt-16 lg:grid-cols-[minmax(0,1fr)_430px] lg:px-8">
            <div className="max-w-4xl text-white">
              <Image
                src="/logo-header-v2.png"
                alt="All Star Pest Solutions logo"
                width={1600}
                height={500}
                className="mb-6 h-auto w-full max-w-[500px] sm:max-w-[620px] md:max-w-[720px]"
                priority
                unoptimized
              />

              <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-white">
                KS & MO Certified • Fully Insured • Owner-Operated
              </p>

              <h1 className="text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
                Talk Directly to the Owner Before the Pest Problem Gets Worse
              </h1>

              <p className="mt-5 max-w-3xl text-xl leading-8 text-white/95 sm:text-2xl">
                Free inspection, no mandatory contracts, starting at $89, and guaranteed re-service for homes and businesses across the South Kansas City metro.
              </p>

              <p className="mt-5 text-2xl font-black text-red-200 sm:text-3xl">
                30+ Years of Experience — Not 30 Days of Guesswork
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+19137387827"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-black text-white shadow-xl transition hover:bg-red-700 sm:text-xl"
                >
                  CALL (913) 738-STAR
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-black text-black shadow-xl transition hover:bg-slate-100 sm:text-xl"
                >
                  GET MY FREE QUOTE
                </Link>
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

            <div className="space-y-5">
              <QuickLeadForm compact />

              <div className="relative hidden h-[300px] lg:block">
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
        </div>
      </section>

      <EcoCommitment />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-black leading-tight text-red-700 md:text-5xl">
            Why Homeowners Choose All Star Pest Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-slate-800 md:text-2xl">
            Big companies can buy attention. They cannot fake real field experience, local knowledge, and direct accountability.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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

      <section className="bg-red-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border-2 border-red-600 bg-white p-8 shadow-xl md:p-10">
            <h2 className="text-4xl font-black leading-tight text-red-700 md:text-5xl">
              Seeing Big Ants Inside a Wall? Do Not Ignore It.
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-slate-800 md:text-2xl">
              Carpenter ants and acrobat ants are often tied to moisture-damaged wood, wall voids, and structural trouble spots. Those same conditions can also support hidden termite problems.
            </p>

            <p className="mt-6 text-xl font-black leading-relaxed text-red-700 md:text-2xl">
              If you are seeing ants inside walls, get a termite inspection before the repair bill grows.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-lg">
                SCHEDULE AN INSPECTION
              </Link>

              <a href="tel:+19137387827" className="inline-flex items-center justify-center rounded-xl border-2 border-red-600 bg-white px-8 py-4 text-lg font-black text-black transition hover:bg-red-50">
                CALL (913) 738-STAR
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-black text-red-700 md:text-5xl">
            Common Pest Problems We Solve
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-slate-800 md:text-2xl">
            Pest problems do not stay small for long. The sooner the source is identified, the easier it is to protect your home.
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

      <section className="bg-allstarBlueDark py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-black text-white md:text-5xl">
              Pest Control Service Areas
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-white/95 md:text-2xl">
              We are building local pages for every city we serve so homeowners can quickly find real help nearby.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="rounded-xl border border-white/20 bg-white px-5 py-4 text-center text-lg font-black text-allstarInk transition hover:bg-allstarRed hover:text-white"
              >
                Pest Control in {city.name}
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/service-area" className="btn-accent text-lg">
              View Full Service Area
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-black text-red-700 md:text-5xl">
            Featured High-Priority Cities
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-black uppercase tracking-[0.12em] text-allstarBlue">
                  {city.county}
                </p>

                <h3 className="mt-2 text-3xl font-black text-allstarRed">
                  {city.name}, {city.state}
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-allstarSlate">
                  {city.angle}.
                </p>

                <p className="mt-5 font-black text-allstarBlueDark">
                  Open {city.name} page →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-allstarBlue py-20 text-center text-white">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-black leading-tight md:text-5xl">
            Stop Letting Pest Problems Build Up
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/95 md:text-2xl">
            Ants, spiders, rodents, cockroaches, wasps, mosquitoes, and termites get worse when they are ignored. Call now and talk directly to the owner.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:+19137387827" className="rounded-xl bg-red-600 px-8 py-4 text-lg font-black text-white transition hover:bg-red-700 sm:text-xl">
              CALL (913) 738-STAR
            </a>

            <Link href="/contact" className="rounded-xl bg-white px-8 py-4 text-lg font-black text-black transition hover:bg-slate-100 sm:text-xl">
              GET MY FREE QUOTE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


