export const metadata = {
  title: "South Kansas City Pest Solutions | 30+ Years Experience",
  description:
    "All Star Pest Solutions provides residential, commercial and termite pest solutions throughout South Kansas City and surrounding communities.",
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
            alt="Kansas City skyline pest control service area"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center">

            <div className="w-full md:w-[60%] relative z-10">

              {/* LOGO */}
              <div className="flex justify-center md:justify-start mb-4">
                <Image
                  src="/logo.png"
                  alt="All Star Pest Solutions Logo"
                  width={440}
                  height={440}
                  priority
                />
              </div>

              {/* SLOGAN */}
              <div className="inline-block bg-red-700 px-6 py-3 rounded-md shadow-lg mb-6">
                <h1 className="text-yellow-400 font-extrabold text-2xl md:text-3xl">
                  Guaranteed Service. Guaranteed Results.
                </h1>

<div className="mt-8 text-center">

<a
href="/text-a-pest"
className="inline-block bg-red-600 text-white px-6 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition"
>
📸 Text Us a Photo of Your Pest
</a>

<p className="mt-3 text-sm text-gray-600">
Snap a picture and send it to 913-738-7827 and we'll identify it for you.
</p>

</div>

              </div>

              <p className="text-white text-lg font-semibold">
                Professional pest solutions for homes and businesses
                throughout South Kansas City and surrounding communities.
              </p>

            </div>

            {/* MASCOT */}
            <div className="hidden md:block flex-1 relative h-full">
              <Image
                src="/mascot.png"
                alt="All Star Pest Solutions mascot"
                width={700}
                height={700}
                className="absolute right-0 bottom-0 drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold text-red-700">
            Experience Makes the Difference
          </h2>

          <p className="mt-6 text-lg font-semibold text-black/80 max-w-4xl mx-auto">
            With more than three decades of hands-on pest control experience,
            inspections are thorough, treatments are precise, and long-term
            prevention is always the goal.
          </p>

        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-zinc-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-extrabold text-red-700">
            Our Process
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-extrabold">Inspect</h3>
              <p className="mt-4 font-semibold text-black/75">
                Identify the pest problem and locate the source.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-extrabold">Target</h3>
              <p className="mt-4 font-semibold text-black/75">
                Apply targeted treatments designed to eliminate pests safely.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-extrabold">Protect</h3>
              <p className="mt-4 font-semibold text-black/75">
                Prevent future infestations with strategic protection.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

