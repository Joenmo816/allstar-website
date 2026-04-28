import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Termite Damage Warning Signs Kansas City | All Star Pest Solutions",
  description: "Termite damage warning signs for Kansas City homeowners: mud tubes, swarmers, wings, damaged wood, moisture, and ants inside walls.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Termite Warning Signs</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Termite Damage Warning Signs Kansas City Homeowners Should Not Ignore</h1>
        <div className="mt-8 grid gap-5">
          {[
            "Mud tubes on foundation walls, basement walls, piers, or crawlspace areas.",
            "Flying termite swarmers or piles of discarded wings near windows and doors.",
            "Soft, blistered, hollow-sounding, or damaged wood.",
            "Moisture problems, drainage issues, or wood-to-soil contact.",
            "Carpenter ants or acrobat ants active inside walls."
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-lg font-semibold text-slate-700">{item}</div>
          ))}
        </div>
        <p className="mt-8 text-lg leading-8 text-slate-700">If you notice any of these signs, call All Star Pest Solutions for a termite inspection before the problem gets worse.</p>
      </section>
      <StrongCTA />
    </main>
  );
}
