export const metadata = {
  title: "Schools & Churches Pest Control | All Star Pest Solutions",
  description:
    "Commercial pest solutions for schools, daycares, and churches in South Kansas City. Discreet service, safety-first approach, and proactive prevention.",
};

import Hero from "../../components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function SchoolsChurchesPage() {
  return (
    <main className="pt-32 mx-auto max-w-6xl px-4 py-10">

      {/* HERO */}
      <Hero showMascot={false}
        title="Schools & Churches Pest Control"
        subtitle="High-traffic facilities need a prevention-first plan. We help keep classrooms, kitchens, fellowship halls, and offices protected with practical, safety-minded pest solutions."
        background="/images/commercial-schools-churches.svg"
      />

      {/* HERO CONTENT BLOCK */}
      <section className="grid gap-8 md:grid-cols-2 md:items-center mt-12">
        <div>
          <p className="text-sm font-semibold tracking-wide text-red-700">
            Commercial Solutions
          </p>

          <p className="mt-4 text-lg text-slate-700">
            High-traffic facilities need a prevention-first plan. We help keep classrooms,
            kitchens, fellowship halls, and offices protected with practical, safety-minded service.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+19137387827"
              className="inline-flex items-center justify-center rounded-lg bg-red-700 px-5 py-3 text-white font-semibold hover:bg-red-800"
            >
              Call (913) 738-7827
            </a>

            <Link
              href="/commercial"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-50"
            >
              Back to Commercial
            </Link>
          </div>

          <ul className="mt-6 grid gap-2 text-slate-800">
            <li>• Discreet scheduling options</li>
            <li>• Focus on prevention & sanitation coaching</li>
            <li>• Common targets: ants, roaches, mice, spiders</li>
            <li>• Kitchen/cafeteria support available</li>
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image
            src="/images/commercial-schools-churches.svg"
            alt="Schools and churches pest control"
            width={1600}
            height={900}
            priority
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Safety-Minded</h2>
          <p className="mt-2 text-slate-700">
            Treatments and placements planned around people, schedules, and sensitive areas.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Prevention First</h2>
          <p className="mt-2 text-slate-700">
            We target entry points and conditions that invite pests, not just the symptoms.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Reliable Coverage</h2>
          <p className="mt-2 text-slate-700">
            Routine service + quick response when something pops up.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-slate-900 p-8 text-white">

        <h2 className="text-2xl font-extrabold">
          Need a plan that protects people and your building?
        </h2>

        <p className="mt-2 text-white/80">
          Call now and we’ll build the right schedule for your school or church.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="tel:+19137387827"
            className="inline-flex items-center justify-center rounded-lg bg-yellow-400 px-5 py-3 font-extrabold text-slate-900 hover:bg-yellow-300"
          >
            Call (913) 738-7827
          </a>

          <Link
            href="/pests"
            className="inline-flex items-center justify-center rounded-lg border border-white/25 px-5 py-3 font-semibold hover:bg-white/10"
          >
            Browse Pest Library
          </Link>
        </div>

      </section>

    </main>
  );
}
