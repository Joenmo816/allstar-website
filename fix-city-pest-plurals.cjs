const fs = require("fs");

const file = "C:/allstar-website/src/app/[city]/pest-library/[slug]/page.tsx";

let content = fs.readFileSync(file, "utf8");

const newFunction = `function pluralizeName(name: string) {
  const special: Record<string, string> = {
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
    "Daddy Longlegs": "Daddy Longlegs",

    "House Mouse": "House Mice",
    "Deer Mouse": "Deer Mice",
    "Norway Rat": "Norway Rats",
    "Roof Rat": "Roof Rats",
  };

  const trimmed = name.trim();

  if (special[trimmed]) return special[trimmed];

  if (trimmed.endsWith("Cockroach")) {
    return trimmed.replace(/Cockroach$/, "Cockroaches");
  }

  if (trimmed.endsWith("Mouse")) {
    return trimmed.replace(/Mouse$/, "Mice");
  }

  if (trimmed.endsWith("roach")) return \`\${trimmed}es\`;
  if (trimmed.endsWith("sh")) return \`\${trimmed}es\`;
  if (trimmed.endsWith("ch")) return \`\${trimmed}es\`;
  if (trimmed.endsWith("x")) return \`\${trimmed}es\`;
  if (trimmed.endsWith("s")) return trimmed;
  if (trimmed.endsWith("y")) return \`\${trimmed.slice(0, -1)}ies\`;

  return \`\${trimmed}s\`;
}`;

const start = content.indexOf("function pluralizeName");
if (start === -1) {
  throw new Error("Could not find function pluralizeName in city pest page.");
}

const nextFunction = content.indexOf("\nfunction ", start + 1);
if (nextFunction === -1) {
  throw new Error("Could not find next function after pluralizeName.");
}

content = content.slice(0, start) + newFunction + "\n\n" + content.slice(nextFunction + 1);

fs.writeFileSync(file, content, "utf8");

console.log("✅ Replaced pluralizeName() in city pest page.");
