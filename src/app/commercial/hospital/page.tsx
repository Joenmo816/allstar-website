import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "../../components/Hero";

export const metadata: Metadata = {
  title: "Hospital & Healthcare Pest Control | All Star Pest Solutions",
  description:
    "Commercial pest solutions for hospitals and healthcare facilities in South Kansas City. Discreet service, strict standards, and prevention-first protection.",
};

export default function HospitalPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 pt-32">
      {/* HERO */}
      <Hero
        eyebrow="Commercial Solutions"
        title="Hospital & Healthcare Pest Control"
        description="Discreet pest management designed for hospitals, clinics, and healthcare facilities where sanitation, safety, and compliance matter most."
        primaryCtaText="Call (913) 738-7827"
        primaryCtaHref="tel:+19137387827"
        secondaryCtaText="Free Quote"
        secondaryCtaHref="/free-inspection"
        logoSrc="/images/allstar-logo-header-v2.png"
        heroImageSrc="/images/commercial-hospital.svg"
        mascotSrc="/images/allstar-mascot.png"
        showMascot={false}
      />

      {/* HERO CONTENT BLOCK */}
      <section className="mt-12 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold tracking-wide text-red-700">
            Commercial Solutions
          </p>

          <p className="mt-4 text-lg text-slate-700">
            Healthcare facilities cannot afford shortcuts. We focus on prevention,
            documentation, and a clean, professional process that supports your
            standards.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+19137387827"
              className="inline-flex items-center justify-center rounded-lg bg-red-700 px-5 py-3 font-semibold text-white hover:bg-red-800"
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
            <li>• Practical recommendations for exclusion and sanitation</li>
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
            Clear notes and a professional process that supports internal tracking,
            accountability, and inspection readiness.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Prevention & Exclusion</h2>
          <p className="mt-2 text-slate-700">
            We help reduce root causes such as entry points, moisture, harborage,
            and accessible food sources.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Rapid Response</h2>
          <p className="mt-2 text-slate-700">
            When pest activity appears, quick response matters. We focus on fast,
            professional action without unnecessary disruption.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-extrabold">
          Need a high-standard commercial partner?
        </h2>

        <p className="mt-2 text-white/80">
          Call now and we will discuss your facility, your concerns, and the right
          prevention plan.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="tel:+19137387827"
            className="inline-flex items-center justify-center rounded-lg bg-allstarBlueLight px-5 py-3 font-extrabold text-slate-900 hover:bg-allstarBlueLight"
          >
            Call (913) 738-7827
          </a>

          <Link
            href="/commercial"
            className="inline-flex items-center justify-center rounded-lg border border-white/25 px-5 py-3 font-semibold hover:bg-white/10"
          >
            Back to Commercial
          </Link>
        </div>
      </section>
    </main>
  );
}



