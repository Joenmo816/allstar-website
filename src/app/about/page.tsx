export const metadata = {
  title: "About | All Star Pest Solutions",
  description: "Local Kansas City pest pros delivering guaranteed results with a science-first approach.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-14 md:py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold">About All Star Pest Solutions</h1>
      <p className="mt-4 text-brand-800/80">
        We’re a locally owned Kansas City company built on the belief that great service and smart science
        should be the norm. Our team uses Integrated Pest Management (IPM) to identify root causes,
        reduce risk, and keep your home or business comfortable year-round.
      </p>

      <section className="mt-10 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="mt-2 text-brand-800/80">
            Protect people, pets, and property with effective, responsible pest solutions—and back it up with a simple guarantee.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">How We Work</h2>
          <ul className="mt-2 list-disc pl-6 text-brand-800/80 space-y-1">
            <li><b>Inspect:</b> We listen first, then inspect to pinpoint sources and entry points.</li>
            <li><b>Treat:</b> Targeted applications that fit the pest, the season, and your space.</li>
            <li><b>Prevent:</b> Seal, exclude, and monitor to stop issues from returning.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Service Area</h2>
          <p className="mt-2 text-brand-800/80">
            Greater Kansas City metro including Johnson, Wyandotte, Jackson, Clay, and Platte counties.
          </p>
        </div>

        <div className="rounded-2xl border border-black/5 p-6">
          <h2 className="text-xl font-semibold">Our Guarantee</h2>
          <p className="mt-2 text-brand-800/80">
            If covered pests come back between regular services, so do we—at no additional charge.
          </p>
        </div>
      </section>
    </main>
  );
}
