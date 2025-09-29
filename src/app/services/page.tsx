import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        Pest Control Services in Kansas City
      </h1>

      <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        All Star Pest Solutions offers professional, eco-friendly pest control
        throughout the Kansas City metro area. Whether you&apos;re protecting your
        home or your business, our licensed team delivers safe, effective
        treatments with guaranteed results.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Residential Services Card */}
        <div className="rounded-2xl border shadow-sm hover:shadow-md transition overflow-hidden">
          <Image
            src="/images/services/residential.jpg"
            alt="Residential Pest Control"
            width={800}
            height={500}
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Residential Pest Control
            </h2>
            <p className="text-gray-700 mb-4">
              Keep your family safe with our child- and pet-friendly treatments.
              We treat ants, roaches, spiders, rodents, termites, and more—no
              mandatory contracts.
            </p>
            <Link
              href="/services/residential"
              className="inline-block rounded-lg bg-green-600 px-5 py-2 text-white font-semibold hover:bg-green-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Commercial Services Card */}
        <div className="rounded-2xl border shadow-sm hover:shadow-md transition overflow-hidden">
          <Image
            src="/images/services/commercial.jpg"
            alt="Commercial Pest Control"
            width={800}
            height={500}
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Commercial Pest Control
            </h2>
            <p className="text-gray-700 mb-4">
              Protect your reputation and workspace with ongoing pest prevention
              plans tailored for offices, restaurants, warehouses, hotels, and
              more.
            </p>
            <Link
              href="/services/commercial"
              className="inline-block rounded-lg bg-green-600 px-5 py-2 text-white font-semibold hover:bg-green-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-block rounded-full bg-green-700 px-8 py-3 text-lg font-semibold text-white hover:bg-green-800 transition"
        >
          Request a Free Quote
        </Link>
      </div>
    </main>
  );
}
