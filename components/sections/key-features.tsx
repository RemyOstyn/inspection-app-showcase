import { Suspense } from 'react'
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

function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  )
}

export function KeyFeatures() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform delivers powerful features designed for real-world field operations. 
            From offline data collection to seamless synchronization, we&apos;ve got you covered.
          </p>
        </div>

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