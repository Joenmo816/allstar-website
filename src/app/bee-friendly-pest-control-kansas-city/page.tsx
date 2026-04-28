import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Bee-Friendly Pest Control Kansas City | Pollinator-Conscious Service",
  description: "Pollinator-conscious pest control in Kansas City from All Star Pest Solutions.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Pollinator-Conscious</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Bee-Friendly Pest Control Kansas City</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Not every insect should be treated the same. Bees and beneficial insects play an important role in the environment.</p>
          <p>All Star Pest Solutions uses a practical, pollinator-conscious approach whenever possible while still protecting homes from harmful or invasive pests.</p>
          <p>Wasps, hornets, yellowjackets, and dangerous nesting locations may require treatment, but we always try to use common sense and targeted methods.</p>
        </div>
      </section>
      <StrongCTA />
    </main>
  );
}
