import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Carpenter Ant Treatment Kansas City | Stop Ants Before Wood Damage Spreads",
  description: "Carpenter ants are not just annoying. They can be a sign of moisture problems, damaged wood, and possible hidden termite risk.",
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Carpenter Ant Treatment Kansas City | Stop Ants Before Wood Damage Spreads"
      eyebrow="Carpenter Ant Control"
      description="Carpenter ants are not just annoying. They can be a sign of moisture problems, damaged wood, and possible hidden termite risk."
      sections={[
        { heading: "Carpenter Ants Are a Warning Sign", body: ["Carpenter ants do not eat wood like termites, but they excavate galleries inside damaged or moisture-softened wood.","If they are active inside walls, ceilings, window frames, or structural areas, the source needs to be found — not just sprayed."] },
    { heading: "Why We Recommend Termite Awareness", body: ["Moisture attracts carpenter ants, acrobat ants, and termites. If ants are inside a wall, a termite inspection is a smart move.","All Star Pest Solutions looks at the full picture so you are not just killing ants while missing a bigger hidden issue."] },
    { heading: "Targeted Treatment — Not Guesswork", body: ["We use safe, targeted, modern pest control methods to locate and treat the source of the problem.","No mandatory contracts. No quick-spray nonsense. Real pest solutions."] }
      ]}
    />
  );
}
