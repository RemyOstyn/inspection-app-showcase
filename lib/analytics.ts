/**
 * Google Analytics 4 tracking utilities
 * Uses @next/third-parties for optimized event tracking
 */

import { sendGAEvent } from '@next/third-parties/google';

// Analytics types
export interface ConversionEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}

export interface DemoRequestData {
  industry?: string;
  company?: string;
  plan?: string;
}

export interface TrialSignupData {
  plan: 'starter' | 'professional';
  method?: string;
}


/**
 * Track demo request conversion
 */
export const trackDemoRequest = (data?: DemoRequestData) => {
  try {
    sendGAEvent('event', 'demo_request', {
      event_category: 'conversion',
      event_label: data?.industry || 'unknown',
      industry: data?.industry,
      company: data?.company,
      plan: data?.plan,
    });
  } catch {
    // Silently handle errors
  }
};

/**
 * Track trial signup conversion
 */
export const trackTrialSignup = (data: TrialSignupData) => {
  try {
    sendGAEvent('event', 'trial_signup', {
      event_category: 'conversion',
      event_label: data.plan,
      plan: data.plan,
      method: data.method || 'pricing_page',
    });
  } catch {
    // Silently handle errors
  }
};

/**
 * Track contact form submission
 */
export const trackContactFormSubmit = (data?: { industry?: string; type?: string }) => {
  try {
    sendGAEvent('event', 'contact_form_submit', {
      event_category: 'conversion',
      event_label: data?.type || 'contact',
      industry: data?.industry,
      form_type: data?.type,
    });
  } catch {
    // Silently handle errors
  }
};

/**
 * Track newsletter subscription
 */
export const trackNewsletterSignup = (data?: { source?: string }) => {
  try {
    sendGAEvent('event', 'newsletter_signup', {
      event_category: 'engagement',
      event_label: data?.source || 'footer',
      source: data?.source || 'footer',
    });
  } catch {
    // Silently handle errors
  }
};

