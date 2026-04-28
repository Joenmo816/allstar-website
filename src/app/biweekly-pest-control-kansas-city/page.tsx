import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Biweekly Pest Control Kansas City | All Star Pest Solutions",
  description: "Biweekly pest control service in Kansas City for heavy infestations, roach cleanouts, fleas, bed bugs, and high-pressure pest problems.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Biweekly Service</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Biweekly Pest Control Kansas City</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Biweekly pest control is usually for heavier problems that need tighter follow-up, such as cockroach cleanouts, fleas, bed bugs, or severe recurring pest pressure.</p>
          <p>Not every home needs biweekly service. All Star Pest Solutions will explain when it makes sense and when it does not.</p>
          <p>We focus on solving the problem, not selling unnecessary visits.</p>
        </div>
      </section>
      <StrongCTA />
    </main>
  );
}
