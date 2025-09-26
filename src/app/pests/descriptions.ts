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
  "subterranean-termite": "Subterranean Termite"
};

export const DESCRIPTIONS: Record<string, PestDetails> = {
  "brown-recluse": { biology: "Violin marking; dry, undisturbed areas.", behavior: "Reclusive; bites rare." },
  "black-widow": { biology: "Red hourglass; shy but medically significant." },
  "wolf-spider": { biology: "Large, fast; hunting, not web-building." },
  "house-spider": { biology: "Small web builders in corners/garages." },
  "american-cockroach": { biology: "Large reddish-brown; warm/moist sites." },
  "german-cockroach": { biology: "Two dark stripes; prolific in kitchens.", whenToCallPro: "Daytime sightings or persistent activity." },
  "oriental-cockroach": { biology: "Dark glossy; cooler damp places." },
  "carpenter-ant": { biology: "Excavate wood (don’t eat it); smooth galleries." },
  "odorous-house-ant": { biology: "Odor when crushed; trails along edges." },
  "pavement-ant": { biology: "Nest under slabs/sidewalks." },
  "carpenter-bee": { biology: "Round holes in wood; galleries." },
  "paper-wasp": { biology: "Umbrella nests under eaves." },
  "yellowjacket": { biology: "Aggressive; ground/wall void nests." },
  "bald-faced-hornet": { biology: "Large gray paper nests; a type of yellowjacket." },
  "house-mouse": { biology: "Enters via 1/4\" gaps; droppings/gnawing." },
  "norway-rat": { biology: "Burrowing; blunt nose." },
  "roof-rat": { biology: "Climber; tail longer than body." },
  "silverfish": { biology: "Silvery; feeds on starch/paper." },
  "earwig": { biology: "Pincers; nuisance invader." },
  "centipede": { biology: "Fast predator; damp areas." },
  "millipede": { biology: "Slow, moisture-driven; curls up." },
  "flea": { biology: "Jumping parasite; bites ankles." },
  "tick": { biology: "Blood-feeder; disease vector." },
  "bed-bug": { biology: "Hide in beds/furniture; feed at night." },
  "subterranean-termite": { biology: "Soil-dwelling; mud tubes; eats cellulose." }
};