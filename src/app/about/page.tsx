import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "About All Star Pest Solutions | Kansas City Pest Control",
  description:
    "All Star Pest Solutions is a locally owned Kansas City pest control company with over 30 years of experience, no mandatory contracts, and owner-operated service.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          About All Star Pest Solutions
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Local Pest Control Built on Experience, Honesty, and Real Results
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>
            All Star Pest Solutions is a locally owned and operated pest control company serving the south Kansas City metro.
          </p>
          <p>
            With over 30 years of pest control experience, we focus on solving the source of the pest problem — not just spraying what you can see.
          </p>
          <p>
            When you call All Star Pest Solutions, you speak directly with the owner and technician. No call center. No high-pressure contract sales. Just straight answers and professional service.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-black">30+ Years Experience</h2>
            <p className="mt-3 text-slate-700">Experience matters when pests are hidden in walls, crawlspaces, foundations, and structural areas.</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-black">No Mandatory Contracts</h2>
            <p className="mt-3 text-slate-700">You can choose service based on what your home actually needs.</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-black">Pollinator-Conscious</h2>
            <p className="mt-3 text-slate-700">We use smart, targeted methods while respecting bees and beneficial insects.</p>
          </div>
        </div>
      </section>

      <StrongCTA />
    </main>
  );
}
