import Image from "next/image";
import Link from "next/link";
import { resolvePublicImageUrl } from "@/lib/publicImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Star Pest Solutions | KC Pest Control Experts - Safe & Guaranteed",
  description: "KC's Bugman! Offering family and pet-friendly eco-smart treatments for homes and businesses. BBB accredited, state-certified, trusted in Kansas City for over 25 years."
};

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
      {/* Background Image */}
      {bgUrl && (
        <div className="absolute inset-0 -z-10 opacity-25">
          <Image
            src={bgUrl}
            alt="Kansas City skyline background for pest control site"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      )}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white to-gray-50" />

      <div className="grid gap-8 py-8 md:grid-cols-2 md:items-center">
        {/* Left Side: Logo, Text, CTA */}
        <div className="space-y-5">
          {logoHeroUrl && (
            <div className="mb-2">
              <Image
                src={logoHeroUrl}
                alt="All Star Pest Solutions company logo"
                width={360}
                height={100}
                priority
              />
            </div>
          )}

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Kansas City Pest Control Experts{" "}
            <span className="text-green-700">With Guaranteed Results</span>
          </h1>

          <h2 className="text-xl text-blue-900 font-semibold">
            Safe for Kids & Pets · Family Owned · Serving KC Metro Over 25 Years
          </h2>

          <p className="text-lg text-blue-800">
            KC&apos;s Bugman! Trusted local pest control using eco-smart treatments to protect homes and businesses in Kansas & Missouri.
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

        {/* Right Side: Key Benefits */}
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
