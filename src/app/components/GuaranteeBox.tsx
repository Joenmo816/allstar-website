type GuaranteeBoxProps = {
  city?: string;
};

export default function GuaranteeBox({ city }: GuaranteeBoxProps) {
  return (
    <div className="rounded-3xl border-2 border-allstarRed bg-red-50 p-6 shadow-sm">
      <p className="text-sm font-black uppercase tracking-[0.14em] text-allstarRed">
        Written Service Promise
      </p>

      <h3 className="mt-2 text-2xl font-black text-allstarInk">
        If pests come back, we come back.
      </h3>

      <p className="mt-3 text-lg leading-relaxed text-allstarSlate">
        If pest activity returns between scheduled visits{city ? ` in ${city}` : ""}, All Star Pest Solutions comes back and makes it right. No runaround. No excuses.
      </p>
    </div>
  );
}


