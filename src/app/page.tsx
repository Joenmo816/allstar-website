import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section with KC Background */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/kc-bg.jpg"
          alt="Kansas City background"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Local Service. Guaranteed Results.
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Serving Kansas City homes and businesses with safe, eco-friendly pest control.
          </p>
          <Link
            href="/contact"
            className="rounded bg-green-600 px-6 py-3 text-lg font-semibold text-white hover:bg-green-700 transition-colors"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>

      {/* BBB Accreditation */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/images/bbb-accredited.jpg"
            alt="BBB Accredited Business"
            width={150}
            height={60}
            className="h-auto w-auto"
            priority
          />
          <p className="text-lg font-semibold text-gray-700">
            All Star Pest Solutions is proud to be a{" "}
            <span className="text-green-700 font-bold">BBB Accredited Business</span>, 
            demonstrating our commitment to trust, service, and results.
          </p>
        </div>
      </section>
    </main>
  );
}
