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

// 🔥 GLOBAL PLURAL FIX
function pluralizePestName(name: string) {
  const trimmed = name.trim();

  const special: Record<string, string> = {
    "Silverfish": "Silverfish",
    "House Mouse": "House Mice",
    "Deer Mouse": "Deer Mice",
    "Mouse": "Mice",

    "Brown Banded Cockroach": "Brown-Banded Cockroaches",
    "American Cockroach": "American Cockroaches",
    "German Cockroach": "German Cockroaches",
    "Oriental Cockroach": "Oriental Cockroaches",
    "Smoky Brown Cockroach": "Smokybrown Cockroaches",

    "Subterranean Termite": "Subterranean Termites",
    "Termite Swarmer": "Termite Swarmers",

    "Bald Faced Hornet": "Bald-Faced Hornets",
    "European Hornet": "European Hornets",
    "Paper Wasp": "Paper Wasps",
    "Red Wasp": "Red Wasps",
    "Yellowjacket": "Yellowjackets",
    "Mud Dauber": "Mud Daubers",
    "Blue Mud Dauber": "Blue Mud Daubers",
    "Cicada Killer": "Cicada Killers",

    "Honey Bee": "Honey Bees",
    "Bumble Bee": "Bumble Bees",
    "Carpenter Bee": "Carpenter Bees",
    "Mason Bee": "Mason Bees",
    "Leaf Cutter Bee": "Leafcutter Bees",
    "Sweat Bee": "Sweat Bees",

    "Lady Bug": "Ladybugs",
    "Black Widow": "Black Widows",
    "Brown Widow": "Brown Widows",
    "Brown Recluse Spider": "Brown Recluse Spiders",
    "Daddy Longlegs": "Daddy Longlegs"
  };

  if (special[trimmed]) return special[trimmed];

  if (trimmed.endsWith(" Mouse")) return trimmed.replace(/ Mouse$/, " Mice");
  if (trimmed.endsWith(" mouse")) return trimmed.replace(/ mouse$/, " mice");
  if (trimmed.endsWith("Cockroach")) return trimmed.replace(/Cockroach$/, "Cockroaches");
  if (trimmed.endsWith("cockroach")) return trimmed.replace(/cockroach$/, "cockroaches");

  if (trimmed.endsWith("sh")) return `${trimmed}es`;
  if (trimmed.endsWith("ch")) return `${trimmed}es`;
  if (trimmed.endsWith("x")) return `${trimmed}es`;
  if (trimmed.endsWith("s")) return trimmed;
  if (trimmed.endsWith("y")) return `${trimmed.slice(0, -1)}ies`;

  return `${trimmed}s`;
}

export default function PestLibraryPage() {
  return (
    <main className="bg-white pb-16">
      <Hero
        eyebrow="Know Your Enemy"
        title="Pest Library"
        description="Explore the most common pests found in Kansas City homes and businesses. Learn how to identify them, what attracts them, and what risks they may pose."
        primaryCtaText="Call (913) 738-7827"
        primaryCtaHref="tel:+19137387827"
        secondaryCtaText="Free Inspection"
        secondaryCtaHref="/contact"
        logoSrc="/logo-header-v2.png"
        heroImageSrc="/images/pest-control-hero.webp"
        heroImageAlt="Pest control inspection"
        mascotSrc="/mascot.png"
        showMascot={true}
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {pests.map((pest) => {
            const pluralName = pluralizePestName(pest.name);

            return (
              <Link key={pest.slug} href={`/pest-library/${pest.slug}`}>
                <div className="cursor-pointer rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  
                  <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
                    <Image
                      src={pest.image}
                      alt={pluralName}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>

                  {/* 🔥 FIXED NAME */}
                  <h2 className="mb-2 text-center text-xl font-bold text-slate-900">
                    {pluralName}
                  </h2>

                  {/* 🔥 STRONGER CTA */}
                  <p className="text-center text-sm font-semibold text-red-600">
                    View Details →
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}


