export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container grid items-center gap-8 py-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-primary">KC Family-Owned</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Pest Control Done Right
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Residential & commercial programs with environmentally friendly, children- and pet-safe options. Local service. Guaranteed results.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact" className="btn-primary">Get a Quote</a>
            <a href="/services" className="btn-outline">See Services</a>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Proudly serving the Kansas City metro.</p>
        </div>
        <div className="relative">
          <img src="/images/kc-family-owned.jpg" alt="KC family owned" className="rounded-2xl border w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
