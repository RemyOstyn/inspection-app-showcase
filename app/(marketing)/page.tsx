import { MarketingLayout } from "@/components/marketing-layout";
import { Hero } from "@/components/sections/hero";
import { UseCases } from "@/components/sections/use-cases";
import { KeyFeatures } from "@/components/sections/key-features";
import { Benefits } from "@/components/sections/benefits";
import { ContactCTA } from "@/components/sections/contact-cta";
// import { TrustSignals } from "@/components/sections/trust-signals";
// import { Pricing } from "@/components/sections/pricing";
// import { CaseStudies } from "@/components/sections/case-studies";
// import { Integrations } from "@/components/sections/integrations";
import { Metadata } from "next";
import { SocialMeta } from "@/components/seo/social-meta";
import dynamic from "next/dynamic";

// Lazy load ProductShowcase component for better performance
const ProductShowcase = dynamic(
  () => import("@/components/sections/product-showcase").then((mod) => ({ default: mod.ProductShowcase })),
  {
    loading: () => (
      <div className="relative py-24 from-muted/20 to-muted/40">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="h-8 bg-muted rounded w-1/2 mx-auto mb-4 animate-pulse" />
            <div className="h-4 bg-muted rounded w-3/4 mx-auto animate-pulse" />
          </div>
          <div className="h-96 bg-muted rounded animate-pulse" />
        </div>
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "ProFieldWork - Offline Inspection Software",
  description: "Transform field operations with offline-first inspection software. Custom forms, mobile platform, and white-label solutions. Start free trial today.",
  keywords: ["offline inspection app", "field inspection software", "mobile inspection platform", "custom inspection forms", "white label inspection software"],
  alternates: {
    canonical: "https://www.profieldwork.com/",
  },
  openGraph: {
    title: "ProFieldWork - Offline Inspection Software",
    description: "Transform field operations with offline-first inspection software. Custom forms, mobile platform, and white-label solutions. Start free trial today.",
    type: "website",
    images: [
      {
        url: "https://www.profieldwork.com/images/social/og/og-homepage.webp",
        width: 1200,
        height: 630,
        alt: "Offline Inspection App - Field Inspection Software with Mobile Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProFieldWork - Offline Inspection Software",
    description: "Transform field operations with offline-first inspection software. Custom forms, mobile platform, and white-label solutions. Start free trial today.",
    images: [
      {
        url: "https://www.profieldwork.com/images/social/twitter/twitter-homepage.webp",
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