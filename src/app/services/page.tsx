export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl p-6 space-y-8">
      <h1 className="text-3xl font-bold">Local Service. Guaranteed Results.</h1>
      <p>
        Family-owned in Kansas City with 28+ years&apos; experience. Certified in KS & MO.
        No mandatory contracts. Veteran & senior discounts.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Why Choose Us</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>State-Certified Technicians (KS/MO)</li>
          <li>Eco-Smart • Kid &amp; Pet Friendly</li>
          <li>Locally Owned &amp; Operated</li>
          <li>BBB &amp; Community-Trusted</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Service Plans</h2>

        <div className="border rounded-lg p-4 mb-6">
          <h3 className="text-xl font-semibold">Quarterly Protection (Most Popular)</h3>
          <p className="mt-2">
            Keeps common pests out year-round with proactive exterior service and free call-backs.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Initial interior + exterior service</li>
            <li>Quarterly exterior barrier &amp; web/wasp removal</li>
            <li>Free re-services between visits</li>
          </ul>
          <p className="mt-2 italic">Fit: Most homes</p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold">Monthly Pro Care</h3>
          <p className="mt-2">
            For heavy pressure homes or businesses needing tighter intervals and enhanced monitoring.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Everything in Quarterly</li>
            <li>Monthly exterior service</li>
            <li>Rodent/IPM monitoring upgrades</li>
          </ul>
        </div>
      </section>
    </main>
  );
}