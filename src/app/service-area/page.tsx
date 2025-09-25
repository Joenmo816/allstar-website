export const metadata = { title: "Service Area | All Star Pest Solutions" };

const AREAS = [
  "Kansas City, MO", "Overland Park", "Olathe", "Lee’s Summit", "Harrisonville", "Freeman", "Belton", "Raymore", "Peculiar", "Cleveland", 
  "Bucyrus", "Stillwell", "Loch Lloyd", "Martin City", "Lacygne", "Drexel", "Archie", "Adrian", "Garden City", "Pleasant Hill",
   "Lenexa", "Louisburg", "Paola", "Osawatomie", "Spring Hill", "Raytown", "Prairie Village", "Leawood", "Grandview", "Gardner", "Prairie Village", 
   "Mission Hills", "Mission", "Merriam", "Shawnee", "Stanley", "Johnson County, KS", "Miami County, KS", "Cass County, MO", "Jackson COunty, MO" 
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
      <a href="/contact" className="inline-block mt-8 px-5 py-3 rounded-md bg-brand-teal text-white font-semibold">Don't see your town listed? Request Service</a>
    </div>
  );
}