import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leave a Review | All Star Pest Solutions",
  description:
    "Leave a review for All Star Pest Solutions. Your review helps a locally owned Kansas City pest control company grow.",
};

export default function ReviewsPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Leave a Review
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Help a Local Pest Control Company Grow
        </h1>

        <p className="mt-6 text-xl font-semibold leading-8 text-slate-700">
          If All Star Pest Solutions took care of you, a quick Google review helps us compete with the big companies.
        </p>

        <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white">
          <h2 className="text-3xl font-black">Review Text You Can Use</h2>
          <p className="mt-5 rounded-2xl bg-white p-6 text-lg leading-8 text-slate-800">
            Joe with All Star Pest Solutions was professional, knowledgeable, and honest.
            He explained the pest issue clearly and provided great service. I would recommend
            All Star Pest Solutions to anyone needing pest control in the Kansas City area.
          </p>

          <p className="mt-6 text-lg text-slate-200">
            Copy that, personalize it, and post it on Google.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="https://www.google.com/search?q=All+Star+Pest+Solutions+Cleveland+MO+reviews"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-xl bg-red-700 px-7 py-4 text-lg font-black text-white shadow-lg hover:bg-red-800"
          >
            Leave a Google Review
          </a>
        </div>
      </section>
    </main>
  );
}
