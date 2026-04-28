$ErrorActionPreference = "Stop"

$pages = @(
  @{
    Path = "src/app/why-choose-all-star/page.tsx"
    Title = "Why Choose All Star Pest Solutions"
    Body = @"
All Star Pest Solutions is locally owned, owner-operated, and built around solving pest problems the right way — not locking people into contracts or rushing through quick sprays.

With over 25 years of pest control experience, certified applicators in Kansas and Missouri, and a customer-first service model, we focus on real inspections, targeted treatments, and honest recommendations.

When you call All Star, you are not dealing with a giant call center. You are working with a local pest professional who cares about protecting your home, your family, your pets, and the pollinators around your property.
"@
  },
  @{
    Path = "src/app/meet-the-owner/page.tsx"
    Title = "Meet the Owner"
    Body = @"
All Star Pest Solutions is owned and operated by a local pest professional with more than 25 years of hands-on experience in the pest control industry.

This company was built for customers who want straight answers, dependable service, and real results. Every home is different, every pest issue is different, and every customer deserves a treatment plan that makes sense.

You get local accountability, honest communication, and service from someone who takes pride in doing the job right.
"@
  },
  @{
    Path = "src/app/real-results/page.tsx"
    Title = "Real Pest Control Results"
    Body = @"
Pest control is not just about spraying around a house. Real results come from inspection, identification, treatment, prevention, and follow-up when needed.

All Star Pest Solutions focuses on finding why the pest problem is happening, where pests are entering, and what needs to be corrected to help stop the issue from returning.

Whether it is ants in walls, termite concerns, rodents, spiders, cockroaches, wasps, fleas, bed bugs, or mosquitoes, the goal is simple: solve the problem and protect the property.
"@
  },
  @{
    Path = "src/app/customer-stories/page.tsx"
    Title = "Customer Stories"
    Body = @"
Every pest problem has a story. A homeowner hears scratching in the wall. Ants show up in the kitchen. Termite swarmers appear near a window. Wasps build near an entry door. Spiders keep showing up in the basement.

All Star Pest Solutions helps customers understand what is happening, what the risk is, and what can be done to fix it.

As we continue serving more local homeowners, this page will highlight real customer situations, common pest problems, and how All Star Pest Solutions helped solve them.
"@
  },
  @{
    Path = "src/app/guarantee/page.tsx"
    Title = "Guaranteed Service. Guaranteed Results."
    Body = @"
Our slogan means something.

All Star Pest Solutions believes customers deserve pest control that is honest, dependable, and focused on results. If a pest problem needs extra attention, we believe in standing behind the service and doing what is reasonable to help make it right.

No mandatory contracts. No scare tactics. No one-size-fits-all pest control.

Just local service, real inspections, safe modern treatment methods, and a commitment to protecting your home.
"@
  }
)

foreach ($page in $pages) {
  $dir = Split-Path $page.Path
  New-Item -ItemType Directory -Force -Path $dir | Out-Null

  $content = @"
import Link from "next/link";

export const metadata = {
  title: "$($page.Title) | All Star Pest Solutions",
  description:
    "Learn why Kansas City area homeowners choose All Star Pest Solutions for honest, local, eco-conscious pest control and termite protection.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-red-700">
          All Star Pest Solutions
        </p>

        <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          $($page.Title)
        </h1>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <p className="whitespace-pre-line text-lg leading-8 text-slate-800">
$($page.Body)
          </p>
        </div>

        <div className="mt-10 grid gap-4 rounded-3xl bg-slate-950 p-6 text-white md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-2xl font-black">
              Need pest control you can trust?
            </h2>
            <p className="mt-2 text-slate-200">
              Call or text All Star Pest Solutions today. Send a photo if you are not sure what pest you found.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href="tel:9137387827"
              className="rounded-2xl bg-red-600 px-6 py-3 text-center font-black text-white shadow hover:bg-red-700"
            >
              Call 913-738-STAR
            </a>
            <a
              href="sms:9137387827"
              className="rounded-2xl bg-white px-6 py-3 text-center font-black text-slate-950 shadow hover:bg-slate-100"
            >
              Text a Photo
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/services" className="font-bold text-red-700 hover:underline">
            View Pest Services
          </Link>
          <Link href="/termite-control" className="font-bold text-red-700 hover:underline">
            Termite Control
          </Link>
          <Link href="/contact" className="font-bold text-red-700 hover:underline">
            Contact All Star
          </Link>
        </div>
      </section>
    </main>
  );
}
"@

  Set-Content -Path $page.Path -Value $content -Encoding UTF8
}

npm run build
