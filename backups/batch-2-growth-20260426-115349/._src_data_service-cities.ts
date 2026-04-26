export type ServiceCity = {
  name: string;
  slug: string;
  state: "KS" | "MO";
  county: string;
  premium?: boolean;
  angle: string;
  pests: string[];
};

export const serviceCities: ServiceCity[] = [
  {
    name: "Belton",
    slug: "belton",
    state: "MO",
    county: "Cass County",
    angle: "family-safe, no-contract pest solutions for homes near the south Kansas City metro",
    pests: ["ants", "spiders", "rodents", "cockroaches", "termites"],
  },
  {
    name: "Bucyrus",
    slug: "bucyrus",
    state: "KS",
    county: "Miami County",
    angle: "straightforward owner-operated service for rural and residential properties",
    pests: ["ants", "spiders", "rodents", "wasps", "termites"],
  },
  {
    name: "Cleveland",
    slug: "cleveland",
    state: "MO",
    county: "Cass County",
    angle: "local service with direct owner accountability and honest recommendations",
    pests: ["ants", "spiders", "rodents", "wasps", "termites"],
  },
  {
    name: "Drexel",
    slug: "drexel",
    state: "MO",
    county: "Cass County",
    angle: "practical pest solutions for homes, outbuildings, and country properties",
    pests: ["ants", "spiders", "rodents", "wasps", "termites"],
  },
  {
    name: "Freeman",
    slug: "freeman",
    state: "MO",
    county: "Cass County",
    angle: "owner-operated pest service for homeowners who want answers, not contracts",
    pests: ["ants", "spiders", "rodents", "wasps", "termites"],
  },
  {
    name: "Grandview",
    slug: "grandview",
    state: "MO",
    county: "Jackson County",
    angle: "fast help for ants, roaches, rodents, spiders, and termite concerns",
    pests: ["ants", "spiders", "rodents", "cockroaches", "termites"],
  },
  {
    name: "Harrisonville",
    slug: "harrisonville",
    state: "MO",
    county: "Cass County",
    angle: "reliable local pest service backed by 30+ years of real field experience",
    pests: ["ants", "spiders", "rodents", "wasps", "termites"],
  },
  {
    name: "Leawood",
    slug: "leawood",
    state: "KS",
    county: "Johnson County",
    premium: true,
    angle: "discreet, premium-home pest protection with family- and pet-conscious treatments",
    pests: ["ants", "spiders", "rodents", "mosquitoes", "termites"],
  },
  {
    name: "Loch Lloyd",
    slug: "loch-lloyd",
    state: "MO",
    county: "Cass County",
    premium: true,
    angle: "quiet, premium, owner-led pest solutions for high-value homes",
    pests: ["ants", "spiders", "rodents", "mosquitoes", "termites"],
  },
  {
    name: "Louisburg",
    slug: "louisburg",
    state: "KS",
    county: "Miami County",
    angle: "Miami County pest solutions with owner-operated honesty and no mandatory contracts",
    pests: ["ants", "spiders", "rodents", "wasps", "termites"],
  },
  {
    name: "Olathe",
    slug: "olathe",
    state: "KS",
    county: "Johnson County",
    angle: "fast scheduling and guaranteed re-service for busy Johnson County homeowners",
    pests: ["ants", "spiders", "rodents", "cockroaches", "termites"],
  },
  {
    name: "Overland Park",
    slug: "overland-park",
    state: "KS",
    county: "Johnson County",
    premium: true,
    angle: "premium local pest solutions with direct owner contact and no call-center runaround",
    pests: ["ants", "spiders", "rodents", "mosquitoes", "termites"],
  },
  {
    name: "Paola",
    slug: "paola",
    state: "KS",
    county: "Miami County",
    angle: "practical Miami County service for ants, spiders, rodents, wasps, and termites",
    pests: ["ants", "spiders", "rodents", "wasps", "termites"],
  },
  {
    name: "Peculiar",
    slug: "peculiar",
    state: "MO",
    county: "Cass County",
    angle: "local no-contract pest solutions for growing Cass County neighborhoods",
    pests: ["ants", "spiders", "rodents", "wasps", "termites"],
  },
  {
    name: "Raymore",
    slug: "raymore",
    state: "MO",
    county: "Cass County",
    angle: "fast scheduling, preventive service, and guaranteed re-service for Raymore homes",
    pests: ["ants", "spiders", "rodents", "cockroaches", "termites"],
  },
  {
    name: "South Kansas City",
    slug: "south-kansas-city",
    state: "MO",
    county: "Jackson County",
    angle: "South KC pest solutions from an owner-operated company with real field experience",
    pests: ["ants", "spiders", "rodents", "cockroaches", "termites"],
  },
  {
    name: "Spring Hill",
    slug: "spring-hill",
    state: "KS",
    county: "Johnson County",
    angle: "family-conscious pest solutions for growing homes and neighborhoods",
    pests: ["ants", "spiders", "rodents", "wasps", "termites"],
  },
];

export function getCityBySlug(slug: string) {
  return serviceCities.find((city) => city.slug === slug);
}

export const featuredCities = serviceCities.filter((city) =>
  ["belton", "raymore", "louisburg", "overland-park", "leawood", "loch-lloyd"].includes(city.slug)
);
