"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  APP_NAME, 
  ROUTES, 
  INDUSTRY_ROUTES, 
  CONTACT, 
  SOCIAL_LINKS, 
  TRUST_SIGNALS 
} from "@/lib/constants";
import { 
  Mail, 
  Phone, 
  MapPin, 
  X, 
  Linkedin, 
  Github,
  Shield,
  Award,
  Lock,
  CheckCircle
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const productLinks = [
    { name: "Features", href: ROUTES.FEATURES },
    { name: "Pricing", href: ROUTES.PRICING },
    { name: "Demo", href: ROUTES.DEMO },
    { name: "Case Studies", href: ROUTES.CASE_STUDIES },
    { name: "White Label", href: ROUTES.PARTNERS },
  ];

  const industryLinks = [
    { name: "Equipment Rental", href: INDUSTRY_ROUTES.EQUIPMENT_RENTAL },
    { name: "Property Management", href: INDUSTRY_ROUTES.PROPERTY_MANAGEMENT },
    { name: "Fleet Management", href: INDUSTRY_ROUTES.FLEET_MANAGEMENT },
    { name: "Healthcare", href: INDUSTRY_ROUTES.HEALTHCARE },
    { name: "Agriculture", href: INDUSTRY_ROUTES.AGRICULTURE },
    { name: "Construction", href: INDUSTRY_ROUTES.CONSTRUCTION },
  ];

  const resourceLinks = [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api-docs" },
    { name: "Blog", href: "/blog" },
    { name: "Help Center", href: "/help" },
    { name: "Community", href: "/community" },
    { name: "Status", href: "/status" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: ROUTES.PRIVACY },
    { name: "Terms of Service", href: ROUTES.TERMS },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ];

  const trustSignals = [
    { icon: Shield, label: "SOC 2 Type II", description: "Security certified" },
    { icon: Lock, label: "GDPR Compliant", description: "Privacy protected" },
    { icon: Award, label: "ISO 27001", description: "Quality assured" },
    { icon: CheckCircle, label: "99.9% Uptime", description: "Always available" },
  ];

  const socialLinks = [
    { name: "X (Twitter)", href: SOCIAL_LINKS.TWITTER, icon: X },
    { name: "LinkedIn", href: SOCIAL_LINKS.LINKEDIN, icon: Linkedin },
    { name: "GitHub", href: SOCIAL_LINKS.GITHUB, icon: Github },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Field Operations Insights
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on offline-first technology, industry best practices, 
              and product announcements delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" disabled={isSubscribed}>
                {isSubscribed ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" />
                    Subscribe
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IP</span>
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
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href={`tel:${CONTACT.PHONE}`} className="hover:text-foreground transition-colors">
                  {CONTACT.PHONE}
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

          {/* Resources */}
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

        {/* Trust Signals */}
        <div className="mb-12">
          <h4 className="font-semibold mb-6 text-center">Trusted by businesses worldwide</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="text-center p-4 rounded-lg border bg-card">
                <signal.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="font-medium text-sm">{signal.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{signal.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">
                {TRUST_SIGNALS.COMPANIES.split(' ')[0]}
              </div>
              <div className="text-sm text-muted-foreground">Companies Worldwide</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">
                {TRUST_SIGNALS.INSPECTIONS.split(' ')[0]}
              </div>
              <div className="text-sm text-muted-foreground">Inspections Completed</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">
                {TRUST_SIGNALS.UPTIME.split(' ')[0]}
              </div>
              <div className="text-sm text-muted-foreground">Uptime Reliability</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">Zero</div>
              <div className="text-sm text-muted-foreground">Data Loss Incidents</div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}