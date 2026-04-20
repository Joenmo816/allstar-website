"use client";

import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/termite-services", label: "Termite Services" },
  { href: "/pest-library", label: "Pest Library" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-allstarBlue shadow-brand">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-header-v2.png"
            alt="All Star Pest Solutions logo"
            width={140}
            height={60}
            className="h-12 w-auto sm:h-14"
            priority
            unoptimized
          />

          <div className="hidden sm:block">
            <div className="text-lg font-black leading-none text-white">
              All Star Pest Solutions
            </div>

            <div className="mt-1 text-sm font-bold uppercase tracking-wide text-white/80">
              Guaranteed Service. Guaranteed Results.
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-extrabold text-white/90 transition hover:text-white hover:underline underline-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:19137387827"
          className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-extrabold text-white shadow-xl transition hover:bg-red-700 sm:text-base"
        >
          Call (913) 738-STAR
        </a>
      </div>
    </header>
  );
}
