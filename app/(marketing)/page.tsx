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
  title: "ProFieldWork - Offline-First Field Inspection Platform | Works Anywhere",
  description: "Transform your field operations with an offline-first inspection platform that works anywhere, syncs seamlessly, and adapts to your business needs. Working demo available.",
  keywords: ["offline inspection app", "field inspection software", "white label inspection platform", "custom form builder app", "offline data collection", "mobile inspection solution"],
  openGraph: {
    title: "ProFieldWork - Offline-First Field Inspection Platform | Works Anywhere",
    description: "Transform your field operations with an offline-first inspection platform that works anywhere, syncs seamlessly, and adapts to your business needs.",
    type: "website",
    images: [
      {
        url: "https://profieldwork.com/images/social/og/og-homepage.png",
        width: 1200,
        height: 630,
        alt: "ProFieldWork - Transform Your Field Operations with Offline-First Mobile Inspection Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProFieldWork - Offline-First Field Inspection Platform | Works Anywhere",
    description: "Transform your field operations with an offline-first inspection platform that works anywhere, syncs seamlessly, and adapts to your business needs.",
    images: [
      {
        url: "https://profieldwork.com/images/social/twitter/twitter-homepage.png",
        alt: "ProFieldWork - Transform Your Field Operations with Offline-First Mobile Inspection Platform",
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