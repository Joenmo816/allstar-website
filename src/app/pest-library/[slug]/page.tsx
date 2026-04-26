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

type RiskLevel = "High" | "Medium" | "Low";

function safeText(value?: string) {
  return value?.trim() || "Information coming soon.";
}

function pluralizePestName(name: string) {
  const overrides: Record<string, string> = {
    "Carpenter Ant": "Carpenter Ants",
    "Acrobat Ant": "Acrobat Ants",
    "German Cockroach": "German Cockroaches",
    "American Cockroach": "American Cockroaches",
    "Brown Banded Cockroach": "Brown-Banded Cockroaches",
    "Oriental Cockroach": "Oriental Cockroaches",
    "Smoky Brown Cockroach": "Smokybrown Cockroaches",
    "Brown Recluse Spider": "Brown Recluse Spiders",
    "Black Widow Spider": "Black Widow Spiders",
    "Bed Bug": "Bed Bugs",
    Termite: "Termites",
    Mouse: "Mice",
    Rat: "Rats",
    Mosquito: "Mosquitoes",
  };

  if (overrides[name]) return overrides[name];

  if (name.endsWith("y") && !/[aeiou]y$/i.test(name)) {
    return `${name.slice(0, -1)}ies`;
  }

  return `${name}s`;
}

function getDisplayRisk(slug: string): RiskLevel {
  const high = [
    "carpenter-ant",
    "acrobat-ant",
    "termite",
    "termite-swarmer",
    "subterranean-termite",
    "brown-recluse",
    "black-widow",
    "tick",
    "bed-bug",
    "rat",
    "roof-rat",
    "house-mouse",
    "german-cockroach",
    "american-cockroach",
    "yellowjacket",
    "wasp",
  ];

  if (high.includes(slug)) return "High";
  return "Medium";
}

function getConcernText(slug: string, pluralName: string) {
  const overrides: Record<string, string> = {
    "carpenter-ant":
      "Carpenter ants can excavate galleries in damp, damaged wood and may worsen structural problems over time. When they are found inside walls, a termite inspection is strongly recommended because the same moisture conditions can support hidden termite damage.",

    "acrobat-ant":
      "Acrobat ants often nest in damp or decayed wood and wall voids. If they are found inside walls, a termite inspection is strongly recommended because underlying moisture damage may also support hidden termite activity.",

    termite:
      "Termites are a hidden structural threat. Damage often occurs behind walls and inside wood long before it becomes visible, which can lead to costly repairs.",
  };

  return (
    overrides[slug] ||
    `${pluralName} can create nuisance issues, contamination concerns, or structural problems if not addressed early.`
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pest = getPest(slug);

  if (!pest) {
    return {
      title: "Pest Not Found | All Star Pest Solutions",
    };
  }

  const pluralName = pluralizePestName(pest.name);

  return {
    title: `${pluralName} in Kansas City | All Star Pest Solutions`,
    description: `Learn about ${pluralName.toLowerCase()} and how to protect your home. 30+ years experience. No contracts.`,
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

  if (!pest) notFound();

  const pluralName = pluralizePestName(pest.name);
  const isPollinator = NON_TARGET_POLLINATORS.has(pest.name);
  const risk = getDisplayRisk(pest.slug);
  const concern = getConcernText(pest.slug, pluralName);

  return (
    <main className="bg-white">
      <section className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-3 mb-6 flex-wrap">
            <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold">
              Kansas City Pest Library
            </span>

            <span className="bg-yellow-500/20 px-3 py-1 rounded-full text-xs font-bold">
              30+ Years Experience
            </span>

            <span className="bg-green-500/20 px-3 py-1 rounded-full text-xs font-bold">
              No Contracts
            </span>

            <span className="bg-red-500/20 px-3 py-1 rounded-full text-xs font-bold">
              {risk} Risk
            </span>
          </div>

          <h1 className="text-5xl font-black mb-4">
            {pluralName} in Kansas City
          </h1>

          <p className="text-xl max-w-2xl mb-6">
            Learn how to identify {pluralName.toLowerCase()} and protect your
            home before the problem gets worse.
          </p>

          <p className="text-3xl font-black mb-6">(913) 738-STAR</p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-red-600 px-6 py-3 font-black text-white rounded"
            >
              FREE INSPECTION
            </Link>

            <a
              href="tel:19137387827"
              className="bg-white text-black px-6 py-3 font-black rounded"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-black text-red-700 mb-4">
          About {pluralName}
        </h2>

        <p className="text-lg mb-6">{safeText(pest.description)}</p>

        <h3 className="text-2xl font-black mt-8 mb-3">Main Concern</h3>
        <p className="text-lg">{concern}</p>
      </section>

      {!isPollinator && (
        <section className="bg-yellow-50 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-black mb-4 text-black">
              ⚠️ Important Warning
            </h2>

            <p className="text-lg leading-8">
              If you are seeing {pluralName.toLowerCase()} inside your home,
              especially in walls, kitchens, or bathrooms, it may indicate
              moisture issues inside the structure.
            </p>

            <p className="text-lg leading-8 mt-4">
              The same conditions that attract these pests can also support
              termite activity. Termites are a hidden danger and can cause
              serious structural damage before you ever see them.
            </p>

            <p className="text-lg font-bold mt-4">
              Most homeowners insurance does NOT cover this type of damage.
            </p>
          </div>
        </section>
      )}

      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-black mb-4">
          Seeing {pluralName} in Your Home?
        </h2>

        <p className="mb-6 text-lg">
          Don’t wait until it becomes a bigger problem.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-red-600 px-6 py-3 font-black text-white rounded"
          >
            FREE INSPECTION
          </Link>

          <a
            href="tel:19137387827"
            className="bg-white text-black px-6 py-3 font-black rounded"
          >
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}
