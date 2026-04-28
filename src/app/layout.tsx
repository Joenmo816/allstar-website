import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import StickyContact from "@/components/StickyContact";

export const metadata: Metadata = {
  title: "All Star Pest Solutions | Kansas City Pest Control",
  description:
    "All Star Pest Solutions provides local pest control, termite inspections, ant control, spider control, rodent control, and eco-conscious pest services in the Kansas City area.",
  metadataBase: new URL("https://allstarpestkc.com"),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "All Star Pest Solutions",
  image: "https://allstarpestkc.com/logo-header-v2.png",
  url: "https://allstarpestkc.com",
  telephone: "+1-913-738-7827",
  address: {
    "@type": "PostalAddress",
    streetAddress: "210 W. Cleveland St",
    addressLocality: "Cleveland",
    addressRegion: "MO",
    postalCode: "64734",
    addressCountry: "US",
  },
  areaServed: "Kansas City Metro",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <StickyContact />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
