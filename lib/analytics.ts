/**
 * Google Analytics utilities for consent management and event tracking
 * Works with @next/third-parties GoogleAnalytics component
 */

import { sendGAEvent } from '@next/third-parties/google';

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId?: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

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
 * Check if user has granted analytics consent
 */
export const hasAnalyticsConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const consent = localStorage.getItem('cookie-consent');
  return consent === 'accepted';
};

/**
 * Set user consent for analytics with Google Consent Mode v2
 */
export const setAnalyticsConsent = (granted: boolean) => {
  if (typeof window === 'undefined') return;

  // Configure Google Consent Mode if gtag is available
  if (window.gtag) {
    try {
      // Update consent with Consent Mode v2 parameters
      window.gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage: granted ? 'granted' : 'denied',
        ad_user_data: granted ? 'granted' : 'denied',
        ad_personalization: granted ? 'granted' : 'denied',
      });

      // Send initial page view if consent is granted
      if (granted) {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    } catch (error) {
      console.debug('Analytics consent update failed:', error);
    }
  }
};

/**
 * Initialize default consent state
 * Should be called before GA loads
 */
export const initializeAnalyticsConsent = () => {
  if (typeof window === 'undefined') return;

  // Set default denied consent state for GDPR compliance
  if (window.gtag) {
    try {
      window.gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        wait_for_update: 500,
      });

      // Check for existing consent and apply it
      const hasConsent = hasAnalyticsConsent();
      if (hasConsent) {
        setAnalyticsConsent(true);
      }
    } catch (error) {
      console.debug('Analytics consent initialization failed:', error);
    }
  }
};

