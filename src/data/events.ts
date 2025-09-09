export type CalEvent = {
  label: string;
  subtitle?: string;
  path: string;      // everything after cal.com/
  duration: string;  // display only
  note?: string;
};

export const EVENTS: CalEvent[] = [
  { label: "Monthly Pest Service", subtitle: "Monthly Pest Service", path: "all-star-pest-solutions/monthly-pest-service", duration: "60m" },
  { label: "Wasp / Yellowjacket Nest Removal", subtitle: "Wasp / Hornet / Yellowjacket removal", path: "all-star-pest-solutions/wasp-yellowjacket-nest-removal", duration: "60m" },
  { label: "Follow-up / Warranty Service", subtitle: "Follow up / Warranty Service", path: "all-star-pest-solutions/follow-up-warranty-service", duration: "60m" },
  { label: "Rodent Inspection & Exclusion", subtitle: "Rodent inspection / Exclusion", path: "all-star-pest-solutions/rodent-inspection-exclusion", duration: "90m" },
  { label: "Bed Bug Inspection", subtitle: "Bed bug visual inspection", path: "all-star-pest-solutions/bed-bug-inspection", duration: "90m" },
  { label: "NPMA-33 Termite Inspection", subtitle: "Real Estate or Home Refinance inspection", path: "all-star-pest-solutions/fha-va-and-real-estate-termite-inspection", duration: "60m" },
  { label: "Quarterly Service", subtitle: "Quarterly pest service", path: "all-star-pest-solutions/quarterly-service", duration: "60m", note: "May require confirmation" },
  { label: "Initial Treatment — General Pests", subtitle: "Initial Service.", path: "all-star-pest-solutions/initial-treatment-general-pests", duration: "90m" },
  { label: "Inspection / Estimate (Residential)", subtitle: "Free Inspection / Estimate with our State certified Pest Inspector", path: "all-star-pest-solutions/inspection-estimate-residential", duration: "60m" },
];
