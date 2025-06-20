"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/data/case-studies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-2xl line-clamp-2">{caseStudy.title}</CardTitle>
            <CardDescription className="flex items-center gap-2">
              <Badge variant="secondary">{caseStudy.industry}</Badge>
              <span>{caseStudy.company}</span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      {caseStudy.image && (
        <div className="px-6 pb-4">
          <div className="relative h-16 w-full bg-white border rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src={caseStudy.image}
              alt={`${caseStudy.company} logo`}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      )}
      
      <CardContent className="space-y-6 flex-1">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-2">Challenge</h4>
            <p className="text-sm line-clamp-3">{caseStudy.challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-2">Solution</h4>
            <p className="text-sm line-clamp-3">{caseStudy.solution}</p>
          </div>
        </div>
        
        {caseStudy.results.length > 0 && (
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-4">Key Results</h4>
            <div className="grid grid-cols-3 gap-4">
              {caseStudy.results.slice(0, 3).map((result, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-primary">{result.metric}</div>
                  <div className="text-xs text-muted-foreground line-clamp-2">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {caseStudy.testimonial.quote && (
          <blockquote className="border-l-4 border-primary pl-6 py-2 bg-muted/20 rounded-r-lg">
            <p className="italic text-sm mb-2 line-clamp-3">&ldquo;{caseStudy.testimonial.quote}&rdquo;</p>
            <footer className="text-sm text-muted-foreground">
              — {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
            </footer>
          </blockquote>
        )}
      </CardContent>
      
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link href={`/case-studies/${caseStudy.id}`}>
            Read Full Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}