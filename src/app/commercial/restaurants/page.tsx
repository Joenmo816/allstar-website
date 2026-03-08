import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function RestaurantPage() {
  return (
    <>
      {/* ================= SEO STRUCTURED DATA ================= */}
      <Script
        id="restaurant-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Restaurant Pest Solutions",
              "areaServed": [
                "Johnson County KS",
                "Miami County KS",
                "Cass County MO",
                "Jackson County MO"
              ],
              "provider": {
                "@type": "LocalBusiness",
                "name": "All Star Pest Solutions",
                "telephone": "+1-913-738-7827",
                "url": "https://www.allstarpestkc.com"
              }
            }
          ])
        }}
      />

      <main className="pt-32 bg-white">

        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full h-[650px]">
          <Image
            src="/images/kitchen.png"
            alt="German cockroach silhouette in commercial kitchen"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl text-white">

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Restaurant Pest Solutions in the Kansas City Metro
              </h1>

              <p className="text-lg text-gray-200 mb-8">
                Protect your restaurant from cockroaches, rodents, ants, and flies
                with compliance-driven pest management programs built for
                health inspections, food safety, and brand reputation protection.
              </p>

              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
                >
                  Schedule a Restaurant Inspection
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

        {/* ================= PROBLEM SECTION ================= */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 text-gray-700">

            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Cockroaches, Rodents & Health Code Risks
            </h2>

            <p className="mb-6">
              Restaurants in Johnson County, Miami County, Cass County,
              and Jackson County face constant pressure from health department
              inspections. German cockroaches, rodents, ants, and flies are the
              most common threats to food preparation areas and dining spaces.
            </p>

            <p>
              One failed inspection can damage your reputation and revenue.
              Our Integrated Pest Management programs eliminate active infestations
              while preventing future outbreaks — without disrupting operations.
            </p>

          </div>
        </section>

        {/* ================= TRUST SECTION WITH WAITRESS IMAGE ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            <div>
              <Image
                src="/images/waitress.png"
                alt="Professional restaurant waitress taking a family's order"
                width={800}
                height={600}
                className="rounded shadow-lg"
              />
            </div>

            <div className="text-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Protect Your Guests, Staff & Reputation
              </h2>

              <p className="mb-6">
                Your customers expect a clean, safe dining experience.
                Our restaurant pest solutions protect employees, food storage,
                commercial kitchens, and customer areas while meeting
                regulatory compliance requirements.
              </p>

              <p>
                With over 30 years of local experience, we understand seasonal
                pest pressures in the Kansas City metro and apply precise,
                targeted treatments that keep your business inspection-ready.
              </p>
            </div>

          </div>
        </section>

        {/* ================= SERVICES SECTION ================= */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 text-gray-700">

            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              What We Handle for Restaurants
            </h2>

            <ul className="grid md:grid-cols-2 gap-6 list-disc pl-6 text-lg">
              <li><strong>German Cockroach Elimination</strong></li>
              <li><strong>Rodent Monitoring & Exclusion</strong></li>
              <li><strong>Ant & Fly Management</strong></li>
              <li><strong>Food Storage Protection</strong></li>
              <li><strong>Drain & Floor Area Inspections</strong></li>
              <li><strong>Health Inspection Documentation Support</strong></li>
            </ul>

          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-16 bg-red-700 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Protect Your Restaurant?
          </h2>

          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
            >
              Request a Commercial Quote
            </Link>

            <a
              href="tel:9137387827"
              className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
            >
              Call (913) 738-7827
            </a>
          </div>
        </section>

      </main>
    </>
  );
}