export default function TrustProof() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm md:grid-cols-5">
          {[
            "KS & MO State-Certified",
            "Fully Insured",
            "Owner-Operated",
            "No Mandatory Contracts",
            "Guaranteed Re-Service",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white px-4 py-5 shadow-sm">
              <p className="text-base font-black text-allstarInk">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
