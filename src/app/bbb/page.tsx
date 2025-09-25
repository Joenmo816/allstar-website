import Image from "next/image";

export default function BBBPage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-bold mb-4">BBB Accreditation</h1>
      <Image
        src="/images/bbb-seal.png"
        alt="BBB Accredited Business seal"
        width={480}
        height={240}
        priority
      />
      <p className="mt-4">
        We’re proud to maintain our BBB accreditation and deliver honest, local service.
      </p>
    </main>
  );
}