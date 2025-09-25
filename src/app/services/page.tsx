export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Service Plans</h1>
        <p className="text-gray-700">
          Certified in KS & MO • No mandatory contracts • Veteran & senior discounts
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold">
            Quarterly Protection <span className="text-xs text-allstarGreen">(Most Popular)</span>
          </h2>
          <p className="mt-2 text-gray-700">
            Year-round protection with proactive exterior service and free between-visit re-services.
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
            <li>Initial interior &amp; exterior service</li>
            <li>Exterior barrier each season + web/wasp sweep</li>
            <li>Free re-service if pests return</li>
          </ul>
          <p className="mt-3 text-sm italic">Great fit: most single-family homes &amp; townhomes.</p>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold">
            Monthly Pro Care <span className="text-xs text-gray-500">High-Activity Homes</span>
          </h2>
          <p className="mt-2 text-gray-700">
            For homes that see more frequent pest activity or want tighter service intervals—near woods/water,
            heavy landscaping, or a history of issues.
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
            <li>Everything in Quarterly Protection</li>
            <li>Exterior service every month</li>
            <li>Rodent/IPM monitoring stations with refreshes</li>
            <li>Interior service on request, no extra charge</li>
          </ul>
          <p className="mt-3 text-sm italic">
            Ideal for: wooded lots, lake/creek proximity, heavy shrubbery, or high-traffic garages &amp; pet areas.
          </p>
        </div>
      </div>
    </div>
  );
}
