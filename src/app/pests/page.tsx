// src/app/pests/page.tsx
import Image from "next/image";
import { pests } from "@/data/pests";

export const metadata = {
  title: "Pest Library | All Star Pest Solutions",
  description: "Browse common Kansas City pests with images and quick facts."
};

export default function PestLibraryPage() {
  const list = pests.slice().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-brand-blue">Pest Library</h1>
      <p className="mt-2 text-gray-700">Click any pest to learn more.</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.length === 0 && (
          <div className="text-gray-600">
            No items yet. Add images to <code>/public/images/pests</code> and add rows in <code>src/data/pests.generated.ts</code>.
          </div>
        )}
        {list.map((p) => (
          <a
            key={p.slug}
            href={`/pests/${p.slug}`}
            className="group rounded-xl border bg-white hover:shadow-md transition overflow-hidden"
          >
            <div className="relative h-40 w-full bg-gray-100">
              <Image src={p.image} alt={p.name} fill className="object-cover" />
            </div>
            <div className="p-3">
              <div className="font-semibold">{p.name}</div>
              <div className="text-xs text-gray-600">{p.group} • {p.risk} risk</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );