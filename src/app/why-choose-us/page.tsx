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
<li><a href='/why-louisburg-ks'>why in louisburg-ks</a></li>
<li><a href='/why-paola-ks'>why in paola-ks</a></li>
<li><a href='/why-osawatomie-ks'>why in osawatomie-ks</a></li>
<li><a href='/why-spring-hill-ks'>why in spring-hill-ks</a></li>
<li><a href='/why-stilwell-ks'>why in stilwell-ks</a></li>
<li><a href='/why-overland-park-ks'>why in overland-park-ks</a></li>
<li><a href='/why-olathe-ks'>why in olathe-ks</a></li>
<li><a href='/why-prairie-village-ks'>why in prairie-village-ks</a></li>
<li><a href='/why-leawood-ks'>why in leawood-ks</a></li>
<li><a href='/why-peculiar-mo'>why in peculiar-mo</a></li>
<li><a href='/why-freeman-mo'>why in freeman-mo</a></li>
<li><a href='/why-harrisonville-mo'>why in harrisonville-mo</a></li>
<li><a href='/why-drexel-mo'>why in drexel-mo</a></li>
<li><a href='/why-cleveland-mo'>why in cleveland-mo</a></li>
<li><a href='/why-loch-lloyd-mo'>why in loch-lloyd-mo</a></li>
<li><a href='/why-belton-mo'>why in belton-mo</a></li>
<li><a href='/why-raymore-mo'>why in raymore-mo</a></li>
<li><a href='/why-grandview-mo'>why in grandview-mo</a></li>

</ul>



