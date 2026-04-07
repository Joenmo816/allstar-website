import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pests, getPest } from "@/data/pests.generated";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const NON_TARGET_POLLINATORS = new Set([
  "Honey Bee",
  "Bumble Bee",
  "Mason Bee",
]);

function safeText(value?: string) {
  return value?.trim() || "Information coming soon.";
}

function pluralizePestName(name: string) {
  const overrides: Record<string, string> = {
    "Honey Bee": "Honey Bees",
    "Bumble Bee": "Bumble Bees",
    "Mason Bee": "Mason Bees",
    "Yellow Jacket": "Yellow Jackets",
    "Paper Wasp": "Paper Wasps",
    "Mud Dauber": "Mud Daubers",
    "House Fly": "House Flies",
    "Fruit Fly": "Fruit Flies",
    "Drain Fly": "Drain Flies",
    "Carpenter Ant": "Carpenter Ants",
    "Odorous House Ant": "Odorous House Ants",
    "American Cockroach": "American Cockroaches",
    "German Cockroach": "German Cockroaches",
    "Brown Recluse Spider": "Brown Recluse Spiders",
    "Black Widow Spider": "Black Widow Spiders",
    "Bed Bug": "Bed Bugs",
    "Boxelder Bug": "Boxelder Bugs",
    "Stink Bug": "Stink Bugs",
    "Mosquito": "Mosquitoes",
    Mouse: "Mice",
    Rat: "Rats",
    Termite: "Termites",
    Flea: "Fleas",
    Tick: "Ticks",
  };

  if (overrides[name]) return overrides[name];

  if (name.endsWith("y") && !/[aeiou]y$/i.test(name)) {
    return `${name.slice(0, -1)}ies`;
  }

  if (/(s|x|z|ch|sh)$/i.test(name)) {
    return `${name}es`;
  }

  return `${name}s`;
}

