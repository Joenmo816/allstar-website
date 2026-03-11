import Image from "next/image";

export default function Page() {

return (

<div className="max-w-5xl mx-auto px-6 py-16">

<h1 className="text-4xl font-bold text-red-600 mb-6">
sweat bee Exterminator in overland-park KS
</h1>

<Image
src="/pest-library/sweat-bee.jpg"
alt="sweat bee"
width={900}
height={500}
/>

<h2 className="text-2xl font-bold mt-8">
sweat bee Problems in overland-park
</h2>

<p>
Homeowners in overland-park often encounter sweat bee in basements,
crawlspaces, kitchens, and garages. These pests can quickly become
a major problem if left untreated.
</p>

<h2 className="text-2xl font-bold mt-8">
Professional sweat bee Treatment
</h2>

<p>
All Star Pest Solutions provides professional pest solutions
throughout overland-park and surrounding areas.
</p>

<ul className="list-disc pl-6">
<li>Detailed inspection</li>
<li>Targeted treatment</li>
<li>Safe professional products</li>
<li>Long-term prevention</li>
</ul>

<div className="mt-12 bg-red-600 text-white p-6 rounded-lg text-center">

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

)
}
