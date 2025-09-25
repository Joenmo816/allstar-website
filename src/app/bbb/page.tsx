"use client";
import { useState } from "react";

export default function BBBSealPreview() {
  const [size, setSize] = useState(120);
  return (
    <section>
      <h1 style={{ fontSize: 28, marginBottom: 16 }}>BBB Seal Preview</h1>
      <p>Drag the slider to test visual size for headers/footers.</p>
      <input type="range" min={60} max={240} value={size} onChange={e => setSize(parseInt(e.target.value))}/>
      <div style={{ marginTop: 20 }}>
        <img src="/images/bbb-seal.png" alt="BBB Accredited Business" style={{ width: size, height: "auto" }} />
      </div>
      <pre style={{ marginTop: 16, background: "#f6f6f6", padding: 12 }}>
        {`<img src="/images/bbb-seal.png" alt="BBB Accredited Business" width="${size}" />`}
      </pre>
    </section>
  );
}