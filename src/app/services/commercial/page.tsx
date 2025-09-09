export const metadata = {
  title: "Commercial Pest Control | All Star Pest Solutions",
  description: "Programs for property managers, restaurants, warehouses, offices, and more."
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Commercial Pest Control</h1>
      <p className="text-gray-600 mt-2">Discreet, documented, and standards-compliant programs tailored to your site.</p>

      <div className="mt-6 grid gap-4">
        <section className="rounded-2xl border p-5">
          <h2 className="text-xl font-semibold">Industries We Serve</h2>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Multi-family & property management</li>
            <li>Food service & retail</li>
            <li>Warehousing, logistics, & light industrial</li>
            <li>Offices, schools, and healthcare clinics</li>
          </ul>
        </section>

        <section className="rounded-2xl border p-5">
          <h2 className="text-xl font-semibold">What You Get</h2>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Site assessment & trend reporting</li>
            <li>Entry-point exclusion and sanitation guidance</li>
            <li>After-hours scheduling available</li>
          </ul>
        </section>
      </div>

      <a href="/schedule" className="inline-block mt-8 rounded-xl bg-blue-700 text-white px-5 py-3 font-medium hover:opacity-90">
        Request a Site Quote
      </a>
    </main>
  );
}
