export const pestNames: Record<string, string> = {
  acrobatant: "Acrobat Ant",
  argentineant: "Argentine Ant",
  asianbeetle: "Asian Beetle",
  assassinbug: "Assassin Bug",
  barnspider: "Barn Spider",
  batbug: "Bat Bug",
  bedbug: "Bed Bug",
  blackcricket: "Black Cricket",
  blackwidow: "Black Widow",
  bluemuddauber: "Blue Mud Dauber",
  boxelderbug: "Boxelder Bug",
  brownbandedcockroach: "Brown Banded Cockroach",
  bumblebee: "Bumble Bee",
  carpenterbee: "Carpenter Bee",
  cavecricket: "Cave Cricket",
  cellarspider: "Cellar Spider",
  clovermite: "Clover Mite",
  daddylonglegs: "Daddy Longlegs",
  diggerwasp: "Digger Wasp",
  drugstorebeetle: "Drugstore Beetle",
  europeanhornet: "European Hornet",
  flourbeetle: "Flour Beetle",
  funnelspider: "Funnel Spider",
  gardenspider: "Garden Spider",
  germancockroach: "German Cockroach",
  grainbeetle: "Grain Beetle",
  grassspider: "Grass Spider",
  hobospider: "Hobo Spider",
  honeybee: "Honey Bee",
  jumpingspider: "Jumping Spider",
  indianmealmoth: "Indian Meal Moth",
  housecentipede: "House Centipede",
  ladybug: "Lady Bug",
  japanesebeetle: "Japanese Beetle",
  leafcutterbee: "Leaf Cutter Bee",
  muddauber: "Mud Dauber",
  longjawedspider: "Long Jawed Spider",
  masonbee: "Mason Bee",
  odoroushouseant: "Odorous House Ant",
  orientalcockroach: "Oriental Cockroach",
  paperwasp: "Paper Wasp",
  prayingmantis: "Praying Mantis",
  redwasp: "Red Wasp",
  sawtoothbeetle: "Sawtooth Beetle",
  smokeybrowncockroach: "Smokey Brown Cockroach",
  stinkbug: "Stink Bug",
  subterraneantermite: "Subterranean Termite",
  sweatbee: "Sweat Bee",
  walkingstick: "Walking Stick",
  wolfspider: "Wolf Spider",
  yellowsacspider: "Yellow Sac Spider",
};

/**
 * Normalize any slug-ish string to a map key:
 *  - lowercases
 *  - removes all non-letters
 *  - joins words
 */
export function normalizeKey(input: string): string {
  return (input || "")
    .toLowerCase()
    .replace(/[^a-z]/g, ""); // keep letters only
}

/**
 * Returns a proper display name. If not found in map,
 * falls back to "Title Case" based on dashes/underscores/spaces.
 */
export function displayNameFromSlug(raw: string): string {
  const k = normalizeKey(raw);
  if (pestNames[k]) return pestNames[k];

  // Fallback: Title Case
  const cleaned = (raw || "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned.replace(/\b\w/g, (c) => c.toUpperCase());
}