function normalizeDescription(
  description: string,
  pestName: string,
  pluralName: string,
  isNonTargetPollinator: boolean
) {
  if (isNonTargetPollinator) {
    return `${pluralName} are beneficial insects that may be encountered in and around homes or structures. They should be properly identified, and in most cases left alone or relocated by a professional beekeeper.`;
  }

  return description
    .replaceAll(`${pestName} is`, `${pluralName} are`)
    .replaceAll(`${pestName} may`, `${pluralName} may`)
    .replaceAll(`${pestName} can`, `${pluralName} can`)
    .replaceAll(`${pestName} has`, `${pluralName} have`)
    .replaceAll(`${pestName} does`, `${pluralName} do`);
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pest = getPest(slug);

  if (!pest) {
    return {
      title: "Pest Not Found | All Star Pest Solutions",
      description: "The requested pest page could not be found.",
    };
  }

  const pestName = pest.name;
  const pluralName = pluralizePestName(pestName);
  const lowerPluralName = pluralName.toLowerCase();

  const title = `${pluralName} in Kansas City | All Star Pest Solutions`;
  const description = `Learn the signs, risks, and prevention tips for ${lowerPluralName} in Kansas City and across the KC metro. Call All Star Pest Solutions for expert pest solutions and fast service.`;

  return {
    title,
    description,
    keywords: [
      `${pestName} Kansas City`,
      `${pluralName} Kansas City`,
      `${pestName} pest solutions Kansas City`,
      `${pestName} exterminator Kansas City`,
      `All Star Pest Solutions ${pestName}`,
    ],
    alternates: {
      canonical: `https://www.allstarpestkc.com/pest-library/${pest.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.allstarpestkc.com/pest-library/${pest.slug}`,
      siteName: "All Star Pest Solutions",
      type: "article",
      images: [
        {
          url: pest.image,
          width: 1200,
          height: 630,
          alt: pestName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [pest.image],
    },
  };
}

export async function generateStaticParams() {
  return pests.map((pest) => ({
    slug: pest.slug,
  }));
}

export default async function PestDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pest = getPest(slug);

  if (!pest) {
    notFound();
  }

  const pestName = pest.name;
  const lowerName = pestName.toLowerCase();
  const pluralName = pluralizePestName(pestName);
  const lowerPluralName = pluralName.toLowerCase();
  const isNonTargetPollinator = NON_TARGET_POLLINATORS.has(pestName);
  const pageUrl = `https://www.allstarpestkc.com/pest-library/${pest.slug}`;
  const normalizedDescription = normalizeDescription(
    safeText(pest.description),
    pestName,
    pluralName,
    isNonTargetPollinator
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.allstarpestkc.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pest Library",
        item: "https://www.allstarpestkc.com/pest-library",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pest.name,
        item: pageUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `${pest.name} Pest Solutions`,
    serviceType: `${pest.name} pest solutions`,
    provider: {
      "@id": "https://www.allstarpestkc.com/#localbusiness",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Johnson County, KS" },
      { "@type": "AdministrativeArea", name: "Miami County, KS" },
      { "@type": "AdministrativeArea", name: "Cass County, MO" },
      { "@type": "AdministrativeArea", name: "Jackson County, MO" },
    ],
    url: pageUrl,
    description: `Professional help for ${lowerName} problems in Kansas City and surrounding areas.`,
  };

  const factSections = [
    { title: "Biology", content: safeText(pest.facts?.biology) },
    { title: "Behavior", content: safeText(pest.facts?.behavior) },
    { title: "What Attracts Them", content: safeText(pest.facts?.attractant) },
    { title: "Life Cycle", content: safeText(pest.facts?.lifecycle) },
    { title: "Signs of Activity", content: safeText(pest.facts?.signs) },
    { title: "Damage / Risk", content: safeText(pest.facts?.damage) },
    { title: "Seasonality", content: safeText(pest.facts?.seasonality) },
    { title: "Prevention Tips", content: safeText(pest.facts?.prevention) },
    { title: "Monitoring", content: safeText(pest.facts?.monitoring) },
  ];

  return (
    <main className="bg-white font-bold">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="bg-black">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-20 lg:grid-cols-2">
          <div className="order-2 text-white lg:order-1">
            <div className="mb-6 inline-block rounded-full border border-white px-4 py-2 text-sm font-black uppercase tracking-wide md:text-base">
              Kansas City Pest Library
            </div>

            {isNonTargetPollinator && (
              <div className="mb-5 inline-block rounded-full bg-green-600 px-4 py-2 text-sm font-black uppercase tracking-wide text-white shadow-lg">
                Non-Target / Beneficial Pollinator
              </div>
            )}

            <h1 className="mb-4 text-4xl font-black leading-tight text-yellow-400 md:text-6xl">
              {pluralName} in Kansas City
            </h1>

            <p className="mb-6 max-w-2xl text-xl leading-relaxed md:text-2xl">
              Learn how to identify {lowerPluralName}, what attracts them, and
              how to protect your home throughout the Kansas City metro.
            </p>

            <p className="mb-6 text-3xl font-black text-yellow-300">
              Call (913) 738-STAR
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-yellow-400 px-8 py-4 font-black text-black transition hover:bg-yellow-300"
              >
                FREE INSPECTION
              </Link>

              <a
                href="tel:19137387827"
                className="rounded-md bg-white px-8 py-4 font-black text-black transition hover:bg-gray-200"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <Image
              src="/mascot.png"
              alt="All Star Pest Solutions Mascot"
              width={520}
              height={520}
              priority
              className="h-auto w-full max-w-[380px] drop-shadow-2xl lg:max-w-[460px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-black text-red-700 md:text-4xl">
              About {pluralName}
            </h2>

            <p className="mb-6 text-lg leading-8 text-zinc-800 md:text-xl">
              {normalizedDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-red-700 px-6 py-3 font-black text-white transition hover:bg-red-800"
              >
                Get Help Now
              </Link>

              <a
                href="tel:19137387827"
                className="rounded-md bg-black px-6 py-3 font-black text-yellow-400 transition hover:bg-zinc-900"
              >
                Call (913) 738-STAR
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl border-4 border-red-700 bg-white shadow-2xl">
              <Image
                src={pest.image}
                alt={pest.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {isNonTargetPollinator && (
        <section className="bg-green-50 py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl border-2 border-green-300 bg-white p-8 shadow-sm">
              <p className="mb-3 inline-flex rounded-full bg-green-700 px-4 py-1 text-sm font-black uppercase tracking-wide text-white">
                Beneficial Pollinator Notice
              </p>

              <h2 className="text-3xl font-black text-slate-900">
                Important Note About {pluralName}
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-800">
                {pluralName} are considered non-target beneficial pollinators.
                We do not routinely treat them. If you suspect a hive, colony,
                or recurring nesting issue, we recommend contacting a local
                beekeeper or qualified live-removal specialist for the safest
                and most responsible next step.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Correct identification matters. Not every stinging insect should
                be treated the same way, and bee-related situations often call
                for relocation rather than elimination.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="bg-gradient-to-b from-white via-yellow-50 to-white py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black text-red-700 md:text-4xl">
              {pluralName} Facts, Risks & Prevention
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg leading-8 text-slate-700">
              The more you know about {lowerPluralName}, the easier it is to
              spot activity early and protect your home before the problem gets
              worse.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {factSections.map((section) => (
              <div
                key={section.title}
                className="group rounded-3xl border border-red-200 bg-gradient-to-br from-white to-yellow-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex rounded-full bg-red-700 px-3 py-1 text-xs font-black uppercase tracking-wide text-white">
                  {section.title}
                </div>

                <h3 className="mb-3 text-2xl font-black text-slate-900">
                  {section.title}
                </h3>

                <p className="text-lg leading-8 text-slate-700">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-4 text-3xl font-black text-yellow-400 md:text-4xl">
            Seeing {pluralName} in Your Home?
          </h2>

          <p className="mb-8 text-lg leading-8 md:text-xl">
            {isNonTargetPollinator
              ? `If you believe you have ${lowerPluralName} activity in or around your home, proper identification matters. We can help point you toward the right next step and recommend contacting a beekeeper or live-removal specialist when appropriate.`
              : `Don’t wait for the problem to get worse. Get fast, professional pest solutions from a locally owned company with over 30 years of experience.`}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-yellow-400 px-6 py-3 font-black text-black transition hover:bg-yellow-300"
            >
              FREE INSPECTION
            </Link>

            <a
              href="tel:19137387827"
              className="rounded-md bg-white px-6 py-3 font-black text-black transition hover:bg-gray-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}