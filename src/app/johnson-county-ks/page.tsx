import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Johnson County KS Pest Solutions | All Star Pest Solutions",
  description:
    "Professional pest solutions in Johnson County Kansas including Overland Park, Olathe, Lenexa, Shawnee, and surrounding areas. Guaranteed Service. Guaranteed Results.",
};

export default function JohnsonCountyPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-[420px] w-full">
        <Image
          src="/kc-skyline.jpg"
          alt="Kansas City skyline"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Johnson County Kansas Pest Solutions
          </h1>

          <p className="text-xl max-w-2xl">
            Guaranteed Service. Guaranteed Results.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Local Pest Experts Serving Johnson County
        </h2>

        <p className="mb-6 text-lg">
          All Star Pest Solutions proudly provides professional pest solutions
          throughout Johnson County Kansas. With Over 30 Years of Experience of industry
          experience, our certified applicators understand the pests common to
          homes and businesses in the Kansas City metro area.
        </p>

        <p className="mb-10 text-lg">
          Whether you are dealing with ants, spiders, termites, rodents, or
          other nuisance pests, our team uses the safest and most effective
          modern treatment methods available.
        </p>

        {/* SERVICE AREAS */}
        <div className="grid md:grid-cols-2 gap-6 text-lg">

          <div>
            <h3 className="font-bold mb-3">Cities We Serve</h3>

            <ul className="space-y-2">
              <li>Overland Park</li>
              <li>Olathe</li>
              <li>Lenexa</li>
              <li>Shawnee</li>
              <li>Leawood</li>
              <li>Prairie Village</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Why Choose Us</h3>

            <ul className="space-y-2">
              <li>25+ years pest control experience</li>
              <li>Certified Kansas & Missouri applicators</li>
              <li>Locally owned and operated</li>
              <li>Eco-friendly pest treatment options</li>
              <li>No mandatory contracts</li>
            </ul>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white py-14 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Need Pest Solutions in Johnson County?
        </h2>

        <p className="mb-6">
          Call today to schedule your inspection.
        </p>

        <Link
          href="/contact"
          className="bg-allstarBlueLight text-black px-6 py-3 font-bold rounded-lg hover:bg-allstarBlueLight transition"
        >
          Schedule Service
        </Link>

      </section>

    </main>
  );
}




