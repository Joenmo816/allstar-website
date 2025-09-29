import React from "react";

export default function ResidentialServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        Residential Pest Control
      </h1>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Safe, Eco-Friendly Pest Control for Kansas City Homes
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          At All Star Pest Solutions, we specialize in protecting Kansas City
          homes with <strong>safe, eco-friendly pest control</strong>. Our
          treatments are always <strong>child and pet-safe</strong>, while
          ensuring <strong>long-lasting results</strong>.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-800 mb-8">
          <li>
            We provide <strong>solutions, not excuses</strong> for ants, bed
            bugs, cockroaches, fleas, mice, spiders, and more!
          </li>
          <li>Treatments centered around your needs.</li>
          <li>
            <strong>FHA/VA and refinance termite inspections</strong>. 
            Our termite treatments feature <strong>Termidor®</strong>—the gold standard 
            trusted by professionals for proven, long-lasting protection.
          </li>
          <li>Seasonal protection plans available.</li>
        </ul>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <a
            href="tel:+19137387827"
            className="inline-flex items-center justify-center rounded-2xl border border-green-700 px-5 py-3 font-semibold text-green-800 hover:bg-green-50 transition"
          >
            Call (913) 738-STAR
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800 transition"
          >
            Request a Free Estimate
          </a>
        </div>
      </section>
    </main>
  );
}