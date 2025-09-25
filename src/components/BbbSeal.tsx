import Image from "next/image";
import { resolvePublicImageUrl } from "@/lib/publicImage";

const url = resolvePublicImageUrl([
  "bbb-seal.png",
  "bbb-seal.webp",
  "bbb-seal.jpg",
  "bbb-seal.svg",
]);

export default function BbbSeal() {
  if (!url) return null;
  return (
    <div className="inline-block">
      <Image src={url} alt="BBB Accredited Business" width={160} height={80} priority />
    </div>
  );
}
