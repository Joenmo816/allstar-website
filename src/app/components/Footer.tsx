import Link from "next/link";
import BBBSeal from "./BBBSeal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-allstarBlue/10 bg-allstarCloud">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-2xl font-black text-allstarRed">
            All Star Pest Solutions
          </h3>

          <p className="mt-3 text-base leading-relaxed text-allstarSlate">
            Local experts delivering eco-friendly, family-conscious treatments
            backed by Over 30 Years of Experience of real-world experience.
          </p>

          <p className="mt-3 font-bold text-allstarInk">
            Guaranteed Service. Guaranteed Results.
          </p>
        </div>

        <nav>
          <h4 className="mb-3 text-lg font-black text-allstarInk">
            Quick Links
          </h4>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-base">
            <Link href="/" className="brand-link font-bold">Home</Link>
            <Link href="/residential" className="brand-link font-bold">Residential</Link>

            <Link href="/commercial" className="brand-link font-bold">Commercial</Link>
            <Link href="/pest-library" className="brand-link font-bold">Pest Library</Link>

            <Link href="/termite-services" className="brand-link font-bold">Termite Services</Link>
            <Link href="/service-area" className="brand-link font-bold">Service Area</Link>

            <Link href="/about" className="brand-link font-bold">About</Link>
            <Link href="/contact" className="brand-link font-bold">Contact</Link>
          </div>
        </nav>

        <div className="text-base">
          <h4 className="text-lg font-black text-allstarInk">Contact</h4>

          <p className="mt-3 leading-relaxed text-allstarSlate">
            Phone:{" "}
            <a
              href="tel:+19137387827"
              className="font-bold text-allstarRed transition hover:text-allstarRedDark"
            >
              (913) 738-STAR
            </a>

            <br />

            Email:{" "}
            <a
              href="mailto:info@allstarpestkc.com"
              className="text-allstarRed transition hover:text-allstarRedDark"
            >
              info@allstarpestkc.com
            </a>

            <br />

            Web:{" "}
            <a
              href="https://allstarpestkc.com"
              className="text-allstarBlue transition hover:text-allstarRed"
              target="_blank"
            >
              allstarpestkc.com
            </a>
          </p>

          <p className="mt-3 text-allstarSlate">
            KS & MO State-Certified • Fully Insured
          </p>
        </div>

        <div className="text-base">
          <h4 className="text-lg font-black text-allstarInk">Service Area</h4>

          <p className="mt-3 leading-relaxed text-allstarSlate">
            Kansas: Johnson & Miami Counties
            <br />
            Missouri: Cass & Jackson Counties
          </p>

          <a
            href="tel:+19137387827"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-allstarBlue px-6 py-3 font-extrabold text-white transition hover:bg-allstarBlueDark"
          >
            Call (913) 738-STAR
          </a>
        </div>
      </div>

      <div className="border-t border-allstarBlue/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="text-sm text-allstarSlate">
            © {year} All Star Pest Solutions • Local Service. Guaranteed Results.
          </p>

          <p className="text-sm text-allstarSlate">
            Respect for beneficial species • Eco-friendly & family-conscious treatments
          </p>
        </div>
      </div>
          <div className="mt-6">
        <BBBSeal />
      </div>
    </footer>
  );
}




