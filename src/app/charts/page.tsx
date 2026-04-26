import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Free Pest Identification Charts | All Star Pest Solutions",
  description:
    "Download free printable pest identification charts for ants, bees and stinging insects, beneficial insects, and spiders from All Star Pest Solutions.",
};

const charts = [
  {
    title: "Ant Identification Chart",
    description:
      "Identify common ants and learn which ones may damage homes, trees, wood, lawns, or property.",
    image: "/downloads/charts/ant-chart.png",
  },
  {
    title: "Bee & Stinging Insect Identification Chart",
    description:
      "Learn the difference between honey bees, bumble bees, wasps, hornets, mud daubers, ground wasps, and carpenter bees.",
    image: "/downloads/charts/bee-chart.png",
  },
  {
    title: "Beneficial Insects Chart",
    description:
      "Learn which insects help protect gardens, pollinate plants, improve soil, and naturally control pests.",
    image: "/downloads/charts/beneficial-insects-chart.png",
  },
  {
    title: "Spider Identification Chart",
    description:
      "Identify common spiders, understand risk levels, and know when to call for professional help.",
    image: "/downloads/charts/spider-chart.png",
  },
];

export default function ChartsPage() {
  return (
    <main className="bg-white text-allstarInk">
      <section className="bg-allstarBlueDark py-20 text-center text-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-black uppercase tracking-[0.16em] text-red-200">
            Free Printable Pest Resources
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            Pest Identification Charts
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/95">
            Save these charts to your phone, print them, or share them with
            family and neighbors. Not sure what you are dealing with? Text us a
            photo for fast identification.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+19137387827"
              className="rounded-xl bg-red-600 px-8 py-4 text-lg font-black text-white transition hover:bg-red-700"
            >
              Call (913) 738-STAR
            </a>

            <a
              href="sms:+19137387827?&body=Hi%20All%20Star%2C%20I%20would%20like%20to%20send%20a%20pest%20photo%20for%20help%20identifying%20the%20problem."
              className="rounded-xl bg-white px-8 py-4 text-lg font-black text-black transition hover:bg-slate-100"
            >
              Text a Pest Photo
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:px-8">
          {charts.map((chart) => (
            <article
              key={chart.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
            >
              <div className="grid gap-8 p-6 lg:grid-cols-[420px_1fr] lg:p-8">
                <div className="relative min-h-[520px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                  <Image
                    src={chart.image}
                    alt={chart.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-4xl font-black text-allstarRed">
                    {chart.title}
                  </h2>

                  <p className="mt-5 max-w-3xl text-xl leading-relaxed text-allstarSlate">
                    {chart.description}
                  </p>

                  <p className="mt-5 text-lg font-bold text-allstarInk">
                    Click below to open, save, print, or download the full-size
                    chart.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={chart.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-allstarBlue px-7 py-4 text-center text-lg font-black text-white transition hover:bg-allstarBlueDark"
                    >
                      View Full Size
                    </a>

                    <a
                      href={chart.image}
                      download
                      className="rounded-xl bg-allstarRed px-7 py-4 text-center text-lg font-black text-white transition hover:bg-allstarRedDark"
                    >
                      Download Image
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
