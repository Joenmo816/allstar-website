import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "../../components/Hero";

export const metadata: Metadata = {
  title: "Property Management Pest Control | All Star Pest Solutions",
  description:
    "Reliable commercial pest solutions for property managers across South Kansas City. Fast response, clear reporting, and proactive prevention.",
};

export default function PropertyManagementPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 pt-32">
      <Hero
        eyebrow="Commercial Solutions"
        title="Property Management Pest Control"
        description="Reliable pest solutions for apartments, duplexes, HOA communities, and multi-tenant properties. We help property managers protect their reputation, reduce tenant complaints, and stay ahead of recurring pest issues."
        primaryCtaText="Call (913) 738-7827"
        primaryCtaHref="tel:+19137387827"
        secondaryCtaText="Free Quote"
        secondaryCtaHref="/contact"
        logoSrc="/logo-header-v2.png"
        heroImageSrc="/images/commercial-property-management.svg"
        mascotSrc="/images/allstar-mascot.png"
        showMascot={false}
      />

      <section className="mt-12 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold tracking-wide text-red-700">
            Commercial Solutions
          </p>

          <p className="mt-4 text-lg text-slate-700">
            Keep tenants happy, protect your reputation, and prevent issues before
            they become complaints. We support apartments, duplexes, HOA
            communities, and multi-tenant properties with consistent service,
            clear communication, and practical prevention.
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
            <li>• Fast response for tenant-reported issues</li>
            <li>• Clear notes and documentation for managers and owners</li>
            <li>• Prevention-first approach with long-term thinking</li>
            <li>• Common targets: roaches, ants, rodents, spiders</li>
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image
            src="/images/commercial-property-management.svg"
            alt="Property management pest control"
            width={1600}
            height={900}
            priority
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Multi-Unit Ready</h2>
          <p className="mt-2 text-slate-700">
            Service plans built for shared walls, shared utility lines, trash
            areas, common spaces, and turnover seasons.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Tenant-Friendly</h2>
          <p className="mt-2 text-slate-700">
            Professional communication, practical prep instructions, and
            treatment strategies focused on safety, consistency, and results.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Prevention Focus</h2>
          <p className="mt-2 text-slate-700">
            We look for entry points, conducive conditions, moisture issues, and
            harborage areas instead of just treating symptoms.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-extrabold">
          Want a consistent vendor you do not have to babysit?
        </h2>

        <p className="mt-2 text-white/80">
          Call now and we will help build a service plan that fits your
          properties, your tenants, and your budget.
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




