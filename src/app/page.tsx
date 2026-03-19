export const metadata = {
  title: "All Star Pest Solutions | 30 Years Experience",
  description:
    "Locally owned pest solutions company serving Johnson County KS, Miami County KS, Cass County MO and Jackson County MO.",
};

import Image from "next/image";
import Link from "next/link";
import EcoCommitment from "@/app/components/EcoCommitment";

export default function HomePage() {
  return (
    <div className="bg-white font-bold">

      {/* ================= HERO ================= */}

      <section className="relative">
        <div className="relative min-h-[820px] w-full overflow-hidden">

          <Image
            src="/kc-background.jpg"
            alt="Kansas City Pest Solutions"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-12 pt-28 pb-24">

            {/* LEFT SIDE */}
            <div className="text-white">

              <Image
                src="/logo.png"
                alt="All Star Pest Solutions"
                width={3480}
                height={3480}
                className="w-[720px] mb-6 drop-shadow-xl"
              />

              {/* ✅ SINGLE LINE TAGLINE */}
              <h1 className="text-3xl md:text-4xl font-black text-yellow-400 mb-6 whitespace-nowrap">
                Guaranteed Service. Guaranteed Results.
              </h1>

              <p className="text-2xl mb-2">
                Talk directly with the owner — not a call center overseas.
              </p>

              <p className="text-3xl font-black text-yellow-300 mb-3">
                Call (913) 738-STAR
              </p>

              <p className="text-xl mb-6">
                No Contracts Required.
              </p>

              <div className="flex gap-6 flex-wrap">

                <Link
                  href="/contact"
                  className="bg-yellow-400 text-black font-black px-8 py-4 rounded-md text-xl hover:bg-yellow-300"
                >
                  FREE INSPECTION
                </Link>

                <a
                  href="tel:19137387827"
                  className="bg-white text-black font-black px-8 py-4 rounded-md text-xl hover:bg-gray-200"
                >
                  Call (913) 738-STAR
                </a>

              </div>

              {/* review stars */}
              <div className="mt-8 text-yellow-400 text-2xl">
                ★★★★★
              </div>

              <p className="text-lg mt-2">
                5-Star Rated Kansas City Pest Solutions
              </p>

            </div>

            {/* MASCOT */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/mascot.png"
                alt="All Star Pest Mascot"
                width={520}
                height={520}
                className="drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ✅ ECO SECTION (TOP PRIORITY POSITION) */}
      <EcoCommitment />

      {/* ================= SERVICE AREA ================= */}

      <section className="py-20 bg-gradient-to-b from-yellow-50 to-white text-center">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-black text-red-700 mb-6">
            Serving South Kansas City & Surrounding Communities
          </h2>

          <p className="text-xl text-zinc-800">
            Providing residential and commercial pest solutions
            throughout Johnson County and Miami County in Kansas
            along with Cass County and Jackson County in Missouri.
          </p>

        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-black text-red-700 mb-14">
            Professional Pest Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-yellow-50 p-10 rounded-xl shadow-md border-t-4 border-red-700">
              <h3 className="text-2xl font-black mb-4">
                Residential Pest Solutions
              </h3>
              <p className="text-xl text-zinc-800 mb-6">
                Protect your home from ants, spiders, rodents,
                cockroaches and other nuisance pests with
                safe and effective treatments.
              </p>
              <Link href="/residential" className="bg-red-700 text-white px-6 py-3 rounded-md text-lg">
                Learn More
              </Link>
            </div>

            <div className="bg-yellow-50 p-10 rounded-xl shadow-md border-t-4 border-yellow-500">
              <h3 className="text-2xl font-black mb-4">
                Commercial Pest Solutions
              </h3>
              <p className="text-xl text-zinc-800 mb-6">
                Protect your business, employees and customers
                with professional pest management solutions.
              </p>
              <Link href="/commercial" className="bg-red-700 text-white px-6 py-3 rounded-md text-lg">
                Learn More
              </Link>
            </div>

            <div className="bg-yellow-50 p-10 rounded-xl shadow-md border-t-4 border-red-700">
              <h3 className="text-2xl font-black mb-4">
                Termite Inspections & Treatments
              </h3>
              <p className="text-xl text-zinc-800 mb-6">
                Subterranean termites can cause serious structural damage.
                Protect your home with professional termite inspections.
              </p>
              <Link href="/termite-services" className="bg-red-700 text-white px-6 py-3 rounded-md text-lg">
                Learn More
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* (everything else unchanged below) */}

    </div>
  );
}