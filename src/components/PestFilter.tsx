"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function PestFilter({ pests }: any) {

const [search,setSearch] = useState("")
const [category,setCategory] = useState("all")

const categories:any = {
spiders:["spider","widow"],
ants:["ant"],
cockroaches:["cockroach"],
bees:["bee","wasp","hornet","yellowjacket"],
rodents:["mouse","rat"],
pantry:["beetle","moth"]
}

let filtered = pests

if(search){
filtered = filtered.filter((p:any)=>
p.name.toLowerCase().includes(search.toLowerCase())
)
}

if(category !== "all"){
filtered = filtered.filter((p:any)=>
categories[category].some((word:string)=>
p.name.toLowerCase().includes(word)
)
)
}

return (

<div>

{/* Search */}
<input
placeholder="Search pests..."
className="border p-3 w-full rounded mb-6"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

{/* Category Buttons */}
<div className="flex flex-wrap gap-3 mb-10">

<button onClick={()=>setCategory("all")} className="px-4 py-2 bg-gray-200 rounded">All</button>
<button onClick={()=>setCategory("spiders")} className="px-4 py-2 bg-gray-200 rounded">Spiders</button>
<button onClick={()=>setCategory("ants")} className="px-4 py-2 bg-gray-200 rounded">Ants</button>
<button onClick={()=>setCategory("cockroaches")} className="px-4 py-2 bg-gray-200 rounded">Cockroaches</button>
<button onClick={()=>setCategory("bees")} className="px-4 py-2 bg-gray-200 rounded">Bees & Wasps</button>
<button onClick={()=>setCategory("rodents")} className="px-4 py-2 bg-gray-200 rounded">Rodents</button>
<button onClick={()=>setCategory("pantry")} className="px-4 py-2 bg-gray-200 rounded">Pantry Pests</button>

</div>

{/* Pest Grid */}

<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

{filtered.map((pest:any)=>(

<Link
key={pest.slug}
href={`/pests/${pest.slug}`}
className="border rounded-xl shadow hover:shadow-lg transition bg-white"
>

<div className="relative h-48 w-full">

<Image
src={`/images/pests/${pest.slug}.jpg`}
alt={pest.name}
fill
className="object-cover rounded-t-xl"
/>

</div>

<div className="p-4">

<h2 className="text-xl font-semibold text-red-700">
{pest.name}
</h2>

<p className="text-sm text-gray-700 mt-2">
Click for more information
</p>

</div>

</Link>

))}

</div>

</div>

)

}