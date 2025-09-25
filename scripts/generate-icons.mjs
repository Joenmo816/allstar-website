import favicons from "favicons";
import fs from "fs/promises";
import path from "path";

const source = "public/logo-base.png";   // your PNG logo (square, transparent if possible)
const outputDir = "public";

const configuration = {
  path: "/", // base path used in generated links
  appName: "All Star Pest Solutions",
  appShortName: "AllStar",
  appDescription: "KC’s Bugman — Over 28 Years of Local Experience",
  developerName: "Joe Cusic",
  developerURL: "https://allstarpestkc.com",
  background: "#0d47a1", // royal blue
  theme_color: "#2e7d32", // emerald green
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    favicons: true,
    windows: true,
    yandex: false
  }
};

const response = await favicons(source, configuration);

// write images and files
await Promise.all(response.images.map((i) => fs.writeFile(path.join(outputDir, i.name), i.contents)));
await Promise.all(response.files.map((f) => fs.writeFile(path.join(outputDir, f.name), f.contents)));

// (optional) dump the generated HTML tags into a snippet for reference
await fs.writeFile(path.join(outputDir, "favicons-snippet.html"), response.html.join("\n"));

console.log("✅ Icons generated in /public");