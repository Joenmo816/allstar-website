import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pest Control in Overland Park, KS | Exterminator Services | All Star Pest Solutions",
  description:
    "Expert residential and commercial pest control services in Overland Park, KS. Ant control, termite treatment, rodent removal, and preventative pest plans. Call (913) 738-7827 today.",
  keywords: [
    "Pest Control Overland Park KS",
    "Exterminator Overland Park",
    "Termite Treatment Overland Park",
    "Rodent Control Overland Park",
    "Ant Control Overland Park KS"
  ],
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">

      {/* HERO SECTION */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Professional Pest Control in Overland Park, KS
        </h1>

        <p className="text-gray-700 max-w-3xl mx-auto">
          All Star Pest Solutions provides reliable residential and commercial
          pest control services in Overland Park, Kansas. Our licensed
          technicians eliminate ants, spiders, termites, rodents, wasps,
          and other common pests using safe and effective treatment solutions.
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
          Our Pest Control Services in Overland Park
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li>✔ General Pest Control Treatments</li>
          <li>✔ Ant & Spider Extermination</li>
          <li>✔ Rodent Removal & Exclusion Services</li>
          <li>✔ Termite Inspections & Treatment Plans</li>
          <li>✔ Wasp & Hornet Nest Removal</li>
          <li>✔ Quarterly Preventative Maintenance Programs</li>
        </ul>
      </section>

      {/* WHY CHOOSE US */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Why Homeowners in Overland Park Choose Us
        </h2>

        <p className="text-gray-700">
          We are a locally trusted pest control company serving Overland Park
          and surrounding Johnson County communities. Our team focuses on
          long-term prevention, detailed inspections, and customized treatment
          plans to protect your home or business year-round.
        </p>
      </section>

      {/* INTERNAL LINKING */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Nearby Service Areas
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-blue-600">
          <Link href="/kansas-city">Kansas City</Link>
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
          <Link href="/loch-lloyd">Loch Lloyd</Link>
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
              name: "Overland Park",
              addressRegion: "KS"
            },
            url: "https://allstarpestkc.com/overland-park"
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
                name: "What pests are common in Overland Park, KS?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Common pests in Overland Park include ants, spiders, termites, rodents, and wasps."
                }
              },
              {
                "@type": "Question",
                name: "Do you offer recurring pest control services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we offer quarterly preventative pest control plans to keep your property protected year-round."
                }
              }
            ]
          }),
        }}
      />

    </main>
  );
}