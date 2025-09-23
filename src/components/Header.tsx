"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/pests", label: "Pest Library" },
  { href: "/about", label: "About" },
  { href: "/service-area", label: "Service Area" },
];

const services = [
  { href: "/services/general-pest", label: "General Pest Control" },
  { href: "/services/termite", label: "Termite (Termidor® only)" },
  { href: "/services/rodent", label: "Rodent Control" },
  { href: "/services/wasp", label: "Wasp & Hornet Removal" },
];

export default function Header(){
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo/logo.png" width={44} height={44} alt="All Star" />
          <div className="hidden sm:block">
            <div className="text-xs text-gray-500">Guaranteed Service, Guaranteed Results.</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href} className={active ? "nav-link-active" : "nav-link"}>
                {l.label}
              </Link>
            );
          })}

          <div className="relative">
            <button onClick={()=>setOpen(o=>!o)} className={pathname?.startsWith("/services") ? "nav-link-active" : "nav-link"}>
              Services ▾
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-64 rounded-xl border bg-white shadow-soft p-2">
                {services.map(s => (
                  <Link key={s.href} href={s.href} className="block px-3 py-2 rounded-md text-sm hover:bg-gray-100" onClick={()=>setOpen(false)}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/schedule" className="ml-2 btn-brand">Schedule</Link>
        </nav>
      </div>
    </header>
  );
}