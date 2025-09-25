import BbbSeal from "./BbbSeal";

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <BbbSeal />
      <span className="text-sm text-gray-700">KS &amp; MO Certified • Eco-Smart • Local</span>
    </div>
  );
}
