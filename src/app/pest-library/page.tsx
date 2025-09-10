"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { pests } from "@/data/pests";

export default function PestLibraryPage() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return pests;
    return pests.filter(p => p.title.toLowerCase().includes(s));
  }, [q]);

  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Pest Library</h1>
      <p className="text-gray-600 mb-4">
        Identify common Kansas City pests and learn what to do next.
      </p>

      <div className="flex gap-3 items-center mb-6">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search pests (e.g. cockroach, wolf spider, ant)…"
          className="w-full max-w-xl border rounded-xl px-4 py-2 outline-none focus:ring"
        />
        <a
          href="tel:+19137387827"
          className="hidden sm:inline-flex items-center rounded-xl px-4 py-2 bg-red-600 text-white hover:bg-red-700"
        >
          Call (913) 738-STAR
        </a>
      </div>

      <div className="mb-4 text-sm text-gray-600">
        Showing {filtered.length} of {pests.length}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            key={p.slug}
            href={`/pest-library/${p.slug}`}
            className="block rounded-2xl shadow p-4 bg-white hover:shadow-lg transition"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src={p.image} alt={p.title} fill sizes="(min-width: 1024px) 33vw, 50vw" />
            </div>
            <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}
