import Image from "next/image";
import { notFound } from "next/navigation";
import { pests, getPest } from "@/data/pests";

export async function generateStaticParams() {
  return pests.map((p) => ({ slug: p.slug }));
}

export default function PestDetailPage({ params }: { params: { slug: string } }) {
  const pest = getPest(params.slug);
  if (!pest) notFound();

  const F = pest.facts ?? {};

  const Section = ({ title, text }: { title: string; text?: string }) =>
    text ? (
      <section className="mt-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-1 text-gray-800 leading-relaxed">{text}</p>
      </section>
    ) : null;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative w-full h-80 md:h-[480px] rounded-xl overflow-hidden border bg-gray-50">
          <Image
            src={pest.image}
            alt={pest.name}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-blue">{pest.name}</h1>
          <div className="mt-2 text-sm text-gray-600">
            {pest.group} • {pest.risk} risk
          </div>
          {pest.description && (
            <p className="mt-4 text-gray-800 leading-relaxed">{pest.description}</p>
          )}

          {/* Rich sections (treatment removed) */}
          <Section title="Biology" text={F.biology} />
          <Section title="Behavior" text={F.behavior} />
          <Section title="What Attracts Them" text={F.attractant} />
          <Section title="Lifecycle" text={F.lifecycle} />
          <Section title="Common Signs" text={F.signs} />
          <Section title="Damage / Impact" text={F.damage} />
          <Section title="Seasonality" text={F.seasonality} />
          <Section title="Prevention" text={F.prevention} />
          <Section title="Monitoring" text={F.monitoring} />

          <a
            href="mailto:info@allstarpestkc.com"
            className="inline-block mt-8 px-5 py-3 rounded-md bg-brand-teal text-white font-semibold"
          >
            Schedule Service
          </a>
        </div>
      </div>
    </div>
  );
}
