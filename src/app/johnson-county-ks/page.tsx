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
          throughout Johnson County Kansas. With over 25 years of industry
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
          className="bg-yellow-400 text-black px-6 py-3 font-bold rounded-lg hover:bg-yellow-300 transition"
        >
          Schedule Service
        </Link>

      </section>

    </main>
  );
}

<h2 className='text-2xl font-bold mt-12'>
<h2 className="text-3xl font-bold mb-6 text-center">Other Cities We Service</h2>

<ul>
<li><a href='/johnson-louisburg-ks'>johnson in louisburg-ks</a></li>
<li><a href='/johnson-paola-ks'>johnson in paola-ks</a></li>
<li><a href='/johnson-osawatomie-ks'>johnson in osawatomie-ks</a></li>
<li><a href='/johnson-spring-hill-ks'>johnson in spring-hill-ks</a></li>
<li><a href='/johnson-stilwell-ks'>johnson in stilwell-ks</a></li>
<li><a href='/johnson-overland-park-ks'>johnson in overland-park-ks</a></li>
<li><a href='/johnson-olathe-ks'>johnson in olathe-ks</a></li>
<li><a href='/johnson-prairie-village-ks'>johnson in prairie-village-ks</a></li>
<li><a href='/johnson-leawood-ks'>johnson in leawood-ks</a></li>
<li><a href='/johnson-peculiar-mo'>johnson in peculiar-mo</a></li>
<li><a href='/johnson-freeman-mo'>johnson in freeman-mo</a></li>
<li><a href='/johnson-harrisonville-mo'>johnson in harrisonville-mo</a></li>
<li><a href='/johnson-drexel-mo'>johnson in drexel-mo</a></li>
<li><a href='/johnson-cleveland-mo'>johnson in cleveland-mo</a></li>
<li><a href='/johnson-loch-lloyd-mo'>johnson in loch-lloyd-mo</a></li>
<li><a href='/johnson-belton-mo'>johnson in belton-mo</a></li>
<li><a href='/johnson-raymore-mo'>johnson in raymore-mo</a></li>
<li><a href='/johnson-grandview-mo'>johnson in grandview-mo</a></li>

</ul>



