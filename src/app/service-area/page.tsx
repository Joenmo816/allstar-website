export const metadata = { title: "Service Area | All Star Pest Solutions" };

const AREAS = [
  "Kansas City, MO", "Kansas City, KS", "Overland Park", "Olathe", "Lee’s Summit",
  "Independence", "Shawnee", "Lenexa", "Blue Springs", "Liberty",
  "Raytown", "Gladstone", "Prairie Village", "Leawood", "Grandview"
];

export default function ServiceAreaPage(){
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-brand-blue">Service Area</h1>
      <p className="mt-2 text-gray-700">Proudly serving the greater Kansas City metro.</p>
      <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {AREAS.map(city => (
          <li key={city} className="rounded-lg border bg-white px-4 py-3">{city}</li>
        ))}
      </ul>
      <a href="/contact" className="inline-block mt-8 px-5 py-3 rounded-md bg-brand-teal text-white font-semibold">Request Service</a>
    </div>
  );
}