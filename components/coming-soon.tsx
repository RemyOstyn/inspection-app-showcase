"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MarketingLayout } from "@/components/marketing-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Bell, CheckCircle, Clock, Sparkles, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

interface ComingSoonProps {
  title: string;
  description: string;
  expectedDate?: string;
  features?: string[];
  showEmailCapture?: boolean;
}

export function ComingSoon({ 
  title, 
  description, 
  expectedDate, 
  features = [], 
  showEmailCapture = true 
}: ComingSoonProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <MarketingLayout>
      {/* Hero Section with Modern Gradient */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Button variant="ghost" size="sm" asChild className="group cursor-pointer">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Link>
            </Button>
          </motion.div>

          <div className="text-center">
            {/* Animated Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 border border-primary/20"
            >
              <div className="relative">
                <Clock className="h-12 w-12 text-primary" />
                <div className="absolute -inset-1 bg-primary/20 rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium bg-background/50 backdrop-blur-sm border-primary/20">
                <Sparkles className="mr-2 h-4 w-4" />
                Coming Soon
              </Badge>
            </motion.div>

            {/* Title & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            </motion.div>

            {/* Expected Date */}
            {expectedDate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-full border border-primary/20">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Expected launch: <span className="text-primary font-semibold">{expectedDate}</span></span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {features.length > 0 && (
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What to Expect</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here&apos;s what we&apos;re building to make your workflow even better
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-gradient-to-br from-background to-muted/20 border-border/50 hover:border-primary/30 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm leading-relaxed">{feature}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Email Capture Section */}
      {showEmailCapture && (
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-primary/20 backdrop-blur-sm">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Bell className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">Stay in the Loop</CardTitle>
                  <CardDescription className="text-base">
                    Be the first to experience these new features when they launch
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-8"
                    >
                      <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">You&apos;re all set!</h3>
                      <p className="text-muted-foreground">
                        We&apos;ll send you an email as soon as this feature is ready.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                      <div className="flex gap-3">
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="flex-1 h-12 bg-background/50 border-border/50 focus:border-primary"
                        />
                        <Button type="submit" size="lg" className="px-8 cursor-pointer">
                          Notify Me
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground text-center">
                        No spam, just product updates. Unsubscribe anytime.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              While we&apos;re building this feature, explore what&apos;s already available and see how we can help your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group cursor-pointer"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group cursor-pointer"
                onClick={() => {
                  // Scroll to home page since case studies are not available
                  window.location.href = '/';
                }}
              >
                Back to Home
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
}