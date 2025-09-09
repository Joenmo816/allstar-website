export const metadata = {
  title: "Residential Pest Control | All Star Pest Solutions",
  description: "Home pest control in the KC metro with eco-conscious treatments."
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Residential Pest Control</h1>
      <p className="text-gray-600 mt-2">Modern, targeted, bee-conscious. Senior & veteran discounts available.</p>

      <div className="mt-6 grid gap-4">
        <section className="rounded-2xl border p-5">
          <h2 className="text-xl font-semibold">Quarterly Protection Plan</h2>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Exterior perimeter + eaves/entry points</li>
            <li>Interior on request (kitchen, baths, garage)</li>
            <li>Free re-service between visits if pests return</li>
          </ul>
        </section>

        <section className="rounded-2xl border p-5">
          <h2 className="text-xl font-semibold">One-Time Treatments</h2>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Ants (incl. carpenter), spiders (incl. recluse/black widow)</li>
            <li>Roaches (clean-out), mice, wasps</li>
            <li>Mosquito & tick yard treatments (seasonal)</li>
          </ul>
        </section>

        <section className="rounded-2xl border p-5">
          <h2 className="text-xl font-semibold">Termite Services</h2>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Full perimeter trench & rod with non-repellent termiticide</li>
            <li>Annual inspection with renewable warranty</li>
          </ul>
        </section>
      </div>

      <a href="/schedule" className="inline-block mt-8 rounded-xl bg-blue-700 text-white px-5 py-3 font-medium hover:opacity-90">
        Schedule Your Home Service
      </a>
    </main>
  );
}
