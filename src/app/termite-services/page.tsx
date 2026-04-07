import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Hero from "@/app/components/Hero";

export const metadata: Metadata = {
  title: "Termite Treatment & Termidor Experts in Kansas City",
  description:
    "Subterranean termite inspections and Termidor treatments in South Kansas City. Protect your home from costly hidden termite damage.",
};

export default function TermiteServicesPage() {
  const basfPledge =
    "https://pestcontrol.basf.us/content/dam/cxm/agriculture/pest-control/us/en/multimedia-and-resources/pdf/Termidor_10Year_Pledge_2022.pdf";

  return (
    <>
      <Script
        id="termite-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "All Star Pest Solutions",
              url: "https://www.allstarpestkc.com",
              telephone: "+1-913-738-7827",
              areaServed: [
                "Johnson County KS",
                "Miami County KS",
                "Cass County MO",
                "Jackson County MO",
                "Overland Park KS",
                "Olathe KS",
                "Gardner KS",
                "Spring Hill KS",
                "Louisburg KS",
                "Paola KS",
                "Osawatomie KS",
                "Bucyrus KS",
                "Stillwell KS",
                "Leawood KS",
                "Lenexa KS",
                "Prairie Village KS",
                "Belton MO",
                "Raymore MO",
                "Peculiar MO",
                "Harrisonville MO",
                "Garden City MO",
                "Freeman MO",
                "Drexel MO",
                "Cleveland MO",
                "Loch Lloyd MO",
                "South Kansas City MO",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Termite Inspection and Treatment",
              provider: {
                "@type": "LocalBusiness",
                name: "All Star Pest Solutions",
              },
              areaServed: "South Kansas City Metro Area",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How do I know if I have termites?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Common signs include mud tubes, discarded wings, hollow wood, soft spots, or blistered paint. Termites often work silently behind walls.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the difference between termite swarmers and flying ants?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Termite swarmers have straight antennae, thick waists, and equal-length wings. Flying ants have elbowed antennae, narrow waists, and uneven wing sizes.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <main className="bg-white pb-16">
        <Hero
          eyebrow="Protect Your Home from Hidden Structural Damage"
          title="Termite Inspections & Treatment"
          description="Professional termite inspections and treatment throughout the south Kansas City metro. We help protect homes in Kansas and Missouri from costly subterranean termite damage."
          primaryCtaText="Schedule Inspection"
          primaryCtaHref="/contact"
          secondaryCtaText="Call (913) 738-7827"
          secondaryCtaHref="tel:+19137387827"
          logoSrc="/logo.png"
          heroImageSrc="/images/termiterun.png"
          heroImageAlt="Termite mud tube on home foundation"
          mascotSrc="/mascot.png"
          showMascot={true}
        />

        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Termites Cause Billions in Damage Every Year
            </h2>

            <p className="text-gray-700">
              In the United States, termites are estimated to cause billions in
              structural damage annually. Unlike storms or fires, termite
              destruction happens quietly, around the clock, often without
              visible warning until serious damage is already done.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-6 text-center text-3xl font-bold">
              Why Termites Are Common in Kansas City Homes
            </h2>

            <p className="mb-6 text-gray-700">
              The Kansas City metro sits directly in the range of the Eastern
              Subterranean Termite, the most destructive termite species in
              North America. These termites thrive in the soil and moisture
              conditions found throughout Johnson County, Miami County, Cass
              County, and Jackson County.
            </p>

            <p className="mb-6 text-gray-700">
              Subterranean termites live underground and build mud tunnels to
              travel from their colony to wood inside structures. Because they
              work inside walls, crawlspaces, and foundations, damage often goes
              unnoticed until it becomes severe.
            </p>

            <p className="text-gray-700">
              Regular professional inspections are one of the best ways to catch
              termite activity early and prevent expensive structural damage.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
            <Image
              src="/images/termites.png"
              alt="Termite workers and soldiers in damaged wood"
              width={900}
              height={700}
              className="rounded-lg shadow-lg"
            />

            <div>
              <h2 className="mb-6 text-3xl font-bold">
                Signs of Termite Activity
              </h2>

              <ul className="list-disc space-y-3 pl-6 text-gray-700">
                <li>Mud tubes along foundations</li>
                <li>Hollow or brittle wood</li>
                <li>Discarded wings near windows or lights</li>
                <li>Warped trim or soft flooring</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-6 py-16 text-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-extrabold">
              Ask about the BASF Termidor 10-Year Pledge
            </h2>

            <p className="mt-4 max-w-3xl text-white/80">
              Termidor is one of the most trusted names in termite control. If
              you want strong long-term protection, ask us about qualifying
              treatment options and the BASF Termidor pledge.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+19137387827"
                className="inline-flex items-center justify-center rounded-lg bg-yellow-400 px-5 py-3 font-extrabold text-slate-900 hover:bg-yellow-300"
              >
                Call (913) 738-7827
              </a>

              <a
                href={basfPledge}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-semibold hover:bg-white/10"
              >
                View BASF Pledge
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-semibold hover:bg-white/10"
              >
                Request Inspection
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}