import Link from "next/link";

export default function LearnPage() {
  const items = [
    { title: "Signs of Termites in KC Homes", href: "/learn/termite-signs", tag: "Termites" },
    { title: "Spring Ant Prevention Checklist", href: "/learn/spring-ants", tag: "Ants" },
    { title: "Rodent Exclusion Basics for Homeowners", href: "/learn/rodent-exclusion", tag: "Rodents" },
    { title: "Why Spiders Show Up in Fall (and what we do)", href: "/learn/fall-spiders", tag: "Spiders" },
  ];
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Learn Center</h1>
      <p className="text-gray-700 mb-6">
        KC’s Bugman shares 28+ years of local know-how: what to watch for, prevention tips, and how our eco-smart treatments work.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((i) => (
          <Link key={i.href} href={i.href} className="block rounded-2xl border p-6 hover:shadow transition">
            <div className="text-xs uppercase tracking-wide text-emerald-700 mb-1">{i.tag}</div>
            <h2 className="text-lg font-semibold">{i.title}</h2>
            <div className="mt-2 text-emerald-700 underline">Read →</div>
          </Link>
        ))}
      </div>

      <p className="text-gray-600 text-sm mt-8">
        Want something explained? <Link href="/contact">Ask KC’s Bugman</Link> and we’ll add it here.
      </p>
    </main>
  );
}
