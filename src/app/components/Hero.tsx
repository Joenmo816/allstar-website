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
    <section className="relative flex min-h-[560px] w-full items-center overflow-hidden text-white">
      {showBg ? (
        <Image
          src={heroImageSrc}
          alt={heroImageAlt}
          fill
          priority
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 bg-black" />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,18,45,0.82)_0%,rgba(14,53,136,0.66)_50%,rgba(12,37,93,0.56)_100%)]" />
      <div className="absolute inset-0 bg-black/18" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_260px] xl:grid-cols-[minmax(0,1fr)_300px]">
          <div className="text-left">
            {showLogo && (
              <div className="mb-6">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={1800}
                  height={620}
                  priority
                  unoptimized
                  className="h-auto w-full max-w-[300px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[560px] xl:max-w-[640px]"
                />
              </div>
            )}

            {eyebrow && (
              <div className="mb-4 inline-flex rounded-md border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow sm:text-sm">
                {eyebrow}
              </div>
            )}

            <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-4 text-xl font-black leading-tight text-white sm:text-2xl">
              30+ Years of Experience — Not 30 Days of Guesswork
            </p>

            <p className="mt-2 text-lg font-black leading-tight text-white sm:text-xl">
              Guaranteed Service. Guaranteed Results.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/95 sm:text-xl">
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
                    className="inline-flex min-h-[56px] items-center justify-center rounded-xl bg-white px-7 py-4 text-base font-black text-allstarBlueDark shadow-xl transition hover:bg-slate-100 sm:text-lg"
                  >
                    {primaryCtaText}
                  </Link>
                )}

                {secondaryCtaText && (
                  <Link
                    href={secondaryCtaHref || "#"}
                    className="inline-flex min-h-[56px] items-center justify-center rounded-xl bg-red-600 px-7 py-4 text-base font-black text-white shadow-xl transition hover:bg-red-700 sm:text-lg"
                  >
                    {secondaryCtaText}
                  </Link>
                )}
              </div>
            )}
          </div>

          {showMascotFinal && (
            <div className="relative mx-auto hidden h-[280px] w-[210px] lg:block xl:h-[340px] xl:w-[260px]">
              <Image
                src={mascotSrc!}
                alt={mascotAlt}
                fill
                className="object-contain object-right-bottom drop-shadow-[0_18px_36px_rgba(0,0,0,0.45)]"
                unoptimized
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}