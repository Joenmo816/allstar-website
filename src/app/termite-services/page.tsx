import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Termite Treatment & Termidor Experts in Kansas City",
  description:
    "Subterranean termite inspections and Termidor treatments in South Kansas City. Protect your home from costly hidden termite damage.",
};

const warningPoints = [
  "Mud tubes along foundations or walls",
  "Discarded wings near windows, doors, or lights",
  "Soft, hollow, or brittle wood",
  "Warped trim, bubbling paint, or soft flooring",
];

const trustPoints = [
  "30+ years of real field experience",
  "Kansas & Missouri service areas",
  "Professional inspections",
  "Hidden damage detection",
  "Termidor treatment options",
  "Direct owner-level service",
];

export default function TermiteServicesPage() {
  const basfPledge =
    "https://pestcontrol.basf.us/content/dam/cxm/agriculture/pest-control/us/en/multimedia-and-resources/pdf/Termidor_10Year_Pledge_2022.pdf";

  const termiteDamageSource =
    "https://www.pestworld.org/multimedia-center/press-releases/termites-eat-right-through-american-homes-and-most-owners-wont-see-it-coming/";

  const insuranceSource =
    "https://www.iii.org/article/which-disasters-are-covered-by-homeowners-insurance";

  return (
    <>
      <Script
        id="termite-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "All Star Pest Solutions",
              url: "https://allstarpestkc.com",
              telephone: "+1-(913) 738-7827",
              areaServed: [
                "Johnson County KS",
                "Miami County KS",
                "Cass County MO",
                "Jackson County MO",
                "Overland Park KS",
                "Olathe KS",
                "Gardner KS",
                "Spring Hill KS",
                "Louisburg KS",
                "Paola KS",
                "Osawatomie KS",
                "Bucyrus KS",
                "Stillwell KS",
                "Leawood KS",
                "Lenexa KS",
                "Prairie Village KS",
                "Belton MO",
                "Raymore MO",
                "Peculiar MO",
                "Harrisonville MO",
                "Garden City MO",
                "Freeman MO",
                "Drexel MO",
                "Cleveland MO",
                "Loch Lloyd MO",
                "South Kansas City MO",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Termite Inspection and Treatment",
              provider: {
                "@type": "LocalBusiness",
                name: "All Star Pest Solutions",
              },
              areaServed: "South Kansas City Metro Area",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How do I know if I have termites?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Common signs include mud tubes, discarded wings, hollow wood, soft spots, or blistered paint. Termites often work silently behind walls.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the difference between termite swarmers and flying ants?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Termite swarmers have straight antennae, thick waists, and equal-length wings. Flying ants have elbowed antennae, narrow waists, and uneven wing sizes.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <main className="bg-white pb-20">
        <section className="relative overflow-hidden">
          <div className="relative min-h-[760px] w-full">
            <Image
              src="/images/termiterun.png"
              alt="Termite mud tube on home foundation"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,22,56,0.95)_0%,rgba(16,61,156,0.78)_45%,rgba(16,61,156,0.38)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-8 px-6 pb-14 pt-16 lg:grid-cols-[minmax(0,1fr)_500px] lg:px-8">
              <div className="max-w-4xl text-white">
                <div className="mb-5 inline-flex rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-white">
                  Protect Your Home from Hidden Structural Damage
                </div>

                <Image
                  src="/logo-header-v2.png"
                  alt="All Star Pest Solutions logo"
                  width={1600}
                  height={500}
                  className="mb-6 h-auto w-full max-w-[460px] sm:max-w-[560px] md:max-w-[650px] lg:max-w-[760px]"
                  priority
                  unoptimized
                />

                <h1 className="text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
                  Termite Inspections & Treatment
                </h1>

                <p className="mt-4 max-w-3xl text-xl leading-8 text-white/95 sm:text-2xl">
                  Professional termite inspections and treatment throughout the
                  South Kansas City metro. We help protect homes in Kansas and
                  Missouri from costly subterranean termite damage.
                </p>

                <p className="mt-5 text-2xl font-black sm:text-3xl">
                  Hidden Damage Can Turn Into Major Repairs
                </p>

                <p className="mt-2 text-xl font-black text-red-300 sm:text-2xl">
                  Catch It Early. Protect It Now.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-5 text-xl font-extrabold uppercase tracking-[0.04em] text-black shadow-xl transition hover:bg-slate-100 md:text-2xl"
                  >
                    Schedule Inspection
                  </Link>

                  <a
                    href="tel:+19137387827"
                    className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-5 text-xl font-extrabold uppercase tracking-[0.04em] text-white shadow-xl transition hover:bg-red-700 md:text-2xl"
                  >
                    Call (913) 738-STAR
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {trustPoints.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.08em] text-white"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative hidden h-[600px] w-[480px] lg:block">
                <Image
                  src="/mascot.png"
                  alt="All Star mascot"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-red-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl border-2 border-red-600 bg-white p-10 shadow-xl">
              <h2 className="text-4xl font-black leading-tight text-red-700 md:text-5xl">
                Termites Are the Hidden Danger
              </h2>

              <p className="mt-6 text-xl leading-relaxed text-slate-800 md:text-2xl">
                Unlike many other pests, termites often work quietly behind
                walls, below flooring, and inside structural wood long before
                the homeowner sees obvious signs.
              </p>

              <p className="mt-6 text-xl leading-relaxed text-slate-800 md:text-2xl">
                Did you know that Termites cause more property damage in the United States than all natural
                disasters combined.
              </p>

              <p className="mt-6 text-xl font-black leading-relaxed text-red-700 md:text-2xl">
                If you have seen termite swarmers, mud tubes, or suspicious wood
                damage, do not wait.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-5 text-xl font-extrabold uppercase tracking-[0.04em] text-white transition hover:bg-red-700 md:text-2xl"
                >
                  Book Termite Inspection
                </Link>

                <a
                  href="tel:+19137387827"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-red-600 bg-white px-8 py-5 text-xl font-extrabold uppercase tracking-[0.04em] text-black transition hover:bg-red-50 md:text-2xl"
                >
                  Call (913) 738-STAR
                </a>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={termiteDamageSource}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-lg font-extrabold text-white transition hover:bg-slate-800"
                >
                  View Damage Source
                </a>

                <a
                  href={insuranceSource}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-slate-900 bg-white px-8 py-4 text-lg font-extrabold text-black transition hover:bg-slate-100"
                >
                  View Insurance Source
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="mb-6 text-5xl font-black text-red-700">
              Termites Cause Billions in Damage Every Year
            </h2>

            <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
              Termite destruction happens quietly, around the clock, often
              without visible warning until serious damage is already done. That
              is what makes termite infestations so expensive and so dangerous
              to ignore.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={termiteDamageSource}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-extrabold text-white transition hover:bg-red-700"
              >
                National Termite Damage Source
              </a>

              <a
                href={insuranceSource}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border-2 border-red-600 bg-white px-8 py-4 text-lg font-extrabold text-black transition hover:bg-red-50"
              >
                Insurance Coverage Source
              </a>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-8 text-center text-5xl font-black text-red-700">
              Why Termites Are Common in Kansas City Homes
            </h2>

            <p className="mb-8 text-xl leading-relaxed text-gray-700 md:text-2xl">
              The Kansas City metro sits directly in the range of the Eastern
              Subterranean Termite, the most destructive termite species in
              North America. These termites thrive in the soil and moisture
              conditions found throughout Johnson County, Miami County, Cass
              County, and Jackson County.
            </p>

            <p className="mb-8 text-xl leading-relaxed text-gray-700 md:text-2xl">
              Subterranean termites live underground and build mud tunnels to
              travel from their colony to wood inside structures. Because they
              work inside walls, crawlspaces, and foundations, damage often goes
              unnoticed until it becomes severe.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
              Regular professional inspections are one of the best ways to catch
              termite activity early and prevent expensive structural damage.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
            <Image
              src="/images/termites.png"
              alt="Termite workers and soldiers in damaged wood"
              width={900}
              height={700}
              className="rounded-lg shadow-lg"
            />

            <div>
              <h2 className="mb-6 text-4xl font-black text-red-700">
                Signs of Termite Activity
              </h2>

              <ul className="list-disc space-y-4 pl-6 text-xl leading-relaxed text-gray-700">
                {warningPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-black">
              Ask About the BASF Termidor 10-Year Pledge
            </h2>

            <p className="mt-4 max-w-3xl text-xl leading-relaxed text-white/80">
              Termidor is one of the most trusted names in termite control. If
              you want strong long-term protection, ask us about qualifying
              treatment options and the BASF Termidor pledge.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+19137387827"
                className="inline-flex items-center justify-center rounded-lg bg-allstarBlueLight px-6 py-4 text-lg font-extrabold text-slate-900 hover:bg-allstarBlueLight"
              >
                Call (913) 738-STAR
              </a>

              <a
                href={basfPledge}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-4 text-lg font-extrabold hover:bg-white/10"
              >
                View BASF Pledge
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-4 text-lg font-extrabold hover:bg-white/10"
              >
                Request Inspection
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

