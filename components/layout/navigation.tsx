"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ROUTES, INDUSTRIES } from "@/lib/constants";

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
      description: industry.description,
    })),
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
        description: "See how companies transform their operations",
      },
      {
        title: "Partners",
        href: ROUTES.PARTNERS,
        description: "Join our white-label partner program",
      },
      {
        title: "Contact",
        href: ROUTES.CONTACT,
        description: "Get in touch with our team",
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
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href={item.href}
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            {item.title}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {item.title === "Industries"
                              ? "Discover how our platform serves your industry"
                              : "Explore our resources and partnerships"}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="grid gap-2">
                      {item.items?.map((subItem) => (
                        <NavigationMenuLink key={subItem.title} asChild>
                          <Link
                            href={subItem.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {subItem.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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
                  href={item.href}
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