
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
            <a
              href="/services/residential"
              className="mt-4 inline-block btn-primary"
            >
              Explore Residential
            </a>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold">Commercial</h3>
            <p className="muted mt-2">
              Discreet, compliant programs for businesses across the KC metro.
            </p>
            <a
              href="/services/commercial"
              className="mt-4 inline-block btn-accent"
            >
              Explore Commercial
            </a>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold">Pest Library</h3>
            <p className="muted mt-2">
              Identify common pests and learn how we treat them.
            </p>
            <a
              href="/pests"
              className="mt-4 inline-block btn-outline"
            >
              Browse Library
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
