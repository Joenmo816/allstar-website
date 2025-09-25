import Link from "next/link";

function IconHome() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M9 21V12h6v9" />
    </svg>
  );
}
function IconBuilding() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="3" width="7" height="18" />
      <rect x="14" y="7" width="7" height="14" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <header className="mb-10 text-center">
        <p className="text-sm font-semibold tracking-wide text-primary">Local Service. Guaranteed Results.</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">Services</h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-600">Choose residential or commercial. Two paths, same five-star quality.</p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        <article className="card">
          <div className="flex items-start gap-4">
            <IconHome />
            <div>
              <h2 className="text-2xl font-semibold">Residential Services</h2>
              <p className="mt-2 muted">Family- and pet-safe options for ants, spiders, stinging insects, rodents, and more.</p>
            </div>
          </div>
          <div className="mt-6"><Link href="/services/residential" className="btn-primary">Explore Residential</Link></div>
        </article>

        <article className="card">
          <div className="flex items-start gap-4">
            <IconBuilding />
            <div>
              <h2 className="text-2xl font-semibold">Commercial Services</h2>
              <p className="mt-2 muted">Discreet, compliant programs—restaurants, retail, warehouses, offices, and more.</p>
            </div>
          </div>
          <div className="mt-6"><Link href="/services/commercial" className="btn-accent">Explore Commercial</Link></div>
        </article>
      </section>
    </main>
  );
}
        
