export const metadata = {
  title: "Property Management Pest Control | All Star Pest Solutions",
  description:
    "Reliable commercial pest solutions for property managers across South Kansas City. Fast response, clear reporting, and proactive prevention.",
};

import Image from "next/image";
import Link from "next/link";

export default function PropertyManagementPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Hero */}
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold tracking-wide text-red-700">
            Commercial Solutions
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
            Property Management Pest Control
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Keep tenants happy, protect your reputation, and prevent issues before
            they become complaints. We support apartments, duplexes, HOA communities,
            and multi-tenant properties with consistent service and clean communication.
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
            <li>• Fast response for tenant-reported issues</li>
            <li>• Clear notes & documentation (great for managers/owners)</li>
            <li>• Prevention-first approach (IPM-minded service)</li>
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

      {/* Content */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Multi-Unit Ready</h2>
          <p className="mt-2 text-slate-700">
            Recurring service plans designed for shared walls, shared utility lines,
            trash areas, and turnover seasons.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Tenant-Friendly</h2>
          <p className="mt-2 text-slate-700">
            Professional communication, practical prep instructions, and treatments
            that focus on safety and results.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold">Prevention Focus</h2>
          <p className="mt-2 text-slate-700">
            We look for entry points and conducive conditions, not just “spray and pray.”
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-extrabold">
          Want a consistent vendor you don’t have to babysit?
        </h2>
        <p className="mt-2 text-white/80">
          Call now and we’ll set up a plan that fits your buildings and your budget.
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
