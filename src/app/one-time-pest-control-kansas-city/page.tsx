import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "One-Time Pest Control Kansas City | No Mandatory Contracts",
  description: "One-time pest control in Kansas City with no mandatory contracts from All Star Pest Solutions.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">No Mandatory Contracts</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">One-Time Pest Control Kansas City</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>You should not have to sign a long contract just to solve a pest problem.</p>
          <p>All Star Pest Solutions offers one-time pest control for ants, spiders, wasps, rodents, cockroaches, fleas, bed bugs, mosquitoes, and other pest concerns.</p>
          <p>If ongoing service makes sense, we will explain it. But we do not force mandatory contracts.</p>
        </div>
      </section>
      <StrongCTA />
    </main>
  );
}
