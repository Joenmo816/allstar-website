import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import EcoCommitment from "@/app/components/EcoCommitment";

export const metadata: Metadata = {
  title: "All Star Pest Solutions | 30+ Years Experience",
  description:
    "Locally owned pest solutions company serving South Kansas City, Overland Park, Belton, Grandview, Leawood, Loch Lloyd, Olathe, Raymore, Louisburg, Spring Hill, Harrisonville, Peculiar, Bucyrus, Cleveland, Freeman, Drexel, Paola and surrounding areas.",
};

const homePageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.allstarpestkc.com/#homepage",
      url: "https://www.allstarpestkc.com",
      name: "All Star Pest Solutions | 30+ Years Experience",
      description:
        "Locally owned pest solutions company serving South Kansas City, Overland Park, Belton, Grandview, Leawood, Loch Lloyd, Olathe, Raymore, Louisburg, Spring Hill, Harrisonville, Peculiar, Bucyrus, Cleveland, Freeman, Drexel, Paola and surrounding areas.",
      isPartOf: {
        "@id": "https://www.allstarpestkc.com/#website",
      },
      about: {
        "@id": "https://www.allstarpestkc.com/#localbusiness",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.allstarpestkc.com/logo.png",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.allstarpestkc.com/#homepage-services",
      name: "Residential, Commercial, and Termite Pest Solutions",
      provider: {
        "@id": "https://www.allstarpestkc.com/#localbusiness",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Johnson County, KS" },
        { "@type": "AdministrativeArea", name: "Miami County, KS" },
        { "@type": "AdministrativeArea", name: "Cass County, MO" },
        { "@type": "AdministrativeArea", name: "Jackson County, MO" },
      ],
      serviceType: "Pest Solutions",
    },
  ],
};

export default function HomePage() {
  return (
    <div className="bg-white font-bold">
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageStructuredData),
        }}
      />

      <section className="relative">
        <div className="relative min-h-[820px] w-full overflow-hidden">
          <Image
            src="/kc-background.jpg"
            alt="Kansas City Pest Solutions"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-28 lg:grid-cols-2">
            <div className="text-white">
              <Image
                src="/logo.png"
                alt="All Star Pest Solutions logo"
                width={3480}
                height={3480}
                className="mb-6 w-[720px] drop-shadow-xl"
              />

              <h1 className="mb-4 text-2xl font-black text-yellow-400 md:text-3xl lg:whitespace-nowrap">
                Kansas City Pest Solutions – Over 30 Years Experience. Guaranteed
                Service. Guaranteed Results.
              </h1>

              <p className="mb-2 text-2xl">
                Serving South Kansas City, Overland Park, Belton, Grandview,
                Leawood, Loch Lloyd, Olathe, Raymore, Louisburg, Spring Hill,
                Harrisonville, Peculiar, Bucyrus, Cleveland, Freeman, Drexel,
                Paola and more.
              </p>

              <p className="mb-3 text-3xl font-black text-yellow-300">
                Call (913) 738-STAR
              </p>

              <p className="mb-6 text-xl">No Contracts Required.</p>

              <div className="flex flex-wrap gap-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-yellow-400 px-8 py-4 text-xl font-black text-black transition hover:bg-yellow-300"
                >
                  FREE INSPECTION
                </Link>

                <a
                  href="tel:19137387827"
                  className="rounded-md bg-white px-8 py-4 text-xl font-black text-black transition hover:bg-gray-200"
                >
                  Call (913) 738-STAR
                </a>
              </div>

              <div className="mt-8 text-2xl text-yellow-400">★★★★★</div>

              <p className="mt-2 text-lg">
                5-Star Rated Kansas City Pest Solutions
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/mascot.png"
                alt="All Star Pest Solutions mascot"
                width={520}
                height={520}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <EcoCommitment />

      <section className="bg-gradient-to-b from-yellow-50 to-white py-20 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 text-4xl font-black text-red-700">
            Serving South Kansas City & Surrounding Communities
          </h2>

          <p className="text-xl text-zinc-800">
            Providing residential and commercial pest solutions throughout
            Johnson County and Miami County in Kansas along with Cass County and
            Jackson County in Missouri.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-14 text-4xl font-black text-red-700">
            Professional Pest Solutions
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            <div className="rounded-xl border-t-4 border-red-700 bg-yellow-50 p-10 shadow-md">
              <h3 className="mb-4 text-2xl font-black">
                Residential Pest Solutions
              </h3>
              <p className="mb-6 text-xl text-zinc-800">
                Protect your home from ants, spiders, rodents, cockroaches and
                other nuisance pests.
              </p>
              <Link
                href="/residential"
                className="rounded-md bg-red-700 px-6 py-3 text-lg text-white"
              >
                Residential Pest Solutions Kansas City
              </Link>
            </div>

            <div className="rounded-xl border-t-4 border-yellow-500 bg-yellow-50 p-10 shadow-md">
              <h3 className="mb-4 text-2xl font-black">
                Commercial Pest Solutions
              </h3>
              <p className="mb-6 text-xl text-zinc-800">
                Protect your business with professional pest management
                solutions.
              </p>
              <Link
                href="/commercial"
                className="rounded-md bg-red-700 px-6 py-3 text-lg text-white"
              >
                Commercial Pest Solutions Kansas City
              </Link>
            </div>

            <div className="rounded-xl border-t-4 border-red-700 bg-yellow-50 p-10 shadow-md">
              <h3 className="mb-4 text-2xl font-black">
                Termite Inspections & Treatments
              </h3>
              <p className="mb-6 text-xl text-zinc-800">
                Protect your home from termite damage with professional
                inspections.
              </p>
              <Link
                href="/termite-services"
                className="rounded-md bg-red-700 px-6 py-3 text-lg text-white"
              >
                Termite Services Kansas City
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-black">
            Kansas City Pest Solutions FAQs
          </h2>

          <div className="space-y-6 text-lg">
            <div>
              <h3 className="font-bold">
                What pests are common in Kansas City homes?
              </h3>
              <p>
                Ants, spiders, rodents, cockroaches and termites are the most
                common pests in Kansas City.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Are your pest solutions safe for pets and children?
              </h3>
              <p>
                Yes, our treatments are designed to be safe for families, pets
                and beneficial insects.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Do you service areas outside Kansas City?
              </h3>
              <p>
                Yes, we service Overland Park, Olathe, Belton, Raymore and
                surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}