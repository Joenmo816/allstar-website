"use client";

import { useState } from "react";

type QuickLeadFormProps = {
  city?: string;
  compact?: boolean;
};

export default function QuickLeadForm({ city = "", compact = false }: QuickLeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = encodeURIComponent(
      `New pest quote request:%0AName: ${name}%0APhone: ${phone}%0ACity: ${city}%0AIssue: ${issue}`
    );

    window.location.href = `sms:+19137387827?&body=${message}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-xl"
    >
      <h3 className="text-2xl font-black text-allstarRed">
        Get My Free Quote
      </h3>

      <p className="mt-2 text-sm font-semibold text-allstarSlate">
        Short form. No contract. You talk directly to the owner.
      </p>

      <div className={`mt-5 grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <label className="block">
          <span className="text-sm font-black text-allstarInk">Name</span>
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-allstarInk outline-none focus:border-allstarBlue"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="text-sm font-black text-allstarInk">Phone</span>
          <input
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-allstarInk outline-none focus:border-allstarBlue"
            placeholder="Best phone number"
          />
        </label>

        <label className="block">
          <span className="text-sm font-black text-allstarInk">City</span>
          <input
            value={city}
            readOnly={Boolean(city)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-allstarInk outline-none focus:border-allstarBlue"
            placeholder="City"
          />
        </label>

        <label className="block">
          <span className="text-sm font-black text-allstarInk">Pest Issue</span>
          <input
            required
            value={issue}
            onChange={(event) => setIssue(event.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-allstarInk outline-none focus:border-allstarBlue"
            placeholder="Ants, spiders, rodents, termites..."
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-xl bg-allstarRed px-6 py-4 text-lg font-black text-white transition hover:bg-allstarRedDark"
      >
        Send Quote Request
      </button>

      <p className="mt-3 text-center text-sm font-bold text-allstarSlate">
        Need help fast?{" "}
        <a href="tel:+19137387827" className="text-allstarRed underline">
          Call (913) 738-STAR
        </a>
      </p>
    </form>
  );
}


