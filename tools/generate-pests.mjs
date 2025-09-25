// tools/generate-pests.mjs
import fs from "node:fs";
import path from "node:path";

const ROOT   = process.cwd();
const IMGDIR = path.join(ROOT, "public", "images", "pests");
const OUT    = path.join(ROOT, "src", "data", "pests.generated.ts");

const header = `/* AUTO-GENERATED from public/images/pests */
export type Risk = "High" | "Medium" | "Low";
export type Group = "Ant" | "Spider" | "Roach" | "Wasp/Hornet" | "Rodent" | "Termite" | "Other";

export type PestFacts = {
  biology?: string;
  behavior?: string;
  attractant?: string;
  lifecycle?: string;
  signs?: string;
  damage?: string;
  seasonality?: string;
  prevention?: string;
  monitoring?: string;
};

export type Pest = {
  name: string;
  slug: string;
  image: string;
  group: Group;
  risk: Risk;
  description?: string;
  facts?: PestFacts;
};
`;
