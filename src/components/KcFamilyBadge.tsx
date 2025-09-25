import Image from "next/image";
import { resolvePublicImageUrl } from "@/lib/publicImage";

const url = resolvePublicImageUrl([
  "kc-family-owned.png",
  "kc-family-owned.webp",
  "kc-family-owned.jpg",
  "kc-family-owned.svg",
]);

export default function KcFamilyBadge() {
  if (!url) return null; // no file present; render nothing
  return (
    <Image
      src={url}
      alt="Kansas City • Family Owned"
      width={180}
      height={48}
      priority
    />
  );
}

