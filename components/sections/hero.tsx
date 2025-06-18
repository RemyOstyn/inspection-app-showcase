"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Field Operations That</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Work Anywhere, Anytime
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Transform your inspections with an offline-first platform that adapts to your business. 
            No connectivity required. Fully customizable. Enterprise-ready.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="min-w-[200px]" asChild>
              <Link href="/demo">
                See It In Action
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px]" asChild>
              <Link href="/use-cases">
                Explore Use Cases
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 text-sm text-muted-foreground">
            <p>Trusted by 500+ companies worldwide</p>
            <p className="mt-2">10 million+ inspections completed</p>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12">
            <Link
              href="#key-features"
              className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Scroll to use cases"
            >
              <span className="text-sm">Discover More</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}