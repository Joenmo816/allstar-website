export const runtime = "nodejs";
export const metadata = {
  title: "Carpenter Ant | Pest Library",
  description: "Carpenter Ant identification, biology, habitat, risks and treatment options for the Kansas City metro."
};

import Link from "next/link";
import fs from "fs";
import path from "path";

function heroFor(slug: string): string | undefined {
  const dir = path.join(process.cwd(), "public", "pests");
  const exts = ["jpg","jpeg","png","webp","avif"];
  for (const ext of exts) {
    const p = path.join(dir, `${slug}-1.${ext}`);
    if (fs.existsSync(p)) return `/pests/${slug}-1.${ext}`;
  }
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    const re = new RegExp(`^${"carpenterant"}([._-]|$)`, "i");
    const f = files.find((x)=>re.test(x));
    if (f) return `/pests/${f}`;
  }
  return undefined;
}

export default function Page() {
  const hero = heroFor("carpenterant");
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <nav className="text-sm text-gray-500"><Link href="/pests" className="hover:underline">← Back to Pest Library</Link></nav>

      <header className="space-y-4">
        <h1 className="text-3xl font-bold">Carpenter Ant</h1>
        {hero ? (
          <div className="overflow-hidden rounded-lg border">
            <img src={hero} alt="Carpenter Ant" className="w-full h-auto object-cover" />
          </div>
        ) : null}
        <p className="text-gray-700">
          Carpenter ants excavate smooth galleries in damp or decaying wood. They don’t eat wood like termites—but can weaken structures over time.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Biology & Identification</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Workers are large with an evenly rounded thorax profile.</li>
          <li>Push out coarse sawdust-like frass (often with insect parts) from slit-like openings.</li>
          <li>Colonies may have a moist primary nest and drier satellite nests; winged swarmers can emerge indoors.</li>
        </ul>
      </section>

      <section className="space-y-3"><h2 className="text-xl font-semibold">Typical Size</h2><div className="text-gray-700">Workers ~6–12 mm; queens larger (varies by species).</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Seasonality & Activity</h2><div className="text-gray-700">Swarms spring/early summer; foraging increases with warm, humid weather.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Habitat</h2><div className="text-gray-700">Moist/decaying wood in frames, eaves, decks, wall voids, and trees; attracted to leaks/high humidity.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Risks & Concerns</h2><div className="text-gray-700">Structural weakening from excavation; satellite colonies can persist after partial treatments.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Prevention</h2><div className="text-gray-700">Fix leaks; improve drainage/ventilation; prune wood/vegetation off the structure; store firewood away; seal gaps; eliminate tree-to-house bridges.</div></section>
      <section className="space-y-3"><h2 className="text-xl font-semibold">Treatment & When to Call</h2><div className="text-gray-700">Locate and treat nests directly when possible; use baits/non-repellents; complex cases benefit from professional inspection and moisture repair.</div></section>
    </main>
  );
}
