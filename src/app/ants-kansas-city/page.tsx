import type { Metadata } from "next";
import Link from "next/link";
import ConversionBanner from "../components/ConversionBanner";

export const metadata: Metadata = {
  title: "Ant Control Kansas City | Carpenter Ants, Acrobat Ants & More",
  description: "Ant control in Kansas City for carpenter ants, acrobat ants, pavement ants, odorous house ants, and other common ant problems.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          All Star Pest Solutions
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Ant Control Kansas City | Stop Ants at the Source
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Ants are one of the most common pest problems around Kansas City homes, but not all ants are the same. Carpenter ants, acrobat ants, pavement ants, odorous house ants, and other species behave differently and require different treatment strategies.</p>
          <p>The biggest mistake homeowners make is spraying visible ants while missing the nest, moisture source, or entry point. That may scatter the colony and make the problem worse.</p>
          <p>If carpenter ants or acrobat ants are active inside walls, that can signal moisture-damaged wood. Those same conditions can also attract termites, which is why we recommend termite awareness when ants are found inside wall voids.</p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-3xl font-black">Why Choose All Star?</h2>
          <ul className="mt-5 grid gap-3 text-lg font-semibold text-slate-700 md:grid-cols-2">
            <li>✓ Over 30 years of experience</li>
            <li>✓ No mandatory contracts</li>
            <li>✓ Owner-operated service</li>
            <li>✓ Licensed in Kansas & Missouri</li>
            <li>✓ Veteran & senior discounts</li>
            <li>✓ Environmentally responsible approach</li>
          </ul>
        </div>

        <div className="mt-8">
          <Link href="/services" className="font-black text-red-700 hover:text-red-900">
            View all pest control services →
          </Link>
        </div>
      </section>

      <ConversionBanner />
    </main>
  );
}
