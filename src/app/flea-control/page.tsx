import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flea Control Kansas City | All Star Pest Solutions",
  description:
    "Professional Flea Control services in Kansas City and surrounding communities. Guaranteed Service. Guaranteed Results.",
};

export default function Page() {
  return (
    <div className="bg-white">

      <section className="bg-red-700 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-yellow-400">
          Flea Control Kansas City
        </h1>

        <p className="mt-4 text-white font-semibold text-lg">
          Guaranteed Service. Guaranteed Results.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-extrabold">
          Professional Flea Control Services
        </h2>

        <p className="mt-6 text-lg font-semibold text-black/80">
          All Star Pest Solutions provides professional Flea Control
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
<li><a href='/flea-louisburg-ks'>flea in louisburg-ks</a></li>
<li><a href='/flea-paola-ks'>flea in paola-ks</a></li>
<li><a href='/flea-osawatomie-ks'>flea in osawatomie-ks</a></li>
<li><a href='/flea-spring-hill-ks'>flea in spring-hill-ks</a></li>
<li><a href='/flea-stilwell-ks'>flea in stilwell-ks</a></li>
<li><a href='/flea-overland-park-ks'>flea in overland-park-ks</a></li>
<li><a href='/flea-olathe-ks'>flea in olathe-ks</a></li>
<li><a href='/flea-prairie-village-ks'>flea in prairie-village-ks</a></li>
<li><a href='/flea-leawood-ks'>flea in leawood-ks</a></li>
<li><a href='/flea-peculiar-mo'>flea in peculiar-mo</a></li>
<li><a href='/flea-freeman-mo'>flea in freeman-mo</a></li>
<li><a href='/flea-harrisonville-mo'>flea in harrisonville-mo</a></li>
<li><a href='/flea-drexel-mo'>flea in drexel-mo</a></li>
<li><a href='/flea-cleveland-mo'>flea in cleveland-mo</a></li>
<li><a href='/flea-loch-lloyd-mo'>flea in loch-lloyd-mo</a></li>
<li><a href='/flea-belton-mo'>flea in belton-mo</a></li>
<li><a href='/flea-raymore-mo'>flea in raymore-mo</a></li>
<li><a href='/flea-grandview-mo'>flea in grandview-mo</a></li>

</ul>


