import React from "react";

export default function CommercialServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        Commercial Pest Control
      </h1>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Safe, Effective Pest Control for Businesses
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          At All Star Pest Solutions, we understand that pests in your workplace
          can harm your reputation, your employees, and your customers. That’s
          why our <strong>eco-friendly treatments</strong> are designed to be{" "}
          <strong>safe, discreet, and effective</strong> for{" "}
          <strong>restaurants, hotels, offices, and other businesses</strong>.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-800 mb-8">
          <li>
            Protection against ants, cockroaches, rodents, flies, spiders, and
            more.
          </li>
          <li>
            <strong>Discreet scheduling</strong> to minimize disruption to your
            business operations.
          </li>
          <li>
            <strong>Sanitation & prevention strategies</strong> tailored to your
            industry needs.
          </li>
          <li>
            <strong>Termite inspections & treatments</strong> using 
            <strong> Termidor®</strong>—the gold standard trusted by professionals 
            for proven, long-lasting protection.
          </li>
          <li>
            <strong>Ongoing service plans</strong> to keep your facility
            pest-free year-round.
          </li>
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