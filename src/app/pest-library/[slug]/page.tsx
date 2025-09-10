import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { pests } from "@/data/pests";

export function generateStaticParams() {
  return pests.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const pest = pests.find(p => p.slug === params.slug);
  if (!pest) return { title: "Pest not found | All Star Pest Solutions" };
  const title = `${pest.title} | Pest ID & Treatment | All Star Pest Solutions KC`;
  const desc =
    pest.appearance?.length ? pest.appearance :
    `Learn how to identify and prevent ${pest.title} in Kansas City homes.`;
  const img = pest.image || "/images/og-default.jpg";
  const url = `https://www.allstarpestkc.com/pest-library/${pest.slug}`;
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      images: [img],
      type: "article",
    },
  };
}

export default function PestPage({ params }: { params: { slug: string } }) {
  const pest = pests.find(p => p.slug === params.slug);
  if (!pest) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${pest.title} — Identification & Control`,
    description: pest.appearance || `How to identify and prevent ${pest.title}.`,
    image: pest.image ? [`https://www.allstarpestkc.com${pest.image}`] : [],
    mainEntityOfPage: `https://www.allstarpestkc.com/pest-library/${pest.slug}`,
    author: { "@type": "Organization", name: "All Star Pest Solutions" },
  };

  return (
    <article className="px-6 py-10 max-w-3xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold">{pest.title}</h1>
      {pest.scientificName && (
        <p className="italic text-gray-600">Scientific name: {pest.scientificName}</p>
      )}

      <div className="relative mt-4 aspect-[4/3] rounded-xl overflow-hidden">
        <Image src={pest.image} alt={pest.title} fill sizes="100vw" />
      </div>

      {/* 1) Core Identification */}
      {(pest.appearance || pest.scientificName) && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Core Identification</h2>
          {pest.appearance && <p>{pest.appearance}</p>}
        </section>
      )}

      {/* 2) Biology & Behavior */}
      {(pest.habitat || pest.diet || pest.lifeCycle || pest.behavior) && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Biology & Behavior</h2>
          {pest.habitat && <p><strong>Habitat:</strong> {pest.habitat}</p>}
          {pest.diet && <p><strong>Diet:</strong> {pest.diet}</p>}
          {pest.lifeCycle && <p><strong>Life Cycle:</strong> {pest.lifeCycle}</p>}
          {pest.behavior && <p><strong>Behavior:</strong> {pest.behavior}</p>}
        </section>
      )}

      {/* 3) Signs of Infestation */}
      {!!pest.signs?.length && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Signs of Infestation</h2>
          <ul className="list-disc pl-6">
            {pest.signs.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </section>
      )}

      {/* 4) Health & Property Risks */}
      {(!!pest.healthRisks?.length || !!pest.propertyRisks?.length) && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Health & Property Risks</h2>
          {!!pest.healthRisks?.length && (
            <>
              <h3 className="font-semibold">Health Hazards</h3>
              <ul className="list-disc pl-6">
                {pest.healthRisks.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </>
          )}
          {!!pest.propertyRisks?.length && (
            <>
              <h3 className="font-semibold mt-4">Property Damage</h3>
              <ul className="list-disc pl-6">
                {pest.propertyRisks.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </>
          )}
        </section>
      )}

      {/* 5) Prevention & DIY Solutions */}
      {!!pest.prevention?.length && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Prevention & DIY Solutions</h2>
          <ul className="list-disc pl-6">
            {pest.prevention.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </section>
      )}

      {/* 6) When to Call a Professional */}
      <section className="mt-8 bg-yellow-100 border border-yellow-300 p-4 rounded-xl">
        <h2 className="text-xl font-bold">When to Call a Professional</h2>
        <p>{pest.callToAction}</p>
        <div className="mt-3 flex gap-3">
          <a href="tel:+19137387827" className="inline-flex items-center rounded-lg px-4 py-2 bg-green-600 text-white hover:bg-green-700">Call (913) 738-STAR</a>
          <a href="/contact" className="inline-flex items-center rounded-lg px-4 py-2 bg-red-600 text-white hover:bg-red-700">Schedule a Free Inspection</a>
        </div>
      </section>
    </article>
  );
}
