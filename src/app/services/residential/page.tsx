import Link from "next/link";

export default function ResidentialServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        Residential Pest Control in Kansas City
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        Protect your home and loved ones year-round with eco-smart pest control from All Star Pest Solutions.
        Our family-safe methods have been trusted by Kansas City homeowners for over 25 years.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          What We Treat
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Ants</li>
          <li>Spiders (including brown recluse & black widow)</li>
          <li>Wasps & stinging insects</li>
          <li>Roaches & silverfish</li>
          <li>Mice & rodents</li>
          <li>Fleas & ticks</li>
          <li>Centipedes, millipedes, and more</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Why Choose All Star?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>No required contracts — just results</li>
          <li>Certified in both Kansas & Missouri</li>
          <li>Eco-friendly and safe for kids & pets</li>
          <li>Local experts with over 28 years of experience</li>
          <li>BBB Accredited & highly rated</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Service Plans Available
        </h2>
        <p className="text-gray-700 mb-4">
          Whether you need one-time help or year-round protection, we’ve got a plan that fits your needs.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>One-time treatments</li>
          <li>Quarterly maintenance</li>
          <li>Bi-monthly or monthly plans for high-need homes</li>
        </ul>
      </section>

      <div className="text-center mt-12">
        <Link
          href="/contact"
          className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
        >
          Schedule Your Free Inspection
        </Link>
      </div>
    </main>
  );
}
