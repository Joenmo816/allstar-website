// tools/generate-pests.mjs
import { promises as fs } from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const repo = path.resolve(__dirname, "..");
const imgDir = path.join(repo, "public", "images", "pests");
const outTs = path.join(repo, "src", "data", "pests.generated.ts");

const groupFromName = (n) => {
  const s = n.toLowerCase();
  if (/(ant|carpenter|odorous|pavement)/.test(s)) return "Ant";
  if (/(spider|widow|recluse|wolf|cellar|sac|funnel)/.test(s)) return "Spider";
  if (/(roach|cockroach)/.test(s)) return "Roach";
  if (/(wasp|hornet|yellowjacket|bee|dauber)/.test(s)) return "Wasp/Hornet";
  if (/(mouse|rat|rodent)/.test(s)) return "Rodent";
  if (/termite/.test(s)) return "Termite";
  return "Other";
};
const riskFromName = (n) => {
  const s = n.toLowerCase();
  if (/(recluse|widow|termite|yellowjacket|hornet|tick)/.test(s)) return "High";
  if (/(carpenter|roach|mouse|rat|wasp|flea)/.test(s)) return "Medium";
  return "Low";
};
const slugify = (s) =>
  s.toLowerCase().replace(/\.[^.]+$/, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const toTitle = (slug) =>
  slug.split("-").map(w => (w.length > 1 ? w[0].toUpperCase() + w.slice(1) : w.toUpperCase())).join(" ");

async function main() {
  await fs.mkdir(path.dirname(outTs), { recursive: true });
  const entries = [];

  async function walk(d) {
    const items = await fs.readdir(d, { withFileTypes: true });
    for (const it of items) {
      const p = path.join(d, it.name);
      if (it.isDirectory()) await walk(p);
      else if (/\.(jpe?g|png|webp)$/i.test(it.name)) entries.push(p);
    }
  }

  try {
    await walk(imgDir);
  } catch {
    console.error(`Missing folder: ${imgDir}`);
    process.exit(1);
  }

  const rows = entries.sort().map(fp => {
    const rel = fp.split(path.join(repo, "public")).pop().replace(/\\/g, "/");
    const file = path.basename(fp);
    const name = toTitle(slugify(file));
    return `  { name: "${name}", slug: "${slugify(file)}", image: "${rel}", group: "${groupFromName(file)}", risk: "${riskFromName(file)}" }`;
  });

  const header = `/* AUTO-GENERATED from /public/images/pests */
import type { Risk, Pest } from "./pests";
export const pests: Pest[] = [
`;
  const footer = `
];
`;

  await fs.writeFile(outTs, header + rows.join(",\n") + footer, "utf8");
  console.log(`Wrote ${outTs} with ${rows.length} items.`);
}

main().catch((e) => { console.error(e); process.exit(1); });