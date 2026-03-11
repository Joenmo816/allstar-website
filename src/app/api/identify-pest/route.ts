import { NextResponse } from "next/server";

export async function POST(req: Request) {

const form = await req.formData();
const file = form.get("file");

if (!file) {
return NextResponse.json({ result: "No image uploaded" });
}

/* 
In the real version we send the image to an AI vision model.
For now we'll simulate detection.
*/

const pests = [
"Brown Recluse Spider",
"Wolf Spider",
"German Cockroach",
"Carpenter Ant",
"Subterranean Termite",
"House Spider"
];

const random = pests[Math.floor(Math.random()*pests.length)];

return NextResponse.json({
result: random
});

}