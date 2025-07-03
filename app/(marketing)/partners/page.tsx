// COMMENTED OUT - Page disabled for early-stage app positioning
// Uncomment when ready to launch partner program

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners - Coming Soon",
  description: "Partner program is coming soon.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Partners</h1>
        <p className="text-muted-foreground">Coming soon...</p>
      </div>
    </div>
  );
}

/*
Original page content commented out:

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
*/