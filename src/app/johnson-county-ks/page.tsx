import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pest Control in Johnson County, KS | Exterminator Services | All Star Pest Solutions",
  description:
    "Professional residential and commercial pest control in Johnson County, Kansas. Serving Overland Park, Olathe, Lenexa, Leawood, and surrounding areas. Call (913) 738-7827 today.",
  keywords: [
    "Pest Control Johnson County KS",
    "Exterminator Johnson County Kansas",
    "Termite Treatment Johnson County",
    "Rodent Control Johnson County",
    "Ant Control Johnson County KS"
  ],
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">

      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Pest Control in Johnson County, Kansas
        </h1>

        <p className="text-gray-700 max-w-3xl mx-auto">
          All Star Pest Solutions provides expert residential and commercial
          pest control services throughout Johnson County, KS. Our licensed
          technicians eliminate ants, spiders, termites, rodents, wasps,
          and other common pests using safe and effective treatment methods.
        </p>

        <a
          href="tel:+19137387827"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Call (913) 738-7827
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          Cities We Serve in Johnson County
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-blue-600">
          <Link href="/overland-park">Overland Park</Link>
          <Link href="/olathe">Olathe</Link>
          <Link href="/lenexa">Lenexa</Link>
          <Link href="/leawood">Leawood</Link>
          <Link href="/stillwell">Stillwell</Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          Comprehensive Pest Protection
        </h2>

        <p className="text-gray-700">
          We focus on long-term prevention, detailed inspections, and customized
          treatment plans tailored to Kansas homes and businesses.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Pest Control Services in Johnson County, KS",
            provider: {
              "@type": "LocalBusiness",
              name: "All Star Pest Solutions",
              telephone: "+1-913-738-7827",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Johnson County, Kansas"
            },
            url: "https://www.allstarpestkc.com/johnson-county-ks"
          }),
        }}
      />

    </main>
  );
}