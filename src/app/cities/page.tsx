import type { Metadata } from "next";
import Link from "next/link";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Service Areas | Kansas City Pest Control | All Star Pest Solutions",
  description: "All Star Pest Solutions serves Kansas and Missouri communities across the Kansas City metro with pest control and termite inspection services.",
};

const cities = [
  ["Kansas City MO", "/cities/kansas-city-mo"],
  ["Overland Park KS", "/cities/overland-park-ks"],
  ["Leawood KS", "/cities/leawood-ks"],
  ["Prairie Village KS", "/cities/prairie-village-ks"],
  ["Mission KS", "/cities/mission-ks"],
  ["Shawnee KS", "/cities/shawnee-ks"],
  ["Lenexa KS", "/cities/lenexa-ks"],
  ["Olathe KS", "/cities/olathe-ks"],
  ["Gardner KS", "/cities/gardner-ks"],
  ["Edgerton KS", "/cities/edgerton-ks"],
  ["Spring Hill KS", "/cities/spring-hill-ks"],
  ["Stilwell KS", "/cities/stilwell-ks"],
  ["Bucyrus KS", "/cities/bucyrus-ks"],
  ["Louisburg KS", "/cities/louisburg-ks"],
  ["Paola KS", "/cities/paola-ks"],
  ["Osawatomie KS", "/cities/osawatomie-ks"],
  ["Fontana KS", "/cities/fontana-ks"],
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
  ["Greenwood MO", "/cities/greenwood-mo"],
  ["Pleasant Hill MO", "/cities/pleasant-hill-mo"],
  ["Blue Springs MO", "/cities/blue-springs-mo"],
  ["Independence MO", "/cities/independence-mo"],
  ["Raytown MO", "/cities/raytown-mo"],
  ["Liberty MO", "/cities/liberty-mo"],
  ["Gladstone MO", "/cities/gladstone-mo"],
  ["North Kansas City MO", "/cities/north-kansas-city-mo"],
  ["Parkville MO", "/cities/parkville-mo"],
  ["Platte City MO", "/cities/platte-city-mo"],
  ["Riverside MO", "/cities/riverside-mo"],
  ["Smithville MO", "/cities/smithville-mo"],
  ["Excelsior Springs MO", "/cities/excelsior-springs-mo"],
  ["Grain Valley MO", "/cities/grain-valley-mo"],
  ["Oak Grove MO", "/cities/oak-grove-mo"],
  ["Odessa MO", "/cities/odessa-mo"],
  ["Holden MO", "/cities/holden-mo"],
  ["Garden City MO", "/cities/garden-city-mo"],
  ["Archie MO", "/cities/archie-mo"],
  ["Adrian MO", "/cities/adrian-mo"],
  ["Butler MO", "/cities/butler-mo"],
  ["Rich Hill MO", "/cities/rich-hill-mo"],
  ["Mound City KS", "/cities/mound-city-ks"],
  ["Pleasanton KS", "/cities/pleasanton-ks"],
  ["La Cygne KS", "/cities/la-cygne-ks"],
  ["Linn Valley KS", "/cities/linn-valley-ks"],
  ["Parker KS", "/cities/parker-ks"],
  ["Garnett KS", "/cities/garnett-ks"],
  ["Ottawa KS", "/cities/ottawa-ks"],
  ["Wellsville KS", "/cities/wellsville-ks"],
  ["Baldwin City KS", "/cities/baldwin-city-ks"],
  ["Eudora KS", "/cities/eudora-ks"],
  ["De Soto KS", "/cities/de-soto-ks"],
  ["Bonner Springs KS", "/cities/bonner-springs-ks"],
  ["Edwardsville KS", "/cities/edwardsville-ks"],
  ["Kansas City KS", "/cities/kansas-city-ks"],
  ["Roeland Park KS", "/cities/roeland-park-ks"],
  ["Fairway KS", "/cities/fairway-ks"],
  ["Merriam KS", "/cities/merriam-ks"],
  ["Westwood KS", "/cities/westwood-ks"],
  ["Lake Quivira KS", "/cities/lake-quivira-ks"],
  ["Basehor KS", "/cities/basehor-ks"],
  ["Tonganoxie KS", "/cities/tonganoxie-ks"],
  ["Leavenworth KS", "/cities/leavenworth-ks"],
  ["Lansing KS", "/cities/lansing-ks"],
  ["Atchison KS", "/cities/atchison-ks"],
  ["Lawrence KS", "/cities/lawrence-ks"],
  ["Topeka KS", "/cities/topeka-ks"],
  ["Richmond MO", "/cities/richmond-mo"],
  ["Lexington MO", "/cities/lexington-mo"],
  ["Warrensburg MO", "/cities/warrensburg-mo"],
  ["Knob Noster MO", "/cities/knob-noster-mo"],
  ["Clinton MO", "/cities/clinton-mo"],
  ["Windsor MO", "/cities/windsor-mo"],
  ["Sedalia MO", "/cities/sedalia-mo"],
  ["Wellington MO", "/cities/wellington-mo"],
  ["Buckner MO", "/cities/buckner-mo"],
  ["Sugar Creek MO", "/cities/sugar-creek-mo"],
  ["Lake Lotawana MO", "/cities/lake-lotawana-mo"],
  ["Lake Winnebago MO", "/cities/lake-winnee-missouri"],
  ["Lone Jack MO", "/cities/lone-jack-mo"],
  ["Kingsville MO", "/cities/kingsville-mo"],
  ["Strasburg MO", "/cities/strasburg-mo"],
  ["East Lynne MO", "/cities/east-lynne-mo"],
  ["Creighton MO", "/cities/creighton-mo"],
  ["Urich MO", "/cities/urich-mo"],
  ["La Tour MO", "/cities/la-tour-mo"],
  ["Garden City KS", "/cities/garden-city-ks"],
  ["Hillsdale KS", "/cities/hillsdale-ks"],
  ["Aubry KS", "/cities/aubry-ks"],
  ["Stanley KS", "/cities/stanley-ks"],
  ["Oxford KS", "/cities/oxford-ks"],
];

export default function CitiesPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Service Areas
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-tight md:text-6xl">
          Pest Control Service Areas Across the Kansas City Metro
        </h1>

        <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
          All Star Pest Solutions serves homeowners and businesses across Kansas and Missouri with pest control, termite inspections, ant control, spider control, rodent control, cockroach service, mosquito control, flea treatment, bed bug service, and wasp control.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cities.map(([name, href]) => (
            <Link key={href} href={href} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-black shadow-sm hover:shadow-lg">
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
