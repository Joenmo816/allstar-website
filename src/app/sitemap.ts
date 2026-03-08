import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {

  const pestsDir = path.join(process.cwd(), "public/images/pests");
  const pestFiles = fs.readdirSync(pestsDir);

  const pestUrls = pestFiles.map((file) => ({
    url: `https://www.allstarpestkc.com/pests/${file.replace(/\.(jpg|jpeg|png)$/i, "")}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://www.allstarpestkc.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.allstarpestkc.com/residential",
      lastModified: new Date(),
    },
    {
      url: "https://www.allstarpestkc.com/commercial",
      lastModified: new Date(),
    },
    {
      url: "https://www.allstarpestkc.com/termite-services",
      lastModified: new Date(),
    },
    ...pestUrls,
  ];
}