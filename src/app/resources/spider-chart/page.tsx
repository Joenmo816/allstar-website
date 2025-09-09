export const metadata = {
  title: "Spider Identification Chart | All Star Pest Solutions",
  description: "Printable spider identification chart with risk levels and quick bite first-aid reminders."
};

import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <nav className="text-sm text-gray-500">
        <Link href="/pests" className="hover:underline">← Back to Pest Library</Link>
      </nav>

      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Spider Identification Chart</h1>
        <p className="text-gray-700">Quick-reference chart for common spiders in the Kansas City metro. Save or print for handy use.</p>
      </header>

      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        <img src="/images/spiderchart.png" alt="Spider identification chart" className="w-full h-auto" />
      </div>

      <div className="flex flex-wrap gap-3">
        <a href="/images/spiderchart.png" download className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Download Chart</a>
        <Link href="/pests" className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-50">Browse Pest Library</Link>
      </div>
    </main>
  );
}
