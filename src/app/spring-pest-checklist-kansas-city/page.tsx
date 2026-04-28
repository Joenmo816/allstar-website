import type { Metadata } from "next";
import ConversionBanner from "../components/ConversionBanner";

export const metadata: Metadata = {
  title: "Kansas City Spring Pest Checklist | All Star Pest Solutions",
  description: "Spring pest checklist for Kansas City homeowners: termites, ants, spiders, mosquitoes, wasps, rodents, moisture, and entry points.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Spring Pest Checklist</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Kansas City Spring Pest Checklist</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Spring is when many Kansas City pests become active again. Termites swarm, ants trail, spiders move, mosquitoes breed, and wasps begin nesting.</p>
          <p>Check around the foundation, crawlspace, basement, garage, windows, door frames, gutters, mulch beds, wood piles, and areas where moisture collects.</p>
          <p>If you see termite swarmers, discarded wings, ants inside walls, mud tubes, rodent droppings, or heavy mosquito activity, it is time to call All Star Pest Solutions.</p>
        </div>
      </section>
      <ConversionBanner />
    </main>
  );
}
