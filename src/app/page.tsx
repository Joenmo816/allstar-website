import type { Metadata } from "next";
import Link from "next/link";
import StrongCTA from "./components/StrongCTA";
import LocalTrustBlock from "./components/LocalTrustBlock";
import ReviewCTA from "./components/ReviewCTA";
import SeoInternalLinks from "./components/SeoInternalLinks";

export const metadata: Metadata = {
  title: "All Star Pest Solutions | Kansas City Pest Control & Termite Inspections",
  description:
    "All Star Pest Solutions provides pest control and termite inspections across the south Kansas City metro. 30+ years experience. No mandatory contracts. Call (913) 738-7827.",
};

const topServices = [
  ["Termite Inspections", "/termite-inspection-kansas-city"],
  ["Real Estate Termite Inspections", "/real-estate-termite-inspections-kansas-city"],
  ["Carpenter Ant Treatment", "/carpenter-ant-treatment-kansas-city"],
  ["Ant Control", "/ants-kansas-city"],
  ["Spider Control", "/spider-control-kansas-city"],
  ["Rodent Control", "/rodent-control-kansas-city"],
  ["Cockroach Control", "/cockroach-exterminator-kansas-city"],
  ["Bed Bug Treatment", "/bed-bug-treatment-kansas-city"],
  ["Mosquito Control", "/mosquito-control-kansas-city"],
  ["Wasp Control", "/wasp-control-kansas-city"],
  ["Flea Treatment", "/flea-treatment-kansas-city"],
];

const cities = [
  "Overland Park",
  "Leawood",
  "Stilwell",
  "Belton",
  "Raymore",
  "Harrisonville",
  "Louisburg",
  "Peculiar",
  "Paola",
  "Spring Hill",
  "Cleveland",
  "Lee's Summit",
];

export default function HomePage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
              Kansas City Pest Control
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-tight md:text-6xl">
              Real Pest Solutions From a Local Owner — Not a Call Center
            </h1>

            <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
              All Star Pest Solutions provides targeted pest control, termite inspections,
              and real-world pest prevention across the south Kansas City metro. Over 30
              years of experience. No mandatory contracts. Guaranteed Service.
              Guaranteed Results.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:9137387827"
                className="rounded-xl bg-red-700 px-7 py-4 text-center text-lg font-black text-white shadow-lg hover:bg-red-800"
              >
                Call Now: (913) 738-7827
              </a>

              <a
                href="sms:9137387827"
                className="rounded-xl border-2 border-slate-950 px-7 py-4 text-center text-lg font-black text-slate-950 hover:bg-slate-100"
              >
                Text a Pest Photo
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-black">
                30+ Years Experience
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-black">
                No Mandatory Contracts
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-black">
                Licensed KS & MO
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-2xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-500">
              Don’t Ignore Warning Signs
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Seeing ants inside walls?
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-200">
              Carpenter ants and acrobat ants are often tied to moisture-damaged
              wood. Those same conditions can also attract termites. If ants are
              active inside a wall, a termite inspection is a smart move.
            </p>

            <Link
              href="/termite-inspection-kansas-city"
              className="mt-6 inline-block rounded-xl bg-red-700 px-6 py-4 text-center text-lg font-black text-white hover:bg-red-800"
            >
              Schedule Termite Inspection
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Services
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-5xl">
          Pest Control Services Built Around Real Problems
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topServices.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-lg font-black shadow-sm hover:shadow-lg"
            >
              {name}
              <span className="mt-3 block text-base font-black text-red-700">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
            Service Areas
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Serving the South Kansas City Metro
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Local pest control for Kansas and Missouri homeowners, including:
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {cities.map((city) => (
              <span
                key={city}
                className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-800 shadow-sm"
              >
                {city}
              </span>
            ))}
          </div>

          <Link
            href="/cities"
            className="mt-7 inline-block font-black text-red-700 hover:text-red-900"
          >
            View all service areas →
          </Link>
        </div>
      </section>

      <LocalTrustBlock />
      <StrongCTA />
      <SeoInternalLinks />
      <ReviewCTA />
    </main>
  );
}
