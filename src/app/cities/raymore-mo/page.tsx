import type { Metadata } from "next";
import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Pest Control Raymore MO | All Star Pest Solutions",
  description:
    "Local pest control in Raymore MO from All Star Pest Solutions. Ants, termites, spiders, rodents, mosquitoes, cockroaches, bed bugs, and more. No mandatory contracts.",
};

export default function Page() {
  return (
    <SeoLandingPage
      title="Pest Control Raymore MO | Local, Experienced, No Contracts"
      eyebrow="Raymore MO Pest Control"
      description="All Star Pest Solutions provides safe, targeted pest control for homeowners and businesses in Raymore MO and the surrounding Kansas City metro."
      sections={[
        {
          heading: "Local Pest Control for Raymore MO",
          body: [
            "All Star Pest Solutions is locally owned and operated with over 30 years of pest control experience.",
            "We help with ants, carpenter ants, spiders, termites, rodents, cockroaches, mosquitoes, bed bugs, wasps, fleas, and other common Kansas City area pest problems."
          ]
        },
        {
          heading: "Termites, Moisture, and Hidden Pest Problems",
          body: [
            "Moisture issues can attract carpenter ants, acrobat ants, and termites. If you are seeing ants inside walls or around damaged wood, do not ignore it.",
            "A termite inspection is strongly recommended when ants are active inside wall voids because termites can remain hidden while damage continues."
          ]
        },
        {
          heading: "Why Homeowners Choose All Star Pest Solutions",
          body: [
            "No mandatory contracts. Veteran and senior discounts. Environmentally responsible treatments. Pollinator-conscious service.",
            "When you call, you speak directly with the owner and technician — not a call center."
          ]
        }
      ]}
      ctaTitle="Need pest control in "
    />
  );
}
