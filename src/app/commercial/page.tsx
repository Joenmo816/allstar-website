import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Commercial Pest Solutions | All Star Pest Solutions",
  description:
    "Commercial pest solutions for restaurants, apartments, schools, healthcare facilities, warehouses and businesses across the Kansas City metro area.",
};

export default function CommercialPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">

      {/* HERO BANNER */}
      <section className="relative mb-20">

        <Image
          src="/images/all-star-commercial.jpg"
          alt="All Star Pest Solutions Commercial Services"
          width={2000}
          height={900}
          className="w-full h-[420px] md:h-[520px] object-cover rounded-xl"
          priority
        />

        <div className="absolute inset-0 bg-black/55 rounded-xl"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Commercial Pest Solutions
          </h1>

          <p className="max-w-2xl text-lg mb-6">
            Professional pest management programs for restaurants, apartments,
            healthcare facilities, schools and businesses across the Kansas City metro.
          </p>

          <a
            href="tel:9137387827"
            className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            Call (913) 738-7827
          </a>

        </div>

      </section>



      {/* INTRO */}
      <section className="text-center mb-16">

        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Businesses cannot afford pest problems. One pest sighting can damage
          your reputation, fail inspections, and cost thousands in lost revenue.
          All Star Pest Solutions provides professional pest management
          programs designed specifically for commercial facilities throughout
          the South Kansas City metro area.
        </p>

      </section>



      {/* COMMON COMMERCIAL PEST PROBLEMS */}
      <section className="mt-12">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Common Commercial Pest Problems
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-2">Rodents</h3>
            <p>
              Rats and mice contaminate food, damage wiring, and spread disease.
              Warehouses, restaurants and office complexes are common targets.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-2">Cockroaches</h3>
            <p>
              Roaches thrive in kitchens, storage areas and plumbing voids.
              They are one of the most common causes of health inspection failures.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-2">Ants</h3>
            <p>
              Ant colonies invade commercial buildings searching for food
              and water and can quickly spread through kitchens and offices.
            </p>
          </div>

        </div>

      </section>



      {/* INDUSTRIES WE SERVE */}
      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-3 gap-8">


          {/* RESTAURANTS */}
          <Link href="/commercial/restaurants">
            <div className="border rounded-xl overflow-hidden hover:shadow-xl transition">

              <Image
                src="/images/restaurant-pest-control.png"
                alt="Restaurant pest control Kansas City"
                width={1600}
                height={900}
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Restaurants & Food Service
                </h3>
                <p className="text-gray-600">
                  Protect your reputation and pass inspections with proactive
                  pest management programs designed for commercial kitchens.
                </p>
              </div>

            </div>
          </Link>



          {/* APARTMENTS */}
          <Link href="/commercial/property-management">
            <div className="border rounded-xl overflow-hidden hover:shadow-xl transition">

              <Image
                src="/images/apartment-pest-control-kansas-city.jpg"
                alt="Apartment pest control Kansas City"
                width={1600}
                height={900}
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Property Management
                </h3>
                <p className="text-gray-600">
                  Apartment complexes and multi-unit housing require reliable
                  pest control to protect residents and maintain property value.
                </p>
              </div>

            </div>
          </Link>



          {/* SCHOOLS */}
          <Link href="/commercial/schools-churches">
            <div className="border rounded-xl overflow-hidden hover:shadow-xl transition">

              <Image
                src="/images/prairie-view-elementary-school-hallway.png"
                alt="School pest control Kansas City"
                width={1600}
                height={900}
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Schools & Churches
                </h3>
                <p className="text-gray-600">
                  Facilities with large numbers of people require safe and
                  consistent pest prevention programs.
                </p>
              </div>

            </div>
          </Link>



          {/* HEALTHCARE */}
          <Link href="/commercial/hospital">
            <div className="border rounded-xl overflow-hidden hover:shadow-xl transition">

              <Image
                src="/images/healthcare-facility-pest-control-kansas-city.jpg"
                alt="Healthcare facility pest control Kansas City"
                width={1600}
                height={900}
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Healthcare Facilities
                </h3>
                <p className="text-gray-600">
                  Hospitals and residential care facilities require strict
                  pest management standards to protect patients and staff.
                </p>
              </div>

            </div>
          </Link>



          {/* WAREHOUSES */}
          <Link href="/commercial/warehouses">
            <div className="border rounded-xl overflow-hidden hover:shadow-xl transition">

              <Image
                src="/images/warehouse.png"
                alt="Warehouse pest control Kansas City"
                width={1600}
                height={900}
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Warehouses
                </h3>
                <p className="text-gray-600">
                  Large storage and distribution facilities are common targets
                  for rodents and insects that threaten inventory and operations.
                </p>
              </div>

            </div>
          </Link>



          {/* RETAIL */}
          <Link href="/commercial/retail">
            <div className="border rounded-xl overflow-hidden hover:shadow-xl transition">

              <Image
                src="/images/commercial-building-pest-control.png"
                alt="Retail center pest control Kansas City"
                width={1600}
                height={900}
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Retail Centers
                </h3>
                <p className="text-gray-600">
                  Protect customers and tenants from pest problems that
                  can damage reputation and business operations.
                </p>
              </div>

            </div>
          </Link>

        </div>

      </section>



      {/* CTA */}
      <section className="mt-20 text-center bg-gray-100 p-10 rounded-xl">

        <h2 className="text-3xl font-bold mb-4">
          Protect Your Business Today
        </h2>

        <p className="mb-6 text-gray-700">
          Don't wait until pests damage your reputation or cause
          health violations. Call All Star Pest Solutions for
          professional commercial pest management in Kansas City.
        </p>

        <a
          href="tel:9137387827"
          className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700"
        >
          Call (913) 738-7827
        </a>

      </section>

    </main>
  );
}