import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Bed Bug Treatment Kansas City | Bed Bug Inspection and Service",
  description: "Bed bugs are stressful, but the right inspection and treatment plan can get the problem under control.",
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Bed Bug Treatment Kansas City | Bed Bug Inspection and Service"
      eyebrow="Bed Bug Service"
      description="Bed bugs are stressful, but the right inspection and treatment plan can get the problem under control."
      sections={[
        { heading: "Bed Bugs Are Not a Cleanliness Problem", body: ["Bed bugs can happen anywhere. They travel on furniture, bags, clothing, and shared living spaces.","The key is identifying activity early and treating the right areas."] },
    { heading: "Inspection Matters", body: ["Bed bugs hide in mattress seams, bed frames, furniture, cracks, baseboards, and nearby resting areas.","All Star Pest Solutions provides practical inspection and treatment guidance so you know what is happening and what to do next."] },
    { heading: "Discreet, Local Help", body: ["We understand this is stressful. We handle bed bug concerns professionally and directly.","Call or text and we will help you take the next step."] }
      ]}
    />
  );
}
