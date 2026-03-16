import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">

      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-4">

        {/* COMPANY INFO */}
        <div>
          <h3 className="text-2xl font-black text-red-700 [text-shadow:2px_2px_0_black]">
            All Star Pest Solutions
          </h3>

          <p className="mt-3 text-base text-zinc-700 leading-relaxed">
            Local experts delivering eco-friendly, child & pet-safe treatments backed by our promise:
          </p>

          <p className="mt-2 font-bold text-zinc-900">
            “Guaranteed Service. Guaranteed Results.”
          </p>
        </div>


        {/* QUICK LINKS */}
        <nav>
          <h4 className="text-lg font-black text-zinc-900 mb-3">
            Quick Links
          </h4>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-base">

            <Link href="/" className="font-bold text-blue-700 hover:text-red-700">Home</Link>
            <Link href="/services/residential" className="font-bold text-blue-700 hover:text-red-700">Residential</Link>

            <Link href="/services/commercial" className="font-bold text-blue-700 hover:text-red-700">Commercial</Link>
            <Link href="/pests" className="font-bold text-blue-700 hover:text-red-700">Pest Library</Link>

            <Link href="/pricing" className="font-bold text-blue-700 hover:text-red-700">Pricing</Link>
            <Link href="/service-area" className="font-bold text-blue-700 hover:text-red-700">Service Area</Link>

            <Link href="/guarantee" className="font-bold text-blue-700 hover:text-red-700">Guarantee</Link>
            <Link href="/about" className="font-bold text-blue-700 hover:text-red-700">About</Link>

            <Link href="/contact" className="font-bold text-blue-700 hover:text-red-700">Contact</Link>

          </div>
        </nav>


        {/* CONTACT */}
        <div className="text-base">
          <h4 className="text-lg font-black text-zinc-900">
            Contact
          </h4>

          <p className="mt-3 text-zinc-700 leading-relaxed">
            Phone:{" "}
            <a
              href="tel:+19137387827"
              className="font-bold text-red-700 hover:text-red-800"
            >
              (913) 738-STAR
            </a>

            <br />

            Email:{" "}
            <a
              href="mailto:info@allstarpestkc.com"
              className="text-red-700 hover:text-red-800"
            >
              info@allstarpestkc.com
            </a>

            <br />

            Web:{" "}
            <a
              href="https://allstarpestkc.com"
              className="text-red-700 hover:text-red-800"
              target="_blank"
            >
              allstarpestkc.com
            </a>
          </p>

          <p className="mt-3 text-zinc-700">
            KS & MO State-Certified • Fully Insured
          </p>
        </div>


        {/* SERVICE AREA */}
        <div className="text-base">
          <h4 className="text-lg font-black text-zinc-900">
            Service Area
          </h4>

          <p className="mt-3 text-zinc-700 leading-relaxed">
            Kansas: Johnson & Miami Counties<br />
            Missouri: Cass & Jackson Counties
          </p>

          <a
            href="tel:+19137387827"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-red-700 px-6 py-3 font-bold text-white hover:bg-red-800 transition"
          >
            Call (913) 738-STAR
          </a>
        </div>

      </div>


      {/* BOTTOM BAR */}
      <div className="border-t">

        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-sm text-zinc-600">
            © {year} All Star Pest Solutions • Local Service. Guaranteed Results.
          </p>

          <p className="text-sm text-zinc-500">
            Respect for beneficial species • Eco-friendly & family-safe treatments
          </p>

        </div>

      </div>

    </footer>
  );
}