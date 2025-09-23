import Image from "next/image";

export const metadata = { title: "About | All Star Pest Solutions" };

export default function AboutPage(){
  return (
    <div>
      <section className="relative h-[34vh] md:h-[42vh]">
        <Image src="/images/kc.jpg" alt="Kansas City Skyline" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow">About All Star Pest Solutions</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        <div className="prose max-w-none">
          <h2 className="text-brand-blue font-extrabold">Family-Owned. Kansas City Proud.</h2>
          <p>We’re a locally-owned company serving the greater Kansas City metro. Our promise is simple: <strong>Guaranteed Service, Guaranteed Results.</strong></p>
          <p>Termite services are <strong>chemical treatments only</strong> using <strong>Termidor®</strong>. We do not offer termite baiting systems.</p>
          <p>Questions? Email <a className="underline" href="mailto:info@allstarpestkc.com">info@allstarpestkc.com</a> or call the number in the floating bar.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border p-5 bg-white">
            <div className="text-3xl font-extrabold text-brand-teal">5★</div>
            <div className="text-sm text-gray-600">Homeowner Rated</div>
          </div>
          <div className="rounded-xl border p-5 bg-white">
            <div className="text-3xl font-extrabold text-brand-teal">100%</div>
            <div className="text-sm text-gray-600">Satisfaction Policy</div>
          </div>
          <div className="rounded-xl border p-5 bg-white">
            <div className="text-3xl font-extrabold text-brand-teal">KC</div>
            <div className="text-sm text-gray-600">Locally Owned</div>
          </div>
          <div className="rounded-xl border p-5 bg-white">
            <div className="text-3xl font-extrabold text-brand-teal">Termidor®</div>
            <div className="text-sm text-gray-600">Certified Chemical Treatment</div>
          </div>
        </div>
      </div>
    </div>
  );
}