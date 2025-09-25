import Image from "next/image";
import { notFound } from "next/navigation";
import { PESTS } from "@/data/pests.generated";
import { DESCRIPTIONS } from "@/data/descriptions";
import { withAutoDetails } from "@/lib/pest-gen";

type Props = { params: { slug: string } };

export default function PestDetailPage({ params }: Props) {
  const item = PESTS.find(p => p.slug === params.slug);
  if (!item) return notFound();

  const d = withAutoDetails(item, DESCRIPTIONS);

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-1/2 aspect-square rounded-xl overflow-hidden shadow">
          <Image src={item.image} alt={item.title} fill sizes="(max-width:768px) 100vw, 50vw" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
          <dl className="space-y-3">
            <div>
              <dt className="font-semibold">Biology</dt>
              <dd className="text-gray-700">{d.biology}</dd>
            </div>
            <div>
              <dt className="font-semibold">Life Cycle</dt>
              <dd className="text-gray-700">{d.lifeCycle}</dd>
            </div>
            <div>
              <dt className="font-semibold">Habitat</dt>
              <dd className="text-gray-700">{d.habitat}</dd>
            </div>
            <div>
              <dt className="font-semibold">Behavior</dt>
              <dd className="text-gray-700">{d.behavior}</dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}