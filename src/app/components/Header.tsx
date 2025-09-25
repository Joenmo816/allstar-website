export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid #eee" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 24px", display: "flex", gap: 16, alignItems: "center" }}>
        <div style={{ fontWeight: 800, fontSize: 20 }}>All Star Pest Solutions</div>
        <nav style={{ marginLeft: "auto", display: "flex", gap: 16 }}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/pests">Pest Library</a>
          <a href="/bbb">BBB Seal</a>
          <a href="tel:+19137387827">(913) 738-STAR</a>
        </nav>
      </div>
    </header>
  );
}