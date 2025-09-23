import Image from "next/image";

export default function HomePage(){
  return (
    <>
      <section className="relative h-[46vh] md:h-[60vh]">
        <Image src="/images/kc.jpg" alt="Kansas City skyline" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-sm">All Star Pest Solutions</h1>
            <p className="mt-3 md:mt-4 text-white/90 text-lg md:text-2xl">Guaranteed Service, Guaranteed Results.</p>
            <div className="mt-6 flex gap-3 justify-center">
              <a href="/contact" className="btn-brand">Get a Quote</a>
              <a href="/services" className="btn-brand bg-white text-brand-blue hover:bg-gray-100">Our Services</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-teal text-white text-center py-3">
        <p className="font-semibold">KC’s family-owned pest pros • Termites treated with Termidor® (no baiting) • If pests come back, so do we.</p>
      </section>
    </>
  );
}