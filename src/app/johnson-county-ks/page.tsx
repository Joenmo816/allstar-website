import { Metadata } from "next";
import Link from "next/link";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Pest Control Johnson County KS | Exterminator Services",
  description:
    "Professional pest control in Johnson County KS. We treat ants, bed bugs, cockroaches, fleas, mosquitoes, rodents, spiders, termites and wasps.",
};

const faqs = [
  {
    question: "What pests are most common in Johnson County, Kansas?",
    answer:
      "Common pests in Johnson County include ants, bed bugs, cockroaches, fleas, mosquitoes, rodents, spiders, termites, and wasps due to seasonal climate changes and suburban development.",
  },
  {
    question: "Do you offer bed bug treatment in Johnson County?",
    answer:
      "Yes. We provide professional bed bug inspection and treatment services for homes and businesses throughout Johnson County.",
  },
  {
    question: "Do I need annual termite inspections in Kansas?",
    answer:
      "Yes. Annual termite inspections are strongly recommended due to Kansas soil conditions and subterranean termite activity.",
  },
  {
    question: "Are pest control treatments safe for pets and children?",
    answer:
      "All treatments are applied according to professional safety standards and label guidelines.",
  },
  {
    question: "How quickly can service be scheduled?",
    answer:
      "We often provide same-day or next-day pest control service depending on availability.",
  },
];

export default function JohnsonCountyPage() {
  return (
    <>
      <main className="container mx-auto px-4 py-12 space-y-20">

        {/* HERO */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold">
            Pest Control in Johnson County, Kansas
          </h1>

          <p className="text-lg">
            All Star Pest Solutions provides professional exterminator services
            throughout Johnson County including{" "}
            <Link href="/overland-park" className="underline">Overland Park</Link>,{" "}
            <Link href="/olathe" className="underline">Olathe</Link>,{" "}
            <Link href="/lenexa" className="underline">Lenexa</Link>,{" "}
            <Link href="/leawood" className="underline">Leawood</Link>,{" "}
            <Link href="/shawnee" className="underline">Shawnee</Link>,{" "}
            <Link href="/gardner" className="underline">Gardner</Link>,{" "}
            <Link href="/spring-hill" className="underline">Spring Hill</Link>,{" "}
            <Link href="/mission" className="underline">Mission</Link>, and{" "}
            <Link href="/prairie-village" className="underline">Prairie Village</Link>.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="tel:+19137387827"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold"
            >
              Call (913) 738-7827
            </a>

            <Link
              href="/services"
              className="border border-primary px-6 py-3 rounded-lg font-semibold"
            >
              View All Services
            </Link>
          </div>
        </section>

        <TrustBadges />

        {/* WHY PESTS THRIVE */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Why Pest Problems Are Common in Johnson County
          </h2>

          <p>
            Johnson County’s humid summers, freezing winters, expanding
            suburban neighborhoods, and irrigated landscaping create ideal
            conditions for pest activity. Subterranean termites thrive in
            Kansas soil, rodents seek shelter in colder months, and insects
            multiply quickly during warmer seasons.
          </p>
        </section>

        {/* SERVICES */}
        <section className="space-y-10">
          <h2 className="text-2xl font-semibold">
            Johnson County Pest Control Services
          </h2>

          <div className="space-y-6">
            <p><strong>Ant Control:</strong> Targeted treatments eliminate colonies and prevent reinfestation.</p>
            <p><strong>Bed Bug Treatment:</strong> Professional inspections and elimination programs.</p>
            <p><strong>Cockroach Control:</strong> Effective extermination and prevention solutions.</p>
            <p><strong>Flea Treatment:</strong> Complete life-cycle disruption for long-term relief.</p>
            <p><strong>Mosquito Control:</strong> Seasonal treatments to reduce outdoor populations.</p>
            <p><strong>Rodent Removal:</strong> Trapping, exclusion sealing, and prevention.</p>
            <p><strong>Spider Control:</strong> Interior and exterior treatments to reduce activity.</p>
            <p><strong>Termite Inspections & Treatment:</strong> Annual inspections and structural protection.</p>
            <p><strong>Wasp Control:</strong> Safe nest removal and preventative measures.</p>
          </div>

          <Link href="/services" className="underline text-primary">
            Explore All Pest Control Services
          </Link>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gray-100 p-10 rounded-xl text-center space-y-4">
          <h2 className="text-2xl font-semibold">
            Schedule Your Johnson County Pest Inspection
          </h2>

          <a
            href="tel:+19137387827"
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold inline-block"
          >
            Call (913) 738-7827
          </a>
        </section>

      </main>

      {/* SERVICE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Pest Control",
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Johnson County, Kansas",
            },
            provider: {
              "@type": "LocalBusiness",
              name: "All Star Pest Solutions",
              telephone: "+19137387827",
              url: "https://www.allstarpestkc.com",
            },
          }),
        }}
      />

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}