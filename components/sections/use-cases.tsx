'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { UseCaseCard } from '@/components/cards/use-case-card'
import { Skeleton } from '@/components/ui/skeleton'
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useCases } from '@/data/use-cases'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
    rotateX: -20
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 120,
      mass: 1
    }
  }
};

function UseCaseCardSkeleton() {
  return (
    <div className="space-y-6 p-6 h-[400px]">
      <div className="flex items-start space-x-4">
        <Skeleton className="h-14 w-14 rounded-2xl" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
      <Skeleton className="h-16 w-full" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-24" />
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  )
}

function UseCasesGrid() {
  return (
    <motion.div 
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {useCases.map((useCase) => (
        <motion.div
          key={useCase.id}
          variants={itemVariants}
        >
          <UseCaseCard useCase={useCase} />
        </motion.div>
      ))}
    </motion.div>
  )
}

function UseCasesCarousel() {
  return (
    <div className="md:hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {useCases.map((useCase) => (
            <CarouselItem key={useCase.id} className="pl-2 md:pl-4 basis-[85%] sm:basis-[70%]">
              <UseCaseCard useCase={useCase} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  )
}

export function UseCases() {
  return (
    <section id="use-cases" className="relative py-24 bg-muted/50">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center rounded-full border border-border/50 bg-background/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-muted-foreground mb-4">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Trusted Across Industries
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
            Field Inspection Software for{' '}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From equipment rentals to healthcare facilities, our offline inspection app adapts to your needs. 
            Deploy custom inspection forms and white label inspection software across any industry for mobile field inspections.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          <Suspense 
            fallback={
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <UseCaseCardSkeleton key={i} />
                ))}
              </div>
            }
          >
            <UseCasesGrid />
          </Suspense>
        </div>

        {/* Mobile Carousel */}
        <Suspense 
          fallback={
            <div className="md:hidden">
              <div className="flex space-x-4 overflow-hidden">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="w-[85%] flex-shrink-0">
                    <UseCaseCardSkeleton />
                  </div>
                ))}
              </div>
            </div>
          }
        >
          <UseCasesCarousel />
        </Suspense>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-2">
            Don&apos;t see your industry? Our field inspection software adapts to any mobile inspection needs.
          </p>
          <p className="text-sm text-primary font-medium mb-6">
            ⚡ Personalized demo ready in 24 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
            >
              Request Demo
            </button>
            {/* <a 
              href="/industries" 
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Explore All Industries
            </a> */}
          </div>
        </div>
      </div>
    </section>
  )
}