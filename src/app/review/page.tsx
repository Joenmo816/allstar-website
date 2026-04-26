import type { Metadata } from "next";
import Link from "next/link";
import { googleReviewUrl } from "@/data/business-links";

export const metadata: Metadata = {
  title: "Leave a Review | All Star Pest Solutions",
  description:
    "Leave a review for All Star Pest Solutions. Your feedback helps local homeowners choose a pest company they can trust.",
};

export default function ReviewPage() {
  return (
    <main className="bg-white text-allstarInk">
      <section className="bg-allstarBlueDark py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-black uppercase tracking-[0.16em] text-red-200">
            Thank You for Choosing All Star
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            Your Review Helps Local Homeowners
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/95">
            If All Star Pest Solutions helped solve your pest problem, a quick Google review helps other families know who they can trust.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-red-600 px-8 py-4 text-lg font-black text-white transition hover:bg-red-700"
            >
              Leave a Google Review
            </a>

            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 text-lg font-black text-black transition hover:bg-slate-100"
            >
              Contact All Star
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-3xl font-black text-allstarRed">
              What to mention in your review
            </h2>

            <ul className="mt-6 space-y-3 text-lg font-semibold text-allstarSlate">
              <li>• What pest problem we helped with</li>
              <li>• The city or area we serviced</li>
              <li>• Whether communication was clear</li>
              <li>• Whether you would recommend All Star Pest Solutions</li>
            </ul>

            <p className="mt-6 text-lg leading-relaxed text-allstarSlate">
              Honest reviews matter. They help small local companies compete against big companies with massive advertising budgets.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
