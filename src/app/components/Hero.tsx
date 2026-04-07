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
  heroImageAlt = "All Star Pest Solutions hero background",
  mascotSrc,
  mascotAlt = "All Star Pest Solutions Mascot",
  showMascot = false,
  className = "",
}: HeroProps) {
  const shouldShowLogo = hasImageSrc(logoSrc);
  const shouldShowHeroBackground = hasImageSrc(heroImageSrc);
  const shouldShowMascot = showMascot && hasImageSrc(mascotSrc);

  const shouldShowPrimaryCta =
    typeof primaryCtaText === "string" &&
    primaryCtaText.trim().length > 0 &&
    typeof primaryCtaHref === "string" &&
    primaryCtaHref.trim().length > 0;

  const shouldShowSecondaryCta =
    typeof secondaryCtaText === "string" &&
    secondaryCtaText.trim().length > 0 &&
    typeof secondaryCtaHref === "string" &&
    secondaryCtaHref.trim().length > 0;

  return (
    <section
      className={`relative flex min-h-[760px] w-full items-center overflow-hidden bg-black text-white ${className}`}
    >
      {shouldShowHeroBackground ? (
        <Image
          src={heroImageSrc}
          alt={heroImageAlt}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-black" />
      )}

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/72 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 py-16 md:px-8 lg:py-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_420px] xl:grid-cols-[minmax(0,1.1fr)_480px]">
          <div className="max-w-3xl">
            {shouldShowLogo && (
              <div className="mb-6">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={1200}
                  height={300}
                  className="h-auto w-full max-w-[320px] object-contain sm:max-w-[400px] lg:max-w-[480px]"
                  priority
                />
              </div>
            )}

            {eyebrow && (
              <div className="mb-5 inline-flex rounded-md bg-yellow-400 px-4 py-2 text-sm font-black uppercase tracking-wide text-black shadow">
                {eyebrow}
              </div>
            )}

            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-yellow-400 sm:text-5xl lg:text-6xl xl:text-7xl">
              {title}
            </h1>

            <p className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
              30 Years of Experience — Not 30 Days of Guesswork
            </p>

            <p className="mt-4 text-lg font-bold text-yellow-300 sm:text-xl">
              Guaranteed Service. Guaranteed Results.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/95 sm:text-lg lg:text-xl">
              {description}
            </p>

            <p className="mt-6 text-3xl font-black leading-none text-yellow-400 sm:text-4xl">
              Call (913) 738-STAR
            </p>

            {(shouldShowPrimaryCta || shouldShowSecondaryCta) && (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {shouldShowPrimaryCta && (
                  <Link
                    href={primaryCtaHref!}
                    className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-extrabold text-white transition hover:bg-red-700"
                  >
                    {primaryCtaText}
                  </Link>
                )}

                {shouldShowSecondaryCta && (
                  <Link
                    href={secondaryCtaHref!}
                    className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 text-lg font-extrabold text-black transition hover:bg-yellow-300"
                  >
                    {secondaryCtaText}
                  </Link>
                )}
              </div>
            )}
          </div>

          {shouldShowMascot && (
            <div className="relative mx-auto hidden h-[360px] w-[280px] lg:block xl:h-[470px] xl:w-[380px]">
              <Image
                src={mascotSrc}
                alt={mascotAlt}
                fill
                sizes="(max-width: 1279px) 280px, 380px"
                priority
                className="object-contain object-right-bottom drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}