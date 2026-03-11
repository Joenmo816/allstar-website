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

        {/* ================= HERO ================= */}
        <section className="relative w-full h-[650px]">
          <Image
            src="/images/termiterun.png"
            alt="Termite mud tube on home foundation"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
            <div className="text-white max-w-3xl">
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

        {/* ================= ANT VS TERMITE ================= */}
        <section className="py-20 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Flying Ant vs Termite Swarmer
          </h2>

          <div className="max-w-5xl mx-auto px-6">
            <Image
              src="/images/antvstermite.png"
              alt="Comparison of flying ant and termite swarmer"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>

          <p className="mt-8 text-gray-700 max-w-3xl mx-auto">
            Termite swarmers often swarm at night and drop their wings shortly
            after landing. Piles of shed wings inside your home are a major red flag.
          </p>
        </section>

        {/* ================= TERMIDOR SECTION ================= */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            <div>
              <Image
                src="/images/termidorcertified.png"
                alt="Termidor Certified Professional"
                width={350}
                height={350}
                className="mb-6"
              />

              <h2 className="text-3xl font-bold mb-6">
                Why We Use Termidor®
              </h2>

              <p className="text-gray-700 mb-6">
                Termidor® is a non-repellent liquid termiticide designed
                to spread through termite social behavior — often referred to
                as the Transfer Effect®. Properly applied by licensed professionals,
                it is designed for long-term structural protection.
              </p>

              <a
                href={basfPledge}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-red-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-800 transition"
              >
                View BASF 10-Year Pledge (PDF)
              </a>
            </div>

            <Image
              src="/images/howtermidorworks.png"
              alt="How Termidor works diagram"
              width={1000}
              height={700}
              className="rounded-lg shadow-lg"
            />

          </div>
        </section>

        {/* ================= SEO SERVICE AREA LINKS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl font-bold text-center mb-8">
              Termite Services Near You
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

              <div>
                <h3 className="text-xl font-semibold mb-4">Missouri</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><Link href="/belton-mo">Belton, MO Termite Services</Link></li>
                  <li><Link href="/raymore-mo">Raymore, MO Termite Services</Link></li>
                  <li><Link href="/peculiar-mo">Peculiar, MO Termite Services</Link></li>
                  <li><Link href="/harrisonville-mo">Harrisonville, MO Termite Services</Link></li>
                  <li><Link href="/cleveland-mo">Cleveland, MO Termite Services</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Kansas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><Link href="/overland-park-ks">Overland Park, KS Termite Services</Link></li>
                  <li><Link href="/olathe-ks">Olathe, KS Termite Services</Link></li>
                  <li><Link href="/gardner-ks">Gardner, KS Termite Services</Link></li>
                  <li><Link href="/spring-hill-ks">Spring Hill, KS Termite Services</Link></li>
                  <li><Link href="/louisburg-ks">Louisburg, KS Termite Services</Link></li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-20 bg-red-700 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            Protect Your Home Before Damage Spreads
          </h2>

          <Link
            href="/contact"
            className="bg-yellow-400 text-black px-8 py-4 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Schedule Your Termite Inspection
          </Link>
        </section>

      </main>
    </>
  );
}

<h2 className='text-2xl font-bold mt-12'>
Other Cities We Service
</h2>

<ul>
<li><a href='/termite-louisburg-ks'>termite in louisburg-ks</a></li>
<li><a href='/termite-paola-ks'>termite in paola-ks</a></li>
<li><a href='/termite-osawatomie-ks'>termite in osawatomie-ks</a></li>
<li><a href='/termite-spring-hill-ks'>termite in spring-hill-ks</a></li>
<li><a href='/termite-stilwell-ks'>termite in stilwell-ks</a></li>
<li><a href='/termite-overland-park-ks'>termite in overland-park-ks</a></li>
<li><a href='/termite-olathe-ks'>termite in olathe-ks</a></li>
<li><a href='/termite-prairie-village-ks'>termite in prairie-village-ks</a></li>
<li><a href='/termite-leawood-ks'>termite in leawood-ks</a></li>
<li><a href='/termite-peculiar-mo'>termite in peculiar-mo</a></li>
<li><a href='/termite-freeman-mo'>termite in freeman-mo</a></li>
<li><a href='/termite-harrisonville-mo'>termite in harrisonville-mo</a></li>
<li><a href='/termite-drexel-mo'>termite in drexel-mo</a></li>
<li><a href='/termite-cleveland-mo'>termite in cleveland-mo</a></li>
<li><a href='/termite-loch-lloyd-mo'>termite in loch-lloyd-mo</a></li>
<li><a href='/termite-belton-mo'>termite in belton-mo</a></li>
<li><a href='/termite-raymore-mo'>termite in raymore-mo</a></li>
<li><a href='/termite-grandview-mo'>termite in grandview-mo</a></li>

</ul>


