import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "No Contract Pest Control Kansas City | All Star Pest Solutions",
  description: "No mandatory contract pest control in Kansas City. One-time and recurring service options from All Star Pest Solutions.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">No Mandatory Contracts</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">No Contract Pest Control Kansas City</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>You should not have to sign a contract just to get honest pest control.</p>
          <p>All Star Pest Solutions offers one-time service, recurring service, and customized pest control based on what your home actually needs.</p>
          <p>If a service plan makes sense, we will explain why. If one-time treatment is enough, we will say that too.</p>
        </div>
      </section>
      <StrongCTA />
    </main>
  );
}
