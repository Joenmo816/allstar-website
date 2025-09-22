"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NavLink = ({ href, children }:{href:string;children:React.ReactNode}) => {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
  return (
    <Link
      href={href}
      className={
        "px-3 py-2 text-sm font-medium rounded-md transition " +
        (active ? "text-white bg-brand-teal" : "text-gray-700 hover:text-brand-teal hover:bg-gray-100")
      }
    >
      {children}
    </Link>
  );
};

const I = {
  bug:   (p:any)=>(<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M19 8l-3 3m-8 0L5 8m7 3v10m-4-6h8M7 7h10M7 12a5 5 0 0110 0"/></svg>),
  web:   (p:any)=>(<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"/></svg>),
  mouse: (p:any)=>(<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M12 2a6 6 0 00-6 6v8a6 6 0 0012 0V8a6 6 0 00-6-6z"/></svg>),
  house: (p:any)=>(<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M3 10l9-7 9 7"/><path d="M9 22V12h6v10"/></svg>),
  brief: (p:any)=>(<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M10 6h4a2 2 0 012 2v2H8V8a2 2 0 012-2z"/><rect x="3" y="10" width="18" height="10" rx="2"/></svg>)
};

export default function Header(){
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const onClick = (e:MouseEvent)=>{
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return ()=>document.removeEventListener("click", onClick);
  },[]);

  const Item = ({href, title, desc, icon}:{href:string;title:string;desc:string;icon:React.ReactNode}) => (
    <Link href={href} className="flex gap-3 rounded-md p-3 hover:bg-gray-50">
      <div className="mt-0.5 text-brand-teal">{icon}</div>
      <div>
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs text-gray-600">{desc}</div>
      </div>
    </Link>
  );

  return (
    <header className="bg-white/95 backdrop-blur border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-44 h-12 md:w-56 md:h-14">
            <Image src="/logo.png" alt="All Star Pest Solutions" fill priority style={{objectFit:"contain"}} />
          </div>
          <span className="hidden md:block text-xs text-gray-500">Guaranteed Service, Guaranteed Results.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="/">Home</NavLink>
          <div className="relative" ref={menuRef}>
            <button onClick={()=>setOpen(v=>!v)}
              className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-brand-teal hover:bg-gray-100"
              aria-haspopup="true" aria-expanded={open}>
              Services ▾
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-[680px] rounded-xl border bg-white shadow-xl p-4 grid grid-cols-2 gap-2">
                <Item href="/services/general-pest"  title="General Pest Control"     desc="Ants, roaches, silverfish & more." icon={<I.bug/>}/>
                <Item href="/services/spider-control" title="Spider Control"          desc="Brown recluse, black widow & webs." icon={<I.web/>}/>
                <Item href="/services/rodent-control" title="Rodent Control"          desc="Exclusion + trapping."               icon={<I.mouse/>}/>
                <Item href="/services/termite"        title="Termites (Termidor® only)" desc="Chemical treatments only—no baiting." icon={<I.house/>}/>
                <Item href="/services/commercial"     title="Commercial Programs"     desc="Restaurants, offices, multi-unit."  icon={<I.brief/>}/>
                <Link href="/services" className="col-span-2 text-center rounded-md p-2 bg-brand-teal text-white font-semibold hover:opacity-95">All Services</Link>
              </div>
            )}
          </div>
          <NavLink href="/pest-library">Pest Library</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/service-area">Service Area</NavLink>
          <Link href="/contact" className="ml-2 px-4 py-2 rounded-md text-sm font-semibold text-white bg-brand-blue hover:opacity-95">Schedule</Link>
        </nav>

        <div className="md:hidden">
          <Link href="/contact" className="px-4 py-2 rounded-md text-sm font-semibold text-white bg-brand-blue">Schedule</Link>
        </div>
      </div>
    </header>
  );
}
