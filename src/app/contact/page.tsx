import type { Metadata } from "next";
import Script from "next/script";
import Hero from "@/app/components/Hero";

export const metadata: Metadata = {
  title: "Contact | All Star Pest Solutions",
  description:
    "Request a free inspection from All Star Pest Solutions. Call, send your details, and let us help solve your pest problem in the Kansas City metro.",
};

const contactPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.allstarpestkc.com/contact#contactpage",
  url: "https://www.allstarpestkc.com/contact",
  name: "Contact All Star Pest Solutions",
  description:
    "Request a free inspection from All Star Pest Solutions. Call, send your details, and let us help solve your pest problem in the Kansas City metro.",
  mainEntity: {
    "@id": "https://www.allstarpestkc.com/#localbusiness",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white pb-16">
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageStructuredData),
        }}
      />

      <Hero
        eyebrow="Fast Help Starts Here"
        title="Get Your Free Inspection"
        description="Call now or send us your information and we will get back to you as quickly as possible. All Star Pest Solutions proudly serves the Kansas City metro with modern, effective pest solutions."
        primaryCtaText="Call 913-738-STAR"
        primaryCtaHref="tel:+19137387827"
        secondaryCtaText="View Pest Library"
        secondaryCtaHref="/pest-library"
        logoSrc="/logo.png"
        heroImageSrc="/images/contact-hero.jpg"
        heroImageAlt="All Star Pest Solutions contact page hero"
        mascotSrc="/mascot.png"
        showMascot={true}
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-10">
          <a
            href="tel:+19137387827"
            className="rounded-xl bg-black py-6 text-center text-2xl font-bold text-white transition hover:bg-red-600"
          >
            📞 Call 913-738-STAR
          </a>

          <form
            id="contact-form"
            className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >
            <input
              className="rounded-lg border border-slate-300 p-4"
              placeholder="Name"
              name="name"
              type="text"
            />

            <input
              className="rounded-lg border border-slate-300 p-4"
              placeholder="Phone"
              name="phone"
              type="tel"
            />

            <input
              className="rounded-lg border border-slate-300 p-4"
              placeholder="Email"
              name="email"
              type="email"
            />

            <textarea
              className="rounded-lg border border-slate-300 p-4"
              rows={5}
              placeholder="What pest problem are you having?"
              name="message"
            />

            <button
              type="submit"
              className="rounded-xl bg-red-600 py-4 text-lg font-bold text-white transition hover:bg-red-700"
            >
              Request Service
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}