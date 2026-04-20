import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  logoSrc?: string | null;
  logoAlt?: string;
  heroImageSrc?: string | null;
  heroImageAlt?: string;
  mascotSrc?: string | null;
  mascotAlt?: string;
  showMascot?: boolean;
};

function hasImageSrc(value?: string | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export default function Hero({
  eyebrow,
  title,
  description,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  logoSrc,
  logoAlt = "All Star Pest Solutions Logo",
  heroImageSrc,
  heroImageAlt = "Hero background",
  mascotSrc,
  mascotAlt = "Mascot",
  showMascot = false,
}: HeroProps) {
  const showLogo = hasImageSrc(logoSrc);
  const showBg = hasImageSrc(heroImageSrc);
  const showMascotFinal = showMascot && hasImageSrc(mascotSrc);

  return (
    <section className="relative flex min-h-[760px] w-full items-center overflow-hidden text-white">
      {showBg ? (
        <Image
          src={heroImageSrc}
          alt={heroImageAlt}
          fill
          priority
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-black" />
      )}

      <div className="absolute inset-0 bg-black/72" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 text-center lg:px-8">
        {showLogo && (
          <div className="mb-6 flex justify-center">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={2200}
              height={700}
              className="w-full max-w-[950px] md:max-w-[1200px] lg:max-w-[1450px] xl:max-w-[1650px]"
              priority
              unoptimized
            />
          </div>
        )}

        {eyebrow && (
          <div className="mb-4 text-sm font-bold uppercase tracking-widest text-white/80 md:text-base">
            {eyebrow}
          </div>
        )}

        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          {title}
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-lg sm:text-xl lg:text-2xl">
          {description}
        </p>

        <p className="mt-5 text-xl font-bold sm:text-2xl">
          30+ Years Experience • No Contracts
        </p>

        <p className="mt-2 text-lg font-bold sm:text-xl">
          Guaranteed Service. Guaranteed Results.
        </p>

        <p className="mt-5 text-2xl font-black sm:text-3xl lg:text-4xl">
          Call (913) 738-STAR
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-4">
          {primaryCtaText && (
            <Link
              href={primaryCtaHref || "#"}
              className="rounded-xl bg-red-600 px-7 py-3 text-base font-bold text-white transition hover:bg-red-700 sm:px-8 sm:py-4 sm:text-lg"
            >
              {primaryCtaText}
            </Link>
          )}

          {secondaryCtaText && (
            <Link
              href={secondaryCtaHref || "#"}
              className="rounded-xl border border-white px-7 py-3 text-base font-bold text-white transition hover:bg-white hover:text-black sm:px-8 sm:py-4 sm:text-lg"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>

      {showMascotFinal && (
        <div className="absolute bottom-0 right-6 hidden h-[320px] w-[240px] lg:block xl:h-[380px] xl:w-[290px]">
          <Image
            src={mascotSrc!}
            alt={mascotAlt}
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      )}
    </section>
  );
}