import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Commercial Pest Control Kansas City | All Star Pest Solutions",
  description: "Commercial pest control in Kansas City for small businesses, offices, shops, warehouses, restaurants, and property managers.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Commercial Pest Control</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Commercial Pest Control Kansas City</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>All Star Pest Solutions provides commercial pest control for small businesses, offices, shops, warehouses, rental properties, and local facilities across the south Kansas City metro.</p>
          <p>We help with ants, spiders, cockroaches, rodents, wasps, fleas, mosquitoes, stored product pests, and general pest pressure around commercial structures.</p>
          <p>No mandatory contracts. No call center. Just honest recommendations and service from a local owner with over 30 years of experience.</p>
        </div>
      </section>
      <StrongCTA />
    </main>
  );
}
