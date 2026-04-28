import type { MetadataRoute } from "next";

const baseUrl = "https://allstarpestkc.com";

const routes = [
  "",
  "/services",
  "/cities",
  "/faqs",
  "/contact",
  "/reviews",
  "/blog",
  "/termite-inspection-kansas-city",
  "/real-estate-termite-inspections-kansas-city",
  "/carpenter-ant-treatment-kansas-city",
  "/ants-kansas-city",
  "/spider-control-kansas-city",
  "/rodent-control-kansas-city",
  "/cockroach-exterminator-kansas-city",
  "/bed-bug-treatment-kansas-city",
  "/mosquito-control-kansas-city",
  "/wasp-control-kansas-city",
  "/flea-treatment-kansas-city",
  "/termite-swarm-season-kansas-city",
  "/ants-inside-walls-termite-risk-kansas-city",
  "/spring-pest-checklist-kansas-city",
  "/cities/overland-park-ks",
  "/cities/belton-mo",
  "/cities/raymore-mo",
  "/cities/lees-summit-mo",
  "/cities/stilwell-ks",
  "/cities/leawood-ks",
  "/cities/louisburg-ks",
  "/cities/harrisonville-mo",
  "/cities/peculiar-mo",
  "/cities/spring-hill-ks",
  "/cities/paola-ks",
  "/cities/cleveland-mo",
  "/cities/martin-city-mo",
  "/cities/loch-lloyd-mo",
  "/cities/bucyrus-ks",
  "/cities/freeman-mo",
  "/cities/drexel-mo"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: ${baseUrl},
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : route.startsWith("/cities") ? 0.8 : 0.9,
  }));
}
