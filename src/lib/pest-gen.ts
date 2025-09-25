export type PestDetails = { biology?: string; lifeCycle?: string; habitat?: string; behavior?: string; };
type AnyWithSlug = { slug: string; name?: string; details?: Partial<PestDetails>; } & Record<string, unknown>;
type DetailsMap = Record<string, Partial<PestDetails> | undefined>;

export function withAutoDetails<T extends AnyWithSlug>(pest: T, descriptions?: DetailsMap): T & PestDetails {
  const label = pest.name || pest.slug.replace(/[-_]/g, " ");
  const defaults: PestDetails = {
    biology: `${label} is a common household pest in the Kansas City area.`,
    lifeCycle: `${label} activity varies seasonally; service timing interrupts breeding.`,
    habitat: `${label} shelters near foundations/landscaping; we focus on exclusion & barriers.`,
    behavior: `${label} increases with favorable weather; proactive exterior work reduces activity.`
  };
  const fromMap = (descriptions && descriptions[pest.slug]) || {};
  const existing = pest.details || {};
  const merged: PestDetails = { ...defaults, ...fromMap, ...existing };
  return { ...pest, ...merged, details: merged } as T & PestDetails; // flatten + keep details
}
export function withAutoDetailsList<T extends AnyWithSlug>(list: T[], descriptions?: DetailsMap): (T & PestDetails)[] {
  return list.map(p => withAutoDetails(p, descriptions));
}

