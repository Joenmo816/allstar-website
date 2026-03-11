export const metadata = {
  title: "South Kansas City Residential Pest Solutions | 30+ Years Experience",
  description:
    "Residential pest solutions in South Kansas City from All Star Pest Solutions. Over 30 years experience providing safe, targeted pest management that protects families, pets, and beneficial species.",
};

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="relative h-[640px] w-full overflow-hidden">

          <Image
            src="/kc-background.jpg"
            alt="Kansas City skyline pest solutions service area"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center">

            <div className="w-full md:w-[60%] relative z-10">

              <div className="flex justify-center md:justify-start mb-4">
                <Image
                  src="/logo.png"
                  alt="All Star Pest Solutions Logo"
                  width={440}
                  height={440}
                  priority
                />
              </div>

              <div className="inline-block bg-red-700 px-6 py-3 rounded-md shadow-lg mb-6">
                <h1 className="text-yellow-400 font-extrabold text-2xl md:text-3xl">
                  Guaranteed Service. Guaranteed Results.
                </h1>
              </div>

              <p className="text-white text-lg font-semibold">
                Residential pest solutions for homeowners throughout
                South Kansas City and surrounding communities.
              </p>

            </div>

            <div className="hidden md:block flex-1 relative h-full">
              <Image
                src="/mascot.png"
                alt="All Star Pest Solutions mascot"
                width={700}
                height={700}
                className="absolute right-0 bottom-0 drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 text-center">
            Residential Pest Solutions in South Kansas City
          </h2>

          <p className="mt-6 text-lg text-black/80 font-semibold leading-relaxed">
            Your home should be a place of comfort, safety, and peace of mind —
            not a place where ants invade the kitchen, spiders build webs in
            the corners, or rodents damage your property. At All Star Pest
            Solutions, we provide professional residential pest solutions
            designed to eliminate pest problems and prevent them from coming
            back.
          </p>

          <p className="mt-6 text-lg text-black/80 font-semibold leading-relaxed">
            With more than 30 years of hands-on pest control experience serving
            Kansas City area homeowners, every inspection and treatment is
            performed with precision and care. Our goal is not just to eliminate
            pests today, but to create long-term protection for your home so you
            can live comfortably without worrying about infestations.
          </p>

        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="bg-zinc-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold text-red-700">
            Experience Makes the Difference
          </h2>

          <p className="mt-6 text-lg font-semibold text-black/80 max-w-4xl mx-auto leading-relaxed">
            Pest problems are rarely simple. What appears to be a small issue
            often has a larger underlying cause such as moisture conditions,
            entry points around the structure, or seasonal pest pressures that
            are common in the Kansas City region. With decades of experience in
            the industry, our inspections focus on identifying the true source
            of the problem rather than just treating symptoms.
          </p>

          <p className="mt-6 text-lg font-semibold text-black/80 max-w-4xl mx-auto leading-relaxed">
            Our applicators are licensed commercial pesticide applicators in
            both Kansas and Missouri. This certification ensures treatments are
            performed according to state regulations, label requirements, and
            best industry practices to deliver effective results while
            maintaining the highest safety standards.
          </p>

        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-extrabold text-red-700">
            Our Residential Protection Process
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-extrabold">Inspect</h3>
              <p className="mt-4 font-semibold text-black/75">
                Every service begins with a detailed inspection of your
                property to identify pest activity, entry points, nesting
                areas, and environmental conditions that attract pests.
              </p>
            </div>

            <div className="bg-zinc-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-extrabold">Target</h3>
              <p className="mt-4 font-semibold text-black/75">
                Treatments are applied only where necessary using
                professional-grade products and precise application methods
                designed to eliminate pest populations effectively.
              </p>
            </div>

            <div className="bg-zinc-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-extrabold">Protect</h3>
              <p className="mt-4 font-semibold text-black/75">
                Ongoing protection strategies help prevent pests from returning
                by addressing structural vulnerabilities and seasonal pest
                pressures common to homes in the Kansas City area.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= NON TARGET SPECIES ================= */}
      <section className="bg-zinc-50 py-16">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 text-center">
            Protecting Non-Target Species and the Environment
          </h2>

          <p className="mt-6 text-lg font-semibold text-black/80 leading-relaxed">
            Responsible pest management means more than simply eliminating
            pests. At All Star Pest Solutions, we take great care to protect
            beneficial insects, wildlife, pets, and other non-target species
            that play an important role in our ecosystem.
          </p>

          <p className="mt-6 text-lg font-semibold text-black/80 leading-relaxed">
            Our approach follows the principles of Integrated Pest Management
            (IPM). This strategy focuses on inspection, monitoring, and
            targeted treatment rather than unnecessary broad pesticide
            applications. By identifying exactly which pests are present and
            where they are active, treatments can be applied with precision
            while minimizing exposure to non-target organisms.
          </p>

          <p className="mt-6 text-lg font-semibold text-black/80 leading-relaxed">
            Many insects such as honeybees, butterflies, and predatory beetles
            provide valuable ecological benefits including pollination and
            natural pest control. Our technicians carefully evaluate treatment
            areas to avoid impacting these beneficial species whenever
            possible. Application techniques such as crack-and-crevice
            treatments, targeted perimeter barriers, and selective baiting
            systems allow us to control pest populations without disrupting
            surrounding wildlife.
          </p>

          <p className="mt-6 text-lg font-semibold text-black/80 leading-relaxed">
            We also prioritize the safety of pets and family members. Products
            are applied according to strict label instructions and only in the
            areas where they are needed most. Modern pest management technology
            allows treatments to be both effective and environmentally
            responsible at the same time.
          </p>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-red-700 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-extrabold text-yellow-400">
            Ready to Protect Your Home?
          </h2>

          <p className="mt-6 text-white font-semibold text-lg">
            If you're dealing with ants, spiders, rodents, termites, or other
            pests around your home, professional help can make all the
            difference. Contact All Star Pest Solutions today to schedule a
            professional inspection and start protecting your home.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-yellow-400 text-red-700 font-extrabold px-8 py-4 rounded-md shadow-md"
            >
              Schedule Your Inspection
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

