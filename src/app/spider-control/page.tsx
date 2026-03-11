import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spider Control Kansas City | All Star Pest Solutions",
  description:
    "Professional Spider Control services in Kansas City and surrounding communities. Guaranteed Service. Guaranteed Results.",
};

export default function Page() {
  return (
    <div className="bg-white">

      <section className="bg-red-700 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-yellow-400">
          Spider Control Kansas City
        </h1>

        <p className="mt-4 text-white font-semibold text-lg">
          Guaranteed Service. Guaranteed Results.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-extrabold">
          Professional Spider Control Services
        </h2>

        <p className="mt-6 text-lg font-semibold text-black/80">
          All Star Pest Solutions provides professional Spider Control
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
<li><a href='/spider-louisburg-ks'>spider in louisburg-ks</a></li>
<li><a href='/spider-paola-ks'>spider in paola-ks</a></li>
<li><a href='/spider-osawatomie-ks'>spider in osawatomie-ks</a></li>
<li><a href='/spider-spring-hill-ks'>spider in spring-hill-ks</a></li>
<li><a href='/spider-stilwell-ks'>spider in stilwell-ks</a></li>
<li><a href='/spider-overland-park-ks'>spider in overland-park-ks</a></li>
<li><a href='/spider-olathe-ks'>spider in olathe-ks</a></li>
<li><a href='/spider-prairie-village-ks'>spider in prairie-village-ks</a></li>
<li><a href='/spider-leawood-ks'>spider in leawood-ks</a></li>
<li><a href='/spider-peculiar-mo'>spider in peculiar-mo</a></li>
<li><a href='/spider-freeman-mo'>spider in freeman-mo</a></li>
<li><a href='/spider-harrisonville-mo'>spider in harrisonville-mo</a></li>
<li><a href='/spider-drexel-mo'>spider in drexel-mo</a></li>
<li><a href='/spider-cleveland-mo'>spider in cleveland-mo</a></li>
<li><a href='/spider-loch-lloyd-mo'>spider in loch-lloyd-mo</a></li>
<li><a href='/spider-belton-mo'>spider in belton-mo</a></li>
<li><a href='/spider-raymore-mo'>spider in raymore-mo</a></li>
<li><a href='/spider-grandview-mo'>spider in grandview-mo</a></li>

</ul>


