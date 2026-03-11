import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pest Control Near Me | Kansas City Exterminator",
  description:
    "Looking for pest control near you? All Star Pest Solutions provides professional exterminator services throughout the Kansas City metro including Overland Park, Olathe, Lee's Summit, Belton and Raymore.",
};

export default function PestControlNearMe() {
  return (
    <div className="bg-white">

      <section className="bg-red-700 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-yellow-400">
          Pest Control Near You in Kansas City
        </h1>

        <p className="mt-4 text-white text-lg font-semibold">
          Guaranteed Service. Guaranteed Results.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-extrabold">
          Local Kansas City Exterminator
        </h2>

        <p className="mt-6 text-lg font-semibold text-black/80">
          If you're searching for pest control near you, All Star Pest Solutions
          provides professional pest management throughout the Kansas City metro.
          With more than 30 years of industry experience, inspections are thorough,
          treatments are precise, and long-term prevention is always the goal.
        </p>

        <h3 className="mt-12 text-2xl font-extrabold">
          Common Pests We Eliminate
        </h3>

        <ul className="mt-6 space-y-3 font-semibold text-black/80">
          <li><Link href="/ant-control">Ant Control</Link></li>
          <li><Link href="/spider-control">Spider Control</Link></li>
          <li><Link href="/cockroach-control">Cockroach Control</Link></li>
          <li><Link href="/bed-bug-treatment">Bed Bug Treatment</Link></li>
          <li><Link href="/termite-services">Termite Treatment</Link></li>
          <li><Link href="/mouse-control">Mouse Control</Link></li>
          <li><Link href="/rat-control">Rat Control</Link></li>
        </ul>

        <h3 className="mt-12 text-2xl font-extrabold">
          Areas We Serve
        </h3>

        <ul className="mt-6 space-y-3 font-semibold text-black/80">
          <li><Link href="/overland-park-pest-control">Overland Park Pest Control</Link></li>
          <li><Link href="/olathe-pest-control">Olathe Pest Control</Link></li>
          <li><Link href="/lees-summit-pest-control">Lee's Summit Pest Control</Link></li>
          <li><Link href="/belton-pest-control">Belton Pest Control</Link></li>
          <li><Link href="/raymore-pest-control">Raymore Pest Control</Link></li>
        </ul>

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
<li><a href='/pest-louisburg-ks'>pest in louisburg-ks</a></li>
<li><a href='/pest-paola-ks'>pest in paola-ks</a></li>
<li><a href='/pest-osawatomie-ks'>pest in osawatomie-ks</a></li>
<li><a href='/pest-spring-hill-ks'>pest in spring-hill-ks</a></li>
<li><a href='/pest-stilwell-ks'>pest in stilwell-ks</a></li>
<li><a href='/pest-overland-park-ks'>pest in overland-park-ks</a></li>
<li><a href='/pest-olathe-ks'>pest in olathe-ks</a></li>
<li><a href='/pest-prairie-village-ks'>pest in prairie-village-ks</a></li>
<li><a href='/pest-leawood-ks'>pest in leawood-ks</a></li>
<li><a href='/pest-peculiar-mo'>pest in peculiar-mo</a></li>
<li><a href='/pest-freeman-mo'>pest in freeman-mo</a></li>
<li><a href='/pest-harrisonville-mo'>pest in harrisonville-mo</a></li>
<li><a href='/pest-drexel-mo'>pest in drexel-mo</a></li>
<li><a href='/pest-cleveland-mo'>pest in cleveland-mo</a></li>
<li><a href='/pest-loch-lloyd-mo'>pest in loch-lloyd-mo</a></li>
<li><a href='/pest-belton-mo'>pest in belton-mo</a></li>
<li><a href='/pest-raymore-mo'>pest in raymore-mo</a></li>
<li><a href='/pest-grandview-mo'>pest in grandview-mo</a></li>

</ul>



