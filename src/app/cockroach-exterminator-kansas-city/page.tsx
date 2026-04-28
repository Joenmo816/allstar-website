import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Cockroach Exterminator Kansas City | Roach Cleanout and Control",
  description: "Cockroaches spread fast. All Star Pest Solutions provides targeted cockroach service for Kansas City area homes and businesses.",
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Cockroach Exterminator Kansas City | Roach Cleanout and Control"
      eyebrow="Cockroach Control"
      description="Cockroaches spread fast. All Star Pest Solutions provides targeted cockroach service for Kansas City area homes and businesses."
      sections={[
        { heading: "Roaches Need Fast Action", body: ["Cockroaches reproduce quickly and can hide inside cabinets, wall voids, kitchens, bathrooms, appliances, and utility areas.","A quick surface spray usually is not enough. Real control requires targeted placement, follow-up strategy, and reducing food, water, and hiding areas."] },
    { heading: "German Roach Cleanouts", body: ["German cockroaches are one of the toughest pests to eliminate without a proper plan.","We use a practical treatment approach designed to attack the infestation where it lives."] },
    { heading: "Residential and Commercial", body: ["We help homeowners, landlords, and small businesses deal with roach problems without unnecessary contracts.","Straight answers. Real work."] }
      ]}
    />
  );
}
