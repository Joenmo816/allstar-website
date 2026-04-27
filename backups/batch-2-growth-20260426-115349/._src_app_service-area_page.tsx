import type { Metadata } from "next";
import Link from "next/link";
import { serviceCities } from "@/data/service-cities";

export const metadata: Metadata = {
  title: "Pest Control Service Areas | All Star Pest Solutions",
  description:
    "All Star Pest Solutions serves communities across Johnson County, Miami County, Cass County, and Jackson County with pest, termite, rodent, ant, spider, and cockroach solutions.",
};

export default function ServiceAreaPage() {
  return (
    <main className="bg-white text-allstarInk">
      <section className="bg-allstarBlueDark py-20 text-center text-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-black uppercase tracking-[0.16em] text-red-200">
            South Kansas City Metro Service Area
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            Pest Control Service Areas
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/95">
            Owner-operated pest solutions across Kansas and Missouri. Free inspection, no contracts, starting at $89, and guaranteed re-service.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="tel:+19137387827" className="rounded-xl bg-red-600 px-8 py-4 text-lg font-black text-white hover:bg-red-700">
              CALL (913) 738-STAR
            </a>

            <Link href="/contact" className="rounded-xl bg-white px-8 py-4 text-lg font-black text-black hover:bg-slate-100">
              GET FREE QUOTE
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-black text-red-700">
            Choose Your City
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCities.map((city) => (
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
                  Pest Control in {city.name} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


