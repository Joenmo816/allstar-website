import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact All Star Pest Solutions | Kansas City Pest Control",
  description:
    "Contact All Star Pest Solutions for pest control, termite inspections, ants, spiders, rodents, cockroaches, bed bugs, mosquitoes, and more.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Contact All Star Pest Solutions
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Need Pest Help? Call or Text Joe Directly.
        </h1>

        <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
          Send a pest photo, ask about termite inspections, or schedule service. No call center. No runaround.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a href="tel:9137387827" className="rounded-3xl bg-red-700 p-8 text-white shadow-xl">
            <h2 className="text-3xl font-black">Call Now</h2>
            <p className="mt-4 text-xl font-black">(913) 738-7827</p>
            <p className="mt-2 text-red-50">(913) 738-STAR</p>
          </a>

          <a href="sms:9137387827" className="rounded-3xl border-2 border-slate-950 p-8 shadow-xl">
            <h2 className="text-3xl font-black">Text a Pest Photo</h2>
            <p className="mt-4 text-lg font-semibold text-slate-700">
              Not sure what pest you found? Text a clear photo and we’ll help identify it.
            </p>
          </a>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-3xl font-black">Company Information</h2>
          <div className="mt-5 space-y-3 text-lg font-semibold text-slate-700">
            <p>All Star Pest Solutions</p>
            <p>210 W. Cleveland St, Cleveland, MO 64734</p>
            <p>Email: info@allstarpestkc.com</p>
            <p>Website: allstarpestkc.com</p>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/services" className="font-black text-red-700 hover:text-red-900">
            View pest control services →
          </Link>
        </div>
      </section>
    </main>
  );
}
