import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl px-4 flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold">All Star Pest Solutions</Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/pests" className="hover:underline">Pest Library</Link>
          <Link href="/bbb" className="hover:underline">BBB</Link>
          <a href="tel:+19137387827" className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm font-medium shadow-sm bg-green-500 text-white border-transparent hover:opacity-90">
            Call (913) 738-STAR
          </a>
        </nav>
      </div>
    </header>
  );
}
