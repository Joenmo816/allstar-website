import Image from "next/image";
import { pests } from "@/src/data/pests";

export async function generateStaticParams() {
  return pests.map(p => ({ slug: p.slug }));
}

export default function PestDetail({ params }: { params: { slug: string } }) {
  const pest = pests.find(p => p.slug === params.slug);
  if (!pest) return <div className="container mx-auto px-4 py-10">Pest not found.</div>;
  return (
    <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">
      <div className="relative w-full h-72 md:h-[420px] rounded-xl overflow-hidden border">
        <Image src={pest.image} alt={pest.name} fill className="object-cover" />
      </div>
      <div>
        <h1 className="text-3xl font-extrabold text-brand-blue">{pest.name}</h1>
        <div className="mt-2 text-sm text-gray-600">{pest.group} • {pest.risk} risk</div>
        <p className="mt-4 text-gray-800">{pest.description ?? "Professional identification and targeted treatment available. Contact us for a quote."}</p>
        <a href="/contact" className="inline-block mt-6 px-5 py-3 rounded-md bg-brand-teal text-white font-semibold">Schedule Service</a>
      </div>
    </div>
  );
}
