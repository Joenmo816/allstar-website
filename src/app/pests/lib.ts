export type PestDetails = {
  biology?: string;
  lifeCycle?: string;
  habitat?: string;
  behavior?: string;
};

export type Pest = {
  slug: string;
  name: string;
  details?: PestDetails;
};

export const PESTS: Pest[] = [];

export function bySlug(slug: string): Pest | undefined {
  return PESTS.find(p => p.slug === slug);
}

