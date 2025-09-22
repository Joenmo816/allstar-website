import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactBar from "@/components/FloatingContactBar";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "All Star Pest Solutions",
  description: "Guaranteed Service, Guaranteed Results.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon-32x32.png",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "PestControl",
  "name": "All Star Pest Solutions",
  "url": "https://www.example.com",
  "telephone": "(XXX) XXX-XXXX",
  "logo": "/logo.png",
  "image": "/images/kc.jpg",
  "areaServed": "Kansas City, MO"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-800">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <FloatingContactBar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
