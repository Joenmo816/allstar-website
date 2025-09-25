import Link from "next/link";

import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="text-xl font-semibold">Residential</h3>
            <p className="muted mt-2">
              Flexible plans and one-time treatments tailored to your home.
            </p>
            <Link href="/services/residential">
              Explore Residential
            </Link>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold">Commercial</h3>
            <p className="muted mt-2">
              Discreet, compliant programs for businesses across the KC metro.
            </p>
            <Link href="/services/commercial">
              Explore Commercial
            </Link>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold">Pest Library</h3>
            <p className="muted mt-2">
              Identify common pests and learn how we treat them.
            </p>
            <Link href="/pests">
              Browse Library
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


