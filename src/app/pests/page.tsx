import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";

function getPests() {
  const directory = path.join(process.cwd(), "public/images/pests");
  const files = fs.readdirSync(directory);

  return files
    .filter((file) => /\.(jpg|jpeg|png)$/i.test(file))
    .map((file) => {
      const slug = file
        .replace(/\.(jpg|jpeg|png)$/i, "")
        .toLowerCase();

      const name = slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return { slug, name, file };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

export const metadata = {
  title: "Pest Identification Library | Kansas City",
  description:
    "Browse our Kansas City pest identification library including rodents, termites, cockroaches, spiders and stinging insects.",
};

export default function PestLibraryPage() {
  const pests = getPests();

  return (
    <main className="pt-32 bg-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-bold mb-10">Pest Library</h1>

        <div className="grid md:grid-cols-3 gap-10">
          {pests.map((pest) => (
            <Link
              key={pest.slug}
              href={`/pests/${pest.slug}`}
              className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative h-48">
                <Image
                  src={`/images/pests/${pest.file}`}
                  alt={pest.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h2 className="font-semibold text-lg">
                  {pest.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>

      </section>
    </main>
  );
}