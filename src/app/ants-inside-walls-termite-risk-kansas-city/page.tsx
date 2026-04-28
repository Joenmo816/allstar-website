import type { Metadata } from "next";
import ConversionBanner from "../components/ConversionBanner";

export const metadata: Metadata = {
  title: "Ants Inside Walls Kansas City | Termite Risk Warning",
  description: "Why carpenter ants or acrobat ants inside walls can point to moisture problems and hidden termite risk in Kansas City homes.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">Ants & Termite Risk</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Ants Inside Walls Can Be a Warning Sign</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>Seeing ants inside a wall is not something to brush off. Carpenter ants and acrobat ants are often associated with moisture-damaged wood.</p>
          <p>Those same moisture problems can also attract termites. Ants may also prey on termites, which means ant activity can sometimes appear around a deeper hidden issue.</p>
          <p>If ants are active inside walls, All Star Pest Solutions recommends identifying the ant species, locating moisture conditions, and considering a termite inspection.</p>
        </div>
      </section>
      <ConversionBanner />
    </main>
  );
}
