import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Mosquito Control Kansas City | Yard Mosquito Treatments",
  description: "Enjoy your yard again with mosquito service from a locally owned Kansas City pest control company.",
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Mosquito Control Kansas City | Yard Mosquito Treatments"
      eyebrow="Mosquito Control"
      description="Enjoy your yard again with mosquito service from a locally owned Kansas City pest control company."
      sections={[
        { heading: "Mosquitoes Breed Fast", body: ["Standing water, shaded landscaping, gutters, buckets, bird baths, dense vegetation, and low areas can all increase mosquito activity.","A good mosquito service combines treatment with reducing breeding conditions around the property."] },
    { heading: "Protect Your Outdoor Space", body: ["Mosquito control helps make patios, decks, yards, and outdoor events more comfortable.","We focus on common resting and breeding areas to reduce activity around the home."] },
    { heading: "Pollinator-Conscious Service", body: ["All Star Pest Solutions believes in protecting homes while being mindful of bees and beneficial insects.","We use smart, targeted treatment practices."] }
      ]}
    />
  );
}
