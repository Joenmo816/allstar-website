import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="bg-red-700 shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Company Name */}
        <Link
          href="/"
          className="text-yellow-400 text-xl font-bold tracking-wide uppercase"
        >
          ALL STAR PEST SOLUTIONS
        </Link>

        {/* Navigation */}
        <nav className="flex gap-8 text-yellow-400 text-sm font-bold uppercase">

          <Link href="/residential" className="hover:text-white">
            Residential
          </Link>

          <Link href="/commercial" className="hover:text-white">
            Commercial
          </Link>

          <Link href="/termite-services" className="hover:text-white">
            Termite
          </Link>

          <Link href="/pest-library" className="hover:text-white">
            Pest Library
          </Link>

          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>

        </nav>

        {/* Buttons */}
        <div className="flex gap-3">

          <Link
            href="/contact"
            className="bg-white text-red-700 font-bold px-4 py-2 rounded-md text-sm"
          >
            Free Inspection
          </Link>

          <a
            href="tel:19137387827"
            className="bg-yellow-400 text-red-700 font-bold px-4 py-2 rounded-md text-sm"
          >
            (913) 738-7827
          </a>

        </div>

      </div>

    </header>
  );
}