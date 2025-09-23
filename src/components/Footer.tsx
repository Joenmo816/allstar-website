import Link from "next/link";

export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold text-brand-blue">All Star Pest Solutions</h4>
          <p className="mt-2 text-sm text-gray-600">
            Kansas City’s family-owned pest professionals. Termite treatments with Termidor® only (no baiting).
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Email: <a className="underline" href="mailto:info@allstarpestkc.com">info@allstarpestkc.com</a>
          </p>
        </div>
        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/pests">Pest Library</Link></li>
            <li><Link href="/service-area">Service Area</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Hours</h5>
          <p className="mt-2 text-sm text-gray-600">Mon–Sat 8am–6pm</p>
        </div>
      </div>
      <div className="border-t bg-white">
        <div className="container mx-auto px-4 py-4 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} All Star Pest Solutions
        </div>
      </div>
    </footer>
  );
}