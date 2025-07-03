"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  CheckCircle, 
  TrendingUp 
} from "lucide-react";
import { BenefitCard } from "@/components/cards/benefit-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: (index: number) => ({ 
    opacity: 0, 
    x: index % 2 === 0 ? -30 : 30, // Subtle alternate slide directions
    y: 20,
    scale: 0.95
  }),
  visible: { 
    opacity: 1, 
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 22,
      stiffness: 120
    }
  }
};

const benefits = [
  {
    icon: Shield,
    title: "Reduce Operational Risk",
    description: "Eliminate missed inspections and ensure complete data capture with offline-first technology that works anywhere, anytime."
  },
  {
    icon: Zap,
    title: "Increase Efficiency", 
    description: "Streamline your inspection process with smart forms, automated workflows, and instant report generation."
  },
  {
    icon: CheckCircle,
    title: "Improve Compliance",
    description: "Maintain perfect audit trails with timestamped records, digital signatures, and automated compliance reporting."
  },
  {
    icon: TrendingUp,
    title: "Scale Operations",
    description: "Support unlimited users across multiple locations with enterprise-grade infrastructure that grows with your business."
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container-wide bg-gradient-to-br from-muted/20 to-muted/30 rounded-3xl py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            type: "spring" as const,
            damping: 25,
            stiffness: 120,
            duration: 0.6
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business Operations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our inspection platform delivers real value 
            to your business operations.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
            >
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}