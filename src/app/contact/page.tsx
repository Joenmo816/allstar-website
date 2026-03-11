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
   className='text-2xl font-bold mt-12'>
<h2 className="text-3xl font-bold mb-6 text-center">Other Cities We Service</h2>

<ul>
<li><a href='/contact-louisburg-ks'>contact in louisburg-ks</a></li>
<li><a href='/contact-paola-ks'>contact in paola-ks</a></li>
<li><a href='/contact-osawatomie-ks'>contact in osawatomie-ks</a></li>
<li><a href='/contact-spring-hill-ks'>contact in spring-hill-ks</a></li>
<li><a href='/contact-stilwell-ks'>contact in stilwell-ks</a></li>
<li><a href='/contact-overland-park-ks'>contact in overland-park-ks</a></li>
<li><a href='/contact-olathe-ks'>contact in olathe-ks</a></li>
<li><a href='/contact-prairie-village-ks'>contact in prairie-village-ks</a></li>
<li><a href='/contact-leawood-ks'>contact in leawood-ks</a></li>
<li><a href='/contact-peculiar-mo'>contact in peculiar-mo</a></li>
<li><a href='/contact-freeman-mo'>contact in freeman-mo</a></li>
<li><a href='/contact-harrisonville-mo'>contact in harrisonville-mo</a></li>
<li><a href='/contact-drexel-mo'>contact in drexel-mo</a></li>
<li><a href='/contact-cleveland-mo'>contact in cleveland-mo</a></li>
<li><a href='/contact-loch-lloyd-mo'>contact in loch-lloyd-mo</a></li>
<li><a href='/contact-belton-mo'>contact in belton-mo</a></li>
<li><a href='/contact-raymore-mo'>contact in raymore-mo</a></li>
<li><a href='/contact-grandview-mo'>contact in grandview-mo</a></li>

</ul>

</div>

)
}

