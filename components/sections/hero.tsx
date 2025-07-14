"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Zap, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { trackDemoRequest } from "@/lib/analytics"

export function Hero() {
  const handleDemoClick = () => {
    trackDemoRequest();
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden pb-12">
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" />
      
      {/* Floating geometric elements - optimized */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-[25%] w-1 h-8 bg-gradient-to-b from-primary/20 to-transparent" />
      </div>

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Trust indicator badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              Working Demo Available
            </div>

            {/* Main headline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-foreground">Offline-First</span>
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Field Inspection Software
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground sm:text-xl max-w-xl">
              The leading offline inspection app for field teams. Create custom inspection forms, 
              capture data without internet, and sync seamlessly. White-label inspection software ready for any industry.
            </p>

            {/* Key benefits */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Mobile Inspection Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>White Label Inspection Software</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Custom Inspection Forms</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="min-w-[180px] bg-primary hover:bg-primary/90 cursor-pointer" asChild>
                <Link href="#contact" onClick={handleDemoClick} aria-label="Request a personalized demo of the inspection platform">
                  Request Demo
                </Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="pt-4 text-sm text-muted-foreground">
              <p className="font-medium">✓ Trusted field inspection software for 20+ industries</p>
              <p className="mt-1">⚡ Offline inspection app demo ready in 1 day</p>
            </div>
          </motion.div>

          {/* Right content - Product preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Placeholder for product screenshot/demo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 shadow-2xl border border-border/50">
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h2 className="font-semibold">Inspection Dashboard</h2>
                        <p className="text-sm text-muted-foreground">Real-time overview</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Demo Inspections</span>
                        <span className="font-semibold">5</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Forms Available</span>
                        <span className="font-semibold">3</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Sync Status</span>
                        <span className="text-primary font-semibold">✓ Online</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements - optimized */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full animate-pulse" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Link
            href="#key-features"
            className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Scroll to features"
          >
            <span className="text-sm">Explore Features</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}