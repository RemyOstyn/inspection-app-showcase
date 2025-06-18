"use client";

import { 
  Shield, 
  Zap, 
  CheckCircle, 
  TrendingUp 
} from "lucide-react";
import { BenefitCard } from "@/components/cards/benefit-card";

const benefits = [
  {
    icon: Shield,
    title: "Reduce Operational Risk",
    description: "Eliminate missed inspections and ensure complete data capture with offline-first technology that works anywhere, anytime.",
    statistic: "60%",
    statLabel: "Reduction in missed inspections"
  },
  {
    icon: Zap,
    title: "Increase Efficiency", 
    description: "Streamline your inspection process with smart forms, automated workflows, and instant report generation.",
    statistic: "80%",
    statLabel: "Faster inspection completion"
  },
  {
    icon: CheckCircle,
    title: "Improve Compliance",
    description: "Maintain perfect audit trails with timestamped records, digital signatures, and automated compliance reporting.",
    statistic: "100%",
    statLabel: "Complete audit trail"
  },
  {
    icon: TrendingUp,
    title: "Scale Operations",
    description: "Support unlimited users across multiple locations with enterprise-grade infrastructure that grows with your business.",
    statistic: "1000+",
    statLabel: "Concurrent users supported"
  }
];

export function Benefits() {
  return (
    <section className="py-24">
      <div className="container-wide bg-gradient-to-br from-muted/20 to-muted/30 rounded-3xl py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business Operations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See measurable improvements in efficiency, compliance, and operational excellence 
            with our proven inspection platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              statistic={benefit.statistic}
              statLabel={benefit.statLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}