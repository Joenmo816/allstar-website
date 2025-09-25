import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Image src="/logo.svg" alt="All Star Pest Solutions" className="h-10 w-auto" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} />
          <p className="mt-3 muted">KC's Bugman! Family-owned & operated. Local service. Guaranteed results.</p>

          {/* Trust badges */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <a
              href="https://www.bbb.org/us/mo/cleveland/profile/pest-control-services/all-star-pest-solutions-0714-1000071121/#sealclick"
              target="_blank"
              rel="nofollow"
              className="badge"
              aria-label="BBB Accredited Business"
            >
              <Image
                src="http://seal-nebraska.bbb.org/seals/blue-seal-293-61-bbb-1000071121.png"
                alt="All Star Pest Solutions BBB Business Review"
                className="h-6 w-auto" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} />
              <span className="sr-only">BBB Accredited Business</span>
            </a>
            {/* <span className="badge">Environmentally Friendly & Children and Pet Safe</span>
            <span className="badge">KC Family Owned and Operated</span>
            <span className="badge">Over 25 Years of Experience</span> */}
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Services</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/services/residential">Residential</Link></li>
            <li><Link href="/services/commercial">Commercial</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Company</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">KC Metro</h3>
          <p className="mt-2 text-sm">Serving homes & businesses across the Kansas City metro.</p>
          <p className="mt-2 text-sm">Call <a href="tel:19137387827" className="font-semibold">(913) 738-STAR</a></p>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} All Star Pest Solutions
      </div>
    </footer>
  );
}

