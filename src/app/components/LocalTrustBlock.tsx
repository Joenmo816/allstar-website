export default function LocalTrustBlock() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Why All Star Pest Solutions
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
          Real Pest Solutions From a Local Owner — Not a Call Center
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black">30+ Years Experience</h3>
            <p className="mt-3 text-slate-700">
              Experience matters when pests are hiding inside walls, crawlspaces, foundations, and structural areas.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black">No Mandatory Contracts</h3>
            <p className="mt-3 text-slate-700">
              Service plans are available, but never forced.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black">Pollinator-Conscious</h3>
            <p className="mt-3 text-slate-700">
              We protect homes while respecting bees, beneficial insects, families, pets, and the local environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
