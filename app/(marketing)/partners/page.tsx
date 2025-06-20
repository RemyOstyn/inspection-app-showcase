import { ComingSoon } from "@/components/coming-soon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Program - Coming Soon | InspectionPro",
  description: "Join our white-label partner program and transform our platform into your branded solution. Coming soon with revenue sharing opportunities.",
  keywords: [
    "partner program",
    "white label",
    "revenue sharing",
    "inspection platform partners",
    "reseller program"
  ],
};

export default function PartnersPage() {
  return (
    <ComingSoon
      title="Partner Program"
      description="We're building an exclusive white-label partner program that will let you transform our platform into your own branded solution with revenue sharing opportunities."
      expectedDate="Q4 2025"
      features={[
        "White-label the entire platform with your branding",
        "Custom pricing and revenue sharing models",
        "Dedicated partner support and training",
        "Co-marketing opportunities",
        "Priority access to new features",
        "Technical integration support"
      ]}
      showEmailCapture={true}
    />
  );
}