import type { MetadataRoute } from "next";
import { serviceCities } from "@/data/service-cities";

const siteUrl = "https://allstarpestkc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/residential",
    "/commercial",
    "/termite-services",
    "/pest-library",
    "/service-area",
    "/about",
    "/contact",
    "/pricing",
    "/guarantee",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...serviceCities.map((city) => ({
      url: `${siteUrl}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
