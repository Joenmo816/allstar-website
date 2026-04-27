import Link from "next/link";
import { smsHref } from "@/data/business-links";

export default function OwnerVsBigCompanies() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-slate-200 shadow-xl lg:grid-cols-2">
          <div className="bg-slate-100 p-8 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-slate-500">
              Big Companies
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900">
              Call centers, contracts, and rushed service.
            </h2>

            <ul className="mt-6 space-y-4 text-xl font-bold text-slate-700">
              <li>• You may talk to a call center first</li>
              <li>• You may get pushed into a contract</li>
              <li>• You may get a technician with limited field experience</li>
              <li>• You may feel like just another account number</li>
            </ul>
          </div>

          <div className="bg-allstarBlueDark p-8 text-white md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-red-200">
              All Star Pest Solutions
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Owner-level service from the first call.
            </h2>

            <ul className="mt-6 space-y-4 text-xl font-bold text-white/95">
              <li>• Talk directly to the owner/technician</li>
              <li>• No mandatory contracts</li>
              <li>• 30+ years of real pest experience</li>
              <li>• Guaranteed re-service if pests come back</li>
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={smsHref}
                className="rounded-xl bg-white px-6 py-4 text-center text-lg font-black text-allstarBlueDark transition hover:bg-slate-100"
              >
                Text Us a Pest Picture
              </a>

              <Link
                href="/contact"
                className="rounded-xl bg-allstarRed px-6 py-4 text-center text-lg font-black text-white transition hover:bg-allstarRedDark"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


