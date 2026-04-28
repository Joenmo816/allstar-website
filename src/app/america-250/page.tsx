import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Celebrating America 250 | All Star Pest Solutions",
  description:
    "All Star Pest Solutions proudly celebrates America’s 250th birthday while serving Kansas City area homeowners with honest pest control and termite inspections.",
};

export default function America250Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          America 250
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
          Celebrating America’s 250th Birthday
        </h1>

        <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
          All Star Pest Solutions is proud to celebrate America’s 250th birthday
          while serving local families, homeowners, veterans, seniors, and small
          businesses across the Kansas City metro.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-black">Local Service</h2>
            <p className="mt-3 leading-7 text-slate-700">
              We believe strong communities are built by local people serving local families.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-black">Veteran & Senior Discounts</h2>
            <p className="mt-3 leading-7 text-slate-700">
              We proudly offer veteran and senior discounts as part of our commitment to service.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-black">Guaranteed Results</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Honest pest control. No mandatory contracts. Real solutions from a local owner.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white">
          <h2 className="text-3xl font-black">
            Proudly Serving the South Kansas City Metro
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            From termite inspections to ants, spiders, rodents, mosquitoes, wasps,
            cockroaches, fleas, and bed bugs — All Star Pest Solutions is here to help
            protect the homes that make America strong.
          </p>
        </div>
      </section>

      <StrongCTA />
    </main>
  );
}
