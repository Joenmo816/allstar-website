"use client";

export default function StickyContact() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-slate-950 text-white flex">
      
      <a
        href="tel:9137387827"
        className="w-1/2 text-center py-4 font-black text-lg bg-red-600 hover:bg-red-700"
      >
        📞 Call Now
      </a>

      <a
        href="sms:9137387827"
        className="w-1/2 text-center py-4 font-black text-lg bg-green-600 hover:bg-green-700"
      >
        💬 Text Us
      </a>

    </div>
  );
}
