import BbbSeal from "./BbbSeal";
import KcFamilyBadge from "./KcFamilyBadge";

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <KcFamilyBadge />
      <BbbSeal />
    </div>
  );
}

