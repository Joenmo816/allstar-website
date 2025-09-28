import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Pest Control — All Star Pest Solutions",
  description: "Quarterly and one-time treatments for ants, spiders, roaches, and more.",
};

export default function GeneralPestPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">General Pest Control</h1>
      <p className="text-gray-700">
        Reliable treatments for common household pests with kid &amp; pet-considered products.
      </p>
    </main>
  );
}