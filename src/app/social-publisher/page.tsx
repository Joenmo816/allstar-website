"use client";

import { useState } from "react";

export default function SocialPublisherPage() {
  const [topic, setTopic] = useState("termite swarmers in spring");
  const [city, setCity] = useState("Overland Park KS");
  const [cta, setCta] = useState("Call or text (913) 738-7827");
  const [result, setResult] = useState("");

  async function publish() {
    setResult("Publishing check running...");

    const res = await fetch("/api/social/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ topic, city, cta })
    });

    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
  }

  return (
    <main className="mx-auto max-w-5xl p-6 text-slate-950">
      <h1 className="text-4xl font-black">Social Auto-Posting Dashboard</h1>

      <p className="mt-4 text-lg text-slate-700">
        Create one pest topic and prepare posts for Facebook, Instagram, and Google Business Profile.
      </p>

      <div className="mt-8 grid gap-4">
        <label className="grid gap-2 font-bold">
          Topic
          <input
            className="rounded-xl border p-3"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </label>

        <label className="grid gap-2 font-bold">
          City
          <input
            className="rounded-xl border p-3"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>

        <label className="grid gap-2 font-bold">
          Call to Action
          <input
            className="rounded-xl border p-3"
            value={cta}
            onChange={(e) => setCta(e.target.value)}
          />
        </label>

        <button
          onClick={publish}
          className="rounded-xl bg-red-700 px-6 py-4 font-black text-white"
        >
          Prepare / Publish Check
        </button>
      </div>

      <pre className="mt-8 whitespace-pre-wrap rounded-2xl bg-slate-100 p-5 text-sm">
        {result}
      </pre>
    </main>
  );
}
