import { MarketingLayout } from "@/components/marketing-layout";
import { Hero } from "@/components/sections/hero";
import { UseCases } from "@/components/sections/use-cases";
import { KeyFeatures } from "@/components/sections/key-features";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Benefits } from "@/components/sections/benefits";
import { ContactCTA } from "@/components/sections/contact-cta";
// import { TrustSignals } from "@/components/sections/trust-signals";
// import { Pricing } from "@/components/sections/pricing";
// import { CaseStudies } from "@/components/sections/case-studies";
// import { Integrations } from "@/components/sections/integrations";
import { Metadata } from "next";
import { SocialMeta } from "@/components/seo/social-meta";

export const metadata: Metadata = {
  title: "Offline Inspection App | Field Inspection Software | Mobile Platform",
  description: "Transform field operations with our offline-first inspection software. Custom forms, mobile platform, and white-label solutions for any industry. Start free trial today.",
  keywords: ["offline inspection app", "field inspection software", "mobile inspection platform", "custom inspection forms", "white label inspection software"],
  openGraph: {
    title: "Offline Inspection App | Field Inspection Software | Mobile Platform",
    description: "Transform field operations with our offline-first inspection software. Custom forms, mobile platform, and white-label solutions for any industry. Start free trial today.",
    type: "website",
    images: [
      {
        url: "https://profieldwork.com/images/social/og/og-homepage.png",
        width: 1200,
        height: 630,
        alt: "Offline Inspection App - Field Inspection Software with Mobile Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Offline Inspection App | Field Inspection Software | Mobile Platform",
    description: "Transform field operations with our offline-first inspection software. Custom forms, mobile platform, and white-label solutions for any industry. Start free trial today.",
    images: [
      {
        url: "https://profieldwork.com/images/social/twitter/twitter-homepage.png",
        alt: "Offline Inspection App - Field Inspection Software with Mobile Platform",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <MarketingLayout>
      <SocialMeta page="homepage" />
      <Hero />
      <KeyFeatures />
      <UseCases />
      <ProductShowcase />
      <Benefits />
      <ContactCTA />
      {/* <CaseStudies /> */}
      {/* <Integrations /> */}
      {/* <Pricing /> */}
      {/* <TrustSignals /> */}
    </MarketingLayout>
  );
}