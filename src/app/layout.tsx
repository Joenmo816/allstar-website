import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";
import DesktopCallBar from "./components/DesktopCallBar";
import { smsHref } from "@/data/business-links";

const siteUrl = "https://allstarpestkc.com";
const googleAnalyticsId = "G-GR320GYWQM";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "All Star Pest Solutions | South Kansas City Pest Control",
    template: "%s | All Star Pest Solutions",
  },
  description:
    "Owner-operated pest solutions in the South Kansas City metro. Free inspections, no contracts, starting at $89, guaranteed re-service, and 30+ Years of Experience.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-v2.ico" },
      { url: "/icon-v2.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: ["/favicon-v2.ico"],
    apple: [
      { url: "/apple-icon-v2.png", type: "image/png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "All Star Pest Solutions",
    description:
      "Free inspections, no contracts, guaranteed re-service, and owner-operated pest solutions across the South Kansas City metro.",
    url: siteUrl,
    siteName: "All Star Pest Solutions",
    images: [
      {
        url: `${siteUrl}/social-review.png`,
        width: 1200,
        height: 630,
        alt: "All Star Pest Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Star Pest Solutions",
    description:
      "Owner-operated pest solutions serving Kansas and Missouri with free inspections, no contracts, and guaranteed results.",
    images: [`${siteUrl}/social-review.png`],
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
      logo: `${siteUrl}/social-review.png`,
      image: `${siteUrl}/social-review.png`,
      email: "info@allstarpestkc.com",
      telephone: "+1-(913) 738-7827",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "All Star Pest Solutions",
      url: siteUrl,
      image: `${siteUrl}/social-review.png`,
      email: "info@allstarpestkc.com",
      telephone: "+1-(913) 738-7827",
      priceRange: "$$",
      description:
        "All Star Pest Solutions is an owner-operated pest solutions company serving Johnson County, Miami County, Cass County, and Jackson County with residential, commercial, termite, rodent, ant, spider, cockroach, mosquito, and real estate termite inspection services.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "210 W. Cleveland St",
        addressLocality: "Cleveland",
        addressRegion: "MO",
        postalCode: "64734",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Belton, MO" },
        { "@type": "City", name: "Bucyrus, KS" },
        { "@type": "City", name: "Cleveland, MO" },
        { "@type": "City", name: "Drexel, MO" },
        { "@type": "City", name: "Freeman, MO" },
        { "@type": "City", name: "Grandview, MO" },
        { "@type": "City", name: "Harrisonville, MO" },
        { "@type": "City", name: "Leawood, KS" },
        { "@type": "City", name: "Loch Lloyd, MO" },
        { "@type": "City", name: "Louisburg, KS" },
        { "@type": "City", name: "Olathe, KS" },
        { "@type": "City", name: "Overland Park, KS" },
        { "@type": "City", name: "Paola, KS" },
        { "@type": "City", name: "Peculiar, MO" },
        { "@type": "City", name: "Raymore, MO" },
        { "@type": "City", name: "South Kansas City, MO" },
        { "@type": "City", name: "Spring Hill, KS" },
        { "@type": "AdministrativeArea", name: "Johnson County, KS" },
        { "@type": "AdministrativeArea", name: "Miami County, KS" },
        { "@type": "AdministrativeArea", name: "Cass County, MO" },
        { "@type": "AdministrativeArea", name: "Jackson County, MO" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+1-(913) 738-7827",
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

function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] grid grid-cols-3 border-t border-white/20 bg-allstarInk text-center shadow-2xl md:hidden">
      <a href="tel:+19137387827" className="px-2 py-3 text-sm font-black text-white">
        Call Now
      </a>

      <a href={smsHref} className="border-x border-white/20 px-2 py-3 text-sm font-black text-white">
        Text Photo
      </a>

      <a href="/contact" className="px-2 py-3 text-sm font-black text-white">
        Free Quote
      </a>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </head>

      <body className="pb-12 md:pb-0">
        <Script
          id="sitewide-identity-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sitewideStructuredData),
          }}
        />

        <DesktopCallBar />
        <SiteHeader />

        {children}

        <Footer />
        <StickyMobileCta />
        <Analytics />
      </body>
    </html>
  );
}


