import Image from "next/image";
import Link from "next/link";
import { resolvePublicImageUrl } from "@/lib/publicImage";

const bgUrl = resolvePublicImageUrl(["kc-bg.webp", "kc-bg.jpg", "kc-bg.png"]);
const logoHeroUrl =
  resolvePublicImageUrl([
    "logo-hero.svg",
    "logo.svg",
    "logo.png",
    "allstar-logo.svg",
    "allstar-logo.png"
  ]) || null;

export default function HomePage() {
  return (
    <section className="relative isolate overflow-hidden rounded-2xl">
      {bgUrl ? (
        <Image
          src={bgUrl}
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover opacity-25"
        />
      ) : null}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white to-gray-50" />

      <div className="grid gap-8 py-8 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          {/* BIG company logo on the homepage */}
          {logoHeroUrl && (
            <div className="mb-2">
              <Image
                src={logoHeroUrl}
                alt="All Star Pest logo"
                width={360}
                height={100}
                priority
                className="h-auto w-auto"
              />
            </div>
          )}

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Guaranteed Service, <span className="text-green-700">Guaranteed Results.</span>
          </h1>

          {/* Middle paragraph: make it blue */}
          <p className="text-lg text-blue-800">
            KC&apos;s Bugman! Family-owned and operated pest control serving the Kansas City
            metro with eco-smart treatments safe for kids &amp; pets.
          </p>

          <div className="flex gap-3">
            <a
              href="tel:+19137387827"
              className="rounded-full bg-green-600 px-4 py-2 text-white font-semibold"
            >
              Call (913) 738-STAR
            </a>
            <Link href="/services" className="rounded-full border px-4 py-2 font-semibold">
              See Services
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border p-6">
  <ul className="grid grid-cols-2 gap-3 text-lg md:text-xl font-semibold text-green-800">
    <li>State-Certified (KS/MO)</li>
    <li>Eco-Smart Treatments</li>
    <li>BBB Accredited</li>
    <li>No Mandatory Contracts</li>
  </ul>
</div>
      </div>
    </section>
  );
}
          
