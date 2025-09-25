import BbbSeal from "@/components/BbbSeal";

export default function BbbPreviewPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">BBB Seal Preview</h1>
      <div className="flex items-center gap-6">
        <BbbSeal width={340} height={136} />
        <div className="text-sm text-gray-600">
          <div>Shown here at <strong>340×136</strong>.</div>
          <div className="mt-2">Adjust anywhere via props, e.g. {'<BbbSeal width={360} height={144} />'}.</div>
        </div>
      </div>
    </main>
  );
}