'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { 
  Truck, 
  Building2, 
  Car,
  Heart,
  Wheat,
  HardHat,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import type { UseCase } from '@/data/use-cases'

const iconMap = {
  Truck,
  Building2,
  Car,
  Heart,
  Wheat,
  HardHat,
} as const

interface UseCaseCardProps {
  useCase: UseCase
  className?: string
}

export function UseCaseCard({ useCase, className }: UseCaseCardProps) {
  const { title, subtitle, description, features, icon: iconName, gradient, learnMoreLink } = useCase
  const Icon = iconMap[iconName as keyof typeof iconMap]

  if (!Icon) {
    console.warn(`Icon "${iconName}" not found in iconMap`)
    return null
  }

  return (
    <Card 
      className={cn(
        "group relative overflow-hidden border border-border/50 bg-background/40 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 hover:border-border h-full",
        className
      )}
    >
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex flex-col space-y-6 flex-1">
          {/* Header */}
          <div className="flex items-start space-x-4">
            <div className={cn(
              "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
              gradient
            )}>
              <Icon className="h-7 w-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {subtitle}
              </p>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Features */}
          <div className="space-y-3 flex-1">
            <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="mt-6 pt-4 border-t border-border/50">
            <Button 
              variant="ghost" 
              className="w-full justify-between group-hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a href={learnMoreLink}>
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Hover overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]",
          gradient
        )} />
      </CardContent>
    </Card>
  )
}