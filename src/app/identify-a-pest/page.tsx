"use client";

import { useState } from "react";

export default function Page() {

const [legs,setLegs] = useState("");
const [wings,setWings] = useState("");
const [result,setResult] = useState("");

function identify() {

if (legs === "8") {
setResult("Likely a Spider (Brown Recluse or Wolf Spider)");
}

else if (legs === "6" && wings === "yes") {
setResult("Possible Flying Ant or Termite Swarmer");
}

else if (legs === "6" && wings === "no") {
setResult("Possible Ant, Beetle, or Cockroach");
}

else {
setResult("Unable to determine pest. Send us a photo!");
}

}

return (

<div className="max-w-4xl mx-auto px-6 py-16">

<h1 className="text-4xl font-bold text-red-600 mb-6">
Identify a Pest in Your Home
</h1>

<p className="mb-8">
Answer a few questions and we’ll help identify your pest.
</p>

<div className="mb-6">

<label className="font-bold">
How many legs?
</label>

<select
className="border p-2 ml-4"
onChange={(e)=>setLegs(e.target.value)}
>

<option value="">Select</option>
<option value="6">6 Legs</option>
<option value="8">8 Legs</option>

</select>

</div>

<div className="mb-6">

<label className="font-bold">
Does it have wings?
</label>

<select
className="border p-2 ml-4"
onChange={(e)=>setWings(e.target.value)}
>

<option value="">Select</option>
<option value="yes">Yes</option>
<option value="no">No</option>

</select>

</div>

<button
onClick={identify}
className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold"
>

Identify Pest

</button>

{result && (

<div className="mt-10 bg-gray-100 p-6 rounded">

<h2 className="text-2xl font-bold">
Possible Pest
</h2>

<p className="mt-2 text-lg">
{result}
</p>

<div className="mt-6 bg-red-600 text-white p-6 text-center rounded-lg">

<h3 className="text-xl font-bold">
Need Help?
</h3>

<p className="mt-2">
Call All Star Pest Solutions
</p>

<p className="font-bold text-lg">
913-738-STAR
</p>

<p className="mt-2">
Guaranteed Service. Guaranteed Results.
</p>

</div>

</div>

)}

</div>

)

}
