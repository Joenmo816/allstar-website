import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <ul className="list-disc pl-5 space-y-2 text-gray-800">
        <li><Link className="text-blue-600 underline" href="/services/residential">Residential Pest Control</Link></li>
        <li><Link className="text-blue-600 underline" href="/services/commercial">Commercial Pest Control</Link></li>
      </ul>
    </main>
  );
}
