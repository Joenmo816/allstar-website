import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Safe Pest Control Kansas City | Family & Pet Conscious",
  description: "Safe, targeted pest control in Kansas City using modern, responsible treatment methods.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Responsible Pest Control</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Safe Pest Control Kansas City</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Modern pest control should be targeted, practical, and responsible.</p>
          <p>All Star Pest Solutions focuses on treating the right areas, reducing pest pressure, and avoiding unnecessary over-application.</p>
          <p>We care about families, pets, pollinators, and the environment while still solving pest problems.</p>
        </div>
      </section>
      <StrongCTA />
    </main>
  );
}
