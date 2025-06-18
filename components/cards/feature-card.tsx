'use client'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { 
  CloudOff, 
  FileText, 
  LayoutDashboard, 
  Camera, 
  RefreshCw, 
  Palette 
} from 'lucide-react'
import type { Feature } from '@/data/features'

const iconMap = {
  CloudOff,
  FileText,
  LayoutDashboard,
  Camera,
  RefreshCw,
  Palette,
} as const

interface FeatureCardProps {
  feature: Feature
  className?: string
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  const { title, subtitle, description, icon: iconName, gradient } = feature
  const Icon = iconMap[iconName as keyof typeof iconMap]

  if (!Icon) {
    console.warn(`Icon "${iconName}" not found in iconMap`)
    return null
  }

  return (
    <Card 
      className={cn(
        "group relative overflow-hidden border-0 bg-gradient-to-br from-background/60 via-background/80 to-background/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10",
        className
      )}
    >
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <div className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r transition-transform duration-300 group-hover:scale-110",
              gradient
            )}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {subtitle}
              </p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-5",
          gradient
        )} />
      </CardContent>
    </Card>
  )
}