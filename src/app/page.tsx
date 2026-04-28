export default function HomePage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(rgba(255,255,255,0.92),rgba(255,255,255,0.92)),url('/kc-background.webp')] bg-cover bg-center bg-fixed pb-24">

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Real Pest Solutions From a Local Owner — Not a Call Center
        </h1>

        <p className="mt-6 text-xl text-slate-700 max-w-3xl">
          All Star Pest Solutions provides targeted pest control, termite inspections, and real-world pest prevention across the Kansas City metro.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="tel:9137387827" className="bg-red-600 text-white px-6 py-4 rounded-xl font-black">
            Call Now
          </a>

          <a href="sms:9137387827" className="bg-blue-700 text-white px-6 py-4 rounded-xl font-black">
            Text a Photo
          </a>
        </div>
      </section>

      <img
        src="/mascot.webp"
        alt="All Star mascot"
        className="fixed bottom-24 right-4 z-30 hidden h-32 lg:block"
      />

    </main>
  );
}
