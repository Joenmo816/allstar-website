import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "All Star Pest Solutions | KC Pest Control Experts - Safe & Guaranteed",
  description:
    "The Bugman for over 25 years, eco-smart treatments for homes & businesses. BBB accredited, state-certified, and no mandatory contracts!"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="YOUR_VERIFICATION_CODE_HERE"
        />

        {/* ✅ Structured Data for Local Business (SEO Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PestControl",
              "name": "All Star Pest Solutions",
              "image": "https://allstarpestkc.com/logo.png",
              "address": {
                "@ty
