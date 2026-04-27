import { phoneDisplay, phoneHref, smsHref } from "@/data/business-links";

export default function DesktopCallBar() {
  return (
    <div className="hidden border-b border-white/15 bg-allstarInk text-white shadow-sm md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.12em]">
          Free Inspection • No Contracts • Talk Directly to the Owner
        </p>

        <div className="flex items-center gap-3">
          <a
            href={smsHref}
            className="rounded-xl bg-white px-5 py-2 text-sm font-black text-allstarBlueDark transition hover:bg-slate-100"
          >
            Text a Pest Picture
          </a>

          <a
            href={phoneHref}
            className="rounded-xl bg-allstarRed px-5 py-2 text-sm font-black text-white transition hover:bg-allstarRedDark"
          >
            Call {phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}


