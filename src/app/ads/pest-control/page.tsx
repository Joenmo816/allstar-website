import type { Metadata } from "next";
import Link from "next/link";
import QuickLeadForm from "@/app/components/QuickLeadForm";
import TrustProof from "@/app/components/TrustProof";
import GuaranteeBox from "@/app/components/GuaranteeBox";
import OfferBlock from "@/app/components/OfferBlock";
import ReviewProof from "@/app/components/ReviewProof";
import { featuredCities, serviceCities } from "@/data/service-cities";

export const metadata: Metadata = {
  title: "Pest Control Near Me | Free Inspection | All Star Pest Solutions",
  description:
    "Owner-operated pest control with free inspections, no contracts, starting at $89, guaranteed re-service, and 30+ Years of Experience.",
};

export default function AdsPestControlPage() {
  return (
    <main className="bg-white text-allstarInk">
      <section className="bg-allstarBlueDark py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_430px] lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.14em]">
              Free Inspection • No Contracts • Starting at $89
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
              Pest Control Without the Call-Center Runaround
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/95 md:text-2xl">
              Talk directly to the owner. Get fast help for ants, spiders, rodents, cockroaches, wasps, mosquitoes, and termite concerns.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="tel:+19137387827" className="rounded-xl bg-red-600 px-8 py-4 text-center text-lg font-black text-white transition hover:bg-red-700">
                CALL (913) 738-STAR
              </a>

              <a href="#quote" className="rounded-xl bg-white px-8 py-4 text-center text-lg font-black text-black transition hover:bg-slate-100">
                GET FREE QUOTE
              </a>
            </div>

            <div className="mt-6 max-w-2xl">
              <GuaranteeBox />
            </div>
          </div>

          <div id="quote">
            <QuickLeadForm compact />
          </div>
        </div>
      </section>

      <TrustProof />
      <OfferBlock />
      <ReviewProof />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-black text-red-700">
            High-Priority Service Cities
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredCities.map((city) => (
              <Link key={city.slug} href={`/${city.slug}`} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <p className="text-sm font-black uppercase tracking-[0.12em] text-allstarBlue">
                  {city.primaryKeyword}
                </p>
                <h3 className="mt-2 text-3xl font-black text-allstarRed">
                  {city.name}, {city.state}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-allstarSlate">
                  {city.offerAngle}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/service-area" className="btn-secondary">
              View All {serviceCities.length} Service Areas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


