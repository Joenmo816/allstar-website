import Link from "next/link";
import Image from "next/image";
import TrustBadges from "@/components/TrustBadges";
import { resolvePublicImageUrl } from "@/lib/publicImage";

const bgUrl = resolvePublicImageUrl(["kc-bg.webp","kc-bg.jpg","kc-bg.png"]);

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
        <div className="space-y-4">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Guaranteed Service, <span className="text-allstarGreen">Guaranteed Results.</span>
          </h1>
          <p className="text-lg text-gray-700">
            Family-owned pest control serving the Kansas City metro with eco-smart treatments
            safe for kids & pets. Over 28 years of experience.
          </p>
          <div className="flex gap-3">
            <a href="tel:+19137387827" className="btn btn-primary">Call (913) 738-STAR</a>
            <Link href="/services" className="btn btn-outline">See Services</Link>
          </div>
          <div className="pt-2">
            <TrustBadges />
          </div>
        </div>

        <div className="card">
          <ul className="grid grid-cols-2 gap-3 text-sm">
            <li>State-Certified (KS/MO)</li>
            <li>Eco-Smart Treatments</li>
            <li>BBB & Community-Trusted</li>
            <li>No Mandatory Contracts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

