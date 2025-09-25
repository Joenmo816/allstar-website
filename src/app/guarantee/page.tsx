import Link from "next/link";
export default function GuaranteePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Guaranteed Service, Guaranteed Results</h1>
      <p className="text-gray-700 mb-6">
        If covered pests come back between scheduled visits, <strong>so do we — at no additional cost.</strong> That’s our promise as KC’s Bugman with over 28 years of local experience.
      </p>

      <h2 className="text-2xl font-semibold mb-2">What’s Included</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-6">
        <li>Re-treats between visits on active <em>covered</em> pests for customers enrolled in PestGuard plans.</li>
        <li>Targeted follow-ups focused on affected areas.</li>
        <li>Clear prevention tips after each visit for lasting results.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">What’s Not Included</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-6">
        <li>Specialty pests (termites, bed bugs, German roaches, birds/wildlife) unless specifically quoted.</li>
        <li>Structural repairs or moisture issues outside standard pest control scope.</li>
      </ul>

      <p className="text-gray-700">
        Need help now? <Link href="/contact">Schedule a free inspection</Link> and we’ll tailor a plan for your property.
      </p>
    </main>
  );
}
