import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Promise | All Star Pest Solutions",
  description:
    "All Star Pest Solutions promises honest recommendations, no mandatory contracts, direct owner communication, and guaranteed re-service.",
};

export default function OurPromisePage() {
  return (
    <main className="bg-white text-allstarInk">
      <section className="bg-allstarBlueDark py-20 text-center text-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-black uppercase tracking-[0.16em] text-red-200">
            Guaranteed Service. Guaranteed Results.
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            Our Promise to Every Customer
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/95">
            Honest recommendations, direct owner communication, no mandatory contracts,
            and service backed by experience.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+19137387827"
              className="rounded-xl bg-red-600 px-8 py-4 text-lg font-black text-white transition hover:bg-red-700"
            >
              Call (913) 738-STAR
            </a>

            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 text-lg font-black text-black transition hover:bg-slate-100"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
