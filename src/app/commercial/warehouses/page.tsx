import type { Metadata } from "next";
import Hero from "../../components/Hero";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Warehouse Pest Control | All Star Pest Solutions",
  description:
    "Warehouse pest control for Kansas and Missouri facilities. Rodent control, stored product pest management, and industrial pest solutions for warehouses, logistics hubs, and manufacturing sites.",
};

export default function WarehousePage() {
  return (
    <>
      <Script
        id="warehouse-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "All Star Pest Solutions",
              telephone: "+1-(913) 738-7827",
              url: "https://allstarpestkc.com",
              areaServed: [
                "Johnson County KS",
                "Miami County KS",
                "Cass County MO",
                "Jackson County MO",
              ],
              geo: {
                "@type": "GeoCoordinates",
                latitude: "38.8200",
                longitude: "-94.5300",
              },
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
                "Jackson County MO",
              ],
            },
          ]),
        }}
      />

      <main className="bg-white pt-32">
        <Hero
          eyebrow="Commercial Solutions"
          title="Warehouse Pest Control in Kansas & Missouri"
          description="Rodent control, stored product pest management, and industrial pest solutions for warehouses, distribution centers, logistics hubs, and manufacturing facilities throughout the Kansas City metro."
          primaryCtaText="Call (913) 738-7827"
          primaryCtaHref="tel:+19137387827"
          secondaryCtaText="Schedule Assessment"
          secondaryCtaHref="/contact"
          logoSrc="/logo-header-v2.png"
          heroImageSrc="/images/warehouse.webp"
          mascotSrc="/images/allstar-mascot.png"
          showMascot={false}
        />

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6 text-gray-700">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Rodents & Stored Product Pests Destroy Inventory
            </h2>

            <p className="mb-6">
              Warehouses and distribution centers across the Kansas City metro
              are prime targets for mice, rats, beetles, moths, ants, and
              cockroaches. Large structures, shipping docks, pallet storage, and
              constant freight movement create ideal conditions for infestations.
            </p>

            <p>
              Without a proactive pest management program, contamination,
              product loss, failed inspections, and operational disruption can
              create expensive problems fast.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              Industrial & Warehouse Pest Solutions
            </h2>

            <div className="grid gap-8 text-lg text-gray-700 md:grid-cols-2">
              <div>
                <ul className="list-disc space-y-3 pl-6">
                  <li>
                    <strong>Rodent Monitoring & Exclusion Systems</strong>
                  </li>
                  <li>
                    <strong>Mouse & Rat Population Control</strong>
                  </li>
                  <li>
                    <strong>Stored Product Pest Elimination</strong>
                  </li>
                  <li>
                    <strong>Beetle & Moth Treatment Programs</strong>
                  </li>
                  <li>
                    <strong>Dock Door & Perimeter Protection</strong>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="list-disc space-y-3 pl-6">
                  <li>
                    <strong>Compliance-Focused Documentation</strong>
                  </li>
                  <li>
                    <strong>Food-Grade Warehouse Programs</strong>
                  </li>
                  <li>
                    <strong>Distribution Center Pest Monitoring</strong>
                  </li>
                  <li>
                    <strong>Routine Service & Reporting</strong>
                  </li>
                  <li>
                    <strong>Emergency Warehouse Pest Response</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6 text-gray-700">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Serving South Kansas City Metro Warehouses
            </h2>

            <p className="mb-6">
              We provide warehouse pest control services in communities across
              the south Kansas City metro.
            </p>

            <p className="mb-4">
              <strong>Kansas:</strong> Overland Park, Olathe, Gardner, Spring
              Hill, Bucyrus, Stillwell, Louisburg, Paola, and Osawatomie.
            </p>

            <p>
              <strong>Missouri:</strong> Belton, Raymore, Peculiar,
              Harrisonville, Garden City, Freeman, Drexel, Cleveland, Loch
              Lloyd, and South Kansas City.
            </p>
          </div>
        </section>

        <section className="bg-gray-900 py-20 text-center text-white">
          <h2 className="mb-6 text-3xl font-bold">
            30+ Years Protecting Industrial Facilities
          </h2>

          <p className="mx-auto mb-8 max-w-3xl">
            You are not hiring someone learning on your facility. You are
            working with a local expert who understands Kansas and Missouri pest
            pressure, seasonal rodent patterns, and the vulnerabilities common
            to warehouse and logistics environments.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-allstarBlueLight px-6 py-3 font-semibold text-black transition hover:bg-allstarBlueLight"
            >
              Schedule Warehouse Assessment
            </Link>

            <a
              href="tel:+19137387827"
              className="rounded-md bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
            >
              Call (913) 738-7827
            </a>
          </div>
        </section>
      </main>
    </>
  );
}




