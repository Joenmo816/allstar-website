import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Commercial Pest Solutions | Kansas City | All Star Pest Solutions",
  description:
    "Commercial pest solutions for Kansas City businesses including restaurants, warehouses, offices and healthcare facilities.",
};

export default function Page() {
  return (
    <main className="bg-white text-gray-900">

      <section className="relative h-[400px] w-full">
        <Image
          src="/commercial-building-pest-control.png"
          alt="Commercial pest solutions Kansas City"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Kansas City Commercial Pest Solutions
            </h1>

            <p className="text-xl">
              Guaranteed Service. Guaranteed Results.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Protecting Kansas City Businesses
        </h2>

        <p className="text-lg mb-6">
          All Star Pest Solutions provides professional pest management
          programs for businesses across the Kansas City metro area.
          With more than 25 years of experience, we understand the pests
          that threaten commercial properties and how to eliminate them safely.
        </p>

        <p className="text-lg">
          Our certified applicators serve restaurants, warehouses,
          offices, healthcare facilities and many other types of
          commercial properties.
        </p>
      </section>

      <section className="bg-red-600 text-white py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Commercial Pest Solutions?
        </h2>

        <p className="mb-6">
          Call today for a professional inspection.
        </p>

        <Link
          href="/contact"
          className="bg-yellow-400 text-black px-6 py-3 rounded font-bold"
        >
          Schedule Service
        </Link>
      </section>

    </main>
  );
}
