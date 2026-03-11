export const metadata = {
  title: "Commercial Pest Solutions Kansas City | All Star Pest Solutions",
  description:
    "Commercial pest solutions in Kansas City for restaurants, offices, warehouses, retail stores and healthcare facilities. 30+ years experience protecting Kansas City businesses.",
};

import Image from "next/image";
import Link from "next/link";

export default function CommercialPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative">

        <div className="relative h-[640px] w-full overflow-hidden">

          <Image
            src="/office-building-kc.jpg"
            alt="Kansas City commercial pest solutions services"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center">

            <div className="max-w-2xl text-white">

              <h1 className="text-4xl md:text-5xl font-extrabold">
                Commercial Pest Solutions in Kansas City
              </h1>

              <div className="mt-4 inline-block bg-red-700 px-6 py-3 rounded-md shadow-lg">
                <span className="text-yellow-400 font-bold text-xl">
                  Guaranteed Service. Guaranteed Results.
                </span>
              </div>

              <p className="mt-6 text-lg font-semibold">
                Professional pest management for Kansas City businesses,
                restaurants, warehouses, offices, and commercial facilities.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="py-16">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 text-center">
            Professional Commercial Pest Solutions for Kansas City Businesses
          </h2>

          <p className="mt-6 text-lg font-semibold text-black/80 leading-relaxed">
            Businesses throughout Kansas City face constant pressure to maintain
            clean, safe, and professional environments for customers,
            employees, and regulatory inspectors. Pest infestations can damage
            reputations, create health concerns, and interrupt daily
            operations. For restaurants, offices, retail stores, and warehouse
            facilities, pest problems must be addressed quickly and
            professionally.
          </p>

          <p className="mt-6 text-lg font-semibold text-black/80 leading-relaxed">
            All Star Pest Solutions provides reliable commercial pest solutions
            designed specifically for Kansas City businesses. With more than
            thirty years of hands-on pest management experience, we understand
            the pest pressures that commercial properties face in the Midwest
            and how to eliminate infestations before they become major
            operational problems.
          </p>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="bg-zinc-50 py-16">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-extrabold text-red-700">
            30+ Years of Commercial Pest Management Experience
          </h2>

          <p className="mt-6 text-lg font-semibold text-black/80 max-w-4xl mx-auto leading-relaxed">
            Experience plays a critical role in commercial pest management.
            Many pest problems that appear small on the surface often have
            underlying causes such as structural entry points, sanitation
            conditions, moisture problems, or seasonal pest migration patterns
            common to the Kansas City region.
          </p>

          <p className="mt-6 text-lg font-semibold text-black/80 max-w-4xl mx-auto leading-relaxed">
            Our inspections focus on identifying the root causes of pest
            activity rather than simply applying surface treatments. By
            understanding pest biology and the environmental conditions that
            allow pests to thrive, our treatment programs are designed to
            eliminate infestations and prevent them from returning.
          </p>

        </div>

      </section>

      {/* INDUSTRIES */}
      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold text-red-700 text-center">
            Industries We Protect
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-12">

            <div>
              <h3 className="text-2xl font-extrabold">
                Restaurants & Food Facilities
              </h3>
              <p className="mt-4 text-lg font-semibold text-black/80">
                Restaurants must maintain strict sanitation standards to pass
                inspections and protect customer safety. Pest infestations can
                quickly lead to failed health inspections and lost business.
                Our restaurant pest solutions target cockroaches, rodents,
                flies, and stored product pests commonly found in food service
                environments.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold">
                Office Buildings
              </h3>
              <p className="mt-4 text-lg font-semibold text-black/80">
                Office buildings frequently experience pest issues due to
                breakrooms, shared spaces, and structural entry points. Ants,
                spiders, and rodents are common invaders in Kansas City office
                environments. Our programs prevent pests before they disrupt
                workplace productivity.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold">
                Warehouses & Distribution Centers
              </h3>
              <p className="mt-4 text-lg font-semibold text-black/80">
                Warehouses provide ideal environments for rodents and stored
                product pests. Our inspections focus on loading docks, storage
                areas, and exterior structural vulnerabilities to protect
                inventory and operations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold">
                Healthcare Facilities
              </h3>
              <p className="mt-4 text-lg font-semibold text-black/80">
                Healthcare environments require extremely careful pest
                management due to patient safety concerns. Our targeted
                treatment approach ensures pest control while maintaining
                strict safety and sanitation standards.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="bg-zinc-50 py-16">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-extrabold text-red-700">
            Our Commercial Protection Process
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white p-8 rounded shadow">
              <h3 className="text-xl font-extrabold">Inspect</h3>
              <p className="mt-4 font-semibold text-black/80">
                Detailed inspections identify pest activity, structural entry
                points, and environmental conditions that allow infestations to
                develop.
              </p>
            </div>

            <div className="bg-white p-8 rounded shadow">
              <h3 className="text-xl font-extrabold">Target</h3>
              <p className="mt-4 font-semibold text-black/80">
                Professional treatments are applied precisely where they are
                needed to eliminate pest populations efficiently.
              </p>
            </div>

            <div className="bg-white p-8 rounded shadow">
              <h3 className="text-xl font-extrabold">Protect</h3>
              <p className="mt-4 font-semibold text-black/80">
                Preventative monitoring and maintenance programs help protect
                facilities from recurring pest problems.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-red-700 py-16 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-extrabold text-yellow-400">
            Protect Your Business Today
          </h2>

          <p className="mt-6 text-white font-semibold text-lg">
            Pest problems can damage a company's reputation quickly. Contact
            All Star Pest Solutions today for professional commercial pest
            solutions designed to protect your business.
          </p>

          <div className="mt-8">

            <Link
              href="/contact"
              className="bg-yellow-400 text-red-700 font-extrabold px-8 py-4 rounded-md shadow-md"
            >
              Schedule Your Inspection
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

