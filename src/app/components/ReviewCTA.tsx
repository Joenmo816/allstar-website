export default function ReviewCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-3xl bg-red-700 p-8 text-white shadow-xl">
        <h2 className="text-3xl font-black md:text-4xl">
          Small Local Company. Big-Time Service.
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-red-50">
          If you want honest pest control from someone who cares about the work, give All Star Pest Solutions a shot.
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <a href="tel:9137387827" className="rounded-xl bg-white px-7 py-4 text-center text-lg font-black text-red-700 hover:bg-red-50">
            Call (913) 738-7827
          </a>

          <a href="sms:9137387827" className="rounded-xl border-2 border-white px-7 py-4 text-center text-lg font-black text-white hover:bg-red-800">
            Text Us a Pest Photo
          </a>
        </div>
      </div>
    </section>
  );
}
