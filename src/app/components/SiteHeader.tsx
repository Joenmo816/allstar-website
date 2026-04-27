"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/termite-services", label: "Termites" },
  { href: "/pest-library", label: "Library" },
  { href: "/charts", label: "Charts" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex w-full items-center justify-between px-5 py-4 lg:px-10">
        {/* LEFT SIDE: LOGO + BRAND */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-4"
          onClick={closeMenu}
          aria-label="All Star Pest Solutions home"
        >
          <div className="relative h-[72px] w-[72px] shrink-0 sm:h-[84px] sm:w-[84px] md:h-[96px] md:w-[96px]">
            <Image
              src="/star.png"
              alt="All Star Pest Solutions logo"
              fill
              priority
              unoptimized
              className="object-contain"
              sizes="96px"
            />
          </div>

          <div className="min-w-0 leading-tight">
            <div className="whitespace-nowrap text-xl font-black uppercase tracking-wide text-red-600 sm:text-2xl md:text-3xl">
              All Star Pest Solutions
            </div>

            <div className="mt-1 text-sm font-black text-blue-700 sm:text-base">
              Guaranteed Service. Guaranteed Results.
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-8 xl:gap-12 lg:flex">
          <nav
            className="flex items-center gap-6 xl:gap-9"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative whitespace-nowrap text-base font-black uppercase tracking-wide text-red-600 transition hover:text-blue-700 xl:text-lg"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-blue-700 transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <a
            href="tel:19137387827"
            className="inline-flex whitespace-nowrap rounded-2xl bg-red-600 px-6 py-4 text-base font-extrabold text-white shadow-lg transition hover:bg-red-700 xl:text-lg"
          >
            Call (913) 738-STAR
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-site-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg p-2 lg:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-1 w-8 bg-red-600" />
            <span className="block h-1 w-8 bg-red-600" />
            <span className="block h-1 w-8 bg-red-600" />
          </div>
        </button>
      </div>

      {/* RED/BLUE STRIPE */}
      <div className="h-[4px] w-full bg-[linear-gradient(90deg,#dc2626_0%,#dc2626_50%,#1d4ed8_50%,#1d4ed8_100%)]" />

      {/* CHARTS ANNOUNCEMENT BANNER */}
      <Link
        href="/charts"
        onClick={closeMenu}
        className="block w-full bg-blue-700 px-4 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-red-600 sm:text-base"
      >
        New Pest Identification Charts Available — Spider, Ant, Bee & Beneficial
        Insect Charts.{" "}
        <span className="inline-block rounded-md bg-yellow-300 px-2 py-1 text-blue-950 underline decoration-2 underline-offset-4">
          Download Here
        </span>
      </Link>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          id="mobile-site-menu"
          className="border-t border-red-100 bg-white px-6 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-xl font-black uppercase text-red-600"
            >
              Home
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-xl font-black uppercase text-red-600"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="tel:19137387827"
              className="mt-2 rounded-xl bg-red-600 px-6 py-4 text-center text-lg font-extrabold text-white"
            >
              Call (913) 738-STAR
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

