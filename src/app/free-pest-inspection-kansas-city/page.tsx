import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Free Pest Inspection Kansas City | All Star Pest Solutions",
  description: "Schedule a pest inspection in the Kansas City metro. All Star Pest Solutions helps identify pest problems and recommend the right service.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Pest Inspection</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Pest Inspection Kansas City</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Not sure what pest you have or how serious it is? All Star Pest Solutions can help inspect the issue and explain what is going on.</p>
          <p>We look for the pest, the source, entry points, moisture issues, nesting areas, and conditions that may keep the problem coming back.</p>
          <p>If ants are inside walls, moisture is present, or termite warning signs exist, a termite inspection may be recommended.</p>
        </div>
      </section>
      <StrongCTA />
    </main>
  );
}
