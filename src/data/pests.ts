export type Pest = {
  slug: string;
  title: string;
  image: string;
  scientificName: string;
  appearance: string;
  habitat: string;
  diet: string;
  lifeCycle: string;
  behavior: string;
  signs?: string[];
  healthRisks?: string[];
  propertyRisks?: string[];
  prevention?: string[];
  callToAction: string;
};

export const pests: Pest[] = [



    {
    slug: "acrobatant",
    title: "Acrobat Ant",
    image: "/pests/acrobatant.jpg",
    scientificName: "Crematogaster spp.",
    appearance: "",
    habitat: "",
    diet: "Sugars (honeydew, sweets) and proteins/grease. Will trail to kitchens and pet food.",
    lifeCycle: "Complete metamorphosis: egg, larva, pupa, adult. Multiple queens possible; colonies can split (budding), which complicates control.",
    behavior: "Strong trailing along edges/pipes. Some species prefer high moisture; others dry/warm sites.",
    signs: [],
    healthRisks: [],
    propertyRisks: [],
    prevention: [],
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "argentineant",
    title: "Argentine Ant",
    image: "/pests/argentineant.jpg",
    scientificName: "Linepithema humile",
    appearance: "",
    habitat: "",
    diet: "",
    lifeCycle: "",
    behavior: "",
    signs: [],
    healthRisks: [],
    propertyRisks: [],
    prevention: [],
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  }
,
{
    slug: "asianbeetle",
    title: "Asian Beetle",
    image: "/pests/asianbeetle.jpg",
    scientificName: "Harmonia axyridis",
    appearance: "Lady beetle shape; Asian species can be orange with many spots; natives vary.",
    habitat: "Gardens, fields; in fall seek overwintering sites in structures.",
    diet: "Predatory on aphids/scale (beneficial).",
    lifeCycle: "Eggs on plants; larvae are active predators; adults overwinter.",
    behavior: "Asian lady beetles can mass on homes in fall and release an odor.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "assassinbug",
    title: "Assassin Bug",
    image: "/pests/assassinbug.jpg",
    scientificName: "Reduviidae (family)",
    appearance: "Elongate predators with curved beak (rostrum) for piercing prey; some brightly marked.",
    habitat: "Gardens, shrubs, and occasionally indoors when chasing prey.",
    diet: "Predatory on other insects (beneficial).",
    lifeCycle: "Eggs on vegetation; nymphs and adults are predatory.",
    behavior: "Can deliver a painful bite if mishandled.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "barnspider",
    title: "Barn Spider",
    image: "/pests/barnspider.jpg",
    scientificName: "Araneus cavaticus",
    appearance: "Medium to large spiders with rounded abdomens; intricate orb webs outdoors on eaves, shrubs, and corners.",
    habitat: "Outdoor structures, gardens, and around lights that attract prey.",
    diet: "Insect predators; beneficial outdoors.",
    lifeCycle: "Egg sacs in fall; spiderlings disperse in spring; one-year lifespan typical.",
    behavior: "Build visible orb webs; shy and non-aggressive.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "batbug",
    title: "Bat Bug",
    image: "/pests/batbug.jpg",
    scientificName: "Cimex adjunctus",
    appearance: "Looks like bed bugs but with longer body hairs; found near bat roosts (attics, chimneys).",
    habitat: "Associated with roosting bats; can wander into living spaces.",
    diet: "Primarily bat blood; will bite humans if bats are absent.",
    lifeCycle: "Similar to bed bugs: eggs to nymphs to adults with multiple molts.",
    behavior: "Hide near roosting sites; move into homes when bats are excluded.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "bedbug",
    title: "Bed Bug",
    image: "/pests/bedbug.jpg",
    scientificName: "Cimex lectularius",
    appearance: "Flattened, reddish-brown, wingless bugs ~1/4 inch; nymphs are pale and smaller.",
    habitat: "Mattresses, box springs, bed frames, baseboards, and upholstered furniture.",
    diet: "Obligate blood feeders on humans and warm-blooded animals at night.",
    lifeCycle: "Egg to nymph (5 instars) to adult; rapid reproduction at room temps.",
    behavior: "Hide in tight cracks; hitchhike on luggage and used furniture; nocturnal feeding.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "blackcricket",
    title: "Black Cricket",
    image: "/pests/blackcricket.jpg",
    scientificName: "Gryllus spp.",
    appearance: "Dark field crickets ~3/4 inch; long antennae.",
    habitat: "Yards, garages, basements; drawn to lights.",
    diet: "Scavengers on plant and animal matter.",
    lifeCycle: "Eggs in soil; nymphs mature through summer.",
    behavior: "Nocturnal chirping; indoor wanderers in late summer.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "blackwidow",
    title: "Black Widow",
    image: "/pests/blackwidow.jpg",
    scientificName: "Latrodectus spp.",
    appearance: "Shiny black spider with red hourglass on underside (widow group); females larger than males.",
    habitat: "Protected outdoor sites: meter boxes, sheds, under furniture; occasionally in garages/basements.",
    diet: "Predatory on insects caught in irregular webs.",
    lifeCycle: "Egg sacs guarded by females; seasonal peaks in warm months.",
    behavior: "Shy but will defend egg sacs; rarely aggressive.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "bluemuddauber",
    title: "Blue Mud Dauber",
    image: "/pests/bluemuddauber.jpg",
    scientificName: "Chalybion californicum",
    appearance: "Slim, long-waisted wasps (mud daubers/digger wasps); often metallic blue or black/yellow.",
    habitat: "Mud tubes on walls/eaves (mud daubers) or burrows in soil (digger wasps).",
    diet: "Provision nests with spiders or insects for larvae; adults nectar.",
    lifeCycle: "Solitary: each female builds and provisions her own nest.",
    behavior: "Non-aggressive unless handled; beneficial predators.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "boxelderbug",
    title: "Boxelder Bug",
    image: "/pests/boxelderbug.jpg",
    scientificName: "Boisea trivittata",
    appearance: "Elongate shield/seed bugs with distinctive markings; adults ~1/2 inch or larger.",
    habitat: "Ornamental trees and gardens; overwinter inside wall voids and attics.",
    diet: "Plant juices from host trees (boxelder, maples) or crops (stink bugs).",
    lifeCycle: "Eggs on host plants; nymphs develop through summer; adults seek winter shelter.",
    behavior: "Mass fall invasions into structures seeking warmth.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "brownbandedcockroach",
    title: "Brown Banded Cockroach",
    image: "/pests/brownbandedcockroach.jpg",
    scientificName: "Supella longipalpa",
    appearance: "Flattened insects with long antennae; size and color vary by species. Ootheca (egg case) common in indoor species.",
    habitat: "Warm, humid areas; kitchens, bathrooms, basements; also around drains, appliances, and utility chases.",
    diet: "Omnivorous: crumbs, grease, garbage, pet food, even soaps and glues.",
    lifeCycle: "Egg case to nymph to adult; rapid reproduction allows explosive growth under favorable conditions.",
    behavior: "Nocturnal; hide in cracks/crevices; hitchhike via boxes/appliances; spread through plumbing/electrical chases.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "bumblebee",
    title: "Bumble Bee",
    image: "/pests/bumblebee.jpg",
    scientificName: "Bombus spp.",
    appearance: "Small to medium bees; metallic or fuzzy depending on genus. Pollen-carrying hairs visible on legs/abdomen.",
    habitat: "Nesting in soil banks, hollow stems, or preexisting cavities; abundant in gardens and natural areas.",
    diet: "Adults feed on nectar; larvae provisioned with pollen/nectar.",
    lifeCycle: "Solitary species; females create individual nests; seasonal flights spring–summer.",
    behavior: "Non-aggressive when not handled; excellent pollinators.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "carpenterbee",
    title: "Carpenter Bee",
    image: "/pests/carpenterbee.jpg",
    scientificName: "Xylocopa virginica",
    appearance: "Large, bumblebee-like; shiny black abdomen (not fuzzy). Males hover near eaves in spring.",
    habitat: "Tunnels in soft or unpainted wood: eaves, fascia, decks, pergolas.",
    diet: "Adults nectar; larvae fed pollen/nectar stored in galleries.",
    lifeCycle: "Females bore round entry holes then linear galleries; repeat use can expand damage.",
    behavior: "Males may ‘dive-bomb’ but don’t sting; females sting if handled.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "cavecricket",
    title: "Cave Cricket",
    image: "/pests/cavecricket.jpg",
    scientificName: "Rhaphidophoridae (family)",
    appearance: "Long-legged, hump-backed, wingless; tan to brown.",
    habitat: "Cool, damp places: crawlspaces, basements, under decks.",
    diet: "Organic debris, fungi, and occasional fabrics.",
    lifeCycle: "Eggs in soil; slow development in cool sites.",
    behavior: "Leap when disturbed; attracted to moisture/darkness.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "cellarspider",
    title: "Cellar Spider",
    image: "/pests/cellarspider.jpg",
    scientificName: "Pholcus phalangioides",
    appearance: "Varied; common house spiders include slender, long-legged types (cellar, hobo) and compact jumpers with large front eyes.",
    habitat: "Basements, garages, window frames, and ceilings; also outdoor entry points.",
    diet: "Predatory on insects; many are beneficial.",
    lifeCycle: "Egg sacs with multiple spiderlings; several molts to maturity.",
    behavior: "Shy; jumpers actively hunt by day; others use simple webs.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "clovermite",
    title: "Clover Mite",
    image: "/pests/clovermite.jpg",
    scientificName: "Bryobia praetiosa",
    appearance: "Tiny reddish mites (~1/30 inch); crush into red smear.",
    habitat: "Lawns and foundation plantings; invade structures in spring.",
    diet: "Feed on clover and grasses (plant sap).",
    lifeCycle: "Multiple generations in warm seasons.",
    behavior: "Mass invade sunny walls and windowsills.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "daddylonglegs",
    title: "Daddy Longlegs",
    image: "/pests/daddylonglegs.jpg",
    scientificName: "Opiliones (order)",
    appearance: "",
    habitat: "",
    diet: "",
    lifeCycle: "",
    behavior: "",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "diggerwasp",
    title: "Digger Wasp",
    image: "/pests/diggerwasp.jpg",
    scientificName: "Sphex ichneumoneus",
    appearance: "Slim, long-waisted wasps (mud daubers/digger wasps); often metallic blue or black/yellow.",
    habitat: "Mud tubes on walls/eaves (mud daubers) or burrows in soil (digger wasps).",
    diet: "Provision nests with spiders or insects for larvae; adults nectar.",
    lifeCycle: "Solitary: each female builds and provisions her own nest.",
    behavior: "Non-aggressive unless handled; beneficial predators.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "drugstorebeetle",
    title: "Drugstore Beetle",
    image: "/pests/drugstorebeetle.jpg",
    scientificName: "Stegobium paniceum",
    appearance: "Small brown beetles (1/8 inch) associated with dry stored goods (flour, cereals, spices, pet food).",
    habitat: "Pantries, kitchens, garages; inside packaging and cracks of shelving.",
    diet: "Dry grains, flour, spices, seeds, and dried plant/animal products.",
    lifeCycle: "Eggs laid in or near food; larvae are main feeding stage; continuous generations indoors.",
    behavior: "Spread between products; adults often found near lights.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "europeanhornet",
    title: "European Hornet",
    image: "/pests/europeanhornet.jpg",
    scientificName: "Vespa crabro",
    appearance: "Large social wasps; brown with yellow markings (European hornet); fly at night toward lights.",
    habitat: "Tree cavities, wall voids, and structural voids; paper nests enclosed in a shell.",
    diet: "Adults feed on tree sap and nectar; larvae fed chewed insects.",
    lifeCycle: "Annual colonies; late-summer worker populations highest.",
    behavior: "Can be defensive; activity may increase at night around lights.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "flourbeetle",
    title: "Flour Beetle",
    image: "/pests/flourbeetle.jpg",
    scientificName: "Tribolium spp.",
    appearance: "Small brown beetles (1/8 inch) associated with dry stored goods (flour, cereals, spices, pet food).",
    habitat: "Pantries, kitchens, garages; inside packaging and cracks of shelving.",
    diet: "Dry grains, flour, spices, seeds, and dried plant/animal products.",
    lifeCycle: "Eggs laid in or near food; larvae are main feeding stage; continuous generations indoors.",
    behavior: "Spread between products; adults often found near lights.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "funnelspider",
    title: "Funnel Spider",
    image: "/pests/funnelspider.jpg",
    scientificName: "Agelenidae (family)",
    appearance: "Brown/gray, long-legged spiders with spinnerets visible; create sheet webs with a funnel retreat.",
    habitat: "Found in grass, shrubs, basements, and garages.",
    diet: "Predatory on insects; generally beneficial.",
    lifeCycle: "Seasonal peaks in late summer/fall; egg sacs guarded by females.",
    behavior: "Fast runners; retreat into funnel when disturbed.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "gardenspider",
    title: "Garden Spider",
    image: "/pests/gardenspider.jpg",
    scientificName: "Argiope aurantia",
    appearance: "Medium to large spiders with rounded abdomens; intricate orb webs outdoors on eaves, shrubs, and corners.",
    habitat: "Outdoor structures, gardens, and around lights that attract prey.",
    diet: "Insect predators; beneficial outdoors.",
    lifeCycle: "Egg sacs in fall; spiderlings disperse in spring; one-year lifespan typical.",
    behavior: "Build visible orb webs; shy and non-aggressive.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "germancockroach",
    title: "German Cockroach",
    image: "/pests/germancockroach.jpg",
    scientificName: "Blattella germanica",
    appearance: "Flattened insects with long antennae; size and color vary by species. Ootheca (egg case) common in indoor species.",
    habitat: "Warm, humid areas; kitchens, bathrooms, basements; also around drains, appliances, and utility chases.",
    diet: "Omnivorous: crumbs, grease, garbage, pet food, even soaps and glues.",
    lifeCycle: "Egg case to nymph to adult; rapid reproduction allows explosive growth under favorable conditions.",
    behavior: "Nocturnal; hide in cracks/crevices; hitchhike via boxes/appliances; spread through plumbing/electrical chases.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "grainbeetle",
    title: "Grain Beetle",
    image: "/pests/grainbeetle.jpg",
    scientificName: "Oryzaephilus mercator",
    appearance: "Small brown beetles (1/8 inch) associated with dry stored goods (flour, cereals, spices, pet food).",
    habitat: "Pantries, kitchens, garages; inside packaging and cracks of shelving.",
    diet: "Dry grains, flour, spices, seeds, and dried plant/animal products.",
    lifeCycle: "Eggs laid in or near food; larvae are main feeding stage; continuous generations indoors.",
    behavior: "Spread between products; adults often found near lights.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "grassspider",
    title: "Grass Spider",
    image: "/pests/grassspider.jpg",
    scientificName: "Agelenopsis spp.",
    appearance: "Brown/gray, long-legged spiders with spinnerets visible; create sheet webs with a funnel retreat.",
    habitat: "Found in grass, shrubs, basements, and garages.",
    diet: "Predatory on insects; generally beneficial.",
    lifeCycle: "Seasonal peaks in late summer/fall; egg sacs guarded by females.",
    behavior: "Fast runners; retreat into funnel when disturbed.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "hobospider",
    title: "Hobo Spider",
    image: "/pests/hobospider.jpg",
    scientificName: "Eratigena agrestis",
    appearance: "Varied; common house spiders include slender, long-legged types (cellar, hobo) and compact jumpers with large front eyes.",
    habitat: "Basements, garages, window frames, and ceilings; also outdoor entry points.",
    diet: "Predatory on insects; many are beneficial.",
    lifeCycle: "Egg sacs with multiple spiderlings; several molts to maturity.",
    behavior: "Shy; jumpers actively hunt by day; others use simple webs.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "honeybee",
    title: "Honey Bee",
    image: "/pests/honeybee.jpg",
    scientificName: "Apis mellifera",
    appearance: "Small to medium bees; metallic or fuzzy depending on genus. Pollen-carrying hairs visible on legs/abdomen.",
    habitat: "Nesting in soil banks, hollow stems, or preexisting cavities; abundant in gardens and natural areas.",
    diet: "Adults feed on nectar; larvae provisioned with pollen/nectar.",
    lifeCycle: "Solitary species; females create individual nests; seasonal flights spring–summer.",
    behavior: "Non-aggressive when not handled; excellent pollinators.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "jumpingspider",
    title: "Jumping Spider",
    image: "/pests/jumpingspider.jpg",
    scientificName: "Salticidae (family)",
    appearance: "Varied; common house spiders include slender, long-legged types (cellar, hobo) and compact jumpers with large front eyes.",
    habitat: "Basements, garages, window frames, and ceilings; also outdoor entry points.",
    diet: "Predatory on insects; many are beneficial.",
    lifeCycle: "Egg sacs with multiple spiderlings; several molts to maturity.",
    behavior: "Shy; jumpers actively hunt by day; others use simple webs.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "indianmealmoth",
    title: "Indian Meal Moth",
    image: "/pests/indianmealmoth.jpg",
    scientificName: "Plodia interpunctella",
    appearance: "Small moth with two-tone forewings (tan + coppery); 1/2-inch wingspan.",
    habitat: "Pantries, kitchens; larvae spin silk webbing in food products.",
    diet: "Larvae feed on grains, nuts, dried fruit, chocolate, and pet food.",
    lifeCycle: "Eggs laid on food; larvae web tunnels; pupate in cracks; multiple generations per year indoors.",
    behavior: "Adults flutter at dusk; larvae leave trails/webbing in products.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "housecentipede",
    title: "House Centipede",
    image: "/pests/housecentipede.jpg",
    scientificName: "Scutigera coleoptrata",
    appearance: "Flattened, fast-moving arthropod with many long legs (house centipede up to 1–1.5 inches).",
    habitat: "Damp basements, bathrooms; also under rocks/leaves outdoors.",
    diet: "Predators on other insects and spiders.",
    lifeCycle: "Long-lived; develop by adding leg pairs with molts.",
    behavior: "Nocturnal, rapid runners; startle when seen indoors.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "ladybug",
    title: "Lady Bug",
    image: "/pests/ladybug.jpg",
    scientificName: "Coccinellidae (family)",
    appearance: "Lady beetle shape; Asian species can be orange with many spots; natives vary.",
    habitat: "Gardens, fields; in fall seek overwintering sites in structures.",
    diet: "Predatory on aphids/scale (beneficial).",
    lifeCycle: "Eggs on plants; larvae are active predators; adults overwinter.",
    behavior: "Asian lady beetles can mass on homes in fall and release an odor.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "japanesebeetle",
    title: "Japanese Beetle",
    image: "/pests/japanesebeetle.jpg",
    scientificName: "Popillia japonica",
    appearance: "Metallic-green beetles with copper elytra; adults ~1/2 inch.",
    habitat: "Feeds on roses, lindens, grapes, and turf; grubs develop in soil.",
    diet: "Adults skeletonize leaves/flowers; larvae feed on turf roots.",
    lifeCycle: "One-year cycle: adults summer; larvae (grubs) in soil fall–spring.",
    behavior: "Group feeding on sunny plants; flight to lights.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "leafcutterbee",
    title: "Leaf Cutter Bee",
    image: "/pests/leafcutterbee.jpg",
    scientificName: "Megachile spp.",
    appearance: "Small to medium bees; metallic or fuzzy depending on genus. Pollen-carrying hairs visible on legs/abdomen.",
    habitat: "Nesting in soil banks, hollow stems, or preexisting cavities; abundant in gardens and natural areas.",
    diet: "Adults feed on nectar; larvae provisioned with pollen/nectar.",
    lifeCycle: "Solitary species; females create individual nests; seasonal flights spring–summer.",
    behavior: "Non-aggressive when not handled; excellent pollinators.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "muddauber",
    title: "Mud Dauber",
    image: "/pests/muddauber.jpg",
    scientificName: "Sceliphron caementarium",
    appearance: "Slim, long-waisted wasps (mud daubers/digger wasps); often metallic blue or black/yellow.",
    habitat: "Mud tubes on walls/eaves (mud daubers) or burrows in soil (digger wasps).",
    diet: "Provision nests with spiders or insects for larvae; adults nectar.",
    lifeCycle: "Solitary: each female builds and provisions her own nest.",
    behavior: "Non-aggressive unless handled; beneficial predators.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "longjawedspider",
    title: "Long Jawed Spider",
    image: "/pests/longjawedspider.jpg",
    scientificName: "Tetragnatha spp.",
    appearance: "Medium to large spiders with rounded abdomens; intricate orb webs outdoors on eaves, shrubs, and corners.",
    habitat: "Outdoor structures, gardens, and around lights that attract prey.",
    diet: "Insect predators; beneficial outdoors.",
    lifeCycle: "Egg sacs in fall; spiderlings disperse in spring; one-year lifespan typical.",
    behavior: "Build visible orb webs; shy and non-aggressive.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "masonbee",
    title: "Mason Bee",
    image: "/pests/masonbee.jpg",
    scientificName: "Osmia spp.",
    appearance: "Small to medium bees; metallic or fuzzy depending on genus. Pollen-carrying hairs visible on legs/abdomen.",
    habitat: "Nesting in soil banks, hollow stems, or preexisting cavities; abundant in gardens and natural areas.",
    diet: "Adults feed on nectar; larvae provisioned with pollen/nectar.",
    lifeCycle: "Solitary species; females create individual nests; seasonal flights spring–summer.",
    behavior: "Non-aggressive when not handled; excellent pollinators.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "odoroushouseant",
    title: "Odorous House Ant",
    image: "/pests/odoroushouseant.jpg",
    scientificName: "Tapinoma sessile",
    appearance: "Small to medium ants; color varies by species. Workers typically 1/8–1/4 inch with elbowed antennae and segmented waist.",
    habitat: "Nests in soil, mulch, under stones, landscape timbers, inside wall voids, or under slabs. Indoors seek moisture and food.",
    diet: "Sugars (honeydew, sweets) and proteins/grease. Will trail to kitchens and pet food.",
    lifeCycle: "Complete metamorphosis: egg, larva, pupa, adult. Multiple queens possible; colonies can split (budding) which complicates control.",
    behavior: "Strong trailing behavior along edges/pipes. Some species prefer high moisture, others dry/warm sites.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "orientalcockroach",
    title: "Oriental Cockroach",
    image: "/pests/orientalcockroach.jpg",
    scientificName: "Blatta orientalis",
    appearance: "Flattened insects with long antennae; size and color vary by species. Ootheca (egg case) common in indoor species.",
    habitat: "Warm, humid areas; kitchens, bathrooms, basements; also around drains, appliances, and utility chases.",
    diet: "Omnivorous: crumbs, grease, garbage, pet food, even soaps and glues.",
    lifeCycle: "Egg case to nymph to adult; rapid reproduction allows explosive growth under favorable conditions.",
    behavior: "Nocturnal; hide in cracks/crevices; hitchhike via boxes/appliances; spread through plumbing/electrical chases.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "paperwasp",
    title: "Paper Wasp",
    image: "/pests/paperwasp.jpg",
    scientificName: "Polistes spp.",
    appearance: "Slender wasps with dangling legs in flight; paper comb nests under eaves and in sheltered voids.",
    habitat: "Exterior eaves, playsets, vents; sometimes inside attics when entry exists.",
    diet: "Adults nectar; larvae fed chewed insects (caterpillars, flies).",
    lifeCycle: "Annual colonies; queens overwinter and start new nests each spring.",
    behavior: "Defensive near nests; otherwise uninterested in people.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "prayingmantis",
    title: "Praying Mantis",
    image: "/pests/prayingmantis.jpg",
    scientificName: "Tenodera sinensis",
    appearance: "Large elongate insect with raptorial forelegs; green/brown.",
    habitat: "Gardens and shrubs; ambush predator.",
    diet: "Predatory on many insects, including beneficials.",
    lifeCycle: "Egg cases (oothecae) overwinter; nymphs emerge in spring.",
    behavior: "Solitary; will grasp if handled.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "redwasp",
    title: "Red Wasp",
    image: "/pests/redwasp.jpg",
    scientificName: "Polistes carolina",
    appearance: "Slender wasps with dangling legs in flight; paper comb nests under eaves and in sheltered voids.",
    habitat: "Exterior eaves, playsets, vents; sometimes inside attics when entry exists.",
    diet: "Adults nectar; larvae fed chewed insects (caterpillars, flies).",
    lifeCycle: "Annual colonies; queens overwinter and start new nests each spring.",
    behavior: "Defensive near nests; otherwise uninterested in people.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "sawtoothbeetle",
    title: "Sawtooth Beetle",
    image: "/pests/sawtoothbeetle.jpg",
    scientificName: "Oryzaephilus surinamensis",
    appearance: "Small brown beetles (1/8 inch) associated with dry stored goods (flour, cereals, spices, pet food).",
    habitat: "Pantries, kitchens, garages; inside packaging and cracks of shelving.",
    diet: "Dry grains, flour, spices, seeds, and dried plant/animal products.",
    lifeCycle: "Eggs laid in or near food; larvae are main feeding stage; continuous generations indoors.",
    behavior: "Spread between products; adults often found near lights.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "smokeybrowncockroach",
    title: "Smokey Brown Cockroach",
    image: "/pests/smokeybrowncockroach.jpg",
    scientificName: "Periplaneta fuliginosa",
    appearance: "Flattened insects with long antennae; size and color vary by species. Ootheca (egg case) common in indoor species.",
    habitat: "Warm, humid areas; kitchens, bathrooms, basements; also around drains, appliances, and utility chases.",
    diet: "Omnivorous: crumbs, grease, garbage, pet food, even soaps and glues.",
    lifeCycle: "Egg case to nymph to adult; rapid reproduction allows explosive growth under favorable conditions.",
    behavior: "Nocturnal; hide in cracks/crevices; hitchhike via boxes/appliances; spread through plumbing/electrical chases.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "stinkbug",
    title: "Stink Bug",
    image: "/pests/stinkbug.jpg",
    scientificName: "Halyomorpha halys",
    appearance: "Elongate shield/seed bugs with distinctive markings; adults ~1/2 inch or larger.",
    habitat: "Ornamental trees and gardens; overwinter inside wall voids and attics.",
    diet: "Plant juices from host trees (boxelder, maples) or crops (stink bugs).",
    lifeCycle: "Eggs on host plants; nymphs develop through summer; adults seek winter shelter.",
    behavior: "Mass fall invasions into structures seeking warmth.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "subterraneantermite",
    title: "Subterranean Termite",
    image: "/pests/subterraneantermite.jpg",
    scientificName: "Reticulitermes flavipes",
    appearance: "Soft-bodied, pale insects; workers ~1/8 inch, soldiers with enlarged heads/jaws; winged swarmers dark with equal-length wings.",
    habitat: "Colonies in soil; travel in mud tubes to feed on wood/cellulose in foundations, sill plates, and structural timbers.",
    diet: "Cellulose from wood, paper, cardboard, and some plant materials.",
    lifeCycle: "Egg to nymph to caste (worker/soldier/reproductive). Colonies persist for years; swarming in spring or after rains.",
    behavior: "Hidden feeders; construct mud tubes; moisture strongly attracts activity.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "sweatbee",
    title: "Sweat Bee",
    image: "/pests/sweatbee.jpg",
    scientificName: "Halictidae (family)",
    appearance: "Small to medium bees; metallic or fuzzy depending on genus. Pollen-carrying hairs visible on legs/abdomen.",
    habitat: "Nesting in soil banks, hollow stems, or preexisting cavities; abundant in gardens and natural areas.",
    diet: "Adults feed on nectar; larvae provisioned with pollen/nectar.",
    lifeCycle: "Solitary species; females create individual nests; seasonal flights spring–summer.",
    behavior: "Non-aggressive when not handled; excellent pollinators.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "walkingstick",
    title: "Walking Stick",
    image: "/pests/walkingstick.jpg",
    scientificName: "Diapheromera femorata",
    appearance: "Stick-like body up to several inches; excellent camouflage.",
    habitat: "Deciduous trees/shrubs; occasionally wander indoors.",
    diet: "Feed on leaves of oaks and other trees.",
    lifeCycle: "Eggs dropped to ground; nymphs resemble adults.",
    behavior: "Slow-moving; rely on camouflage.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "wolfspider",
    title: "Wolf Spider",
    image: "/pests/wolfspider.jpg",
    scientificName: "Lycosidae (family)",
    appearance: "Varied; common house spiders include slender, long-legged types (cellar, hobo) and compact jumpers with large front eyes.",
    habitat: "Basements, garages, window frames, and ceilings; also outdoor entry points.",
    diet: "Predatory on insects; many are beneficial.",
    lifeCycle: "Egg sacs with multiple spiderlings; several molts to maturity.",
    behavior: "Shy; jumpers actively hunt by day; others use simple webs.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  },
{
    slug: "yellowsacspider",
    title: "Yellow Sac Spider",
    image: "/pests/yellowsacspider.jpg",
    scientificName: "Cheiracanthium spp.",
    appearance: "Small pale/yellowish spider; builds silk sacs and may wander indoors, especially in late summer/fall.",
    habitat: "Eaves, soffits, gardens; interior corners and ceilings.",
    diet: "Predatory on small insects.",
    lifeCycle: "Multiple generations per season in warm climates.",
    behavior: "Active hunters; sometimes associated with minor bites.",
    callToAction: "DIY products rarely resolve the root cause. All Star Pest Solutions uses certified, eco-smart treatments and an IPM approach. Schedule a free inspection."
  }



];




























