import Link from "next/link";

export default function CTABand(){
  return (
    <section className="mt-12">
      <div className="container-xl">
        <div className="rounded-2xl p-6 text-white"
             style={{background:'linear-gradient(90deg, var(--brand), var(--accent))'}}>
          <div className="grid md:grid-cols-2 items-center gap-4">
            <div>
              <p className="text-lg font-semibold">Ready to be bug-free?</p>
              <p className="text-sm opacity-90">Same/next-day options • Guaranteed Service. Guaranteed Results.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <Link className="btn btn-ghost bg-white/10 text-white" href="tel:+19137387827">Call/Text 913-738-STAR</Link>
              <Link className="btn btn-ghost bg-white text-black" href="/schedule">Schedule Online</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

