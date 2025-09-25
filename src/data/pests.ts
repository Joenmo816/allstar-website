/**
 * Adapter to normalize exports from ./pests.generated
 * Some generators export PESTS (all caps). We alias to `pests` here.
 */

import { PESTS } from "./pests.generated";

// If your generator also exports types or helpers, import them here:
// import type { Pest } from "./pests.generated";
// import { getPest as generatedGetPest } from "./pests.generated";

// Type for a pest entry (fallback if the generator didn't export one)
export type Pest = {
  slug: string;
  name: string;
  [key: string]: any;
};

// Re-export a normalized `pests` constant
export const pests: Pest[] = (PESTS as unknown as Pest[]);

// Provide getPest: use generated one if it exists; otherwise derive it.
export function getPest(slug: string): Pest | undefined {
  // @ts-ignore - if a generated getPest exists, prefer it
  if (typeof (globalThis as any).__generatedGetPest === "function") {
    // Not actually used unless you wire it; leaving for clarity
  }
  return pests.find((p) => p.slug === slug);
}

// Re-export defaults for convenience
export default pests;
