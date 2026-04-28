import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kansas City Pest Control Blog | All Star Pest Solutions",
  description: "Pest control tips for Kansas City homeowners including termites, ants, spiders, mosquitoes, rodents, cockroaches, and seasonal pest problems.",
};

const posts = [
  {
    title: "Termite Swarm Season in Kansas City",
    href: "/termite-swarm-season-kansas-city",
    text: "What termite swarmers mean and when to schedule an inspection."
  },
  {
    title: "Why Ants Inside Walls Can Be a Warning Sign",
    href: "/ants-inside-walls-termite-risk-kansas-city",
    text: "Carpenter ants, acrobat ants, moisture, and hidden termite risk."
  },
  {
    title: "Kansas City Spring Pest Checklist",
    href: "/spring-pest-checklist-kansas-city",
    text: "What homeowners should check as pests become active."
  }
];

export default function BlogPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Pest Control Education
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
          Kansas City Pest Control Blog
        </h1>

        <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-slate-700">
          Straight answers for homeowners dealing with termites, ants, spiders, rodents, mosquitoes, cockroaches, and other Kansas City pests.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.href} href={post.href} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-lg">
              <h2 className="text-2xl font-black">{post.title}</h2>
              <p className="mt-3 leading-7 text-slate-700">{post.text}</p>
              <p className="mt-5 font-black text-red-700">Read more →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
