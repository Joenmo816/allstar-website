import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "What Bug Is This? Kansas City Pest Identification",
  description: "Need help identifying a bug in Kansas City? Text All Star Pest Solutions a photo for pest identification help.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Pest Identification</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">What Bug Is This? Kansas City Pest Identification Help</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Found a bug and not sure what it is? Text All Star Pest Solutions a clear photo and tell us where you found it.</p>
          <p>We can help with ants, termites, spiders, cockroaches, wasps, fleas, bed bugs, beetles, mosquitoes, rodents, and occasional invaders.</p>
          <p>If it looks like termite activity, ants inside walls, or moisture-related damage, we may recommend an inspection.</p>
        </div>
      </section>
      <StrongCTA />
    </main>
  );
}
