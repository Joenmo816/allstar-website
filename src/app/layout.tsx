import Footer from "@/app/components/Footer";
// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Star Pest Solutions",
  description: "Local pest control experts in Kansas City. Guaranteed Service. Guaranteed Results.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Site Verification (optional) */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_TOKEN" />
      </head>
      <body className="bg-white text-gray-900">
        {children}
          <Footer />`r`n  </body>
    </html>
  );
}





