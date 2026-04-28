import type { Metadata } from "next";
import Link from "next/link";
import LocalTrustBlock from "../components/LocalTrustBlock";
import ReviewCTA from "../components/ReviewCTA";

export const metadata: Metadata = {
  title: "Service Areas | Kansas City Pest Control | All Star Pest Solutions",
  description:
    "All Star Pest Solutions serves the south Kansas City metro including Overland Park, Belton, Raymore, Lee's Summit, Stilwell, Louisburg, Cleveland, and surrounding areas.",
};

const cities = [
  { name: "Overland Park KS", href: "/cities/overland-park-ks" },
  { name: "Belton MO", href: "/cities/belton-mo" },
  { name: "Raymore MO", href: "/cities/raymore-mo" },
  { name: "Lee's Summit MO", href: "/cities/lees-summit-mo" },
  { name: "Stilwell KS", href: "/cities/stilwell-ks" },
];

export default function CitiesPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Service Areas
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
          Local Pest Control Across the South Kansas City Metro
        </h1>

        <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
          All Star Pest Solutions serves Kansas and Missouri homeowners with ants, termites, spiders, rodents, cockroaches, mosquitoes, bed bugs, wasps, fleas, and more.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.href}
              href={city.href}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-xl font-black shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              Pest Control {city.name}
              <span className="mt-4 block text-base font-black text-red-700">
                View service area →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-3xl font-black">
            Don’t See Your City Listed?
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Call or text All Star Pest Solutions. We serve many nearby communities including Louisburg, Harrisonville, Peculiar, Spring Hill, Bucyrus, Freeman, Drexel, Cleveland, Martin City, Loch Lloyd, Paola, and surrounding areas.
          </p>
        </div>
      </section>

      <LocalTrustBlock />
      <ReviewCTA />
    </main>
  );
}
