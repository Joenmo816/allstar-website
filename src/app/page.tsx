import Link from "next/link";
export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold mb-4">It works 🎉</h1>
      <p className="text-gray-700">
        Your Next.js app is rendering. From here we can re-enable header, hero, badges, etc.
      </p>
      <p className="mt-4">
        Go to <Link href="/bbb">/bbb</Link> to preview the BBB seal size.
      </p>
    </main>
  );
}
