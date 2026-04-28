import type { Metadata } from "next";
import Link from "next/link";
import ConversionBanner from "../components/ConversionBanner";

export const metadata: Metadata = {
  title: "Wasp Control Kansas City | Nest Removal & Stinging Insect Help",
  description: "Wasp and stinging insect control in Kansas City from All Star Pest Solutions. Safe, targeted help for nests around homes and businesses.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          All Star Pest Solutions
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Wasp Control Kansas City | Safe Help for Stinging Insects
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Wasps, hornets, and yellowjackets can become aggressive when nests are close to doors, decks, patios, rooflines, sheds, and high-traffic areas.</p>
          <p>All Star Pest Solutions provides targeted wasp control that focuses on the nest and the conditions attracting activity around the structure.</p>
          <p>We also believe in protecting pollinators. Honey bees and beneficial insects should be handled responsibly whenever possible.</p>
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
