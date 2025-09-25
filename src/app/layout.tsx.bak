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
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: ["/favicon-32x32.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-800">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <FloatingContactBar />
      </body>
    </html>
  );
}