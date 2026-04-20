import Link from "next/link";
import type { Metadata } from "next";

const phoneDisplay = "(913) 738-7827";
const phoneHref = "19137387827";
const smsMessage =
  "Hi All Star Pest Solutions, I want to send a photo of a pest for identification.";
const smsHref = `sms:+${phoneHref}?body=${encodeURIComponent(smsMessage)}`;

export const metadata: Metadata = {
  title: "Send Us a Pest Photo | All Star Pest Solutions",
  description:
    "Fill out a quick form and text us a photo of the pest you are seeing. All Star Pest Solutions serves the Kansas City metro with expert pest identification and service.",
};

export default function SendPhotoPage() {
  return (
    <main className="bg-white text-black">
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white sm:text-sm">
              Fast Pest Photo Help
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
              Fill Out the Form, Then Text Us the Photo
            </h1>

            <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-white/90 md:text-xl md:leading-9">
              Not sure what pest you are seeing? Send us your contact info below,
              then text a clear picture to {phoneDisplay}. We will take a look and
              let you know the best next step.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={smsHref}
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-black uppercase tracking-[0.08em] text-white transition hover:bg-red-700"
              >
                Text Us the Photo
              </a>

              <a
                href={`tel:+${phoneHref}`}
                className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-base font-black uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-black"
              >
                Call {phoneDisplay}
              </a>
            </div>

            <p className="mt-6 text-base font-bold text-white/85 md:text-lg">
              Best results come from clear, close-up photos.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-black md:text-4xl">
              How It Works
            </h2>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="text-xl font-black text-black">1. Fill out the form</h3>
                <p className="mt-2 text-base font-medium leading-7 text-zinc-800">
                  Give us your name, phone number, city, and a few details about what
                  you are seeing.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="text-xl font-black text-black">2. Text the photo</h3>
                <p className="mt-2 text-base font-medium leading-7 text-zinc-800">
                  Send your picture to {phoneDisplay}. Try to get a close-up shot of
                  the pest, droppings, nest, webbing, or damage if possible.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="text-xl font-black text-black">3. We review it</h3>
                <p className="mt-2 text-base font-medium leading-7 text-zinc-800">
                  If we can identify it from the photo, we will point you in the right
                  direction and let you know the best next step.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-red-200 bg-red-50 p-6">
              <h3 className="text-2xl font-black text-black">Helpful Photo Tips</h3>
              <ul className="mt-4 space-y-3 text-base font-medium leading-7 text-zinc-900">
                <li>• Get as close as you safely can.</li>
                <li>• Take more than one picture if needed.</li>
                <li>• Include the area where you found it.</li>
                <li>• Tell us whether it was inside or outside.</li>
                <li>• Let us know if you have seen more than one.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-black tracking-tight text-black md:text-4xl">
              Quick Contact Form
            </h2>

            <p className="mt-3 text-base font-medium leading-7 text-zinc-800">
              Fill this out first, then text your pest photo to {phoneDisplay}.
            </p>

            <form
              action="https://formsubmit.co/info@allstarpestkc.com"
              method="POST"
              className="mt-8 space-y-5"
            >
              <input type="hidden" name="_subject" value="New Pest Photo Lead" />
              <input
                type="hidden"
                name="_next"
                value="https://www.allstarpestkc.com/send-photo?submitted=1"
              />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-black uppercase tracking-[0.08em] text-black">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-base font-medium text-black outline-none transition focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-black uppercase tracking-[0.08em] text-black">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-base font-medium text-black outline-none transition focus:border-red-600"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-black uppercase tracking-[0.08em] text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-base font-medium text-black outline-none transition focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-black uppercase tracking-[0.08em] text-black">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-base font-medium text-black outline-none transition focus:border-red-600"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-black uppercase tracking-[0.08em] text-black">
                  Where Did You See It?
                </label>
                <input
                  type="text"
                  name="locationSeen"
                  placeholder="Kitchen, basement, garage, porch, yard..."
                  required
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-base font-medium text-black outline-none transition focus:border-red-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black uppercase tracking-[0.08em] text-black">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us what you are seeing."
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-base font-medium text-black outline-none transition focus:border-red-600"
                />
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-sm font-black uppercase tracking-[0.08em] text-black">
                  Next Step
                </p>
                <p className="mt-2 text-base font-medium leading-7 text-zinc-800">
                  After you submit this form, text your pest photo to{" "}
                  <span className="font-black text-black">{phoneDisplay}</span>.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-black uppercase tracking-[0.08em] text-white transition hover:bg-red-700"
                >
                  Submit Form
                </button>

                <a
                  href={smsHref}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-black px-8 py-4 text-base font-black uppercase tracking-[0.08em] text-black transition hover:bg-black hover:text-white"
                >
                  Text the Photo
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center">
          <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
            Need Immediate Help?
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-lg font-medium leading-8 text-white/90 md:text-xl md:leading-9">
            Call us directly and we will help you figure out the best next step.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:+${phoneHref}`}
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-base font-black uppercase tracking-[0.08em] text-white transition hover:bg-red-700"
            >
              Call {phoneDisplay}
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-base font-black uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
