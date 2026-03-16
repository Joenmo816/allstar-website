import { pests } from "@/lib/pests"
import Image from "next/image"
import { notFound } from "next/navigation"

export default function PestPage({params}:{params:{slug:string}}){

const pest = pests.find(p=>p.slug===params.slug)

if(!pest) return notFound()

return(

<main className="pt-32 bg-white min-h-screen">

<section className="max-w-5xl mx-auto px-6 py-20">

<h1 className="text-4xl font-black mb-6">
{pest.name}
</h1>

<p className="italic text-gray-600 mb-8">
Scientific Name: {pest.scientificName}
</p>

<div className="relative h-[400px] mb-10">

<Image
src={pest.image}
alt={pest.name}
fill
className="object-cover rounded-xl"
/>

</div>

<h2 className="text-2xl font-black mb-3">Description</h2>
<p className="mb-6">{pest.description}</p>

<h2 className="text-2xl font-black mb-3">Biology</h2>
<p className="mb-6">{pest.biology}</p>

<h2 className="text-2xl font-black mb-3">Habitat</h2>
<p className="mb-6">{pest.habitat}</p>

</section>

</main>

)

}
