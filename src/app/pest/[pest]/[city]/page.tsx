import Link from "next/link";

const cities = [
  "belton-mo",
  "raymore-mo",
  "peculiar-mo",
  "harrisonville-mo",
  "garden-city-mo",
  "freeman-mo",
  "drexel-mo",
  "cleveland-mo",
  "loch-lloyd-mo",

  "overland-park-ks",
  "olathe-ks",
  "gardner-ks",
  "spring-hill-ks",
  "louisburg-ks",
  "paola-ks",
  "osawatomie-ks",
  "bucyrus-ks",
  "stillwell-ks",
  "leawood-ks",
  "lenexa-ks",
  "prairie-village-ks"
];

export function generateStaticParams() {
  return cities.map((city) => ({
    city,
  }));
}

function formatCityName(city: string) {
  const parts = city.split("-");
  const state = parts.pop()?.toUpperCase();
  const name = parts
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");

  return `${name}, ${state}`;
}

export default function CityPage({ params }: { params: { city: string } }) {
  const cityName = formatCityName(params.city);

  return (
    <main className="pt-32 bg-white">

      {/* HERO */}
      <section className="py-20 text-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">
          Pest Control in {cityName}
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          All Star Pest Solutions provides professional pest control
          services in {cityName}. Our licensed technicians protect homes
          and businesses from termites, ants, spiders, rodents and other
          common pests found throughout the Kansas City metro area.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Pest Solutions in {cityName}
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Residential Pest Solutions
              </h3>

              <p className="text-gray-700">
                Protect your home from ants, spiders, roaches,
                rodents and other common pests found in {cityName}.
              </p>

              <Link
                href="/residential"
                className="text-red-700 font-semibold mt-3 inline-block"
              >
                Learn More →
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Commercial Pest Solutions
              </h3>

              <p className="text-gray-700">
                We help businesses in {cityName} maintain pest-free
                environments for customers and employees.
              </p>

              <Link
                href="/commercial"
                className="text-red-700 font-semibold mt-3 inline-block"
              >
                Learn More →
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Termite Inspections
              </h3>

              <p className="text-gray-700">
                Subterranean termites are common throughout the
                Kansas City metro area. Schedule a professional
                termite inspection in {cityName}.
              </p>

              <Link
                href="/termite-services"
                className="text-red-700 font-semibold mt-3 inline-block"
              >
                Learn More →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose All Star Pest Solutions
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>✔ Over 25 years pest control experience</li>
            <li>✔ Locally owned Kansas City company</li>
            <li>✔ Certified applicators in Kansas and Missouri</li>
            <li>✔ Safe and effective treatment methods</li>
            <li>✔ Guaranteed Service. Guaranteed Results.</li>
          </ul>

        </div>
      </section>

      {/* SERVICE AREA LINKS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Cities We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-4 text-gray-700">

            {cities.map((city) => (
              <Link
                key={city}
                href={`/${city}`}
                className="hover:text-red-700"
              >
                {formatCityName(city)}
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Schedule Pest Service in {cityName}
        </h2>

        <Link
          href="/contact"
          className="bg-yellow-400 text-black px-8 py-4 rounded-md font-semibold hover:bg-yellow-300 transition"
        >
          Contact Us Today
        </Link>
      </section>

    </main>
  );
}