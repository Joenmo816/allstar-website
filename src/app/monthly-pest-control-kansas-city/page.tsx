import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Monthly Pest Control Kansas City | All Star Pest Solutions",
  description: "Monthly pest control service in Kansas City for high-pressure pest situations, commercial accounts, roaches, rodents, and recurring problems.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Monthly Service</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Monthly Pest Control Kansas City</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Monthly pest control may be the right fit for heavier pest pressure, commercial accounts, cockroach issues, rodent problems, or recurring pest activity.</p>
          <p>All Star Pest Solutions builds service around the actual problem instead of forcing the same plan on every property.</p>
          <p>Call or text to discuss whether monthly service makes sense for your home or business.</p>
        </div>
      </section>
      <StrongCTA />
    </main>
  );
}
