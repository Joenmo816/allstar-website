
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function ResidentialPage() {
  return (
    <>
      {/* ================= STRUCTURED DATA ================= */}
      <Script
        id="allstar-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "All Star Pest Solutions",
              "image": "https://www.allstarpestkc.com/logo.png",
              "url": "https://www.allstarpestkc.com",
              "telephone": "+1-913-738-7827",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "210 W. Cleveland St",
                "addressLocality": "Cleveland",
                "addressRegion": "MO",
                "postalCode": "64734",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 38.6586,
                "longitude": -94.5930
              },
              "areaServed": [
                "Johnson County KS",
                "Miami County KS",
                "Cass County MO",
                "Jackson County MO"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Residential Pest Solutions",
              "provider": {
                "@type": "LocalBusiness",
                "name": "All Star Pest Solutions"
              },
              "areaServed": [
                "Overland Park KS",
                "Olathe KS",
                "Belton MO",
                "Raymore MO"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What pests are common in the Kansas City metro area?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Homes in Johnson, Miami, Cass, and Jackson Counties commonly deal with ants, spiders, cockroaches, rodents, termites, bed bugs, wasps, and seasonal invaders."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are your treatments safe for children and pets?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We follow strict label guidelines and use industry-leading safety protocols to protect children, pets, and beneficial species."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Integrated Pest Management?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Integrated Pest Management focuses on inspection, targeted treatment, and long-term prevention instead of blanket spraying."
                  }
                }
              ]
            }
          ])
        }}
      />

      <main className="pt-32 bg-white">

        {/* ================= HERO ================= */}
        <section className="relative w-full h-[700px]">
          <Image
            src="/images/house.png"
            alt="KC Metro Home Protected by All Star Pest Solutions"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl text-white">

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                KC Metro Pest Solutions:
                <span className="block text-yellow-400 mt-2">
                  30 Years of Local Expertise.
                </span>
              </h1>

              <p className="text-lg text-gray-200 mb-8">
                Serving Kansas and Missouri with a focus on results and safety.
                We target the pests that bug you, while ensuring bees,
                butterflies, and other beneficial creatures remain protected.
              </p>

              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
                >
                  Schedule a Free Inspection
                </Link>

                <a
                  href="tel:9137387827"
                  className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
                >
                  Call (913) 738-7827
                </a>
              </div>

            </div>
          </div>
        </section>


        {/* ================= FAQ SECTION (VISIBLE) ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">

            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 text-gray-700">

              <div>
                <h3 className="font-semibold text-lg">
                  What pests are common in the Kansas City metro area?
                </h3>
                <p className="mt-2">
                  Homes in Johnson, Miami, Cass, and Jackson Counties commonly deal with ants, spiders, cockroaches, rodents, termites, bed bugs, wasps, and seasonal invaders.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Are your treatments safe for children and pets?
                </h3>
                <p className="mt-2">
                  Yes. We follow strict label guidelines and use industry-leading safety protocols to protect children, pets, and beneficial species.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  What is Integrated Pest Management?
                </h3>
                <p className="mt-2">
                  Integrated Pest Management focuses on inspection, targeted treatment, and long-term prevention instead of blanket spraying.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* ================= FINAL CTA ================= */}
        <section className="py-16 bg-red-700 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take Your Home Back?
          </h2>

          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
            >
              Request a Free Quote
            </Link>

            <a
              href="tel:9137387827"
              className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
            >
              Call All Star Today
            </a>
          </div>
        </section>

      </main>
    </>
  );
}