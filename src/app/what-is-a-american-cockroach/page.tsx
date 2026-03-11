import Image from "next/image";

export default function Page() {

return (

<div className="max-w-5xl mx-auto px-6 py-16">

<h1 className="text-4xl font-bold text-red-600 mb-6">
What Is A 
</h1>

<Image
src="/pest-library/american-cockroach.jpg"
alt="american cockroach"
width={900}
height={500}
/>

<h2 className="text-2xl font-bold mt-8">
Identify Your Enemy
</h2>

<p>
If you found a american cockroach in your home, you're not alone.
These pests are common throughout Kansas and Missouri homes.
Proper identification is the first step in solving the problem.
</p>

<h2 className="text-2xl font-bold mt-8">
Where They Hide
</h2>

<p>
american cockroach are commonly found in basements, crawlspaces,
garages, and kitchens where they can find food and moisture.
</p>

<h2 className="text-2xl font-bold mt-8">
Threat Level
</h2>

<p>
Some pests are nuisance pests while others can damage
structures or pose health concerns if left untreated.
</p>

<h2 className="text-2xl font-bold mt-8">
Prevention Tips
</h2>

<ul className="list-disc pl-6">
<li>Seal cracks and entry points</li>
<li>Fix moisture problems</li>
<li>Keep food sealed</li>
<li>Remove clutter and hiding areas</li>
</ul>

<div className="mt-12 bg-red-600 text-white p-6 rounded-lg text-center">

<h3 className="text-2xl font-bold">
All Star Pest Solutions
</h3>

<p className="mt-2">
Serving Kansas and Missouri homeowners.
</p>

<p className="font-bold mt-3">
913-738-STAR
</p>

<p className="mt-2">
Guaranteed Service. Guaranteed Results.
</p>

</div>

</div>

)
}

