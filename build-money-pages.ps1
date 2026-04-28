$ErrorActionPreference = "Stop"

Write-Host "Building All Star money pages..." -ForegroundColor Green

New-Item -ItemType Directory -Force -Path "src\app\termite-inspection-kansas-city" | Out-Null
New-Item -ItemType Directory -Force -Path "src\app\ants-in-walls-kansas-city" | Out-Null
New-Item -ItemType Directory -Force -Path "src\app\spider-control-kansas-city" | Out-Null
New-Item -ItemType Directory -Force -Path "src\app\rodent-control-kansas-city" | Out-Null
New-Item -ItemType Directory -Force -Path "src\app\cockroach-control-kansas-city" | Out-Null
New-Item -ItemType Directory -Force -Path "src\app\mosquito-control-kansas-city" | Out-Null

$pageTemplate = @'
import Link from "next/link";

export const metadata = {
  title: "__TITLE__ | All Star Pest Solutions",
  description: "__DESCRIPTION__",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white pb-24">
      <section className="bg-blue-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-red-200">
            Kansas City Pest Control
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            __H1__
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50 md:text-xl">
            __INTRO__
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="tel:9137387827" className="rounded-2xl bg-red-600 px-7 py-4 text-center text-lg font-black text-white shadow-lg hover:bg-red-700">
              Call 913-738-STAR
            </a>
            <a href="sms:9137387827" className="rounded-2xl bg-white px-7 py-4 text-center text-lg font-black text-blue-950 shadow-lg hover:bg-slate-100">
              Text a Photo
            </a>
          </div>
        </div>
      </section>

      <section className="bg-yellow-300 px-6 py-5 text-center">
        <p className="text-lg font-black uppercase tracking-wide text-blue-950">
          __URGENCY__
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-black text-slate-950">
              __SECTION_TITLE__
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              __BODY_ONE__
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              __BODY_TWO__
            </p>
          </div>

          <div className="rounded-3xl border border-red-200 bg-red-50 p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">
              Signs you may need help
            </h2>

            <ul className="mt-5 space-y-3 text-slate-700">
              __SIGNS__
            </ul>

            <a href="tel:9137387827" className="mt-6 block rounded-2xl bg-red-600 px-6 py-4 text-center text-lg font-black text-white hover:bg-red-700">
              Call Now
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-slate-950 p-7 text-white shadow-xl md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-8">
          <div>
            <h2 className="text-3xl font-black">
              Want a straight answer?
            </h2>
            <p className="mt-3 text-lg leading-8 text-slate-200">
              Text a clear photo or call All Star Pest Solutions. No mandatory contracts. Local, owner-operated service.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 md:mt-0">
            <a href="sms:9137387827" className="rounded-2xl bg-white px-7 py-4 text-center text-lg font-black text-slate-950 hover:bg-slate-100">
              Text a Photo
            </a>
            <a href="tel:9137387827" className="rounded-2xl bg-red-600 px-7 py-4 text-center text-lg font-black text-white hover:bg-red-700">
              Call 913-738-STAR
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/pest-library" className="font-black text-red-700 hover:underline">Pest Library</Link>
          <Link href="/charts" className="font-black text-red-700 hover:underline">Free Pest Charts</Link>
          <Link href="/contact" className="font-black text-red-700 hover:underline">Contact All Star</Link>
        </div>
      </section>
    </main>
  );
}
'@

function Write-MoneyPage {
  param(
    [string]$Path,
    [string]$Title,
    [string]$Description,
    [string]$H1,
    [string]$Intro,
    [string]$Urgency,
    [string]$SectionTitle,
    [string]$BodyOne,
    [string]$BodyTwo,
    [string[]]$Signs
  )

  $signMarkup = ($Signs | ForEach-Object { "              <li>✓ $()</li>" }) -join "
"

  $content = $pageTemplate
  $content = $content.Replace("__TITLE__", $Title)
  $content = $content.Replace("__DESCRIPTION__", $Description)
  $content = $content.Replace("__H1__", $H1)
  $content = $content.Replace("__INTRO__", $Intro)
  $content = $content.Replace("__URGENCY__", $Urgency)
  $content = $content.Replace("__SECTION_TITLE__", $SectionTitle)
  $content = $content.Replace("__BODY_ONE__", $BodyOne)
  $content = $content.Replace("__BODY_TWO__", $BodyTwo)
  $content = $content.Replace("__SIGNS__", $signMarkup)

  Set-Content -LiteralPath $Path -Value $content -Encoding UTF8
}

Write-MoneyPage 
  -Path "src\app\termite-inspection-kansas-city\page.tsx" 
  -Title "Termite Inspection Kansas City" 
  -Description "Kansas City termite inspections for homeowners, real estate transactions, VA loans, FHA loans, termite swarmers, and hidden termite concerns." 
  -H1 "Termite Inspection in Kansas City" 
  -Intro "Termites are a hidden danger. If you are buying, selling, seeing swarmers, or noticing moisture issues, All Star Pest Solutions can inspect the property and give you a straight answer." 
  -Urgency "Termites can stay hidden until the damage is already serious." 
  -SectionTitle "Do not guess with termites." 
  -BodyOne "A termite inspection is not just a quick look around. We check visible signs, moisture conditions, conducive areas, foundation concerns, crawlspace areas when accessible, and locations where termites commonly show up." 
  -BodyTwo "This page is built for homeowners, buyers, sellers, real estate agents, and VA or FHA related termite inspection needs in the Kansas City area." 
  -Signs @("Termite swarmers near windows or lights", "Mud tubes on foundation or crawlspace areas", "Soft or damaged wood", "Discarded wings", "Moisture issues or ants inside walls")

