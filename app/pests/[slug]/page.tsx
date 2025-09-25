interface PageProps { params: { slug: string } }

const pestCopy: Record<string, string> = {
  "brown-recluse": "Brown recluse spiders are reclusive and prefer undisturbed areas. Call us for safe treatment.",
  "german-cockroach": "German cockroaches reproduce quickly; professional treatment and sanitation are key.",
  "carpenter-ant": "Carpenter ants nest in wood; inspection and targeted treatment recommended.",
};

export default function PestDetail({ params }: PageProps) {
  const slug = params.slug;
  const name = slug.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
  const image = `/images/pest/${slug}.jpg`;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <h1 className="text-3xl font-bold">{name}</h1>
      <div className="mt-6 overflow-hidden rounded-xl border">
        <img src={image} alt={name} className="w-full h-auto object-cover" />
      </div>
      <p className="mt-6 text-zinc-700">{pestCopy[slug] ?? "More information coming soon."}</p>
      <div className="mt-8 flex gap-3">
        <a href="/contact" className="btn-primary">Request Service</a>
        <a href="/services" className="btn-outline">See Services</a>
      </div>
    </main>
  );
}