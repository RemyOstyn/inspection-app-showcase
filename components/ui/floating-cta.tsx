"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackDemoRequest } from "@/lib/analytics";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling 70% of viewport height
      const scrollY = window.scrollY;
      const triggerHeight = window.innerHeight * 0.7;
      
      if (scrollY > triggerHeight && !isDismissed) {
        setIsVisible(true);
      } else if (scrollY <= triggerHeight) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const handleCTAClick = () => {
    // Track demo request from floating CTA
    trackDemoRequest();
    
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ 
            type: "spring", 
            damping: 25, 
            stiffness: 120 
          }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="bg-background/95 backdrop-blur-sm border border-border/50 rounded-2xl shadow-2xl p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">Working Demo Available</h4>
                <p className="text-xs text-muted-foreground">
                  See our offline-first platform in action • Ready in 1 day
                </p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleDismiss}
                className="h-6 w-6 p-0 hover:bg-muted"
                aria-label="Dismiss demo banner"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
            
            <div className="flex gap-2">
              <Button 
                size="sm" 
                onClick={handleCTAClick}
                className="flex-1"
                aria-label="Request demo - scroll to contact form"
              >
                <Calendar className="w-3 h-3 mr-1" />
                Request Demo
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}