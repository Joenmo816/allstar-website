// tools/generate-pests.mjs
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const IMGDIR = path.join(ROOT, "public", "images", "pests");
const OUT = path.join(ROOT, "src", "data", "pests.generated.ts");

const header = `/* AUTO-GENERATED from public/images/pests */
export type Risk = "High" | "Medium" | "Low";
export type Group = "Ant" | "Spider" | "Roach" | "Wasp/Hornet" | "Rodent" | "Termite" | "Other";

export type PestFacts = {
  biology?: string;
  behavior?: string;
  attractant?: string;
  lifecycle?: string;
  signs?: string;
  damage?: string;
  seasonality?: string;
  prevention?: string;
  monitoring?: string;
};

export type Pest = {
  name: string;
  slug: string;
  image: string;
  group: Group;
  risk: Risk;
  description?: string;
  facts?: PestFacts;
};

`;

function toTitleCase(input) {
  return input
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function slugifyFromFilename(file) {
  return file
    .replace(/\.(jpg|jpeg|png|webp)$/i, "")
    .trim()
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-");
}

function inferGroup(slug, name) {
  const value = `${slug} ${name}`.toLowerCase();

  if (value.includes("ant")) return "Ant";
  if (value.includes("spider") || value.includes("widow") || value.includes("recluse") || value.includes("daddy-longlegs")) return "Spider";
  if (value.includes("roach")) return "Roach";
  if (
    value.includes("wasp") ||
    value.includes("hornet") ||
    value.includes("yellowjacket") ||
    value.includes("mud-dauber") ||
    value.includes("bee")
  ) return "Wasp/Hornet";
  if (value.includes("mouse") || value.includes("rat")) return "Rodent";
  if (value.includes("termite")) return "Termite";

  return "Other";
}

function inferRisk(group, slug, name) {
  const value = `${slug} ${name}`.toLowerCase();

  if (
    value.includes("brown-recluse") ||
    value.includes("black-widow") ||
    value.includes("termite") ||
    value.includes("german-cockroach") ||
    value.includes("bed-bug") ||
    value.includes("rat") ||
    value.includes("mouse") ||
    value.includes("tick")
  ) {
    return "High";
  }

  if (group === "Roach" || group === "Rodent" || group === "Wasp/Hornet" || group === "Termite") {
    return "Medium";
  }

  return "Low";
}

function buildFacts(name, group, risk) {
  const lcName = name.toLowerCase();

  const groupFacts = {
    "Ant": {
      biology: `${name} lives in colonies with workers, brood, and reproductives. Colony growth is influenced by food, moisture, and shelter availability.`,
      behavior: `${name} commonly forages in trails and may invade structures while searching for food or moisture.`,
      attractant: `Food crumbs, sweets, grease, moisture issues, and entry gaps can attract ${lcName}.`,
      lifecycle: `${name} develops through egg, larval, pupal, and adult stages.`,
      signs: `Visible trailing ants, indoor sightings, activity near kitchens or sinks, and colonies around foundations are common signs of ${lcName}.`,
      damage: `${name} is mainly a nuisance pest, though some ants may contaminate food or nest inside structural voids.`,
      seasonality: `${name} activity often increases in warmer months but indoor infestations may persist year-round.`,
      prevention: `Seal entry points, reduce moisture, keep food sealed, clean spills promptly, and address conducive conditions.`,
      monitoring: `Monitor kitchens, bathrooms, utility lines, and foundation edges for recurring ${lcName} activity.`,
    },
    "Spider": {
      biology: `${name} develops from egg sacs into juvenile spiders before reaching adulthood. Most species prefer quiet undisturbed areas.`,
      behavior: `${name} may hide in corners, storage areas, basements, garages, and other low-traffic areas.`,
      attractant: `${lcName} is often attracted by insect prey, clutter, and undisturbed harborage areas.`,
      lifecycle: `${name} develops from egg to spiderling to adult, with timing varying by species and environment.`,
      signs: `Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate ${lcName} presence.`,
      damage: `${name} is generally more of a nuisance than a structural pest, though some species raise health concerns.`,
      seasonality: `${name} activity may increase seasonally, especially when prey insects move indoors.`,
      prevention: `Reduce clutter, vacuum webs and egg sacs, seal gaps, and control other insects that serve as prey.`,
      monitoring: `Monitor basements, storage areas, garages, attics, and wall-floor junctions for ${lcName}.`,
    },
    "Roach": {
      biology: `${name} reproduces through egg cases and immature nymph stages before becoming an adult. Roaches thrive where food, water, and shelter are available.`,
      behavior: `${name} is usually active at night and hides in cracks, voids, appliances, drains, and secluded harborages during the day.`,
      attractant: `Moisture, food residue, grease buildup, clutter, and harborage voids attract ${lcName}.`,
      lifecycle: `${name} develops from egg case to nymph to adult.`,
      signs: `Live sightings, droppings, egg cases, shed skins, and musty odor can indicate ${lcName} activity.`,
      damage: `${name} can contaminate food and surfaces and may contribute to indoor sanitation and health concerns.`,
      seasonality: `${name} can remain active year-round indoors, especially in heated or humid environments.`,
      prevention: `Improve sanitation, eliminate leaks, seal gaps, reduce clutter, and use targeted professional treatment when needed.`,
      monitoring: `Monitor kitchens, bathrooms, utility penetrations, mechanical rooms, and dark hidden voids for ${lcName}.`,
    },
    "Wasp/Hornet": {
      biology: `${name} develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.`,
      behavior: `${name} may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.`,
      attractant: `Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract ${lcName}.`,
      lifecycle: `${name} develops through complete metamorphosis: egg, larva, pupa, and adult.`,
      signs: `Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate ${lcName} presence.`,
      damage: `${name} can create stinging risk around homes, entrances, play areas, and work spaces.`,
      seasonality: `${name} activity is usually highest during spring, summer, and early fall.`,
      prevention: `Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.`,
      monitoring: `Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting ${lcName}.`,
    },
    "Rodent": {
      biology: `${name} reproduces quickly when food, water, and shelter are available. Rodents can establish persistent indoor populations if entry points remain open.`,
      behavior: `${name} often travels along edges and concealed routes and may nest in attics, basements, garages, crawl spaces, and wall voids.`,
      attractant: `Food storage issues, pet food, clutter, vegetation, standing water, and structural gaps attract ${lcName}.`,
      lifecycle: `${name} develops from newborn to juvenile to adult and may reproduce multiple times per year.`,
      signs: `Droppings, gnaw marks, noises in walls or ceilings, nesting material, and rub marks can indicate ${lcName} activity.`,
      damage: `${name} can contaminate food, damage insulation, gnaw wiring and materials, and create health concerns.`,
      seasonality: `${name} pressure often increases during cooler months as rodents move indoors for warmth and shelter.`,
      prevention: `Seal entry points, improve sanitation, reduce clutter, trim vegetation, and combine trapping with exclusion.`,
      monitoring: `Monitor garages, attics, basements, crawl spaces, kitchens, utility penetrations, and exterior entry points for ${lcName}.`,
    },
    "Termite": {
      biology: `${name} lives in colonies with workers, soldiers, and reproductives. Colonies can remain hidden while feeding on cellulose materials.`,
      behavior: `${name} typically remains concealed in soil, wood, or mud tubes while foraging for structural cellulose.`,
      attractant: `Moisture issues, wood-to-soil contact, cellulose debris, and untreated structural vulnerabilities attract ${lcName}.`,
      lifecycle: `${name} develops from egg to immature stages to adult caste forms, including workers, soldiers, and swarmers.`,
      signs: `Mud tubes, damaged wood, hollow-sounding timber, discarded wings, and swarming activity may indicate ${lcName}.`,
      damage: `${name} can cause serious structural damage if left untreated.`,
      seasonality: `${name} activity may intensify seasonally, especially during swarming periods, though colonies remain active out of sight.`,
      prevention: `Reduce moisture, eliminate wood-to-soil contact, correct drainage issues, and schedule regular professional termite inspections.`,
      monitoring: `Monitor foundations, crawl spaces, sill plates, exterior expansion joints, and wood contact areas for ${lcName}.`,
    },
    "Other": {
      biology: `${name} follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.`,
      behavior: `${name} may become a nuisance indoors or around the structure depending on season, harborage, and available resources.`,
      attractant: `Moisture, food sources, harborage, vegetation, and structural entry points may attract ${lcName}.`,
      lifecycle: `${name} develops through species-specific life stages before reaching adulthood.`,
      signs: `Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate ${lcName} around the structure.`,
      damage: `${name} may cause nuisance issues, contamination, or property concerns depending on species and population level.`,
      seasonality: `${name} activity often changes with temperature, moisture, and seasonal environmental conditions.`,
      prevention: `Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.`,
      monitoring: `Monitor likely harborage areas, entry points, and locations with repeated ${lcName} activity.`,
    },
  };

  const facts = groupFacts[group];

  if (risk === "High") {
    facts.monitoring += ` Because ${lcName} is categorized as higher concern, early detection and professional response are especially important.`;
  }

  return facts;
}

function normalizeName(slug) {
  const map = {
    "american-cockroach": "American Cockroach",
    "american-house-spider": "American House Spider",
    "bald-faced-hornet": "Bald Faced Hornet",
    "bed-bug": "Bed Bug",
    "boxelder-bug": "Boxelder Bug",
    "brown-banded-cockroach": "Brown Banded Cockroach",
    "brown-recluse": "Brown Recluse Spider",
    "carpet-beetle": "Carpet Beetle",
    "cicada-killer": "Cicada Killer",
    "clover-mite": "Clover Mite",
    "common-house-spider": "Common House Spider",
    "deer-mouse": "Deer Mouse",
    "drugstore-beetle": "Drugstore Beetle",
    "european-hornet": "European Hornet",
    "flour-beetle": "Flour Beetle",
    "german-cockroach": "German Cockroach",
    "grain-beetle": "Grain Beetle",
    "house-centipede": "House Centipede",
    "house-mouse": "House Mouse",
    "indian-meal-moth": "Indian Meal Moth",
    "japanese-beetle": "Japanese Beetle",
    "lady-bug": "Lady Bug",
    "leaf-cutter-bee": "Leaf Cutter Bee",
    "mud-dauber": "Mud Dauber",
    "norway-rat": "Norway Rat",
    "odorous-house-ant": "Odorous House Ant",
    "oriental-cockroach": "Oriental Cockroach",
    "paper-wasp": "Paper Wasp",
    "pavement-ant": "Pavement Ant",
    "pill-bug": "Pill Bug",
    "praying-mantis": "Praying Mantis",
    "red-wasp": "Red Wasp",
    "roof-rat": "Roof Rat",
    "sawtooth-beetle": "Sawtooth Beetle",
    "smoky-brown-cockroach": "Smoky Brown Cockroach",
    "stink-bug": "Stink Bug",
    "subterranean-termite": "Subterranean Termite",
    "termite-swarmer": "Termite Swarmer",
    "walking-stick": "Walking Stick",
    "wolf-spider": "Wolf Spider",
    "yellow-sac-spider": "Yellow Sac Spider",
  };

  return map[slug] || toTitleCase(slug);
}

function normalizeImage(file) {
  return `/images/pests/${file}`;
}

const files = fs
  .readdirSync(IMGDIR)
  .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
  .sort((a, b) => a.localeCompare(b));

const pests = files.map((file) => {
  const slug = slugifyFromFilename(file);
  const name = normalizeName(slug);
  const group = inferGroup(slug, name);
  const risk = inferRisk(group, slug, name);

  return {
    name,
    slug,
    image: normalizeImage(file),
    group,
    risk,
    description: `${name} is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.`,
    facts: buildFacts(name, group, risk),
  };
});

const body = `export const pests: Pest[] = ${JSON.stringify(pests, null, 2)};\n\nexport function getPest(slug: string): Pest | undefined {\n  return pests.find(p => p.slug === slug);\n}\n`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, header + body, "utf8");

console.log(`Generated ${pests.length} pests -> ${path.relative(ROOT, OUT)}`);