"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { handleAnchorNavigation } from "@/lib/navigation-utils";
import { BookOpen, FileText, Users, MessageCircle } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ROUTES } from "@/lib/constants";

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
    title: "Demo",
    href: ROUTES.DEMO,
  },
  {
    title: "Pricing",
    href: ROUTES.PRICING,
  },
  {
    title: "Resources",
    href: ROUTES.RESOURCES,
    hasDropdown: true,
    items: [
      {
        title: "Case Studies",
        href: ROUTES.CASE_STUDIES,
        description: "Real stories from our clients and their success",
        icon: FileText,
      },
      {
        title: "Partners",
        href: ROUTES.PARTNERS,
        description: "White-label program for agencies and resellers",
        icon: Users,
      },
      {
        title: "Contact",
        href: ROUTES.CONTACT,
        description: "Get in touch with our team",
        icon: MessageCircle,
      },
    ],
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.hasDropdown ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-accent/50 focus:bg-accent/50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    pathname.startsWith(item.href) && "bg-accent/50"
                  )}
                >
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <div className="row-span-3">
                      <div className="flex h-full w-full select-none flex-col justify-between rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <BookOpen className="h-6 w-6 text-primary" />
                          </div>
                          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-md">
                            Resources Hub
                          </span>
                        </div>
                        <div>
                          <div className="text-lg font-semibold mb-2">
                            {item.title}
                          </div>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {item.title === "Industries"
                              ? "Discover how our platform serves your industry"
                              : "Everything you need to succeed with our platform. From real client stories to partnership opportunities."}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-1">
                      {item.items?.map((subItem) => (
                        <NavigationMenuLink key={subItem.title} asChild>
                          <Link
                            href={handleAnchorNavigation(subItem.href, pathname)}
                            className="group block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-accent/50 hover:shadow-sm focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className="p-1.5 bg-muted rounded-md group-hover:bg-primary/10 transition-colors">
                                <subItem.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                              </div>
                              <div className="text-sm font-medium leading-none">
                                {subItem.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground ml-8">
                              {subItem.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={handleAnchorNavigation(item.href, pathname)}
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    pathname === item.href && "bg-accent/50"
                  )}
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}