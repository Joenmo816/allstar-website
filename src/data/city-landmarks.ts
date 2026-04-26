import { getCityBySlug } from "@/data/service-cities";

export const cityLandmarks: Record<string, string[]> = {
  belton: ["58 Highway", "Belton High School area", "Cedar Tree Square", "Markey Parkway", "I-49 corridor"],
  bucyrus: ["Metcalf Avenue corridor", "271st Street area", "rural Miami County properties", "wooded acreage", "outbuildings and barns"],
  cleveland: ["Cleveland city center", "State Line Road area", "rural Cass County properties", "garages and outbuildings", "crawl-space homes"],
  drexel: ["Drexel city center", "rural Cass County roads", "farm-edge homes", "outbuildings", "crawl spaces and basements"],
  freeman: ["Freeman city center", "rural Cass County properties", "wood lines", "garage-entry points", "crawl-space homes"],
  grandview: ["Main Street Grandview", "I-49 corridor", "Harry S. Truman Drive", "High Grove Road area", "residential neighborhoods near South KC"],
  harrisonville: ["Harrisonville Square", "I-49 corridor", "Mechanic Street area", "Wall Street area", "Cass Regional area"],
  leawood: ["Town Center Plaza", "Mission Road corridor", "State Line Road", "Ironwoods Park area", "luxury neighborhoods near 135th Street"],
  "loch-lloyd": ["Loch Lloyd community", "Country Club area", "lakefront homes", "wooded lots", "high-value residential properties"],
  louisburg: ["Louisburg city center", "Metcalf Road area", "Ron Weers Park", "Miami County homes", "rural-edge properties"],
  olathe: ["Santa Fe Street", "Black Bob Road", "K-7 corridor", "Mahaffie area", "Johnson County neighborhoods"],
  "overland-park": ["Metcalf Avenue", "135th Street corridor", "Corporate Woods area", "Prairiefire area", "Blue Valley neighborhoods"],
  paola: ["Paola Square", "Baptiste Drive", "Wallace Park area", "Miami County homes", "rural-edge properties"],
  peculiar: ["Peculiar city center", "I-49 corridor", "C Highway area", "newer neighborhoods", "Cass County homes"],
  raymore: ["58 Highway", "Dean Avenue", "Raymore-Peculiar area", "Creekmoor area", "Ward Road corridor"],
  "south-kansas-city": ["Red Bridge area", "Martin City", "Holmes Road corridor", "State Line area", "Ward Parkway corridor"],
  "spring-hill": ["Webster Street", "199th Street corridor", "Spring Hill High School area", "newer neighborhoods", "Johnson County homes"],
};

export function getCityLandmarks(slug: string) {
  const city = getCityBySlug(slug);
  const landmarks = cityLandmarks[slug] ?? [];

  return {
    city,
    landmarks,
  };
}
