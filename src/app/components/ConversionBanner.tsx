import Link from "next/link";

export default function ConversionBanner() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-500">
          Need Pest Help Fast?
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-5xl">
          Call the Local Owner — Not a Call Center
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
          All Star Pest Solutions serves the south Kansas City metro with real pest solutions, no mandatory contracts, and over 30 years of experience.
        </p>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row">
          <a href="tel:9137387827" className="rounded-xl bg-red-700 px-7 py-4 text-center text-lg font-black text-white hover:bg-red-800">
            Call Now: (913) 738-7827
          </a>

          <a href="sms:9137387827" className="rounded-xl bg-white px-7 py-4 text-center text-lg font-black text-slate-950 hover:bg-slate-100">
            Text a Pest Photo
          </a>

          <Link href="/services" className="rounded-xl border-2 border-white px-7 py-4 text-center text-lg font-black text-white hover:bg-white hover:text-slate-950">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
