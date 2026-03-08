export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6">

      <h1 className="text-5xl font-extrabold mb-8 text-center">
        Get Your Free Inspection
      </h1>

      <div className="grid gap-10">

        {/* CALL CTA */}
        <a
          href="tel:19137387827"
          className="bg-black text-white text-center py-6 rounded-xl text-2xl font-bold hover:bg-red-600 transition"
        >
          📞 Call 913-738-STAR
        </a>

        {/* FORM */}
        <form className="grid gap-6">

          <input
            className="border p-4 rounded-lg"
            placeholder="Name"
          />

          <input
            className="border p-4 rounded-lg"
            placeholder="Phone"
          />

          <input
            className="border p-4 rounded-lg"
            placeholder="Email"
          />

          <textarea
            className="border p-4 rounded-lg"
            rows={4}
            placeholder="What pest problem are you having?"
          />

          <button className="bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition">
            Request Service
          </button>

        </form>

      </div>

    </div>
  )
}