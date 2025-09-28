import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | All Star Pest Solutions",
  description: "Family-owned pest control serving Johnson & Miami (KS) and Cass & Jackson (MO). Guaranteed service, guaranteed results.",
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-6">About All Star Pest Solutions</h1>

      <p className="text-lg leading-relaxed mb-6">
        We provide reliable, professional pest control across the Kansas City metro.
        Our licensed technicians use proven methods and—when requested—eco-conscious options
        to protect homes and businesses. Our promise is simple: <strong>Guaranteed service,
        guaranteed results.</strong>
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <section>
          <h2 className="text-2xl font-semibold mb-3">What we stand for</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Licensed &amp; insured technicians</li>
            <li>Clear, up-front pricing</li>
            <li>Tailored treatment plans</li>
            <li>Eco-conscious options available</li>
            <li>Friendly support &amp; flexible scheduling</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Service Area</h2>
          <p>We service Johnson & Miami counties in Kansas and Cass & Jackson counties in Missouri.</p>
        </section>
      </div>

      <a
        href="tel:19137387827"
        className="inline-flex items-center rounded-full px-5 py-3 bg-green-600 text-white border border-green-600 hover:bg-green-700 transition"
      >
        Call (913) 738-STAR
      </a>
    </main>
  );
}