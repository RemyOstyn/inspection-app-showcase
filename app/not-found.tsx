import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search, FileQuestion } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | ProFieldWork",
  description: "The page you're looking for doesn't exist. Let us help you find what you need.",
  robots: "noindex, nofollow",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-md text-center">
        {/* 404 Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <FileQuestion className="h-24 w-24 text-muted-foreground/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-primary">404</span>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="mb-4 text-3xl font-bold tracking-tight">
          Page Not Found
        </h1>
        <p className="mb-8 text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>

        {/* Navigation Options */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/case-studies">
              <Search className="mr-2 h-4 w-4" />
              Browse Case Studies
            </Link>
          </Button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 border-t pt-8">
          <h2 className="mb-4 text-lg font-semibold">Helpful Links</h2>
          <div className="grid gap-2 text-sm">
            <Link 
              href="/#features" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Explore Our Features
            </Link>
            <Link 
              href="/#use-cases" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              View Use Cases
            </Link>
            <Link 
              href="/partners" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Partner Program
            </Link>
            <Link 
              href="/#contact" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.history.back()}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}