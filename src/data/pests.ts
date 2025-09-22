export type LifeStages = {
  egg?: string;
  nymph?: string;
  larva?: string;
  pupa?: string;
  adult?: string;
};

export type Identification = {
  size?: string;
  color?: string;
  keyFeatures?: string[];
};

export type Control = {
  prevention?: string[];
  diyTips?: string[];
  professionalTreatments?: string[];
  whenToCallPro?: string;
};

export type Pest = {
  slug: string;
  name: string;
  scientificName?: string;
  group: string;
  image: string;
  gallery?: string[];
  risk: "Low" | "Medium" | "High";
  description?: string;

  identification?: Identification;
  biology?: string;
  lifeStages?: LifeStages;
  habits?: string[];
  habitat?: string;
  diet?: string;
  healthRisk?: string;
  damage?: string;
  seasonality?: string;
  region?: string;

  signs?: string[];
  control?: Control;

  funFact?: string;
};

export const pests: Pest[] = [
  {
    slug: "american-house-spider",
    name: "American House Spider",
    scientificName: "Parasteatoda tepidariorum",
    group: "Spider",
    image: "/images/pest/american-house-spider.jpg",
    risk: "Low",
    description: "Common web-building spider around windows, basements, garages, and eaves. Generally timid and beneficial.",
    identification: {
      size: "5–8 mm (body length)",
      color: "Yellowish-brown to gray with mottled abdomen",
      keyFeatures: [
        "Messy, cobweb-style webs in corners",
        "Rounded abdomen with faint patterns",
        "Often found near lights where insects gather"
      ]
    },
    biology: "Non-aggressive cobweb weaver; females create egg sacs in webs. Helps reduce nuisance insects indoors.",
    lifeStages: {
      egg: "Silk egg sacs attached to webbing; each contains dozens of eggs.",
      nymph: "Spiderlings disperse by walking or short strands; mature in weeks to months depending on temperature.",
      adult: "Females live longer and maintain webs; males wander seeking mates."
    },
    habits: [
      "Builds irregular webs in quiet corners and storage areas",
      "Prefers undisturbed, low-traffic spots",
      "Activity increases where flying insects are present (near lights)"
    ],
    habitat: "Basements, garages, sheds, eaves, window frames, and cluttered areas.",
    diet: "Small flying/creeping insects caught in webs.",
    healthRisk: "Bites are rare and typically mild (localized redness/itch). Not considered medically significant.",
    seasonality: "Year-round indoors; more noticed late summer–fall.",
    region: "Widespread across U.S., common in the KC metro.",
    signs: [
      "Messy cobwebs in corners and behind storage",
      "Accumulation of insect remains in web"
    ],
    control: {
      prevention: [
        "Reduce clutter and vacuum webs regularly",
        "Seal gaps around doors, windows, and utility penetrations",
        "Use tight-fitting screens and reduce outdoor night lighting near entries"
      ],
      diyTips: [
        "Vacuum webs, egg sacs, and spiders (dispose vacuum bag)",
        "Sticky traps along baseboards in garages/basements"
      ],
      professionalTreatments: [
        "Exterior de-webbing and targeted residual treatment at eaves and entry points",
        "Interior crack-and-crevice as needed in non-contact areas"
      ],
      whenToCallPro: "When webs reappear quickly, the exterior is heavily infested, or occupants are uncomfortable performing removal."
    },
    funFact: "House spiders are excellent natural pest control—one web can catch dozens of flies and gnats."
  },
  {
    slug: "carpenter-ant",
    name: "Carpenter Ant",
    scientificName: "Camponotus spp.",
    group: "Ant",
    image: "/images/pest/carpenter-ant.jpg",
    risk: "Medium",
    description: "Large ants that excavate moist or decayed wood to create galleries—can damage structures over time.",
    identification: {
      size: "6–13 mm workers; queens larger",
      color: "Black or black with red thorax (varies by species)",
      keyFeatures: [
        "Evenly rounded thorax profile (side view)",
        "One node (petiole) between thorax and abdomen",
        "Create smooth, sanded-looking wood galleries"
      ]
    },
    biology: "Colonies contain a queen with large populations of workers. Do not eat wood—excavate it to nest; feed on sweets and proteins.",
    lifeStages: {
      egg: "Laid by queen in protected chambers.",
      larva: "Grub-like larvae tended and fed by workers.",
      pupa: "Often in papery cocoons; develop into adults.",
      adult: "Winged reproductives swarm spring-early summer."
    },
    habits: [
      "Forage at night along edges and utilities",
      "Nest in damp or decayed wood—window sills, decks, wall voids",
      "Trail to outdoor sources like trees, firewood, or landscape timbers"
    ],
    habitat: "Moist, decaying wood indoors/outdoors; tree cavities, stumps, and structural voids.",
    diet: "Honeydew, sweets, and insect proteins.",
    healthRisk: "Do not spread disease; can bite if handled. Primary risk is structural damage.",
    damage: "Excavation weakens wood members; frass (wood shavings & parts of insects) accumulates below galleries.",
    seasonality: "Most visible spring through fall; swarmers in spring/early summer.",
    region: "Common throughout Missouri/Kansas.",
    signs: [
      "Piles of coarse sawdust-like frass with insect parts",
      "Rustling sounds in walls at night",
      "Large black/red ants foraging indoors"
    ],
    control: {
      prevention: [
        "Fix moisture problems and leaks; improve ventilation",
        "Trim trees/shrubs away from structures; remove contact points",
        "Store firewood off the ground and away from the home"
      ],
      diyTips: [
        "Vacuum foragers; clean food residues",
        "Place sticky monitors along suspected trails to gauge activity"
      ],
      professionalTreatments: [
        "Baiting with non-repellent, transfer-effective baits",
        "Void treatments targeting nests/galleries",
        "Perimeter non-repellent applications and moisture correction plan"
      ],
      whenToCallPro: "If you see frass piles, hear rustling in walls, or activity persists despite sanitation and moisture repairs."
    },
    funFact: "Carpenter ants keep their tunnels clean—galleries look sanded smooth compared with termite mud tubes."
  },
  {
    slug: "brown-recluse",
    name: "Brown Recluse",
    scientificName: "Loxosceles reclusa",
    group: "Spider",
    image: "/images/pest/brown-recluse.jpg",
    risk: "High",
    description: "Shy, nocturnal spider with a violin-like marking; prefers undisturbed indoor areas.",
    identification: {
      size: "6–12 mm (body)",
      color: "Light to medium brown",
      keyFeatures: [
        "Distinct violin marking on cephalothorax",
        "Six eyes in three pairs (most spiders have eight)",
        "Fine, short hairs; legs lack conspicuous spines"
      ]
    },
    biology: "Recluses wander at night to hunt; females produce papery egg sacs.",
    lifeStages: {
      egg: "Egg sacs in sheltered areas.",
      nymph: "Immatures resemble small adults and molt several times.",
      adult: "Live 1–2+ years in favorable indoor conditions."
    },
    habits: [
      "Hides in closets, boxes, basements, attics",
      "Active mostly at night; builds irregular retreat webs"
    ],
    habitat: "Dry, undisturbed voids; behind baseboards, stored items, wall voids.",
    diet: "Small insects and other arthropods.",
    healthRisk: "Bites are uncommon but can cause localized necrosis; severe outcomes are rare. Seek medical care for significant symptoms.",
    seasonality: "Most noticed spring–fall indoors.",
    region: "Very common in the Midwest, including the KC metro.",
    signs: [
      "Sightings of uniformly colored brown spiders with six eyes",
      "Paper-like egg sacs, shed skins in storage areas"
    ],
    control: {
      prevention: [
        "Reduce clutter; store items in sealed plastic totes",
        "Seal gaps at doors, windows, and utility penetrations",
        "Use tight-fitting outlet/switch plate covers in problem rooms"
      ],
      diyTips: [
        "Careful vacuuming of spiders, webs, egg sacs",
        "Sticky monitors along baseboards and behind furniture"
      ],
      professionalTreatments: [
        "Targeted crack-and-crevice applications in retreats/voids",
        "Comprehensive monitoring plan and exclusion"
      ],
      whenToCallPro: "If you’re finding multiple recluses or bites are suspected."
    },
    funFact: "Despite their reputation, recluses prefer to avoid people entirely—hence the name."
  },
  {
    slug: "black-widow",
    name: "Black Widow",
    scientificName: "Latrodectus mactans",
    group: "Spider",
    image: "/images/pest/black-widow.jpg",
    risk: "High",
    description: "Shiny black spider with a red hourglass on the underside of the abdomen; builds messy tangle webs.",
    identification: {
      size: "8–13 mm (female body); males smaller",
      color: "Glossy black female with red hourglass",
      keyFeatures: [
        "Hourglass marking on ventral abdomen (female)",
        "Irregular, strong silk webs in protected spots",
        "Shy and non-aggressive unless pressed"
      ]
    },
    biology: "Widow venom is neurotoxic; bites are rare and typically defensive.",
    lifeStages: {
      egg: "Round, tan egg sacs suspended in webbing.",
      nymph: "Spiderlings disperse and mature through molts.",
      adult: "Females maintain web retreats; males wander."
    },
    habits: [
      "Webs under steps, eaves, meter boxes, sheds",
      "Prefers dark, undisturbed outdoor structures"
    ],
    habitat: "Exterior voids, woodpiles, fences, utility boxes; sometimes garages.",
    diet: "Insects ensnared in webbing.",
    healthRisk: "Bites can cause systemic symptoms (cramps, sweating); medical evaluation is advised for significant symptoms.",
    seasonality: "Late spring through fall most noticed.",
    region: "Found across Missouri/Kansas; more common in protected outdoor sites.",
    signs: ["Presence of spider with hourglass marking", "Tough, irregular webbing with egg sacs"],
    control: {
      prevention: [
        "Wear gloves when moving firewood and stored items",
        "Reduce clutter and seal exterior gaps",
        "Limit night lighting near entry points"
      ],
      diyTips: [
        "Carefully remove webs/egg sacs with tools and dispose",
        "Sticky monitors in garages/sheds to gauge activity"
      ],
      professionalTreatments: [
        "Exterior de-webbing and targeted residual treatments",
        "Crack-and-crevice in harborage areas"
      ],
      whenToCallPro: "If you see multiple widows or have sensitive occupants."
    },
    funFact: "Widow silk is exceptionally strong for its weight."
  },
  {
    slug: "yellow-sac-spider",
    name: "Yellow Sac Spider",
    scientificName: "Cheiracanthium spp.",
    group: "Spider",
    image: "/images/pest/yellow-sac-spider.jpg",
    risk: "Medium",
    description: "Small pale spider that rests in a silken ‘sac’ during the day and hunts at night.",
    identification: {
      size: "5–10 mm (body)",
      color: "Pale yellow to light tan",
      keyFeatures: [
        "Small, elongate abdomen; dark tips on front legs common",
        "Silken daytime sacs in corners or folds"
      ]
    },
    biology: "Active nocturnal hunter; females place small egg sacs in protected sites.",
    lifeStages: { egg: "Small egg sacs", nymph: "Immatures resemble adults", adult: "Hunts without webs" },
    habits: ["Wanders walls/ceilings at night", "Day sacs along upper corners, blinds, frames"],
    habitat: "Homes, garages, vegetation near structures.",
    diet: "Small insects.",
    healthRisk: "Bites may be painful and locally irritated; serious complications uncommon.",
    seasonality: "Most noticed late summer–fall.",
    region: "Common across the Midwest.",
    signs: ["Small white silken sacs in corners", "Nighttime sightings on walls"],
    control: {
      prevention: ["Reduce outdoor night lighting", "Seal gaps; keep vegetation trimmed back"],
      diyTips: ["Vacuum sacs and spiders", "Sticky monitors to track activity"],
      professionalTreatments: ["Targeted crack-and-crevice; exterior perimeter as needed"],
      whenToCallPro: "If activity persists or is widespread indoors."
    },
    funFact: "Their silk ‘sleeping bag’ is rebuilt frequently and is an easy sign to spot."
  },
  {
    slug: "wolf-spider",
    name: "Wolf Spider",
    scientificName: "Lycosidae (family)",
    group: "Spider",
    image: "/images/pest/wolf-spider.jpg",
    risk: "Low",
    description: "Fast-running ground spider; often wanders into garages and basements.",
    identification: {
      size: "10–35 mm (body, species dependent)",
      color: "Gray to brown mottled",
      keyFeatures: [
        "Large eyes in three rows; strong legs",
        "Carries egg sac attached to spinnerets"
      ]
    },
    biology: "Active hunters; females carry egg sacs and later spiderlings on the abdomen.",
    lifeStages: { egg: "Silk egg sac carried by female", nymph: "Spiderlings ride on female’s back", adult: "Solitary hunter" },
    habits: ["Hunts at ground level", "Occasionally enters homes while foraging"],
    habitat: "Ground cover, leaf litter, foundations, garages.",
    diet: "Ground-dwelling insects and arthropods.",
    healthRisk: "Bites are rare and typically mild.",
    seasonality: "Spring–fall peak activity.",
    region: "Widespread in KC metro.",
    signs: ["Sightings of large, fast spiders at floor level"],
    control: {
      prevention: ["Seal door sweeps; reduce clutter", "Manage outdoor lighting that attracts prey"],
      diyTips: ["Sticky traps along walls", "Vacuum occasional invaders"],
      professionalTreatments: ["Perimeter treatments if activity is heavy"],
      whenToCallPro: "If frequent indoor sightings continue."
    },
    funFact: "Wolf spiders are attentive moms—spiderlings hitch a ride on their backs."
  },
  {
    slug: "bed-bug",
    name: "Bed Bug",
    scientificName: "Cimex lectularius",
    group: "Bug",
    image: "/images/pest/bed-bug.jpg",
    risk: "Medium",
    description: "Blood-feeding insects that hide near sleeping areas; bites are itchy but not known to transmit disease.",
    identification: {
      size: "4–7 mm adults; apple-seed shaped",
      color: "Reddish-brown (adults), pale nymphs",
      keyFeatures: [
        "Flattened, oval body; wingless",
        "Sweet/musty odor in heavy infestations"
      ]
    },
    biology: "Five nymphal stages; each requires a blood meal to molt; excellent at hiding.",
    lifeStages: { egg: "Tiny white eggs glued in clusters", nymph: "Five instars", adult: "Feeds mostly at night" },
    habits: ["Hide in seams, tufts, bed frames, baseboards, outlets", "Hitchhike in luggage and used furniture"],
    habitat: "Bedrooms, living rooms, hotels, theaters—anywhere people rest.",
    diet: "Human blood (primarily).",
    healthRisk: "Itchy welts and sleep disruption; psychological stress is common.",
    damage: "Staining on bedding/furniture; service costs if untreated.",
    seasonality: "Year-round indoors.",
    region: "Ubiquitous in urban/suburban settings.",
    signs: [
      "Clusters/lines of bites",
      "Dark fecal spots, shed skins, eggs, and live bugs in seams"
    ],
    control: {
      prevention: [
        "Inspect hotel beds/furniture when traveling",
        "Avoid used mattresses/furniture without inspection"
      ],
      diyTips: [
        "Launder/dry on high heat",
        "Declutter sleeping areas; encase mattresses/box springs"
      ],
      professionalTreatments: [
        "Integrated plan: inspections, targeted residuals, dusts, and/or heat",
        "Follow-up services with monitoring"
      ],
      whenToCallPro: "Immediately—DIY alone rarely succeeds once established."
    },
    funFact: "Bed bugs can hide in a screw head or paper seam—inspection discipline wins the battle."
  },
  {
    slug: "german-cockroach",
    name: "German Cockroach",
    scientificName: "Blattella germanica",
    group: "Cockroach",
    image: "/images/pest/german-cockroach.jpg",
    risk: "Medium",
    description: "Small indoor roach that reproduces rapidly in kitchens and baths.",
    identification: {
      size: "13–16 mm adults",
      color: "Light brown with two dark parallel stripes behind head",
      keyFeatures: ["Fast runners; prefer warmth, moisture, and food residues"]
    },
    biology: "Egg cases (oothecae) carried by females until near hatch; rapid life cycles in warm structures.",
    lifeStages: { egg: "Ootheca carried by female", nymph: "Multiple instars", adult: "Breeds quickly indoors" },
    habits: ["Congregates in tight cracks near heat/moisture", "Active at night; scatters when lights turn on"],
    habitat: "Kitchens, bathrooms, appliances, wall voids.",
    diet: "Omnivorous; crumbs, grease, residues.",
    healthRisk: "Allergens can aggravate asthma and allergies; contamination risk.",
    seasonality: "Year-round indoors.",
    region: "Common household pest in KC metro.",
    signs: ["Droppings/spotting, shed skins, egg cases, odor in heavy infestations"],
    control: {
      prevention: ["Sanitation, dry out moisture, reduce harborages", "Seal cracks and crevices"],
      diyTips: ["Sticky monitors to map hotspots", "Vacuum and clean grease/crumbs"],
      professionalTreatments: [
        "Non-repellent gel baits and insect growth regulators (IGRs)",
        "Targeted crack-and-crevice treatments and exclusion"
      ],
      whenToCallPro: "As soon as you see multiple roaches—populations escalate quickly."
    },
    funFact: "German cockroaches prefer to squeeze into cracks so tight their bodies touch the top and bottom."
  },
  {
    slug: "odorous-house-ant",
    name: "Odorous House Ant",
    scientificName: "Tapinoma sessile",
    group: "Ant",
    image: "/images/pest/odorous-house-ant.jpg",
    risk: "Low",
    description: "Small dark ants that trail indoors; when crushed, they smell like rotten coconut.",
    identification: {
      size: "2.5–3.3 mm",
      color: "Brown to black",
      keyFeatures: [
        "Single, low node hidden by abdomen",
        "Erratic trailing lines along edges"
      ]
    },
    biology: "Multiple queens and many satellite nests; readily move when disturbed.",
    lifeStages: { egg: "Tiny white eggs", larva: "Fed by workers", pupa: "Develops to adult", adult: "Workers and reproductives" },
    habits: ["Trails to sweets and proteins", "Nests in wall voids, under stones, mulch"],
    habitat: "Structures and landscaping; moisture favors colonies.",
    diet: "Honeydew, sweets, and proteins.",
    healthRisk: "Nuisance; no structural damage.",
    seasonality: "Active spring–fall; may trail indoors year-round.",
    region: "Very common around KC homes.",
    signs: ["Strong foraging trails along wires/baseboards", "Odor when crushed"],
    control: {
      prevention: ["Trim vegetation; reduce heavy mulch", "Seal gaps; remove food residues"],
      diyTips: ["Clean trails; place sealed sticky monitors to track", "Wipe residues that attract ants"],
      professionalTreatments: [
        "Non-repellent ant baits and perimeter applications",
        "Colony source reduction and moisture correction"
      ],
      whenToCallPro: "If trails keep reappearing or nests aren’t located."
    },
    funFact: "Their ‘rotten coconut’ odor is a quick field ID clue."
  },
  {
    slug: "paper-wasp",
    name: "Paper Wasp",
    scientificName: "Polistes spp.",
    group: "Wasp",
    image: "/images/pest/paper-wasp.jpg",
    risk: "Medium",
    description: "Umbrella-shaped open paper nests on eaves and structures; can sting if nests are disturbed.",
    identification: {
      size: "16–20+ mm",
      color: "Brown, yellow, red patterns (varies by species)",
      keyFeatures: [
        "Long legs that dangle in flight",
        "Open cells visible from below"
      ]
    },
    biology: "Annual colonies started by overwintered queens in spring.",
    lifeStages: { egg: "Eggs in open cells", larva: "Fed chewed insects", pupa: "Capped cells", adult: "Workers defend nest" },
    habits: ["Build nests under eaves, porch ceilings, play equipment", "Prey on caterpillars and other insects"],
    habitat: "Exterior structures and vegetation.",
    diet: "Insect prey; adults take nectar/sugars.",
    healthRisk: "Stings are painful; allergic reactions are possible—avoid disturbing nests.",
    seasonality: "Spring nest founding; peak summer activity.",
    region: "Very common around homes in KC.",
    signs: ["Visible umbrella nests under overhangs"],
    control: {
      prevention: ["Seal soffit gaps; remove early start nests carefully", "Reduce harborages around play areas"],
      diyTips: ["Treat very small new nests at night with caution", "Keep distance from active nests"],
      professionalTreatments: [
        "Protective removal and residual treatment at eaves",
        "Follow-up to prevent re-nesting"
      ],
      whenToCallPro: "If nests are large, high, or near entrances/play areas."
    },
    funFact: "Paper wasps chew wood fibers mixed with saliva to make their paper nests."
  },
  {
    slug: "carpenter-bee",
    name: "Carpenter Bee",
    scientificName: "Xylocopa virginica",
    group: "Bee",
    image: "/images/pest/carpenter-bee.jpg",
    risk: "Low",
    description: "Large, black-and-yellow bees that bore round holes into wood to create brood galleries.",
    identification: {
      size: "19–25 mm",
      color: "Yellow thorax with black abdomen (mostly hairless, shiny)",
      keyFeatures: [
        "Perfectly round ~1/2-inch entrance holes",
        "Coarse sawdust-like frass beneath holes"
      ]
    },
    biology: "Females excavate brood chambers; males hover near entries and can be territorial (rarely sting).",
    lifeStages: { egg: "Placed in chambers with pollen balls", larva: "Develops on pollen provisions", adult: "Overwinters in galleries" },
    habits: ["Targets unpainted or weathered softwoods", "Returns to same sites annually if untreated"],
    habitat: "Fascia boards, decks, pergolas, fence rails.",
    diet: "Nectar and pollen; do not eat wood.",
    healthRisk: "Low sting risk; males can’t sting.",
    damage: "Cosmetic to moderate wood damage; woodpeckers may enlarge holes.",
    seasonality: "Spring–early summer most active.",
    region: "Common throughout KC metro.",
    signs: ["Round holes, frass, and hovering bees near wood"],
    control: {
      prevention: ["Paint or seal exposed wood", "Use hardwoods or capped materials where possible"],
      diyTips: ["Plug old holes in late fall/winter after treatment", "Sand/paint damaged areas"],
      professionalTreatments: [
        "Inject galleries and treat surfaces",
        "Recommend carpentry repairs where needed"
      ],
      whenToCallPro: "If damage recurs annually or is widespread."
    },
    funFact: "Carpenter bees prefer previously used holes—treating and sealing breaks the cycle."
  },
  {
    slug: "house-mouse",
    name: "House Mouse",
    scientificName: "Mus musculus",
    group: "Rodent",
    image: "/images/pest/house-mouse.jpg",
    risk: "Medium",
    description: "Small commensal rodent that nests in structures and contaminates food and surfaces.",
    identification: {
      size: "6–9 cm body; tail about same length",
      color: "Gray-brown with lighter belly",
      keyFeatures: [
        "Small head/feet; pointed snout, large ears",
        "Droppings 3–6 mm, pointed ends"
      ]
    },
    biology: "Breeds rapidly with multiple litters per year in structures.",
    lifeStages: { nymph: "Juveniles mature quickly", adult: "Primarily nocturnal" },
    habits: ["Nests in insulation, appliances, storage", "Runs along edges; gnaws to access food"],
    habitat: "Homes, garages, sheds, businesses.",
    diet: "Seeds and grains; opportunistic foods.",
    healthRisk: "Contamination and allergens; potential disease concerns.",
    damage: "Gnawing on wiring, packaging, and stored items.",
    seasonality: "Year-round indoors; increases in cold weather.",
    region: "Common in KC metro.",
    signs: ["Droppings, gnaw marks, rub marks, scampering sounds"],
    control: {
      prevention: ["Seal gaps 1/4 inch and larger; door sweeps", "Tight food storage and sanitation"],
      diyTips: ["Use snap traps along walls; wear gloves; dispose safely", "Track with talc/powder to reveal runways"],
      professionalTreatments: [
        "Inspection and exclusion plan",
        "Strategic trapping program and sanitation guidance"
      ],
      whenToCallPro: "If droppings persist or noises continue after DIY steps."
    },
    funFact: "A mouse can fit through a hole the size of a dime—exclusion is everything."
  }
];