export type PestDetails = {
  biology?: string;
  lifeCycle?: string;
  habitat?: string;
  behavior?: string;
  diyTips?: string[];
  professionalTreatments?: string[];
  whenToCallPro?: string;
  funFact?: string;
};

export const SLUG_TO_NAME: Record<string, string> = {
  "brown-recluse": "Brown Recluse",
  "black-widow": "Black Widow",
  "wolf-spider": "Wolf Spider",
  "house-spider": "Common House Spider",
  "american-cockroach": "American Cockroach",
  "german-cockroach": "German Cockroach",
  "oriental-cockroach": "Oriental Cockroach",
  "carpenter-ant": "Carpenter Ant",
  "odorous-house-ant": "Odorous House Ant",
  "pavement-ant": "Pavement Ant",
  "carpenter-bee": "Carpenter Bee",
  "paper-wasp": "Paper Wasp",
  "yellowjacket": "Yellowjacket",
  "bald-faced-hornet": "Bald-faced Hornet",
  "house-mouse": "House Mouse",
  "norway-rat": "Norway Rat",
  "roof-rat": "Roof Rat",
  "silverfish": "Silverfish",
  "earwig": "Earwig",
  "centipede": "House Centipede",
  "millipede": "Millipede",
  "flea": "Flea",
  "tick": "Tick",
  "bed-bug": "Bed Bug",
  "subterranean-termite": "Subterranean Termite",
};

export const DESCRIPTIONS: Record<string, PestDetails> = {
  "brown-recluse": {
    biology: "Light to dark brown with a violin marking on the cephalothorax.",
    habitat: "Dry, undisturbed areas: closets, basements, attics, behind storage.",
    behavior: "Reclusive; bites are rare and usually accidental.",
    diyTips: ["Reduce clutter", "Shake out stored clothing", "Install tight door sweeps"],
    professionalTreatments: ["Targeted crack & crevice applications", "Glue monitoring program"],
    whenToCallPro: "If you see multiple spiders indoors or suspect an established population.",
  },
  "black-widow": {
    biology: "Shiny black spider; females with red hourglass on abdomen.",
    habitat: "Exterior voids, meter boxes, under steps, woodpiles.",
    behavior: "Shy but medically significant bite possible when disturbed.",
  },
  "wolf-spider": {
    biology: "Large, fast runners; do not spin webs to catch prey.",
    habitat: "Yards, basements, garages; wander indoors.",
  },
  "house-spider": {
    biology: "Small web builders; variable color patterns.",
    habitat: "Corners, basements, garages, window frames.",
  },
  "american-cockroach": {
    biology: "Large reddish-brown roach; can glide.",
    habitat: "Sewers, drains, boiler rooms; warm/moist sites.",
  },
  "german-cockroach": {
    biology: "Light brown with two dark stripes; prolific indoors.",
    habitat: "Kitchens/baths near food, water, warmth.",
    professionalTreatments: ["Baiting with non-repellents", "IGR rotation", "Crack/crevice micro-injections"],
    whenToCallPro: "Any visible daytime activity or persistent sightings after DIY sprays.",
  },
  "oriental-cockroach": {
    biology: "Dark, glossy; prefers cooler, damp places.",
    habitat: "Basements, crawlspaces, floor drains.",
  },
  "carpenter-ant": {
    biology: "Large ants; excavate smooth galleries in wood (don’t eat it).",
    habitat: "Moist, decayed wood; tree lines; wall voids.",
    funFact: "Galleries look sanded smooth vs. termite mud tubes.",
  },
  "odorous-house-ant": {
    biology: "Small brown/black; emit odor when crushed.",
    habitat: "Kitchens, bathrooms; trails along edges.",
  },
  "pavement-ant": {
    biology: "Small brown ants; nests under slabs and sidewalks.",
  },
  "carpenter-bee": {
    biology: "Large bees that bore round holes in wood to make galleries.",
    habitat: "Deck rails, fascia, fences; unpainted softwoods.",
  },
  "paper-wasp": {
    biology: "Umbrella-shaped exposed nests under eaves.",
  },
  "yellowjacket": {
    biology: "Aggressive wasps; ground or wall void nests.",
  },
  "bald-faced-hornet": {
    biology: "Large gray paper nests in trees/shrubs; actually a yellowjacket.",
  },
  "house-mouse": {
    biology: "Small rodent; gnawing & droppings common.",
    habitat: "Kitchens, garages, storage; enter via gaps 1/4\".",
  },
  "norway-rat": {
    biology: "Large burrowing rat; blunt nose; shorter tail than body.",
  },
  "roof-rat": {
    biology: "Agile climber; pointed nose; tail longer than body.",
  },
  "silverfish": {
    biology: "Silvery teardrop insect; feeds on starches/paper.",
  },
  "earwig": {
    biology: "Pincers (forceps) at rear; mostly nuisance invader.",
  },
  "centipede": {
    biology: "Fast predator with many legs; prefers damp areas.",
  },
  "millipede": {
    biology: "Many legs; slow; roll up when disturbed; moisture-driven invader.",
  },
  "flea": {
    biology: "Small jumping parasite; bites ankles; often from pets/wildlife.",
  },
  "tick": {
    biology: "Blood-feeding arachnid; vector of diseases.",
  },
  "bed-bug": {
    biology: "Flat, reddish-brown; hide in beds/furniture; feed at night.",
  },
  "subterranean-termite": {
    biology: "Live in soil; build mud tubes; feed on cellulose.",
    behavior: "Workers forage continuously; swarmers in spring.",
  },
};