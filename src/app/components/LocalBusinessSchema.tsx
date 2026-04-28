import Script from "next/script";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PestControl",
    name: "All Star Pest Solutions",
    url: "https://allstarpestkc.com",
    telephone: "+19137387827",
    email: "info@allstarpestkc.com",
    slogan: "Guaranteed Service. Guaranteed Results.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "210 W. Cleveland St",
      addressLocality: "Cleveland",
      addressRegion: "MO",
      postalCode: "64734",
      addressCountry: "US"
    },
    areaServed: [
      "Kansas City MO",
      "Overland Park KS",
      "Leawood KS",
      "Stilwell KS",
      "Belton MO",
      "Raymore MO",
      "Harrisonville MO",
      "Louisburg KS",
      "Peculiar MO",
      "Paola KS",
      "Spring Hill KS",
      "Cleveland MO",
      "Lee's Summit MO"
    ],
    serviceType: [
      "Termite Inspection",
      "Pest Control",
      "Carpenter Ant Treatment",
      "Spider Control",
      "Rodent Control",
      "Cockroach Control",
      "Bed Bug Treatment",
      "Mosquito Control"
    ]
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
