export type PestDetails = {
  biology?: string;
  lifeCycle?: string;
  habitat?: string;
  behavior?: string;
};

type AnyWithSlug = {
  slug: string;
  details?: Partial<PestDetails>;
} & Record<string, unknown>;

type DetailsMap = Record<string, Partial<PestDetails> | undefined>;

/**
 * Flatten details so your page can access d.biology directly.
 */
export function withAutoDetails<T extends AnyWithSlug>(
  pest: T,
  descriptions?: DetailsMap
): T & PestDetails {
  const fromMap: Partial<PestDetails> = (descriptions && descriptions[pest.slug]) || {};
  const existing: Partial<PestDetails> = pest.details || {};
  const merged: Partial<PestDetails> = { ...fromMap, ...existing };
  return { ...pest, ...merged, details: merged } as T & PestDetails;
}

export function withAutoDetailsList<T extends AnyWithSlug>(
  list: T[],
  descriptions?: DetailsMap
): (T & PestDetails)[] {
  return list.map((p) => withAutoDetails(p, descriptions));
}

// ✅ Named object before default export (fixes warning)
const PestGen = { withAutoDetails, withAutoDetailsList };
export default PestGen;
