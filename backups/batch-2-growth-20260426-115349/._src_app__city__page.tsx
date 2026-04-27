import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuickLeadForm from "@/app/components/QuickLeadForm";
import { getCityBySlug, serviceCities } from "@/data/service-cities";

const siteUrl = "https://allstarpestkc.com";

type PageProps = {
  params: Promise<{
    city: string;
  }>;
};

export function generateStaticParams() {
  return serviceCities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCityBySlug(city);

  if (!cityData) {
    return {
      title: "Pest Control Service Area | All Star Pest Solutions",
    };
  }

  return {
    title: `Pest Control in ${cityData.name}, ${cityData.state} | Free Inspection`,
    description: `Owner-operated pest control in ${cityData.name}, ${cityData.state}. Free inspection, no contracts, starting at $89, guaranteed re-service, and 30+ Years of Experience.`,
    alternates: {
      canonical: `/${cityData.slug}`,
    },
    openGraph: {
      title: `Pest Control in ${cityData.name}, ${cityData.state}`,
      description: `Free inspection, no contracts, guaranteed re-service, and owner-operated pest solutions in ${cityData.name}.`,
      url: `${siteUrl}/${cityData.slug}`,
      type: "website",
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city } = await params;
  const cityData = getCityBySlug(city);

  if (!cityData) return notFound();

  const cityLabel = `${cityData.name}, ${cityData.state}`;

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Pest Control in ${cityLabel}`,
    provider: {
      "@type": "LocalBusiness",
      name: "All Star Pest Solutions",
      telephone: "+1-(913) 738-7827",
      url: siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: cityLabel,
    },
    serviceType: [
      "Residential pest control",
      "Commercial pest control",
      "Termite inspections",
      "Ant control",
      "Spider control",
      "Rodent control",
      "Cockroach control",
      "Mosquito service",
      "Wasps and stinging insect service",
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "89",
      description: "Pest solutions starting at $89. Free inspection available.",
    },
  };

  return (
    <main className="bg-white text-allstarInk">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(citySchema),
        }}
      />

      <section className="bg-allstarBlueDark py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_430px] lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.14em]">
              {cityData.county} • Owner-Operated • No Contracts
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
              Pest Control in {cityLabel}
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/95 md:text-2xl">
              Talk directly to the owner. Free inspection, no mandatory contracts, starting at $89, and guaranteed re-service for homes and businesses in {cityData.name}.
            </p>

            <p className="mt-5 text-2xl font-black text-red-200">
              {cityData.angle.charAt(0).toUpperCase() + cityData.angle.slice(1)}.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="tel:+19137387827" className="rounded-xl bg-red-600 px-8 py-4 text-center text-lg font-black text-white transition hover:bg-red-700">
                CALL (913) 738-STAR
              </a>

              <Link href="/contact" className="rounded-xl bg-white px-8 py-4 text-center text-lg font-black text-black transition hover:bg-slate-100">
                FREE INSPECTION
              </Link>
            </div>
          </div>

          <QuickLeadForm city={cityData.name} compact />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-black text-red-700 md:text-5xl">
            Why {cityData.name} Homeowners Choose All Star
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["30+ Years Experience", "Real field knowledge from someone who has seen what works and what does not."],
              ["No Mandatory Contracts", "Choose recurring protection if you want it. We do not force it."],
              ["Guaranteed Re-Service", "If pests come back between scheduled visits, we come back and make it right."],
              ["Direct Owner Contact", "You talk to the person responsible for solving the problem."],
              ["Family-Conscious Treatments", "Modern treatment methods with respect for families, pets, pollinators, and wildlife."],
              ["Fast Local Help", `Clear next steps for ants, spiders, rodents, roaches, termites, and other pests in ${cityData.name}.`],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-black text-allstarRed">{title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-allstarSlate">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border-2 border-red-600 bg-white p-8 shadow-xl md:p-10">
            <h2 className="text-4xl font-black text-red-700">
              Seeing Ants in Walls in {cityData.name}?
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-slate-800">
              Carpenter ants and acrobat ants are often tied to moisture problems. The same conditions can attract termites — a hidden threat that can cause serious structural damage.
            </p>

            <p className="mt-5 text-xl font-black text-red-700">
              If ants are showing up inside walls, the smart move is a termite inspection.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-black text-red-700">
            Common Pest Problems in {cityData.name}
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {cityData.pests.map((pest) => (
              <Link
                key={pest}
                href={`/pest-library/${pest}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-black capitalize text-allstarInk">
                  {pest}
                </h3>
                <p className="mt-3 text-sm font-semibold text-allstarSlate">
                  Learn what attracts them and when to call.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-allstarBlueLight py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl font-black text-white">
            FAQs for {cityData.name} Pest Service
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              [
                `Do you offer free inspections in ${cityData.name}?`,
                `Yes. Call All Star Pest Solutions for a free inspection and clear recommendation for your pest issue in ${cityData.name}.`,
              ],
              [
                "Do I have to sign a contract?",
                "No. We offer recurring protection, but mandatory contracts are not required.",
              ],
              [
                "What does service start at?",
                "General pest solutions start at $89. Final pricing depends on the pest issue, structure, and treatment needs.",
              ],
              [
                "What happens if pests come back?",
                "Our service is backed by guaranteed re-service. If pests return between scheduled visits, we come back and make it right.",
              ],
            ].map(([question, answer]) => (
              <div key={question} className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black text-allstarRed">{question}</h3>
                <p className="mt-3 text-lg leading-relaxed text-allstarSlate">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-allstarBlueDark py-20 text-center text-white">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-black md:text-5xl">
            Get Ahead of the Problem in {cityData.name}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/95">
            The longer pests go untreated, the worse it gets. Call now and talk directly to the owner.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="tel:+19137387827" className="rounded-xl bg-red-600 px-10 py-5 text-xl font-black text-white transition hover:bg-red-700">
              CALL NOW
            </a>

            <Link href="/service-area" className="rounded-xl bg-white px-10 py-5 text-xl font-black text-black transition hover:bg-slate-100">
              VIEW OTHER CITIES
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


