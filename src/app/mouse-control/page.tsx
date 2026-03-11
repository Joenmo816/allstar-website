import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mouse Control Kansas City | All Star Pest Solutions",
  description:
    "Professional Mouse Control services in Kansas City and surrounding communities. Guaranteed Service. Guaranteed Results.",
};

export default function Page() {
  return (
    <div className="bg-white">

      <section className="bg-red-700 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-yellow-400">
          Mouse Control Kansas City
        </h1>

        <p className="mt-4 text-white font-semibold text-lg">
          Guaranteed Service. Guaranteed Results.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-extrabold">
          Professional Mouse Control Services
        </h2>

        <p className="mt-6 text-lg font-semibold text-black/80">
          All Star Pest Solutions provides professional Mouse Control
          services throughout the Kansas City metro area including
          Overland Park, Olathe, Lee's Summit, Belton, Raymore and
          surrounding communities.
        </p>

        <p className="mt-6 text-lg font-semibold text-black/80">
          With over 30 years of experience in the pest control industry,
          inspections are thorough, treatments are targeted, and
          long-term prevention is always the goal.
        </p>

        <div className="mt-12 text-center">

          <Link
            href="/contact"
            className="bg-red-700 text-yellow-400 font-bold px-8 py-4 rounded-md"
          >
            Schedule Your Free Inspection
          </Link>

        </div>

      </section>

    </div>
  );
}


<h2 className='text-2xl font-bold mt-12'>
<h2 className="text-3xl font-bold mb-6 text-center">Other Cities We Service</h2>

<ul>
<li><a href='/mouse-louisburg-ks'>mouse in louisburg-ks</a></li>
<li><a href='/mouse-paola-ks'>mouse in paola-ks</a></li>
<li><a href='/mouse-osawatomie-ks'>mouse in osawatomie-ks</a></li>
<li><a href='/mouse-spring-hill-ks'>mouse in spring-hill-ks</a></li>
<li><a href='/mouse-stilwell-ks'>mouse in stilwell-ks</a></li>
<li><a href='/mouse-overland-park-ks'>mouse in overland-park-ks</a></li>
<li><a href='/mouse-olathe-ks'>mouse in olathe-ks</a></li>
<li><a href='/mouse-prairie-village-ks'>mouse in prairie-village-ks</a></li>
<li><a href='/mouse-leawood-ks'>mouse in leawood-ks</a></li>
<li><a href='/mouse-peculiar-mo'>mouse in peculiar-mo</a></li>
<li><a href='/mouse-freeman-mo'>mouse in freeman-mo</a></li>
<li><a href='/mouse-harrisonville-mo'>mouse in harrisonville-mo</a></li>
<li><a href='/mouse-drexel-mo'>mouse in drexel-mo</a></li>
<li><a href='/mouse-cleveland-mo'>mouse in cleveland-mo</a></li>
<li><a href='/mouse-loch-lloyd-mo'>mouse in loch-lloyd-mo</a></li>
<li><a href='/mouse-belton-mo'>mouse in belton-mo</a></li>
<li><a href='/mouse-raymore-mo'>mouse in raymore-mo</a></li>
<li><a href='/mouse-grandview-mo'>mouse in grandview-mo</a></li>

</ul>



