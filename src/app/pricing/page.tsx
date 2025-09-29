import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
        Pest Control Pricing
      </h1>

      <p className="text-lg text-gray-700 mb-10 text-center">
        At All Star Pest Solutions, we believe in transparent, straightforward pricing.
        No hidden fees, no mandatory contracts — just reliable service at a fair price.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* General Pest Control */}
        <div className="border rounded-lg shadow-sm bg-white p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
            General Pest Control
          </h2>
          <p className="text-gray-600 mb-4 text-center">
            Protection against ants, spiders, roaches, crickets, and more.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Interior + Exterior Treatment</li>
            <li>Child & Pet Safe Solutions</li>
            <li>Seasonal Protection Plans</li>
          </ul>
          <p className="text-lg font-bold text-center text-green-700 mb-4">
            Starting at $89
          </p>
        </div>

        {/* Termite Treatments */}
        <div className="border rounded-lg shadow-sm bg-white p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
            Termite Services
          </h2>
          <p className="text-gray-600 mb-4 text-center">
            Inspections and treatments using Termidor® — the most trusted name in termite protection.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>FHA/VA & Refinance Inspections</li>
            <li>Comprehensive Barrier Protection</li>
            <li>Guaranteed Results</li>
          </ul>
          <p className="text-lg font-bold text-center text-green-700 mb-4">
            Inspections: $85 <br /> Treatment: Custom Quote
          </p>
        </div>

        {/* Commercial Plans */}
        <div className="border rounded-lg shadow-sm bg-white p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
            Commercial Plans
          </h2>
          <p className="text-gray-600 mb-4 text-center">
            Safe, effective pest management for restaurants, hotels, offices, and more.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Custom Service Plans</li>
            <li>Eco-Friendly Treatments</li>
            <li>Discreet & Professional</li>
          </ul>
          <p className="text-lg font-bold text-center text-green-700 mb-4">
            Custom Pricing
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-block rounded bg-green-700 text-white font-semibold px-6 py-3 hover:bg-green-800 transition-colors"
        >
          Request a Free Quote
        </Link>
      </div>
    </main>
  );
}
