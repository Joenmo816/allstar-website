import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pest Control Cass County MO | Exterminator Services",
  description:
    "Professional pest control in Cass County MO including Belton, Raymore, Harrisonville and Peculiar. Ant control, bed bugs, termites, rodents and more.",
};

const faqs = [
  {
    question: "What pests are common in Cass County Missouri?",
    answer:
      "Common pests in Cass County include ants, bed bugs, cockroaches, fleas, mosquitoes, rodents, spiders, termites and wasps due to seasonal humidity and expanding residential development.",
  },
  {
    question: "Do you provide termite treatment in Cass County?",
    answer:
      "Yes. We offer professional termite inspections and treatment programs designed to protect homes and businesses in Cass County.",
  },
  {
    question: "How quickly can pest control service be scheduled?",
    answer:
      "Same-day or next-day service is often available depending on scheduling and severity of the infestation.",
  },
  {
    question: "Do you serve Belton and Raymore?",
    answer:
      "Yes. We provide pest control services throughout Belton, Raymore, Harrisonville, Peculiar and surrounding Cass County communities.",
  },
];

export default function CassCountyPage() {
  return (
    <>
      <main className="container mx-auto px-6 py-24 space-y-20">

        {/* HERO */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold">
            Pest Control in Cass County, Missouri
          </h1>

          <p className="text-lg text-gray-700">
            All Star Pest Solutions provides professional exterminator
            services throughout Cass County including{" "}
            <Link href="/belton" className="underline text-[#C1121F]">Belton</Link>,{" "}
            <Link href="/raymore" className="underline text-[#C1121F]">Raymore</Link>,{" "}
            <Link href="/harrisonville" className="underline text-[#C1121F]">Harrisonville</Link>,{" "}
            <Link href="/peculiar" className="underline text-[#C1121F]">Peculiar</Link>, and nearby areas.
          </p>

          <a
            href="tel:+19137387827"
            className="bg-[#C1121F] text-white px-8 py-4 rounded-lg font-semibold inline-block"
          >
            Call (913) 738-7827
          </a>
        </section>

        {/* LOCAL CONDITIONS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Why Pest Activity Is High in Cass County
          </h2>

          <p>
            Cass County’s mix of rural properties, wooded areas, farmland,
            and growing subdivisions creates ideal conditions for pest activity.
            Seasonal humidity, rainfall patterns, and temperature shifts
            increase insect reproduction and rodent movement.
          </p>

          <p>
            As development expands in communities like Belton and Raymore,
            pest habitats are disturbed, pushing ants, cockroaches, fleas,
            spiders and rodents closer to residential structures.
          </p>
        </section>

        {/* SERVICES */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">
            Cass County Pest Control Services
          </h2>

          <div className="space-y-4 text-gray-700">
            <p><strong>Ant Control:</strong> Colony elimination and exterior perimeter defense.</p>
            <p><strong>Bed Bug Treatment:</strong> Professional inspection and complete removal programs.</p>
            <p><strong>Cockroach Control:</strong> Interior and exterior extermination services.</p>
            <p><strong>Flea Treatment:</strong> Full life-cycle disruption for lasting relief.</p>
            <p><strong>Mosquito Control:</strong> Seasonal outdoor population reduction.</p>
            <p><strong>Rodent Removal:</strong> Trapping, exclusion sealing and prevention.</p>
            <p><strong>Spider Control:</strong> Web removal and structural treatments.</p>
            <p><strong>Termite Inspections & Treatment:</strong> Structural protection programs.</p>
            <p><strong>Wasp Removal:</strong> Safe nest removal and deterrent application.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Frequently Asked Questions
          </h2>

          {faqs.map((faq, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-semibold text-[#C1121F]">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-[#111111] text-white p-12 rounded-xl text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Schedule Your Cass County Pest Inspection
          </h2>

          <a
            href="tel:+19137387827"
            className="bg-[#FCA311] text-black px-10 py-4 rounded-lg font-semibold inline-block"
          >
            Call (913) 738-7827
          </a>
        </section>

      </main>
    </>
  );
}

<h2 className='text-2xl font-bold mt-12'>
<h2 className="text-3xl font-bold mb-6 text-center">Other Cities We Service</h2>

<ul>
<li><a href='/cass-louisburg-ks'>cass in louisburg-ks</a></li>
<li><a href='/cass-paola-ks'>cass in paola-ks</a></li>
<li><a href='/cass-osawatomie-ks'>cass in osawatomie-ks</a></li>
<li><a href='/cass-spring-hill-ks'>cass in spring-hill-ks</a></li>
<li><a href='/cass-stilwell-ks'>cass in stilwell-ks</a></li>
<li><a href='/cass-overland-park-ks'>cass in overland-park-ks</a></li>
<li><a href='/cass-olathe-ks'>cass in olathe-ks</a></li>
<li><a href='/cass-prairie-village-ks'>cass in prairie-village-ks</a></li>
<li><a href='/cass-leawood-ks'>cass in leawood-ks</a></li>
<li><a href='/cass-peculiar-mo'>cass in peculiar-mo</a></li>
<li><a href='/cass-freeman-mo'>cass in freeman-mo</a></li>
<li><a href='/cass-harrisonville-mo'>cass in harrisonville-mo</a></li>
<li><a href='/cass-drexel-mo'>cass in drexel-mo</a></li>
<li><a href='/cass-cleveland-mo'>cass in cleveland-mo</a></li>
<li><a href='/cass-loch-lloyd-mo'>cass in loch-lloyd-mo</a></li>
<li><a href='/cass-belton-mo'>cass in belton-mo</a></li>
<li><a href='/cass-raymore-mo'>cass in raymore-mo</a></li>
<li><a href='/cass-grandview-mo'>cass in grandview-mo</a></li>

</ul>



