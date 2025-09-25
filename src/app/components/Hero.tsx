export default function Hero() {
  return (
    <section style={{ padding: "48px 0" }}>
      <h1 style={{ fontSize: 36, lineHeight: 1.2, marginBottom: 8 }}>
        Local Service. Guaranteed Results.
      </h1>
      <p style={{ fontSize: 18, maxWidth: 760 }}>
        Family-owned pest control serving the Kansas City metro with eco-smart treatments
        that are safe for kids & pets. Over 28 years of experience.
      </p>
      <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
        <a href="tel:+19137387827" style={{ padding: "10px 14px", border: "1px solid #111", borderRadius: 8 }}>Call (913) 738-STAR</a>
        <a href="/services" style={{ padding: "10px 14px", border: "1px solid #111", borderRadius: 8 }}>See Services</a>
      </div>
    </section>
  );
}