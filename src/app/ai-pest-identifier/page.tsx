"use client";

import { useState } from "react";

export default function Page() {

const [result,setResult] = useState("")
const [loading,setLoading] = useState(false)

async function upload(e:any){

const file = e.target.files[0]
if(!file) return

setLoading(true)

const form = new FormData()
form.append("file",file)

const res = await fetch("/api/ai-pest-id",{
method:"POST",
body:form
})

const data = await res.json()

setResult(data.result)
setLoading(false)

}

return(

<div className="max-w-4xl mx-auto px-6 py-16">

<h1 className="text-4xl font-bold text-red-600 mb-6">
AI Pest Identifier
</h1>

<p className="mb-8 text-lg">
Upload a photo of a pest and our AI will help identify it.
</p>

<input type="file" onChange={upload} />

{loading && <p className="mt-4">Analyzing pest...</p>}

{result && (

<div className="mt-8 bg-gray-100 p-6 rounded">

<h2 className="text-2xl font-bold">
Possible Pest
</h2>

<p className="mt-2 text-lg">
{result}
</p>

<div className="mt-6 bg-red-600 text-white p-6 rounded-lg text-center">

<h3 className="text-xl font-bold">
Need Pest Control Help?
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
