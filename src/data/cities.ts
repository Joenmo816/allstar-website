export type CityEntry = {
  slug: string;
  name: string;
  state: "KS" | "MO";
  county?: string;
};

export const cities: CityEntry[] = [
  { slug: "belton", name: "Belton", state: "MO", county: "Cass County" },
  { slug: "bucyrus", name: "Bucyrus", state: "KS", county: "Miami County" },
  { slug: "cass-county-mo", name: "Cass County", state: "MO" },
  { slug: "cleveland", name: "Cleveland", state: "MO", county: "Cass County" },
  { slug: "grandview", name: "Grandview", state: "MO", county: "Jackson County" },
  { slug: "harrisonville", name: "Harrisonville", state: "MO", county: "Cass County" },
  { slug: "jackson-county-mo", name: "Jackson County", state: "MO" },
  { slug: "johnson-county-ks", name: "Johnson County", state: "KS" },
  { slug: "kansas-city", name: "Kansas City", state: "MO", county: "Jackson County" },
  { slug: "leawood", name: "Leawood", state: "KS", county: "Johnson County" },
  { slug: "loch-lloyd", name: "Loch Lloyd", state: "MO", county: "Cass County" },
  { slug: "louisburg", name: "Louisburg", state: "KS", county: "Miami County" },
  { slug: "martin-city", name: "Martin City", state: "MO", county: "Jackson County" },
  { slug: "miami-county-ks", name: "Miami County", state: "KS" },
  { slug: "olathe", name: "Olathe", state: "KS", county: "Johnson County" },
  { slug: "overland-park", name: "Overland Park", state: "KS", county: "Johnson County" },
  { slug: "paola", name: "Paola", state: "KS", county: "Miami County" },
  { slug: "peculiar", name: "Peculiar", state: "MO", county: "Cass County" },
  { slug: "raymore", name: "Raymore", state: "MO", county: "Cass County" },
  { slug: "spring-hill", name: "Spring Hill", state: "KS", county: "Johnson County" },
];



