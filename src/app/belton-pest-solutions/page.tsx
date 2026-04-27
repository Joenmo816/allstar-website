import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pest Solutions in Belton, MO",
  description:
    "Looking for pest solutions in Belton, MO? All Star Pest Solutions provides safe, effective service backed by 30+ Years of Experience. Locally owned. No mandatory contracts.",
};

const pestTypes = [
  {
    title: "Ants",
    description:
      "Ant problems in Belton can start small and turn into a recurring headache fast once they find food, water, or easy access into your home.",
  },
  {
    title: "Spiders",
    description:
      "Spiders often show up in garages, basements, corners, and storage areas. Even when they are harmless, most homeowners do not want them hanging around.",
  },
  {
    title: "Rodents",
    description:
      "Mice and rats can squeeze through tiny gaps, contaminate food, damage wiring, and create unhealthy conditions inside the home.",
  },
  {
    title: "Termites",
    description:
      "Termites can silently damage the structure of a home before the problem becomes obvious. Early detection and the right treatment matter.",
  },
];

const reasons = [
  "30+ years of hands-on industry experience",
  "State-certified commercial applicators",
  "Safe, modern, eco-friendly techniques",
  "No mandatory contracts",
  "Locally owned and operated",
  "Guaranteed Service, Guaranteed Results",
];

export default function BeltonPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-red-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex rounded-full border border-red-200 bg-white px-4 py-1 text-sm font-semibold tracking-wide text-red-700">
              Belton, Missouri Pest Solutions
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
              Pest Solutions in Belton, MO
            </h1>

            <p className="text-lg leading-8 text-slate-700 md:text-xl">
              If pests are taking over your home in Belton, you need more than a
              quick spray. You need real experience, real solutions, and a
              company that knows how to get results.
            </p>

            <p className="text-base leading-8 text-slate-700 md:text-lg">
              At <strong>All Star Pest Solutions</strong>, we bring over{" "}
              <strong>30+ Years of Experience</strong> helping homeowners protect
              their homes from unwanted pests. We are locally owned and operated
              and proud to serve Belton with safe, effective, modern treatment
              methods.
            </p>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <a
                href="tel:9137387827"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-red-700"
              >
                Call (913) 738-7827
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Why Belton Homeowners Choose All Star Pest Solutions
            </h2>

            <p className="text-lg leading-8 text-slate-700">
              We know the difference between a temporary fix and a real
              solution. That means finding the source of the problem, treating
              it correctly, and helping keep pests from coming back.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-base font-semibold text-slate-900">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold">Why experience matters</h3>
            <p className="mt-4 text-base leading-8 text-slate-200">
              Anybody can show up and spray. The difference is knowing what pest
              you are dealing with, where it is coming from, why it keeps
              returning, and what treatment will actually solve the problem.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-200">
              With Over 30 Years of Experience in the field, All Star Pest Solutions brings
              the kind of knowledge Belton homeowners can trust.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Common Pest Problems in Belton
            </h2>
            <p className="text-lg leading-8 text-slate-700">
              Homes in Belton deal with different pest pressures throughout the
              year. Seasonal weather, moisture, landscaping, and structural
              entry points can all make it easier for pests to move in.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pestTypes.map((pest) => (
              <article
                key={pest.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-slate-950">
                  {pest.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  {pest.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-950">1. Inspection</h3>
            <p className="mt-3 text-base leading-8 text-slate-700">
              We inspect the property for pest activity, entry points, nesting
              areas, and the conditions attracting pests.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-950">
              2. Targeted Treatment
            </h3>
            <p className="mt-3 text-base leading-8 text-slate-700">
              We use the right products and methods for the specific pest issue
              so the treatment is both effective and responsible.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-950">3. Prevention</h3>
            <p className="mt-3 text-base leading-8 text-slate-700">
              We help reduce future problems by addressing root causes and
              recommending practical prevention steps.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-red-600">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8">
          <div className="max-w-3xl space-y-5 text-white">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Need pest solutions in Belton, MO?
            </h2>
            <p className="text-lg leading-8 text-red-50">
              Don’t let pests take over your home. Get help from a local company
              that believes in doing the job right the first time.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:9137387827"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-bold text-red-700 transition hover:bg-red-50"
              >
                Call (913) 738-7827
              </a>

              <a
                href="mailto:info@allstarpestkc.com"
                className="inline-flex items-center justify-center rounded-xl border border-red-200 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-700"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



