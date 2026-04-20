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
  className?: string;
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
  className = "",
}: HeroProps) {
  const shouldShowLogo = hasImageSrc(logoSrc);
  const shouldShowHeroBackground = hasImageSrc(heroImageSrc);
  const shouldShowMascot = showMascot && hasImageSrc(mascotSrc);

  return (
    <section
      className={`relative flex min-h-[680px] w-full items-center overflow-hidden text-white ${className}`}
    >
      {shouldShowHeroBackground ? (
        <Image
          src={heroImageSrc}
          alt={heroImageAlt}
          fill
          priority
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 bg-allstarBlueDark" />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(12,36,86,0.90)_0%,rgba(24,76,175,0.78)_45%,rgba(24,76,175,0.42)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 py-14 md:px-8 lg:py-16">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_430px] xl:gap-10">
          <div className="max-w-2xl">
            {shouldShowLogo && (
              <div className="mb-5">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={1200}
                  height={300}
                  className="h-auto w-full max-w-[280px] object-contain sm:max-w-[340px] lg:max-w-[400px]"
                  priority
                  unoptimized
                />
              </div>
            )}

            {eyebrow && (
              <div className="mb-4 inline-flex rounded-md border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white shadow sm:text-sm">
                {eyebrow}
              </div>
            )}

            <h1 className="max-w-[11ch] text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {title}
            </h1>

            <p className="mt-4 max-w-2xl text-xl font-black leading-tight text-white sm:text-2xl lg:text-3xl">
              30 Years of Experience — Not 30 Days of Guesswork
            </p>

            <p className="mt-3 text-lg font-black leading-tight text-white sm:text-xl">
              Guaranteed Service. Guaranteed Results.
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/95 sm:text-lg lg:text-xl">
              {description}
            </p>

            <p className="mt-6 text-2xl font-black leading-none text-white sm:text-3xl lg:text-4xl">
              Call (913) 738-STAR
            </p>

            {(primaryCtaText || secondaryCtaText) && (
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                {primaryCtaText && (
                  <Link
                    href={primaryCtaHref || "#"}
                    className="inline-flex min-h-[56px] items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-extrabold text-white shadow-xl transition hover:bg-red-700 sm:text-lg"
                  >
                    {primaryCtaText}
                  </Link>
                )}

                {secondaryCtaText && (
                  <Link
                    href={secondaryCtaHref || "#"}
                    className="inline-flex min-h-[56px] items-center justify-center rounded-xl border-2 border-white/25 bg-white/10 px-8 py-4 text-base font-extrabold text-white transition hover:bg-white hover:text-allstarBlueDark sm:text-lg"
                  >
                    {secondaryCtaText}
                  </Link>
                )}
              </div>
            )}
          </div>

          {shouldShowMascot && (
            <div className="relative mx-auto hidden h-[340px] w-[260px] lg:block xl:h-[430px] xl:w-[330px]">
              <Image
                src={mascotSrc!}
                alt={mascotAlt}
                fill
                sizes="(max-width: 1279px) 260px, 330px"
                priority
                unoptimized
                className="object-contain object-right-bottom drop-shadow-[0_18px_36px_rgba(0,0,0,0.45)]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}