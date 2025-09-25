import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "All Star Pest Solutions — Guaranteed Service, Guaranteed Results.",
  description: "Kansas City pest control that’s eco-smart, kid & pet friendly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning handles minor whitespace/emoji differences */}
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <Header />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

