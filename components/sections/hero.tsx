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
    <section className="relative min-h-[90vh] md:min-h-[90vh] sm:min-h-[80vh] overflow-hidden pb-12">
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] py-12 sm:py-16 md:py-20">
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

            {/* Mobile dashboard preview */}
            <div className="block sm:hidden mt-8">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 shadow-lg border border-border/50">
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Inspection Dashboard</h3>
                        <p className="text-xs text-muted-foreground">Real-time overview</p>
                      </div>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between items-center">
                        <span>Demo Inspections</span>
                        <span className="font-semibold">5</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Forms Available</span>
                        <span className="font-semibold">3</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Sync Status</span>
                        <span className="text-primary font-semibold">✓ Online</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="relative hidden sm:block">
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
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - better mobile positioning */}
        <div className="absolute bottom-2 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <Link
            href="#key-features"
            className="group flex flex-col items-center gap-1 sm:gap-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Scroll to features"
          >
            <span className="text-xs sm:text-sm">Explore Features</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}