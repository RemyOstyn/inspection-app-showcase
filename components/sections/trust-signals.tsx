"use client";

import { useEffect, useState } from "react";
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
import { Card, CardContent } from "@/components/ui/card";
import { TRUST_SIGNALS } from "@/lib/constants";

interface AnimatedNumberProps {
  value: string;
  duration?: number;
}

function AnimatedNumber({ value, duration = 2000 }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    // Extract numeric value from string (e.g., "500+" -> 500)
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
    
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }
    
    const startTime = Date.now();
    const startValue = 0;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (numericValue - startValue) * easeOutQuart);
      
      // Preserve original formatting
      const suffix = value.replace(/[0-9]/g, '').replace(/\s+/g, '');
      setDisplayValue(`${currentValue}${suffix}`);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    const timer = setTimeout(animate, 100);
    return () => clearTimeout(timer);
  }, [value, duration]);
  
  return <span>{displayValue}</span>;
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
    <section className="py-24 bg-gradient-to-b from-muted/30 to-muted/50">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with enterprise-grade security, proven reliability, and the technology 
            stack that powers mission-critical operations.
          </p>
        </div>

        {/* Statistics */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <AnimatedNumber value={stat.value} />
                  </div>
                  <div className="font-medium text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Badges */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Security & Compliance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityBadges.map((badge, index) => (
              <Card key={index} className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors inline-flex mb-4">
                    <badge.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-medium text-sm mb-1">{badge.label}</div>
                  <div className="text-xs text-muted-foreground">{badge.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">Built with Enterprise Technology</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <Card key={index} className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-muted group-hover:bg-muted/80 transition-colors inline-flex mb-4">
                    <tech.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="font-medium text-sm mb-1">{tech.label}</div>
                  <div className="text-xs text-muted-foreground">{tech.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}