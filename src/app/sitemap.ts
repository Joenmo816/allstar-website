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
  "/cities/bucyrus-ks",
  "/cities/louisburg-ks",
  "/cities/paola-ks",
  "/cities/osawatomie-ks",
  "/cities/drexel-mo",
  "/cities/cleveland-mo",
  "/cities/freeman-mo",
  "/cities/peculiar-mo",
  "/cities/raymore-mo",
  "/cities/belton-mo",
  "/cities/grandview-mo",
  "/cities/martin-city-mo",
  "/cities/loch-lloyd-mo",
  "/cities/harrisonville-mo",
  "/cities/lees-summit-mo",
  "/cities/raytown-mo",
  "/cities/parkville-mo",
  "/cities/adrian-mo",
  "/cities/archie-mo"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : route.startsWith("/cities") ? 0.8 : 0.9,
  }));
}
