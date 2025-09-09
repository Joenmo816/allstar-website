export const metadata = {
  title: "Boxelderbug | Pest Library | All Star Pest Solutions",
  description: "Placeholder page for Boxelderbug. Full content coming soon."
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Boxelderbug</h1>
      <p className="text-gray-600 mb-6">Auto-generated from your photo library.</p>
      <div className="rounded-xl border p-4 mb-6">
        <img src={"/pests/boxelderbug.jpg"} alt="Boxelderbug" className="w-full h-auto rounded-lg" />
      </div>
      <a href="tel:+19137387827" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:shadow">
        Call (913) 738-STAR
      </a>
    </main>
  );
}
