import Link from "next/link";

const rows = [
  {
    name: "Basic (One-Time)",
    bestFor: "Move-ins, sudden flare-ups, listing prep",
    includes: [
      "Full interior & exterior inspection",
      "Targeted treatment of hotspots",
      "30-day re-treat if pests persist",
    ],
  },
  {
    name: "PestGuard Quarterly",
    bestFor: "Year-round peace of mind (most popular)",
    includes: [
      "Seasonal exterior perimeter + interior as needed",
      "Free re-treats between visits",
      "Web/wasp knockdown + entry-point sealing (minor)",
      "Covers 25+ common pests (see Coverage)",
    ],
  },
  {
    name: "PestGuard Monthly / VIP",
    bestFor: "High pressure properties & priority response",
    includes: [
      "Monthly visits with proactive monitoring",
      "Rapid response scheduling",
      "Custom baiting & exclusion recommendations",
      "Ideal for heavy ant/roach pressure, multi-family",
    ],
  },
];

export default function PlansPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Plans & Protection Programs</h1>
      <p className="text-gray-700 mb-6">
        Choose the coverage that fits your home or business. All plans backed by our <Link href="/guarantee" className="text-emerald-700 underline">Guaranteed Service, Guaranteed Results</Link>.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {rows.map((r) => (
          <div key={r.name} className="rounded-2xl border p-6">
            <h2 className="text-xl font-semibold">{r.name}</h2>
            <p className="text-gray-600 mb-3">{r.bestFor}</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-800">
              {r.includes.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <Link href="/contact" className="inline-block mt-4 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition">Get Quote</Link>
          </div>
        ))}
      </div>

      <div className="mt-8 text-sm text-gray-600">
        * Specialty pests like termites, bed bugs, German roaches, birds & wildlife are quoted separately after inspection.
      </div>
    </main>
  );
}