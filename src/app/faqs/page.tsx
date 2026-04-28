import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pest Control FAQs Kansas City | All Star Pest Solutions",
  description:
    "Frequently asked questions about termite inspections, ants, spiders, rodents, cockroaches, mosquitoes, bed bugs, service plans, and pest control in Kansas City.",
};

const faqs = [
  {
    q: "Do I need a contract for pest control?",
    a: "No. All Star Pest Solutions does not require mandatory contracts. Customers can choose one-time service or recurring service based on what they need.",
  },
  {
    q: "Why should carpenter ants inside walls concern me?",
    a: "Carpenter ants are often connected to moisture-damaged wood. Moisture can also attract termites, and ants may prey on termites. If ants are active inside walls, a termite inspection is a smart move.",
  },
  {
    q: "Do you offer termite inspections for VA and FHA loans?",
    a: "Yes. All Star Pest Solutions provides termite inspections for VA loans, FHA transactions, real estate closings, and homeowners.",
  },
  {
    q: "Are your treatments environmentally responsible?",
    a: "Yes. We use safe, modern, targeted pest control methods and take a pollinator-conscious approach whenever possible.",
  },
  {
    q: "Can I text a photo of a pest?",
    a: "Yes. You can text a photo to (913) 738-7827 and we can help identify what you found.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the south Kansas City metro including Overland Park, Belton, Raymore, Lee's Summit, Stilwell, Louisburg, Harrisonville, Peculiar, Spring Hill, Cleveland, and surrounding communities.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Pest Control FAQs
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Kansas City Pest Control Questions — Answered Straight
        </h1>

        <p className="mt-6 text-xl font-semibold leading-8 text-slate-700">
          Clear answers about pest control, termites, ants, inspections, treatment safety, and service areas.
        </p>

        <div className="mt-10 space-y-5">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <h2 className="text-2xl font-black">{faq.q}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white">
          <h2 className="text-3xl font-black">Still Have Questions?</h2>
          <p className="mt-4 text-lg leading-8 text-slate-200">
            Call or text Joe directly. Send a pest photo, ask about service, or schedule an inspection.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:9137387827"
              className="rounded-xl bg-red-700 px-7 py-4 text-center text-lg font-black text-white hover:bg-red-800"
            >
              Call (913) 738-7827
            </a>

            <Link
              href="/services"
              className="rounded-xl bg-white px-7 py-4 text-center text-lg font-black text-slate-950 hover:bg-slate-100"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
