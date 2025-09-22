"use client";
import { useEffect, useState } from "react";

const DATA = [
  { quote: "They were on time, professional, and we haven’t seen a spider since.", name: "Megan R.", area: "Overland Park" },
  { quote: "Quick scheduling and the tech explained everything. A+ service.", name: "Chris L.", area: "Lee’s Summit" },
  { quote: "Termites gone after the Termidor treatment. Worth every penny.", name: "Antonio S.", area: "North KC" },
];

export default function Testimonials(){
  const [ix, setIx] = useState(0);
  useEffect(()=>{
    const id = setInterval(()=> setIx(i => (i+1)%DATA.length), 4500);
    return ()=>clearInterval(id);
  },[]);
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-extrabold text-brand-blue text-center">What KC Homeowners Say</h2>
      <div className="mt-6 relative">
        <div className="rounded-xl border p-6 mx-auto max-w-3xl bg-white shadow-sm min-h-[150px]">
          <p className="text-lg italic">&ldquo;{DATA[ix].quote}&rdquo;</p>
          <p className="mt-3 text-sm text-gray-600 font-medium">— {DATA[ix].name}, {DATA[ix].area}</p>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {DATA.map((_,i)=>(
            <button key={i} onClick={()=>setIx(i)}
              className={"h-2 w-2 rounded-full " + (i===ix ? "bg-brand-teal" : "bg-gray-300")} aria-label={"Slide " + (i+1)} />
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-3">
          <button onClick={()=>setIx(ix=> (ix-1+DATA.length)%DATA.length)} className="px-3 py-1 rounded border">Prev</button>
          <button onClick={()=>setIx(ix=> (ix+1)%DATA.length)} className="px-3 py-1 rounded border">Next</button>
        </div>
      </div>
    </section>
  );
}
