import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tick Control Kansas City | All Star Pest Solutions",
  description:
    "Professional Tick Control services in Kansas City and surrounding communities. Guaranteed Service. Guaranteed Results.",
};

export default function Page() {
  return (
    <div className="bg-white">

      <section className="bg-red-700 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-yellow-400">
          Tick Control Kansas City
        </h1>

        <p className="mt-4 text-white font-semibold text-lg">
          Guaranteed Service. Guaranteed Results.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-extrabold">
          Professional Tick Control Services
        </h2>

        <p className="mt-6 text-lg font-semibold text-black/80">
          All Star Pest Solutions provides professional Tick Control
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
<li><a href='/tick-louisburg-ks'>tick in louisburg-ks</a></li>
<li><a href='/tick-paola-ks'>tick in paola-ks</a></li>
<li><a href='/tick-osawatomie-ks'>tick in osawatomie-ks</a></li>
<li><a href='/tick-spring-hill-ks'>tick in spring-hill-ks</a></li>
<li><a href='/tick-stilwell-ks'>tick in stilwell-ks</a></li>
<li><a href='/tick-overland-park-ks'>tick in overland-park-ks</a></li>
<li><a href='/tick-olathe-ks'>tick in olathe-ks</a></li>
<li><a href='/tick-prairie-village-ks'>tick in prairie-village-ks</a></li>
<li><a href='/tick-leawood-ks'>tick in leawood-ks</a></li>
<li><a href='/tick-peculiar-mo'>tick in peculiar-mo</a></li>
<li><a href='/tick-freeman-mo'>tick in freeman-mo</a></li>
<li><a href='/tick-harrisonville-mo'>tick in harrisonville-mo</a></li>
<li><a href='/tick-drexel-mo'>tick in drexel-mo</a></li>
<li><a href='/tick-cleveland-mo'>tick in cleveland-mo</a></li>
<li><a href='/tick-loch-lloyd-mo'>tick in loch-lloyd-mo</a></li>
<li><a href='/tick-belton-mo'>tick in belton-mo</a></li>
<li><a href='/tick-raymore-mo'>tick in raymore-mo</a></li>
<li><a href='/tick-grandview-mo'>tick in grandview-mo</a></li>

</ul>


