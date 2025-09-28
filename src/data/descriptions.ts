export type PestDetails = {
  description?: string;
  biology?: string;
  lifeCycle?: string;
  habitat?: string;
  behavior?: string;
  diyTips?: string[];
  professionalTreatments?: string[];
  whenToCallPro?: string;
  funFact?: string;
};
export const DESCRIPTIONS: Record<string, PestDetails> = {
  'acrobat-ant': {
    scientificName: 'Crematogaster spp.',
    biology: 'Heart shaped gaster raised when disturbed; decayed wood and voids.',
    lifeCycle: 'Complete metamorphosis; satellite nests; summer swarmers.',
    behavior: 'Trails to sweets and proteins; may strip wire insulation.',
    size: 'Workers 2.5-3.5 mm'
  },
  'american-cockroach': {
    scientificName: 'Periplaneta americana',
    biology: 'Largest common pest roach; reddish brown; pale figure 8 on pronotum.',
    lifeCycle: 'About 16 nymphs per ootheca; 6-12 months to adult; adults to 1 year.',
    behavior: 'Warm moist sites like sewers and boiler rooms; can fly in warm weather.',
    size: 'Adults 34-53 mm'
  },
  'american-house-spider': {
    scientificName: 'Parasteatoda tepidariorum',
    biology: 'Common cobweb weaver indoors; brownish with banded legs.',
    lifeCycle: 'Egg sacs about 200 eggs; multiple generations indoors.',
    behavior: 'Harmless; feeds on indoor pests.',
    size: 'Body 5-8 mm'
  },
  'argentine-ant': {
    scientificName: 'Linepithema humile',
    biology: 'Polygynous invasive; supercolonies; shallow moist nests.',
    lifeCycle: 'Brood most of year indoors; many queens.',
    behavior: 'Strong trailing to sweets and honeydew; displaces native ants.',
    size: 'Workers 2.2-2.8 mm'
  },
  'asian-beetle': {
    scientificName: 'Harmonia axyridis',
    biology: 'Multicolored lady beetle; M mark on pronotum; nuisance overwinterer.',
    lifeCycle: 'Multiple generations in warm months.',
    behavior: 'Aggregates on sunlit walls and enters structures in fall.',
    size: 'Adults 5-8 mm'
  },
  'assassin-bug': { scientificName: '', biology: '', lifeCycle: '', behavior: '', size: '' },
  'bald-faced-hornet': {
    scientificName: 'Dolichovespula maculata',
    biology: 'Black and white social wasp with large aerial paper nests.',
    lifeCycle: 'Annual colonies; queen overwinters; new nests each spring.',
    behavior: 'Defensive; will sting repeatedly when nest is disturbed.',
    size: 'Workers 13-20 mm; queens larger'
  },
  'barn-spider': {
    scientificName: 'Araneus cavaticus',
    biology: 'Nocturnal orb weaver on barns porches and eaves.',
    lifeCycle: 'Egg sac overwinters; adults late summer into fall.',
    behavior: 'Harmless beneficial predator; rebuilds web nightly.',
    size: 'Females roughly 14-20 mm'
  },
  'bat-bug': { scientificName: '', biology: '', lifeCycle: '', behavior: '', size: '' },
  'bed-bug': { scientificName: '', biology: '', lifeCycle: '', behavior: '', size: '' },
  'black-widow': {
    scientificName: 'Latrodectus mactans',
    biology: 'Glossy black female with red hourglass on abdomen underside.',
    lifeCycle: 'Egg sac 200-400 eggs; spiderlings disperse by ballooning.',
    behavior: 'Webs in woodpiles and sheds; shy but medically significant bite.',
    size: 'Females 8-13 mm body'
  },
  'blue-mud-dauber': {
    scientificName: 'Chalybion californicum',
    biology: 'Metallic blue solitary wasp; reuses mud nests and hunts spiders.',
    lifeCycle: 'Provisioned cells with paralyzed spiders; multiple broods warm months.',
    behavior: 'Frequently hunts black widows around structures.',
    size: 'Adult about 13-20 mm'
  },
  'bold-jumping-spider': {
    scientificName: 'Phidippus audax',
    biology: 'Black jumping spider with white to orange spots and iridescent green chelicerae.',
    lifeCycle: 'Egg sacs guarded by female; one or more generations per year.',
    behavior: 'Diurnal active hunter; curious behavior; excellent vision.',
    size: 'Body about 8-18 mm'
  },
  'boxelder-bug': {
    scientificName: 'Boisea trivittata',
    biology: 'Black with red margins; congregates on sunny walls and indoors in fall.',
    lifeCycle: 'Develops on boxelder and maple seeds.',
    behavior: 'Nuisance invader; minimal plant damage.',
    size: 'Adults 12-14 mm'
  },
  'brown-banded-cockroach': {
    scientificName: 'Supella longipalpa',
    biology: 'Small light brown roach with pale bands across wings and abdomen.',
    lifeCycle: 'Ootheca glued to surfaces; roughly 1-3 months to adult.',
    behavior: 'Warm dry areas above eye level; cabinets furniture electronics.',
    size: 'Adults 10-14 mm'
  },
  'brown-recluse': {
    scientificName: 'Loxosceles reclusa',
    biology: 'Brown spider with violin mark; six eyes in pairs.',
    lifeCycle: 'Egg sacs hatch in about 1 month; about 1 year to maturity.',
    behavior: 'Reclusive; bites defensive; attics closets stored items.',
    size: 'Body 6-12 mm'
  },
  'brown-widow': {
    scientificName: 'Latrodectus geometricus',
    biology: 'Brown to tan with orange or yellow hourglass; spiky egg sacs.',
    lifeCycle: 'Multiple sacs in warm months; fast colonizer around buildings.',
    behavior: 'Often around outdoor furniture eaves and railings.',
    size: 'Females about 7-10 mm body'
  },
  'bumble-bee': {
    scientificName: 'Bombus spp.',
    biology: 'Fuzzy social bees with annual colonies.',
    lifeCycle: 'Queen starts nest in spring; colony peaks late summer.',
    behavior: 'Non aggressive but defend nests; important pollinators.',
    size: 'Workers 10-18 mm; queens larger'
  },
  'carpenter-ant': {
    scientificName: 'Camponotus spp.',
    biology: 'Excavate smooth galleries in moist or decayed wood; do not eat wood.',
    lifeCycle: 'Colonies mature over years; spring-summer swarmers.',
    behavior: 'Nocturnal foragers; sawdust like frass near activity.',
    size: 'Workers 6-16 mm'
  },
  'carpenter-bee': {
    scientificName: 'Xylocopa spp.',
    biology: 'Large solitary bees that bore round holes to tunnel galleries in wood.',
    lifeCycle: 'Overwinter as adults; nest and lay eggs in spring; usually one generation per year.',
    behavior: 'Males hover and guard; females can sting if handled; prefer eaves fascia and decks.',
    size: 'Adults 19-25 mm'
  },
  'carpet-beetle': {
    scientificName: 'Anthrenus and Attagenus spp.',
    biology: 'Larvae are hairy and feed on wool feathers and stored items.',
    lifeCycle: 'Egg to larva to pupa to adult; several months to a year.',
    behavior: 'Adults at windows; larvae in closets vents and under furniture.',
    size: 'Adults 2-4 mm; larvae larger'
  },
  'cave-cricket': {
    scientificName: 'Rhaphidophoridae',
    biology: 'Humpbacked crickets with very long antennae and legs; wingless.',
    lifeCycle: 'Egg to nymph to adult; prefer cool damp sites.',
    behavior: 'Attracted to basements crawl spaces and garages.',
    size: 'Adults 15-33 mm'
  },
  'cellar-spider': {
    scientificName: 'Pholcus phalangioides',
    biology: 'Very long legs; hangs upside down in corners and basements.',
    lifeCycle: 'Multiple sacs per year indoors; quick cycles in warmth.',
    behavior: 'Harmless; preys on other spiders and insects.',
    size: 'Body 7-8 mm; leg span much larger'
  },
  'cicada': { scientificName: '', biology: '', lifeCycle: '', behavior: '', size: '' },
  'cicada-killer': {
    scientificName: 'Sphecius speciosus',
    biology: 'Large solitary wasp that provisions burrows with cicadas.',
    lifeCycle: 'One generation; adults mid to late summer.',
    behavior: 'Intimidating but rarely sting; males patrol territories.',
    size: 'Adults 25-50 mm'
  },
  'clothes-moth': {
    scientificName: 'Tineola bisselliella (webbing clothes moth)',
    biology: 'Larvae feed on wool fur and natural fibers; adults avoid light.',
    lifeCycle: 'Egg to larva to pupa to adult; several months at room temperature.',
    behavior: 'Larvae in closets drawers and upholstered furniture.',
    size: 'Adults 6-8 mm body'
  },
  'clover-mite': {
    scientificName: 'Bryobia praetiosa',
    biology: 'Tiny reddish mites that leave red smear when crushed.',
    lifeCycle: 'Parthenogenetic reproduction; rapid in spring.',
    behavior: 'Invade sun exposed walls and windowsills in spring.',
    size: 'Adults about 0.75 mm'
  },
  'common-house-spider': { scientificName: '', biology: '', lifeCycle: '', behavior: '', size: '' },
  'daddy-longlegs': { scientificName: '', biology: '', lifeCycle: '', behavior: '', size: '' },
  'deer-mouse': {
    scientificName: 'Peromyscus maniculatus',
    biology: 'Bicolored tail; rural and suburban structures.',
    lifeCycle: 'Breeds spring through fall; several litters per year.',
    behavior: 'Known reservoir for hantavirus; exclude and sanitize carefully.',
    size: 'Body 7-10 cm'
  },
  'digger-wasp': {
    scientificName: 'Sphex spp. and related',
    biology: 'Solitary wasps that dig burrows and provision with katydids or crickets.',
    lifeCycle: 'One generation typical; larvae develop in underground cells.',
    behavior: 'Generally non aggressive unless handled.',
    size: 'Adults 20-35 mm'
  },
  'drugstore-beetle': {
    scientificName: 'Stegobium paniceum',
    biology: 'Small brown stored product beetle; pits and holes in packaging.',
    lifeCycle: 'Complete metamorphosis; 1-7 months depending on warmth.',
    behavior: 'Infests spices flour and dried goods; flies to lights.',
    size: 'Adults 2-3.5 mm'
  },
  'earwig': {
    scientificName: 'Forficula auricularia',
    biology: 'Pincer like cerci; nocturnal scavenger.',
    lifeCycle: 'Incomplete metamorphosis; nymphs resemble adults.',
    behavior: 'Hide in cracks by day; may pinch if handled.',
    size: 'Adults 12-25 mm'
  },
  'european-hornet': {
    scientificName: 'Vespa crabro',
    biology: 'Large brown and yellow hornet introduced from Europe.',
    lifeCycle: 'Annual colonies; nests in cavities and wall voids.',
    behavior: 'Nocturnal foraging; defensive near nests.',
    size: 'Adults 25-35 mm'
  },
  'flea': {
    scientificName: 'Ctenocephalides felis',
    biology: 'Laterally flattened wingless ectoparasite of pets.',
    lifeCycle: 'Egg to larva to pupa to adult; pupae persist for weeks.',
    behavior: 'Bite pets and people; focus on pet resting sites and carpets.',
    size: 'Adults 1.5-3.2 mm'
  },
  'flour-beetle': {
    scientificName: 'Tribolium spp. (red or confused flour beetle)',
    biology: 'Stored product pest of flour cereals and processed grains.',
    lifeCycle: 'Egg to larva to pupa to adult; weeks to months.',
    behavior: 'Often in old flour and cracks of bins and cabinets.',
    size: 'Adults 3-4 mm'
  },
  'funnel-spider': {
    scientificName: 'Agelenidae (grass spiders)',
    biology: 'Build sheet webs with funnel retreat; brown banded pattern.',
    lifeCycle: 'Egg sacs laid in fall; spiderlings emerge in spring.',
    behavior: 'Fast runners; often on lawns foundations and shrubs.',
    size: 'Body 6-15 mm'
  },
  'garden-spider': {
    scientificName: 'Argiope aurantia (yellow garden spider)',
    biology: 'Large black and yellow orb weaver with stabilimentum zigzag.',
    lifeCycle: 'One generation; egg sac overwinters.',
    behavior: 'Harmless; beneficial predator in gardens.',
    size: 'Females body 19-28 mm'
  },
  'german-cockroach': {
    scientificName: 'Blattella germanica',
    biology: 'Small tan roach with two dark stripes; most common indoors.',
    lifeCycle: 'Female carries ootheca; 20-40 nymphs; fast cycle.',
    behavior: 'Warm tight harborages near kitchens and baths; spread via items.',
    size: 'Adults 13-16 mm'
  },
  'grain-beetle': {
    scientificName: 'Oryzaephilus spp. (sawtoothed or merchant grain beetle)',
    biology: 'Flattened beetles that invade stored grains and processed foods.',
    lifeCycle: 'Rapid development in warm kitchens and pantries.',
    behavior: 'Often under loose package flaps and in seams.',
    size: 'Adults 2.5-3.5 mm'
  },
  'grass-spider': {
    scientificName: 'Agelenidae (grass spiders)',
    biology: 'Build sheet webs with funnel retreat; brown banded pattern.',
    lifeCycle: 'Egg sacs laid in fall; spiderlings emerge in spring.',
    behavior: 'Fast runners; often on lawns foundations and shrubs.',
    size: 'Body 6-15 mm'
  },
  'honey-bee': {
    scientificName: 'Apis mellifera',
    biology: 'Social bees; wax comb hives; critical pollinators.',
    lifeCycle: 'Perennial colonies; queen with thousands of workers; swarms in spring.',
    behavior: 'Generally docile but will defend hives; seek nectar and pollen.',
    size: 'Workers 10-15 mm'
  },
  'house-centipede': { scientificName: '', biology: '', lifeCycle: '', behavior: '', size: '' },
  'house-mouse': {
    scientificName: 'Mus musculus',
    biology: 'Small rodent; excellent climber; gnaw marks and droppings common.',
    lifeCycle: 'Gestation 19-21 days; many litters per year.',
    behavior: 'Nest in wall voids and insulation; follow edges.',
    size: 'Body 6-10 cm; tail similar'
  },
  'indian-meal-moth': {
    scientificName: 'Plodia interpunctella',
    biology: 'Two toned forewings; larvae leave silk webbing in foods.',
    lifeCycle: 'Egg to larva to pupa to adult; 1-2 months warm seasons.',
    behavior: 'Larvae wander from pantry to pupate on walls and ceilings.',
    size: 'Adults 8-10 mm body; wingspan 16-20 mm'
  },
  'japanese-beetle': {
    scientificName: 'Popillia japonica',
    biology: 'Metallic green and copper beetle; turf grubs feed on roots.',
    lifeCycle: 'Eggs in turf; white grubs develop in soil; adults emerge summer.',
    behavior: 'Adults skeletonize leaves on many ornamentals.',
    size: 'Adults about 10-12 mm'
  },
  'lady-bug': {
    scientificName: 'Coccinellidae (native lady beetles)',
    biology: 'Rounded beetles; predators of aphids and soft bodied insects.',
    lifeCycle: 'Egg to larva to pupa to adult; multiple generations in season.',
    behavior: 'Beneficial outdoors; may overwinter in homes in small numbers.',
    size: 'Adults 4-8 mm'
  },
  'leaf-cutter-bee': {
    scientificName: 'Megachile spp.',
    biology: 'Solitary bees that cut circular leaf pieces to build brood cells.',
    lifeCycle: 'One to several generations depending on climate.',
    behavior: 'Docile; leaf cutting is cosmetic to plants.',
    size: 'Adults 7-18 mm'
  },
  'longjawed-spider': {
    scientificName: 'Tetragnatha spp.',
    biology: 'Slender long-jawed orb weavers near vegetation and water.',
    lifeCycle: 'Seasonal; egg sacs on leaves and stems.',
    behavior: 'Harmless; capture small flying insects in horizontal webs.',
    size: 'Body 5-15 mm'
  },
  'mason-bee': {
    scientificName: 'Osmia spp.',
    biology: 'Solitary bees that nest in cavities using mud partitions.',
    lifeCycle: 'One generation; adults emerge in spring to pollinate early blooms.',
    behavior: 'Very docile; excellent native pollinators.',
    size: 'Adults 8-12 mm'
  },
  'millipede': { scientificName: '', biology: '', lifeCycle: '', behavior: '', size: '' },
  'mosquito': {
    scientificName: 'Culicidae',
    biology: 'Slender flies; only females blood feed; vectors of disease.',
    lifeCycle: 'Egg to larva to pupa to adult; aquatic immatures.',
    behavior: 'Dusk and dawn activity; standing water breeds larvae.',
    size: 'Adults 3-6 mm'
  },
  'mud-dauber': {
    scientificName: 'Sceliphron or Trypoxylon spp.',
    biology: 'Solitary wasps that build mud nests on structures.',
    lifeCycle: 'Each cell stocked with paralyzed spiders; one or more generations in warm seasons.',
    behavior: 'Non aggressive; remove old nests to discourage reuse.',
    size: 'Adults 18-25 mm'
  },
  'norway-rat': {
    scientificName: 'Rattus norvegicus',
    biology: 'Robust burrowing rat; blunt nose; small ears.',
    lifeCycle: 'Gestation 21-24 days; many litters per year.',
    behavior: 'Burrows under slabs and foundations; strong gnawers.',
    size: 'Body 18-24 cm; tail shorter'
  },
  'odorous-house-ant': {
    scientificName: 'Tapinoma sessile',
    biology: 'Rotten coconut odor when crushed; nest indoors or outdoors.',
    lifeCycle: 'Multiple queens; frequent relocations.',
    behavior: 'Strongly attracted to sweets; trails in kitchens and baths.',
    size: 'Workers 2.4-3.3 mm'
  },
  'oriental-cockroach': {
    scientificName: 'Blatta orientalis',
    biology: 'Shiny dark brown to black; sluggish; noticeable odor when numerous.',
    lifeCycle: 'About 16 nymphs per ootheca; 6-12 months development; adults about 6 months.',
    behavior: 'Damp cool areas like drains crawl spaces basements.',
    size: 'Adults 18-29 mm'
  },
  'paper-wasp': {
    scientificName: 'Polistes spp.',
    biology: 'Build open paper combs under eaves and structures.',
    lifeCycle: 'Egg to larva to pupa to adult; peak populations late summer.',
    behavior: 'Defensive near nests; forage proteins and sugars.',
    size: 'Adults 16-20 mm'
  },
  'pavement-ant': {
    scientificName: 'Tetramorium immigrans',
    biology: 'Nests under slabs and along sidewalks; soil volcanoes at cracks.',
    lifeCycle: 'Single queen typical; spring or early summer swarmers.',
    behavior: 'Forages for sweets and proteins; dense slow trails.',
    size: 'Workers 2.5-3.5 mm'
  },
  'pill-bug': {
    scientificName: 'Armadillidium vulgare',
    biology: 'Roly poly crustacean that rolls into a ball when disturbed.',
    lifeCycle: 'Females brood young in pouch; several months to mature.',
    behavior: 'Feed on decaying matter; wander indoors in damp weather.',
    size: 'Adults 8-15 mm'
  },
  'praying-mantis': { scientificName: '', biology: '', lifeCycle: '', behavior: '', size: '' },
  'rat': { scientificName: '', biology: '', lifeCycle: '', behavior: '', size: '' },
  'red-wasp': {
    scientificName: 'Polistes carolina or rubiginosus',
    biology: 'Reddish paper wasp common in the South and Midwest.',
    lifeCycle: 'Annual colonies; growth through summer.',
    behavior: 'Defensive near nests; attracted to sweet foods late season.',
    size: 'Adults 17-25 mm'
  },
  'roof-rat': {
    scientificName: 'Rattus rattus',
    biology: 'Slender rat; pointed nose; large ears; skilled climber.',
    lifeCycle: 'Gestation 21-24 days; multiple litters per year.',
    behavior: 'Nests in attics and vines; aerial runways along fences.',
    size: 'Body 16-20 cm; tail longer than body'
  },
  'sawtooth-beetle': {
    scientificName: 'Oryzaephilus surinamensis (sawtoothed grain beetle)',
    biology: 'Distinct saw-like projections on pronotum margins.',
    lifeCycle: 'Fast development in warm dry foods.',
    behavior: 'Common in cereals nuts and dried fruit.',
    size: 'Adults about 2.5-3 mm'
  },
  'silverfish': { scientificName: '', biology: '', lifeCycle: '', behavior: '', size: '' },
  'smoky-brown-cockroach': {
    scientificName: 'Periplaneta fuliginosa',
    biology: 'Uniform mahogany brown; strong flier; prefers humidity.',
    lifeCycle: 'Ootheca about 24 young; 10-12 months to adult.',
    behavior: 'Attracted to lights; attics tree holes gutters.',
    size: 'Adults 25-38 mm'
  },
  'springtail': {
    scientificName: 'Collembola',
    biology: 'Minute wingless hexapods with forked springing organ.',
    lifeCycle: 'Continuous reproduction in moist sites.',
    behavior: 'Congregate near drains pots and damp foundations.',
    size: 'Adults 1-3 mm'
  },
  'stink-bug': {
    scientificName: 'Halyomorpha halys (brown marmorated stink bug)',
    biology: 'Mottled brown shield shaped bug; emits odor when disturbed.',
    lifeCycle: 'Eggs on leaves; two generations in warm regions.',
    behavior: 'Feeds on fruits and ornamentals; overwintering invader.',
    size: 'Adults 12-17 mm'
  },
  'subterranean-termite': {
    scientificName: 'Reticulitermes flavipes',
    biology: 'Soil dwelling social insects that build mud tubes for moisture.',
    lifeCycle: 'Overlapping generations; colony persists for years.',
    behavior: 'Feed on cellulose; enter via soil cracks and utility penetrations.',
    size: 'Workers 3-4 mm; soldiers similar'
  },
  'sweat-bee': {
    scientificName: 'Halictidae',
    biology: 'Small metallic or dull bees attracted to perspiration.',
    lifeCycle: 'Varies by species; some social some solitary.',
    behavior: 'Generally docile; effective garden pollinators.',
    size: 'Adults 5-12 mm'
  },
  'termite-swarmer': {
    scientificName: 'Reticulitermes spp. alates',
    biology: 'Winged reproductive termites seen during seasonal swarms.',
    lifeCycle: 'Develop in mature colonies; swarm to start new colonies.',
    behavior: 'Often mistaken for flying ants; shed wings near windows.',
    size: 'Swarmers about 9-10 mm with wings'
  },
  'tick': {
    scientificName: 'Ixodidae (hard ticks)',
    biology: 'Blood feeding arachnids and disease vectors.',
    lifeCycle: 'Egg to larva to nymph to adult; blood meal at each stage.',
    behavior: 'Quest on vegetation and attach to passing hosts.',
    size: 'Larvae under 1 mm; engorged adults up to 12 mm'
  },
  'velvet-ant': {
    scientificName: 'Mutillidae (cow killer Dasymutilla occidentalis)',
    biology: 'Hairy wingless female wasp; very painful sting.',
    lifeCycle: 'Parasitoids of ground nesting bees and wasps.',
    behavior: 'Solitary; bright warning colors; avoid handling.',
    size: 'Adults 10-20 mm'
  },
  'walking-stick': {
    scientificName: 'Diapheromera femorata and relatives',
    biology: 'Stick like insects that feed on foliage.',
    lifeCycle: 'Eggs dropped to leaf litter; nymphs resemble adults.',
    behavior: 'Harmless; occasionally wander onto structures.',
    size: 'Adults 50-100+ mm'
  },
  'wolf-spider': {
    scientificName: 'Lycosidae',
    biology: 'Robust hairy hunters; carry egg sac; young ride mother.',
    lifeCycle: 'Egg to adult under 1 year; adults live 1-2 years.',
    behavior: 'Active hunters; garages and basements; do not build capture webs.',
    size: 'Body 10-35 mm'
  },
  'yellow-sac-spider': {
    scientificName: 'Cheiracanthium mildei or inclusum',
    biology: 'Pale yellow to tan spiders that build small silken sacs.',
    lifeCycle: 'Egg sacs under objects and in corners; several per year indoors.',
    behavior: 'Nocturnal wanderers; occasional defensive bite reports.',
    size: 'Body 5-10 mm'
  },
  'yellowjacket': { scientificName: '', biology: '', lifeCycle: '', behavior: '', size: '' },
};