import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.allstarpestkc.com";

  const routes = [
    "",
    "/services",
    "/service-area",
    "/pricing",
    "/plans",
    "/pests",
    "/about",
    "/contact",
    "/why-choose-us",
    "/kansas-city",
    "/overland-park",
    "/olathe",
    "/lenexa",
    "/leawood",
    "/raymore",
    "/belton",
    "/spring-hill",
    "/stillwell",
    "/grandview",
    "/harrisonville",
    "/louisburg",
    "/paola",
    "/osawatomie",
    "/cleveland",
    "/drexel",
    "/peculiar",
    "/freeman",
    "/loch-lloyd"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}