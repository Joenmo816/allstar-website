import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="All Star Pest Solutions Home">
          {/* BIG LOGO */}
          <img src="/logo.svg" alt="All Star Pest Solutions" className="h-10 sm:h-12 md:h-14 w-auto" />
          <span className="sr-only">All Star Pest Solutions</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/services" className="hover:text-primary">Services</Link>
          <Link href="/pests" className="hover:text-primary">Pest Library</Link>
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/contact" className="btn-accent">Request a Quote</Link>
        </nav>
      </div>

      {/* Trust strip under nav */}
      <div className="border-t bg-white/90">
        <div className="container flex flex-wrap items-center gap-3 py-2 text-xs">
          {/* Official BBB seal (from BBB) */}
          <a
            href="https://www.bbb.org/us/mo/cleveland/profile/pest-control-services/all-star-pest-solutions-0714-1000071121/#sealclick"
            target="_blank"
            rel="nofollow"
            aria-label="BBB Accredited Business"
          >
            <img
              src="http://seal-nebraska.bbb.org/seals/blue-seal-293-61-bbb-1000071121.png"
              alt="All Star Pest Solutions BBB Business Review"
              className="h-6 w-auto"
            />
          </a>

          {/* Your own badges (optional local svgs/pngs)
          <span className="badge">Environmentally Friendly & Children and Pet Safe</span>
          <span className="badge">KC Family Owned and Operated</span>
          <span className="badge">Over 25 Years of Experience</span>
          */}
        </div>
      </div>
    </header>
  );
}