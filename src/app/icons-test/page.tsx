import Image from "next/image";
const icons = [
  { file: "favicon-16x16.png", label: "Favicon 16×16" },
  { file: "favicon-32x32.png", label: "Favicon 32×32" },
  { file: "favicon.ico", label: "Favicon .ico" },
  { file: "apple-touch-icon.png", label: "Apple Touch Icon 180×180" },
  { file: "android-chrome-192x192.png", label: "Android Chrome 192×192" },
  { file: "android-chrome-512x512.png", label: "Android Chrome 512×512" },
  { file: "mstile-150x150.png", label: "Windows Tile 150×150" },
];

export default function IconsTestPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Favicon & App Icon Test</h1>
      <p className="mb-8 text-gray-700">
        These icons are being served directly from your <code>/public</code> folder.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        {icons.map((icon) => (
          <div key={icon.file} className="flex flex-col items-center">
            <Image
              src={`/${icon.file}`}
              alt={icon.label}
              width={128}
              height={128}
              className="border rounded-lg"
            />
            <p className="mt-2 text-sm text-gray-600">{icon.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <a
          href="/site.webmanifest"
          className="text-emerald-700 underline"
          target="_blank"
        >
          View site.webmanifest
        </a>
      </div>
    </main>
  );
}
