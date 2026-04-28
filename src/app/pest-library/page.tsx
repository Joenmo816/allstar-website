import Link from "next/link";
import { pests } from "@/lib/pests";

export const metadata = {
  title: "Pest Library Kansas City | All Star Pest Solutions",
  description:
    "Identify common Kansas City pests including ants, termites, spiders, wasps, rodents, cockroaches, and mosquitoes. Call All Star Pest Solutions for local pest control.",
};

export default function PestLibraryPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-3 text-sm font-black uppercase tracking-wide text-red-700">
          Kansas City Pest Library
        </p>

        <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Identify the pest. Understand the risk. Get real pest solutions.
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          Use this pest library to learn what may be showing up around your home
          or business. If you are unsure, text All Star Pest Solutions a photo
          and we will help identify the issue.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pests.map((pest) => (
            <Link
              key={pest.slug}
              href={`/pest-library/${pest.slug}`}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-2xl font-black text-slate-950">
                {pest.name}
              </h2>
              <p className="mt-3 text-slate-700">{pest.description}</p>
              <p className="mt-5 font-black text-red-700">
                Learn about {pest.name.toLowerCase()} →
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-slate-950 p-6 text-white md:flex md:items-center md:justify-between md:p-8">
          <div>
            <h2 className="text-2xl font-black">Not sure what pest you found?</h2>
            <p className="mt-2 text-slate-200">
              Text a photo to All Star Pest Solutions and ask for help identifying it.
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-0">
            <a
              href="tel:9137387827"
              className="rounded-2xl bg-red-600 px-6 py-3 text-center font-black text-white hover:bg-red-700"
            >
              Call 913-738-STAR
            </a>
            <a
              href="sms:9137387827"
              className="rounded-2xl bg-white px-6 py-3 text-center font-black text-slate-950 hover:bg-slate-100"
            >
              Text a Photo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
