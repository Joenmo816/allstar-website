import Image from "next/image";
import { pests } from "@/data/pests";

export async function generateStaticParams() {
  return pests.map(p => ({ slug: p.slug }));
}

export default function PestDetail({ params }: { params: { slug: string } }) {
  const pest = pests.find(p => p.slug === params.slug);
  if (!pest) return <div className="p-6">Pest not found.</div>;

  return (
    <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">
      <div className="relative h-72 md:h-[420px] rounded-lg overflow-hidden border">
        <Image src={pest.image} alt={pest.alt} fill className="object-cover" />
      </div>
      <div>
        <h1 className="text-3xl font-extrabold text-brand-blue">{pest.commonName}</h1>
        {pest.scientificName && (
          <div className="mt-1 text-sm text-gray-600 italic">{pest.scientificName}</div>
        )}
        {pest.description && <p className="mt-4">{pest.description}</p>}
      </div>
    </div>
  );
}
