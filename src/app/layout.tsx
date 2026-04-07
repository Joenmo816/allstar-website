import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";

const siteUrl = "https://allstarpestkc.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "All Star Pest Solutions | South Kansas City Experts",
    template: "%s | All Star Pest Solutions",
  },
  description:
    "All Star Pest Solutions provides residential, commercial, and termite services throughout the South Kansas City Metro Area. Over 30 years of experience. Licensed in Kansas and Missouri.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "All Star Pest Solutions",
    description:
      "Serving the South Kansas City Metro Area with residential, commercial, and termite services backed by over 30 years of experience.",
    url: siteUrl,
    siteName: "All Star Pest Solutions",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "All Star Pest Solutions logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Star Pest Solutions",
    description:
      "Serving the South Kansas City Metro Area with residential, commercial, and termite services backed by over 30 years of experience.",
    images: [`${siteUrl}/logo.png`],
  },
};

const sitewideStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "All Star Pest Solutions",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/logo.png`,
      email: "info@allstarpestkc.com",
      telephone: "+1-913-738-7827",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "All Star Pest Solutions",
      url: siteUrl,
      image: `${siteUrl}/logo.png`,
      email: "info@allstarpestkc.com",
      telephone: "+1-913-738-7827",
      priceRange: "$$",
      description:
        "All Star Pest Solutions is a locally owned pest solutions company serving the South Kansas City Metro Area with residential, commercial, and termite services.",
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
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "All Star Pest Solutions",
      publisher: {
        "@id": `${siteUrl}/#organization`,
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
        <Analytics />
      </body>
    </html>
  );
}