import type { MetadataRoute } from "next";
import { pests } from "@/data/pests";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.allstarpestkc.com";
  const now = new Date();
  const items: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/pest-library`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/resources/spider-chart`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/spider-chart`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];
  pests.forEach(p => {
    items.push({
      url: `${base}/pest-library/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    });
  });
  return items;
}
