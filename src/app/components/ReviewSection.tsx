import Link from "next/link";
import { googleReviewUrl } from "@/data/business-links";

export default function ReviewSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-black uppercase tracking-[0.14em] text-allstarBlue">
              Real Customers. Real Results.
            </p>

            <h2 className="mt-3 text-4xl font-black text-allstarRed md:text-5xl">
              Reviews build trust before the phone rings.
            </h2>

            <p className="mt-5 text-xl leading-relaxed text-allstarSlate">
              All Star Pest Solutions is built on direct owner service, clear communication, and guaranteed results. If we helped you, your review helps local homeowners know who they can trust.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Leave a Google Review
              </a>

              <Link href="/review" className="btn-secondary text-center">
                Review All Star
              </Link>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Direct Communication", "You talk directly with the owner, not a call center."],
              ["No Contract Pressure", "Recurring service is available, but mandatory contracts are not required."],
              ["Guaranteed Re-Service", "If pests come back between scheduled visits, we come back and make it right."],
              ["Local Experience", "30+ years of real field experience across Kansas and Missouri homes."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-allstarInk">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-allstarSlate">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


