import Image from "next/image";
import BbbSeal from "@/components/BbbSeal";

const badges = [
  {
    src: "/images/brand/kc-family.svg",            // family owned (svg fallback we created)
    alt: "KC Family Owned & Operated",
    label: "KC Family Owned & Operated",
  },
  {
    src: "/images/brand/experience.png",           // keep your existing icon if present
    alt: "28+ Years Experience",
    label: "28+ Years Experience",
  },
  {
    src: "/images/brand/eco-smart.png",
    alt: "Eco-Smart, Child & Pet Safe",
    label: "Eco-Smart Treatments",
  },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-6 items-center">
      {badges.map((b) => (
        <div key={b.label} className="flex flex-col items-center w-32 text-center">
          <Image
            src={b.src}
            alt={b.alt}
            width={64}
            height={64}
            className="h-16 w-auto mb-2"
          />
          <span className="text-xs font-medium text-gray-700">{b.label}</span>
        </div>
      ))}
      <div className="flex flex-col items-center w-32 text-center">
        <BbbSeal width={120} height={48} />
        <span className="text-xs font-medium text-gray-700 mt-2">BBB Accredited</span>
      </div>
    </div>
  );
}