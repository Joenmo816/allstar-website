import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  background: string;
  logoSrc: string;
  mascotSrc: string;
  showMascot?: boolean;
}

export default function Hero({
  title,
  subtitle,
  background,
  logoSrc,
  mascotSrc,
  showMascot = true,
}: HeroProps) {
  return (
    <section className="relative w-full h-[700px] md:h-[750px] overflow-hidden flex items-center">

      {/* Background */}
      <Image
        src={background}
        alt="All Star Pest Solutions Background"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex flex-col lg:flex-row items-center justify-between py-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-start text-left max-w-2xl">

          {/* LOGO */}
          <div className="mb-8">
            <Image
              src={logoSrc}
              alt="All Star Pest Solutions Logo"
              width={1640}
              height={1640}
              className="w-[320px] md:w-[420px] drop-shadow-lg"
              priority
            />
          </div>

          <div className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-sm text-sm font-black uppercase tracking-tight mb-4 shadow-md">
            State-Certified Commercial Applicator (KS & MO)
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-lg leading-relaxed">
            {subtitle}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="tel:9137387827"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-md font-bold text-lg text-center transition-all transform hover:scale-105 shadow-xl"
            >
              CALL (913) 738-7827
            </a>

            <button className="bg-white hover:bg-gray-200 text-black px-10 py-4 rounded-md font-bold text-lg text-center transition-all shadow-xl">
              FREE QUOTE
            </button>
          </div>
        </div>

        {/* RIGHT SIDE MASCOT */}
        {showMascot && (
          <div className="hidden lg:block relative w-[450px] h-[450px]">
            <Image
              src={mascotSrc}
              alt="All Star Pest Solutions Mascot"
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}