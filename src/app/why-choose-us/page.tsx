import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Why Choose All Star Pest Solutions | Kansas City Pest Experts",
  description:
    "With over 25 years of experience, All Star Pest Solutions delivers reliable pest control and termite services across the Kansas City metro area.",
};

export default function WhyChooseUsPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-[420px] w-full">
        <Image
          src="/kc-skyline.jpg"
          alt="Kansas City skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose All Star Pest Solutions
          </h1>
          <p className="text-xl max-w-2xl">
            Guaranteed Service. Guaranteed Results.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-10">

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-3">25+ Years Experience</h2>
          <p>
            With more than two decades in the pest control industry, we know
            exactly how to eliminate pests safely and effectively.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-3">Locally Owned</h2>
          <p>
            We are a Kansas City locally owned company that understands the
            pests that affect homes and businesses in our region.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-3">Certified Applicators</h2>
          <p>
            Every technician is a certified commercial applicator in both
            Kansas and Missouri.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Protect Your Home or Business?
        </h2>
        <p className="mb-6">
          Call today for professional pest solutions in the Kansas City metro.
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


