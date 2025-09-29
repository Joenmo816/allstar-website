export type Pest = {
  description?: string;
  slug: string;
  name: string;
  image: string;
  scientificName?: string;
  biology?: string;
  lifeCycle?: string;
  behavior?: string;
  size?: string;
};

export const pests: Pest[] = [
  { slug: "acrobat-ant", name: "Acrobat Ant", image: "/images/pests/acrobat-ant.jpg" },
  { slug: "american-cockroach", name: "American Cockroach", image: "/images/pests/American-Cockroach.jpg" },
  { slug: "american-house-spider", name: "American House Spider", image: "/images/pests/american-house-spider.jpg" },
  { slug: "argentine-ant", name: "Argentine Ant", image: "/images/pests/argentine-ant.jpg" },
  { slug: "asian-beetle", name: "Asian Beetle", image: "/images/pests/asian-beetle.jpg" },
  { slug: "assassin-bug", name: "Assassin Bug", image: "/images/pests/assassin-bug.jpg" },
  { slug: "bald-faced-hornet", name: "Bald Faced Hornet", image: "/images/pests/Bald-Faced-Hornet.jpg" },
  { slug: "barn-spider", name: "Barn Spider", image: "/images/pests/barn-spider.jpg" },
  { slug: "bat-bug", name: "Bat Bug", image: "/images/pests/bat-bug.jpg" },
  { slug: "bed-bug", name: "Bed Bug", image: "/images/pests/Bed-Bug.jpg" },
  { slug: "black-widow", name: "Black Widow", image: "/images/pests/black-widow.jpg" },
  { slug: "blue-mud-dauber", name: "Blue Mud Dauber", image: "/images/pests/blue-mud-dauber.jpg" },
  { slug: "bold-jumping-spider", name: "Bold Jumping Spider", image: "/images/pests/bold-jumping-spider.jpg" },
  { slug: "boxelder-bug", name: "Boxelder Bug", image: "/images/pests/Boxelder-Bug.jpg" },
  { slug: "brown-banded-cockroach", name: "Brown Banded Cockroach", image: "/images/pests/Brown-Banded-Cockroach.jpg" },
  { slug: "brown-recluse", name: "Brown Recluse Spider", image: "/images/pests/brown-recluse.jpg" },
  { slug: "brown-widow", name: "Brown Widow", image: "/images/pests/brown-widow.jpg" },
  { slug: "bumble-bee", name: "Bumble Bee", image: "/images/pests/Bumble-Bee.jpg" },
  { slug: "carpenter-ant", name: "Carpenter Ant", image: "/images/pests/carpenter-ant.jpg" },
  { slug: "carpenter-bee", name: "Carpenter Bee", image: "/images/pests/Carpenter-Bee.jpg" },
  { slug: "carpet-beetle", name: "Carpet Beetle", image: "/images/pests/Carpet-Beetle.jpg" },
  { slug: "cave-cricket", name: "Cave Cricket", image: "/images/pests/cave-cricket.jpg" },
  { slug: "cellar-spider", name: "Cellar Spider", image: "/images/pests/cellar-spider.jpg" },
  { slug: "cicada", name: "Cicada", image: "/images/pests/Cicada.jpg" },
  { slug: "cicada-killer", name: "Cicada Killer", image: "/images/pests/Cicada-Killer.jpg" },
  { slug: "clothes-moth", name: "Clothes Moth", image: "/images/pests/clothes-moth.jpg" },
  { slug: "clover-mite", name: "Clover Mite", image: "/images/pests/Clover-Mite.jpg" },
  { slug: "common-house-spider", name: "Common House Spider", image: "/images/pests/common-house-spider.jpg" },
  { slug: "daddy-longlegs", name: "Daddy Longlegs", image: "/images/pests/daddy-longlegs.jpg" },
  { slug: "deer-mouse", name: "Deer Mouse", image: "/images/pests/Deer-Mouse.jpg" },
  { slug: "digger-wasp", name: "Digger Wasp", image: "/images/pests/digger-wasp.jpg" },
  { slug: "drugstore-beetle", name: "Drugstore Beetle", image: "/images/pests/Drugstore-Beetle.jpg" },
  { slug: "earwig", name: "Earwig", image: "/images/pests/Earwig.jpg" },
  { slug: "european-hornet", name: "European Hornet", image: "/images/pests/European-Hornet.jpg" },
  { slug: "flea", name: "Flea", image: "/images/pests/Flea.jpg" },
  { slug: "flour-beetle", name: "Flour Beetle", image: "/images/pests/Flour-Beetle.jpg" },
  { slug: "funnel-spider", name: "Funnel Spider", image: "/images/pests/funnel-spider.jpg" },
  { slug: "garden-spider", name: "Garden Spider", image: "/images/pests/garden-spider.jpg" },
  { slug: "german-cockroach", name: "German Cockroach", image: "/images/pests/German-Cockroach.jpg" },
  { slug: "grain-beetle", name: "Grain Beetle", image: "/images/pests/Grain-Beetle.jpg" },
  { slug: "grass-spider", name: "Grass Spider", image: "/images/pests/grass-spider.jpg" },
  { slug: "honey-bee", name: "Honey Bee", image: "/images/pests/Honey-Bee.jpg" },
  { slug: "house-centipede", name: "House Centipede", image: "/images/pests/House-Centipede.jpg" },
  { slug: "house-mouse", name: "House Mouse", image: "/images/pests/House-Mouse.jpg" },
  { slug: "indian-meal-moth", name: "Indian Meal Moth", image: "/images/pests/Indian-Meal-Moth.jpg" },
  { slug: "japanese-beetle", name: "Japanese Beetle", image: "/images/pests/Japanese-Beetle.jpg" },
  { slug: "lady-bug", name: "Lady Bug", image: "/images/pests/Lady-Bug.jpg" },
  { slug: "leaf-cutter-bee", name: "Leaf Cutter Bee", image: "/images/pests/Leaf-Cutter-Bee.jpg" },
  { slug: "longjawed-spider", name: "Longjawed Spider", image: "/images/pests/longjawed-spider.jpg" },
  { slug: "mason-bee", name: "Mason Bee", image: "/images/pests/Mason-Bee.jpg" },
  { slug: "millipede", name: "Millipede", image: "/images/pests/Millipede.jpg" },
  { slug: "mosquito", name: "Mosquito", image: "/images/pests/Mosquito.jpg" },
  { slug: "mud-dauber", name: "Mud Dauber", image: "/images/pests/Mud-Dauber.jpg" },
  { slug: "norway-rat", name: "Norway Rat", image: "/images/pests/Norway-Rat.jpg" },
  { slug: "odorous-house-ant", name: "Odorous House Ant", image: "/images/pests/odorous-house-ant.jpg" },
  { slug: "oriental-cockroach", name: "Oriental Cockroach", image: "/images/pests/Oriental-Cockroach.jpg" },
  { slug: "paper-wasp", name: "Paper Wasp", image: "/images/pests/paper-wasp.jpg" },
  { slug: "pavement-ant", name: "Pavement Ant", image: "/images/pests/pavement-ant.jpg" },
  { slug: "pill-bug", name: "Pill Bug", image: "/images/pests/Pill-Bug.jpg" },
  { slug: "praying-mantis", name: "Praying Mantis", image: "/images/pests/Praying-Mantis.jpg" },
  { slug: "rat", name: "Rat", image: "/images/pests/Rat.jpg" },
  { slug: "red-wasp", name: "Red Wasp", image: "/images/pests/red-wasp.jpg" },
  { slug: "roof-rat", name: "Roof Rat", image: "/images/pests/Roof-Rat.jpg" },
  { slug: "sawtooth-beetle", name: "Sawtooth Beetle", image: "/images/pests/sawtooth-beetle.jpg" },
  { slug: "silverfish", name: "Silverfish", image: "/images/pests/Silverfish.jpg" },
  { slug: "smoky-brown-cockroach", name: "Smoky Brown Cockroach", image: "/images/pests/smoky-brown-cockroach.jpg" },
  { slug: "springtail", name: "Springtail", image: "/images/pests/Springtail.jpg" },
  { slug: "stink-bug", name: "Stink Bug", image: "/images/pests/Stink-Bug.jpg" },
  { slug: "subterranean-termite", name: "Subterranean Termite", image: "/images/pests/Subterranean-Termite.jpg" },
  { slug: "sweat-bee", name: "Sweat Bee", image: "/images/pests/Sweat-Bee.jpg" },
  { slug: "termite-swarmer", name: "Termite Swarmer", image: "/images/pests/Termite-Swarmer.jpg" },
  { slug: "tick", name: "Tick", image: "/images/pests/Tick.jpg" },
  { slug: "velvet-ant", name: "Velvet Ant", image: "/images/pests/velvet-ant.jpg" },
  { slug: "walking-stick", name: "Walking Stick", image: "/images/pests/walking-stick.jpg" },
  { slug: "wolf-spider", name: "Wolf Spider", image: "/images/pests/wolf-spider.jpg" },
  { slug: "yellow-sac-spider", name: "Yellow Sac Spider", image: "/images/pests/yellow-sac-spider.jpg" },
  { slug: "yellowjacket", name: "Yellowjacket", image: "/images/pests/Yellowjacket.jpg" }
];

export function getPest(slug: string): Pest | undefined {
  return pests.find(p => p.slug === slug);
}