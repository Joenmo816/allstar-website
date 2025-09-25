export default function ResidentialServicesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:py-14">
      <h1 className="text-3xl font-bold">Residential Services</h1>
      <p className="mt-3 muted">Environmentally friendly, children- and pet-safe options available.</p>
      <div className="mt-8 flex gap-3 flex-wrap">
        <a href="/contact" className="btn-primary">Request a Quote</a>
        <a href="/pests" className="btn-outline">Browse Pest Library</a>
      </div>
    </main>
  );
}