"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { trackTrialSignup } from "@/lib/analytics"
import type { PricingTier } from "@/data/pricing"

interface PricingCardProps {
  tier: PricingTier
  isAnnual?: boolean
  index?: number
}

export function PricingCard({ tier, isAnnual = false, index = 0 }: PricingCardProps) {
  const price = isAnnual && tier.annualPrice ? tier.annualPrice : tier.price
  const savings = isAnnual && tier.annualPrice && tier.price !== "Custom" 
    ? (parseInt(tier.price) * 12 - parseInt(tier.annualPrice))
    : 0

  const handleCTAClick = () => {
    // Track trial signup for starter and professional plans
    if (tier.id === 'starter' || tier.id === 'professional') {
      trackTrialSignup({
        plan: tier.id as 'starter' | 'professional',
        method: 'pricing_page'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className={cn(
        "relative h-full flex flex-col overflow-hidden transition-all duration-300",
        "hover:shadow-lg hover:-translate-y-1",
        tier.isPopular && "border-primary shadow-lg scale-[1.02]"
      )}>
        {tier.isPopular && (
          <div className="absolute -right-12 top-8 rotate-45 bg-primary px-12 py-1 text-center">
            <span className="text-xs font-semibold text-primary-foreground">
              RECOMMENDED
            </span>
          </div>
        )}
        
        <CardHeader className="space-y-4 p-6">
          <div>
            <h3 className="text-2xl font-bold">{tier.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-baseline">
              {tier.price === "Custom" ? (
                <span className="text-4xl font-bold">Custom</span>
              ) : (
                <>
                  <span className="text-4xl font-bold">${price}</span>
                  <span className="ml-2 text-muted-foreground">/month</span>
                </>
              )}
            </div>
            {isAnnual && savings > 0 && (
              <Badge variant="secondary" className="text-xs">
                Save ${savings}/year
              </Badge>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 p-6 pt-0">
          <ul className="space-y-3">
            {tier.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        
        <CardFooter className="p-6">
          <Button 
            className="w-full" 
            variant={tier.isPopular ? "default" : "outline"}
            size="lg"
            asChild
          >
            <Link href={tier.href} onClick={handleCTAClick}>
              {tier.cta}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}