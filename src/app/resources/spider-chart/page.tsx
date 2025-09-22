import Image from "next/image";
const SRC = "/images/spider-identification-chart.png";

export const metadata = {
  title: "Spider Identification Chart (Free Download) | All Star Pest Solutions",
  description: "Printable spider ID chart for Kansas City homes. Call (913) 738-STAR for help.",
};

export default function SpiderChartPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-4xl font-bold">Spider Identification Chart (Free Download)</h1>
      <p className="mt-2 text-gray-600">Print or share this chart. Need help ID’ing a spider? Call (913) 738-STAR.</p>
      <div className="mt-6 rounded-2xl shadow overflow-hidden relative aspect-[4/3]">
        <Image src={SRC} alt="Spider Identification Chart - All Star Pest Solutions" fill sizes="100vw" priority />
      </div>
      <a className="mt-4 inline-block underline" href={SRC} download>Download high-resolution chart</a>
    </main>
  );
}
