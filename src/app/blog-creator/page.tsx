"use client";

import { useMemo, useState } from "react";

const pestOptions = [
  "Termites",
  "Carpenter Ants",
  "Acrobat Ants",
  "Spiders",
  "Brown Recluse Spiders",
  "Rodents",
  "Cockroaches",
  "Bed Bugs",
  "Mosquitoes",
  "Wasps",
  "Fleas",
  "General Pest Control"
];

const cityOptions = [
  "Overland Park KS",
  "Leawood KS",
  "Prairie Village KS",
  "Mission KS",
  "Shawnee KS",
  "Lenexa KS",
  "Olathe KS",
  "Spring Hill KS",
  "Stilwell KS",
  "Louisburg KS",
  "Belton MO",
  "Raymore MO",
  "Peculiar MO",
  "Harrisonville MO",
  "Lee's Summit MO"
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function BlogCreatorPage() {
  const [topic, setTopic] = useState("ants inside walls");
  const [pest, setPest] = useState("Carpenter Ants");
  const [city, setCity] = useState("Overland Park KS");
  const [season, setSeason] = useState("Spring");
  const [goal, setGoal] = useState("Get termite inspection calls");

  const output = useMemo(() => {
    const cleanTopic = topic.trim() || "pest problem";
    const slug = slugify(`${cleanTopic} ${city}`);

    return {
      slug,
      websitePost: `# ${cleanTopic} in ${city}: What Homeowners Need to Know

If you are dealing with ${cleanTopic} in ${city}, do not ignore it. Pest problems usually have a reason behind them — moisture, entry points, food sources, nesting areas, damaged wood, crawlspaces, basements, garages, landscaping, or seasonal pest pressure.

At All Star Pest Solutions, we do not believe in quick sprays that ignore the source of the problem. With over 30 years of pest control experience, we look at what is causing the issue and what needs to happen next.

## Why This Matters

${pest} can become a bigger problem when the source is missed. During ${season}, pest activity can increase around Kansas City area homes because weather, moisture, and seasonal movement can all change pest behavior.

If pests are active inside walls, kitchens, basements, garages, crawlspaces, or sleeping areas, it is time to take the problem seriously.

## What Homeowners Should Watch For

- Repeated pest activity after spraying
- Pests inside walls or around trim
- Moisture-damaged wood
- Droppings, stains, wings, webs, or nesting signs
- Activity near kitchens, bathrooms, garages, or basements
- Seasonal spikes after rain or warm weather

## Why Call All Star Pest Solutions

All Star Pest Solutions is locally owned and operated. You speak directly with the owner and technician — not a call center.

We offer:
- 30+ years of pest control experience
- No mandatory contracts
- Licensed Kansas and Missouri service
- Veteran and senior discounts
- Pollinator-conscious, environmentally responsible methods
- Honest recommendations based on your actual problem

## Call or Text Today

If you are seeing ${cleanTopic}, call or text All Star Pest Solutions at (913) 738-7827.

You can also text a pest photo for help identifying what you found.`,

      facebook: `Seeing ${cleanTopic} in ${city}? Don’t ignore it.

Pest problems usually have a source — moisture, entry points, nesting areas, food, damaged wood, or seasonal pressure.

All Star Pest Solutions gives straight answers, no mandatory contracts, and owner-operated service with 30+ years of experience.

📞 Call or text Joe: (913) 738-7827
📸 You can also text a pest photo.`,

      instagram: `${cleanTopic} in ${city}? 🐜

Don’t just spray what you see. Pest problems usually start with moisture, entry points, food sources, nesting areas, or seasonal pressure.

All Star Pest Solutions
✅ 30+ years experience
✅ No mandatory contracts
✅ Owner-operated
✅ Kansas & Missouri licensed

📞 (913) 738-7827

#KansasCityPestControl #PestControl #AllStarPestSolutions #TermiteInspection #AntControl #SpiderControl #RodentControl`,

      google: `${cleanTopic} can be a warning sign of a bigger pest issue. All Star Pest Solutions helps ${city} homeowners with targeted pest control, termite inspections, ants, spiders, rodents, roaches, mosquitoes, wasps, fleas, bed bugs, and more.

Call or text (913) 738-7827 for owner-operated local pest control with no mandatory contracts.`,

      video: `VIDEO SCRIPT:

"Hey, this is Joe with All Star Pest Solutions.

Today I want to talk about ${cleanTopic} in ${city}.

If you’re seeing this around your home, don’t just spray what you see and hope it goes away. There is usually a reason pests are showing up — moisture, entry points, food sources, nesting areas, or seasonal pressure.

With over 30 years in pest control, I look for the source of the problem, not just the visible pest.

If you need help, call or text me at (913) 738-7827. You can even text me a photo of what you found."`,

      nextFile: `Suggested file path:
src/app/vblog/${slug}/page.tsx`
    };
  }, [topic, pest, city, season, goal]);

  return (
    <main className="mx-auto max-w-6xl bg-white p-6 text-slate-950">
      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
          All Star Marketing Engine
        </p>

        <h1 className="mt-3 text-4xl font-black">
          Blog + Social Post Creator
        </h1>

        <p className="mt-3 max-w-3xl text-lg text-slate-700">
          Create one pest topic and generate a website blog post, Facebook post,
          Instagram caption, Google Business Profile post, video script, and slug.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 font-bold">
            Topic
            <input
              className="rounded-xl border p-3"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </label>

          <label className="grid gap-2 font-bold">
            Pest Category
            <select
              className="rounded-xl border p-3"
              value={pest}
              onChange={(e) => setPest(e.target.value)}
            >
              {pestOptions.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 font-bold">
            City
            <select
              className="rounded-xl border p-3"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              {cityOptions.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 font-bold">
            Season
            <select
              className="rounded-xl border p-3"
              value={season}
              onChange={(e) => setSeason(e.target.value)}
            >
              <option>Spring</option>
              <option>Summer</option>
              <option>Fall</option>
              <option>Winter</option>
              <option>Year-Round</option>
            </select>
          </label>

          <label className="grid gap-2 font-bold md:col-span-2">
            Goal
            <input
              className="rounded-xl border p-3"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </label>
        </div>
      </section>

      <section className="mt-6 grid gap-6">
        <Output title="Suggested Slug / File" text={`${output.slug}\n\n${output.nextFile}`} />
        <Output title="Website Blog Post" text={output.websitePost} />
        <Output title="Facebook Post" text={output.facebook} />
        <Output title="Instagram Caption" text={output.instagram} />
        <Output title="Google Business Profile Post" text={output.google} />
        <Output title="Short Video / Reel Script" text={output.video} />
      </section>
    </main>
  );
}

function Output({ title, text }: { title: string; text: string }) {
  async function copy() {
    await navigator.clipboard.writeText(text);
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-black">{title}</h2>
        <button
          onClick={copy}
          className="rounded-xl bg-red-700 px-5 py-3 font-black text-white"
        >
          Copy
        </button>
      </div>

      <pre className="mt-5 whitespace-pre-wrap rounded-2xl bg-slate-100 p-5 text-sm leading-6 text-slate-800">
        {text}
      </pre>
    </div>
  );
}
