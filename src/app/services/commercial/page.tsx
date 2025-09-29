import Link from "next/link";

export default function CommercialServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        Commercial Pest Control in Kansas City
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        Your business needs more than just pest control — it needs protection, discretion, and compliance. All Star Pest Solutions serves Kansas City’s commercial sector with tailored treatment plans, detailed reporting, and flexible scheduling.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Professional Services for Businesses</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-800">
          <li>Frequent exterior perimeter treatments with tight interval scheduling</li>
          <li>Interior monitoring, device mapping, and trend reporting available</li>
          <li>Custom programs for food-service, hospitality, and multi-unit properties</li>
          <li>After-hours and weekend service windows to avoid customer disruption</li>
          <li>Fully licensed, insured, and compliant with health code regulations</li>
        </ul>
      </section>

      <div className="mt-10">
        <Link href="/contact" className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded">
          Request a Business Inspection
        </Link>
      </div>
    </main>
  );
}

