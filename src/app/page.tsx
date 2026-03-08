export const metadata = {
  title: "South Kansas City Pest Solutions | 30 Years Experience",
  description:
    "Locally owned pest solutions company serving Johnson and Miami counties in Kansas and Cass and Jackson counties in Missouri.",
};
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="relative h-[640px] w-full overflow-hidden">

          <Image
            src="/kc-background.jpg"
            alt="South Kansas City Service Area"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center">

            <div className="w-full md:w-[60%] relative z-10">

              {/* Main Promise */}
              <div className="inline-block bg-red-700 px-6 py-3 rounded-md shadow-lg">
                <h1 className="text-yellow-400 font-extrabold text-2xl md:text-3xl whitespace-nowrap">
                  Guaranteed Service. Guaranteed Results.
                </h1>
              </div>

              {/* Authority Line */}
              <p className="mt-6 text-white text-lg font-semibold">
                Locally owned. Certified in Kansas & Missouri.
                Professional pest solutions done right.
              </p>

              {/* Service Area */}
              <div className="mt-8 inline-block bg-blue-700 px-6 py-4 rounded-md shadow-xl">
                <p className="text-white text-lg font-bold">
                  Serving Johnson & Miami Counties (KS)
                </p>
                <p className="text-white text-lg font-bold mt-1">
                  And Cass & Jackson Counties (MO)
                </p>
              </div>

              {/* Credibility Badges */}
              <div className="mt-6 flex flex-wrap gap-4 text-white text-sm font-bold">
                <span className="bg-black/40 px-4 py-2 rounded-md">
                  Locally Owned & Operated
                </span>
                <span className="bg-black/40 px-4 py-2 rounded-md">
                  Focused on Non-Target Species Protection
                </span>
                <span className="bg-black/40 px-4 py-2 rounded-md">
                  Safe for Children & Pets
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex gap-4">
                <Link
                  href="/contact"
                  className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-md"
                >
                  Free Inspection
                </Link>

                <Link
                  href="tel:19137387827"
                  className="bg-white text-black font-bold px-6 py-3 rounded-md"
                >
                  Call (913) 738-7827
                </Link>
              </div>

            </div>

            {/* Mascot */}
            <div className="hidden md:block flex-1 relative h-full">
              <Image
                src="/mascot.png"
                alt="All Star Pest Solutions Mascot"
                width={760}
                height={760}
                priority
                className="absolute right-0 bottom-0 drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= TRUST / EXPERIENCE ================= */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold">
            Experience Makes the Difference
          </h2>

          <p className="mt-6 text-lg font-semibold text-black/80 max-w-4xl mx-auto">
            With over three decades of hands-on field experience,
            inspections are thorough, treatments are precise,
            and long-term prevention is always the goal.
            You’re not getting a rushed route technician —
            you’re getting seasoned professional judgment.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">

            <div className="bg-zinc-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-extrabold mb-4">
                Protection of Beneficial Species
              </h3>
              <p className="font-semibold text-black/75">
                We deliberately avoid unnecessary exposure to pollinators
                such as honey bees, bumblebees, butterflies, and other
                beneficial insects. Applications are targeted and strategic —
                never careless.
              </p>
            </div>

            <div className="bg-zinc-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-extrabold mb-4">
                Family & Pet Conscious Treatments
              </h3>
              <p className="font-semibold text-black/75">
                Products are selected and applied according to label
                directions with safety in mind. Many active ingredients
                used professionally are also found in regulated
                flea and tick treatments applied directly to pets.
              </p>
            </div>

            <div className="bg-zinc-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-extrabold mb-4">
                Precision Over Volume
              </h3>
              <p className="font-semibold text-black/75">
                Large national companies often prioritize route speed.
                We prioritize accuracy, accountability, and long-term results.
                That difference shows in the outcome.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= OUR PROCESS ================= */}
      <section className="bg-zinc-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-extrabold">
            Our Process
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-xl font-extrabold">Inspect</div>
              <p className="mt-4 font-semibold text-black/75">
                Identify the source before recommending a solution.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-xl font-extrabold">Target</div>
              <p className="mt-4 font-semibold text-black/75">
                Treat only where necessary — no blanket applications.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-xl font-extrabold">Protect</div>
              <p className="mt-4 font-semibold text-black/75">
                Implement long-term prevention strategies.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-red-700 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400">
            South Kansas City’s Trusted Pest Solutions Provider
          </h2>

          <p className="mt-6 text-white text-lg font-semibold">
            Serving Johnson, Miami, Cass, and Jackson Counties
            with professionalism, precision, and integrity.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-md text-lg"
            >
              Schedule Your Free Inspection
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}