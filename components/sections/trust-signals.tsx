"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Award, 
  CheckCircle, 
  Database,
  Cloud,
  Smartphone,
  Server
} from "lucide-react";
import { TRUST_SIGNALS } from "@/lib/constants";

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: (index: number) => ({ 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 100,
      delay: index * 0.1 // Professional staggered reveal
    }
  })
};

interface AnimatedNumberProps {
  value: string;
  duration?: number;
}

function AnimatedNumber({ value, duration = 2000 }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { 
    once: true,
    amount: 0.5
  });
  
  useEffect(() => {
    // Only animate when in view and hasn't animated before
    if (!inView || hasAnimated) return;
    
    // Extract numeric value from string, supporting decimals (e.g., "99.9%" -> 99.9, "500+" -> 500)
    const numericMatch = value.match(/[\d.]+/);
    const numericValue = numericMatch ? parseFloat(numericMatch[0]) : NaN;
    
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }
    
    const startTime = Date.now();
    const startValue = 0;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (numericValue - startValue) * easeOutQuart;
      
      // Preserve original formatting and decimal places if present
      const suffix = value.replace(/[\d.]+/g, '').replace(/\s+/g, '');
      const hasDecimal = value.includes('.');
      const formattedValue = hasDecimal ? currentValue.toFixed(1) : Math.floor(currentValue).toString();
      setDisplayValue(`${formattedValue}${suffix}`);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };
    
    const timer = setTimeout(animate, 100);
    return () => clearTimeout(timer);
  }, [value, duration, inView, hasAnimated]);
  
  return <span ref={ref}>{displayValue}</span>;
}

const securityBadges = [
  {
    icon: Shield,
    label: "SOC 2 Type II",
    description: "Security certified"
  },
  {
    icon: Lock,
    label: "GDPR Compliant", 
    description: "Privacy protected"
  },
  {
    icon: Award,
    label: "ISO 27001",
    description: "Quality assured"
  },
  {
    icon: CheckCircle,
    label: "HIPAA Ready",
    description: "Healthcare compliant"
  }
];

const techStack = [
  {
    icon: Smartphone,
    label: "React Native",
    description: "Cross-platform mobile"
  },
  {
    icon: Database,
    label: "PostgreSQL",
    description: "Enterprise database"
  },
  {
    icon: Cloud,
    label: "AWS",
    description: "Cloud infrastructure"
  },
  {
    icon: Server,
    label: "Node.js",
    description: "Scalable backend"
  }
];

const statistics = [
  {
    value: TRUST_SIGNALS.COMPANIES.split(' ')[0],
    label: "Companies Worldwide",
    description: "Trust our platform"
  },
  {
    value: TRUST_SIGNALS.INSPECTIONS.split(' ')[0],
    label: "Inspections Completed",
    description: "Proven at scale"
  },
  {
    value: TRUST_SIGNALS.UPTIME.split(' ')[0],
    label: "Uptime Reliability",
    description: "For 3 years running"
  },
  {
    value: "Zero",
    label: "Data Loss Incidents",
    description: "100% data protection"
  }
];

export function TrustSignals() {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container-wide">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
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
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of companies using our platform with enterprise-grade security and proven reliability.
          </p>
        </motion.div>

        {/* Hero Statistics */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={cardContainerVariants}
          >
            {statistics.map((stat, index) => (
              <motion.div key={index} custom={index} variants={cardVariants}>
                <div className="text-center bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <AnimatedNumber value={stat.value} />
                  </div>
                  <div className="font-medium text-sm text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Security & Compliance */}
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground mb-4">Security & Compliance</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {securityBadges.map((badge, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-background/30 backdrop-blur-sm border border-border/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground mb-4">Built with Enterprise Technology</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {techStack.map((tech, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-background/30 backdrop-blur-sm border border-border/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <tech.icon className="w-4 h-4 text-foreground" />
                  <span className="text-sm font-medium text-foreground">{tech.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}