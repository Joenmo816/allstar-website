import { pests } from "@/lib/pests";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return pests.map((p) => ({ slug: p.slug }));
}

export default function Page({ params }) {
  const pest = pests.find((p) => p.slug === params.slug);
  if (!pest) return notFound();

  return (
    <div style={{ padding: "40px" }}>
      <h1>{pest.name} Control Kansas City</h1>
      <p>Professional {pest.name.toLowerCase()} control and inspection services.</p>
    </div>
  );
}
