export function titleFromSlug(slug: string) {
  // Turn slug into Title Case
  return slug
    .split("-")
    .map(w => w.length ? w[0].toUpperCase() + w.slice(1) : w)
    .join(" ")
    .replace(/\bId\b/g, "ID");
}

export function displayName(p: { name?: string; slug: string }) {
  // Prefer nice "name" from pests.ts, otherwise format slug
  return p.name?.trim() || titleFromSlug(p.slug);
}
