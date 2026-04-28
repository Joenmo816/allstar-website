import type { Metadata } from "next";
import Link from "next/link";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Termite Treatment Kansas City | All Star Pest Solutions",
  description: "Termite treatment and termite inspection help in Kansas City. Learn warning signs and when to call All Star Pest Solutions.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Termite Treatment</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Termite Treatment Kansas City</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Termites are hidden damage-makers. By the time many homeowners notice obvious signs, termites may have already been active behind walls, flooring, trim, or structural wood.</p>
          <p>All Star Pest Solutions helps homeowners identify termite activity, conducive conditions, moisture problems, and the next step for treatment or inspection.</p>
          <p>If you see mud tubes, swarmers, discarded wings, damaged wood, moisture problems, or ants inside walls, schedule a termite inspection.</p>
        </div>
        <Link href="/termite-inspection-kansas-city" className="mt-8 inline-block font-black text-red-700">Schedule termite inspection →</Link>
      </section>
      <StrongCTA />
    </main>
  );
}
