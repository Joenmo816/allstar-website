export const metadata = { title: "Services | All Star Pest Solutions" };

const ITEMS = [
  { href: "/services/general-pest", title: "General Pest", blurb: "Ants, spiders, roaches and more." },
  { href: "/services/rodent", title: "Rodent Control", blurb: "Mice & rats—inspection, exclusion, control." },
  { href: "/services/wasp", title: "Wasp & Hornet", blurb: "Nest removal and perimeter protection." },
  { href: "/services/termite", title: "Termite (Termidor®)", blurb: "Chemical treatments only. No baiting." },
];

export default function ServicesPage(){
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-brand-blue">Our Services</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {ITEMS.map(i => (
          <a key={i.href} href={i.href} className="group rounded-xl border bg-white p-5 hover:shadow-md transition">
            <div className="text-xl font-bold">{i.title}</div>
            <div className="text-sm text-gray-600 mt-1">{i.blurb}</div>
            <div className="mt-4 text-brand-teal font-semibold">Learn more →</div>
          </a>
        ))}
      </div>
    </div>
  );
}