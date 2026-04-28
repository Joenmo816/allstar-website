import type { Metadata } from "next";
import Link from "next/link";
import StrongCTA from "../../components/StrongCTA";
import SeoInternalLinks from "../../components/SeoInternalLinks";

export const metadata: Metadata = {
  title: "Pest Control Lake Quivira KS | All Star Pest Solutions",
  description: "Pest control in Lake Quivira KS for ants, termites, spiders, rodents, cockroaches, mosquitoes, bed bugs, fleas, wasps, and more. No mandatory contracts.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Local Pest Control
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Pest Control Lake Quivira KS
        </h1>

        <p className="mt-6 text-xl font-semibold leading-8 text-slate-700">
          All Star Pest Solutions provides targeted pest control in Lake Quivira KS for homeowners,
          businesses, real estate transactions, rentals, crawlspaces, basements, garages,
          yards, and seasonal pest problems.
        </p>

        <div className="mt-10 grid gap-6">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Pest Control Services in Lake Quivira KS</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              We help with ants, carpenter ants, acrobat ants, termites, spiders, rodents,
              cockroaches, mosquitoes, bed bugs, fleas, wasps, hornets, pantry pests,
              occasional invaders, and other common Kansas City area pest problems.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Termites, Moisture, and Ants Inside Walls</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              If you are seeing carpenter ants or acrobat ants inside walls, that can point
              to moisture-damaged wood. Moisture can also attract termites. Because termites
              are hidden damage-makers, a termite inspection is a smart move when ants show up
              inside walls.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Why Lake Quivira KS Homeowners Call All Star</h2>
            <ul className="mt-5 grid gap-3 text-lg font-semibold text-slate-700 md:grid-cols-2">
              <li>✓ 30+ years of pest control experience</li>
              <li>✓ No mandatory contracts</li>
              <li>✓ Owner-operated local service</li>
              <li>✓ Licensed in Kansas & Missouri</li>
              <li>✓ Veteran & senior discounts</li>
              <li>✓ Environmentally responsible approach</li>
            </ul>
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

      <StrongCTA />
      <SeoInternalLinks />
    </main>
  );
}
