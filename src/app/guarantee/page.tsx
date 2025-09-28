export default function PricingPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Pricing</h1>
      <p className="text-gray-700 mb-8">Straightforward plans with Guaranteed Service, Guaranteed Results.</p>
      <div className="grid gap-6 md:grid-cols-3">
        <section className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-2">Quarterly-The All Star Treatement</h2>
          <p className="text-sm text-gray-600 mb-4">Most popular: exterior service with free call-backs.</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Initial interior + exterior</li>
            <li>Quarterly exterior barrier</li>
            <li>Web/wasp removal</li>
          </ul>
        </section>
        <section className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-2">All Star Monthly Service      </h2>
          <p className="text-sm text-gray-600 mb-4">Tighter intervals & enhanced monitoring for heavy pressure sites.</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Everything in Quarterly</li>
            <li>Monthly exterior service</li>
            <li>Rodent/IPM monitoring upgrades</li>
          </ul>
        </section>
        <section className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-2">One-Time</h2>
          <p className="text-sm text-gray-600 mb-4">Great for wasps or a specific issue. Includes a limited guarantee.</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Targeted treatment</li>
            <li>No contract</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
