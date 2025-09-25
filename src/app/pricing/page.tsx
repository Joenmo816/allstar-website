export default function PricingPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Pricing & What Affects Cost</h1>
      <p className="text-gray-700 mb-6">
        Pricing depends on property size, pest pressure, and visit frequency. Below are typical ranges in the KC metro; your exact quote may be lower or higher after inspection.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="rounded-2xl border p-6">
          <h2 className="font-semibold mb-2">One-Time Treatment</h2>
          <p className="text-gray-700">Typical: <strong>$139–$249</strong></p>
          <p className="text-sm text-gray-600 mt-2">For sudden infestations or move-in/out service.</p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="font-semibold mb-2">Quarterly Plan</h2>
          <p className="text-gray-700">Monthly equivalent: <strong>$35–$55</strong></p>
          <p className="text-sm text-gray-600 mt-2">Exterior every season, interior as needed, free re-treats.</p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="font-semibold mb-2">Monthly VIP</h2>
          <p className="text-gray-700">Typical: <strong>$49–$89/mo</strong></p>
          <p className="text-sm text-gray-600 mt-2">High-pressure properties & priority response.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-2">What Changes the Price?</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-800">
        <li>Home size and lot/landscape complexity</li>
        <li>Severity and type of pests (e.g., heavy roach vs. occasional ants)</li>
        <li>Access and prep (clutter, storage, attics, crawlspaces)</li>
        <li>Visit frequency (one-time, quarterly, monthly)</li>
        <li>Add-ons (mosquito/tick, rodent exclusion, wildlife, termite protection)</li>
      </ul>

      <p className="text-gray-700 mt-6">
        We’ll confirm your needs during a <strong>free inspection</strong> and give a firm price with no surprises.
      </p>
    </main>
  );
}