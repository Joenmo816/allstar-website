export default function SolutionsPage() {
  const services = [
    "General Pest Solutions",
    "Termite Solutions",
    "Rodent Control",
    "Mosquito Control",
    "Bed Bug Solutions",
  ]

  return (
    <div className="bg-white text-black">

      {/* HERO */}
      <section className="text-center py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6">
          Kansas City’s All-Star Pest Solutions
        </h1>

        <p className="text-xl text-gray-600">
          Targeted treatments. Proven results. Local expertise you can trust.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service}
              className="border rounded-xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold mb-3 text-red-600">
                {service}
              </h2>

              <p className="text-gray-600 mb-6">
                Customized solutions designed to eliminate the problem and keep it from coming back.
              </p>

              <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-red-600 transition">
                Learn More
              </button>
            </div>
          ))}

        </div>
      </section>

    </div>
  )
}


