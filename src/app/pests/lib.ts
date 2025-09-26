import { DESCRIPTIONS, SLUG_TO_NAME, type PestDetails } from "./descriptions";
export type PestRecord = { slug: string; name: string; details: PestDetails };

export function getAllPests(): PestRecord[] {
  return Object.keys(DESCRIPTIONS).map(slug => ({
    slug,
    name: SLUG_TO_NAME[slug] ?? slug,
    details: DESCRIPTIONS[slug]
  })).sort((a,b)=>a.name.localeCompare(b.name));
}

export function getPest(slug: string): PestRecord | undefined {
  if (!(slug in DESCRIPTIONS)) return undefined;
  return { slug, name: SLUG_TO_NAME[slug] ?? slug, details: DESCRIPTIONS[slug] };
}