Write-MoneyPage 
  -Path "src\app\ants-in-walls-kansas-city\page.tsx" 
  -Title "Ants in Walls Kansas City" 
  -Description "Seeing ants inside walls in Kansas City? Carpenter ants and acrobat ants can point to moisture problems and possible termite concerns." 
  -H1 "Ants in Walls in Kansas City" 
  -Intro "Ants coming from walls, outlets, trim, or plumbing areas usually mean there is a reason. Moisture-loving ants can also be a warning sign that the area should be checked for termites." 
  -Urgency "Ants in walls can point to moisture problems — and termites love moisture too." 
  -SectionTitle "Wall ants are not random." 
  -BodyOne "Carpenter ants and acrobat ants are often connected to moisture-damaged wood, voids, gaps, and hidden nesting areas. Spraying the surface may not solve the real issue." 
  -BodyTwo "All Star Pest Solutions looks at the pest activity, moisture conditions, entry points, and whether a termite inspection makes sense." 
  -Signs @("Ants coming from outlets or trim", "Activity near bathrooms, kitchens, or windows", "Carpenter ants or acrobat ants indoors", "Recurring ants after store sprays", "Moisture, soft wood, or wall void concerns")

Write-MoneyPage 
  -Path "src\app\spider-control-kansas-city\page.tsx" 
  -Title "Spider Control Kansas City" 
  -Description "Kansas City spider control for basements, garages, exterior webs, brown recluse concerns, and recurring spider activity." 
  -H1 "Spider Control in Kansas City" 
  -Intro "Spiders usually show up because there are insects, clutter, gaps, lighting, or undisturbed areas giving them a place to live." 
  -Urgency "Heavy spider activity usually means another pest issue is feeding the problem." 
  -SectionTitle "Stop the spiders by treating the source." 
  -BodyOne "A good spider service is more than knocking down webs. We focus on reducing insect pressure, treating harborage areas, and addressing entry points around the home." 
  -BodyTwo "Basements, garages, storage areas, exterior lights, windows, and foundation areas are common spider pressure points." 
  -Signs @("Webs around windows, doors, or lights", "Spiders in basements or garages", "Brown recluse concerns", "Recurring activity after cleaning", "Heavy insect activity around the home")

Write-MoneyPage 
  -Path "src\app\rodent-control-kansas-city\page.tsx" 
  -Title "Rodent Control Kansas City" 
  -Description "Kansas City rodent control for mice, rats, scratching sounds, droppings, garage entry points, and property damage concerns." 
  -H1 "Rodent Control in Kansas City" 
  -Intro "Mice and rats can contaminate areas, chew wires, damage insulation, and keep coming back if entry points are not addressed." 
  -Urgency "Rodents do not fix themselves — they usually multiply." 
  -SectionTitle "Find how they are getting in." 
  -BodyOne "Rodent control starts with inspection. We look for droppings, travel paths, entry gaps, garage door issues, utility penetrations, and signs of nesting." 
  -BodyTwo "The goal is to control the activity and help reduce the chance of the problem returning." 
  -Signs @("Droppings in cabinets, garages, or basements", "Scratching in walls or ceilings", "Chewed packaging or wires", "Gaps around garage doors or pipes", "Pet food or pantry damage")

Write-MoneyPage 
  -Path "src\app\cockroach-control-kansas-city\page.tsx" 
  -Title "Cockroach Control Kansas City" 
  -Description "Kansas City cockroach control for German roaches, kitchen infestations, cleanouts, apartments, homes, and recurring roach problems." 
  -H1 "Cockroach Control in Kansas City" 
  -Intro "Cockroaches require a structured plan. German roaches especially are not solved with random sprays." 
  -Urgency "Roaches multiply fast — waiting makes the job harder." 
  -SectionTitle "Roach cleanouts need a real plan." 
  -BodyOne "We focus on inspection, treatment placement, baiting, growth regulation, crack and crevice areas, appliances, kitchens, bathrooms, and follow-up strategy based on severity." 
  -BodyTwo "The earlier the infestation is addressed, the easier it is to get under control." 
  -Signs @("Roaches in kitchens or bathrooms", "Activity around appliances", "Small droppings in cabinets", "Sightings at night", "Recurring roaches after sprays")

Write-MoneyPage 
  -Path "src\app\mosquito-control-kansas-city\page.tsx" 
  -Title "Mosquito Control Kansas City" 
  -Description "Kansas City mosquito control for yards, patios, standing water, shade, outdoor events, and seasonal mosquito pressure." 
  -H1 "Mosquito Control in Kansas City" 
  -Intro "Mosquitoes are driven by shade, moisture, standing water, landscaping, gutters, and resting areas around the property." 
  -Urgency "Standing water and shade can keep mosquito pressure high all season." 
  -SectionTitle "Take back your yard." 
  -BodyOne "Mosquito service focuses on reducing activity around the areas where mosquitoes rest and breed. We also help identify conditions that keep them coming back." 
  -BodyTwo "Seasonal service is usually the best option when you want consistent reduction around patios, decks, yards, and outdoor living spaces." 
  -Signs @("Mosquitoes around patios or decks", "Bites during outdoor activity", "Standing water after rain", "Heavy shade and landscaping", "Gutters, containers, or low spots holding water")

npm run build
