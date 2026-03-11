import Image from "next/image";

export default function Page() {

return (

<div className="max-w-5xl mx-auto px-6 py-16">

<h1 className="text-4xl font-bold text-red-600 mb-6">
lady bug Exterminator in cleveland MO
</h1>

<Image
src="/pest-library/lady-bug.jpg"
alt="lady bug"
width={900}
height={500}
/>

<h2 className="text-2xl font-bold mt-8">
lady bug Problems in cleveland
</h2>

<p>
Homeowners in cleveland often encounter lady bug in basements,
crawlspaces, kitchens, and garages. These pests can quickly become
a major problem if left untreated.
</p>

<h2 className="text-2xl font-bold mt-8">
Professional lady bug Treatment
</h2>

<p>
All Star Pest Solutions provides professional pest solutions
throughout cleveland and surrounding areas.
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

