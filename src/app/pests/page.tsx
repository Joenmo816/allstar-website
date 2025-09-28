import Link from "next/link";
import type { Metadata } from "next";
import { getAllPests } from "./lib";

export const metadata: Metadata = {
  title: "Pest Library — All Star Pest Solutions",
  description: "Browse common Kansas City pests and learn signs, risks, and treatment options.",
};

export default function PestLibraryPage() {
  const pests = getAllPests();

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Pest Library</h1>
      <p className="text-gray-700 mb-8">
        Explore common pests in the KC metro. Click any pest for biology, habitat, and treatment tips.
      </p>

      <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {pests.map(({ slug, name }) => (
          <li key={slug}>
            <Link
              href={`/pests/${slug}`}
              className="block rounded-xl border p-4 hover:shadow-md focus:outline-none focus:ring"
            >
              <span className="font-medium">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}