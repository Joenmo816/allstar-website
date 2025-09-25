import Image from "next/image";

export default function BbbSeal() {
  return (
    <div className="inline-block">
      <Image
        src="/images/bbb-seal.png"
        alt="BBB Accredited Business"
        width={160}
        height={80}
        priority
      />
    </div>
  );
}
