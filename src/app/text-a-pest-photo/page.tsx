import type { Metadata } from "next";
import StrongCTA from "../components/StrongCTA";

export const metadata: Metadata = {
  title: "Text a Pest Photo | Kansas City Pest Identification",
  description:
    "Text All Star Pest Solutions a photo of your pest for help identifying ants, spiders, termites, wasps, cockroaches, rodents, bed bugs, fleas, and more.",
};

export default function TextPestPhotoPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          Pest Identification Help
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Not Sure What Pest You Found? Text Us a Photo.
        </h1>

        <p className="mt-6 text-xl font-semibold leading-8 text-slate-700">
          Send a clear photo to All Star Pest Solutions and we will help identify what you found and whether treatment is needed.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a href="sms:9137387827" className="rounded-3xl bg-red-700 p-8 text-white shadow-xl">
            <h2 className="text-3xl font-black">Text Photo Now</h2>
            <p className="mt-4 text-xl font-black">(913) 738-7827</p>
            <p className="mt-2 text-red-50">Send a clear, close-up photo when possible.</p>
          </a>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Helpful Photo Tips</h2>
            <ul className="mt-5 space-y-3 text-lg font-semibold text-slate-700">
              <li>✓ Take the photo in good light</li>
              <li>✓ Include size reference if possible</li>
              <li>✓ Send where you found it</li>
              <li>✓ Mention if you are seeing more than one</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 space-y-5 text-lg leading-8 text-slate-700">
          <p>
            Photos can help identify common Kansas City pests like ants, carpenter ants, acrobat ants, termites, spiders, wasps, cockroaches, fleas, bed bugs, mosquitoes, rodents, and occasional invaders.
          </p>
          <p>
            If the pest is connected to moisture, wood damage, wall activity, or termite warning signs, we may recommend an inspection.
          </p>
        </div>
      </section>

      <StrongCTA />
    </main>
  );
}
