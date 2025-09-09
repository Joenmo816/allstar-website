import Link from "next/link";

const services = [
  { title:"Monthly Pest Service", desc:"Prevent ants & spiders — reliable upkeep.", href:"/schedule" },
  { title:"Wasp/Yellowjacket Removal", desc:"Safe, fast nest removal.", href:"/schedule" },
  { title:"Rodent Inspection & Exclusion", desc:"Find entry. Fix entry. Stay solved.", href:"/schedule" },
  { title:"Bed Bug Inspection", desc:"Discreet & thorough; clear plan.", href:"/schedule" },
  { title:"Termite (NPMA-33)", desc:"Real-estate reports on time.", href:"/schedule" },
  { title:"Quarterly Plans", desc:"Seasonal coverage, easy reminders.", href:"/schedule" },
];

export default function Services(){
  return (
    <section className="container-xl mt-10">
      <h2 className="text-2xl font-bold text-gradient">Services</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        {services.map((s)=>(
          <div key={s.title} className="card">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            <Link href={s.href} className="btn btn-ghost mt-4">Book now →</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

