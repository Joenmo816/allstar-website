import type { Metadata } from "next";
import { SERVICE_AREAS } from "./areas";

export const metadata: Metadata = {
  title: "Service Area — All Star Pest Solutions",
  description: "Local pest control for the Kansas City south metro and surrounding areas.",
};

export default function ServiceAreaPage() {
  const areas = [...SERVICE_AREAS].sort((a, b) => a.localeCompare(b));

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Service Area</h1>
      <p className="text-gray-700 mb-6">
        Proudly serving the KC metro. Don’t see your city? Call <a className="text-blue-600 hover:underline" href="tel:+19137387827">(913) 738-7827</a>.
      </p>

      <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {areas.map((city) => (
          <li key={city} className="rounded-xl border p-3">{city}</li>
        ))}
      </ul>
    </main>
  );
}