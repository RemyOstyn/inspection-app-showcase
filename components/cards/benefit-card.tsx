"use client";

import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  statistic: string;
  statLabel: string;
}

export function BenefitCard({ 
  icon: Icon, 
  title, 
  description, 
  statistic, 
  statLabel 
}: BenefitCardProps) {
  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="pt-2 border-t border-border/50 w-full">
            <div className="text-2xl font-bold text-primary mb-1">
              {statistic}
            </div>
            <div className="text-xs text-muted-foreground font-medium">
              {statLabel}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}