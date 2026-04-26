const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "src", "data", "pests.generated.ts");
const source = fs.readFileSync(filePath, "utf8");

const match = source.match(/export const pests: Pest\[] = (\[[\s\S]*?\]);\s*$/);

if (!match) {
  throw new Error("Could not find pest array in src/data/pests.generated.ts");
}

const pests = Function(`"use strict"; return (${match[1]});`)();

const irregularPlural = new Map([
  ["Mouse", "Mice"],
  ["House Mouse", "House Mice"],
  ["Deer Mouse", "Deer Mice"],
  ["Norway Rat", "Norway Rats"],
  ["Roof Rat", "Roof Rats"],
  ["Black Widow", "Black Widows"],
  ["Brown Widow", "Brown Widows"],
  ["Brown Recluse Spider", "Brown Recluse Spiders"],
  ["Bald Faced Hornet", "Bald Faced Hornets"],
  ["Brown Banded Cockroach", "Brown Banded Cockroaches"],
  ["Brown Banded Cockroaches", "Brown Banded Cockroaches"],
]);

function toTitleCaseWords(value) {
  return value
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((word) => {
      if (!word) return word;
      const lower = word.toLowerCase();
      if (["and", "or", "of", "the"].includes(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}

function pluralizeName(name) {
  const clean = toTitleCaseWords(name);

  if (irregularPlural.has(clean)) return irregularPlural.get(clean);

  if (clean.endsWith("Cockroaches")) return clean;
  if (clean.endsWith("Roaches")) return clean;
  if (clean.endsWith("Ants")) return clean;
  if (clean.endsWith("Spiders")) return clean;
  if (clean.endsWith("Termites")) return clean;
  if (clean.endsWith("Rodents")) return clean;
  if (clean.endsWith("Wasps")) return clean;
  if (clean.endsWith("Hornets")) return clean;
  if (clean.endsWith("Bees")) return clean;
  if (clean.endsWith("Bugs")) return clean;
  if (clean.endsWith("Beetles")) return clean;
  if (clean.endsWith("Crickets")) return clean;
  if (clean.endsWith("Flies")) return clean;
  if (clean.endsWith("Ticks")) return clean;
  if (clean.endsWith("Fleas")) return clean;
  if (clean.endsWith("Mosquitoes")) return clean;
  if (clean.endsWith("Moths")) return clean;
  if (clean.endsWith("Silverfish")) return clean;
  if (clean.endsWith("Centipedes")) return clean;
  if (clean.endsWith("Millipedes")) return clean;
  if (clean.endsWith("Earwigs")) return clean;
  if (clean.endsWith("Stink Bugs")) return clean;
  if (clean.endsWith("Boxelder Bugs")) return clean;
  if (clean.endsWith("Lady Beetles")) return clean;
  if (clean.endsWith("Bed Bugs")) return clean;

  if (clean.endsWith("Cockroach")) return clean.replace(/Cockroach$/, "Cockroaches");
  if (clean.endsWith("Roach")) return clean.replace(/Roach$/, "Roaches");
  if (clean.endsWith("Ant")) return clean.replace(/Ant$/, "Ants");
  if (clean.endsWith("Spider")) return clean.replace(/Spider$/, "Spiders");
  if (clean.endsWith("Termite")) return clean.replace(/Termite$/, "Termites");
  if (clean.endsWith("Rodent")) return clean.replace(/Rodent$/, "Rodents");
  if (clean.endsWith("Wasp")) return clean.replace(/Wasp$/, "Wasps");
  if (clean.endsWith("Hornet")) return clean.replace(/Hornet$/, "Hornets");
  if (clean.endsWith("Bee")) return clean.replace(/Bee$/, "Bees");
  if (clean.endsWith("Bug")) return clean.replace(/Bug$/, "Bugs");
  if (clean.endsWith("Beetle")) return clean.replace(/Beetle$/, "Beetles");
  if (clean.endsWith("Cricket")) return clean.replace(/Cricket$/, "Crickets");
  if (clean.endsWith("Fly")) return clean.replace(/Fly$/, "Flies");
  if (clean.endsWith("Tick")) return clean.replace(/Tick$/, "Ticks");
  if (clean.endsWith("Flea")) return clean.replace(/Flea$/, "Fleas");
  if (clean.endsWith("Mosquito")) return clean.replace(/Mosquito$/, "Mosquitoes");
  if (clean.endsWith("Moth")) return clean.replace(/Moth$/, "Moths");
  if (clean.endsWith("Centipede")) return clean.replace(/Centipede$/, "Centipedes");
  if (clean.endsWith("Millipede")) return clean.replace(/Millipede$/, "Millipedes");
  if (clean.endsWith("Earwig")) return clean.replace(/Earwig$/, "Earwigs");

  return clean.endsWith("s") ? clean : `${clean}s`;
}

function lowerFirst(value) {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

function groupText(group, pluralName, lowerPlural, risk) {
  const highRiskNote =
    risk === "High"
      ? ` Because ${lowerPlural} are a higher-concern pest, early identification and professional response are especially important.`
      : "";

  switch (group) {
    case "Ant":
      return {
        description: `${pluralName} are pests that may be found in and around homes, wall voids, kitchens, bathrooms, foundations, and moisture-prone areas. Proper identification helps determine the right treatment strategy.`,
        biology: `${pluralName} live in colonies with workers, brood, and reproductives. Colony growth is influenced by food, moisture, nesting sites, and shelter availability.`,
        behavior: `${pluralName} commonly forage in trails and may invade structures while searching for food, moisture, or nesting areas.`,
        attractant: `Food crumbs, sweets, grease, moisture problems, wood decay, vegetation contact, and exterior entry gaps can attract ${lowerPlural}.`,
        lifecycle: `${pluralName} develop through egg, larval, pupal, and adult stages.`,
        signs: `Visible trailing ants, indoor sightings, activity near kitchens or sinks, and colonies around foundations are common signs of ${lowerPlural}.`,
        damage: `${pluralName} are often nuisance pests, but some species can contaminate food, nest in wall voids, or indicate moisture conditions that should be inspected.`,
        seasonality: `${pluralName} are often more active in warmer months, but indoor activity can continue year-round when food, moisture, and shelter are available.`,
        prevention: `Seal entry points, reduce moisture, trim vegetation away from the structure, keep food sealed, clean spills promptly, and address conducive conditions.`,
        monitoring: `Monitor kitchens, bathrooms, utility lines, foundation edges, exterior trails, and moisture-prone areas for recurring ${lowerPlural} activity.${highRiskNote}`,
      };

    case "Roach":
      return {
        description: `${pluralName} are pests that may be found in homes, apartments, restaurants, kitchens, bathrooms, basements, drains, and other sheltered areas. Proper identification helps determine the right control strategy.`,
        biology: `${pluralName} reproduce through egg cases and immature nymph stages before becoming adults. Cockroaches thrive where food, water, warmth, and shelter are available.`,
        behavior: `${pluralName} are usually active at night and hide during the day in cracks, voids, appliances, drains, cabinets, and other secluded harborages.`,
        attractant: `Moisture, food residue, grease buildup, clutter, cardboard, and protected harborage areas can attract ${lowerPlural}.`,
        lifecycle: `${pluralName} develop from egg cases to nymphs and then adults.`,
        signs: `Live sightings, droppings, egg cases, shed skins, and musty odor can indicate ${lowerPlural} activity.`,
        damage: `${pluralName} can contaminate food and surfaces and may contribute to sanitation and indoor health concerns if not addressed.`,
        seasonality: `${pluralName} can remain active year-round indoors, especially in heated, humid, or food-rich environments.`,
        prevention: `Improve sanitation, eliminate leaks, seal gaps, reduce clutter, remove food residue, and use targeted professional treatment when needed.`,
        monitoring: `Monitor kitchens, bathrooms, utility penetrations, mechanical rooms, drains, appliances, and dark hidden voids for ${lowerPlural}.${highRiskNote}`,
      };

    case "Spider":
      return {
        description: `${pluralName} are pests that may be found in and around homes, basements, garages, storage areas, crawl spaces, and other low-traffic locations. Proper identification helps determine the right control strategy.`,
        biology: `${pluralName} develop from egg sacs into spiderlings before reaching adulthood. Many spiders prefer quiet, undisturbed areas where insect prey is available.`,
        behavior: `${pluralName} may hide in corners, storage areas, basements, garages, attics, wall-floor junctions, and other protected spaces.`,
        attractant: `Insect prey, clutter, exterior lighting, gaps around the structure, and undisturbed harborage areas can attract ${lowerPlural}.`,
        lifecycle: `${pluralName} develop from eggs to spiderlings and then adults, with timing varying by species and environment.`,
        signs: `Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate ${lowerPlural} are present.`,
        damage: `${pluralName} are usually nuisance pests, although some species can raise health concerns and should be handled carefully.`,
        seasonality: `${pluralName} may become more noticeable seasonally, especially when prey insects increase or move indoors.`,
        prevention: `Reduce clutter, vacuum webs and egg sacs, seal gaps, reduce exterior lighting when practical, and control insects that serve as prey.`,
        monitoring: `Monitor basements, storage areas, garages, attics, crawl spaces, and wall-floor junctions for ${lowerPlural}.${highRiskNote}`,
      };

    case "Wasp/Hornet":
      return {
        description: `${pluralName} are stinging pests that may be found around homes, eaves, soffits, shrubs, trees, wall voids, sheds, decks, and outdoor living areas. Proper identification helps determine the safest control strategy.`,
        biology: `${pluralName} develop from eggs to larvae, pupae, and adults. Colonies are often seasonal, with worker populations increasing during warmer months.`,
        behavior: `${pluralName} may build nests around eaves, voids, shrubs, trees, wall cavities, ground locations, or other protected areas depending on the species.`,
        attractant: `Sheltered nesting sites, flowering plants, outdoor food, sugary residues, trash, and structural voids can attract ${lowerPlural}.`,
        lifecycle: `${pluralName} develop through complete metamorphosis: egg, larva, pupa, and adult.`,
        signs: `Visible adults, nest construction, activity around eaves or entry points, and increased flying insects can indicate ${lowerPlural} are present.`,
        damage: `${pluralName} can create a stinging risk around entrances, play areas, work spaces, decks, patios, and other high-traffic areas.`,
        seasonality: `${pluralName} are usually most active during spring, summer, and early fall.`,
        prevention: `Remove attractants, seal voids, inspect eaves and exterior structures, keep trash sealed, and avoid disturbing active nests.`,
        monitoring: `Monitor eaves, soffits, shrubs, sheds, fences, decks, and void entry points for nesting ${lowerPlural}.${highRiskNote}`,
      };

    case "Rodent":
      return {
        description: `${pluralName} are pests that may enter homes, garages, basements, crawl spaces, attics, sheds, and commercial structures. Proper identification helps determine the right exclusion and control strategy.`,
        biology: `${pluralName} reproduce quickly when food, water, shelter, and nesting material are available. Population growth can accelerate when entry points are not corrected.`,
        behavior: `${pluralName} often travel along walls, utility lines, foundations, cluttered areas, and protected pathways while searching for food and shelter.`,
        attractant: `Food, pet food, bird seed, trash, clutter, exterior gaps, garage doors, utility penetrations, and nesting material can attract ${lowerPlural}.`,
        lifecycle: `${pluralName} develop from newborns to juveniles and adults, with reproduction depending on species, food, shelter, and environmental conditions.`,
        signs: `Droppings, gnaw marks, scratching sounds, nesting material, rub marks, odors, and sightings may indicate ${lowerPlural} are active.`,
        damage: `${pluralName} can contaminate surfaces, damage insulation, chew wiring, gnaw structural materials, and create sanitation concerns.`,
        seasonality: `${pluralName} may move indoors during colder weather but can remain active around structures year-round.`,
        prevention: `Seal entry points, remove food sources, store pet food and bird seed securely, reduce clutter, trim vegetation, and correct exterior gaps.`,
        monitoring: `Monitor garages, basements, attics, crawl spaces, utility penetrations, kitchens, and foundation edges for ${lowerPlural}.${highRiskNote}`,
      };

    case "Termite":
      return {
        description: `${pluralName} are wood-destroying insects that may be found in soil, foundations, crawl spaces, wall voids, structural wood, and moisture-prone areas. Proper identification is critical because termite damage is often hidden.`,
        biology: `${pluralName} live in organized colonies with workers, soldiers, and reproductives. Colony growth depends on moisture, cellulose food sources, soil access, and protected travel routes.`,
        behavior: `${pluralName} often remain hidden while feeding on cellulose materials and moving through soil, shelter tubes, cracks, and structural voids.`,
        attractant: `Moisture problems, wood-to-soil contact, cellulose debris, mulch against foundations, plumbing leaks, and crawl-space conditions can attract ${lowerPlural}.`,
        lifecycle: `${pluralName} develop from eggs into immature stages and then into workers, soldiers, or reproductives depending on colony needs.`,
        signs: `Mud tubes, swarmers, discarded wings, damaged wood, blistered surfaces, and moisture-prone structural areas can indicate ${lowerPlural}.`,
        damage: `${pluralName} can cause serious hidden structural damage and should be inspected promptly when conditions or signs are present.`,
        seasonality: `${pluralName} can remain active year-round below ground or inside protected structural areas, with swarming activity often appearing seasonally.`,
        prevention: `Correct moisture problems, reduce wood-to-soil contact, remove cellulose debris, keep mulch away from siding, and schedule professional inspections.`,
        monitoring: `Monitor foundations, crawl spaces, basements, sill plates, plumbing areas, and moisture-prone wood for ${lowerPlural}.${highRiskNote}`,
      };

    default:
      return {
        description: `${pluralName} are pests that may be found in or around homes, structures, landscaping, storage areas, or moisture-prone locations. Proper identification helps determine the right control strategy.`,
        biology: `${pluralName} follow species-specific life cycles that depend on food, moisture, shelter, and favorable environmental conditions.`,
        behavior: `${pluralName} may become a nuisance indoors or around structures depending on season, harborage, entry points, and available resources.`,
        attractant: `Moisture, food sources, harborage, vegetation, lighting, clutter, and structural entry points can attract ${lowerPlural}.`,
        lifecycle: `${pluralName} develop through species-specific life stages before reaching adulthood.`,
        signs: `Visible sightings, nuisance activity, debris, damage, odors, or repeated presence may indicate ${lowerPlural} are active around the structure.`,
        damage: `${pluralName} may cause nuisance issues, contamination concerns, or property problems depending on species and population level.`,
        seasonality: `${pluralName} activity often changes with temperature, moisture, and seasonal environmental conditions.`,
        prevention: `Reduce conducive conditions, seal gaps, improve sanitation, manage moisture, reduce clutter, and address harborage areas.`,
        monitoring: `Monitor likely harborage areas, entry points, and locations with repeated ${lowerPlural} activity.${highRiskNote}`,
      };
  }
}

const normalized = pests.map((pest) => {
  const pluralName = pluralizeName(pest.name);
  const lowerPlural = lowerFirst(pluralName);

  const facts = groupText(pest.group, pluralName, lowerPlural, pest.risk);

  return {
    ...pest,
    name: pluralName,
    description: facts.description,
    facts,
  };
});

const header = `/* AUTO-GENERATED from public/images/pests */\nexport type Risk = "High" | "Medium" | "Low";\nexport type Group = "Ant" | "Spider" | "Roach" | "Wasp/Hornet" | "Rodent" | "Termite" | "Other";\n\nexport type PestFacts = {\n  biology?: string;\n  behavior?: string;\n  attractant?: string;\n  lifecycle?: string;\n  signs?: string;\n  damage?: string;\n  seasonality?: string;\n  prevention?: string;\n  monitoring?: string;\n};\n\nexport type Pest = {\n  name: string;\n  slug: string;\n  image: string;\n  group: Group;\n  risk: Risk;\n  description?: string;\n  facts?: PestFacts;\n};\n\n`;

const body = `export const pests: Pest[] = ${JSON.stringify(normalized, null, 2)};\n`;

fs.writeFileSync(filePath, header + body, "utf8");

console.log(`Updated ${normalized.length} pests with plural, professional grammar.`);
