export default function CommercialServicesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:py-14">
      <h1 className="text-3xl font-bold">Commercial Services</h1>
      <p className="mt-3 muted">Customized IPM plans, monitoring, sanitation guidance, and detailed service reporting.</p>
      <div className="mt-8 flex gap-3 flex-wrap">
        <a href="/contact" className="btn-accent">Get a Site Evaluation</a>
        <a href="/pests" className="btn-outline">Browse Pest Library</a>
      </div>
    </main>
  );
}