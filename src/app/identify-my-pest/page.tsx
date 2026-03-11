"use client";

import { useState } from "react";

export default function IdentifyPestPage() {

const [result, setResult] = useState("");
const [loading, setLoading] = useState(false);

async function handleUpload(e:any) {

const file = e.target.files[0];
if (!file) return;

setLoading(true);

const formData = new FormData();
formData.append("file", file);

const res = await fetch("/api/identify-pest", {
method: "POST",
body: formData
});

const data = await res.json();

setResult(data.result);
setLoading(false);
}

return (

<div className="max-w-4xl mx-auto px-6 py-16">

<h1 className="text-4xl font-bold text-red-600 mb-6">
Identify My Pest
</h1>

<p className="mb-6 text-lg">
Not sure what bug you're dealing with? Upload a photo and our
AI pest identifier will help you identify it.
</p>

<input type="file" onChange={handleUpload} />

{loading && <p className="mt-4">Analyzing your pest...</p>}

{result && (

<div className="mt-8">

<h2 className="text-2xl font-bold">
Possible Pest:
</h2>

<p className="text-lg mt-2">{result}</p>

<div className="mt-6 bg-red-600 text-white p-6 rounded-lg">

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

);
}