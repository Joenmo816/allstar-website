import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Veteran & Senior Pest Control Discounts | All Star Pest Solutions",
  description:
    "All Star Pest Solutions offers veteran and senior pest control discounts in the Kansas City metro.",
};

export default function DiscountsPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Discounts
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Veteran & Senior Pest Control Discounts
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>
            All Star Pest Solutions proudly offers discounts for veterans and seniors throughout the Kansas City metro.
          </p>
          <p>
            Whether you need termite inspection, ant control, spider control, rodent service, cockroach treatment, mosquito service, bed bug help, flea treatment, or wasp control, ask about available discounts when you call.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-3xl font-black">Local Service. Fair Pricing.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Big companies often push long agreements and bundled programs. We keep it simple: honest recommendations, no mandatory contracts, and service based on what your home actually needs.
          </p>
        </div>
      </section>

      <StrongCTA />
    </main>
  );
}
