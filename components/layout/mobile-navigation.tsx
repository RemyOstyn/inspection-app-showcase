"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { APP_NAME } from "@/lib/constants";
import { MenuIcon } from "lucide-react";

const navigationItems = [
  {
    title: "Features",
    href: "#key-features",
  },
  {
    title: "Use Cases",
    href: "#use-cases",
  },
  {
    title: "Product Demo",
    href: "#product-showcase",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => {
    setIsOpen(false);
  };

  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeSheet();
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">{APP_NAME}</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 flex flex-col space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.title}
              onClick={() => handleSmoothScroll(item.href)}
              className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground text-left"
            >
              {item.title}
            </button>
          ))}
          
          <Separator className="my-4" />
          
          <button
            onClick={() => handleSmoothScroll('#contact')}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Request Demo
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}