"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/termite-services", label: "Termite Services" },
  { href: "/pest-library", label: "Pest Library" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-allstarBlue shadow-brand">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="text-xl font-black tracking-tight text-white md:text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          All Star Pest Solutions
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-black uppercase tracking-wide text-white/90 transition hover:scale-105 hover:text-white md:text-xl"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:19137387827"
            className="hidden items-center justify-center rounded-xl bg-red-600 px-7 py-3 text-base font-extrabold text-white shadow-xl transition hover:scale-105 hover:bg-red-700 md:text-lg lg:inline-flex"
          >
            Call (913) 738-STAR
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 flex-col items-center justify-center lg:hidden"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-1.5 rotate-45" : "mb-1"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : "mb-1"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-allstarBlue transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-5 px-6 py-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-black uppercase tracking-wide text-white transition hover:text-white/80"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="tel:19137387827"
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-base font-extrabold text-white shadow-xl transition hover:bg-red-700"
            onClick={() => setMenuOpen(false)}
          >
            Call (913) 738-STAR
          </a>
        </nav>
      </div>
    </header>
  );
}