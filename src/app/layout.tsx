import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.allstarpestkc.com"),
  title: {
    default: "All Star Pest Solutions | South Kansas City Experts",
    template: "%s | All Star Pest Solutions",
  },
  description:
    "All Star Pest Solutions provides residential, commercial and termite services throughout South Kansas City. 30+ years experience. Licensed in Kansas and Missouri.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "All Star Pest Solutions",
    description:
      "South Kansas City's trusted pest solutions provider with 30+ years experience.",
    url: "https://www.allstarpestkc.com",
    siteName: "All Star Pest Solutions",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "All Star Pest Solutions logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const sitewideStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.allstarpestkc.com/#organization",
      name: "All Star Pest Solutions",
      url: "https://www.allstarpestkc.com",
      logo: "https://www.allstarpestkc.com/logo.png",
      image: "https://www.allstarpestkc.com/logo.png",
      email: "info@allstarpestkc.com",
      telephone: "+1-913-738-7827",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.allstarpestkc.com/#localbusiness",
      name: "All Star Pest Solutions",
      url: "https://www.allstarpestkc.com",
      image: "https://www.allstarpestkc.com/logo.png",
      email: "info@allstarpestkc.com",
      telephone: "+1-913-738-7827",
      priceRange: "$$",
      description:
        "All Star Pest Solutions is a locally owned pest solutions company serving South Kansas City and surrounding communities with residential, commercial, and termite services.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "210 W. Cleveland St",
        addressLocality: "Cleveland",
        addressRegion: "MO",
        postalCode: "64734",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Johnson County, KS" },
        { "@type": "AdministrativeArea", name: "Miami County, KS" },
        { "@type": "AdministrativeArea", name: "Cass County, MO" },
        { "@type": "AdministrativeArea", name: "Jackson County, MO" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+1-913-738-7827",
          areaServed: ["KS", "MO"],
          availableLanguage: ["English"],
        },
      ],
      parentOrganization: {
        "@id": "https://www.allstarpestkc.com/#organization",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.allstarpestkc.com/#website",
      url: "https://www.allstarpestkc.com",
      name: "All Star Pest Solutions",
      publisher: {
        "@id": "https://www.allstarpestkc.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          id="sitewide-identity-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sitewideStructuredData),
          }}
        />
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}