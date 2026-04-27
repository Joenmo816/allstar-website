import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import EcoCommitment from "@/app/components/EcoCommitment";

export const metadata: Metadata = {
  title: "Residential Pest Solutions | All Star Pest Solutions",
  description:
    "Residential pest solutions for Kansas City homes. Safe, eco-friendly service for families, children, and pets with modern methods and over 30+ Years of Experience.",
};

const trustPoints = [
  "30+ years of real field experience",
  "No mandatory contracts",
  "Safe for families and pets",
  "Eco-smart treatment methods",
  "Locally owned and operated",
  "Direct owner-level service",
];

const serviceAdvantages = [
  {
    title: "Protect Pollinators",
    text: "We work to minimize impact on bees and other beneficial insects that support the local environment.",
  },
  {
    title: "Safe for Families & Pets",
    text: "Treatments are applied with safety in mind for your family, your pets, and your home.",
  },
  {
    title: "Targeted Pest Control",
    text: "We solve active pest problems without overapplying products or disrupting the surrounding ecosystem.",
  },
];

const comparisonPoints = [
  {
    title: "Real Experience",
    text: "You are not getting a technician with a few weeks of training. You are getting Over 30 Years of Experience of real-world pest experience.",
  },
  {
    title: "No Contracts Required",
    text: "We earn your business with results, not by locking you into something you do not want.",
  },
  {
    title: "Eco-Smart Approach",
    text: "We use modern treatment methods designed to solve pest issues while protecting families, pets, pollinators, and wildlife.",
  },
  {
    title: "Direct Owner Contact",
    text: "When you call, you are dealing directly with the owner and technician that know how to offer real pest solutions to your problems — not make excuses.",
  },
];

const commonPests = [
  {
    name: "Ants",
    description:
      "Pavement ants, odorous house ants, carpenter ants, and acrobat ants commonly move inside homes searching for food, moisture, and shelter.",
    border: "border-red-600",
  },
  {
    name: "Spiders",
    description:
      "Kansas City homes commonly encounter wolf spiders, cellar spiders, and occasionally brown recluse spiders.",
    border: "border-yellow-500",
  },
  {
    name: "Rodents",
    description:
      "Mice and rats can enter through very small openings and quickly create sanitation and property damage issues.",
    border: "border-red-600",
  },
  {
    name: "Cockroaches",
    description:
      "Cockroaches are persistent household pests that can contaminate food and surfaces while spreading bacteria.",
    border: "border-yellow-500",
  },
];

