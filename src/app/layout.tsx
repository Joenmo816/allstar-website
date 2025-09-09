import "./globals.css";
import type { ReactNode } from "react";
import Header from "../components/Header";

export const metadata = {
  title: "All Star Pest Solutions",
  description: "Kansas City Metro pest control. Guaranteed Service. Guaranteed Results."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
