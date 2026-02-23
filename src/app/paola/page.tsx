import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pest Control in Kansas City, MO | All Star Pest Solutions",
  description:
    "Professional pest control services in Kansas City, MO. Residential and commercial extermination services. Call (913) 738-7827 today.",
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">

      {/* HERO SECTION */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Pest Control in Kansas City, MO
        </h1>

        <p className="text-gray-700 max-w-3xl mx-auto">
          All Star Pest Solutions provides expert residential and commercial
          pest control services in Kansas City, Missouri. We eliminate ants,
          spiders, termites, rodents, wasps, and more using safe and effective
          treatment methods.
        </p>

        <a
          href="tel:+19137387827"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Call (913) 738-7827
        </a>
      </section>

      {/* SERVICES SECTION */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Our Pest Control Services in Kansas City
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li>✔ General Pest Control</li>
          <li>✔ Ant & Spider Treatments</li>
          <li>✔ Rodent Control & Exclusion</li>
          <li>✔ Termite Inspections & Treatments</li>
          <li>✔ Wasp & Hornet Removal</li>
          <li>✔ Quarterly Maintenance Plans</li>
        </ul>
      </section>

      {/* INTERNAL LINKING SECTION */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Nearby Service Areas
        </h2>

<div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-blue-600">
  <Link href="/kansas-city">Kansas City</Link>
  <Link href="/overland-park">Overland Park</Link>
  <Link href="/olathe">Olathe</Link>
  <Link href="/lenexa">Lenexa</Link>
  <Link href="/leawood">Leawood</Link>
  <Link href="/raymore">Raymore</Link>
  <Link href="/belton">Belton</Link>
  <Link href="/spring-hill">Spring Hill</Link>
  <Link href="/stillwell">Stillwell</Link>
  <Link href="/grandview">Grandview</Link>
  <Link href="/harrisonville">Harrisonville</Link>
  <Link href="/louisburg">Louisburg</Link>
  <Link href="/paola">Paola</Link>
  <Link href="/osawatomie">Osawatomie</Link>
  <Link href="/cleveland">Cleveland</Link>
  <Link href="/drexel">Drexel</Link>
  <Link href="/peculiar">Peculiar</Link>
  <Link href="/freeman">Freeman</Link>
</div>
      </section>

      {/* LOCAL BUSINESS SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "All Star Pest Solutions",
            telephone: "+1-913-738-7827",
            areaServed: {
              "@type": "City",
              name: "Paola",
              addressRegion: "MO"
            },
            url: "https://allstarpestkc.com/paola"
          }),
        }}
      />

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What pests are common in Kansas City, MO?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Common pests in Kansas City include ants, spiders, termites, rodents, and wasps."
                }
              },
              {
                "@type": "Question",
                name: "Do you offer recurring pest control services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we offer quarterly preventative pest control plans to keep your home protected year-round."
                }
              }
            ]
          }),
        }}
      />

    </main>
  );
}