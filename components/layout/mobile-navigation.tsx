"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ROUTES, APP_NAME } from "@/lib/constants";
import { MenuIcon } from "lucide-react";

const navigationItems = [
  {
    title: "Features",
    href: ROUTES.FEATURES,
  },
  {
    title: "Industries",
    href: ROUTES.INDUSTRIES,
  },
  {
    title: "Pricing",
    href: ROUTES.PRICING,
  },
  {
    title: "Case Studies",
    href: ROUTES.CASE_STUDIES,
  },
  {
    title: "Partners",
    href: ROUTES.PARTNERS,
  },
  {
    title: "Contact",
    href: ROUTES.CONTACT,
  },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeSheet = () => {
    setIsOpen(false);
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
            <SheetClose key={item.title} asChild>
              <Link
                href={item.href}
                onClick={closeSheet}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href && "bg-accent/50"
                )}
              >
                {item.title}
              </Link>
            </SheetClose>
          ))}
          
          <Separator className="my-4" />
          
          <SheetClose asChild>
            <Button asChild className="w-full">
              <Link href={ROUTES.DEMO} onClick={closeSheet}>
                Schedule Demo
              </Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}