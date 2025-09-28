export default function PlansPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Service Plans</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <section className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-2">Quarterly</h2>
          <p className="text-sm text-gray-600 mb-4">
            Most popular: exterior protection with free call-backs.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Initial interior + exterior service</li>
            <li>Quarterly exterior barrier</li>
            <li>Web/wasp removal at eaves</li>
          </ul>
        </section>

        <section className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-2">Monthly Pro Care</h2>
          <p className="text-sm text-gray-600 mb-4">
            Tighter intervals & enhanced monitoring for heavy pressure sites.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Everything in Quarterly</li>
            <li>Monthly exterior service</li>
            <li>Rodent/IPM monitoring upgrades</li>
          </ul>
        </section>

        <section className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-2">One-Time</h2>
          <p className="text-sm text-gray-600 mb-4">
            Great for wasps or a specific issue. Includes a limited guarantee.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Targeted treatment</li>
            <li>No contract</li>
          </ul>
        </section>
      </div>
    </main>
  );
}