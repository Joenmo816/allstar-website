import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "All Star Pest Solutions | KC Family-Owned Pest Control",
    template: "%s | All Star Pest Solutions",
  },
  description:
    "KC family-owned pest control. Professional residential & commercial services across the Kansas City metro.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-dvh flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}