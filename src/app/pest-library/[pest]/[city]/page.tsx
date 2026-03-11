import { pests } from "@/data/pests";
import { cities } from "@/data/cities";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {

const params = [];

for (const pest of pests) {
for (const city of cities) {

params.push({ pest, city });

}
}

return params;
}

export default function Page({ params }) {

const pestName = params.pest.replace(/-/g," ");
const cityName = params.city.replace(/-/g," ");

return (

<div className="max-w-5xl mx-auto px-6 py-16">

<h1 className="text-4xl font-bold text-red-600 mb-6">
{pestName} in {cityName}
</h1>

<Image
src={`/pest-library/${params.pest}.jpg`}
alt={pestName}
width={900}
height={500}
className="rounded-lg mb-8"
/>

<h2 className="text-2xl font-bold mt-8">Identify Your Enemy</h2>

<p>
If you are seeing {pestName} inside your home in {cityName},
it usually means they found food, moisture, or shelter nearby.
</p>

<h2 className="text-2xl font-bold mt-8">Behavior & Habitat</h2>

<p>
These pests are commonly found in basements, crawl spaces,
garages, and wall voids throughout homes in {cityName}.
</p>

<h2 className="text-2xl font-bold mt-8">Threat Level</h2>

<p>
Some pests are nuisance pests while others can cause
structural damage or health concerns if left untreated.
</p>

<h2 className="text-2xl font-bold mt-8">Prevention Tips</h2>

<ul className="list-disc pl-6">
<li>Seal cracks and entry points</li>
<li>Fix moisture issues</li>
<li>Store food properly</li>
<li>Remove clutter</li>
</ul>

{/* INTERNAL SEO LINKS */}

<h2 className="text-2xl font-bold mt-12">
{pestName} Problems in Nearby Cities
</h2>

<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">

{cities.map((city) => (

<Link
key={city}
href={`/pest-library/${params.pest}/${city}`}
className="text-blue-600 hover:underline"
>

{pestName} in {city.replace(/-/g," ")}

</Link>

))}

</div>

{/* CTA */}

<div className="mt-12 bg-red-600 text-white p-6 text-center rounded-lg">

<h3 className="text-2xl font-bold">
All Star Pest Solutions
</h3>

<p className="mt-2">
Guaranteed Service. Guaranteed Results.
</p>

<p className="font-bold mt-3">
913-738-STAR
</p>

</div>

</div>

);
}