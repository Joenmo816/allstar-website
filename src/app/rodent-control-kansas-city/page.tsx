import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Rodent Control Kansas City | Mouse and Rat Prevention",
  description: "Rodents can damage insulation, contaminate areas, chew wiring, and create repeat problems if entry points are not addressed.",
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Rodent Control Kansas City | Mouse and Rat Prevention"
      eyebrow="Rodent Control"
      description="Rodents can damage insulation, contaminate areas, chew wiring, and create repeat problems if entry points are not addressed."
      sections={[
        { heading: "Rodent Control Requires More Than Bait", body: ["A real rodent program looks at entry points, sanitation issues, nesting areas, activity patterns, and long-term prevention.","Throwing bait around without identifying how rodents are getting inside is not a real solution."] },
    { heading: "Common Entry Areas", body: ["Garage doors, utility penetrations, foundation gaps, crawlspaces, vents, and poorly sealed exterior openings are common access points.","All Star Pest Solutions helps identify likely access areas and reduce rodent pressure."] },
    { heading: "Owner-Operated Help", body: ["When you call, you talk directly with the person who understands the job.","No call center runaround."] }
      ]}
    />
  );
}
