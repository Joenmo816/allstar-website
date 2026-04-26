const fs = require("fs");
const path = require("path");

const filesToPatch = [
  "C:/allstar-website/src/app/pest-library/page.tsx",
  "C:/allstar-website/src/app/pest-library/[slug]/page.tsx",
  "C:/allstar-website/src/app/[city]/pest-library/[slug]/page.tsx",
  "C:/allstar-website/src/data/pests.generated.ts",
];

function patchText(content) {
  return content
    .replaceAll("House Mouses", "House Mice")
    .replaceAll("Deer Mouses", "Deer Mice")
    .replaceAll("Field Mouses", "Field Mice")
    .replaceAll("White-Footed Mouses", "White-Footed Mice")
    .replaceAll("White Footed Mouses", "White-Footed Mice")
    .replaceAll("Mouses", "Mice")
    .replaceAll("mouses", "mice");
}

function patchPluralFunction(content) {
  // Add mouse-specific rules into helper functions if not already present.
  const mouseRules = `
  if (trimmed === "Mouse") return "Mice";
  if (trimmed.endsWith(" Mouse")) return trimmed.replace(/ Mouse$/, " Mice");
  if (trimmed.endsWith("mouse")) return trimmed.replace(/mouse$/, "mice");
`;

  if (content.includes('if (trimmed === "Mouse") return "Mice";')) {
    return content;
  }

  // Patch helpers that use const trimmed = name.trim();
  content = content.replace(
    /(\s*const trimmed = name\.trim\(\);\s*)/,
    `$1${mouseRules}`
  );

  // Patch simpler helpers that do not use trimmed but use name directly.
  if (!content.includes('if (trimmed === "Mouse") return "Mice";')) {
    const directMouseRules = `
  if (name === "Mouse") return "Mice";
  if (name.endsWith(" Mouse")) return name.replace(/ Mouse$/, " Mice");
  if (name.endsWith("mouse")) return name.replace(/mouse$/, "mice");
`;

    content = content.replace(
      /(\s*if \(special\[name\]\) return special\[name\];\s*)/,
      `$1${directMouseRules}`
    );
  }

  // Make sure special maps include known mouse names.
  content = content.replace(
    /(const special: Record<string, string> = \{)/g,
    `$1
    "House Mouse": "House Mice",
    "Deer Mouse": "Deer Mice",
    "Mouse": "Mice",`
  );

  // Remove duplicate special-map entries if script is run more than once.
  const lines = content.split(/\r?\n/);
  const seen = new Set();
  const cleaned = lines.filter((line) => {
    const trimmedLine = line.trim();
    const match = trimmedLine.match(/^"(House Mouse|Deer Mouse|Mouse)":/);
    if (!match) return true;

    const key = match[1];
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return cleaned.join("\n");
}

for (const file of filesToPatch) {
  if (!fs.existsSync(file)) {
    console.warn(`Skipping missing file: ${file}`);
    continue;
  }

  let content = fs.readFileSync(file, "utf8");
  content = patchText(content);
  content = patchPluralFunction(content);
  fs.writeFileSync(file, content, "utf8");

  console.log(`✅ Patched ${file}`);
}

console.log("✅ Mouse plural fixes complete.");
