import CompareTable from "@/components/CompareTable";

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      <HeaderHero />
      <TrustBadges />
      <ServicePlans />
      <CompareTable />   {/* 👈 Plan Comparison table here */}
      <CoverageGrid />
      <AddOns />
      <EcoSafety />
      <Guarantee />
      <Scheduling />
      <FAQs />
      <ServiceArea />
      <CTASection />
    </main>
  );
}

/* ---------- HERO ---------- */
function HeaderHero() {
  return (
    <section className="text-center space-y-4">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
        Local Service. Guaranteed Results.
      </h1>
      <p className="text-lg text-gray-600">
        Family-owned in Kansas City with 28+ years’ experience. Certified in KS & MO.
        No mandatory contracts. Veteran & senior discounts.
      </p>
    </section>
  );
}

/* ---------- TRUST / BADGES ---------- */
function TrustBadges() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        "State-Certified Technicians (KS/MO)",
        "Eco-Smart · Kid & Pet Friendly",
        "Locally Owned & Operated",
        "BBB & Community-Trusted",
      ].map((t) => (
        <div key={t} className="rounded-2xl border p-4 text-center shadow-sm">
          <p className="font-semibold">{t}</p>
        </div>
      ))}
    </section>
  );
}

/* ---------- SERVICE PLANS ---------- */
function ServicePlans() {
  const plans = [
    {
      name: "Quarterly Protection",
      blurb:
        "Our most popular: keeps common pests out year-round with proactive exterior service and free call-backs.",
      price: "Most homes",
      includes: [
        "Initial interior + exterior service",
        "Quarterly exterior barrier & web/wasp removal",
        "Free re-services between visits",
      ],
      best: true,
    },
    {
      name: "Monthly Pro Care",
      blurb:
        "For heavy pressure homes or businesses needing tighter intervals and enhanced monitoring.",
      price: "High-pressure",
      includes: [
        "Everything in Quarterly",
        "Monthly exterior service",
        "Rodent/IPM monitoring upgrades",
      ],
      best: false,
    },
    {
      name: "One-Time Flush & Seal",
      blurb:
        "Great for move-ins, listings, or specific infestations. Option to roll into a plan after.",
      price: "As needed",
      includes: [
        "Targeted interior treatment",
        "Perimeter exterior treatment",
        "Entry-point recommendations",
      ],
      best: false,
    },
  ];
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Service Plans</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl border p-6 shadow-sm ${
              p.best ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              {p.best && (
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-50 border border-blue-200">
                  Most Popular
                </span>
              )}
            </div>
            <p className="mt-2 text-gray-600">{p.blurb}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {p.includes.map((i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 text-sm text-gray-500">Fit: {p.price}</div>
            <button className="mt-6 w-full rounded-xl border px-4 py-2 font-medium hover:bg-gray-50">
              Get Pricing
            </button>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Final pricing depends on size, construction, pest pressure, and access.
      </p>
    </section>
  );
}

/* ---------- COVERAGE ---------- */
function CoverageGrid() {
  const pests = [
    "Ants (incl. carpenter ants)",
    "Spiders (incl. brown recluse)",
    "Roaches (German/other)",
    "Wasps / Hornets / Mud daubers",
    "Mice / Rats (exterior IPM)",
    "Crickets / Silverfish",
    "Centipedes / Millipedes",
    "Earwigs / Pantry pests",
  ];
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">What’s Covered</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {pests.map((p) => (
          <div key={p} className="rounded-xl border p-3 text-sm">
            {p}
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-600">
        Termites, bed bugs, mosquitoes, fleas/ticks, and wildlife are specialty services (see add-ons).
      </p>
    </section>
  );
}

/* ---------- ADD-ONS ---------- */
function AddOns() {
  const adds = [
    {
      name: "Termite Protection",
      items: [
        "Inspections (NPMA-33 available)",
        "Localized or full-structure treatments",
        "Pre-treats for remodel/new builds",
      ],
    },
    {
      name: "Bed Bug Programs",
      items: [
        "Inspection & prep checklist",
        "Targeted treatment plans",
        "Follow-ups until resolved",
      ],
    },
    {
      name: "Rodent Hardening",
      items: [
        "Exterior bait/monitoring",
        "Entry-point sealing recommendations",
        "Sanitation & habitat tips",
      ],
    },
    {
      name: "Mosquito, Flea & Tick",
      items: [
        "Seasonal yard treatments",
        "Breeding-site reduction plan",
        "Pet & kid-friendly approach",
      ],
    },
  ];
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Specialty Add-Ons</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {adds.map((a) => (
          <div key={a.name} className="rounded-2xl border p-5">
            <h3 className="font-semibold text-lg">{a.name}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {a.items.map((i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- ECO SAFETY ---------- */
function EcoSafety() {
  return (
    <section className="rounded-2xl border p-6">
      <h2 className="text-2xl font-bold mb-3">Eco-Smart · Kid & Pet Friendly</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Integrated Pest Management (IPM): inspection, identification, and targeted treatments.</li>
        <li>Modern products, applied precisely per label and best practices.</li>
        <li>We protect beneficial pollinators and avoid unnecessary broad applications.</li>
        <li>Clear prep & after-care guidance to keep your family comfortable and safe.</li>
      </ul>
    </section>
  );
}

/* ---------- GUARANTEE ---------- */
function Guarantee() {
  return (
    <section className="rounded-2xl border p-6">
      <h2 className="text-2xl font-bold mb-2">Our Guarantee</h2>
      <p className="text-gray-700">
        If covered pests return between regular visits, so do we—at no extra charge. We’ll make it right.
      </p>
    </section>
  );
}

/* ---------- SCHEDULING ---------- */
function Scheduling() {
  const steps = [
    { t: "1. Inspection", d: "We listen, inspect inside/out, and identify the source." },
    { t: "2. Initial Service", d: "Interior flush + exterior barrier; remove webs/wasp nests where safe." },
    { t: "3. Maintenance", d: "Quarterly or monthly exterior to keep pests out; call anytime for re-service." },
  ];
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">How Scheduling Works</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {steps.map((s) => (
          <div key={s.t} className="rounded-2xl border p-5">
            <h3 className="font-semibold">{s.t}</h3>
            <p className="text-sm text-gray-700 mt-1">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQs() {
  const faqs = [
    {
      q: "Do I have to sign a long-term contract?",
      a: "No mandatory contracts. We offer plans for convenience but you can go month-to-month or one-time.",
    },
    {
      q: "Are your treatments safe for kids and pets?",
      a: "Yes—when applied per label and aftercare instructions. We use targeted, modern products and IPM best practices.",
    },
    {
      q: "What if pests come back?",
      a: "Call us. Covered pests are re-treated at no extra charge between regular visits.",
    },
    {
      q: "Do you service my area?",
      a: "We serve the greater Kansas City metro. See our service area below or call (913) 738-7827.",
    },
  ];
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="rounded-xl border p-4">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ---------- SERVICE AREA ---------- */
function ServiceArea() {
  return (
    <section className="rounded-2xl border p-6">
      <h2 className="text-2xl font-bold mb-2">Service Area</h2>
      <p className="text-gray-700">
        Kansas City metro, including Johnson, Cass, and Miami counties and surrounding communities.
      </p>
      <p className="mt-2 text-sm text-gray-600">
        Address: 210 W. Cleveland St, Cleveland, MO 64734 · Phone: (913) 738-7827 · Email: info@allstarpestkc.com
      </p>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTASection() {
  return (
    <section className="text-center space-y-3">
      <h3 className="text-2xl font-bold">Ready to be pest-free?</h3>
      <p className="text-gray-600">Call (913) 738-STAR or request a free estimate today.</p>
      <div className="flex items-center justify-center gap-3">
        <a
          href="/contact"
          className="rounded-xl border px-4 py-2 font-medium hover:bg-gray-50"
        >
          Free Estimate
        </a>
        <a
          href="/book"
          className="rounded-xl border px-4 py-2 font-medium hover:bg-gray-50"
        >
          Book Online
        </a>
      </div>
    </section>
  );
}

