import Link from "next/link";

export default function StrongCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-3xl bg-red-700 p-8 text-white shadow-xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-100">
          Same-Day / Next-Day Availability
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-5xl">
          Pest Problem? Don’t Wait Until It Gets Worse.
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-red-50">
          Call or text Joe directly. No call center. Real help.
        </p>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row">
          <a href="tel:9137387827" className="rounded-xl bg-white px-7 py-4 text-lg font-black text-red-700">
            Call (913) 738-7827
          </a>

          <a href="sms:9137387827" className="rounded-xl border-2 border-white px-7 py-4 text-lg font-black text-white">
            Text a Pest Photo
          </a>

          <Link href="/contact" className="rounded-xl bg-slate-950 px-7 py-4 text-lg font-black text-white">
            Contact Page
          </Link>
        </div>
      </div>
    </section>
  );
}
