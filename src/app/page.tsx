import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative h-[52vh] md:h-[64vh] overflow-hidden">
        <Image
          src="/images/kc.jpg"
          alt="Kansas City Skyline with Union Station"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="badge">Locally Owned in KC Metro</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white drop-shadow">
            All Star Pest Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-white/90 text-lg md:text-xl">
            Guaranteed Service. Guaranteed Results.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/schedule" className="btn-brand">Schedule Service</Link>
            <Link href="/pests" className="inline-flex items-center rounded-xl px-5 py-3 font-medium bg-white/90 hover:bg-white text-brand-800 shadow-soft transition">
              Pest Library
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES AT A GLANCE */}
      <section className="py-14 md:py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">Services at a Glance</h2>
        <p className="mt-2 text-brand-800/70 max-w-3xl">
          We protect homes and businesses with kid- and pet-conscious treatments that work in KC’s climate.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "Quarterly Home Protection", d: "Exterior barrier + targeted interior as needed." },
            { t: "One-Time Knockdown", d: "Fast relief from sudden infestations." },
            { t: "Spider & Wasp Control", d: "Web removal, eaves/soffit treatments, entry points." },
            { t: "Rodent Control", d: "Exclusion, traps, monitoring to keep them out." },
            { t: "Termite Solutions", d: "Inspections, baiting, and warranties." },
            { t: "Commercial Programs", d: "Discreet, compliant service for facilities." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-black/5 bg-white p-6 hover:shadow-soft transition">
              <h3 className="font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-brand-800/70">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-14 md:py-20 bg-brand-gradient text-white">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">Why People Choose All Star</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Guaranteed Results", d: "If the pests come back, we do too—no charge." },
              { t: "Science-First", d: "Integrated Pest Management that’s tough on pests, sensible for families." },
              { t: "Local KC Team", d: "We know seasonal trends and neighborhoods across the metro." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-white/10 p-6">
                <h3 className="font-semibold">{c.t}</h3>
                <p className="mt-2 text-sm text-white/90">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Show pests the door.</h2>
        <p className="mt-2 text-brand-800/70">Quick scheduling, friendly techs, and results you can see.</p>
        <div className="mt-6">
          <Link href="/schedule" className="btn-brand">Get Your Free Quote</Link>
        </div>
      </section>
    </main>
  );
}
