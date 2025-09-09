import Link from "next/link";
import { EVENTS } from "@/data/events";

export default function ScheduleMenu() {
  return (
    <section className="space-y-6">
<h1 className="text-2xl font-bold" style={{color:"var(--brand)"}}>Book a Service</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {EVENTS.map((e) => (
          <Link
            key={e.path}
            href={`/book/${e.path}`}
            className="block bg-white rounded-2xl border p-4 hover:shadow"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold">{e.label}</h3>
              <span className="text-xs rounded-full border px-2 py-1">{e.duration}</span>
            </div>
            {e.subtitle ? <p className="text-sm text-gray-600 mt-1">{e.subtitle}</p> : null}
            {e.note ? <p className="text-[11px] text-amber-700 mt-2">⭑ {e.note}</p> : null}
          </Link>
        ))}
      </div>
    </section>
  );
}



