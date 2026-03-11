import type { Metadata } from "next";
import { SERVICE_AREAS } from "./areas";

export const metadata: Metadata = {
  title: "Local Pest Control Service Areas | Kansas & Missouri | All Star Pest Solutions",
  description:
    "Serving Archie, Belton, Bucyrus, De Soto, Gardner, Grandview, Harrisonville, Kansas City South, Leawood, Lees Summit, Lenexa, Olathe, Overland Park, Paola, Raymore, Spring Hill, Stilwell and more.",
};

export default function ServiceAreaPage() {
  const areas = [...SERVICE_AREAS].sort((a, b) => a.localeCompare(b));

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Pest Control Service Areas</h1>
      <p className="text-gray-700 mb-6">
        We proudly serve the Kansas City south metro and surrounding areas in both Kansas and Missouri. Don’t see your city listed? Call{" "}
        <a className="text-blue-600 hover:underline" href="tel:+19137387827">(913) 738-7827</a> to confirm availability.
      </p>

      {/* Hidden text for SEO keyword coverage */}
      <p className="sr-only">
        We provide pest control in: Archie MO, Aubry KS, Belton MO, Bucyrus KS, Cass County MO, Cleveland MO, De Soto KS, Drexel MO,
        Freeman MO, Garden City MO, Gardner KS, Grandview MO, Harrisonville MO, Kansas City South MO, La Cygne KS, Leawood KS, Lees Summit,
        Lenexa KS, Loch Lloyd, Louisburg KS, Martin City MO, Miami County KS, Mission Hills KS, Olathe KS, Osawatomie KS, Overland Park KS,
        Paola KS, Peculiar MO, Pleasant Hill MO, Prairie Village KS, Raymore MO, Spring Hill KS, Stanley KS, and Stilwell KS.
      </p>

      <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {areas.map((city) => (
          <li key={city} className="rounded-xl border p-3">{city}</li>
        ))}
      </ul>
    </main>
  );
}


<h2 className='text-2xl font-bold mt-12'>
<h2 className="text-3xl font-bold mb-6 text-center">Other Cities We Service</h2>

<ul>
<li><a href='/service-louisburg-ks'>service in louisburg-ks</a></li>
<li><a href='/service-paola-ks'>service in paola-ks</a></li>
<li><a href='/service-osawatomie-ks'>service in osawatomie-ks</a></li>
<li><a href='/service-spring-hill-ks'>service in spring-hill-ks</a></li>
<li><a href='/service-stilwell-ks'>service in stilwell-ks</a></li>
<li><a href='/service-overland-park-ks'>service in overland-park-ks</a></li>
<li><a href='/service-olathe-ks'>service in olathe-ks</a></li>
<li><a href='/service-prairie-village-ks'>service in prairie-village-ks</a></li>
<li><a href='/service-leawood-ks'>service in leawood-ks</a></li>
<li><a href='/service-peculiar-mo'>service in peculiar-mo</a></li>
<li><a href='/service-freeman-mo'>service in freeman-mo</a></li>
<li><a href='/service-harrisonville-mo'>service in harrisonville-mo</a></li>
<li><a href='/service-drexel-mo'>service in drexel-mo</a></li>
<li><a href='/service-cleveland-mo'>service in cleveland-mo</a></li>
<li><a href='/service-loch-lloyd-mo'>service in loch-lloyd-mo</a></li>
<li><a href='/service-belton-mo'>service in belton-mo</a></li>
<li><a href='/service-raymore-mo'>service in raymore-mo</a></li>
<li><a href='/service-grandview-mo'>service in grandview-mo</a></li>

</ul>



