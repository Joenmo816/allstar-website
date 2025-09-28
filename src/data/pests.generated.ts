export type Pest = {
  slug: string;
  commonName: string;
  image: string;
  alt: string;
  description?: string;
  biology?: string;
  behavior?: string;
};

export const pests: Pest[] = [];

