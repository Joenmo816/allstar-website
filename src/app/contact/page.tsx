export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        Contact All Star Pest Solutions
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        Need pest control in Kansas City? Call, email, or message us — we’ll respond fast. Trusted by homeowners and businesses for 25+ years. No mandatory contracts. Just guaranteed results.
      </p>

      <ul className="space-y-4 text-gray-800 text-lg">
        <li>
          <strong>Phone:</strong>{" "}
          <a href="tel:+19137387827" className="text-blue-700 underline">
            (913) 738-STAR
          </a>
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@allstarpestkc.com" className="text-blue-700 underline">
            info@allstarpestkc.com
          </a>
        </li>
        <li>
          <strong>Service Area:</strong>{" "}
          Kansas City Metro – including Overland Park, Lenexa, Shawnee, Leawood, Olathe, and surrounding KS/MO areas
        </li>
        <li>
          <strong>Hours:</strong>{" "}
          Monday–Saturday: 8:00 AM – 6:00 PM
        </li>
      </ul>

      {/* Optional: Google Map Embed Placeholder */}
      {/* 
      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="250"
          loading="lazy"
          className="rounded border"
        ></iframe>
      </div>
      */}
    </main>
  );
}
