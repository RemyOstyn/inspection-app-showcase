"use client";

import Link from "next/link";
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
import { APP_NAME, ROUTES } from "@/lib/constants";
import { MenuIcon } from "lucide-react";

const navigationItems = [
  {
    title: "Features",
    href: ROUTES.FEATURES,
  },
  {
    title: "Use Cases",
    href: ROUTES.INDUSTRIES,
  },
  {
    title: "Product Demo",
    href: ROUTES.DEMO,
  },
  {
    title: "Contact",
    href: ROUTES.CONTACT,
  },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden cursor-pointer"
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
            <Link
              key={item.title}
              href={item.href}
              onClick={closeSheet}
              className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground text-left cursor-pointer"
            >
              {item.title}
            </Link>
          ))}
          
          <Separator className="my-4" />
          
          <Link
            href={ROUTES.CONTACT}
            onClick={closeSheet}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center cursor-pointer"
          >
            Request Demo
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}