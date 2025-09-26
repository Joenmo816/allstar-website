import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — All Star Pest Solutions"
};

export default function Services() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <ul className="grid gap-4 md:grid-cols-2">
        <li className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">General Pest Control</h2>
          <p className="text-gray-700 mb-3">Quarterly & one-time treatments for ants, spiders, roaches and more.</p>
          <Link className="text-brandBlue font-semibold" href="/services/general-pest">Learn more →</Link>
        </li>
        <li className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Termite Inspections & Treatments</h2>
          <p className="text-gray-700 mb-3">Certified inspections and proven treatment options.</p>
          <Link className="text-brandBlue font-semibold" href="/contact">Ask about termites →</Link>
        </li>
      </ul>
    </main>
  );
}