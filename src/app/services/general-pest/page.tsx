import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Pest Control — All Star Pest Solutions",
  description: "Reliable treatments with kid & pet-considered products."
};

export default function GeneralPestPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">General Pest Control</h1>
      <p className="text-gray-700">
        Quarterly & one-time services targeting common household pests.
      </p>
    </main>
  );
}