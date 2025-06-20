import { MarketingLayout } from "@/components/marketing-layout";
import { Hero } from "@/components/sections/hero";
import { UseCases } from "@/components/sections/use-cases";
import { KeyFeatures } from "@/components/sections/key-features";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Benefits } from "@/components/sections/benefits";
import { TrustSignals } from "@/components/sections/trust-signals";
import { Pricing } from "@/components/sections/pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offline-First Field Inspection Platform | Works Anywhere",
  description: "Transform your field operations with an offline-first inspection platform that works anywhere, syncs seamlessly, and adapts to your business needs. Trusted by 500+ companies worldwide.",
  keywords: ["offline inspection app", "field inspection software", "white label inspection platform", "custom form builder app", "offline data collection", "mobile inspection solution"],
  openGraph: {
    title: "Offline-First Field Inspection Platform | Works Anywhere",
    description: "Transform your field operations with an offline-first inspection platform that works anywhere, syncs seamlessly, and adapts to your business needs.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <MarketingLayout>
      <Hero />
      <KeyFeatures />
      <UseCases />
      <ProductShowcase />
      <Benefits />
      <Pricing />
      <TrustSignals />
    </MarketingLayout>
  );
}