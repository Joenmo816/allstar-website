import Link from "next/link";
import Image from "next/image";
import { pests } from "../../data/pests.generated";

export default function PestLibraryPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Pest Library</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pests.map((pest) => {
            const imageSrc = pest.image || "/images/pests/placeholder.png";

            return (
              <Link key={pest.slug} href={`/pests/${pest.slug}`}>
                <div className="border rounded-lg shadow hover:shadow-lg p-6 bg-white cursor-pointer">
                  <Image
                    src={imageSrc}
                    alt={pest.name}
                    width={128}
                    height={128}
                    className="h-32 w-auto mx-auto mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2 text-center">
                    {pest.name}
                  </h2>
                  <p className="text-gray-600 text-sm text-center">
                    {pest.description || "Learn more about this pest"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

