export type PestDetails = {
  biology?: string;
  lifeCycle?: string;
  habitat?: string;
  behavior?: string;
};

// Fill any you want—leave others blank; the page will show “Info coming soon.”
export const DESCRIPTIONS: Record<string, PestDetails> = {
  "brown-recluse": {
    biology: "Small, light-to-dark brown spiders; hallmark violin marking on cephalothorax.",
    lifeCycle: "Egg sacs hatch in about a month; juveniles reach maturity in ~1 year.",
    habitat: "Prefer dry, undisturbed areas: closets, attics, basements, behind stored items.",
    behavior: "Reclusive; bites are rare and typically occur when trapped against skin.",
  },

  "german-cockroach": {
    biology: "Light brown with two dark stripes on pronotum; most common indoor roach.",
    lifeCycle: "Fast reproducers; ootheca carried by female until hatching (20–40 nymphs).",
    habitat: "Warm, humid areas with food/water: kitchens, bathrooms, appliances.",
    behavior: "Nocturnal; strong aggregation around food, water, and harborage.",
  },

  "carpenter-ant": {
    biology: "Large ants (black/red); do not eat wood but excavate to nest.",
    lifeCycle: "Complete metamorphosis; colonies mature over years; winged swarmers in spring.",
    habitat: "Moist/decayed wood, logs, stumps; can nest in wall voids and window frames.",
    behavior: "Forage primarily at night; follow trails to sweets and proteins.",
  },
};