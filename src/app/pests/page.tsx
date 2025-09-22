"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Pest } from "@/data/pests";
import { pests } from "@/data/pests";

const RISKS = ["All", "High", "Medium", "Low"] as const;
const SEASONS = ["All", "Year-round", "Spring", "Summer", "Fall", "Winter"] as const;

// derive groups from data
const GROUPS = ["All", ...Array.from(new Set(pests.map(p => p.group))).sort()];

function matchesSeason(p: Pest, season: string) {
  if (season === "All") return true;
  const s = (p.seasonality || "").toLowerCase();
  switch (season) {
    case "Year-round": return /year-?round/.test(s);
    case "Spring":     return /spring/.test(s);
    case "Summer":     return /summer/.test(s);
    case "Fall":       return /(fall|autumn)/.test(s);
    case "Winter":     return /winter/.test(s);
    default: return true;
  }
}

export default function Page() {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState<string>("All");
  const [risk, setRisk] = useState<string>("All");
  const [season, setSeason] = useState<string>("All");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return pests.filter((p) => {
      const txt = `${p.name} ${p.scientificName ?? ""} ${p.group} ${p.description ?? ""}`.toLowerCase();
      const okQ = query === "" || txt.includes(query);
      const okGroup = group === "All" || p.group === group;
      const okRisk = risk === "All" || p.risk === risk;
      const okSeason = matchesSeason(p, season);
      return okQ && okGroup && okRisk && okSeason;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [q, group, risk, season]);

  function clearAll() {
    setQ(""); setGroup("All"); setRisk("All"); setSeason("All");
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold text-brand-blue">Pest Library</h1>
      <p className="mt-2 text-gray-700">Search and filter to learn biology, habits, prevention, and treatments.</p>

      {/* Filters */}
      <div className="mt-6 grid gap-3 md:grid-cols-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search name, species, or description…"
          className="w-full rounded-xl border px-4 py-2 outline-none focus:ring-2"
        />
        <select value={group} onChange={(e) => setGroup(e.target.value)} className="rounded-xl border px-3 py-2">
          {GROUPS.map(g => <option key={g} value={g}>{g}</option>)}
        </select>
        <select value={risk} onChange={(e) => setRisk(e.target.value)} className="rounded-xl border px-3 py-2">
          {RISKS.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <select value={season} onChange={(e) => setSeason(e.target.value)} className="rounded-xl border px-3 py-2">
          {SEASONS.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="mt-3 flex items-center gap-3 text-sm text-gray-600">
        <span>{filtered.length} result{filtered.length === 1 ? "" : "s"}</span>
        <button onClick={clearAll} className="rounded-md border px-2 py-1 hover:bg-gray-50">Clear filters</button>
      </div>

      {/* Cards */}
      {filtered.length === 0 ? (
        <div className="mt-10 rounded-xl border p-6 text-gray-600">
          No pests match your filters. Try clearing or changing your search.
        </div>
      ) : (
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Link key={p.slug} href={`/pests/${p.slug}`} className="group block overflow-hidden rounded-xl border hover:shadow">
              <div className="relative h-40 bg-white">
                <Image src={p.image} alt={p.name} fill className="object-cover transition-transform group-hover:scale-[1.03]" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold group-hover:text-brand-teal">{p.name}</span>
                  <span className="ml-auto inline-flex items-center rounded-full border px-2 py-0.5 text-xs">
                    {p.risk} risk
                  </span>
                </div>
                <div className="mt-1 text-xs text-gray-600">
                  {p.group}{p.scientificName ? ` • ${p.scientificName}` : ""}{p.seasonality ? ` • ${p.seasonality}` : ""}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}