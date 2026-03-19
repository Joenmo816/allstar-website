import Hero from "../../components/Hero";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function WarehousePage() {
  return (
    <>
      {/* ================= STRUCTURED DATA ================= */}
      <Script
        id="warehouse-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "All Star Pest Solutions",
              telephone: "+1-913-738-7827",
              url: "https://www.allstarpestkc.com",
              areaServed: [
                "Johnson County KS",
                "Miami County KS",
                "Cass County MO",
                "Jackson County MO"
              ],
              geo: {
                "@type": "GeoCoordinates",
                latitude: "38.8200",
                longitude: "-94.5300"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Warehouse Pest Solutions",
              areaServed: [
                "Kansas City Metro South",
                "Johnson County KS",
                "Miami County KS",
                "Cass County MO",
                "Jackson County MO"
              ]
            }
          ])
        }}
      />

      <main className="pt-32 bg-white">

        {/* ================= HERO ================= */}
        <Hero
          showMascot={false}
          logoSrc=""
          mascotSrc=""
          title="Warehouse Pest Control in Kansas & Missouri"
          subtitle="Rodent control, stored product pest management, and industrial pest solutions for warehouses, distribution centers, logistics hubs, and manufacturing facilities throughout the Kansas City metro."
          background="/images/warehouse.png"
        />

        {/* ================= PROBLEM SECTION ================= */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 text-gray-700">

            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Rodents & Stored Product Pests Destroy Inventory
            </h2>

            <p className="mb-6">
              Warehouses and distribution centers across the KC metro are prime
              targets for mice, rats, beetles, moths, ants, and cockroaches.
              Large structures, shipping docks, pallet storage, and constant
              freight movement create ideal conditions for infestations.
            </p>

            <p>
              Without a proactive pest management program, contamination,
              product loss, OSHA violations, and failed inspections can cost
              thousands in damages and reputational harm.
            </p>

          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Industrial & Warehouse Pest Solutions
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-gray-700 text-lg">

              <div>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Rodent Monitoring & Exclusion Systems</strong></li>
                  <li><strong>Mouse & Rat Population Control</strong></li>
                  <li><strong>Stored Product Pest Elimination</strong></li>
                  <li><strong>Beetle & Moth Treatment Programs</strong></li>
                  <li><strong>Dock Door & Perimeter Protection</strong></li>
                </ul>
              </div>

              <div>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>OSHA & Regulatory Compliance Support</strong></li>
                  <li><strong>Food-Grade Warehouse Programs</strong></li>
                  <li><strong>Distribution Center Pest Monitoring</strong></li>
                  <li><strong>Routine Service & Documentation</strong></li>
                  <li><strong>Emergency Warehouse Pest Response</strong></li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ================= LOCAL GEO SECTION ================= */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 text-gray-700">

            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Serving South Kansas City Metro Warehouses
            </h2>

            <p className="mb-6">
              We provide warehouse pest control services in:
            </p>

            <p className="mb-4">
              <strong>Kansas:</strong> Overland Park, Olathe, Gardner,
              Spring Hill, Bucyrus, Stillwell, Louisburg, Paola, Osawatomie
              (Johnson County & Miami County).
            </p>

            <p>
              <strong>Missouri:</strong> Belton, Raymore, Peculiar,
              Harrisonville, Garden City, Freeman, Drexel, Cleveland,
              Loch Lloyd, South Kansas City
              (Cass County & Jackson County).
            </p>

          </div>
        </section>

        {/* ================= WHY US ================= */}
        <section className="py-20 bg-gray-900 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            30+ Years Protecting Industrial Facilities
          </h2>

          <p className="max-w-3xl mx-auto mb-8">
            You are not hiring a technician with 30 days of experience.
            You are working directly with a local expert who understands
            Kansas and Missouri pest pressures, seasonal rodent patterns,
            and warehouse vulnerabilities unique to the KC metro.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
            >
              Schedule Warehouse Assessment
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