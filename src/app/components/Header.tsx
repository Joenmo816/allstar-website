import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="font-semibold text-lg">
          All Star Pest Solutions
        </Link>
        <nav className="flex gap-6">
          <Link href="/pests" className="hover:underline">Pest Library</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}