<h2 className='text-2xl font-bold mt-12'>
Other Cities We Service
</h2>

<ul>
<li><a href='/residential-louisburg-ks'>residential in louisburg-ks</a></li>
<li><a href='/residential-paola-ks'>residential in paola-ks</a></li>
<li><a href='/residential-osawatomie-ks'>residential in osawatomie-ks</a></li>
<li><a href='/residential-spring-hill-ks'>residential in spring-hill-ks</a></li>
<li><a href='/residential-stilwell-ks'>residential in stilwell-ks</a></li>
<li><a href='/residential-overland-park-ks'>residential in overland-park-ks</a></li>
<li><a href='/residential-olathe-ks'>residential in olathe-ks</a></li>
<li><a href='/residential-prairie-village-ks'>residential in prairie-village-ks</a></li>
<li><a href='/residential-leawood-ks'>residential in leawood-ks</a></li>
<li><a href='/residential-peculiar-mo'>residential in peculiar-mo</a></li>
<li><a href='/residential-freeman-mo'>residential in freeman-mo</a></li>
<li><a href='/residential-harrisonville-mo'>residential in harrisonville-mo</a></li>
<li><a href='/residential-drexel-mo'>residential in drexel-mo</a></li>
<li><a href='/residential-cleveland-mo'>residential in cleveland-mo</a></li>
<li><a href='/residential-loch-lloyd-mo'>residential in loch-lloyd-mo</a></li>
<li><a href='/residential-belton-mo'>residential in belton-mo</a></li>
<li><a href='/residential-raymore-mo'>residential in raymore-mo</a></li>
<li><a href='/residential-grandview-mo'>residential in grandview-mo</a></li>

</ul>


