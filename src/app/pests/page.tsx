import { displayNameFromSlug } from "@/lib/pestNames";
export const runtime = "nodejs";

import fs from "fs";
import path from "path";
import Link from "next/link";

function titleize(slug: string) {
  const s = slug.toLowerCase().replace(/[\s\-_]+/g, "");
  const special: Record<string,string> = {
    "termiteswarmervsantswarmer": "Termite Swarmer vs Ant Swarmer",
    "termiteswarmer": "Termite Swarmer",
    "antswarmer": "Ant Swarmer",
    "brownrecluse": "Brown Recluse",
    "carpenterant": "Carpenter Ant",
    "baldfacedhornet": "Bald-Faced Hornet",
    "yellowjacket": "Yellowjacket",
    "americancockroach": "American Cockroach",
    "americanhousespider": "American House Spider",
    "cicadakiller": "Cicada Killer",
    "cicada": "Cicada",
  };
  if (special[s]) return special[s];

  let t = slug.replace(/[-_]+/g, " ").replace(/vs/gi, " vs ").replace(/\s+/g, " ").trim();
  t = t.split(" ").map(w => (w.toLowerCase()==="vs" ? "vs" : w.charAt(0).toUpperCase()+w.slice(1).toLowerCase())).join(" ");
  return t.replace(/\bBald Faced\b/g, "Bald-Faced");
}

// Find first existing thumbnail in /public/pests for a slug
function findImage(slug: string): string | undefined {
  const imgDir = path.join(process.cwd(), "public", "pests");
  const exts = ["jpg","jpeg","png","webp","avif"];
  for (const ext of exts) {
    const p = path.join(imgDir, `${slug}-1.${ext}`);
    if (fs.existsSync(p)) return `/pests/${slug}-1.${ext}`;
  }
  // also accept any slug-*.ext file
  if (fs.existsSync(imgDir)) {
    const files = fs.readdirSync(imgDir);
    const re = new RegExp(`^${slug}(?:[._-]|$)`, "i");
    const f = files.find(f => re.test(f));
    if (f) return `/pests/${f}`;
  }
  return undefined;
}

export default function PestLibrary() {
  const dir = path.join(process.cwd(), "src", "app", "pests");
  let pests: string[] = [];
  try {
    pests = fs.readdirSync(dir)
      .filter(name => name !== "page.tsx" && name !== "[slug]" && fs.statSync(path.join(dir, name)).isDirectory())
      .sort((a,b) => titleize(a).localeCompare(titleize(b)));
  } catch {}

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Pest Library</h1>
      {pests.length === 0 ? (
        <p className="text-gray-600">No pests found. Add folders under <code>src/app/pests/&lt;slug&gt;</code>.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {pests.map(slug => {
            const name = titleize(slug);
            const img = findImage(slug);
            return (
              <Link key={slug} href={`/pests/${slug}`} className="group rounded-xl border overflow-hidden hover:shadow-sm transition">
                <div className="aspect-[16/9] bg-gray-50 flex items-center justify-center overflow-hidden">
                  {img ? (
                    <img src={img} alt={name} className="h-full w-full object-cover group-hover:scale-[1.02] transition" />
                  ) : (
                    <div className="text-gray-400 text-sm">No image</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="font-semibold">{name}</div>
                  <div className="text-xs text-gray-500">/pests/{slug}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}


