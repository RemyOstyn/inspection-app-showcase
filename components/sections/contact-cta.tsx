"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";

const trustIndicators = [
  {
    icon: CheckCircle,
    text: "Working demo available"
  },
  {
    icon: Clock,
    text: "Setup in 24 hours"
  },
  {
    icon: Shield,
    text: "Enterprise security"
  }
];

export function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 via-background to-muted/20">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {" "}Field Operations?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                See how our offline-first inspection platform can streamline your workflows, 
                reduce operational risk, and scale with your business needs.
              </p>
            </div>

            {/* What you'll get */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What you&apos;ll get in your demo:</h3>
              <ul className="space-y-3">
                {[
                  "Live walkthrough of the mobile app and admin dashboard",
                  "Custom form builder demonstration",
                  "Offline-first capabilities showcase",
                  "White-label customization options",
                  "Integration possibilities for your existing systems",
                  "Pricing tailored to your specific needs"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trustIndicators.map((indicator, index) => {
                const Icon = indicator.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{indicator.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-lg"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Get Your Personalized Demo</h3>
              <p className="text-muted-foreground">
                Fill out the form below and we&apos;ll reach out within 24 hours to schedule 
                a demo tailored to your industry and use case.
              </p>
            </div>
            
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}