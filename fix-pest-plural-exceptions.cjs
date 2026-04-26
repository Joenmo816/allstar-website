const fs = require("fs");

const files = [
  "C:/allstar-website/src/app/pest-library/page.tsx",
  "C:/allstar-website/src/app/pest-library/[slug]/page.tsx",
  "C:/allstar-website/src/app/[city]/pest-library/[slug]/page.tsx",
  "C:/allstar-website/src/data/pests.generated.ts",
];

function cleanBadText(content) {
  return content
    .replaceAll("Silverfishes", "Silverfish")
    .replaceAll("silverfishes", "silverfish")
    .replaceAll("Deer Mouses", "Deer Mice")
    .replaceAll("House Mouses", "House Mice")
    .replaceAll("Mouses", "Mice")
    .replaceAll("mouses", "mice")
    .replaceAll("Brown Banded Cockroachs", "Brown-Banded Cockroaches")
    .replaceAll("Cockroachs", "Cockroaches");
}

function patchSpecialMap(content) {
  // Add special plural exceptions inside every pest plural special map.
  const additions = `
    "Silverfish": "Silverfish",
    "House Mouse": "House Mice",
    "Deer Mouse": "Deer Mice",
    "Mouse": "Mice",`;

  content = content.replace(
    /(const special: Record<string, string> = \{)/g,
    `$1${additions}`
  );

  // De-dupe repeated special keys if scripts were run more than once.
  const seenByScope = new Set();
  const lines = content.split(/\r?\n/);

  return lines
    .filter((line) => {
      const trimmed = line.trim();
      const match = trimmed.match(/^"(Silverfish|House Mouse|Deer Mouse|Mouse)":/);
      if (!match) return true;

      const key = `${match[1]}:${trimmed}`;
      if (seenByScope.has(key)) return false;
      seenByScope.add(key);
      return true;
    })
    .join("\n");
}

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log(`Skipping missing file: ${file}`);
    continue;
  }

  let content = fs.readFileSync(file, "utf8");

  content = cleanBadText(content);
  content = patchSpecialMap(content);
  content = cleanBadText(content);

  fs.writeFileSync(file, content, "utf8");
  console.log(`✅ Patched ${file}`);
}

console.log("✅ Fixed Silverfish and mouse plural exceptions.");
