"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Navigation } from "./navigation";
import { MobileNavigation } from "./mobile-navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { APP_NAME, ROUTES } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
        isScrolled && "shadow-sm"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href={ROUTES.HOME}
          className="flex items-center space-x-2 font-bold text-xl"
          aria-label={`${APP_NAME} - Home`}
        >
          <div className="h-8 w-8 flex items-center justify-center">
            <Image
              src="/images/pfw_logo.png"
              alt={`${APP_NAME} Logo`}
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="hidden sm:inline-block">{APP_NAME}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Navigation />
        </div>

        {/* CTA Button, Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Button 
            className="hidden sm:inline-flex cursor-pointer"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            aria-label="Request a demo - scroll to contact form"
          >
            Request Demo
          </Button>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}