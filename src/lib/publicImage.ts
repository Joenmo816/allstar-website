import fs from "fs";
import path from "path";

/** Returns "/images/<name>" if it exists in public/images, else null. */
export function resolvePublicImageUrl(names: string[]): string | null {
  for (const n of names) {
    const full = path.join(process.cwd(), "public", "images", n);
    if (fs.existsSync(full)) return "/images/" + n.replace(/\\/g, "/");
  }
  return null;
}
