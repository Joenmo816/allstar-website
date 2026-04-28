import type { Metadata } from "next";
import Link from "next/link";
import ConversionBanner from "../../components/ConversionBanner";

export const metadata: Metadata = {
  title: "Pest Control Spring Hill KS | All Star Pest Solutions",
  description: "Pest control in Spring Hill KS for ants, termites, spiders, rodents, cockroaches, mosquitoes, bed bugs, wasps, fleas, and more.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Local Pest Control
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Pest Control Spring Hill KS | Local, Experienced, No Contracts
        </h1>

        <p className="mt-6 text-xl font-semibold leading-8 text-slate-700">
          All Star Pest Solutions serves Spring Hill KS with targeted pest control, termite inspections, ant treatments, spider control, rodent service, cockroach control, mosquito service, flea service, bed bug service, and wasp control.
        </p>

        <div className="mt-10 grid gap-6">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Pest Problems in Spring Hill KS</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Homes around Spring Hill KS can deal with ants, spiders, termites, rodents, mosquitoes, cockroaches, wasps, fleas, and occasional invaders. The right treatment depends on the pest, the structure, the season, and the conditions around the property.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Termites, Moisture & Ants Inside Walls</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              If you are seeing carpenter ants or acrobat ants inside walls, that can point to moisture-damaged wood. Moisture issues can also attract termites. Because termites are hidden damage-makers, a termite inspection is a smart move when ants show up inside walls.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Why Spring Hill KS Homeowners Call All Star</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              You get owner-operated service, over 30 years of experience, no mandatory contracts, veteran and senior discounts, and a company that cares about solving the problem instead of just selling a plan.
            </p>
          </article>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href="tel:9137387827" className="rounded-xl bg-red-700 px-7 py-4 text-center text-lg font-black text-white">
            Call (913) 738-7827
          </a>

          <Link href="/services" className="rounded-xl border-2 border-slate-950 px-7 py-4 text-center text-lg font-black text-slate-950">
            View Services
          </Link>
        </div>
      </section>

      <ConversionBanner />
    </main>
  );
}
