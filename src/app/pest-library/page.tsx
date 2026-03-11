import fs from "fs";
import path from "path";
import Image from "next/image";

function getPests() {

const directory = path.join(process.cwd(), "public/pest-library");

const files = fs.readdirSync(directory);

return files
.filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
.map((file) => {

const slug = file.replace(/\.(jpg|jpeg|png|webp)$/i, "");

const name = slug
.replace(/-/g, " ")
.replace(/\b\w/g, (l) => l.toUpperCase());

return { slug, name, image: `/pest-library/${file}` };

});
}

export default function PestLibraryPage() {

const pests = getPests();

return (

<div className="bg-white py-16">

<div className="max-w-6xl mx-auto px-6">

<h1 className="text-4xl font-bold mb-6 text-center text-red-600">
Kansas City Pest Identification Library
</h1>

<p className="text-center mb-12 text-lg text-gray-700">
Saw something crawling across the floor? Identify common Kansas City pests below.
</p>

<div className="grid md:grid-cols-3 gap-10">

{pests.map((pest) => (

<div
key={pest.slug}
className="border rounded-lg shadow hover:shadow-xl transition p-4"
>

<Image
src={pest.image}
alt={pest.name}
width={500}
height={350}
className="rounded mb-4"
/>

<h2 className="text-xl font-bold mb-2">
{pest.name}
</h2>

{/* Identify Your Enemy */}

<h3 className="font-semibold text-red-600 mt-3">
Identify Your Enemy
</h3>

<p className="text-sm text-gray-700">
Most people find {pest.name} after spotting one in the kitchen,
basement, or garage. Proper identification helps determine whether
the pest is a nuisance or a serious problem.
</p>

{/* Fast Facts */}

<h3 className="font-semibold text-red-600 mt-3">
Fast Facts
</h3>

<ul className="text-sm list-disc pl-5 text-gray-700">
<li>Common in homes across the Kansas City metro</li>
<li>Often attracted to food, moisture, or shelter</li>
<li>Some species can cause property damage</li>
</ul>

{/* Habitat */}

<h3 className="font-semibold text-red-600 mt-3">
Where They Hide
</h3>

<p className="text-sm text-gray-700">
These pests are commonly found in basements, crawl spaces,
garages, and older Midtown Kansas City homes. New construction
areas like Overland Park can also experience infestations.
</p>

{/* Threat */}

<h3 className="font-semibold text-red-600 mt-3">
Threat Level
</h3>

<p className="text-sm text-gray-700">
Some pests are simply a nuisance, while others can damage
structures or spread allergens. Proper identification helps
determine the right treatment.
</p>

{/* Prevention */}

<h3 className="font-semibold text-red-600 mt-3">
Prevention Tips
</h3>

<ul className="text-sm list-disc pl-5 text-gray-700">
<li>Seal cracks and entry points</li>
<li>Eliminate moisture sources</li>
<li>Keep food sealed</li>
<li>Store firewood away from the house</li>
</ul>

<div className="mt-4 bg-red-600 text-white text-center py-3 rounded">

<p className="font-semibold">
All Star Pest Solutions
</p>

<p className="text-sm">
Guaranteed Service. Guaranteed Results.
</p>

</div>

</div>

))}

</div>

</div>

</div>

);
}

<h2 className='text-2xl font-bold mt-12'>
Other Cities We Service
</h2>

<ul>
<li><a href='/pest-louisburg-ks'>pest in louisburg-ks</a></li>
<li><a href='/pest-paola-ks'>pest in paola-ks</a></li>
<li><a href='/pest-osawatomie-ks'>pest in osawatomie-ks</a></li>
<li><a href='/pest-spring-hill-ks'>pest in spring-hill-ks</a></li>
<li><a href='/pest-stilwell-ks'>pest in stilwell-ks</a></li>
<li><a href='/pest-overland-park-ks'>pest in overland-park-ks</a></li>
<li><a href='/pest-olathe-ks'>pest in olathe-ks</a></li>
<li><a href='/pest-prairie-village-ks'>pest in prairie-village-ks</a></li>
<li><a href='/pest-leawood-ks'>pest in leawood-ks</a></li>
<li><a href='/pest-peculiar-mo'>pest in peculiar-mo</a></li>
<li><a href='/pest-freeman-mo'>pest in freeman-mo</a></li>
<li><a href='/pest-harrisonville-mo'>pest in harrisonville-mo</a></li>
<li><a href='/pest-drexel-mo'>pest in drexel-mo</a></li>
<li><a href='/pest-cleveland-mo'>pest in cleveland-mo</a></li>
<li><a href='/pest-loch-lloyd-mo'>pest in loch-lloyd-mo</a></li>
<li><a href='/pest-belton-mo'>pest in belton-mo</a></li>
<li><a href='/pest-raymore-mo'>pest in raymore-mo</a></li>
<li><a href='/pest-grandview-mo'>pest in grandview-mo</a></li>

</ul>


