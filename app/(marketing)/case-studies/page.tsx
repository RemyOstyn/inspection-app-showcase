// COMMENTED OUT - Page disabled for early-stage app positioning
// Uncomment when ready to add real case studies

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - Coming Soon",
  description: "Case studies are coming soon.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Case Studies</h1>
        <p className="text-muted-foreground">Coming soon...</p>
      </div>
    </div>
  );
}

/*
Original page content commented out:

import { MarketingLayout } from "@/components/marketing-layout";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { caseStudies } from "@/data/case-studies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Real Client Success Stories - InspectionPro",
  description: "See how FreightPlus and other companies have transformed their field operations with our offline-first inspection platform. Real results from real clients.",
  keywords: [
    "case studies",
    "client success stories", 
    "freight inspection software",
    "offline inspection platform",
    "field operation transformation",
    "logistics inspection app",
    "FreightPlus case study"
  ],
  openGraph: {
    title: "Case Studies | Real Client Success Stories - InspectionPro",
    description: "See how FreightPlus and other companies have transformed their field operations with our offline-first inspection platform.",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <MarketingLayout>
      Hero Section
      <section className="pt-12 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        
        <div className="container mx-auto relative z-10 text-center">
          <Badge variant="outline" className="mb-4">Success Stories</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Real Results from Real Clients
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            See how companies across different industries have transformed their field operations 
            with our offline-first inspection platform. These are authentic success stories from our clients.
          </p>
        </div>
      </section>

      Case Studies Grid
      <section className="px-4">
        <div className="container mx-auto">
          {caseStudies.length > 0 ? (
            <>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                {caseStudies.map((study) => (
                  <div key={study.id} className="h-full">
                    <CaseStudyCard caseStudy={study} />
                  </div>
                ))}
              </div>

              Coming Soon Section
              <Card className="bg-muted/20 border-dashed border-2">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Plus className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <CardTitle>More Success Stories Coming Soon</CardTitle>
                  <CardDescription className="max-w-2xl mx-auto">
                    We're working with more amazing clients across various industries. 
                    Their success stories will be featured here as we continue to help businesses 
                    transform their field operations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-6">
                    Interested in becoming our next success story?
                  </p>
                  <Button size="lg" className="cursor-pointer" asChild>
                    <Link href="/contact">
                      Schedule a Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </>
          ) : (
            Fallback for when no case studies exist
            <div className="text-center py-16">
              <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6">
                <Plus className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Case Studies Coming Soon</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                We're working with amazing clients across various industries. 
                Their success stories will be featured here as we help businesses 
                transform their field operations.
              </p>
              <Button size="lg" className="cursor-pointer" asChild>
                <Link href="/demo">
                  Become Our Next Success Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      CTA Section
      <section className="py-24 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Field Operations?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join companies like FreightPlus who have revolutionized their inspection processes 
            with our offline-first platform. See how we can help your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cursor-pointer" asChild>
              <Link href="/demo">
                Schedule Your Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer" asChild>
              <Link href="/contact">
                Discuss Your Needs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
*/