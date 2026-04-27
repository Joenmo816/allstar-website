import type { MetadataRoute } from "next";

const siteUrl = "https://allstarpestkc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/contact",
    "/about",
    "/charts",
    "/services",
    "/termite-inspection-kansas-city",
    "/rodent-control-kansas-city",
    "/spider-control-kansas-city",
    "/cockroach-control-kansas-city",
    "/mosquito-control-kansas-city",
    "/bed-bug-treatment-kansas-city",
    "/kansas-city-pest-control",
    "/overland-park-pest-control",
    "/olathe-pest-control",
    "/leawood-pest-control",
    "/belton-pest-control",
    "/raymore-pest-control",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
