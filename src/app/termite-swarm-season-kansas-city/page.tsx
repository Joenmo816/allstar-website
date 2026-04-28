import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termite Swarm Season Kansas City | What Homeowners Need to Know",
  description:
    "Learn why termite swarm season matters in Kansas City, what warning signs to watch for, and when to schedule a termite inspection.",
};

export default function TermiteSwarmSeasonPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Kansas City Termite Warning Signs
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Termite Swarm Season in Kansas City: Don’t Ignore the Warning Signs
        </h1>

        <p className="mt-6 text-xl font-semibold leading-8 text-slate-700">
          Termite swarmers are one of the clearest signs that termites may be active nearby. If you see flying termites, discarded wings, mud tubes, or ants inside walls, it is time to schedule an inspection.
        </p>

        <div className="mt-10 space-y-6 text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-950">What Termite Swarmers Mean</h2>
          <p>
            Swarmers are reproductive termites looking to start new colonies. Seeing them inside a home is a serious warning sign. Seeing them outside near the structure still deserves attention.
          </p>

          <h2 className="text-3xl font-black text-slate-950">Kansas City Homes Are Vulnerable</h2>
          <p>
            Moisture, crawlspaces, wood-to-soil contact, foundation cracks, mulch, old stumps, and drainage problems can all increase termite risk around Kansas City homes.
          </p>

          <h2 className="text-3xl font-black text-slate-950">Ants in Walls Can Be a Clue</h2>
          <p>
            Carpenter ants and acrobat ants are often attracted to moisture-damaged wood. Those same conditions can also attract termites. If ants are active inside a wall, a termite inspection is a smart move.
          </p>

          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <h2 className="text-3xl font-black">Schedule a Termite Inspection</h2>
            <p className="mt-4 text-slate-200">
              Don’t wait until damage is obvious. Call or text All Star Pest Solutions today.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a href="tel:9137387827" className="rounded-xl bg-red-700 px-7 py-4 text-center text-lg font-black text-white">
                Call (913) 738-7827
              </a>
              <Link href="/termite-inspection-kansas-city" className="rounded-xl bg-white px-7 py-4 text-center text-lg font-black text-slate-950">
                Termite Inspection Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
