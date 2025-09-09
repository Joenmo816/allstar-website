"use client";
export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <img
        src="/images/kc.jpg"
        alt="Kansas City Skyline"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Foreground content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Guaranteed Service. Guaranteed Results.
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Locally owned pest control for Kansas City and beyond.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/schedule"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold shadow hover:bg-blue-700 transition"
          >
            Schedule Now
          </a>
          <a
            href="/pests"
            className="rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
          >
            Explore Pest Library
          </a>
        </div>
      </div>
    </section>
  );
}
