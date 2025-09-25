import fs from "node:fs";
import path from "node:path";

export type PestBasics = {
  slug: string;
  name: string;
  image: string; // public path: /images/pest/...
};

const IMG_DIR = path.join(process.cwd(), "public", "images", "pest");
const ALLOWED = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

/** Convert “german-cockroach.jpg” -> { slug: "german-cockroach", name: "German Cockroach" } */
export function toNameAndSlug(filename: string) {
  const base = filename.replace(/\.[^/.]+$/, "");
  const slug = base.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const name = slug.split("-").map(s => s ? s[0].toUpperCase() + s.slice(1) : s).join(" ");
  return { slug, name };
}

/** Read /public/images/pest and return all pests that have an allowed extension */
export function getAllPests(): PestBasics[] {
  if (!fs.existsSync(IMG_DIR)) return [];
  const files = fs.readdirSync(IMG_DIR);

  return files
    .filter(f => ALLOWED.has(path.extname(f).toLowerCase()))
    .map((f) => {
      const { slug, name } = toNameAndSlug(f);
      return { slug, name, image: `/images/pest/${f}` };
    })
    // de-dup same slug across multiple file types; keep first
    .filter((p, idx, arr) => arr.findIndex(x => x.slug === p.slug) === idx)
    .sort((a, b) => a.name.localeCompare(b.name));
}
