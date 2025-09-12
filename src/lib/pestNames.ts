export function titleize(raw: string): string {
  const s = (raw || "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return s.replace(/\b\w/g, (c) => c.toUpperCase());
}
export function normalizeKey(input: string): string {
  return (input || "").toLowerCase().replace(/[^a-z]/g, "");
}

/** Canonical display names keyed by slug-without-punctuation (lowercase letters only). */
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
  carpenterant: "Carpenter Ant",
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
  longjawedspider: "Long Jawed Spider",
  masonbee: "Mason Bee",
  muddauber: "Mud Dauber",
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
  yellowsacspider: "Yellow Sac Spider"
};

/** Accepts string or object {slug|name} and returns a display name. */
export function displayNameFromAny(x: any): string {
  if (typeof x === "string") {
    const k = normalizeKey(x);
    return pestNames[k] || titleize(x);
  }
  const s = String(x?.slug ?? x?.name ?? x ?? "");
  const k = normalizeKey(s);
  return pestNames[k] || titleize(s);
}
