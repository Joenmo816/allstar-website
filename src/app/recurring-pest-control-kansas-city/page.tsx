import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Recurring Pest Control Kansas City | All Star Pest Solutions",
  description: "Recurring pest control service in Kansas City for homeowners who want year-round protection.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Ongoing Protection</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Recurring Pest Control Kansas City</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Recurring pest control is a good fit for homes with regular pest pressure, wooded lots, moisture issues, heavy spider activity, ants, rodents, mosquitoes, or seasonal invaders.</p>
          <p>All Star Pest Solutions can help build a service plan based on your home, your pest history, and your tolerance level.</p>
          <p>Service plans are available, but never forced.</p>
        </div>
      </section>
      <StrongCTA />
    </main>
  );
}
