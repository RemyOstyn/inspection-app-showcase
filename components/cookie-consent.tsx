"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Settings, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface CookieConsentProps {
  className?: string;
}

export function CookieConsent({ className }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
    // Here you would typically initialize analytics and marketing scripts
    console.log("All cookies accepted");
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    setIsVisible(false);
    // Only essential cookies are used
    console.log("Only essential cookies accepted");
  };

  const handleCustomize = () => {
    setShowDetails(!showDetails);
  };

  const handleClose = () => {
    // Treat closing as accepting essential only
    handleAcceptEssential();
  };

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-50 p-4",
      "bg-background/95 backdrop-blur-sm border-t shadow-lg",
      className
    )}>
      <div className="container mx-auto max-w-6xl">
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Cookie Preferences</h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  We use cookies to enhance your browsing experience, analyze site usage, and assist in our marketing efforts. 
                  By clicking &quot;Accept All&quot;, you consent to our use of cookies.{" "}
                  <a href="/cookies" className="text-primary hover:underline">
                    Learn more about our cookies
                  </a>.
                </p>

                {showDetails && (
                  <div className="mb-4 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium mb-2">Cookie Categories:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span><strong>Essential:</strong> Required for basic website functionality</span>
                        <span className="text-muted-foreground">Always active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span><strong>Functional:</strong> Remember your preferences (theme, etc.)</span>
                        <span className="text-green-600">Recommended</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span><strong>Analytics:</strong> Help us improve the website</span>
                        <span className="text-blue-600">Optional</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span><strong>Marketing:</strong> Personalized advertising</span>
                        <span className="text-blue-600">Optional</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  <Button 
                    onClick={handleAcceptAll}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Accept All Cookies
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={handleAcceptEssential}
                  >
                    Essential Only
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    onClick={handleCustomize}
                    className="text-primary"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    {showDetails ? "Hide Details" : "Customize"}
                  </Button>
                  
                  <a 
                    href="/privacy"
                    className="inline-flex items-center justify-center text-sm font-medium transition-colors hover:text-primary"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="shrink-0"
                aria-label="Close cookie banner"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}