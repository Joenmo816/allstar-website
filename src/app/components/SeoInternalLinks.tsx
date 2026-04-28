import Link from "next/link";

const serviceLinks = [
  ["Termite Inspections", "/termite-inspection-kansas-city"],
  ["Carpenter Ant Treatment", "/carpenter-ant-treatment-kansas-city"],
  ["Spider Control", "/spider-control-kansas-city"],
  ["Rodent Control", "/rodent-control-kansas-city"],
  ["Cockroach Control", "/cockroach-exterminator-kansas-city"],
  ["Bed Bug Treatment", "/bed-bug-treatment-kansas-city"],
  ["Mosquito Control", "/mosquito-control-kansas-city"],
];

const cityLinks = [
  ["Overland Park KS", "/cities/overland-park-ks"],
  ["Belton MO", "/cities/belton-mo"],
  ["Raymore MO", "/cities/raymore-mo"],
  ["Lee's Summit MO", "/cities/lees-summit-mo"],
  ["Stilwell KS", "/cities/stilwell-ks"],
];

export default function SeoInternalLinks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-black text-slate-950">Pest Control Services</h2>
          <div className="mt-5 grid gap-3">
            {serviceLinks.map(([label, href]) => (
              <Link key={href} href={href} className="font-bold text-red-700 hover:text-red-900">
                {label} →
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-slate-950">Local Service Areas</h2>
          <div className="mt-5 grid gap-3">
            {cityLinks.map(([label, href]) => (
              <Link key={href} href={href} className="font-bold text-red-700 hover:text-red-900">
                Pest Control {label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
