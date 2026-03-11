"use client";

export default function Page() {

const cities = [
"Louisburg KS",
"Paola KS",
"Osawatomie KS",
"Spring Hill KS",
"Stilwell KS",
"Overland Park KS",
"Olathe KS",
"Prairie Village KS",
"Leawood KS",
"Peculiar MO",
"Freeman MO",
"Harrisonville MO",
"Drexel MO",
"Cleveland MO",
"Loch Lloyd MO",
"Belton MO",
"Raymore MO",
"Grandview MO"
]

return (

<div className="max-w-5xl mx-auto px-6 py-16">

<h1 className="text-4xl font-bold text-red-600 mb-8">
Kansas City Pest Activity Map
</h1>

<p className="mb-8 text-lg">
Pest problems vary across the Kansas City metro area.
Explore cities where homeowners frequently encounter pests.
</p>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

{cities.map((city)=>(
<div key={city} className="border p-4 rounded shadow">

<h3 className="font-bold">
{city}
</h3>

<p className="text-sm mt-2">
Common pests reported:
</p>

<ul className="list-disc pl-5 text-sm mt-2">

<li>Spiders</li>
<li>Ants</li>
<li>Termites</li>
<li>Cockroaches</li>

</ul>

</div>
))}

</div>

<div className="mt-12 bg-red-600 text-white p-6 rounded-lg text-center">

<h2 className="text-2xl font-bold">
Need Pest Control Help?
</h2>

<p className="mt-2">
All Star Pest Solutions serves the entire Kansas City metro.
</p>

<p className="font-bold text-lg mt-3">
913-738-STAR
</p>

<p className="mt-2">
Guaranteed Service. Guaranteed Results.
</p>

</div>

</div>

)

}
