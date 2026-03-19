export const metadata = {
  title: "Hospital & Healthcare Pest Control | All Star Pest Solutions",
  description:
    "Commercial pest solutions for hospitals and healthcare facilities in South Kansas City. Discreet service, strict standards, and prevention-first protection.",
};

import Hero from "../../components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function HospitalPage() {
  return (
    <main className="pt-32 mx-auto max-w-6xl px-4 py-10">

      {/* HERO */}
      <Hero
        showMascot={false}
        logoSrc=""
        mascotSrc=""
        title="Hospital & Healthcare Pest Control"
        subtitle="Discreet pest management designed for hospitals, clinics, and healthcare facilities where sanitation, safety, and compliance matter most."
        background="/images/commercial-hospital.svg"
      />

      {/* HERO CONTENT BLOCK */}
      <section className="grid gap-8 md:grid-cols-2 md:items-center mt-12">
        <div>
          <p className="text-sm font-semibold tracking-wide text-red-700">
            Commercial Solutions
          </p>

          <p className="mt-4 text-lg text-slate-700">
            Healthcare facilities can’t afford shortcuts. We focus on prevention,
            documentation, and a clean, professional process that supports your standards.
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
            <li>• Discreet service options</li>
            <li>• Prevention-first mindset (IPM-style approach)</li>
            <li>• Common targets: flies, ants, roaches, rodents</li>
            <li>• Practical recommendations for exclusion & sanitation</li>
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image
            src="/images/commercial-hospital.svg"
            alt="Hospital and healthcare pest control"
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
          <h2 className="text-xl font-bold">Documentation</h2>
          <p className="mt-2 text-slate-700">
            Clear notes and a professional process—useful for audits and internal tracking.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Prevention & Exclusion</h2>
          <p className="mt-2 text-slate-700">
            We help reduce root causes: entry points, moisture, harborage, and food sources.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Rapid Response</h2>
          <p className="mt-2 text-slate-700">
            When something appears, you need action fast—without chaos.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-slate-900 p-8 text-white">

        <h2 className="text-2xl font-extrabold">
          Need a high-standard commercial partner?
        </h2>

        <p className="mt-2 text-white/80">
          Call now and we’ll discuss your facility and the right prevention plan.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="tel:+19137387827"
            className="inline-flex items-center justify-center rounded-lg bg-yellow-400 px-5 py-3 font-extrabold text-slate-900 hover:bg-yellow-300"
          >
            Call (913) 738-7827
          </a>

          <Link
            href="/termite-services"
            className="inline-flex items-center justify-center rounded-lg border border-white/25 px-5 py-3 font-semibold hover:bg-white/10"
          >
            See Termite Services
          </Link>
        </div>

      </section>

    </main>
  );
}