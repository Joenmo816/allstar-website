import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-red-700 mb-4">
            All Star Pest Solutions
          </h3>

          <p className="text-gray-700">
            Local pest professionals serving South Kansas City and surrounding
            communities with safe, effective pest solutions.
          </p>

          <p className="font-semibold mt-3">
            Guaranteed Service. Guaranteed Results.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>

          <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-gray-700">

            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>

            <Link href="/residential">Residential</Link>
            <Link href="/commercial">Commercial</Link>

            <Link href="/termite-services">Termite</Link>
            <Link href="/pest-library">Pest Library</Link>

            <Link href="/ant-control">Ant Control</Link>
            <Link href="/cockroach-control">Cockroach Control</Link>

          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>

          <p>
            Phone:{" "}
            <a
              href="tel:19137387827"
              className="text-green-600 font-semibold"
            >
              (913) 738-STAR
            </a>
          </p>

          <p>Email: info@allstarpestkc.com</p>

          <p className="mt-3">
            Licensed in Kansas & Missouri
          </p>

          <p>30+ Years Industry Experience</p>
        </div>

        {/* Service Area */}
        <div>
          <h3 className="font-bold text-lg mb-4">Service Area</h3>

          <p>Kansas</p>
          <p className="text-gray-700">
            Johnson County • Miami County
          </p>

          <p className="mt-2">Missouri</p>
          <p className="text-gray-700">
            Cass County • Jackson County
          </p>

          <a
            href="tel:19137387827"
            className="inline-block mt-5 bg-red-700 text-yellow-400 px-5 py-2 rounded-md font-bold"
          >
            Call (913) 738-STAR
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} All Star Pest Solutions • South Kansas City Pest Experts
      </div>

    </footer>
  );
}