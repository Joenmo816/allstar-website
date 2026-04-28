import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Guaranteed Service. Guaranteed Results. | All Star Pest Solutions",
  description:
    "All Star Pest Solutions stands behind pest control service with honest work, experienced treatment, and a commitment to solving pest problems.",
};

export default function GuaranteePage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Our Service Promise
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Guaranteed Service. Guaranteed Results.
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>
            At All Star Pest Solutions, our promise is simple: we show up, inspect the problem, explain what is happening, and treat the issue with a real plan.
          </p>
          <p>
            Pest control is not always one-and-done. Weather, structure conditions, pest biology, sanitation, moisture, and entry points all matter. That is why experience matters.
          </p>
          <p>
            We do not believe in scare tactics or mandatory contracts. We believe in clear communication, targeted service, and standing behind the work.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white">
          <h2 className="text-3xl font-black">What This Means for You</h2>
          <ul className="mt-5 grid gap-3 text-lg font-semibold text-slate-200 md:grid-cols-2">
            <li>✓ Honest inspection</li>
            <li>✓ Straight explanation</li>
            <li>✓ Targeted treatment</li>
            <li>✓ Owner-operated accountability</li>
            <li>✓ No mandatory contracts</li>
            <li>✓ Service focused on results</li>
          </ul>
        </div>
      </section>

      <StrongCTA />
    </main>
  );
}
