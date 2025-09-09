export const metadata = {
  title: "Brown Recluse | Pest Library",
  description: "Brown Recluse identification, biology, habitat, risks and treatment options for the Kansas City metro."
};

import Link from "next/link";

export default function Page() {
  const hero = "/pests/brownrecluse-1.jpg";
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <nav className="text-sm text-gray-500"><Link href="/pests" className="hover:underline">← Back to Pest Library</Link></nav>

      <header className="space-y-4">
        <h1 className="text-3xl font-bold">Brown Recluse</h1>
        {hero ? (
          <div className="overflow-hidden rounded-lg border">
            <img src={hero} alt="Brown Recluse" className="w-full h-auto object-cover" />
          </div>
        ) : null}
        <p className="text-gray-700">A small, shy spider (six eyes in three pairs) native to the south-central/Midwest U.S., including Missouri. Prefers undisturbed, dry places; bites are uncommon but medically important.</p>
      </header>

      <section className="space-y-3"><h2 className="text-xl font-semibold">Biology & Identification</h2><div className="text-gray-700 space-y-2"><ul class='list-disc pl-6'>
<li>Light to medium brown with a violin-like mark on the cephalothorax; most reliable ID trait is six eyes in three pairs (many spiders have eight).</li>
<li>Reclusive; hunts at night and hides in cluttered, seldom-disturbed areas by day.</li>
</ul></div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Typical Size</h2><div className="text-gray-700">Body length typically ~6–20 mm (¼–¾ inch), not counting legs.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Seasonality & Activity</h2><div className="text-gray-700">Indoors year-round; activity increases in warmer months.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Habitat</h2><div className="text-gray-700">Outdoors: rock/log piles, sheds, crawlspaces. Indoors: closets, attics, basements, boxes, behind baseboards—especially where clutter accumulates.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Risks & Concerns</h2><div className="text-gray-700">Bites are rare; most heal without complication, but necrotic lesions can occur and require medical evaluation.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Prevention</h2><div className="text-gray-700">Reduce indoor clutter; store items in sealed plastic totes, not cardboard; shake out seldom-used clothing and shoes; seal gaps; use tight-fitting door sweeps.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Treatment & When to Call</h2><div className="text-gray-700">Sticky traps for monitoring; targeted crack/void applications by a professional when warranted; medical care for suspected bites.</div></section>
    </main>
  );
}
