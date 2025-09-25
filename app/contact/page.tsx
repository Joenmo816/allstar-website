export default function ContactPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Request a Quote</h1>
      <p className="mt-3 muted">Tell us about your pest issue and we’ll follow up quickly.</p>

      <form className="mt-6 grid gap-4 max-w-xl">
        <input className="rounded-xl border px-3 py-2" placeholder="Name" required />
        <input className="rounded-xl border px-3 py-2" placeholder="Phone" required />
        <input className="rounded-xl border px-3 py-2" placeholder="Email" type="email" />
        <textarea className="rounded-xl border px-3 py-2 min-h-32" placeholder="How can we help?" />
        <button className="btn-primary" type="submit">Send</button>
      </form>

      <p className="mt-4 text-sm">
        Prefer to call? <a href="tel:19137387827" className="font-semibold">(913) 738-STAR</a>
      </p>
    </main>
  );
}