import type { Metadata } from "next";
import Link from "next/link";
import Hero from "../components/Hero";

export const metadata: Metadata = {
  title: "Commercial Pest Solutions | All Star Pest Solutions",
  description:
    "Professional commercial pest solutions for Kansas City area businesses. Protect your property with effective service, modern methods, and over 30 years of experience.",
};

const commercialTypes = [
  {
    title: "Property Management",
    href: "/commercial/property-management",
    description:
      "Reliable service for apartments, duplexes, HOA communities, and multi-tenant properties.",
  },
  {
    title: "Hospital & Healthcare",
    href: "/commercial/hospital",
    description:
      "Discreet pest management for healthcare facilities where sanitation and compliance matter most.",
  },
  {
    title: "Schools & Churches",
    href: "/commercial/schools-churches",
    description:
      "Safety-minded pest solutions for schools, churches, daycares, and other high-traffic facilities.",
  },
  {
    title: "Warehouses & Industrial",
    href: "/commercial/warehouses",
    description:
      "Targeted pest solutions for warehouses, logistics spaces, and industrial environments.",
  },
  {
    title: "Restaurants & Food Service",
    href: "/commercial/restaurants",
    description:
      "Protect your reputation with service designed for sanitation-sensitive environments.",
  },
  {
    title: "Office Buildings",
    href: "/commercial/offices",
    description:
      "Professional, low-disruption service for offices, common spaces, and employee areas.",
  },
];

export default function CommercialPage() {
  return (
    <main className="pb-16">
      <Hero
        eyebrow="State-Certified Commercial Applicator (KS & MO)"
        title="Commercial Pest Solutions"
        description="Professional pest solutions protecting Kansas City businesses with modern methods, responsive service, and over 30 years of industry experience."
        primaryCtaText="Call (913) 738-7827"
        primaryCtaHref="tel:+19137387827"
        secondaryCtaText="Free Quote"
        secondaryCtaHref="/free-inspection"
        logoSrc="/logo.png"
        heroImageSrc="/images/commercial-building-pest-control.png"
        heroImageAlt="Commercial strip mall property"
        mascotSrc="/mascot.png"
        showMascot={true}
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-700">
            Business Protection That Works
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
            Pest solutions tailored for commercial properties
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Every commercial property has different risks. Restaurants, offices,
            warehouses, healthcare facilities, schools, churches, and
            multi-family properties all require a professional approach that
            protects people, property, and reputation. All Star Pest Solutions
            delivers practical service plans built around your business.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {commercialTypes.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-300 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-700">
                {item.description}
              </p>
              <div className="mt-5 font-semibold text-red-700">Learn more →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-slate-900 p-8 text-white md:p-10">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Need a commercial pest partner you can count on?
          </h2>

          <p className="mt-3 max-w-3xl text-white/80">
            We help Kansas City area businesses stay ahead of pest activity with
            practical service, modern treatment methods, and a prevention-first
            mindset.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+19137387827"
              className="inline-flex items-center justify-center rounded-lg bg-yellow-400 px-5 py-3 font-extrabold text-slate-900 transition hover:bg-yellow-300"
            >
              Call (913) 738-7827
            </a>

            <Link
              href="/free-inspection"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-semibold transition hover:bg-white/10"
            >
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}