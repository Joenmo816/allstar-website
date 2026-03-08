"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-red-700 shadow-lg" : "bg-red-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO IMAGE */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="All Star Pest Solutions Logo"
            width={180}
            height={60}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold">

          <Link
            href="/residential"
            className="text-yellow-300 hover:text-white transition"
          >
            Residential Solutions
          </Link>

          <Link
            href="/commercial"
            className="text-yellow-300 hover:text-white transition"
          >
            Commercial Solutions
          </Link>

          <Link
            href="/termite-services"
            className="text-yellow-300 hover:text-white transition"
          >
            Termite Services
          </Link>

          <Link
            href="/pests"
            className="text-yellow-300 hover:text-white transition"
          >
            Pest Library
          </Link>

          <Link
            href="/contact"
            className="text-yellow-300 hover:text-white transition"
          >
            Contact
          </Link>

        </nav>

        {/* CALL BUTTON */}
        <a
          href="tel:9137387827"
          className="hidden md:inline-block bg-yellow-400 text-black px-5 py-2 rounded-md font-bold hover:bg-yellow-300 transition"
        >
          (913) 738-7827
        </a>

      </div>
    </header>
  );
}