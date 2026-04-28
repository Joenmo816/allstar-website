"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/termite-services", label: "Termites" },
  { href: "/pest-library", label: "Library" },
  { href: "/charts", label: "Charts" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-slate-950 px-4 py-2 text-center text-xs font-black uppercase tracking-wide text-white md:text-sm">
        Free Inspection • No Mandatory Contracts • Talk Directly to the Owner
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex min-w-0 items-center gap-4">
          <img src="/star.webp" alt="All Star Pest Solutions star" className="h-14 w-14 shrink-0 object-contain md:h-20 md:w-20" />
          <img src="/logo-header-v2.webp" alt="All Star Pest Solutions" className="h-16 w-auto max-w-[520px] object-contain md:h-24" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-xl border-2 border-red-600 px-3 py-2 text-sm font-black uppercase text-red-600 lg:hidden"
        >
          Menu ☰
        </button>

        <nav className="hidden items-center gap-5 text-sm font-black uppercase text-red-600 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-700">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {open && (
        <nav className="grid gap-2 border-t border-slate-200 bg-white px-4 py-4 text-lg font-black uppercase text-red-600 lg:hidden">
          <Link href="/" onClick={() => setOpen(false)} className="rounded-xl bg-slate-50 px-4 py-3">Home</Link>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl bg-slate-50 px-4 py-3">
              {link.label}
            </Link>
          ))}
          <a href="tel:9137387827" className="rounded-xl bg-red-600 px-4 py-3 text-center text-white">
            Call 913-738-STAR
          </a>
          <a href="sms:9137387827" className="rounded-xl bg-blue-700 px-4 py-3 text-center text-white">
            Text a Pest Picture
          </a>
        </nav>
      )}

      <div className="bg-blue-700 px-4 py-3 text-center text-sm font-black uppercase text-white md:text-base">
        <Link href="/charts" className="underline decoration-yellow-300 decoration-4 underline-offset-4">
          New pest identification charts available — download here
        </Link>
      </div>
    </header>
  );
}
