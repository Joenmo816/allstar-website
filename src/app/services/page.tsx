import Link from "next/link";

export const metadata = {
  title: "Services | All Star Pest Solutions",
  description: "Residential and commercial pest control services in the Kansas City metro."
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <p className="text-gray-600 mt-2">Guaranteed Service. Guaranteed Results. State-certified in Kansas & Missouri.</p>

      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <Link href="/services/residential" className="rounded-2xl border p-6 hover:shadow">
          <h2 className="text-xl font-semibold">Residential</h2>
          <p className="text-gray-600 mt-2">Quarterly protection plans, one-time treatments, termite inspections, and more.</p>
          <div className="mt-3 text-blue-700 font-medium">Explore Residential →</div>
        </Link>

        <Link href="/services/commercial" className="rounded-2xl border p-6 hover:shadow">
          <h2 className="text-xl font-semibold">Commercial</h2>
          <p className="text-gray-600 mt-2">Tailored programs for apartments, restaurants, warehouses, and offices.</p>
          <div className="mt-3 text-blue-700 font-medium">Explore Commercial →</div>
        </Link>
      </div>

      <div className="mt-10">
        <Link href="/schedule" className="inline-block rounded-xl bg-blue-700 text-white px-5 py-3 font-medium hover:opacity-90">
          Schedule an Inspection
        </Link>
      </div>
    </main>
  );
}
