import Link from "next/link";

export const metadata = {
  title: "Customer Stories | All Star Pest Solutions",
  description:
    "Learn why Kansas City area homeowners choose All Star Pest Solutions for honest, local, eco-conscious pest control and termite protection.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-red-700">
          All Star Pest Solutions
        </p>

        <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Customer Stories
        </h1>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <p className="whitespace-pre-line text-lg leading-8 text-slate-800">
Every pest problem has a story. A homeowner hears scratching in the wall. Ants show up in the kitchen. Termite swarmers appear near a window. Wasps build near an entry door. Spiders keep showing up in the basement.

All Star Pest Solutions helps customers understand what is happening, what the risk is, and what can be done to fix it.

As we continue serving more local homeowners, this page will highlight real customer situations, common pest problems, and how All Star Pest Solutions helped solve them.
          </p>
        </div>

        <div className="mt-10 grid gap-4 rounded-3xl bg-slate-950 p-6 text-white md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-2xl font-black">
              Need pest control you can trust?
            </h2>
            <p className="mt-2 text-slate-200">
              Call or text All Star Pest Solutions today. Send a photo if you are not sure what pest you found.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href="tel:9137387827"
              className="rounded-2xl bg-red-600 px-6 py-3 text-center font-black text-white shadow hover:bg-red-700"
            >
              Call 913-738-STAR
            </a>
            <a
              href="sms:9137387827"
              className="rounded-2xl bg-white px-6 py-3 text-center font-black text-slate-950 shadow hover:bg-slate-100"
            >
              Text a Photo
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/services" className="font-bold text-red-700 hover:underline">
            View Pest Services
          </Link>
          <Link href="/termite-control" className="font-bold text-red-700 hover:underline">
            Termite Control
          </Link>
          <Link href="/contact" className="font-bold text-red-700 hover:underline">
            Contact All Star
          </Link>
        </div>
      </section>
    </main>
  );
}
