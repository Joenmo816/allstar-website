import type { Metadata } from "next";
import Link from "next/link";
import StrongCTA from "../../components/StrongCTA";
import SeoInternalLinks from "../../components/SeoInternalLinks";

export const metadata: Metadata = {
  title: "Pest Control Raymore MO | All Star Pest Solutions",
  description:
    "Pest control in Raymore MO for ants, termites, spiders, rodents, cockroaches, mosquitoes, bed bugs, fleas, wasps, and more. No mandatory contracts.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Local Pest Control
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Pest Control Raymore MO
        </h1>

        <p className="mt-6 text-xl font-semibold leading-8 text-slate-700">
          All Star Pest Solutions provides owner-operated pest control in Raymore MO
          with over 30 years of experience, no mandatory contracts, and targeted
          service for real pest problems.
        </p>

        <div className="mt-10 grid gap-6">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Pest Problems We See Around Raymore MO</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Homes in Raymore MO can deal with suburban homes, slab foundations, ants, spiders, mosquitoes, termites, rodents, and wasps. The right treatment depends on
              the pest, the structure, the season, and the conditions around the property.
              We do not believe in quick sprays that ignore the source of the problem.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Services Available in Raymore MO</h2>
            <ul className="mt-5 grid gap-3 text-lg font-semibold text-slate-700 md:grid-cols-2">
              <li>✓ Ant control</li>
              <li>✓ Carpenter ant treatment</li>
              <li>✓ Termite inspections</li>
              <li>✓ Spider control</li>
              <li>✓ Rodent control</li>
              <li>✓ Cockroach control</li>
              <li>✓ Mosquito control</li>
              <li>✓ Bed bug and flea service</li>
              <li>✓ Wasp and hornet control</li>
              <li>✓ One-time or recurring service</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Ants Inside Walls? Think Termites Too.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Carpenter ants and acrobat ants are often tied to moisture-damaged wood.
              Those same moisture conditions can also attract termites. Ants may even prey
              on termites, which means ant activity inside walls should not be ignored.
              If you are seeing ants inside a wall, a termite inspection is a smart move.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white">
            <h2 className="text-3xl font-black">Why Raymore MO Homeowners Call All Star</h2>
            <ul className="mt-5 grid gap-3 text-lg font-semibold text-slate-200 md:grid-cols-2">
              <li>✓ 30+ years of pest control experience</li>
              <li>✓ No mandatory contracts</li>
              <li>✓ Owner-operated service</li>
              <li>✓ Licensed in Kansas & Missouri</li>
              <li>✓ Veteran and senior discounts</li>
              <li>✓ Pollinator-conscious approach</li>
            </ul>
          </article>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:9137387827"
            className="rounded-xl bg-red-700 px-7 py-4 text-center text-lg font-black text-white"
          >
            Call (913) 738-7827
          </a>

          <Link
            href="/services"
            className="rounded-xl border-2 border-slate-950 px-7 py-4 text-center text-lg font-black text-slate-950"
          >
            View Services
          </Link>
        </div>
      </section>

      <StrongCTA />
      <SeoInternalLinks />
    </main>
  );
}
