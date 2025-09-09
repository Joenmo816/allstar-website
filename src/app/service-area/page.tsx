import ServiceAreaMap from "../../components/ServiceAreaMap";

export const metadata = {
  title: "Service Area | All Star Pest Solutions",
  description:
    "30-mile radius from Cleveland, Missouri covering Kansas City metro, Johnson County KS, and nearby Missouri communities.",
};

export default function Page() {
  const cities = [
    "Adrian",
    "Archie",
    "Bucyrus",
    "Cleveland",
    "Drexel",
    "Freeman",
    "Garden City",
    "Gardner",
    "Grandview",
    "Harrisonville",
    "Kansas City",
    "La Cygne",
    "Leawood",
    "Lee&apos;s Summit",
    "Louisburg",
    "Merriam",
    "Mission Hills",
    "Olathe",
    "Osawatomie",
    "Overland Park",
    "Paola",
    "Peculiar",
    "Pleasant Hill",
    "Prairie Village",
    "Shawnee",
    "Spring Hill"
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Service Area</h1>
      <p className="text-gray-700 max-w-3xl">
        We proudly serve a 30-mile radius from Cleveland, Missouri—including Kansas City and communities across Johnson County, KS and nearby Missouri counties.
      </p>
      <ServiceAreaMap />
      <section>
        <h2 className="mt-6 text-xl font-semibold">Cities We Commonly Serve</h2>
        <ul className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-800 list-disc pl-6">
          {cities.map((c) => <li key={c} dangerouslySetInnerHTML={{ __html: c }} />)}
        </ul>
      </section>
    </main>
  );
}
