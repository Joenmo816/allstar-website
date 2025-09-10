import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spider Identification Chart (Free Download) | All Star Pest Solutions KC",
  description: "Free, printable spider ID chart for Kansas City homes. Download the JPG or share this page.",
  alternates: { canonical: "/resources/spider-chart" },
  openGraph: {
    title: "Spider Identification Chart — All Star Pest Solutions",
    description: "Free, printable spider ID chart for KC homeowners.",
    images: ["/downloads/spider-identification-chart.jpg"],
    type: "article",
  },
};

export default function Page() {
  return (
    <main className="px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Spider Identification Chart (Free Download)</h1>
      <p className="mt-2 text-gray-600">
        Print or share this chart. Need help ID’ing a spider? Call (913) 738-STAR.
      </p>

      <div className="mt-6 rounded-xl overflow-hidden shadow">
        <Image
          src="/downloads/spider-identification-chart.jpg"
          alt="Spider Identification Chart - All Star Pest Solutions"
          width={1600}
          height={2067}
          priority
        />
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href="/api/download/spider-chart"
          className="inline-flex items-center rounded-lg px-4 py-2 bg-blue-600 text-white font-medium shadow hover:bg-blue-700"
        >
          Download JPG
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-lg px-4 py-2 bg-red-600 text-white font-medium shadow hover:bg-red-700"
        >
          Schedule a Free Inspection
        </Link>
      </div>
    </main>
  );
}
