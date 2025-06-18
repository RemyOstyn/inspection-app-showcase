import { MarketingLayout } from "@/components/marketing-layout";

export default function HomePage() {
  return (
    <MarketingLayout>
      <section className="py-24 sm:py-32">
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Transform Your Field Operations
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
            Offline-first inspection platform that works anywhere, syncs seamlessly, 
            and adapts to your business needs. Trusted by 500+ companies worldwide.
          </p>
          <div className="flex items-center justify-center gap-x-6">
            <button className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              See It In Action
            </button>
            <button className="text-sm font-semibold leading-6 text-foreground hover:text-primary">
              Explore Use Cases <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}