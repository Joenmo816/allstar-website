import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Hero from "@/app/components/Hero";
import EcoCommitment from "@/app/components/EcoCommitment";

export const metadata: Metadata = {
  title: "Residential Pest Solutions | All Star Pest Solutions",
  description:
    "Residential pest solutions for Kansas City homes. Safe, eco-friendly service for families, children, and pets with modern methods and over 30 years of experience.",
};

export default function ResidentialPage() {
  return (
    <>
      <Script
        id="residential-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Residential Pest Solutions",
            provider: {
              "@type": "LocalBusiness",
              name: "All Star Pest Solutions",
              telephone: "+1-913-738-7827",
              areaServed: [
                "Johnson County KS",
                "Miami County KS",
                "Cass County MO",
                "Jackson County MO",
              ],
            },
          }),
        }}
      />

      <main className="bg-white pb-16">
        <Hero
          eyebrow="Safe for Children, Pets & the Environment"
          title="Residential Pest Solutions"
          description="Get the All Star Treatment. We treat your home as if it were our own with eco-friendly, family-conscious pest solutions designed for Kansas City area homes."
          primaryCtaText="Free Home Inspection"
          primaryCtaHref="/contact"
          secondaryCtaText="Call (913) 738-STAR"
          secondaryCtaHref="tel:+19137387827"
          logoSrc="/logo-header-v2.png"
          heroImageSrc="/images/house.png"
          heroImageAlt="Kansas City residential pest solutions"
          mascotSrc="/mascot.png"
          showMascot={true}
        />

        <EcoCommitment />

        <section className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="mb-8 text-center text-4xl font-black text-red-700">
            Residential Pest Solutions for Kansas City Homes
          </h2>

          <p className="mb-6 text-xl text-slate-800">
            Homes throughout the Kansas City metro area experience pest
            problems year-round. Seasonal weather changes, landscaping,
            wooded areas, and moisture conditions attract insects and
            rodents searching for food, water, and shelter.
          </p>

          <p className="mb-6 text-xl text-slate-800">
            All Star Pest Solutions takes pride in delivering the kind of
            service homeowners can trust. We focus on real solutions,
            clear communication, and long-term results.
          </p>

          <p className="text-xl text-slate-800">
            Our approach focuses on identifying the source of pest
            activity, eliminating current infestations, and helping
            prevent future pest problems from coming back. We provide
            solutions, not excuses.
          </p>
        </section>

        <section className="bg-allstarBlueLight py-24">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="mb-12 text-4xl font-black text-red-700">
              Common Pests Found in Kansas City Homes
            </h2>

            <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-xl border-2 border-red-600 bg-white p-10 shadow-lg">
                <h3 className="mb-3 text-2xl font-black">Ants</h3>
                <p className="text-lg text-slate-700">
                  Pavement ants, odorous house ants, and carpenter ants
                  frequently invade homes searching for food and moisture.
                </p>
              </div>

              <div className="rounded-xl border-2 border-yellow-500 bg-white p-10 shadow-lg">
                <h3 className="mb-3 text-2xl font-black">Spiders</h3>
                <p className="text-lg text-slate-700">
                  Kansas City homes commonly encounter wolf spiders,
                  cellar spiders, and occasionally brown recluse spiders.
                </p>
              </div>

              <div className="rounded-xl border-2 border-red-600 bg-white p-10 shadow-lg">
                <h3 className="mb-3 text-2xl font-black">Rodents</h3>
                <p className="text-lg text-slate-700">
                  Mice and rats can enter homes through extremely small
                  openings and quickly create sanitation and property
                  damage issues.
                </p>
              </div>

              <div className="rounded-xl border-2 border-yellow-500 bg-white p-10 shadow-lg">
                <h3 className="mb-3 text-2xl font-black">Cockroaches</h3>
                <p className="text-lg text-slate-700">
                  Cockroaches are persistent household pests that can
                  contaminate food and surfaces while spreading bacteria.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

