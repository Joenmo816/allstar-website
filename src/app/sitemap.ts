import type { MetadataRoute } from "next";

const baseUrl = "https://allstarpestkc.com";

const routes = [
  "",
  "/about",
  "/services",
  "/cities",
  "/faqs",
  "/contact",
  "/reviews",
  "/blog",
  "/guarantee",
  "/discounts",
  "/text-a-pest-photo",
  "/general-pest-control-kansas-city",
  "/home-pest-control-kansas-city",
  "/commercial-pest-control-kansas-city",
  "/termite-inspection-kansas-city",
  "/termite-treatment-kansas-city",
  "/ants-kansas-city",
  "/spider-control-kansas-city",
  "/rodent-control-kansas-city",
  "/cockroach-exterminator-kansas-city",
  "/bed-bug-treatment-kansas-city",
  "/mosquito-control-kansas-city",
  "/wasp-control-kansas-city",
  "/flea-treatment-kansas-city",
  "/cities/overland-park-ks",
  "/cities/leawood-ks",
  "/cities/prairie-village-ks",
  "/cities/mission-ks",
  "/cities/shawnee-ks",
  "/cities/lenexa-ks",
  "/cities/olathe-ks",
  "/cities/spring-hill-ks",
  "/cities/stilwell-ks",
  "/cities/louisburg-ks",
  "/cities/belton-mo",
  "/cities/raymore-mo",
  "/cities/peculiar-mo",
  "/cities/harrisonville-mo",
  "/cities/lees-summit-mo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: ${baseUrl},
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : route.startsWith("/cities") ? 0.82 : 0.9,
  }));
}
