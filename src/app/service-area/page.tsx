export const metadata = {
  title: "Service Area | All Star Pest Solutions",
  description: "Proudly serving Cleveland, MO and the Kansas City metro within ~30 miles.",
};

export default function Page() {
  const cities = [
    "Adrian","Archie","Bucyrus","Cleveland","Drexel","Freeman","Garden City","Gardner",
    "Grandview","Harrisonville","Kansas City","Lacygne","Leawood","Lees Summit","Merriam",
    "Mission Hills","Olathe","Osawatomie","Overland Park","Paola","Peculiar","Pleasant Hill",
    "Prairie Village","Shawnee","Spring Hill"
  ].sort((a,b)=>a.localeCompare(b));

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Service Area</h1>
      <p className="text-gray-700">
        We serve homes and businesses within roughly a <strong>30-mile radius of Cleveland, Missouri</strong> —
        including the Kansas City metro and surrounding communities.
      </p>

      <section className="rounded-xl border bg-white shadow-sm p-5">
        <h2 className="text-xl font-semibold mb-3">Cities We Service</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-gray-800">
          {cities.map((c) => (<li key={c} className="pl-2">• {c}</li>))}
        </ul>
      </section>

      <p className="text-gray-600">
        Not sure if you’re in range? Call{" "}
        <a className="text-blue-600 hover:underline" href="tel:19137387827">(913) 738-STAR</a>.
      </p>
    </main>
  );
}
