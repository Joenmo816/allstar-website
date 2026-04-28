import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Quarterly Pest Control Kansas City | All Star Pest Solutions",
  description: "Quarterly pest control service in Kansas City for ants, spiders, roaches, rodents, occasional invaders, and general pest prevention.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Quarterly Service</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Quarterly Pest Control Kansas City</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Quarterly pest control is a smart option for homeowners who want consistent protection without overdoing service.</p>
          <p>It can help reduce ants, spiders, cockroaches, occasional invaders, and general pest pressure around the home.</p>
          <p>All Star Pest Solutions can recommend whether quarterly service fits your property and pest history.</p>
        </div>
      </section>
      <StrongCTA />
    </main>
  );
}
