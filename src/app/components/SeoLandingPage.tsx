import Link from "next/link";
import SeoInternalLinks from "./SeoInternalLinks";

type SeoPageProps = {
  title: string;
  eyebrow: string;
  description: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  ctaTitle?: string;
};

export default function SeoLandingPage({
  title,
  eyebrow,
  description,
  sections,
  ctaTitle = "Need help today? Call All Star Pest Solutions.",
}: SeoPageProps) {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-red-700">
          {eyebrow}
        </p>

        <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
          {description}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:9137387827"
            className="rounded-xl bg-red-700 px-7 py-4 text-center text-lg font-black text-white shadow-lg hover:bg-red-800"
          >
            Call Now: (913) 738-7827
          </a>

          <a
            href="sms:9137387827"
            className="rounded-xl border-2 border-slate-950 px-7 py-4 text-center text-lg font-black text-slate-950 hover:bg-slate-100"
          >
            Text a Pest Photo
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-bold">
            30+ Years Experience
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-bold">
            No Mandatory Contracts
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-bold">
            Licensed in Kansas & Missouri
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6">
          {sections.map((section) => (
            <article
              key={section.heading}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-2xl font-black text-slate-950">
                {section.heading}
              </h2>

              <div className="mt-4 space-y-4 text-lg leading-8 text-slate-700">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white">
          <h2 className="text-3xl font-black">{ctaTitle}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Talk directly with the owner/technician. No call center. No scare tactics.
            Just real pest solutions for Kansas City area homes and businesses.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:9137387827"
              className="rounded-xl bg-red-700 px-7 py-4 text-center text-lg font-black text-white hover:bg-red-800"
            >
              Call (913) 738-STAR
            </a>

            <Link
              href="/"
              className="rounded-xl bg-white px-7 py-4 text-center text-lg font-black text-slate-950 hover:bg-slate-100"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <a
          href="tel:9137387827"
          className="block rounded-2xl bg-red-700 px-6 py-4 text-center text-lg font-black text-white shadow-2xl"
        >
          CALL NOW — SAME DAY / NEXT DAY SERVICE
        </a>
      </div>
    
      <SeoInternalLinks />
    </main>
  );
}



