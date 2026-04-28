import type { Metadata } from "next";
import Link from "next/link";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Service Areas | South Kansas City Pest Control | All Star Pest Solutions",
  description:
    "All Star Pest Solutions serves the south Kansas City metro with pest control and termite inspection services.",
};

const cities = [
  ["Overland Park KS", "/cities/overland-park-ks"],
  ["Leawood KS", "/cities/leawood-ks"],
  ["Prairie Village KS", "/cities/prairie-village-ks"],
  ["Mission KS", "/cities/mission-ks"],
  ["Shawnee KS", "/cities/shawnee-ks"],
  ["Lenexa KS", "/cities/lenexa-ks"],
  ["Olathe KS", "/cities/olathe-ks"],
  ["Spring Hill KS", "/cities/spring-hill-ks"],
  ["Stilwell KS", "/cities/stilwell-ks"],
  ["Bucyrus KS", "/cities/bucyrus-ks"],
  ["Louisburg KS", "/cities/louisburg-ks"],
  ["Paola KS", "/cities/paola-ks"],
  ["Osawatomie KS", "/cities/osawatomie-ks"],
  ["Drexel MO", "/cities/drexel-mo"],
  ["Cleveland MO", "/cities/cleveland-mo"],
  ["Freeman MO", "/cities/freeman-mo"],
  ["Peculiar MO", "/cities/peculiar-mo"],
  ["Raymore MO", "/cities/raymore-mo"],
  ["Belton MO", "/cities/belton-mo"],
  ["Grandview MO", "/cities/grandview-mo"],
  ["Martin City MO", "/cities/martin-city-mo"],
  ["Loch Lloyd MO", "/cities/loch-lloyd-mo"],
  ["Harrisonville MO", "/cities/harrisonville-mo"],
  ["Lee's Summit MO", "/cities/lees-summit-mo"],
  ["Raytown MO", "/cities/raytown-mo"],
  ["Parkville MO", "/cities/parkville-mo"],
  ["Adrian MO", "/cities/adrian-mo"],
  ["Archie MO", "/cities/archie-mo"]
];

export default function CitiesPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Service Areas
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-tight md:text-6xl">
          Pest Control Service Areas Across the South Kansas City Metro
        </h1>

        <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
          Local, owner-operated pest control with no mandatory contracts.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cities.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-black shadow-sm hover:shadow-lg"
            >
              Pest Control {name}
              <span className="mt-3 block text-sm font-black text-red-700">
                View city page →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <StrongCTA />
    </main>
  );
}
