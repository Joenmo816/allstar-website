import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Control in Cleveland, MO | All Star Pest Solutions",
  description: "Professional pest control services in Cleveland, MO. Residential and commercial extermination services. Call (913) 738-7827 today.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">
        Pest Control Services in Cleveland, MO
      </h1>

      <p className="mb-6 text-gray-700">
        All Star Pest Solutions provides expert residential and commercial pest control in Cleveland, MO. 
        We eliminate ants, spiders, termites, rodents, cockroaches, wasps, fleas, and more using safe and effective treatment methods.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Our Pest Control Services Include:
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>General Pest Control</li>
        <li>Ant & Spider Treatments</li>
        <li>Rodent Control & Exclusion</li>
        <li>Termite Inspections & Treatments</li>
        <li>Wasp & Hornet Nest Removal</li>
        <li>Quarterly Preventative Maintenance Plans</li>
      </ul>

      <div className="mt-10 p-6 bg-gray-100 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">
          Need Pest Control in Cleveland?
        </h3>
        <p className="mb-4">
          Call All Star Pest Solutions today for fast, reliable service in Cleveland, MO.
        </p>
        <a
          href="tel:+19137387827"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Call (913) 738-7827
        </a>
      </div>
    </main>
  );
}

<hr />
<h2>Nearby Service Areas</h2>
<ul>
<li><a href='/belton'>Pest Control in Belton</a></li>
<li><a href='/drexel'>Pest Control in Drexel</a></li>
<li><a href='/freeman'>Pest Control in Freeman</a></li>
<li><a href='/grandview'>Pest Control in Grandview</a></li>
<li><a href='/harrisonville'>Pest Control in Harrisonville</a></li>
<li><a href='/kansas-city'>Pest Control in Kansas City</a></li>

</ul>


<script
type='application/ld+json'
dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "All Star Pest Control",
  "areaServed": "Cleveland",
  "url": "https://www.allstarpestkc.com/cleveland"
})}}
/>


<section>
<h2>Why Choose Our Pest Control Services in </h2>
<p>
Our licensed exterminators provide residential and commercial pest control
in Cleveland. We specialize in termite treatment, rodent control, bed bug removal,
ant extermination, and preventative pest management programs.
</p>

<h2>Common Pest Problems in Cleveland</h2>
<p>
Homes and businesses in Cleveland commonly experience issues with termites,
mice, spiders, ants, and wasps. Our team provides fast response and
custom treatment plans tailored for Cleveland properties.
</p>
</section>


<section>
<h2>Why Choose Our Pest Control Services in </h2>
<p>
Our licensed exterminators provide residential and commercial pest control
in Cleveland. We specialize in termite treatment, rodent control, bed bug removal,
ant extermination, and preventative pest management programs.
</p>

<h2>Common Pest Problems in Cleveland</h2>
<p>
Homes and businesses in Cleveland commonly experience issues with termites,
mice, spiders, ants, and wasps. Our team provides fast response and
custom treatment plans tailored for Cleveland properties.
</p>
</section>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How much does pest control cost in ",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Pricing depends on property size and infestation severity. Contact All Star Pest Control for a free inspection in Cleveland."
    }
  },{
    "@type": "Question",
    "name": "Do you offer termite treatment in ",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. We provide professional termite inspections and treatments in Cleveland."
    }
  }]
}
</script>
