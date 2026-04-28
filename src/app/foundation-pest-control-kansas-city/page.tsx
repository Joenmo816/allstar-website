import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";
import SeoInternalLinks from "../components/SeoInternalLinks";

export const metadata: Metadata = {
  title: "Foundation Pest Control Kansas City | All Star Pest Solutions",
  description: "Foundation Pest Control Kansas City from All Star Pest Solutions. Local Kansas City pest control with 30+ years experience, no mandatory contracts, and owner-operated service.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Kansas City Pest Control
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Foundation Pest Control Kansas City
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>
            All Star Pest Solutions provides local help for foundation pests in the Kansas City metro. Pest problems are not all the same, and the right service depends on the pest, the structure, the season, and the conditions around the property.
          </p>

          <p>
            With over 30 years of pest control experience, we focus on the source of the issue instead of just treating what you can see. Entry points, moisture, food sources, nesting areas, crawlspaces, basements, garages, yards, and wall voids can all play a role.
          </p>

          <p>
            When you call All Star Pest Solutions, you speak directly with the local owner and technician. No call center. No mandatory contracts. Just honest pest control built around real results.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-3xl font-black">Why Homeowners Call All Star</h2>
          <ul className="mt-5 grid gap-3 text-lg font-semibold text-slate-700 md:grid-cols-2">
            <li>✓ 30+ years of pest control experience</li>
            <li>✓ No mandatory contracts</li>
            <li>✓ Owner-operated local service</li>
            <li>✓ Licensed in Kansas & Missouri</li>
            <li>✓ Veteran & senior discounts</li>
            <li>✓ Environmentally responsible approach</li>
          </ul>
        </div>
      </section>

      <StrongCTA />
      <SeoInternalLinks />
    </main>
  );
}
