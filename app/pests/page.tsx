import Image from "next/image";
import Link from "next/link";

// Seed list; add and rename as you add images
const pests = [
  { name: "Brown Recluse", slug: "brown-recluse", image: "/images/pest/brown-recluse.jpg" },
  { name: "German Cockroach", slug: "german-cockroach", image: "/images/pest/german-cockroach.jpg" },
  { name: "Carpenter Ant", slug: "carpenter-ant", image: "/images/pest/carpenter-ant.jpg" },
];

export default function PestsIndex() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Pest Library</h1>
      <p className="mt-2 muted">Browse common KC pests. We’ll expand this list as we add your images.</p>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {pests.map((p) => (
          <li key={p.slug} className="card">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border bg-zinc-100">
              <Image src={p.image} alt={p.name} className="h-full w-full object-cover" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} />
            </div>
            <h2 className="mt-3 text-lg font-semibold">{p.name}</h2>
            <Link href={`/pests/${p.slug}`} className="mt-3 inline-block btn-outline">Learn More</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
