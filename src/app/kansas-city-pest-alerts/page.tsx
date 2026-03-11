"use client";

import { useState } from "react";

export default function Page() {

const [reports,setReports] = useState([])

const [city,setCity] = useState("")
const [pest,setPest] = useState("")

function submitReport() {

if(!city || !pest) return

const newReport = {
city,
pest,
time: new Date().toLocaleString()
}

setReports([newReport,...reports])

setCity("")
setPest("")

}

return (

<div className="max-w-5xl mx-auto px-6 py-16">

<h1 className="text-4xl font-bold text-red-600 mb-8">
Kansas City Live Pest Alerts
</h1>

<p className="mb-8 text-lg">
See where pests are being reported across the Kansas City metro area.
You can also report what you're seeing in your home or neighborhood.
</p>

<div className="bg-gray-100 p-6 rounded mb-10">

<h2 className="text-2xl font-bold mb-4">
Report a Pest Sighting
</h2>

<input
className="border p-2 mr-4"
placeholder="City"
value={city}
onChange={(e)=>setCity(e.target.value)}
/>

<input
className="border p-2 mr-4"
placeholder="Pest (spider, ant, termite)"
value={pest}
onChange={(e)=>setPest(e.target.value)}
/>

<button
onClick={submitReport}
className="bg-red-600 text-white px-4 py-2 rounded"
>
Submit
</button>

</div>

<h2 className="text-2xl font-bold mb-4">
Recent Pest Reports
</h2>

<div className="space-y-4">

{reports.length === 0 && (
<p>No reports yet. Be the first to report a pest sighting.</p>
)}

{reports.map((r,i)=>(
<div key={i} className="border p-4 rounded">

<p className="font-bold">
{r.pest} reported in {r.city}
</p>

<p className="text-sm text-gray-600">
{r.time}
</p>

</div>
))}

</div>

<div className="mt-12 bg-red-600 text-white p-6 rounded-lg text-center">

<h2 className="text-2xl font-bold">
Need Professional Pest Control?
</h2>

<p className="mt-2">
All Star Pest Solutions serves the Kansas City metro.
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
