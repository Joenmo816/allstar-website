import Link from "next/link";
import Image from "next/image";
import { resolvePublicImageUrl } from "@/lib/publicImage";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/pests", label: "Pest Library" },
  { href: "/pricing", label: "Pricing" },
  { href: "/service-area", label: "Service Area" },
  { href: "/guarantee", label: "Guarantee" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const logoUrl =
  resolvePublicImageUrl([
    "logo.svg",
    "logo.png",
    "logo.webp",
    "allstar-logo.svg",
    "allstar-logo.png",
    "allstar-logo.webp"
  ]) || null;

export default function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt="All Star Pest"
              width={180}
              height={48}
              priority
              className="h-10 w-auto"
            />
          ) : (
            <span className="text-2xl font-extrabold text-blue-800">All Star Pest Solutions</span>
          )}
        </Link>

        {/* NAV: bold blue + larger */}
        <nav className="hidden items-center gap-6 md:flex">
        <Link href='/' className='hover:underline'>Home</Link>
        <Link href='/' className='hover:underline'>Home</Link>
          {NAV.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-lg font-semibold text-blue-700 hover:text-blue-900"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+19137387827"
          className="rounded-full bg-green-600 px-5 py-2 text-sm md:text-base font-semibold text-white"
        >
          Call (913) 738-STAR
        </a>
      </div>
    </header>
  );
}
