"use client";
export default function FloatingContactBar(){
  return (
    <div className="fixed right-3 bottom-3 z-40 flex flex-col gap-2">
      <a href="tel:+1-XXX-XXX-XXXX" className="px-4 py-2 rounded-full shadow bg-brand-teal text-white text-sm font-semibold hover:opacity-95">Call Now</a>
      <a href="/contact" className="px-4 py-2 rounded-full shadow bg-brand-blue text-white text-sm font-semibold hover:opacity-95">Get a Quote</a>
    </div>
  );
}
