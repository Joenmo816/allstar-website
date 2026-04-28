import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Termite Inspections for Real Estate Agents Kansas City",
  description: "Termite inspections for Kansas City real estate agents, VA loans, FHA loans, buyers, sellers, and closings.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">For Real Estate Agents</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Termite Inspections for Kansas City Real Estate Agents</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Real estate transactions move fast. All Star Pest Solutions provides termite inspections for agents, buyers, sellers, VA loans, FHA loans, and closing requirements.</p>
          <p>We understand the importance of clear communication, fast scheduling, and professional inspection work during a transaction.</p>
          <p>Serving the south Kansas City metro in Kansas and Missouri.</p>
        </div>
      </section>
      <StrongCTA />
    </main>
  );
}
