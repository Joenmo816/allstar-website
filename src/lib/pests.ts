export type Pest = {
slug: string
name: string
scientificName: string
size: string
habitat: string
biology: string
behavior: string
risk: string
}

export const pests: Pest[] = [

{ slug:"acrobat-ant", name:"Acrobat Ant", scientificName:"Crematogaster spp.", size:"1/8 inch", habitat:"Decaying wood and wall voids.", biology:"Ant species known for raising abdomen when disturbed.", behavior:"Forage for sweets and proteins.", risk:"Can infest homes." },

{ slug:"american-cockroach", name:"American Cockroach", scientificName:"Periplaneta americana", size:"2 inches", habitat:"Sewers, basements, crawlspaces.", biology:"Large cockroach species.", behavior:"Nocturnal scavenger.", risk:"Spreads bacteria." },

{ slug:"american-house-spider", name:"American House Spider", scientificName:"Parasteatoda tepidariorum", size:"1/4 inch", habitat:"Corners of homes.", biology:"Build irregular webs.", behavior:"Captures insects.", risk:"Harmless." },

{ slug:"argentine-ant", name:"Argentine Ant", scientificName:"Linepithema humile", size:"1/8 inch", habitat:"Soil and foundations.", biology:"Colonies contain multiple queens.", behavior:"Massive foraging trails.", risk:"Household infestations." },

{ slug:"asian-beetle", name:"Asian Lady Beetle", scientificName:"Harmonia axyridis", size:"1/4 inch", habitat:"Trees and buildings.", biology:"Predator of aphids.", behavior:"Invades homes in fall.", risk:"Indoor nuisance." },

{ slug:"assassin-bug", name:"Assassin Bug", scientificName:"Reduviidae", size:"1 inch", habitat:"Gardens.", biology:"Predatory insect.", behavior:"Feeds on other insects.", risk:"Painful bite." },

{ slug:"bald-faced-hornet", name:"Bald Faced Hornet", scientificName:"Dolichovespula maculata", size:"3/4 inch", habitat:"Tree nests.", biology:"Social wasp.", behavior:"Defends nest aggressively.", risk:"Painful stings." },

{ slug:"barn-spider", name:"Barn Spider", scientificName:"Araneus cavaticus", size:"1 inch", habitat:"Barns and sheds.", biology:"Orb-weaving spider.", behavior:"Builds webs at night.", risk:"Harmless." },

{ slug:"bat-bug", name:"Bat Bug", scientificName:"Cimex adjunctus", size:"3/16 inch", habitat:"Attics with bats.", biology:"Similar to bed bugs.", behavior:"Feeds on bats.", risk:"Can bite humans." },

{ slug:"bed-bug", name:"Bed Bug", scientificName:"Cimex lectularius", size:"1/4 inch", habitat:"Beds and furniture.", biology:"Blood feeding insect.", behavior:"Feeds at night.", risk:"Itchy bites." },

{ slug:"black-widow", name:"Black Widow Spider", scientificName:"Latrodectus mactans", size:"1/2 inch", habitat:"Woodpiles and sheds.", biology:"Venomous spider.", behavior:"Shy but defensive.", risk:"Medically significant bite." },

{ slug:"blue-mud-dauber", name:"Blue Mud Dauber", scientificName:"Chalybion californicum", size:"1 inch", habitat:"Garages and sheds.", biology:"Solitary wasp.", behavior:"Builds mud nests.", risk:"Rarely aggressive." },

{ slug:"bold-jumping-spider", name:"Bold Jumping Spider", scientificName:"Phidippus audax", size:"1/2 inch", habitat:"Gardens and siding.", biology:"Active hunter with strong vision.", behavior:"Jumps on prey.", risk:"Harmless." },

{ slug:"boxelder-bug", name:"Boxelder Bug", scientificName:"Boisea trivittata", size:"1/2 inch", habitat:"Boxelder trees.", biology:"Feeds on seeds.", behavior:"Invades homes in fall.", risk:"Nuisance." },

{ slug:"brown-banded-cockroach", name:"Brown Banded Cockroach", scientificName:"Supella longipalpa", size:"1/2 inch", habitat:"Warm indoor areas.", biology:"Small cockroach species.", behavior:"Hides in cabinets.", risk:"Food contamination." },

{ slug:"brown-recluse", name:"Brown Recluse Spider", scientificName:"Loxosceles reclusa", size:"1/2 inch", habitat:"Closets and storage areas.", biology:"Nocturnal spider.", behavior:"Avoids humans.", risk:"Venomous bite." },

{ slug:"brown-widow", name:"Brown Widow Spider", scientificName:"Latrodectus geometricus", size:"1/2 inch", habitat:"Outdoor structures.", biology:"Related to black widow.", behavior:"Builds messy webs.", risk:"Venomous bite." },

{ slug:"bumble-bee", name:"Bumble Bee", scientificName:"Bombus spp.", size:"1 inch", habitat:"Gardens.", biology:"Pollinator species.", behavior:"Social colonies.", risk:"Stings if threatened." },

{ slug:"carpenter-ant", name:"Carpenter Ant", scientificName:"Camponotus spp.", size:"1/2 inch", habitat:"Moist wood.", biology:"Excavate wood galleries.", behavior:"Forage indoors.", risk:"Structural damage." },

{ slug:"carpenter-bee", name:"Carpenter Bee", scientificName:"Xylocopa spp.", size:"1 inch", habitat:"Wood siding.", biology:"Drills nesting holes.", behavior:"Solitary bee.", risk:"Wood damage." },

{ slug:"carpet-beetle", name:"Carpet Beetle", scientificName:"Anthrenus spp.", size:"1/8 inch", habitat:"Carpets and fabrics.", biology:"Larvae eat natural fibers.", behavior:"Indoor infestations.", risk:"Clothing damage." },

{ slug:"cave-cricket", name:"Cave Cricket", scientificName:"Rhaphidophoridae", size:"1 inch", habitat:"Basements.", biology:"Prefers damp environments.", behavior:"Jumps when disturbed.", risk:"Nuisance." },

{ slug:"cellar-spider", name:"Cellar Spider", scientificName:"Pholcidae", size:"1/4 inch", habitat:"Basements.", biology:"Long legged spider.", behavior:"Builds loose webs.", risk:"Harmless." },

{ slug:"cicada", name:"Cicada", scientificName:"Cicadidae", size:"1.5 inches", habitat:"Trees.", biology:"Spend years underground.", behavior:"Loud buzzing calls.", risk:"Nuisance." },

{ slug:"cicada-killer", name:"Cicada Killer", scientificName:"Sphecius speciosus", size:"2 inches", habitat:"Lawns.", biology:"Hunts cicadas.", behavior:"Solitary wasp.", risk:"Large burrows." },

{ slug:"clover-mite", name:"Clover Mite", scientificName:"Bryobia praetiosa", size:"1/30 inch", habitat:"Lawns.", biology:"Plant feeding mite.", behavior:"Invades homes.", risk:"Stains surfaces." },

{ slug:"clothes-moth", name:"Clothes Moth", scientificName:"Tineola bisselliella", size:"1/4 inch", habitat:"Closets.", biology:"Larvae eat wool.", behavior:"Avoid light.", risk:"Clothing damage." },

{ slug:"common-house-spider", name:"Common House Spider", scientificName:"Parasteatoda tepidariorum", size:"1/4 inch", habitat:"Corners of homes.", biology:"Cobweb builder.", behavior:"Catches insects.", risk:"Harmless." },

{ slug:"daddy-longlegs", name:"Daddy Longlegs", scientificName:"Opiliones", size:"1/4 inch", habitat:"Basements.", biology:"Arachnid with long legs.", behavior:"Feeds on insects.", risk:"Harmless." },

{ slug:"deer-mouse", name:"Deer Mouse", scientificName:"Peromyscus maniculatus", size:"3 inches", habitat:"Rural structures.", biology:"Nocturnal rodent.", behavior:"Scavenges for food.", risk:"Carries hantavirus." },

{ slug:"digger-wasp", name:"Digger Wasp", scientificName:"Sphecidae", size:"1 inch", habitat:"Soil burrows.", biology:"Solitary wasp.", behavior:"Hunts insects.", risk:"Rarely aggressive." },

{ slug:"drugstore-beetle", name:"Drugstore Beetle", scientificName:"Stegobium paniceum", size:"1/8 inch", habitat:"Stored food.", biology:"Feeds on grains.", behavior:"Pantry pest.", risk:"Food contamination." },

{ slug:"earwig", name:"Earwig", scientificName:"Dermaptera", size:"1 inch", habitat:"Moist soil.", biology:"Recognized by pincers.", behavior:"Hide during day.", risk:"Nuisance." },

{ slug:"european-hornet", name:"European Hornet", scientificName:"Vespa crabro", size:"1.5 inches", habitat:"Tree cavities.", biology:"Large social wasp.", behavior:"Active at night.", risk:"Painful sting." },

{ slug:"flea", name:"Flea", scientificName:"Siphonaptera", size:"1/8 inch", habitat:"Pets and carpets.", biology:"Blood feeding parasite.", behavior:"Jump between hosts.", risk:"Bites and disease." },

{ slug:"flour-beetle", name:"Flour Beetle", scientificName:"Tribolium spp.", size:"1/8 inch", habitat:"Stored grains.", biology:"Pantry pest.", behavior:"Infests flour.", risk:"Food contamination." },

{ slug:"funnel-spider", name:"Funnel Spider", scientificName:"Agelenidae", size:"1 inch", habitat:"Lawns.", biology:"Build funnel webs.", behavior:"Fast runner.", risk:"Harmless." },

{ slug:"garden-spider", name:"Garden Spider", scientificName:"Argiope aurantia", size:"1 inch", habitat:"Gardens.", biology:"Orb weaver.", behavior:"Captures flying insects.", risk:"Beneficial predator." },

{ slug:"german-cockroach", name:"German Cockroach", scientificName:"Blattella germanica", size:"1/2 inch", habitat:"Kitchens.", biology:"Rapid breeding species.", behavior:"Hide in cracks.", risk:"Severe contamination." },

{ slug:"grain-beetle", name:"Grain Beetle", scientificName:"Oryzaephilus spp.", size:"1/8 inch", habitat:"Stored grain.", biology:"Pantry pest.", behavior:"Infests cereal.", risk:"Food contamination." },

{ slug:"grass-spider", name:"Grass Spider", scientificName:"Agelenopsis", size:"1 inch", habitat:"Lawns.", biology:"Build funnel webs.", behavior:"Fast runner.", risk:"Harmless." },

{ slug:"honey-bee", name:"Honey Bee", scientificName:"Apis mellifera", size:"1/2 inch", habitat:"Hives.", biology:"Pollinator.", behavior:"Social colony.", risk:"Stings when threatened." },

{ slug:"house-centipede", name:"House Centipede", scientificName:"Scutigera coleoptrata", size:"1 inch", habitat:"Basements.", biology:"Predatory arthropod.", behavior:"Feeds on insects.", risk:"Harmless." },

{ slug:"house-mouse", name:"House Mouse", scientificName:"Mus musculus", size:"3 inches", habitat:"Homes.", biology:"Rapid reproduction.", behavior:"Gnaws wires.", risk:"Disease contamination." },

{ slug:"indian-meal-moth", name:"Indian Meal Moth", scientificName:"Plodia interpunctella", size:"1/2 inch wingspan", habitat:"Pantries.", biology:"Larvae infest grain.", behavior:"Common pantry pest.", risk:"Food contamination." },

{ slug:"japanese-beetle", name:"Japanese Beetle", scientificName:"Popillia japonica", size:"1/2 inch", habitat:"Gardens.", biology:"Feeds on leaves.", behavior:"Active in summer.", risk:"Plant damage." },

{ slug:"lady-bug", name:"Lady Bug", scientificName:"Coccinellidae", size:"1/4 inch", habitat:"Gardens.", biology:"Predator of aphids.", behavior:"Overwinter indoors.", risk:"Nuisance." },

{ slug:"leaf-cutter-bee", name:"Leaf Cutter Bee", scientificName:"Megachile spp.", size:"1/2 inch", habitat:"Gardens.", biology:"Cuts leaf pieces for nests.", behavior:"Solitary bee.", risk:"Harmless." },

{ slug:"longjawed-spider", name:"Long Jawed Spider", scientificName:"Tetragnathidae", size:"1 inch", habitat:"Vegetation near water.", biology:"Orb weaving spider.", behavior:"Captures insects.", risk:"Harmless." },

{ slug:"mason-bee", name:"Mason Bee", scientificName:"Osmia spp.", size:"1/2 inch", habitat:"Wood cavities.", biology:"Solitary pollinator.", behavior:"Uses mud to seal nests.", risk:"Harmless." },

{ slug:"millipede", name:"Millipede", scientificName:"Diplopoda", size:"2 inches", habitat:"Moist soil.", biology:"Many legged arthropod.", behavior:"Feeds on organic matter.", risk:"Nuisance." },

{ slug:"mosquito", name:"Mosquito", scientificName:"Culicidae", size:"1/4 inch", habitat:"Standing water.", biology:"Blood feeding insect.", behavior:"Active at dusk.", risk:"Disease transmission." },

{ slug:"mud-dauber", name:"Mud Dauber", scientificName:"Sceliphron spp.", size:"1 inch", habitat:"Sheds and garages.", biology:"Solitary wasp.", behavior:"Builds mud nests.", risk:"Rarely aggressive." },

{ slug:"norway-rat", name:"Norway Rat", scientificName:"Rattus norvegicus", size:"7–9 inches", habitat:"Burrows near buildings.", biology:"Large rodent.", behavior:"Ground dwelling.", risk:"Disease spread." },

{ slug:"odorous-house-ant", name:"Odorous House Ant", scientificName:"Tapinoma sessile", size:"1/8 inch", habitat:"Homes and soil.", biology:"Smell when crushed.", behavior:"Forage indoors.", risk:"Food contamination." },

{ slug:"oriental-cockroach", name:"Oriental Cockroach", scientificName:"Blatta orientalis", size:"1 inch", habitat:"Basements.", biology:"Prefers damp areas.", behavior:"Slow moving cockroach.", risk:"Spreads bacteria." },

{ slug:"paper-wasp", name:"Paper Wasp", scientificName:"Polistes spp.", size:"1 inch", habitat:"Eaves and trees.", biology:"Build paper nests.", behavior:"Defend nests.", risk:"Painful stings." },

{ slug:"pavement-ant", name:"Pavement Ant", scientificName:"Tetramorium caespitum", size:"1/8 inch", habitat:"Under sidewalks.", biology:"Common urban ant.", behavior:"Invade homes.", risk:"Food contamination." },

{ slug:"pill-bug", name:"Pill Bug", scientificName:"Armadillidiidae", size:"1/2 inch", habitat:"Moist soil.", biology:"Crustacean relative.", behavior:"Roll into ball.", risk:"Harmless." },

{ slug:"praying-mantis", name:"Praying Mantis", scientificName:"Mantodea", size:"3–5 inches", habitat:"Gardens.", biology:"Predatory insect.", behavior:"Ambush hunter.", risk:"Beneficial predator." },

{ slug:"red-wasp", name:"Red Wasp", scientificName:"Polistes carolina", size:"1 inch", habitat:"Eaves and sheds.", biology:"Paper wasp.", behavior:"Defends nest.", risk:"Painful sting." },

{ slug:"roof-rat", name:"Roof Rat", scientificName:"Rattus rattus", size:"6–8 inches", habitat:"Attics.", biology:"Excellent climber.", behavior:"Nest above ground.", risk:"Disease contamination." },

{ slug:"sawtooth-beetle", name:"Sawtoothed Grain Beetle", scientificName:"Oryzaephilus surinamensis", size:"1/8 inch", habitat:"Stored grains.", biology:"Pantry pest.", behavior:"Infests cereal.", risk:"Food contamination." },

{ slug:"silverfish", name:"Silverfish", scientificName:"Lepisma saccharinum", size:"1/2 inch", habitat:"Bathrooms.", biology:"Primitive insect.", behavior:"Feeds on starch.", risk:"Damages books." },

{ slug:"smoky-brown-cockroach", name:"Smoky Brown Cockroach", scientificName:"Periplaneta fuliginosa", size:"1.5 inches", habitat:"Warm moist areas.", biology:"Large cockroach.", behavior:"Nocturnal.", risk:"Food contamination." },

{ slug:"springtail", name:"Springtail", scientificName:"Collembola", size:"1/16 inch", habitat:"Moist soil.", biology:"Tiny jumping arthropod.", behavior:"Jump when disturbed.", risk:"Nuisance." },

{ slug:"stink-bug", name:"Stink Bug", scientificName:"Pentatomidae", size:"1/2 inch", habitat:"Gardens.", biology:"Plant feeder.", behavior:"Release odor.", risk:"Nuisance." },

{ slug:"subterranean-termite", name:"Subterranean Termite", scientificName:"Reticulitermes flavipes", size:"1/4 inch", habitat:"Soil under homes.", biology:"Large wood-eating colonies.", behavior:"Build mud tubes.", risk:"Severe structural damage." },

{ slug:"sweat-bee", name:"Sweat Bee", scientificName:"Halictidae", size:"1/4 inch", habitat:"Gardens.", biology:"Small pollinator.", behavior:"Attracted to sweat.", risk:"Mild sting." },

{ slug:"termite-swarmer", name:"Termite Swarmer", scientificName:"Isoptera Alate", size:"1/2 inch wingspan", habitat:"Homes during swarm season.", biology:"Reproductive termite.", behavior:"Attracted to light.", risk:"Indicates infestation." },

{ slug:"tick", name:"Tick", scientificName:"Ixodidae", size:"1/8 inch", habitat:"Grass and woods.", biology:"Blood feeding parasite.", behavior:"Attach to animals.", risk:"Lyme disease." },

{ slug:"velvet-ant", name:"Velvet Ant", scientificName:"Mutillidae", size:"1/2 inch", habitat:"Dry soils.", biology:"Wingless wasp.", behavior:"Runs across ground.", risk:"Painful sting." },

{ slug:"walking-stick", name:"Walking Stick Insect", scientificName:"Phasmatodea", size:"3–5 inches", habitat:"Trees.", biology:"Camouflage insect.", behavior:"Feeds on leaves.", risk:"Harmless." },

{ slug:"wolf-spider", name:"Wolf Spider", scientificName:"Lycosidae", size:"1 inch", habitat:"Lawns and basements.", biology:"Active hunter.", behavior:"Fast runner.", risk:"Harmless." },

{ slug:"yellow-sac-spider", name:"Yellow Sac Spider", scientificName:"Cheiracanthium spp.", size:"1/4 inch", habitat:"Corners of rooms.", biology:"Nocturnal hunter.", behavior:"Build silk sacs.", risk:"Mild bite." },

{ slug:"yellowjacket", name:"Yellowjacket", scientificName:"Vespula spp.", size:"1/2 inch", habitat:"Underground nests.", biology:"Aggressive social wasp.", behavior:"Attracted to food.", risk:"Painful stings." }

]