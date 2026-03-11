import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
        Pest Control Pricing
      </h1>

      <p className="text-lg text-gray-700 mb-10 text-center">
        At All Star Pest Solutions, we believe in transparent, straightforward pricing.
        No hidden fees, no mandatory contracts — just reliable service at a fair price.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* General Pest Control */}
        <div className="border rounded-lg shadow-sm bg-white p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
            General Pest Control
          </h2>
          <p className="text-gray-600 mb-4 text-center">
            Protection against ants, spiders, roaches, crickets, and more.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Interior + Exterior Treatment</li>
            <li>Child & Pet Safe Solutions</li>
            <li>Seasonal Protection Plans</li>
          </ul>
          <p className="text-lg font-bold text-center text-green-700 mb-4">
            Starting at $89
          </p>
        </div>

        {/* Termite Treatments */}
        <div className="border rounded-lg shadow-sm bg-white p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
            Termite Services
          </h2>
          <p className="text-gray-600 mb-4 text-center">
            Inspections and treatments using Termidor® — the most trusted name in termite protection.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>FHA/VA & Refinance Inspections</li>
            <li>Comprehensive Barrier Protection</li>
            <li>Guaranteed Results</li>
          </ul>
          <p className="text-lg font-bold text-center text-green-700 mb-4">
            FHA/VA/Refinance Inspection: $85
            <span className="block">Treatment: Custom Quote</span>
          </p>
        </div>

        {/* Commercial Plans */}
        <div className="border rounded-lg shadow-sm bg-white p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
            Commercial Plans
          </h2>
          <p className="text-gray-600 mb-4 text-center">
            Safe, effective pest management for restaurants, hotels, offices, and more.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Custom Service Plans</li>
            <li>Eco-Friendly Treatments</li>
            <li>Discreet & Professional</li>
          </ul>
          <p className="text-lg font-bold text-center text-green-700 mb-4">
            Custom Pricing
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-block rounded bg-green-700 text-white font-semibold px-6 py-3 hover:bg-green-800 transition-colors"
        >
          Request a Free Quote
        </Link>
      </div>
    </main>
  );
}



<h2 className='text-2xl font-bold mt-12'>
<h2 className="text-3xl font-bold mb-6 text-center">Other Cities We Service</h2>

<ul>
<li><a href='/pricing-louisburg-ks'>pricing in louisburg-ks</a></li>
<li><a href='/pricing-paola-ks'>pricing in paola-ks</a></li>
<li><a href='/pricing-osawatomie-ks'>pricing in osawatomie-ks</a></li>
<li><a href='/pricing-spring-hill-ks'>pricing in spring-hill-ks</a></li>
<li><a href='/pricing-stilwell-ks'>pricing in stilwell-ks</a></li>
<li><a href='/pricing-overland-park-ks'>pricing in overland-park-ks</a></li>
<li><a href='/pricing-olathe-ks'>pricing in olathe-ks</a></li>
<li><a href='/pricing-prairie-village-ks'>pricing in prairie-village-ks</a></li>
<li><a href='/pricing-leawood-ks'>pricing in leawood-ks</a></li>
<li><a href='/pricing-peculiar-mo'>pricing in peculiar-mo</a></li>
<li><a href='/pricing-freeman-mo'>pricing in freeman-mo</a></li>
<li><a href='/pricing-harrisonville-mo'>pricing in harrisonville-mo</a></li>
<li><a href='/pricing-drexel-mo'>pricing in drexel-mo</a></li>
<li><a href='/pricing-cleveland-mo'>pricing in cleveland-mo</a></li>
<li><a href='/pricing-loch-lloyd-mo'>pricing in loch-lloyd-mo</a></li>
<li><a href='/pricing-belton-mo'>pricing in belton-mo</a></li>
<li><a href='/pricing-raymore-mo'>pricing in raymore-mo</a></li>
<li><a href='/pricing-grandview-mo'>pricing in grandview-mo</a></li>

</ul>



