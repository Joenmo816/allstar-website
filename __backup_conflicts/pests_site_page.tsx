import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import Link from "next/link";

type PestMeta = { title: string; slug: string; summary?: string };

export default function Page() {
  const dir = path.join(process.cwd(), "content", "pests");
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith(".mdx")) : [];
  const pests: PestMeta[] = files.map((f) => {
    const raw = fs.readFileSync(path.join(dir, f), "utf8");
    const { data } = matter(raw);
    const slug = String((data as any).slug ?? f.replace(/\.mdx$/, ""));
    return {
      title: String((data as any).title ?? slug),
      slug,
      summary: (data as any).summary ? String((data as any).summary) : undefined,
    };
  }).sort((a, b) => a.title.localeCompare(b.title));

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold" style={{ color: "var(--brand)" }}>Pest Library</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {pests.map((p) => (
          <Link key={p.slug} href={`/pests/${p.slug}`} className="block rounded-2xl border bg-white p-4 hover:shadow">
            <h3 className="font-semibold">{p.title}</h3>
            {p.summary && <p className="text-sm text-gray-600">{p.summary}</p>}
          </Link>
        ))}
        {pests.length === 0 && (
          <div className="rounded-2xl border bg-white p-4">
            <h3 className="font-semibold">No pests yet</h3>
            <p className="text-sm text-gray-600">Add MDX files in <code>content/pests</code> to populate this page.</p>
          </div>
        )}
      </div>
    </section>
  );
}


