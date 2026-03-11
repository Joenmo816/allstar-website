import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ant Control Kansas City | All Star Pest Solutions",
  description:
    "Professional Ant Control services in Kansas City and surrounding communities. Guaranteed Service. Guaranteed Results.",
};

export default function Page() {
  return (
    <div className="bg-white">

      <section className="bg-red-700 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-yellow-400">
          Ant Control Kansas City
        </h1>

        <p className="mt-4 text-white font-semibold text-lg">
          Guaranteed Service. Guaranteed Results.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-extrabold">
          Professional Ant Control Services
        </h2>

        <p className="mt-6 text-lg font-semibold text-black/80">
          All Star Pest Solutions provides professional Ant Control
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
<li><a href='/ant-louisburg-ks'>ant in louisburg-ks</a></li>
<li><a href='/ant-paola-ks'>ant in paola-ks</a></li>
<li><a href='/ant-osawatomie-ks'>ant in osawatomie-ks</a></li>
<li><a href='/ant-spring-hill-ks'>ant in spring-hill-ks</a></li>
<li><a href='/ant-stilwell-ks'>ant in stilwell-ks</a></li>
<li><a href='/ant-overland-park-ks'>ant in overland-park-ks</a></li>
<li><a href='/ant-olathe-ks'>ant in olathe-ks</a></li>
<li><a href='/ant-prairie-village-ks'>ant in prairie-village-ks</a></li>
<li><a href='/ant-leawood-ks'>ant in leawood-ks</a></li>
<li><a href='/ant-peculiar-mo'>ant in peculiar-mo</a></li>
<li><a href='/ant-freeman-mo'>ant in freeman-mo</a></li>
<li><a href='/ant-harrisonville-mo'>ant in harrisonville-mo</a></li>
<li><a href='/ant-drexel-mo'>ant in drexel-mo</a></li>
<li><a href='/ant-cleveland-mo'>ant in cleveland-mo</a></li>
<li><a href='/ant-loch-lloyd-mo'>ant in loch-lloyd-mo</a></li>
<li><a href='/ant-belton-mo'>ant in belton-mo</a></li>
<li><a href='/ant-raymore-mo'>ant in raymore-mo</a></li>
<li><a href='/ant-grandview-mo'>ant in grandview-mo</a></li>

</ul>


