import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>© 2025 All Star Pest Solutions. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="/services">Services</Link>
            <Link href="/pests">Pest Library</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
