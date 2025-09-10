export const metadata = {
  title: "Termite Swarmer vs Ant Swarmer | Pest Library",
  description: "Termite Swarmer vs Ant Swarmer identification, biology, habitat, risks and treatment options for the Kansas City metro."
};

import Link from "next/link";

export default function Page() {
  const hero = "/pests/termiteswarmervsantswarmer-1.jpg";
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <nav className="text-sm text-gray-500"><Link href="/pests" className="hover:underline">← Back to Pest Library</Link></nav>

      <header className="space-y-4">
        <h1 className="text-3xl font-bold">Termite Swarmer vs Ant Swarmer</h1>
        {hero ? (
          <div className="overflow-hidden rounded-lg border">
            <img src={hero} alt="Termite Swarmer vs Ant Swarmer" className="w-full h-auto object-cover" />
          </div>
        ) : null}
        <p className="text-gray-700">Swarmers are the winged reproductives. Correct ID matters: termites indicate a colony that can damage wood; ants usually signal an ant colony nearby (often non-wood-destroying).</p>
      </header>

      <section className="space-y-3"><h2 className="text-xl font-semibold">Biology & Identification</h2><div className="text-gray-700 space-y-2"><ul className='list-disc pl-6'>
<li><b>Antennae</b>: termites straight; ants elbowed.</li>
<li><b>Waist</b>: termites broad/straight-sided; ants have a pinched waist.</li>
<li><b>Wings</b>: termites front & hind wings equal length, often twice body length; ants’ front wings are longer than hind wings.</li>
</ul></div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Typical Size</h2><div className="text-gray-700">Termite swarmers are usually ⅜–½ inch with wings; ant swarmers vary by species (carpenter ant swarmers are large).</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Seasonality & Activity</h2><div className="text-gray-700">KC area swarms often occur spring on warm, humid days after rain; some species swarm in late summer.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Habitat</h2><div className="text-gray-700">Swarmers emerge from existing nests: termites from soil/structural voids; ants from wall/ceiling voids or landscape nests.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Risks & Concerns</h2><div className="text-gray-700">Termite swarmers indoors strongly suggest a termite infestation requiring professional inspection; ant swarmers do not consume wood (except carpenter ants excavate wood).</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Prevention</h2><div className="text-gray-700">Reduce moisture/wood-soil contact; keep mulch/soil below siding; seal entry points; maintain exterior treatments where applicable.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Treatment & When to Call</h2><div className="text-gray-700">Termites: professional inspection and soil/structural treatment recommended. Ants: identify species, address moisture and nesting sites; treat nests or use baits.</div></section>
    </main>
  );
}

