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
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          id="review-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "All Star Pest Solutions",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "87",
              },
            }),
          }}
        />
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}