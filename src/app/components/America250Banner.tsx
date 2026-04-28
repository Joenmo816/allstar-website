import Link from "next/link";

export default function America250Banner() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-400">
            Celebrating America 250
          </p>
          <p className="mt-1 text-lg font-bold">
            Proud to serve local homes and families across the Kansas City metro.
          </p>
        </div>

        <Link
          href="/america-250"
          className="rounded-xl bg-white px-5 py-3 text-center font-black text-slate-950 hover:bg-slate-100"
        >
          Learn More 🇺🇸
        </Link>
      </div>
    </section>
  );
}
