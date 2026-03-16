import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function ResidentialPage() {
  return (
    <>
      {/* ================= STRUCTURED DATA ================= */}
      <Script
        id="residential-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Residential Pest Solutions",
            provider: {
              "@type": "LocalBusiness",
              name: "All Star Pest Solutions",
              telephone: "+1-913-738-7827",
              areaServed: [
                "Johnson County KS",
                "Miami County KS",
                "Cass County MO",
                "Jackson County MO"
              ]
            }
          })
        }}
      />

      <main className="pt-32 bg-white font-bold">

        {/* ================= HERO ================= */}
        <section className="relative h-[720px] w-full">

          <Image
            src="/images/house.png"
            alt="Kansas City Residential Pest Solutions"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full grid md:grid-cols-2 items-center">

            <div className="text-white">

              <h1 className="text-5xl md:text-6xl font-black mb-6">
                Residential <span className="text-yellow-400">Pest Solutions</span>
              </h1>

              <p className="text-xl mb-8">
                Get the All Star Treatment! We treat your home as if it were our own. Services that are
                safe for children and pets! All products we use are eco-friendly and safe for the enviroment.
                These are our neighborhoods too!
              </p>

              <div className="flex gap-4 flex-wrap">

                <Link
                  href="/contact"
                  className="bg-yellow-400 text-black px-6 py-3 rounded-md"
                >
                  Free Home Inspection
                </Link>

                <a
                  href="tel:9137387827"
                  className="bg-white text-black px-6 py-3 rounded-md"
                >
                  Call (913) 738-STAR
                </a>

              </div>

            </div>

            <div className="flex justify-center md:justify-end">

              <Image
                src="/mascot.png"
                alt="All Star Pest Mascot"
                width={420}
                height={420}
                priority
                className="drop-shadow-2xl"
              />

            </div>

          </div>

        </section>


        {/* ================= INTRO ================= */}
        <section className="py-24 max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-black text-red-700 text-center mb-8">
            Residential Pest Solutions for Kansas City Homes
          </h2>

          <p className="text-xl mb-6">
            Homes throughout the Kansas City metro area experience pest
            problems year-round. Seasonal weather changes, landscaping,
            wooded areas and moisture conditions attract insects and
            rodents searching for food, water and shelter.
          </p>

          <p className="text-xl mb-6">
            All Star Pest Solutions prides ourselves in providing the best service
          </p>

          <p className="text-xl">
            Our approach focuses on identifying the source of pest
            activity, eliminating current infestations and preventing
            future pest problems from returning. We provide solutions, not excuses!
          </p>

        </section>


        {/* ================= COMMON PESTS ================= */}
        <section className="py-24 bg-yellow-50">

          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-black text-red-700 mb-12">
              Common Pests Found in Kansas City Homes
            </h2>

            <div className="grid md:grid-cols-4 gap-10">

              <div className="bg-white border-2 border-red-600 p-10 rounded-xl shadow-lg">
                <h3 className="text-2xl font-black mb-3">Ants</h3>
                <p className="text-lg">
                  Pavement ants, odorous house ants and carpenter ants
                  frequently invade homes searching for food and moisture.
                </p>
              </div>

              <div className="bg-white border-2 border-yellow-500 p-10 rounded-xl shadow-lg">
                <h3 className="text-2xl font-black mb-3">Spiders</h3>
                <p className="text-lg">
                  Kansas City homes commonly encounter wolf spiders,
                  cellar spiders and occasionally brown recluse spiders.
                </p>
              </div>

              <div className="bg-white border-2 border-red-600 p-10 rounded-xl shadow-lg">
                <h3 className="text-2xl font-black mb-3">Rodents</h3>
                <p className="text-lg">
                  Mice and rats can enter homes through extremely small
                  openings and quickly create sanitation and property
                  damage issues.
                </p>
              </div>

              <div className="bg-white border-2 border-yellow-500 p-10 rounded-xl shadow-lg">
                <h3 className="text-2xl font-black mb-3">Cockroaches</h3>
                <p className="text-lg">
                  Cockroaches are persistent household pests that can
                  contaminate food and surfaces while spreading bacteria.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-24 bg-white">

          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-black text-red-700 mb-14">
              Why Homeowners Choose All Star Pest Solutions
            </h2>

            <div className="grid md:grid-cols-4 gap-8">

              <div className="bg-yellow-50 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-black mb-2">30+ Years Experience</h3>
                <p>Decades of hands-on pest management experience.</p>
              </div>

              <div className="bg-yellow-50 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-black mb-2">Thorough Inspections</h3>
                <p>Every service begins with a detailed inspection.</p>
              </div>

              <div className="bg-yellow-50 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-black mb-2">Targeted Treatments</h3>
                <p>Treatments focus precisely where pests live.</p>
              </div>

              <div className="bg-yellow-50 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-black mb-2">Long-Term Prevention</h3>
                <p>Solutions designed to prevent pest problems from returning.</p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= ENVIRONMENT ================= */}
        <section className="py-24 bg-green-100 text-center">

          <h2 className="text-4xl font-black text-green-800 mb-6">
            Protecting Beneficial Species & Wildlife
          </h2>

          <p className="text-xl max-w-4xl mx-auto">
            Our pest solutions focus on eliminating nuisance pests while
            protecting beneficial species such as bees, butterflies,
            ladybugs, birds, squirrels and other wildlife whenever possible.
          </p>

        </section>


        {/* ================= SERVICE AREA ================= */}
        <section className="py-24 bg-stone-100 text-center">

          <h2 className="text-4xl font-black text-red-700 mb-6">
            Residential Pest Solutions Service Area
          </h2>

          <p className="text-xl max-w-4xl mx-auto">
            All Star Pest Solutions proudly serves homeowners in Johnson and Miami Counties in Kansas
            including Overland Park, Olathe, Leawood, Lousiburg, Spring Hill, Bucyrus, Paola, 
            Osawotomie,and Stilwell.
             Cass and Jackson Counties in Missouri including South KC, Grandview, Belton, Raymore, 
            Loch Lloyd, Harrisonville, Cleveland, Freeman, Garden City, Peculiar, Drexal and 
            Cleveland.
          </p>

        </section>


        {/* ================= QUOTE FORM ================= */}
        <section className="py-24 bg-white">

          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-4xl font-black text-center mb-8">
              Request Your Free Residential Pest Inspection
            </h2>

            <form className="grid md:grid-cols-2 gap-6 text-xl">

              <input type="text" placeholder="Full Name" className="border p-4 rounded-md"/>
              <input type="tel" placeholder="Phone Number" className="border p-4 rounded-md"/>
              <input type="email" placeholder="Email Address" className="border p-4 rounded-md"/>
              <input type="text" placeholder="Service Address" className="border p-4 rounded-md"/>

              <select className="border p-4 rounded-md md:col-span-2">
                <option>Pest Problem</option>
                <option>Ants</option>
                <option>Spiders</option>
                <option>Rodents</option>
                <option>Cockroaches</option>
                <option>Termites</option>
                <option>Other</option>
              </select>

              <textarea
                placeholder="Tell us what you're seeing..."
                className="border p-4 rounded-md md:col-span-2"
                rows={4}
              />

              <button
                type="submit"
                className="bg-red-700 text-white py-4 rounded-md md:col-span-2"
              >
                Request Inspection
              </button>

            </form>

          </div>

        </section>

      </main>
    </>
  );
}