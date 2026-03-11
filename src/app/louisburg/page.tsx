import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pest Control in Louisburg, KS | All Star Pest Solutions",
  description:
    "Professional pest control services in Louisburg, KS. Residential and commercial extermination services. Call (913) 738-7827 today.",
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">

      {/* HERO SECTION */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Pest Control in Louisburg, KS
        </h1>

        <p className="text-gray-700 max-w-3xl mx-auto">
          All Star Pest Solutions provides expert residential and commercial
          pest control services in Louisburg, Kansas. We eliminate ants,
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
          Our Pest Control Services in Louisburg
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
              name: "Louisburg",
              addressRegion: "KS"
            },
            url: "https://allstarpestkc.com/kansas-city"
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
                name: "What pests are common in Louisburg, KS?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Common pests in Louisburg include ants, spiders, termites, rodents, and wasps."
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

<h2 className='text-2xl font-bold mt-12'>
<h2 className="text-3xl font-bold mb-6 text-center">Other Cities We Service</h2>

<ul>
<li><a href='/louisburg-louisburg-ks'>louisburg in louisburg-ks</a></li>
<li><a href='/louisburg-paola-ks'>louisburg in paola-ks</a></li>
<li><a href='/louisburg-osawatomie-ks'>louisburg in osawatomie-ks</a></li>
<li><a href='/louisburg-spring-hill-ks'>louisburg in spring-hill-ks</a></li>
<li><a href='/louisburg-stilwell-ks'>louisburg in stilwell-ks</a></li>
<li><a href='/louisburg-overland-park-ks'>louisburg in overland-park-ks</a></li>
<li><a href='/louisburg-olathe-ks'>louisburg in olathe-ks</a></li>
<li><a href='/louisburg-prairie-village-ks'>louisburg in prairie-village-ks</a></li>
<li><a href='/louisburg-leawood-ks'>louisburg in leawood-ks</a></li>
<li><a href='/louisburg-peculiar-mo'>louisburg in peculiar-mo</a></li>
<li><a href='/louisburg-freeman-mo'>louisburg in freeman-mo</a></li>
<li><a href='/louisburg-harrisonville-mo'>louisburg in harrisonville-mo</a></li>
<li><a href='/louisburg-drexel-mo'>louisburg in drexel-mo</a></li>
<li><a href='/louisburg-cleveland-mo'>louisburg in cleveland-mo</a></li>
<li><a href='/louisburg-loch-lloyd-mo'>louisburg in loch-lloyd-mo</a></li>
<li><a href='/louisburg-belton-mo'>louisburg in belton-mo</a></li>
<li><a href='/louisburg-raymore-mo'>louisburg in raymore-mo</a></li>
<li><a href='/louisburg-grandview-mo'>louisburg in grandview-mo</a></li>

</ul>



