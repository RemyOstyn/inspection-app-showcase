"use client";
import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { FeatureCard } from '@/components/cards/feature-card'
import { Skeleton } from '@/components/ui/skeleton'
import { features } from '@/data/features'

function FeatureCardSkeleton() {
  return (
    <div className="space-y-4 p-6">
      <div className="flex items-center space-x-3">
        <Skeleton className="h-12 w-12 rounded-xl" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <Skeleton className="h-16 w-full" />
    </div>
  )
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const featureVariants = {
  hidden: (index: number) => ({ 
    opacity: 0, 
    y: 50,
    x: (index % 3 - 1) * 30, // Wave effect based on column position
    scale: 0.95
  }),
  visible: { 
    opacity: 1, 
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 18,
      stiffness: 150
    }
  }
};

function FeaturesGrid() {
  return (
    <motion.div 
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature.id}
          custom={index}
          variants={featureVariants}
        >
          <FeatureCard feature={feature} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export function KeyFeatures() {
  return (
    <section id="key-features" className="relative py-24">
      <div className="container-wide bg-muted/30 rounded-3xl py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Mobile Inspection Platform{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our offline inspection app delivers powerful field inspection software features. 
            Create custom inspection forms, collect data offline, and sync automatically when connected.
          </p>
        </motion.div>

        <Suspense 
          fallback={
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <FeatureCardSkeleton key={i} />
              ))}
            </div>
          }
        >
          <FeaturesGrid />
        </Suspense>
      </div>
    </section>
  )
}