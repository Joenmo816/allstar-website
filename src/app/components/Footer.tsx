import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-extrabold text-blue-800">All Star Pest Solutions</h3>
          <p className="mt-2 text-sm text-gray-700">
            Local experts delivering eco-friendly, child &amp; pet-safe treatments—backed by our promise:
            <span className="block font-semibold">“Guaranteed Service. Guaranteed Results.”</span>
          </p>
        </div>

        <nav className="grid gap-2 text-sm">
          <h4 className="text-base font-semibold text-gray-900">Quick Links</h4>
          <Link href="/" className="text-gray-700 hover:text-blue-700">Home</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-700">Services</Link>
          <Link href="/services/residential" className="text-gray-700 hover:text-blue-700">Residential</Link>
          <Link href="/services/commercial" className="text-gray-700 hover:text-blue-700">Commercial</Link>
          <Link href="/pests" className="text-gray-700 hover:text-blue-700">Pest Library</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-700">Pricing</Link>
          <Link href="/service-area" className="text-gray-700 hover:text-blue-700">Service Area</Link>
          <Link href="/guarantee" className="text-gray-700 hover:text-blue-700">Guarantee</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-700">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-700">Contact</Link>
        </nav>

        <div className="text-sm">
          <h4 className="text-base font-semibold text-gray-900">Contact</h4>
          <p className="mt-2 text-gray-700">
            Phone: <a href="tel:+19137387827" className="font-semibold text-green-700 hover:text-green-800">(913) 738-STAR</a><br />
            Email: <a href="mailto:info@allstarpestkc.com" className="text-blue-700 hover:text-blue-800">info@allstarpestkc.com</a><br />
            Web: <a href="https://allstarpestkc.com" className="text-blue-700 hover:text-blue-800" target="_blank">allstarpestkc.com</a>
          </p>
          <p className="mt-3 text-gray-700">210 W. Cleveland St<br />Cleveland, MO 64734</p>
          <p className="mt-3 text-gray-700">KS &amp; MO State-Certified • Fully Insured</p>
        </div>

        <div className="text-sm">
          <h4 className="text-base font-semibold text-gray-900">Service Area</h4>
          <p className="mt-2 text-gray-700">
            Kansas: Johnson &amp; Miami Counties<br />
            Missouri: Cass &amp; Jackson Counties
          </p>
          <a
            href="tel:+19137387827"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-green-600 px-5 py-2 font-semibold text-white hover:bg-green-700 transition"
          >
            Call (913) 738-STAR
          </a>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">&copy; {year} All Star Pest Solutions • Local Service. Guaranteed Results.</p>
          <p className="text-xs text-gray-500">Respect for beneficial species • Eco-friendly + family-safe treatments</p>
        </div>
      </div>
    </footer>
  );
}