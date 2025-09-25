export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: "1px solid #eee", marginTop: 40 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px" }}>
        <div>© {year} All Star Pest Solutions. All rights reserved.</div>
        <div>210 W. Cleveland St, Cleveland, MO 64734 • (913) 738-7827 • allstarpestkc.com</div>
      </div>
    </footer>
  );
}