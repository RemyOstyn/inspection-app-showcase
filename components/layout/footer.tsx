"use client";

import Link from "next/link";
import Image from "next/image";
// Button import removed since newsletter functionality was removed
import { Separator } from "@/components/ui/separator";
import { 
  APP_NAME, 
  ROUTES, 
  CONTACT
} from "@/lib/constants";
import { 
  Mail, 
  MapPin
} from "lucide-react";

export function Footer() {

  const productLinks = [
    { name: "Features", href: ROUTES.FEATURES },
    { name: "Demo", href: ROUTES.DEMO },
    { name: "Contact", href: ROUTES.CONTACT },
  ];

  const industryLinks = [
    { name: "Equipment Rental", href: "/#use-cases" },
    { name: "Property Management", href: "/#use-cases" },
    { name: "Fleet Management", href: "/#use-cases" },
    { name: "Healthcare", href: "/#use-cases" },
    { name: "Agriculture", href: "/#use-cases" },
    { name: "Construction", href: "/#use-cases" },
  ];

  const resourceLinks: { name: string; href: string }[] = [
    // Documentation coming soon
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: ROUTES.PRIVACY },
    { name: "Terms of Service", href: ROUTES.TERMS },
    { name: "Cookie Policy", href: "/cookies" },
  ];


  // Social links temporarily removed
  // const socialLinks = [
  //   { name: "X (Twitter)", href: SOCIAL_LINKS.TWITTER, icon: X },
  //   { name: "LinkedIn", href: SOCIAL_LINKS.LINKEDIN, icon: Mail }, // Using Mail as placeholder
  //   { name: "GitHub", href: SOCIAL_LINKS.GITHUB, icon: Mail }, // Using Mail as placeholder
  // ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 flex items-center justify-center">
                <Image
                  src="/images/pfw_logo.webp"
                  alt={`${APP_NAME} Logo`}
                  width={32}
                  height={32}
                  className="object-contain"
                  priority={false}
                  loading="lazy"
                  quality={90}
                />
              </div>
              <span className="font-bold text-lg">{APP_NAME}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Transform your field operations with an offline-first inspection platform 
              that works anywhere, syncs seamlessly, and adapts to your business needs.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${CONTACT.EMAIL}`} className="hover:text-foreground transition-colors">
                  {CONTACT.EMAIL}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>{CONTACT.ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {industryLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - Only show if there are links */}
          {resourceLinks.length > 0 && (
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </div>

          {/* Social Links - Temporarily removed */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Follow us on social media (coming soon)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}