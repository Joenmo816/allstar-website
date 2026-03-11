import Image from "next/image";

const cities = {
  "freeman-mo": "Freeman MO",
  "grandview-mo": "Grandview MO",
  "raymore-mo": "Raymore MO",
  "belton-mo": "Belton MO",
  "harrisonville-mo": "Harrisonville MO",
  "drexel-mo": "Drexel MO",
  "cleveland-mo": "Cleveland MO",
  "loch-lloyd-mo": "Loch Lloyd MO",
  "peculiar-mo": "Peculiar MO",
  "louisburg-ks": "Louisburg KS",
  "paola-ks": "Paola KS",
  "osawatomie-ks": "Osawatomie KS",
  "spring-hill-ks": "Spring Hill KS",
  "stilwell-ks": "Stilwell KS",
  "overland-park-ks": "Overland Park KS",
  "olathe-ks": "Olathe KS",
  "prairie-village-ks": "Prairie Village KS",
  "leawood-ks": "Leawood KS"
};

export default function Page({ params }) {

const city = cities[params.city] || params.city;

return (

<div className="max-w-5xl mx-auto px-6 py-16">

<h1 className="text-4xl font-bold text-red-600 mb-6">
Acrobat Ant Control in {city}
</h1>

<Image
src="/pest-library/acrobat-ant.jpg"
alt={Acrobat Ant in }
width={900}
height={500}
/>

<h2 className="text-2xl font-bold mt-8">
Identify Your Enemy
</h2>

<p>
Seeing acrobat ants in {city} homes usually means the pest has
found food, moisture, or shelter nearby.
</p>

<h2 className="text-2xl font-bold mt-8">
Behavior & Habitat
</h2>

<p>
Acrobat ants are commonly found in basements, crawlspaces,
garages, and wall voids in homes around {city}.
</p>

<h2 className="text-2xl font-bold mt-8">
Threat Level
</h2>

<p>
Some pests are nuisance pests while others may cause
structural damage or health concerns if left untreated.
</p>

<h2 className="text-2xl font-bold mt-8">
Prevention Tips
</h2>

<ul className="list-disc pl-6">
<li>Seal cracks and entry points</li>
<li>Fix moisture issues</li>
<li>Store food properly</li>
<li>Reduce clutter</li>
</ul>

<div className="mt-12 bg-red-600 text-white p-6 text-center rounded-lg">

<h3 className="text-2xl font-bold">
All Star Pest Solutions
</h3>

<p>Guaranteed Service. Guaranteed Results.</p>

<p className="font-bold mt-3">
913-738-STAR
</p>

</div>

</div>

);
}
