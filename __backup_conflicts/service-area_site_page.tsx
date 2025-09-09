export const metadata = {
  title: "Service Area | All Star Pest Solutions",
  description: "ZIP codes  in KS & MO that we currently serve."
};

export default function ServiceArea() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold" style={{color:"var(--brand)"}}>Service Area</h1>

      {/* Centered map (KC south metro), no bbox */}
      <div className="rounded-xl overflow-hidden border bg-white">
        <iframe
          title="Service Area Map"
          src="https://www.openstreetmap.org/export/embed.html?map=11/38.95/-94.73&layer=mapnik"
          width="100%"
          height="520"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />
      </div>
      <p className="text-xs text-gray-500">
        <a className="underline" href="https://www.openstreetmap.org/#map=11/38.95/-94.73" target="_blank" rel="noopener noreferrer">
          Open full map
        </a>
      </p>

      <p className="text-sm text-gray-600">
        We serve <strong>ZIP codes </strong> in Kansas & Missouri. If you’re near the edge, try your ZIP when booking or call us.
      </p>

      <div className="grid md:grid-cols-2 gap-6 bg-white rounded-xl border p-4">
        <div>
          <h2 className="font-semibold mb-2">Kansas</h2>
          <ul className="text-sm leading-7">
            <li><strong>Mission Hills</strong> — 66208, 66205</li>
            <li><strong>Prairie Village</strong> — 66206, 66207, 66208</li>
            <li><strong>Leawood / Overland Park / Lenexa</strong> — 66209, 66210, 66211, 66212, 66213, 66214, 66215, 66219, 66223, 66224</li>
            <li><strong>Olathe</strong> — 66051, 66061, 66062, 66063</li>
            <li><strong>Gardner</strong> — 66030</li>
            <li><strong>Stilwell</strong> — 66085</li>
            <li><strong>Bucyrus</strong> — 66013</li>
            <li><strong>Spring Hill</strong> — 66083</li>
            <li><strong>Louisburg</strong> — 66053</li>
            <li><strong>La Cygne</strong> — 66040</li>
            <li><strong>Paola</strong> — 66071</li>
            <li><strong>Osawatomie</strong> — 66064</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Missouri</h2>
          <ul className="text-sm leading-7">
            <li><strong>South KC / Raytown / Grandview</strong> — 64113, 64114, 64131, 64132, 64133, 64134, 64137, 64138, 64139, 64145, 64146, 64147, 64149, 64030</li>
            <li><strong>Belton</strong> — 64012</li>
            <li><strong>Lee’s Summit</strong> — 64063, 64064, 64081, 64082, 64086</li>
            <li><strong>Pleasant Hill</strong> — 64080</li>
            <li><strong>Raymore</strong> — 64083</li>
            <li><strong>Peculiar</strong> — 64078</li>
            <li><strong>Harrisonville</strong> — 64701</li>
            <li><strong>Freeman</strong> — 64746</li>
            <li><strong>Archie</strong> — 64725</li>
            <li><strong>Drexel</strong> — 64742</li>
            <li><strong>Adrian</strong> — 64720</li>
            <li><strong>Cleveland</strong> — 64734</li>
            <li><strong>Garden City</strong> — 64747</li>
          </ul>
        </div>
      </div>

      <p className="text-sm">
        Think you should be in our service area? <a className="underline" href="tel:+19137387827">Call or text us</a>!
      </p>
    </section>
  );
}

