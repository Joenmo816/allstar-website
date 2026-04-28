import type { Metadata } from "next";
import Link from "next/link";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Kansas City Pest Control Blog | All Star Pest Solutions",
  description:
    "Pest control education for Kansas City homeowners: termites, ants, spiders, roaches, rodents, mosquitoes, fleas, bed bugs, wasps, and more.",
};

const posts = [
  ["Termite Swarm Season", "/termite-swarm-season-kansas-city"],
  ["Ants Inside Walls Warning", "/ants-inside-walls-termite-risk-kansas-city"],
  ["Carpenter Ants vs Termites", "/carpenter-ants-vs-termites-kansas-city"],
  ["Why Ants Keep Coming Back", "/why-ants-keep-coming-back-kansas-city"],
  ["Brown Recluse Identification", "/brown-recluse-identification-kansas-city"],
  ["Spiders in Basement", "/spiders-in-basement-kansas-city"],
  ["German Roach Cleanout", "/german-roach-cleanout-kansas-city"],
  ["Roaches in Kitchen", "/roaches-in-kitchen-kansas-city"],
  ["Mouse Droppings", "/mouse-droppings-kansas-city"],
  ["Termite Mud Tubes", "/termite-mud-tubes-kansas-city"],
  ["Wasp Nest Near Door", "/wasp-nest-near-door-kansas-city"],
  ["Mosquitoes in Yard", "/mosquitoes-in-yard-kansas-city"],
  ["Bed Bug Warning Signs", "/bed-bug-warning-signs-kansas-city"]
];

export default function BlogPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Pest Control Education
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Kansas City Pest Control Blog
        </h1>

        <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
          Straight answers for real pest problems — no fluff, no sales nonsense.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(([title, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-lg"
            >
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 font-black text-red-700">Read more →</p>
            </Link>
          ))}
        </div>
      </section>

      <StrongCTA />
    </main>
  );
}
