import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Emergency Pest Control Kansas City | All Star Pest Solutions",
  description: "Need pest help fast? Call All Star Pest Solutions for urgent pest control in the south Kansas City metro.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Urgent Pest Help</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Emergency Pest Control Kansas City</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Some pest problems cannot wait: wasp nests near doors, roaches spreading fast, rodents inside, bed bugs, fleas, or termite warning signs.</p>
          <p>All Star Pest Solutions offers fast help when availability allows, with same-day or next-day scheduling for urgent pest issues.</p>
          <p>Call or text Joe directly at (913) 738-7827. No call center. No runaround.</p>
        </div>
      </section>
      <StrongCTA />
    </main>
  );
}