export default function ResidentialPage() {
  return (
    <>
      <Script
        id="residential-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Residential Pest Solutions",
            provider: {
              "@type": "LocalBusiness",
              name: "All Star Pest Solutions",
              telephone: "+1-(913) 738-7827",
              areaServed: [
                "Johnson County KS",
                "Miami County KS",
                "Cass County MO",
                "Jackson County MO",
              ],
            },
          }),
        }}
      />

      <main className="bg-white pb-20">
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

            <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-8 px-6 pb-14 pt-16 lg:grid-cols-[minmax(0,1fr)_500px] lg:px-8">
              <div className="max-w-4xl text-white">
                <div className="mb-5 inline-flex rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-white">
                  Safe for Families, Pets & the Local Environment
                </div>

                <Image
                  src="/logo-header-v2.png"
                  alt="All Star Pest Solutions logo"
                  width={1600}
                  height={500}
                  className="mb-6 h-auto w-full max-w-[460px] sm:max-w-[560px] md:max-w-[650px] lg:max-w-[760px]"
                  priority
                  unoptimized
                />

                <h1 className="text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
                  Residential Pest Solutions
                </h1>

                <p className="mt-4 max-w-3xl text-xl leading-8 text-white/95 sm:text-2xl">
                  We protect Kansas City area homes with eco-smart pest
                  solutions that are built around real experience, better
                  service, and real results.
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
                    className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-5 text-xl font-extrabold uppercase tracking-[0.04em] text-black shadow-xl transition hover:bg-slate-100 md:text-2xl"
                  >
                    Free Home Inspection
                  </Link>

                  <a
                    href="tel:+19137387827"
                    className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-5 text-xl font-extrabold uppercase tracking-[0.04em] text-white shadow-xl transition hover:bg-red-700 md:text-2xl"
                  >
                    Call (913) 738-STAR
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

              <div className="relative hidden h-[520px] w-[420px] lg:block">
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

        <section className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-5xl font-black leading-tight text-red-700">
              Why Homeowners Choose All Star Pest Solutions
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-xl font-semibold leading-relaxed text-slate-900 md:text-2xl">
              What sets All Star Pest Solutions apart is simple: real
              experience, local knowledge, and direct owner-level service from
              someone that know how to offer real pest solutions to your
              problems — not make excuses.
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {comparisonPoints.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm"
                >
                  <h3 className="mb-4 text-3xl font-black leading-tight text-red-700">
                    {item.title}
                  </h3>

                  <p className="text-lg font-semibold leading-relaxed text-black">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f3d9c] py-24">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-5xl font-black leading-tight text-white">
              We Protect More Than Just Your Home
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-white/95 md:text-2xl">
              Our treatments eliminate harmful pests while protecting beneficial
              insects, pets, and the local environment.
            </p>

            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {serviceAdvantages.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-10 text-left shadow-lg"
                >
                  <h3 className="mb-4 text-3xl font-black leading-tight text-red-700">
                    {item.title}
                  </h3>

                  <p className="text-lg font-semibold leading-relaxed text-black">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="mb-10 text-center text-5xl font-black leading-tight text-red-700">
            Residential Pest Solutions for Kansas City Homes
          </h2>

          <p className="mb-8 text-xl leading-relaxed text-slate-800 md:text-2xl">
            Homes throughout the Kansas City metro deal with pest pressure
            year-round. Seasonal weather swings, landscaping, wooded areas,
            crawlspaces, attics, and moisture conditions all create ideal
            opportunities for pests to move inside looking for food, water, and
            shelter.
          </p>

          <p className="mb-8 text-xl leading-relaxed text-slate-800 md:text-2xl">
            At All Star Pest Solutions, we do not believe in guessing,
            overselling, or dragging customers into contracts they do not want.
            We identify the source of the problem, treat it correctly, and help
            prevent it from coming right back.
          </p>

          <p className="text-xl leading-relaxed text-slate-800 md:text-2xl">
            Whether you are dealing with ants, spiders, roaches, rodents, or a
            bigger hidden issue, we bring Over 30 Years of Experience of real-world
            experience to every inspection and every service.
          </p>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="mb-14 text-5xl font-black text-red-700">
              Common Pests Found in Kansas City Homes
            </h2>

            <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
              {commonPests.map((pest) => (
                <div
                  key={pest.name}
                  className={`rounded-xl border-2 ${pest.border} bg-white p-10 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-xl`}
                >
                  <h3 className="mb-4 text-3xl font-black text-slate-900">
                    {pest.name}
                  </h3>

                  <p className="text-lg font-semibold leading-relaxed text-black">
                    {pest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-allstarBlueDark py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-5xl font-black leading-tight text-white">
              Stop Letting Pest Problems Build Up Inside Your Home
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/95 md:text-2xl">
              The sooner you get pest activity checked, the easier it usually is
              to solve. Waiting often gives the problem more time to spread and
              more time to cost you money.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-5 text-xl font-extrabold uppercase tracking-[0.04em] text-black transition hover:bg-slate-100 md:text-2xl"
              >
                Book Your Free Inspection
              </Link>

              <a
                href="tel:+19137387827"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-5 text-xl font-extrabold uppercase tracking-[0.04em] text-white transition hover:bg-red-700 md:text-2xl"
              >
                Call (913) 738-STAR
              </a>
            </div>
          </div>
        </section>

        <section className="bg-red-50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl border-2 border-red-600 bg-white p-10 shadow-xl">
              <h2 className="text-4xl font-black leading-tight text-red-700 md:text-5xl">
                Don’t Ignore Big Ants Inside Your Home
              </h2>

              <p className="mt-6 text-xl leading-relaxed text-slate-800 md:text-2xl">
                One thing we’ve learned after more than 30 years in the field is
                this: when carpenter ants or acrobat ants are active inside a
                wall, that home needs a termite inspection.
              </p>

              <p className="mt-6 text-xl leading-relaxed text-slate-800 md:text-2xl">
                Those ants are often tied to moisture-damaged wood, wall voids,
                and structural trouble spots. The same conditions that attract
                ant activity can also support hidden termite damage.
              </p>

              <p className="mt-6 text-xl font-black leading-relaxed text-red-700 md:text-2xl">
                Waiting can be the difference between solving a pest problem now
                or paying thousands in repairs later — and most homeowners
                insurance does not cover termite damage.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-5 text-xl font-extrabold uppercase tracking-[0.04em] text-white transition hover:bg-red-700 md:text-2xl"
                >
                  Schedule An Inspection
                </Link>

                <a
                  href="tel:+19137387827"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-red-600 bg-white px-8 py-5 text-xl font-extrabold uppercase tracking-[0.04em] text-black transition hover:bg-red-50 md:text-2xl"
                >
                  Call (913) 738-STAR
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

