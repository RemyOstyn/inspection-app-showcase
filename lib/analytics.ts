/**
 * Google Analytics 4 tracking utilities
 */

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

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'consent',
      targetId: string,
      parameters?: Record<string, unknown>
    ) => void;
    dataLayer: Record<string, unknown>[];
  }
}

/**
 * Initialize Google Analytics 4
 */
export const initializeGA4 = (measurementId: string) => {
  if (typeof window === 'undefined' || !measurementId) return;

  // Initialize dataLayer if it doesn't exist
  window.dataLayer = window.dataLayer || [];
  
  // Configure GA4
  window.gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

/**
 * Track page views
 */
export const trackPageView = (url: string, title?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'page_view', {
    page_title: title || document.title,
    page_location: url,
  });
};

/**
 * Track demo request conversion
 */
export const trackDemoRequest = (data?: DemoRequestData) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'demo_request', {
    event_category: 'conversion',
    event_label: data?.industry || 'unknown',
    custom_parameters: {
      industry: data?.industry,
      company: data?.company,
      plan: data?.plan,
    },
  });
};

/**
 * Track trial signup conversion
 */
export const trackTrialSignup = (data: TrialSignupData) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'trial_signup', {
    event_category: 'conversion',
    event_label: data.plan,
    custom_parameters: {
      plan: data.plan,
      method: data.method || 'pricing_page',
    },
  });
};

/**
 * Track contact form submission
 */
export const trackContactFormSubmit = (data?: { industry?: string; type?: string }) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'contact_form_submit', {
    event_category: 'conversion',
    event_label: data?.type || 'contact',
    custom_parameters: {
      industry: data?.industry,
      form_type: data?.type,
    },
  });
};

/**
 * Track newsletter subscription
 */
export const trackNewsletterSignup = (data?: { source?: string }) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'newsletter_signup', {
    event_category: 'engagement',
    event_label: data?.source || 'footer',
    custom_parameters: {
      source: data?.source || 'footer',
    },
  });
};

/**
 * Set user consent for analytics cookies
 */
export const setAnalyticsConsent = (granted: boolean) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
    ad_storage: granted ? 'granted' : 'denied',
  });
};

/**
 * Check if user has granted analytics consent
 */
export const hasAnalyticsConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const consent = localStorage.getItem('cookie-consent');
  return consent === 'accepted';
};