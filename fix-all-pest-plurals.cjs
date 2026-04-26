const fs = require("fs");

const files = [
  "C:/allstar-website/src/app/pest-library/page.tsx",
  "C:/allstar-website/src/app/pest-library/[slug]/page.tsx",
  "C:/allstar-website/src/app/[city]/pest-library/[slug]/page.tsx",
  "C:/allstar-website/src/data/pests.generated.ts",
];

const pluralizePestNameFunction = `function pluralizePestName(name: string) {
  const trimmed = name.trim();

  const special: Record<string, string> = {
    "Mouse": "Mice",
    "House Mouse": "House Mice",
    "Deer Mouse": "Deer Mice",

    "Brown Banded Cockroach": "Brown-Banded Cockroaches",
    "American Cockroach": "American Cockroaches",
    "German Cockroach": "German Cockroaches",
    "Oriental Cockroach": "Oriental Cockroaches",
    "Smoky Brown Cockroach": "Smokybrown Cockroaches",

    "Subterranean Termite": "Subterranean Termites",
    "Termite Swarmer": "Termite Swarmers",

    "Bald Faced Hornet": "Bald-Faced Hornets",
    "European Hornet": "European Hornets",
    "Paper Wasp": "Paper Wasps",
    "Red Wasp": "Red Wasps",
    "Yellowjacket": "Yellowjackets",
    "Mud Dauber": "Mud Daubers",
    "Blue Mud Dauber": "Blue Mud Daubers",
    "Cicada Killer": "Cicada Killers",

    "Honey Bee": "Honey Bees",
    "Bumble Bee": "Bumble Bees",
    "Carpenter Bee": "Carpenter Bees",
    "Mason Bee": "Mason Bees",
    "Leaf Cutter Bee": "Leafcutter Bees",
    "Sweat Bee": "Sweat Bees",

    "Lady Bug": "Ladybugs",
    "Black Widow": "Black Widows",
    "Brown Widow": "Brown Widows",
    "Brown Recluse Spider": "Brown Recluse Spiders",
    "Daddy Longlegs": "Daddy Longlegs"
  };

  if (special[trimmed]) return special[trimmed];

  if (trimmed.endsWith(" Mouse")) return trimmed.replace(/ Mouse$/, " Mice");
  if (trimmed.endsWith(" mouse")) return trimmed.replace(/ mouse$/, " mice");
  if (trimmed.endsWith("Cockroach")) return trimmed.replace(/Cockroach$/, "Cockroaches");
  if (trimmed.endsWith("cockroach")) return trimmed.replace(/cockroach$/, "cockroaches");

  if (trimmed.endsWith("sh")) return \`\${trimmed}es\`;
  if (trimmed.endsWith("ch")) return \`\${trimmed}es\`;
  if (trimmed.endsWith("x")) return \`\${trimmed}es\`;
  if (trimmed.endsWith("s")) return trimmed;
  if (trimmed.endsWith("y")) return \`\${trimmed.slice(0, -1)}ies\`;

  return \`\${trimmed}s\`;
}`;

const pluralizeNameFunction = pluralizePestNameFunction.replace(
  "function pluralizePestName(name: string)",
  "function pluralizeName(name: string)"
);

function replaceFunction(content, functionName, replacement) {
  const start = content.indexOf(`function ${functionName}`);
  if (start === -1) return content;

  let braceStart = content.indexOf("{", start);
  if (braceStart === -1) return content;

  let depth = 0;
  let end = braceStart;

  for (let i = braceStart; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") depth--;

    if (depth === 0) {
      end = i + 1;
      break;
    }
  }

  return content.slice(0, start) + replacement + content.slice(end);
}

function cleanBadText(content) {
  return content
    .replaceAll("Deer Mouses", "Deer Mice")
    .replaceAll("House Mouses", "House Mice")
    .replaceAll("Field Mouses", "Field Mice")
    .replaceAll("Mouses", "Mice")
    .replaceAll("deer mouses", "deer mice")
    .replaceAll("house mouses", "house mice")
    .replaceAll("mouses", "mice")
    .replaceAll("Brown Banded Cockroachs", "Brown-Banded Cockroaches")
    .replaceAll("Cockroachs", "Cockroaches");
}

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log(`Skipping missing file: ${file}`);
    continue;
  }

  let content = fs.readFileSync(file, "utf8");

  content = cleanBadText(content);
  content = replaceFunction(content, "pluralizePestName", pluralizePestNameFunction);
  content = replaceFunction(content, "pluralizeName", pluralizeNameFunction);
  content = cleanBadText(content);

  fs.writeFileSync(file, content, "utf8");
  console.log(`✅ Patched ${file}`);
}

console.log("✅ Fixed mouse and cockroach pluralization everywhere.");
