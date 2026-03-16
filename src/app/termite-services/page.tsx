export const metadata = {
  title: "Termite Treatment & Termidor Experts in Kansas City",
  description:
    "Subterranean termite inspections and Termidor treatments in South Kansas City. Protect your home from costly hidden termite damage.",
};

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function TermiteServicesPage() {
  const basfPledge =
    "https://pestcontrol.basf.us/content/dam/cxm/agriculture/pest-control/us/en/multimedia-and-resources/pdf/Termidor_10Year_Pledge_2022.pdf";

  return (
    <>
      {/* ================= STRUCTURED DATA ================= */}
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

      <main className="pt-32 bg-white">

        {/* ================= HERO (UPDATED WITH MASCOT) ================= */}
        <section className="relative w-full h-[650px]">
          <Image
            src="/images/termiterun.png"
            alt="Termite mud tube on home foundation"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full grid md:grid-cols-2 items-center">

            {/* LEFT TEXT */}
            <div className="text-white max-w-2xl">

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Termite Inspections & Treatment in the South KC Metro
              </h1>

              <p className="text-lg text-gray-200 mb-8">
                Protect your home from silent structural destruction.
                We provide professional termite inspections and treatment
                throughout Johnson, Miami, Cass, and Jackson Counties.
              </p>

              <div className="flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
                >
                  Schedule Inspection
                </Link>

                <a
                  href="tel:9137387827"
                  className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
                >
                  Call (913) 738-7827
                </a>

              </div>

            </div>

            {/* RIGHT MASCOT */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/mascot.png"
                alt="All Star Pest Solutions Mascot"
                width={420}
                height={420}
                priority
                className="drop-shadow-2xl"
              />
            </div>

          </div>
        </section>

        {/* ================= DAMAGE FACTS ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Termites Cause Billions in Damage Every Year
            </h2>

            <p className="text-gray-700">
              In the United States, termites are estimated to cause
              $5–6.4 billion in structural damage annually.
              Unlike storms or fires, termite destruction happens quietly,
              24/7, often without visible warning.
            </p>
          </div>
        </section>

        {/* ================= KC TERMITE PROBLEM ================= */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-6">
              Why Termites Are Common in Kansas City Homes
            </h2>

            <p className="text-gray-700 mb-6">
              The Kansas City metro area sits directly in the range of the
              Eastern Subterranean Termite — the most destructive termite
              species in North America. These termites thrive in the soil
              and moisture conditions found throughout Johnson County,
              Miami County, Cass County, and Jackson County.
            </p>

            <p className="text-gray-700 mb-6">
              Subterranean termites live underground and build mud tunnels
              to travel from their colony to wood inside structures. Because
              they work inside walls, crawlspaces, and foundations, damage
              often goes unnoticed until it becomes severe.
            </p>

            <p className="text-gray-700">
              Regular professional inspections are the best way to detect
              termite activity early and prevent expensive structural damage.
            </p>
          </div>
        </section>

        {/* ALL OTHER SECTIONS REMAIN EXACTLY THE SAME */}

        {/* ================= TERMITE IDENTIFICATION ================= */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="/images/termites.png"
              alt="Termite workers and soldiers in damaged wood"
              width={900}
              height={700}
              className="rounded-lg shadow-lg"
            />

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Signs of Termite Activity
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-3">
                <li>Mud tubes along foundations</li>
                <li>Hollow or brittle wood</li>
                <li>Discarded wings near windows or lights</li>
                <li>Warped trim or soft flooring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* (everything else unchanged) */}

      </main>
    </>
  );
}