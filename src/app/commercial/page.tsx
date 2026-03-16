import Hero from "../components/Hero";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Commercial Pest Solutions | Kansas City | All Star Pest Solutions",
  description:
    "Commercial pest solutions for restaurants, warehouses, healthcare facilities, schools and businesses throughout the Kansas City metro.",
};

export default function CommercialPage() {
  return (
    <main className="pt-32 bg-white text-gray-900 font-bold">

      {/* HERO */}
      <Hero
        title="Commercial Pest Solutions"
        subtitle="Professional pest solutions protecting Kansas City businesses for over 30 years."
        background="/images/commercial-building-pest-control.png"
      />

      {/* INTRO */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-black text-red-700 mb-8">
          Protect Your Business From Pest Problems
        </h2>

        <p className="text-xl text-gray-800 mb-6">
          Pest infestations can damage your reputation, threaten food safety,
          and create serious health risks for customers and employees.
          Businesses throughout the Kansas City metro rely on All Star Pest
          Solutions to protect their facilities from nuisance pests.
        </p>

        <p className="text-xl text-gray-800">
          Our commercial pest solutions focus on inspection, targeted
          treatments, sanitation recommendations and long-term prevention
          designed specifically for each facility.
        </p>
      </section>

      {/* WHY BUSINESSES CHOOSE US */}
      <section className="py-24 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-red-700 mb-12">
            Why Kansas City Businesses Choose All Star Pest Solutions
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-left">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-red-700">
              <h3 className="text-xl font-black mb-3">
                30+ Years Experience
              </h3>
              <p>
                Decades of real-world pest management experience protecting
                Kansas City businesses.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-yellow-500">
              <h3 className="text-xl font-black mb-3">
                Detailed Inspections
              </h3>
              <p>
                Every program begins with a thorough facility inspection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-red-700">
              <h3 className="text-xl font-black mb-3">
                Targeted Treatments
              </h3>
              <p>
                Treatments focus precisely where pests live instead of
                unnecessary spraying.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-yellow-500">
              <h3 className="text-xl font-black mb-3">
                Long-Term Prevention
              </h3>
              <p>
                Our goal is eliminating the source of pest problems and
                preventing them from returning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-red-700 text-center mb-16">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-2 gap-14">
            <Link href="/commercial/restaurants" className="group block">
              <Image
                src="/images/restaurant-pest-control.png"
                alt="Restaurant pest solutions Kansas City"
                width={900}
                height={600}
                className="rounded-xl shadow-xl mb-4"
              />
              <h3 className="text-2xl font-black group-hover:text-red-700">
                Restaurants & Food Service
              </h3>
            </Link>

            <Link href="/commercial/warehouses" className="group block">
              <Image
                src="/images/warehouse.png"
                alt="Warehouse pest solutions Kansas City"
                width={900}
                height={600}
                className="rounded-xl shadow-xl mb-4"
              />
              <h3 className="text-2xl font-black group-hover:text-red-700">
                Warehouses & Distribution
              </h3>
            </Link>

            <Link href="/commercial/hospital" className="group block">
              <Image
                src="/images/healthcare-facility-pest-control-kansas-city.jpg"
                alt="Healthcare facility pest solutions Kansas City"
                width={900}
                height={600}
                className="rounded-xl shadow-xl mb-4"
              />
              <h3 className="text-2xl font-black group-hover:text-red-700">
                Healthcare Facilities
              </h3>
            </Link>

            <Link href="/commercial/schools-churches" className="group block">
              <Image
                src="/images/prairie-view-elementary-school-hallway.png"
                alt="School pest solutions Kansas City"
                width={900}
                height={600}
                className="rounded-xl shadow-xl mb-4"
              />
              <h3 className="text-2xl font-black group-hover:text-red-700">
                Schools & Educational Facilities
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* ENVIRONMENTAL */}
      <section className="py-24 bg-green-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black text-green-800 mb-6">
            Protecting Beneficial Species & Wildlife
          </h2>

          <p className="text-xl">
            Our pest solutions focus on eliminating nuisance pests while
            protecting beneficial species such as bees, butterflies,
            ladybugs, birds, squirrels and other wildlife whenever possible.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-700 text-white py-20 text-center">
        <h2 className="text-4xl font-black mb-6">
          Speak Directly With The Owner
        </h2>

        <p className="text-xl mb-10">
          Call (913) 738-STAR for experienced commercial pest solutions.
          No call centers. No contracts required.
        </p>

        <a
          href="tel:19137387827"
          className="bg-yellow-400 text-black px-8 py-4 rounded-md text-xl font-black"
        >
          Call (913) 738-STAR
        </a>
      </section>

      {/* QUOTE FORM */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-8">
            Request a Commercial Pest Inspection
          </h2>

          <form className="grid md:grid-cols-2 gap-6 text-lg">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-4 rounded-md"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border p-4 rounded-md"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border p-4 rounded-md"
            />

            <input
              type="text"
              placeholder="Business Address"
              className="border p-4 rounded-md"
            />

            <select className="border p-4 rounded-md md:col-span-2">
              <option>Type of Business</option>
              <option>Restaurant</option>
              <option>Warehouse</option>
              <option>Healthcare Facility</option>
              <option>School / Church</option>
              <option>Office / Retail</option>
              <option>Other</option>
            </select>

            <textarea
              placeholder="Describe the pest issue..."
              className="border p-4 rounded-md md:col-span-2"
              rows={4}
            />

            <button
              type="submit"
              className="bg-red-700 text-white font-black py-4 rounded-md hover:bg-red-800 md:col-span-2"
            >
              Request Inspection
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}