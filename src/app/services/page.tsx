import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Services</h1>
      <p className="text-gray-700 mb-6">
        KC’s Bugman — Over 28 years protecting KC homes & businesses with eco-smart treatments.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mb-10">
        <Link href="/plans" className="block rounded-2xl border p-6 hover:shadow transition">
          <h2 className="text-lg font-semibold">Plans & Programs</h2>
          <p className="text-gray-700">Quarterly & monthly options, one-time treatments.</p>
        </Link>
        <Link href="/guarantee" className="block rounded-2xl border p-6 hover:shadow transition">
          <h2 className="text-lg font-semibold">Our Guarantee</h2>
          <p className="text-gray-700">If pests return, so do we — at no extra cost.</p>
        </Link>
        <Link href="/pests/coverage" className="block rounded-2xl border p-6 hover:shadow transition">
          <h2 className="text-lg font-semibold">Pest Coverage</h2>
          <p className="text-gray-700">25+ common pests covered; specialty add-ons available.</p>
        </Link>
        <Link href="/pricing" className="block rounded-2xl border p-6 hover:shadow transition">
          <h2 className="text-lg font-semibold">Pricing & Cost</h2>
          <p className="text-gray-700">Transparent ranges & what affects price.</p>
        </Link>
        <Link href="/learn" className="block rounded-2xl border p-6 hover:shadow transition">
          <h2 className="text-lg font-semibold">Learn Center</h2>
          <p className="text-gray-700">Signs, prevention tips, and how our process works.</p>
        </Link>
        <Link href="/contact" className="block rounded-2xl border p-6 hover:shadow transition">
          <h2 className="text-lg font-semibold">Free Inspection</h2>
          <p className="text-gray-700">We’ll assess and tailor a plan to your property.</p>
        </Link>
      </div>
    </main>
  );
}