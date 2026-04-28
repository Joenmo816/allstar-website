import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Seasonal Pest Control Kansas City | All Star Pest Solutions",
  description:
    "Seasonal pest control in Kansas City for spring termites and ants, summer mosquitoes and wasps, fall rodents and spiders, and year-round pest pressure.",
};

export default function SeasonalPestControlPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Seasonal Pest Control
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
          Kansas City Seasonal Pest Control: What to Watch For Year-Round
        </h1>

        <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
          Pest pressure changes with the season. All Star Pest Solutions helps Kansas City homeowners stay ahead of termites, ants, spiders, mosquitoes, wasps, rodents, cockroaches, fleas, and bed bugs.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Spring</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Termite swarmers, ants, spiders, wasps, and moisture-related pest problems become active as temperatures rise.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Summer</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Mosquitoes, wasps, ants, spiders, fleas, ticks, and outdoor pest pressure increase around yards, patios, decks, and landscaping.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Fall</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Rodents, spiders, stink bugs, boxelder bugs, and occasional invaders start looking for shelter as weather cools.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Winter</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Rodents, cockroaches, spiders, and hidden pest problems can continue indoors even when outdoor activity slows down.
            </p>
          </article>
        </div>
      </section>

      <StrongCTA />
    </main>
  );
}
