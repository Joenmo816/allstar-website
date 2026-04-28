import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Spider Control Kansas City | Reduce Spiders Around Your Home",
  description: "All Star Pest Solutions helps Kansas City area homeowners reduce spiders by treating harborage areas, entry points, webs, and the insects spiders feed on.",
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Spider Control Kansas City | Reduce Spiders Around Your Home"
      eyebrow="Spider Control"
      description="All Star Pest Solutions helps Kansas City area homeowners reduce spiders by treating harborage areas, entry points, webs, and the insects spiders feed on."
      sections={[
        { heading: "Why Spiders Keep Coming Back", body: ["Spiders usually show up where there is food, shelter, and access. That means other insects may also be active around the home.","A good spider service targets webs, cracks, exterior hiding spots, garage areas, basement areas, and pest activity that attracts spiders."] },
    { heading: "Kansas City Spider Pressure", body: ["Warm weather, landscaping, porch lights, cluttered garages, basements, and foundation gaps can all increase spider activity.","We focus on prevention and reduction instead of only knocking down visible webs."] },
    { heading: "Safe, Practical Service", body: ["Our treatments are designed to be effective while staying mindful of families, pets, and pollinators.","We protect homes the smart way."] }
      ]}
    />
  );
}
