import Link from "next/link";

export function Header() {
  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-brandBlue">
          ALL STAR PEST SOLUTIONS
        </Link>
        <nav className="flex gap-6 text-brandBlue font-semibold">
          <Link href="/services">Services</Link>
          <Link href="/service-area">Service Area</Link>
          <Link href="/pests">Pest Library</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}