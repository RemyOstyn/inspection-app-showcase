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
import { ROUTES, INDUSTRIES, APP_NAME } from "@/lib/constants";
import { MenuIcon, ChevronRightIcon, ChevronDownIcon } from "lucide-react";

const navigationItems = [
  {
    title: "Features",
    href: ROUTES.FEATURES,
  },
  {
    title: "Industries",
    href: ROUTES.INDUSTRIES,
    hasDropdown: true,
    items: INDUSTRIES.map((industry) => ({
      title: industry.name,
      href: `/industries/${industry.slug}`,
    })),
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
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const closeSheet = () => {
    setIsOpen(false);
    setExpandedItems([]);
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
            <div key={item.title}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => toggleExpanded(item.title)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      pathname.startsWith(item.href) && "bg-accent/50"
                    )}
                    aria-expanded={expandedItems.includes(item.title)}
                  >
                    <span>{item.title}</span>
                    {expandedItems.includes(item.title) ? (
                      <ChevronDownIcon className="h-4 w-4" />
                    ) : (
                      <ChevronRightIcon className="h-4 w-4" />
                    )}
                  </button>
                  
                  {expandedItems.includes(item.title) && (
                    <div className="ml-4 mt-2 space-y-2">
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          onClick={closeSheet}
                          className={cn(
                            "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                            pathname === item.href && "bg-accent/50"
                          )}
                        >
                          All {item.title}
                        </Link>
                      </SheetClose>
                      
                      {item.items?.map((subItem) => (
                        <SheetClose key={subItem.title} asChild>
                          <Link
                            href={subItem.href}
                            onClick={closeSheet}
                            className={cn(
                              "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                              pathname === subItem.href && "bg-accent/50"
                            )}
                          >
                            {subItem.title}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <SheetClose asChild>
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
              )}
            </div>
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