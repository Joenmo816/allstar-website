import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Termite Inspection Kansas City | Protect Your Home Before Damage Starts",
  description: "Termites are a hidden danger. All Star Pest Solutions provides experienced termite inspections for homeowners, real estate transactions, VA loans, FHA loans, and moisture-related pest concerns.",
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Termite Inspection Kansas City | Protect Your Home Before Damage Starts"
      eyebrow="Kansas City Termite Inspections"
      description="Termites are a hidden danger. All Star Pest Solutions provides experienced termite inspections for homeowners, real estate transactions, VA loans, FHA loans, and moisture-related pest concerns."
      sections={[
        { heading: "Termites Hide Before They Cost You Money", body: ["Termites can work silently behind walls, under flooring, around foundations, and inside damaged wood long before a homeowner sees obvious evidence.","In the Kansas City area, moisture, soil contact, crawlspaces, wood debris, and aging structures can all increase termite risk. A professional inspection helps catch warning signs before damage becomes expensive."] },
    { heading: "Seeing Carpenter Ants or Acrobat Ants? Get a Termite Inspection", body: ["Carpenter ants and acrobat ants are often connected to moisture problems inside walls or damaged wood.","Those same moisture conditions can also attract termites. Ants may also prey on termites, which means ant activity in a wall can sometimes be a warning sign that something deeper is going on."] },
    { heading: "Real Estate, VA, and FHA Termite Inspections", body: ["We provide termite inspections for home sales, VA loans, FHA transactions, and real estate closings.","Fast scheduling, honest reporting, and experienced inspection work from a locally owned Kansas City pest control company."] }
      ]}
    />
  );
}
