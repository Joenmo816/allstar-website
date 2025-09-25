import fs from "fs";
import path from "path";
/** Returns "/images/xyz.ext" if public/images/xyz.ext exists, else null. */
export function resolvePublicImageUrl(names: string[], subdir = "images"): string | null {
  for (const n of names) {
    const rel = `${subdir}/${n}`;
    const full = path.join(process.cwd(), "public", rel);
    if (fs.existsSync(full)) return "/" + rel.replace(/\\/g, "/");
  }
  return null;
}
