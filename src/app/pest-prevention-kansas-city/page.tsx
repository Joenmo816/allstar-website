import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Pest Prevention Kansas City | Keep Pests Out",
  description: "Pest prevention tips and service for Kansas City homes: sealing entry points, reducing moisture, managing mulch, sanitation, and seasonal pest pressure.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Pest Prevention</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Pest Prevention Kansas City</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>The best pest control starts before pests get comfortable. Entry points, moisture, clutter, food sources, vegetation, mulch, and drainage all matter.</p>
          <p>All Star Pest Solutions helps homeowners reduce pest pressure by treating active problems and identifying conditions that keep pests coming back.</p>
          <p>Good prevention helps reduce ants, spiders, rodents, cockroaches, mosquitoes, wasps, fleas, and occasional invaders.</p>
        </div>
      </section>
      <StrongCTA />
    </main>
  );
}
