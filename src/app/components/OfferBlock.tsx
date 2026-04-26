type OfferBlockProps = {
  city?: string;
};

export default function OfferBlock({ city }: OfferBlockProps) {
  return (
    <section className="bg-allstarRed py-12 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:px-8">
        <div>
          <p className="font-black uppercase tracking-[0.16em] text-white/80">
            Limited-Time Local Offer
          </p>

          <h2 className="mt-2 text-4xl font-black leading-tight md:text-5xl">
            $50 Off Initial Quarterly Service
          </h2>

          <p className="mt-4 max-w-3xl text-xl leading-relaxed text-white/95">
            Start with a free inspection{city ? ` in ${city}` : ""}. If quarterly protection is the right fit, ask about $50 off your initial quarterly service.
          </p>

          <p className="mt-3 text-sm font-bold text-white/85">
            Offer must be mentioned at scheduling. Not valid with other discounts. Availability may vary by service type.
          </p>
        </div>

        <a
          href="tel:+19137387827"
          className="rounded-xl bg-white px-8 py-4 text-center text-lg font-black text-allstarRed transition hover:bg-slate-100"
        >
          CLAIM OFFER
        </a>
      </div>
    </section>
  );
}
