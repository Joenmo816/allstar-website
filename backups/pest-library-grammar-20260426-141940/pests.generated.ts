/* AUTO-GENERATED from public/images/pests */
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

export const pests: Pest[] = [
  {
    "name": "Acrobat Ant",
    "slug": "acrobat-ant",
    "image": "/images/pests/acrobat-ant.jpg",
    "group": "Ant",
    "risk": "Low",
    "description": "Acrobat Ant is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Acrobat Ant lives in colonies with workers, brood, and reproductives. Colony growth is influenced by food, moisture, and shelter availability.",
      "behavior": "Acrobat Ant commonly forages in trails and may invade structures while searching for food or moisture.",
      "attractant": "Food crumbs, sweets, grease, moisture issues, and entry gaps can attract acrobat ant.",
      "lifecycle": "Acrobat Ant develops through egg, larval, pupal, and adult stages.",
      "signs": "Visible trailing ants, indoor sightings, activity near kitchens or sinks, and colonies around foundations are common signs of acrobat ant.",
      "damage": "Acrobat Ant is mainly a nuisance pest, though some ants may contaminate food or nest inside structural voids.",
      "seasonality": "Acrobat Ant activity often increases in warmer months but indoor infestations may persist year-round.",
      "prevention": "Seal entry points, reduce moisture, keep food sealed, clean spills promptly, and address conducive conditions.",
      "monitoring": "Monitor kitchens, bathrooms, utility lines, and foundation edges for recurring acrobat ant activity."
    }
  },
  {
    "name": "American Cockroach",
    "slug": "american-cockroach",
    "image": "/images/pests/American-Cockroach.jpg",
    "group": "Roach",
    "risk": "Medium",
    "description": "American Cockroach is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "American Cockroach reproduces through egg cases and immature nymph stages before becoming an adult. Roaches thrive where food, water, and shelter are available.",
      "behavior": "American Cockroach is usually active at night and hides in cracks, voids, appliances, drains, and secluded harborages during the day.",
      "attractant": "Moisture, food residue, grease buildup, clutter, and harborage voids attract american cockroach.",
      "lifecycle": "American Cockroach develops from egg case to nymph to adult.",
      "signs": "Live sightings, droppings, egg cases, shed skins, and musty odor can indicate american cockroach activity.",
      "damage": "American Cockroach can contaminate food and surfaces and may contribute to indoor sanitation and health concerns.",
      "seasonality": "American Cockroach can remain active year-round indoors, especially in heated or humid environments.",
      "prevention": "Improve sanitation, eliminate leaks, seal gaps, reduce clutter, and use targeted professional treatment when needed.",
      "monitoring": "Monitor kitchens, bathrooms, utility penetrations, mechanical rooms, and dark hidden voids for american cockroach."
    }
  },
  {
    "name": "American House Spider",
    "slug": "american-house-spider",
    "image": "/images/pests/american-house-spider.jpg",
    "group": "Spider",
    "risk": "Low",
    "description": "American House Spider is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "American House Spider develops from egg sacs into juvenile spiders before reaching adulthood. Most species prefer quiet undisturbed areas.",
      "behavior": "American House Spider may hide in corners, storage areas, basements, garages, and other low-traffic areas.",
      "attractant": "american house spider is often attracted by insect prey, clutter, and undisturbed harborage areas.",
      "lifecycle": "American House Spider develops from egg to spiderling to adult, with timing varying by species and environment.",
      "signs": "Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate american house spider presence.",
      "damage": "American House Spider is generally more of a nuisance than a structural pest, though some species raise health concerns.",
      "seasonality": "American House Spider activity may increase seasonally, especially when prey insects move indoors.",
      "prevention": "Reduce clutter, vacuum webs and egg sacs, seal gaps, and control other insects that serve as prey.",
      "monitoring": "Monitor basements, storage areas, garages, attics, and wall-floor junctions for american house spider."
    }
  },
  {
    "name": "Argentine Ant",
    "slug": "argentine-ant",
    "image": "/images/pests/argentine-ant.jpg",
    "group": "Ant",
    "risk": "Low",
    "description": "Argentine Ant is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Argentine Ant lives in colonies with workers, brood, and reproductives. Colony growth is influenced by food, moisture, and shelter availability.",
      "behavior": "Argentine Ant commonly forages in trails and may invade structures while searching for food or moisture.",
      "attractant": "Food crumbs, sweets, grease, moisture issues, and entry gaps can attract argentine ant.",
      "lifecycle": "Argentine Ant develops through egg, larval, pupal, and adult stages.",
      "signs": "Visible trailing ants, indoor sightings, activity near kitchens or sinks, and colonies around foundations are common signs of argentine ant.",
      "damage": "Argentine Ant is mainly a nuisance pest, though some ants may contaminate food or nest inside structural voids.",
      "seasonality": "Argentine Ant activity often increases in warmer months but indoor infestations may persist year-round.",
      "prevention": "Seal entry points, reduce moisture, keep food sealed, clean spills promptly, and address conducive conditions.",
      "monitoring": "Monitor kitchens, bathrooms, utility lines, and foundation edges for recurring argentine ant activity."
    }
  },
  {
    "name": "Asian Beetle",
    "slug": "asian-beetle",
    "image": "/images/pests/asian-beetle.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Asian Beetle is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Asian Beetle develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Asian Beetle may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract asian beetle.",
      "lifecycle": "Asian Beetle develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate asian beetle presence.",
      "damage": "Asian Beetle can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Asian Beetle activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting asian beetle."
    }
  },
  {
    "name": "Assassin Bug",
    "slug": "assassin-bug",
    "image": "/images/pests/assassin-bug.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Assassin Bug is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Assassin Bug follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Assassin Bug may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract assassin bug.",
      "lifecycle": "Assassin Bug develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate assassin bug around the structure.",
      "damage": "Assassin Bug may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Assassin Bug activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated assassin bug activity."
    }
  },
  {
    "name": "Bald Faced Hornet",
    "slug": "bald-faced-hornet",
    "image": "/images/pests/Bald-Faced-Hornet.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Bald Faced Hornet is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Bald Faced Hornet develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Bald Faced Hornet may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract bald faced hornet.",
      "lifecycle": "Bald Faced Hornet develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate bald faced hornet presence.",
      "damage": "Bald Faced Hornet can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Bald Faced Hornet activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting bald faced hornet."
    }
  },
  {
    "name": "Barn Spider",
    "slug": "barn-spider",
    "image": "/images/pests/barn-spider.jpg",
    "group": "Spider",
    "risk": "Low",
    "description": "Barn Spider is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Barn Spider develops from egg sacs into juvenile spiders before reaching adulthood. Most species prefer quiet undisturbed areas.",
      "behavior": "Barn Spider may hide in corners, storage areas, basements, garages, and other low-traffic areas.",
      "attractant": "barn spider is often attracted by insect prey, clutter, and undisturbed harborage areas.",
      "lifecycle": "Barn Spider develops from egg to spiderling to adult, with timing varying by species and environment.",
      "signs": "Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate barn spider presence.",
      "damage": "Barn Spider is generally more of a nuisance than a structural pest, though some species raise health concerns.",
      "seasonality": "Barn Spider activity may increase seasonally, especially when prey insects move indoors.",
      "prevention": "Reduce clutter, vacuum webs and egg sacs, seal gaps, and control other insects that serve as prey.",
      "monitoring": "Monitor basements, storage areas, garages, attics, and wall-floor junctions for barn spider."
    }
  },
  {
    "name": "Bat Bug",
    "slug": "bat-bug",
    "image": "/images/pests/bat-bug.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Bat Bug is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Bat Bug follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Bat Bug may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract bat bug.",
      "lifecycle": "Bat Bug develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate bat bug around the structure.",
      "damage": "Bat Bug may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Bat Bug activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated bat bug activity."
    }
  },
  {
    "name": "Bed Bug",
    "slug": "bed-bug",
    "image": "/images/pests/Bed-Bug.jpg",
    "group": "Other",
    "risk": "High",
    "description": "Bed Bug is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Bed Bug follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Bed Bug may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract bed bug.",
      "lifecycle": "Bed Bug develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate bed bug around the structure.",
      "damage": "Bed Bug may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Bed Bug activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated bed bug activity. Because bed bug is categorized as higher concern, early detection and professional response are especially important."
    }
  },
  {
    "name": "Black Widow",
    "slug": "black-widow",
    "image": "/images/pests/black-widow.jpg",
    "group": "Spider",
    "risk": "High",
    "description": "Black Widow is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Black Widow develops from egg sacs into juvenile spiders before reaching adulthood. Most species prefer quiet undisturbed areas.",
      "behavior": "Black Widow may hide in corners, storage areas, basements, garages, and other low-traffic areas.",
      "attractant": "black widow is often attracted by insect prey, clutter, and undisturbed harborage areas.",
      "lifecycle": "Black Widow develops from egg to spiderling to adult, with timing varying by species and environment.",
      "signs": "Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate black widow presence.",
      "damage": "Black Widow is generally more of a nuisance than a structural pest, though some species raise health concerns.",
      "seasonality": "Black Widow activity may increase seasonally, especially when prey insects move indoors.",
      "prevention": "Reduce clutter, vacuum webs and egg sacs, seal gaps, and control other insects that serve as prey.",
      "monitoring": "Monitor basements, storage areas, garages, attics, and wall-floor junctions for black widow. Because black widow is categorized as higher concern, early detection and professional response are especially important."
    }
  },
  {
    "name": "Blue Mud Dauber",
    "slug": "blue-mud-dauber",
    "image": "/images/pests/blue-mud-dauber.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Blue Mud Dauber is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Blue Mud Dauber develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Blue Mud Dauber may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract blue mud dauber.",
      "lifecycle": "Blue Mud Dauber develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate blue mud dauber presence.",
      "damage": "Blue Mud Dauber can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Blue Mud Dauber activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting blue mud dauber."
    }
  },
  {
    "name": "Bold Jumping Spider",
    "slug": "bold-jumping-spider",
    "image": "/images/pests/bold-jumping-spider.jpg",
    "group": "Spider",
    "risk": "Low",
    "description": "Bold Jumping Spider is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Bold Jumping Spider develops from egg sacs into juvenile spiders before reaching adulthood. Most species prefer quiet undisturbed areas.",
      "behavior": "Bold Jumping Spider may hide in corners, storage areas, basements, garages, and other low-traffic areas.",
      "attractant": "bold jumping spider is often attracted by insect prey, clutter, and undisturbed harborage areas.",
      "lifecycle": "Bold Jumping Spider develops from egg to spiderling to adult, with timing varying by species and environment.",
      "signs": "Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate bold jumping spider presence.",
      "damage": "Bold Jumping Spider is generally more of a nuisance than a structural pest, though some species raise health concerns.",
      "seasonality": "Bold Jumping Spider activity may increase seasonally, especially when prey insects move indoors.",
      "prevention": "Reduce clutter, vacuum webs and egg sacs, seal gaps, and control other insects that serve as prey.",
      "monitoring": "Monitor basements, storage areas, garages, attics, and wall-floor junctions for bold jumping spider."
    }
  },
  {
    "name": "Boxelder Bug",
    "slug": "boxelder-bug",
    "image": "/images/pests/Boxelder-Bug.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Boxelder Bug is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Boxelder Bug follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Boxelder Bug may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract boxelder bug.",
      "lifecycle": "Boxelder Bug develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate boxelder bug around the structure.",
      "damage": "Boxelder Bug may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Boxelder Bug activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated boxelder bug activity."
    }
  },
  {
    "name": "Brown Banded Cockroaches",
    "slug": "brown-banded-cockroaches",
    "image": "/images/pests/brown-banded-cockroach.jpg",
    "group": "Roach",
    "risk": "Medium",
    "description": "Brown Banded Cockroaches are a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Brown Banded Cockroaches reproduces through egg cases and immature nymph stages before becoming an adult. Roaches thrive where food, water, and shelter are available.",
      "behavior": "Brown Banded Cockroaches are usually active at night and hides in cracks, voids, appliances, drains, and secluded harborages during the day.",
      "attractant": "Moisture, food residue, grease buildup, clutter, and harborage voids attract brown banded cockroach.",
      "lifecycle": "Brown Banded Cockroaches develops from egg case to nymph to adult.",
      "signs": "Live sightings, droppings, egg cases, shed skins, and musty odor can indicate brown banded cockroach activity.",
      "damage": "Brown Banded Cockroach can contaminate food and surfaces and may contribute to indoor sanitation and health concerns.",
      "seasonality": "Brown Banded Cockroach can remain active year-round indoors, especially in heated or humid environments.",
      "prevention": "Improve sanitation, eliminate leaks, seal gaps, reduce clutter, and use targeted professional treatment when needed.",
      "monitoring": "Monitor kitchens, bathrooms, utility penetrations, mechanical rooms, and dark hidden voids for brown banded cockroach."
    }
  },
  {
    "name": "Brown Recluse Spider",
    "slug": "brown-recluse",
    "image": "/images/pests/brown-recluse.jpg",
    "group": "Spider",
    "risk": "High",
    "description": "Brown Recluse Spider is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Brown Recluse Spider develops from egg sacs into juvenile spiders before reaching adulthood. Most species prefer quiet undisturbed areas.",
      "behavior": "Brown Recluse Spider may hide in corners, storage areas, basements, garages, and other low-traffic areas.",
      "attractant": "brown recluse spider is often attracted by insect prey, clutter, and undisturbed harborage areas.",
      "lifecycle": "Brown Recluse Spider develops from egg to spiderling to adult, with timing varying by species and environment.",
      "signs": "Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate brown recluse spider presence.",
      "damage": "Brown Recluse Spider is generally more of a nuisance than a structural pest, though some species raise health concerns.",
      "seasonality": "Brown Recluse Spider activity may increase seasonally, especially when prey insects move indoors.",
      "prevention": "Reduce clutter, vacuum webs and egg sacs, seal gaps, and control other insects that serve as prey.",
      "monitoring": "Monitor basements, storage areas, garages, attics, and wall-floor junctions for brown recluse spider. Because brown recluse spider is categorized as higher concern, early detection and professional response are especially important."
    }
  },
  {
    "name": "Brown Widow",
    "slug": "brown-widow",
    "image": "/images/pests/brown-widow.jpg",
    "group": "Spider",
    "risk": "Low",
    "description": "Brown Widow is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Brown Widow develops from egg sacs into juvenile spiders before reaching adulthood. Most species prefer quiet undisturbed areas.",
      "behavior": "Brown Widow may hide in corners, storage areas, basements, garages, and other low-traffic areas.",
      "attractant": "brown widow is often attracted by insect prey, clutter, and undisturbed harborage areas.",
      "lifecycle": "Brown Widow develops from egg to spiderling to adult, with timing varying by species and environment.",
      "signs": "Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate brown widow presence.",
      "damage": "Brown Widow is generally more of a nuisance than a structural pest, though some species raise health concerns.",
      "seasonality": "Brown Widow activity may increase seasonally, especially when prey insects move indoors.",
      "prevention": "Reduce clutter, vacuum webs and egg sacs, seal gaps, and control other insects that serve as prey.",
      "monitoring": "Monitor basements, storage areas, garages, attics, and wall-floor junctions for brown widow."
    }
  },
  {
    "name": "Bumble Bee",
    "slug": "bumble-bee",
    "image": "/images/pests/Bumble-Bee.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Bumble Bee is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Bumble Bee develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Bumble Bee may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract bumble bee.",
      "lifecycle": "Bumble Bee develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate bumble bee presence.",
      "damage": "Bumble Bee can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Bumble Bee activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting bumble bee."
    }
  },
  {
    "name": "Carpenter Ant",
    "slug": "carpenter-ant",
    "image": "/images/pests/carpenter-ant.jpg",
    "group": "Ant",
    "risk": "Low",
    "description": "Carpenter Ant is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Carpenter Ant lives in colonies with workers, brood, and reproductives. Colony growth is influenced by food, moisture, and shelter availability.",
      "behavior": "Carpenter Ant commonly forages in trails and may invade structures while searching for food or moisture.",
      "attractant": "Food crumbs, sweets, grease, moisture issues, and entry gaps can attract carpenter ant.",
      "lifecycle": "Carpenter Ant develops through egg, larval, pupal, and adult stages.",
      "signs": "Visible trailing ants, indoor sightings, activity near kitchens or sinks, and colonies around foundations are common signs of carpenter ant.",
      "damage": "Carpenter Ant is mainly a nuisance pest, though some ants may contaminate food or nest inside structural voids.",
      "seasonality": "Carpenter Ant activity often increases in warmer months but indoor infestations may persist year-round.",
      "prevention": "Seal entry points, reduce moisture, keep food sealed, clean spills promptly, and address conducive conditions.",
      "monitoring": "Monitor kitchens, bathrooms, utility lines, and foundation edges for recurring carpenter ant activity."
    }
  },
  {
    "name": "Carpenter Bee",
    "slug": "carpenter-bee",
    "image": "/images/pests/Carpenter-Bee.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Carpenter Bee is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Carpenter Bee develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Carpenter Bee may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract carpenter bee.",
      "lifecycle": "Carpenter Bee develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate carpenter bee presence.",
      "damage": "Carpenter Bee can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Carpenter Bee activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting carpenter bee."
    }
  },
  {
    "name": "Carpet Beetle",
    "slug": "carpet-beetle",
    "image": "/images/pests/Carpet-Beetle.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Carpet Beetle is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Carpet Beetle develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Carpet Beetle may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract carpet beetle.",
      "lifecycle": "Carpet Beetle develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate carpet beetle presence.",
      "damage": "Carpet Beetle can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Carpet Beetle activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting carpet beetle."
    }
  },
  {
    "name": "Cave Cricket",
    "slug": "cave-cricket",
    "image": "/images/pests/cave-cricket.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Cave Cricket is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Cave Cricket follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Cave Cricket may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract cave cricket.",
      "lifecycle": "Cave Cricket develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate cave cricket around the structure.",
      "damage": "Cave Cricket may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Cave Cricket activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated cave cricket activity."
    }
  },
  {
    "name": "Cellar Spider",
    "slug": "cellar-spider",
    "image": "/images/pests/cellar-spider.jpg",
    "group": "Spider",
    "risk": "Low",
    "description": "Cellar Spider is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Cellar Spider develops from egg sacs into juvenile spiders before reaching adulthood. Most species prefer quiet undisturbed areas.",
      "behavior": "Cellar Spider may hide in corners, storage areas, basements, garages, and other low-traffic areas.",
      "attractant": "cellar spider is often attracted by insect prey, clutter, and undisturbed harborage areas.",
      "lifecycle": "Cellar Spider develops from egg to spiderling to adult, with timing varying by species and environment.",
      "signs": "Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate cellar spider presence.",
      "damage": "Cellar Spider is generally more of a nuisance than a structural pest, though some species raise health concerns.",
      "seasonality": "Cellar Spider activity may increase seasonally, especially when prey insects move indoors.",
      "prevention": "Reduce clutter, vacuum webs and egg sacs, seal gaps, and control other insects that serve as prey.",
      "monitoring": "Monitor basements, storage areas, garages, attics, and wall-floor junctions for cellar spider."
    }
  },
  {
    "name": "Cicada Killer",
    "slug": "cicada-killer",
    "image": "/images/pests/Cicada-Killer.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Cicada Killer is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Cicada Killer follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Cicada Killer may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract cicada killer.",
      "lifecycle": "Cicada Killer develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate cicada killer around the structure.",
      "damage": "Cicada Killer may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Cicada Killer activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated cicada killer activity."
    }
  },
  {
    "name": "Cicada",
    "slug": "cicada",
    "image": "/images/pests/Cicada.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Cicada is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Cicada follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Cicada may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract cicada.",
      "lifecycle": "Cicada develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate cicada around the structure.",
      "damage": "Cicada may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Cicada activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated cicada activity."
    }
  },
  {
    "name": "Clothes Moth",
    "slug": "clothes-moth",
    "image": "/images/pests/clothes-moth.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Clothes Moth is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Clothes Moth follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Clothes Moth may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract clothes moth.",
      "lifecycle": "Clothes Moth develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate clothes moth around the structure.",
      "damage": "Clothes Moth may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Clothes Moth activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated clothes moth activity."
    }
  },
  {
    "name": "Clover Mite",
    "slug": "clover-mite",
    "image": "/images/pests/Clover-Mite.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Clover Mite is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Clover Mite follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Clover Mite may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract clover mite.",
      "lifecycle": "Clover Mite develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate clover mite around the structure.",
      "damage": "Clover Mite may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Clover Mite activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated clover mite activity."
    }
  },
  {
    "name": "Common House Spider",
    "slug": "common-house-spider",
    "image": "/images/pests/common-house-spider.jpg",
    "group": "Spider",
    "risk": "Low",
    "description": "Common House Spider is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Common House Spider develops from egg sacs into juvenile spiders before reaching adulthood. Most species prefer quiet undisturbed areas.",
      "behavior": "Common House Spider may hide in corners, storage areas, basements, garages, and other low-traffic areas.",
      "attractant": "common house spider is often attracted by insect prey, clutter, and undisturbed harborage areas.",
      "lifecycle": "Common House Spider develops from egg to spiderling to adult, with timing varying by species and environment.",
      "signs": "Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate common house spider presence.",
      "damage": "Common House Spider is generally more of a nuisance than a structural pest, though some species raise health concerns.",
      "seasonality": "Common House Spider activity may increase seasonally, especially when prey insects move indoors.",
      "prevention": "Reduce clutter, vacuum webs and egg sacs, seal gaps, and control other insects that serve as prey.",
      "monitoring": "Monitor basements, storage areas, garages, attics, and wall-floor junctions for common house spider."
    }
  },
  {
    "name": "Daddy Longlegs",
    "slug": "daddy-longlegs",
    "image": "/images/pests/daddy-longlegs.jpg",
    "group": "Spider",
    "risk": "Low",
    "description": "Daddy Longlegs is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Daddy Longlegs develops from egg sacs into juvenile spiders before reaching adulthood. Most species prefer quiet undisturbed areas.",
      "behavior": "Daddy Longlegs may hide in corners, storage areas, basements, garages, and other low-traffic areas.",
      "attractant": "daddy longlegs is often attracted by insect prey, clutter, and undisturbed harborage areas.",
      "lifecycle": "Daddy Longlegs develops from egg to spiderling to adult, with timing varying by species and environment.",
      "signs": "Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate daddy longlegs presence.",
      "damage": "Daddy Longlegs is generally more of a nuisance than a structural pest, though some species raise health concerns.",
      "seasonality": "Daddy Longlegs activity may increase seasonally, especially when prey insects move indoors.",
      "prevention": "Reduce clutter, vacuum webs and egg sacs, seal gaps, and control other insects that serve as prey.",
      "monitoring": "Monitor basements, storage areas, garages, attics, and wall-floor junctions for daddy longlegs."
    }
  },
  {
    "name": "Deer Mouse",
    "slug": "deer-mouse",
    "image": "/images/pests/Deer-Mouse.jpg",
    "group": "Rodent",
    "risk": "High",
    "description": "Deer Mouse is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Deer Mouse reproduces quickly when food, water, and shelter are available. Rodents can establish persistent indoor populations if entry points remain open.",
      "behavior": "Deer Mouse often travels along edges and concealed routes and may nest in attics, basements, garages, crawl spaces, and wall voids.",
      "attractant": "Food storage issues, pet food, clutter, vegetation, standing water, and structural gaps attract deer mouse.",
      "lifecycle": "Deer Mouse develops from newborn to juvenile to adult and may reproduce multiple times per year.",
      "signs": "Droppings, gnaw marks, noises in walls or ceilings, nesting material, and rub marks can indicate deer mouse activity.",
      "damage": "Deer Mouse can contaminate food, damage insulation, gnaw wiring and materials, and create health concerns.",
      "seasonality": "Deer Mouse pressure often increases during cooler months as rodents move indoors for warmth and shelter.",
      "prevention": "Seal entry points, improve sanitation, reduce clutter, trim vegetation, and combine trapping with exclusion.",
      "monitoring": "Monitor garages, attics, basements, crawl spaces, kitchens, utility penetrations, and exterior entry points for deer mouse. Because deer mouse is categorized as higher concern, early detection and professional response are especially important."
    }
  },
  {
    "name": "Digger Wasp",
    "slug": "digger-wasp",
    "image": "/images/pests/digger-wasp.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Digger Wasp is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Digger Wasp develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Digger Wasp may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract digger wasp.",
      "lifecycle": "Digger Wasp develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate digger wasp presence.",
      "damage": "Digger Wasp can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Digger Wasp activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting digger wasp."
    }
  },
  {
    "name": "Drugstore Beetle",
    "slug": "drugstore-beetle",
    "image": "/images/pests/Drugstore-Beetle.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Drugstore Beetle is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Drugstore Beetle develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Drugstore Beetle may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract drugstore beetle.",
      "lifecycle": "Drugstore Beetle develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate drugstore beetle presence.",
      "damage": "Drugstore Beetle can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Drugstore Beetle activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting drugstore beetle."
    }
  },
  {
    "name": "Earwig",
    "slug": "earwig",
    "image": "/images/pests/Earwig.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Earwig is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Earwig follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Earwig may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract earwig.",
      "lifecycle": "Earwig develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate earwig around the structure.",
      "damage": "Earwig may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Earwig activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated earwig activity."
    }
  },
  {
    "name": "European Hornet",
    "slug": "european-hornet",
    "image": "/images/pests/European-Hornet.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "European Hornet is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "European Hornet develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "European Hornet may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract european hornet.",
      "lifecycle": "European Hornet develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate european hornet presence.",
      "damage": "European Hornet can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "European Hornet activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting european hornet."
    }
  },
  {
    "name": "Flea",
    "slug": "flea",
    "image": "/images/pests/Flea.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Flea is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Flea follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Flea may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract flea.",
      "lifecycle": "Flea develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate flea around the structure.",
      "damage": "Flea may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Flea activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated flea activity."
    }
  },
  {
    "name": "Flour Beetle",
    "slug": "flour-beetle",
    "image": "/images/pests/Flour-Beetle.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Flour Beetle is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Flour Beetle develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Flour Beetle may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract flour beetle.",
      "lifecycle": "Flour Beetle develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate flour beetle presence.",
      "damage": "Flour Beetle can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Flour Beetle activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting flour beetle."
    }
  },
  {
    "name": "Funnel Spider",
    "slug": "funnel-spider",
    "image": "/images/pests/funnel-spider.jpg",
    "group": "Spider",
    "risk": "Low",
    "description": "Funnel Spider is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Funnel Spider develops from egg sacs into juvenile spiders before reaching adulthood. Most species prefer quiet undisturbed areas.",
      "behavior": "Funnel Spider may hide in corners, storage areas, basements, garages, and other low-traffic areas.",
      "attractant": "funnel spider is often attracted by insect prey, clutter, and undisturbed harborage areas.",
      "lifecycle": "Funnel Spider develops from egg to spiderling to adult, with timing varying by species and environment.",
      "signs": "Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate funnel spider presence.",
      "damage": "Funnel Spider is generally more of a nuisance than a structural pest, though some species raise health concerns.",
      "seasonality": "Funnel Spider activity may increase seasonally, especially when prey insects move indoors.",
      "prevention": "Reduce clutter, vacuum webs and egg sacs, seal gaps, and control other insects that serve as prey.",
      "monitoring": "Monitor basements, storage areas, garages, attics, and wall-floor junctions for funnel spider."
    }
  },
  {
    "name": "Garden Spider",
    "slug": "garden-spider",
    "image": "/images/pests/garden-spider.jpg",
    "group": "Spider",
    "risk": "Low",
    "description": "Garden Spider is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Garden Spider develops from egg sacs into juvenile spiders before reaching adulthood. Most species prefer quiet undisturbed areas.",
      "behavior": "Garden Spider may hide in corners, storage areas, basements, garages, and other low-traffic areas.",
      "attractant": "garden spider is often attracted by insect prey, clutter, and undisturbed harborage areas.",
      "lifecycle": "Garden Spider develops from egg to spiderling to adult, with timing varying by species and environment.",
      "signs": "Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate garden spider presence.",
      "damage": "Garden Spider is generally more of a nuisance than a structural pest, though some species raise health concerns.",
      "seasonality": "Garden Spider activity may increase seasonally, especially when prey insects move indoors.",
      "prevention": "Reduce clutter, vacuum webs and egg sacs, seal gaps, and control other insects that serve as prey.",
      "monitoring": "Monitor basements, storage areas, garages, attics, and wall-floor junctions for garden spider."
    }
  },
  {
    "name": "German Cockroach",
    "slug": "german-cockroach",
    "image": "/images/pests/German-Cockroach.jpg",
    "group": "Roach",
    "risk": "High",
    "description": "German Cockroach is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "German Cockroach reproduces through egg cases and immature nymph stages before becoming an adult. Roaches thrive where food, water, and shelter are available.",
      "behavior": "German Cockroach is usually active at night and hides in cracks, voids, appliances, drains, and secluded harborages during the day.",
      "attractant": "Moisture, food residue, grease buildup, clutter, and harborage voids attract german cockroach.",
      "lifecycle": "German Cockroach develops from egg case to nymph to adult.",
      "signs": "Live sightings, droppings, egg cases, shed skins, and musty odor can indicate german cockroach activity.",
      "damage": "German Cockroach can contaminate food and surfaces and may contribute to indoor sanitation and health concerns.",
      "seasonality": "German Cockroach can remain active year-round indoors, especially in heated or humid environments.",
      "prevention": "Improve sanitation, eliminate leaks, seal gaps, reduce clutter, and use targeted professional treatment when needed.",
      "monitoring": "Monitor kitchens, bathrooms, utility penetrations, mechanical rooms, and dark hidden voids for german cockroach. Because german cockroach is categorized as higher concern, early detection and professional response are especially important."
    }
  },
  {
    "name": "Grain Beetle",
    "slug": "grain-beetle",
    "image": "/images/pests/Grain-Beetle.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Grain Beetle is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Grain Beetle develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Grain Beetle may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract grain beetle.",
      "lifecycle": "Grain Beetle develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate grain beetle presence.",
      "damage": "Grain Beetle can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Grain Beetle activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting grain beetle."
    }
  },
  {
    "name": "Grass Spider",
    "slug": "grass-spider",
    "image": "/images/pests/grass-spider.jpg",
    "group": "Spider",
    "risk": "Low",
    "description": "Grass Spider is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Grass Spider develops from egg sacs into juvenile spiders before reaching adulthood. Most species prefer quiet undisturbed areas.",
      "behavior": "Grass Spider may hide in corners, storage areas, basements, garages, and other low-traffic areas.",
      "attractant": "grass spider is often attracted by insect prey, clutter, and undisturbed harborage areas.",
      "lifecycle": "Grass Spider develops from egg to spiderling to adult, with timing varying by species and environment.",
      "signs": "Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate grass spider presence.",
      "damage": "Grass Spider is generally more of a nuisance than a structural pest, though some species raise health concerns.",
      "seasonality": "Grass Spider activity may increase seasonally, especially when prey insects move indoors.",
      "prevention": "Reduce clutter, vacuum webs and egg sacs, seal gaps, and control other insects that serve as prey.",
      "monitoring": "Monitor basements, storage areas, garages, attics, and wall-floor junctions for grass spider."
    }
  },
  {
    "name": "Honey Bee",
    "slug": "honey-bee",
    "image": "/images/pests/Honey-Bee.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Honey Bee is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Honey Bee develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Honey Bee may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract honey bee.",
      "lifecycle": "Honey Bee develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate honey bee presence.",
      "damage": "Honey Bee can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Honey Bee activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting honey bee."
    }
  },
  {
    "name": "House Centipede",
    "slug": "house-centipede",
    "image": "/images/pests/House-Centipede.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "House Centipede is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "House Centipede follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "House Centipede may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract house centipede.",
      "lifecycle": "House Centipede develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate house centipede around the structure.",
      "damage": "House Centipede may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "House Centipede activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated house centipede activity."
    }
  },
  {
    "name": "House Mouse",
    "slug": "house-mouse",
    "image": "/images/pests/House-Mouse.jpg",
    "group": "Rodent",
    "risk": "High",
    "description": "House Mouse is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "House Mouse reproduces quickly when food, water, and shelter are available. Rodents can establish persistent indoor populations if entry points remain open.",
      "behavior": "House Mouse often travels along edges and concealed routes and may nest in attics, basements, garages, crawl spaces, and wall voids.",
      "attractant": "Food storage issues, pet food, clutter, vegetation, standing water, and structural gaps attract house mouse.",
      "lifecycle": "House Mouse develops from newborn to juvenile to adult and may reproduce multiple times per year.",
      "signs": "Droppings, gnaw marks, noises in walls or ceilings, nesting material, and rub marks can indicate house mouse activity.",
      "damage": "House Mouse can contaminate food, damage insulation, gnaw wiring and materials, and create health concerns.",
      "seasonality": "House Mouse pressure often increases during cooler months as rodents move indoors for warmth and shelter.",
      "prevention": "Seal entry points, improve sanitation, reduce clutter, trim vegetation, and combine trapping with exclusion.",
      "monitoring": "Monitor garages, attics, basements, crawl spaces, kitchens, utility penetrations, and exterior entry points for house mouse. Because house mouse is categorized as higher concern, early detection and professional response are especially important."
    }
  },
  {
    "name": "Indian Meal Moth",
    "slug": "indian-meal-moth",
    "image": "/images/pests/Indian-Meal-Moth.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Indian Meal Moth is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Indian Meal Moth follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Indian Meal Moth may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract indian meal moth.",
      "lifecycle": "Indian Meal Moth develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate indian meal moth around the structure.",
      "damage": "Indian Meal Moth may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Indian Meal Moth activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated indian meal moth activity."
    }
  },
  {
    "name": "Japanese Beetle",
    "slug": "japanese-beetle",
    "image": "/images/pests/Japanese-Beetle.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Japanese Beetle is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Japanese Beetle develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Japanese Beetle may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract japanese beetle.",
      "lifecycle": "Japanese Beetle develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate japanese beetle presence.",
      "damage": "Japanese Beetle can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Japanese Beetle activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting japanese beetle."
    }
  },
  {
    "name": "Lady Bug",
    "slug": "lady-bug",
    "image": "/images/pests/Lady-Bug.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Lady Bug is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Lady Bug follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Lady Bug may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract lady bug.",
      "lifecycle": "Lady Bug develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate lady bug around the structure.",
      "damage": "Lady Bug may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Lady Bug activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated lady bug activity."
    }
  },
  {
    "name": "Leaf Cutter Bee",
    "slug": "leaf-cutter-bee",
    "image": "/images/pests/Leaf-Cutter-Bee.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Leaf Cutter Bee is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Leaf Cutter Bee develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Leaf Cutter Bee may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract leaf cutter bee.",
      "lifecycle": "Leaf Cutter Bee develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate leaf cutter bee presence.",
      "damage": "Leaf Cutter Bee can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Leaf Cutter Bee activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting leaf cutter bee."
    }
  },
  {
    "name": "Longjawed Spider",
    "slug": "longjawed-spider",
    "image": "/images/pests/longjawed-spider.jpg",
    "group": "Spider",
    "risk": "Low",
    "description": "Longjawed Spider is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Longjawed Spider develops from egg sacs into juvenile spiders before reaching adulthood. Most species prefer quiet undisturbed areas.",
      "behavior": "Longjawed Spider may hide in corners, storage areas, basements, garages, and other low-traffic areas.",
      "attractant": "longjawed spider is often attracted by insect prey, clutter, and undisturbed harborage areas.",
      "lifecycle": "Longjawed Spider develops from egg to spiderling to adult, with timing varying by species and environment.",
      "signs": "Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate longjawed spider presence.",
      "damage": "Longjawed Spider is generally more of a nuisance than a structural pest, though some species raise health concerns.",
      "seasonality": "Longjawed Spider activity may increase seasonally, especially when prey insects move indoors.",
      "prevention": "Reduce clutter, vacuum webs and egg sacs, seal gaps, and control other insects that serve as prey.",
      "monitoring": "Monitor basements, storage areas, garages, attics, and wall-floor junctions for longjawed spider."
    }
  },
  {
    "name": "Mason Bee",
    "slug": "mason-bee",
    "image": "/images/pests/Mason-Bee.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Mason Bee is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Mason Bee develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Mason Bee may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract mason bee.",
      "lifecycle": "Mason Bee develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate mason bee presence.",
      "damage": "Mason Bee can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Mason Bee activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting mason bee."
    }
  },
  {
    "name": "Millipede",
    "slug": "millipede",
    "image": "/images/pests/Millipede.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Millipede is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Millipede follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Millipede may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract millipede.",
      "lifecycle": "Millipede develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate millipede around the structure.",
      "damage": "Millipede may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Millipede activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated millipede activity."
    }
  },
  {
    "name": "Mosquito",
    "slug": "mosquito",
    "image": "/images/pests/Mosquito.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Mosquito is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Mosquito follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Mosquito may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract mosquito.",
      "lifecycle": "Mosquito develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate mosquito around the structure.",
      "damage": "Mosquito may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Mosquito activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated mosquito activity."
    }
  },
  {
    "name": "Mud Dauber",
    "slug": "mud-dauber",
    "image": "/images/pests/Mud-Dauber.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Mud Dauber is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Mud Dauber develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Mud Dauber may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract mud dauber.",
      "lifecycle": "Mud Dauber develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate mud dauber presence.",
      "damage": "Mud Dauber can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Mud Dauber activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting mud dauber."
    }
  },
  {
    "name": "Norway Rat",
    "slug": "norway-rat",
    "image": "/images/pests/Norway-Rat.jpg",
    "group": "Rodent",
    "risk": "High",
    "description": "Norway Rat is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Norway Rat reproduces quickly when food, water, and shelter are available. Rodents can establish persistent indoor populations if entry points remain open.",
      "behavior": "Norway Rat often travels along edges and concealed routes and may nest in attics, basements, garages, crawl spaces, and wall voids.",
      "attractant": "Food storage issues, pet food, clutter, vegetation, standing water, and structural gaps attract norway rat.",
      "lifecycle": "Norway Rat develops from newborn to juvenile to adult and may reproduce multiple times per year.",
      "signs": "Droppings, gnaw marks, noises in walls or ceilings, nesting material, and rub marks can indicate norway rat activity.",
      "damage": "Norway Rat can contaminate food, damage insulation, gnaw wiring and materials, and create health concerns.",
      "seasonality": "Norway Rat pressure often increases during cooler months as rodents move indoors for warmth and shelter.",
      "prevention": "Seal entry points, improve sanitation, reduce clutter, trim vegetation, and combine trapping with exclusion.",
      "monitoring": "Monitor garages, attics, basements, crawl spaces, kitchens, utility penetrations, and exterior entry points for norway rat. Because norway rat is categorized as higher concern, early detection and professional response are especially important."
    }
  },
  {
    "name": "Odorous House Ant",
    "slug": "odorous-house-ant",
    "image": "/images/pests/odorous-house-ant.jpg",
    "group": "Ant",
    "risk": "Low",
    "description": "Odorous House Ant is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Odorous House Ant lives in colonies with workers, brood, and reproductives. Colony growth is influenced by food, moisture, and shelter availability.",
      "behavior": "Odorous House Ant commonly forages in trails and may invade structures while searching for food or moisture.",
      "attractant": "Food crumbs, sweets, grease, moisture issues, and entry gaps can attract odorous house ant.",
      "lifecycle": "Odorous House Ant develops through egg, larval, pupal, and adult stages.",
      "signs": "Visible trailing ants, indoor sightings, activity near kitchens or sinks, and colonies around foundations are common signs of odorous house ant.",
      "damage": "Odorous House Ant is mainly a nuisance pest, though some ants may contaminate food or nest inside structural voids.",
      "seasonality": "Odorous House Ant activity often increases in warmer months but indoor infestations may persist year-round.",
      "prevention": "Seal entry points, reduce moisture, keep food sealed, clean spills promptly, and address conducive conditions.",
      "monitoring": "Monitor kitchens, bathrooms, utility lines, and foundation edges for recurring odorous house ant activity."
    }
  },
  {
    "name": "Oriental Cockroach",
    "slug": "oriental-cockroach",
    "image": "/images/pests/Oriental-Cockroach.jpg",
    "group": "Roach",
    "risk": "Medium",
    "description": "Oriental Cockroach is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Oriental Cockroach reproduces through egg cases and immature nymph stages before becoming an adult. Roaches thrive where food, water, and shelter are available.",
      "behavior": "Oriental Cockroach is usually active at night and hides in cracks, voids, appliances, drains, and secluded harborages during the day.",
      "attractant": "Moisture, food residue, grease buildup, clutter, and harborage voids attract oriental cockroach.",
      "lifecycle": "Oriental Cockroach develops from egg case to nymph to adult.",
      "signs": "Live sightings, droppings, egg cases, shed skins, and musty odor can indicate oriental cockroach activity.",
      "damage": "Oriental Cockroach can contaminate food and surfaces and may contribute to indoor sanitation and health concerns.",
      "seasonality": "Oriental Cockroach can remain active year-round indoors, especially in heated or humid environments.",
      "prevention": "Improve sanitation, eliminate leaks, seal gaps, reduce clutter, and use targeted professional treatment when needed.",
      "monitoring": "Monitor kitchens, bathrooms, utility penetrations, mechanical rooms, and dark hidden voids for oriental cockroach."
    }
  },
  {
    "name": "Paper Wasp",
    "slug": "paper-wasp",
    "image": "/images/pests/paper-wasp.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Paper Wasp is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Paper Wasp develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Paper Wasp may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract paper wasp.",
      "lifecycle": "Paper Wasp develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate paper wasp presence.",
      "damage": "Paper Wasp can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Paper Wasp activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting paper wasp."
    }
  },
  {
    "name": "Pavement Ant",
    "slug": "pavement-ant",
    "image": "/images/pests/pavement-ant.jpg",
    "group": "Ant",
    "risk": "Low",
    "description": "Pavement Ant is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Pavement Ant lives in colonies with workers, brood, and reproductives. Colony growth is influenced by food, moisture, and shelter availability.",
      "behavior": "Pavement Ant commonly forages in trails and may invade structures while searching for food or moisture.",
      "attractant": "Food crumbs, sweets, grease, moisture issues, and entry gaps can attract pavement ant.",
      "lifecycle": "Pavement Ant develops through egg, larval, pupal, and adult stages.",
      "signs": "Visible trailing ants, indoor sightings, activity near kitchens or sinks, and colonies around foundations are common signs of pavement ant.",
      "damage": "Pavement Ant is mainly a nuisance pest, though some ants may contaminate food or nest inside structural voids.",
      "seasonality": "Pavement Ant activity often increases in warmer months but indoor infestations may persist year-round.",
      "prevention": "Seal entry points, reduce moisture, keep food sealed, clean spills promptly, and address conducive conditions.",
      "monitoring": "Monitor kitchens, bathrooms, utility lines, and foundation edges for recurring pavement ant activity."
    }
  },
  {
    "name": "Pill Bug",
    "slug": "pill-bug",
    "image": "/images/pests/Pill-Bug.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Pill Bug is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Pill Bug follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Pill Bug may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract pill bug.",
      "lifecycle": "Pill Bug develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate pill bug around the structure.",
      "damage": "Pill Bug may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Pill Bug activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated pill bug activity."
    }
  },
  {
    "name": "Praying Mantis",
    "slug": "praying-mantis",
    "image": "/images/pests/Praying-Mantis.jpg",
    "group": "Ant",
    "risk": "Low",
    "description": "Praying Mantis is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Praying Mantis lives in colonies with workers, brood, and reproductives. Colony growth is influenced by food, moisture, and shelter availability.",
      "behavior": "Praying Mantis commonly forages in trails and may invade structures while searching for food or moisture.",
      "attractant": "Food crumbs, sweets, grease, moisture issues, and entry gaps can attract praying mantis.",
      "lifecycle": "Praying Mantis develops through egg, larval, pupal, and adult stages.",
      "signs": "Visible trailing ants, indoor sightings, activity near kitchens or sinks, and colonies around foundations are common signs of praying mantis.",
      "damage": "Praying Mantis is mainly a nuisance pest, though some ants may contaminate food or nest inside structural voids.",
      "seasonality": "Praying Mantis activity often increases in warmer months but indoor infestations may persist year-round.",
      "prevention": "Seal entry points, reduce moisture, keep food sealed, clean spills promptly, and address conducive conditions.",
      "monitoring": "Monitor kitchens, bathrooms, utility lines, and foundation edges for recurring praying mantis activity."
    }
  },
  {
    "name": "Rat",
    "slug": "rat",
    "image": "/images/pests/Rat.jpg",
    "group": "Rodent",
    "risk": "High",
    "description": "Rat is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Rat reproduces quickly when food, water, and shelter are available. Rodents can establish persistent indoor populations if entry points remain open.",
      "behavior": "Rat often travels along edges and concealed routes and may nest in attics, basements, garages, crawl spaces, and wall voids.",
      "attractant": "Food storage issues, pet food, clutter, vegetation, standing water, and structural gaps attract rat.",
      "lifecycle": "Rat develops from newborn to juvenile to adult and may reproduce multiple times per year.",
      "signs": "Droppings, gnaw marks, noises in walls or ceilings, nesting material, and rub marks can indicate rat activity.",
      "damage": "Rat can contaminate food, damage insulation, gnaw wiring and materials, and create health concerns.",
      "seasonality": "Rat pressure often increases during cooler months as rodents move indoors for warmth and shelter.",
      "prevention": "Seal entry points, improve sanitation, reduce clutter, trim vegetation, and combine trapping with exclusion.",
      "monitoring": "Monitor garages, attics, basements, crawl spaces, kitchens, utility penetrations, and exterior entry points for rat. Because rat is categorized as higher concern, early detection and professional response are especially important."
    }
  },
  {
    "name": "Red Wasp",
    "slug": "red-wasp",
    "image": "/images/pests/red-wasp.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Red Wasp is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Red Wasp develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Red Wasp may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract red wasp.",
      "lifecycle": "Red Wasp develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate red wasp presence.",
      "damage": "Red Wasp can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Red Wasp activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting red wasp."
    }
  },
  {
    "name": "Roof Rat",
    "slug": "roof-rat",
    "image": "/images/pests/Roof-Rat.jpg",
    "group": "Rodent",
    "risk": "High",
    "description": "Roof Rat is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Roof Rat reproduces quickly when food, water, and shelter are available. Rodents can establish persistent indoor populations if entry points remain open.",
      "behavior": "Roof Rat often travels along edges and concealed routes and may nest in attics, basements, garages, crawl spaces, and wall voids.",
      "attractant": "Food storage issues, pet food, clutter, vegetation, standing water, and structural gaps attract roof rat.",
      "lifecycle": "Roof Rat develops from newborn to juvenile to adult and may reproduce multiple times per year.",
      "signs": "Droppings, gnaw marks, noises in walls or ceilings, nesting material, and rub marks can indicate roof rat activity.",
      "damage": "Roof Rat can contaminate food, damage insulation, gnaw wiring and materials, and create health concerns.",
      "seasonality": "Roof Rat pressure often increases during cooler months as rodents move indoors for warmth and shelter.",
      "prevention": "Seal entry points, improve sanitation, reduce clutter, trim vegetation, and combine trapping with exclusion.",
      "monitoring": "Monitor garages, attics, basements, crawl spaces, kitchens, utility penetrations, and exterior entry points for roof rat. Because roof rat is categorized as higher concern, early detection and professional response are especially important."
    }
  },
  {
    "name": "Sawtooth Beetle",
    "slug": "sawtooth-beetle",
    "image": "/images/pests/sawtooth-beetle.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Sawtooth Beetle is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Sawtooth Beetle develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Sawtooth Beetle may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract sawtooth beetle.",
      "lifecycle": "Sawtooth Beetle develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate sawtooth beetle presence.",
      "damage": "Sawtooth Beetle can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Sawtooth Beetle activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting sawtooth beetle."
    }
  },
  {
    "name": "Silverfish",
    "slug": "silverfish",
    "image": "/images/pests/Silverfish.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Silverfish is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Silverfish follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Silverfish may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract silverfish.",
      "lifecycle": "Silverfish develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate silverfish around the structure.",
      "damage": "Silverfish may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Silverfish activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated silverfish activity."
    }
  },
  {
    "name": "Smoky Brown Cockroach",
    "slug": "smoky-brown-cockroach",
    "image": "/images/pests/smoky-brown-cockroach.jpg",
    "group": "Roach",
    "risk": "Medium",
    "description": "Smoky Brown Cockroach is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Smoky Brown Cockroach reproduces through egg cases and immature nymph stages before becoming an adult. Roaches thrive where food, water, and shelter are available.",
      "behavior": "Smoky Brown Cockroach is usually active at night and hides in cracks, voids, appliances, drains, and secluded harborages during the day.",
      "attractant": "Moisture, food residue, grease buildup, clutter, and harborage voids attract smoky brown cockroach.",
      "lifecycle": "Smoky Brown Cockroach develops from egg case to nymph to adult.",
      "signs": "Live sightings, droppings, egg cases, shed skins, and musty odor can indicate smoky brown cockroach activity.",
      "damage": "Smoky Brown Cockroach can contaminate food and surfaces and may contribute to indoor sanitation and health concerns.",
      "seasonality": "Smoky Brown Cockroach can remain active year-round indoors, especially in heated or humid environments.",
      "prevention": "Improve sanitation, eliminate leaks, seal gaps, reduce clutter, and use targeted professional treatment when needed.",
      "monitoring": "Monitor kitchens, bathrooms, utility penetrations, mechanical rooms, and dark hidden voids for smoky brown cockroach."
    }
  },
  {
    "name": "Springtail",
    "slug": "springtail",
    "image": "/images/pests/Springtail.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Springtail is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Springtail follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Springtail may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract springtail.",
      "lifecycle": "Springtail develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate springtail around the structure.",
      "damage": "Springtail may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Springtail activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated springtail activity."
    }
  },
  {
    "name": "Stink Bug",
    "slug": "stink-bug",
    "image": "/images/pests/Stink-Bug.jpg",
    "group": "Other",
    "risk": "Low",
    "description": "Stink Bug is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Stink Bug follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Stink Bug may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract stink bug.",
      "lifecycle": "Stink Bug develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate stink bug around the structure.",
      "damage": "Stink Bug may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Stink Bug activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated stink bug activity."
    }
  },
  {
    "name": "Subterranean Termite",
    "slug": "subterranean-termite",
    "image": "/images/pests/Subterranean-Termite.jpg",
    "group": "Termite",
    "risk": "High",
    "description": "Subterranean Termite is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Subterranean Termite lives in colonies with workers, soldiers, and reproductives. Colonies can remain hidden while feeding on cellulose materials.",
      "behavior": "Subterranean Termite typically remains concealed in soil, wood, or mud tubes while foraging for structural cellulose.",
      "attractant": "Moisture issues, wood-to-soil contact, cellulose debris, and untreated structural vulnerabilities attract subterranean termite.",
      "lifecycle": "Subterranean Termite develops from egg to immature stages to adult caste forms, including workers, soldiers, and swarmers.",
      "signs": "Mud tubes, damaged wood, hollow-sounding timber, discarded wings, and swarming activity may indicate subterranean termite.",
      "damage": "Subterranean Termite can cause serious structural damage if left untreated.",
      "seasonality": "Subterranean Termite activity may intensify seasonally, especially during swarming periods, though colonies remain active out of sight.",
      "prevention": "Reduce moisture, eliminate wood-to-soil contact, correct drainage issues, and schedule regular professional termite inspections.",
      "monitoring": "Monitor foundations, crawl spaces, sill plates, exterior expansion joints, and wood contact areas for subterranean termite. Because subterranean termite is categorized as higher concern, early detection and professional response are especially important."
    }
  },
  {
    "name": "Sweat Bee",
    "slug": "sweat-bee",
    "image": "/images/pests/Sweat-Bee.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Sweat Bee is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Sweat Bee develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Sweat Bee may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract sweat bee.",
      "lifecycle": "Sweat Bee develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate sweat bee presence.",
      "damage": "Sweat Bee can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Sweat Bee activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting sweat bee."
    }
  },
  {
    "name": "Termite Swarmer",
    "slug": "termite-swarmer",
    "image": "/images/pests/Termite-Swarmer.jpg",
    "group": "Termite",
    "risk": "High",
    "description": "Termite Swarmer is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Termite Swarmer lives in colonies with workers, soldiers, and reproductives. Colonies can remain hidden while feeding on cellulose materials.",
      "behavior": "Termite Swarmer typically remains concealed in soil, wood, or mud tubes while foraging for structural cellulose.",
      "attractant": "Moisture issues, wood-to-soil contact, cellulose debris, and untreated structural vulnerabilities attract termite swarmer.",
      "lifecycle": "Termite Swarmer develops from egg to immature stages to adult caste forms, including workers, soldiers, and swarmers.",
      "signs": "Mud tubes, damaged wood, hollow-sounding timber, discarded wings, and swarming activity may indicate termite swarmer.",
      "damage": "Termite Swarmer can cause serious structural damage if left untreated.",
      "seasonality": "Termite Swarmer activity may intensify seasonally, especially during swarming periods, though colonies remain active out of sight.",
      "prevention": "Reduce moisture, eliminate wood-to-soil contact, correct drainage issues, and schedule regular professional termite inspections.",
      "monitoring": "Monitor foundations, crawl spaces, sill plates, exterior expansion joints, and wood contact areas for termite swarmer. Because termite swarmer is categorized as higher concern, early detection and professional response are especially important."
    }
  },
  {
    "name": "Tick",
    "slug": "tick",
    "image": "/images/pests/Tick.jpg",
    "group": "Other",
    "risk": "High",
    "description": "Tick is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Tick follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Tick may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract tick.",
      "lifecycle": "Tick develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate tick around the structure.",
      "damage": "Tick may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Tick activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated tick activity. Because tick is categorized as higher concern, early detection and professional response are especially important."
    }
  },
  {
    "name": "Velvet Ant",
    "slug": "velvet-ant",
    "image": "/images/pests/velvet-ant.jpg",
    "group": "Ant",
    "risk": "Low",
    "description": "Velvet Ant is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Velvet Ant lives in colonies with workers, brood, and reproductives. Colony growth is influenced by food, moisture, and shelter availability.",
      "behavior": "Velvet Ant commonly forages in trails and may invade structures while searching for food or moisture.",
      "attractant": "Food crumbs, sweets, grease, moisture issues, and entry gaps can attract velvet ant.",
      "lifecycle": "Velvet Ant develops through egg, larval, pupal, and adult stages.",
      "signs": "Visible trailing ants, indoor sightings, activity near kitchens or sinks, and colonies around foundations are common signs of velvet ant.",
      "damage": "Velvet Ant is mainly a nuisance pest, though some ants may contaminate food or nest inside structural voids.",
      "seasonality": "Velvet Ant activity often increases in warmer months but indoor infestations may persist year-round.",
      "prevention": "Seal entry points, reduce moisture, keep food sealed, clean spills promptly, and address conducive conditions.",
      "monitoring": "Monitor kitchens, bathrooms, utility lines, and foundation edges for recurring velvet ant activity."
    }
  },
  {
    "name": "Walking Stick",
    "slug": "walking-stick",
    "image": "/images/pests/walking-stick.jpg",
    "group": "Other",
    "risk": "High",
    "description": "Walking Stick is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Walking Stick follows a life cycle and survival pattern that depends on access to food, moisture, shelter, and favorable environmental conditions.",
      "behavior": "Walking Stick may become a nuisance indoors or around the structure depending on season, harborage, and available resources.",
      "attractant": "Moisture, food sources, harborage, vegetation, and structural entry points may attract walking stick.",
      "lifecycle": "Walking Stick develops through species-specific life stages before reaching adulthood.",
      "signs": "Visible sightings, nuisance activity, debris, damage, or repeated presence may indicate walking stick around the structure.",
      "damage": "Walking Stick may cause nuisance issues, contamination, or property concerns depending on species and population level.",
      "seasonality": "Walking Stick activity often changes with temperature, moisture, and seasonal environmental conditions.",
      "prevention": "Reduce conducive conditions, seal gaps, improve sanitation, and address moisture and harborage issues.",
      "monitoring": "Monitor likely harborage areas, entry points, and locations with repeated walking stick activity. Because walking stick is categorized as higher concern, early detection and professional response are especially important."
    }
  },
  {
    "name": "Wolf Spider",
    "slug": "wolf-spider",
    "image": "/images/pests/wolf-spider.jpg",
    "group": "Spider",
    "risk": "Low",
    "description": "Wolf Spider is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Wolf Spider develops from egg sacs into juvenile spiders before reaching adulthood. Most species prefer quiet undisturbed areas.",
      "behavior": "Wolf Spider may hide in corners, storage areas, basements, garages, and other low-traffic areas.",
      "attractant": "wolf spider is often attracted by insect prey, clutter, and undisturbed harborage areas.",
      "lifecycle": "Wolf Spider develops from egg to spiderling to adult, with timing varying by species and environment.",
      "signs": "Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate wolf spider presence.",
      "damage": "Wolf Spider is generally more of a nuisance than a structural pest, though some species raise health concerns.",
      "seasonality": "Wolf Spider activity may increase seasonally, especially when prey insects move indoors.",
      "prevention": "Reduce clutter, vacuum webs and egg sacs, seal gaps, and control other insects that serve as prey.",
      "monitoring": "Monitor basements, storage areas, garages, attics, and wall-floor junctions for wolf spider."
    }
  },
  {
    "name": "Yellow Sac Spider",
    "slug": "yellow-sac-spider",
    "image": "/images/pests/yellow-sac-spider.jpg",
    "group": "Spider",
    "risk": "Low",
    "description": "Yellow Sac Spider is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Yellow Sac Spider develops from egg sacs into juvenile spiders before reaching adulthood. Most species prefer quiet undisturbed areas.",
      "behavior": "Yellow Sac Spider may hide in corners, storage areas, basements, garages, and other low-traffic areas.",
      "attractant": "yellow sac spider is often attracted by insect prey, clutter, and undisturbed harborage areas.",
      "lifecycle": "Yellow Sac Spider develops from egg to spiderling to adult, with timing varying by species and environment.",
      "signs": "Spider sightings, webs, egg sacs, and increased activity in secluded areas may indicate yellow sac spider presence.",
      "damage": "Yellow Sac Spider is generally more of a nuisance than a structural pest, though some species raise health concerns.",
      "seasonality": "Yellow Sac Spider activity may increase seasonally, especially when prey insects move indoors.",
      "prevention": "Reduce clutter, vacuum webs and egg sacs, seal gaps, and control other insects that serve as prey.",
      "monitoring": "Monitor basements, storage areas, garages, attics, and wall-floor junctions for yellow sac spider."
    }
  },
  {
    "name": "Yellowjacket",
    "slug": "yellowjacket",
    "image": "/images/pests/yellowjacket.jpg",
    "group": "Wasp/Hornet",
    "risk": "Medium",
    "description": "Yellowjacket is a pest that may be encountered in and around homes or structures and should be identified correctly so the right control strategy can be used.",
    "facts": {
      "biology": "Yellowjacket develops from egg to larva to pupa to adult. Colonies are usually seasonal, with worker populations increasing during warmer months.",
      "behavior": "Yellowjacket may build nests around eaves, voids, shrubs, trees, wall cavities, or ground locations depending on species.",
      "attractant": "Sheltered nesting sites, flowering plants, outdoor food sources, and sugary residues may attract yellowjacket.",
      "lifecycle": "Yellowjacket develops through complete metamorphosis: egg, larva, pupa, and adult.",
      "signs": "Visible adults, nest construction, activity around eaves or entry points, and increased flying insects indicate yellowjacket presence.",
      "damage": "Yellowjacket can create stinging risk around homes, entrances, play areas, and work spaces.",
      "seasonality": "Yellowjacket activity is usually highest during spring, summer, and early fall.",
      "prevention": "Remove attractants, seal voids, inspect eaves and exterior structures, and treat nests carefully or professionally.",
      "monitoring": "Monitor eaves, soffits, shrubs, sheds, fences, and void entry points for nesting yellowjacket."
    }
  }
];

export function getPest(slug: string): Pest | undefined {
  return pests.find(p => p.slug === slug);
}

