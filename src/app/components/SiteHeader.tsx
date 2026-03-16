"use client";

import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="w-full bg-red-700 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-center">

        <nav className="flex flex-wrap items-center gap-12 text-xl font-black text-yellow-400">

          <Link
            href="/residential"
            className="hover:text-white transition"
          >
            Residential Solutions
          </Link>

          <Link
            href="/commercial"
            className="hover:text-white transition"
          >
            Commercial Solutions
          </Link>

          <Link
            href="/termite-services"
            className="hover:text-white transition"
          >
            Termite Services
          </Link>

          <Link
            href="/pest-library"
            className="hover:text-white transition"
          >
            Pest Library
          </Link>

          <Link
            href="/contact"
            className="hover:text-white transition"
          >
            Contact
          </Link>

          <a
            href="tel:19137387827"
            className="bg-yellow-400 text-black px-6 py-2 rounded-md font-black hover:bg-yellow-300 transition"
          >
            (913) 738-7827
          </a>

        </nav>

      </div>

    </header>
  );
}