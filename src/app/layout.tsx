import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.allstarpestkc.com"),
  title: { default: "All Star Pest Solutions", template: "%s | All Star Pest Solutions" },
  description: "Kansas City Metro pest control. Guaranteed Service. Guaranteed Results."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
