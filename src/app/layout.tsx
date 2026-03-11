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
      <body className="bg-white">

        {/* Local Business Review Schema */}
        <Script
          id="review-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "All Star Pest Solutions",
              url: "https://www.allstarpestkc.com",
              telephone: "+1-913-738-7827",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "87",
              },
            }),
          }}
        />

        {/* Header */}
        <SiteHeader />

        {/* Main Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* Floating Phone Button */}
        <a
          href="tel:19137387827"
          className="fixed bottom-6 right-6 bg-yellow-400 text-red-700 font-bold px-6 py-3 rounded-full shadow-lg z-50 hover:scale-105 transition"
        >
          Call (913) 738-STAR
        </a>

      </body>
    </html>
  );
}