<h2 className='text-2xl font-bold mt-12'>
<h2 className="text-3xl font-bold mb-6 text-center">Other Cities We Service</h2>

<ul>
<li><a href='/commercial-louisburg-ks'>commercial in louisburg-ks</a></li>
<li><a href='/commercial-paola-ks'>commercial in paola-ks</a></li>
<li><a href='/commercial-osawatomie-ks'>commercial in osawatomie-ks</a></li>
<li><a href='/commercial-spring-hill-ks'>commercial in spring-hill-ks</a></li>
<li><a href='/commercial-stilwell-ks'>commercial in stilwell-ks</a></li>
<li><a href='/commercial-overland-park-ks'>commercial in overland-park-ks</a></li>
<li><a href='/commercial-olathe-ks'>commercial in olathe-ks</a></li>
<li><a href='/commercial-prairie-village-ks'>commercial in prairie-village-ks</a></li>
<li><a href='/commercial-leawood-ks'>commercial in leawood-ks</a></li>
<li><a href='/commercial-peculiar-mo'>commercial in peculiar-mo</a></li>
<li><a href='/commercial-freeman-mo'>commercial in freeman-mo</a></li>
<li><a href='/commercial-harrisonville-mo'>commercial in harrisonville-mo</a></li>
<li><a href='/commercial-drexel-mo'>commercial in drexel-mo</a></li>
<li><a href='/commercial-cleveland-mo'>commercial in cleveland-mo</a></li>
<li><a href='/commercial-loch-lloyd-mo'>commercial in loch-lloyd-mo</a></li>
<li><a href='/commercial-belton-mo'>commercial in belton-mo</a></li>
<li><a href='/commercial-raymore-mo'>commercial in raymore-mo</a></li>
<li><a href='/commercial-grandview-mo'>commercial in grandview-mo</a></li>

</ul>



