const fs = require("fs");

const file = "C:/allstar-website/src/data/pests.generated.ts";

let content = fs.readFileSync(file, "utf8");

function pluralize(name) {
  const special = {
    "Brown Banded Cockroach": "Brown-banded cockroaches",
    "American Cockroach": "American cockroaches",
    "German Cockroach": "German cockroaches",
    "Oriental Cockroach": "Oriental cockroaches",
    "Smoky Brown Cockroach": "Smokybrown cockroaches",
    "Subterranean Termite": "Subterranean termites",
    "Termite Swarmer": "Termite swarmers",
    "Bald Faced Hornet": "Bald-faced hornets",
    "Yellowjacket": "Yellowjackets",
    "Honey Bee": "Honey bees",
    "Bumble Bee": "Bumble bees",
    "Carpenter Bee": "Carpenter bees",
    "Mason Bee": "Mason bees",
    "Leaf Cutter Bee": "Leafcutter bees",
    "Sweat Bee": "Sweat bees",
    "Lady Bug": "Ladybugs",
    "Black Widow": "Black widows",
    "Brown Widow": "Brown widows",
    "Daddy Longlegs": "Daddy longlegs",
  };

  if (special[name]) return special[name];

  if (name.endsWith("roach")) return `${name}es`;
  if (name.endsWith("sh")) return `${name}es`;
  if (name.endsWith("ch")) return `${name}es`;
  if (name.endsWith("x")) return `${name}es`;
  if (name.endsWith("s")) return name;
  if (name.endsWith("y")) return `${name.slice(0, -1)}ies`;

  return `${name}s`;
}

function descriptionFor(name) {
  const plural = pluralize(name);

  if (/bee/i.test(name)) {
    return `${plural} may be found around homes, decks, sheds, gardens, trees, rooflines, or wall voids. Some bees are beneficial pollinators, so proper identification matters before any treatment decision is made.`;
  }

  if (/wasp|hornet|yellowjacket|dauber|cicada killer/i.test(name)) {
    return `${plural} can become a concern when nests are built near doors, decks, porches, playgrounds, rooflines, wall voids, or other high-traffic areas around the home.`;
  }

  if (/termite/i.test(name)) {
    return `${plural} are wood-destroying insects that can stay hidden for long periods, which makes proper identification and a thorough termite inspection important.`;
  }

  if (/cockroach/i.test(name)) {
    return `${plural} are indoor pests that can spread through kitchens, bathrooms, cabinets, wall voids, appliances, and other protected areas if the problem is not handled correctly.`;
  }

  if (/ant/i.test(name)) {
    return `${plural} can trail into homes through cracks, foundations, windows, doors, utility lines, and moisture-prone areas while searching for food, water, or nesting sites.`;
  }

  if (/spider|widow|recluse/i.test(name)) {
    return `${plural} are commonly found around garages, basements, crawlspaces, storage areas, landscaping, and other places where insects are available as food.`;
  }

  if (/mouse|rat|rodent/i.test(name)) {
    return `${plural} can enter through small gaps around foundations, garage doors, utility penetrations, crawlspaces, and rooflines while searching for food, warmth, and shelter.`;
  }

  if (/flea|tick|mosquito/i.test(name)) {
    return `${plural} can create biting pest issues around people, pets, yards, shaded areas, tall grass, and places where moisture or wildlife activity is present.`;
  }

  return `${plural} can become a nuisance around homes, yards, garages, crawlspaces, basements, and other areas when conditions allow them to move in or build up.`;
}

content = content.replace(
  /("name":\s*"([^"]+)"[\s\S]*?"description":\s*")([^"]*)(")/g,
  (match, prefix, name, oldDescription, suffix) => {
    if (!oldDescription.includes("is a pest that may be encountered")) {
      return match;
    }

    return `${prefix}${descriptionFor(name)}${suffix}`;
  }
);

fs.writeFileSync(file, content, "utf8");

console.log("✅ Fixed generic pest descriptions in pests.generated.ts");
