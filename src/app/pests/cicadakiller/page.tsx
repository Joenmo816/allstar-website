export const metadata = {
  title: "Cicada Killer | Pest Library",
  description: "Cicada Killer identification, biology, habitat, risks and treatment options for the Kansas City metro."
};

import Link from "next/link";

export default function Page() {
  const hero = "/pests/cicadakiller-1.jpg";
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <nav className="text-sm text-gray-500"><Link href="/pests" className="hover:underline">← Back to Pest Library</Link></nav>

      <header className="space-y-4">
        <h1 className="text-3xl font-bold">Cicada Killer</h1>
        {hero ? (
          <div className="overflow-hidden rounded-lg border">
            <img src={hero} alt="Cicada Killer" className="w-full h-auto object-cover" />
          </div>
        ) : null}
        <p className="text-gray-700">Large solitary wasps that provision underground burrows with paralyzed cicadas. Intimidating in size but typically non-aggressive; males cannot sting.</p>
      </header>

      <section className="space-y-3"><h2 className="text-xl font-semibold">Biology & Identification</h2><div className="text-gray-700 space-y-2"><ul className='list-disc pl-6'>
<li>Eastern cicada killer (<i>Sphecius speciosus</i>) is common east of the Rockies. Females hunt cicadas and place them in soil chambers for larvae.</li>
<li>Burrows in bare/sandy soil leave crescent or U-shaped mounds of spoil at the entrance.</li>
</ul></div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Typical Size</h2><div className="text-gray-700">Adults ~1⅛–1⅝ inches (≈ 28–40 mm); among the largest solitary wasps in the U.S.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Seasonality & Activity</h2><div className="text-gray-700">Adults emerge mid-summer (often July–August) and are active through late summer.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Habitat</h2><div className="text-gray-700">Sunny, well-drained, sparsely vegetated soils (lawns, landscape edges, ballfields). Areas with abundant cicadas nearby.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Risks & Concerns</h2><div className="text-gray-700">Stings are uncommon; females sting to subdue cicadas. Activity and burrowing may be a nuisance in high-traffic turf.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Prevention</h2><div className="text-gray-700">Irrigate/turfcare to maintain dense grass cover; reduce bare patches of soil; fill old burrows; avoid loose sand around sidewalks where possible.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Treatment & When to Call</h2><div className="text-gray-700">Rake closed fresh burrows; spot-treat persistent burrows if safety is a concern; widespread activity can be evaluated by a professional.</div></section>
    </main>
  );
}

