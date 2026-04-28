import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Pest Control Pricing Kansas City | All Star Pest Solutions",
  description: "Learn what affects pest control pricing in Kansas City and why All Star Pest Solutions gives honest recommendations with no mandatory contracts.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Pest Control Pricing</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Pest Control Pricing Kansas City</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Pest control pricing depends on the pest, property size, infestation level, treatment type, follow-up needs, and whether the service is one-time or recurring.</p>
          <p>All Star Pest Solutions keeps pricing honest. We do not force mandatory contracts, and we explain what your home actually needs.</p>
          <p>For the fastest answer, call or text Joe directly at (913) 738-7827 and describe the pest problem.</p>
        </div>
      </section>
      <StrongCTA />
    </main>
  );
}
