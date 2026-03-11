import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rat Control Kansas City | All Star Pest Solutions",
  description:
    "Professional Rat Control services in Kansas City and surrounding communities. Guaranteed Service. Guaranteed Results.",
};

export default function Page() {
  return (
    <div className="bg-white">

      <section className="bg-red-700 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-yellow-400">
          Rat Control Kansas City
        </h1>

        <p className="mt-4 text-white font-semibold text-lg">
          Guaranteed Service. Guaranteed Results.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-extrabold">
          Professional Rat Control Services
        </h2>

        <p className="mt-6 text-lg font-semibold text-black/80">
          All Star Pest Solutions provides professional Rat Control
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
Other Cities We Service
</h2>

<ul>
<li><a href='/rat-louisburg-ks'>rat in louisburg-ks</a></li>
<li><a href='/rat-paola-ks'>rat in paola-ks</a></li>
<li><a href='/rat-osawatomie-ks'>rat in osawatomie-ks</a></li>
<li><a href='/rat-spring-hill-ks'>rat in spring-hill-ks</a></li>
<li><a href='/rat-stilwell-ks'>rat in stilwell-ks</a></li>
<li><a href='/rat-overland-park-ks'>rat in overland-park-ks</a></li>
<li><a href='/rat-olathe-ks'>rat in olathe-ks</a></li>
<li><a href='/rat-prairie-village-ks'>rat in prairie-village-ks</a></li>
<li><a href='/rat-leawood-ks'>rat in leawood-ks</a></li>
<li><a href='/rat-peculiar-mo'>rat in peculiar-mo</a></li>
<li><a href='/rat-freeman-mo'>rat in freeman-mo</a></li>
<li><a href='/rat-harrisonville-mo'>rat in harrisonville-mo</a></li>
<li><a href='/rat-drexel-mo'>rat in drexel-mo</a></li>
<li><a href='/rat-cleveland-mo'>rat in cleveland-mo</a></li>
<li><a href='/rat-loch-lloyd-mo'>rat in loch-lloyd-mo</a></li>
<li><a href='/rat-belton-mo'>rat in belton-mo</a></li>
<li><a href='/rat-raymore-mo'>rat in raymore-mo</a></li>
<li><a href='/rat-grandview-mo'>rat in grandview-mo</a></li>

</ul>


