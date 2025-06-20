"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building2, Sparkles } from "lucide-react"
import { pricingTiers } from "@/data/pricing"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { PricingCard } from "@/components/cards/pricing-card"
import Link from "next/link"

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="py-12 from-muted/20 to-muted/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary">
              Pricing
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Choose the perfect plan for your business
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Start with our flexible pricing options. Scale as you grow. 
              White-label solutions available for enterprise partners.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <Label htmlFor="billing-toggle" className="text-sm font-medium">
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary"
            />
            <Label htmlFor="billing-toggle" className="text-sm font-medium">
              Annual
              <span className="ml-1.5 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                Save 20%
              </span>
            </Label>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <PricingCard 
              key={tier.id} 
              tier={tier} 
              isAnnual={isAnnual}
              index={index}
            />
          ))}
        </div>

        {/* White Label CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
            <div className="relative px-8 py-12 sm:px-12 sm:py-16 text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Custom Pricing for White Label Partners
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Transform our platform into your own branded solution. 
                Get custom pricing, dedicated support, and revenue sharing opportunities.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact?type=partner">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Become a Partner
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/white-label">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground">
            All plans include 24/7 support, regular updates, and data encryption. 
            No setup fees. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}