import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        Pest Control Services in Kansas City
      </h1>

      <p className="text-lg text-gray-700 mb-8">
        All Star Pest Solutions offers professional, eco-friendly pest control throughout the Kansas City metro area.
        Whether you're protecting your home or business, our licensed team delivers safe and effective solutions with guaranteed results.
      </p>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Residential Pest Control
          </h2>
          <p className="text-gray-700 mb-2">
            Keep your family safe with our child- and pet-friendly treatments. We treat for ants, roaches, spiders, rodents, termites, and more — no mandatory contracts.
          </p>
          <Link href="/services/residential" className="text-blue-600 underline font-medium">
            Learn more about residential pest control →
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Commercial Pest Control
          </h2>
          <p className="text-gray-700 mb-2">
            Protect your reputation and workspace with ongoing pest prevention plans customized for offices, restaurants, warehouses, and more.
          </p>
          <Link href="/services/commercial" className="text-blue-600 underline font-medium">
            Explore commercial pest solutions →
          </Link>
        </div>
      </section>

      <div className="mt-10">
        <Link href="/contact" className="inline-block rounded bg-green-700 text-white font-semibold px-6 py-3">
          Request a Free Quote
        </Link>
      </div>
    </main>
  );
}
