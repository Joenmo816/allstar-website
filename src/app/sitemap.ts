import { pests } from "@/data/pests";
import { cities } from "@/data/cities";

export default function sitemap() {

const baseUrl = "https://www.allstarpestkc.com";

const pages = [];

// Homepage
pages.push({
url: `${baseUrl}`,
lastModified: new Date(),
});

// Pest library index
pages.push({
url: `${baseUrl}/pest-library`,
lastModified: new Date(),
});

// Pest + City pages
for (const pest of pests) {
for (const city of cities) {

pages.push({
url: `${baseUrl}/pest-library/${pest}/${city}`,
lastModified: new Date(),
});

}
}

return pages;
}