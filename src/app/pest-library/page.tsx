import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/components/Hero";
import { pests } from "@/data/pests.generated";

export const metadata: Metadata = {
  title: "Pest Library | All Star Pest Solutions",
  description:
    "Explore common pests found in Kansas City homes and businesses. Learn how to identify, prevent, and handle infestations.",
};

export default function PestLibraryPage() {
  return (
    <main className="bg-white pb-16">
      <Hero
        eyebrow="Know Your Enemy"
        title="Pest Library"
        description="Explore the most common pests found in Kansas City homes and businesses. Learn how to identify them, what attracts them, and how to prevent infestations."
        primaryCtaText="Call (913) 738-7827"
        primaryCtaHref="tel:+19137387827"
        secondaryCtaText="Free Inspection"
        secondaryCtaHref="/contact"
        logoSrc="/logo-header-v2.png"
        heroImageSrc="/images/pest-control-hero.jpg"
        heroImageAlt="Pest control inspection"
        mascotSrc="/mascot.png"
        showMascot={true}
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {pests.map((pest) => (
            <Link key={pest.slug} href={`/pest-library/${pest.slug}`}>
              <div className="cursor-pointer rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
                  <Image
                    src={pest.image}
                    alt={pest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <h2 className="mb-2 text-center text-xl font-bold text-slate-900">
                  {pest.name}
                </h2>

                <p className="text-center text-sm font-semibold text-red-600">
                  View Details →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

