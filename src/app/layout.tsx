import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "All Star Pest Solutions",
  description: "KC’s Bugman — Over 28 Years of Local Experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body className="min-h-screen flex flex-col">
        <div className="flex-grow">{children}</div>
        <footer className="border-t mt-10">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} All Star Pest Solutions. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}