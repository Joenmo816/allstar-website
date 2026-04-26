import Link from "next/link";

type ReviewProofProps = {
  city?: string;
};

export default function ReviewProof({ city }: ReviewProofProps) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-black uppercase tracking-[0.14em] text-allstarBlue">
              Real Trust Beats Gimmicks
            </p>

            <h2 className="mt-3 text-4xl font-black text-allstarRed md:text-5xl">
              Owner-level accountability from the first call.
            </h2>

            <p className="mt-5 text-xl leading-relaxed text-allstarSlate">
              All Star Pest Solutions is built around direct communication, honest recommendations, and guaranteed service — not fake scarcity or high-pressure contracts.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/guarantee" className="btn-primary">
                Read Our Guarantee
              </Link>
              <Link href="/about" className="btn-secondary">
                About All Star
              </Link>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Direct Owner Contact", "When you call, you talk to the person responsible for solving the problem."],
              ["No Mandatory Contracts", "Recurring service is available, but you are not forced into a contract."],
              ["Family-Conscious Treatments", "Modern methods with respect for families, pets, pollinators, and wildlife."],
              ["Local Service", city ? `Built for ${city} homeowners who want straight answers and dependable results.` : "Built for homeowners across the South Kansas City metro."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-allstarInk">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-allstarSlate">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
