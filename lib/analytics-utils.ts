/**
 * Google Analytics utilities for consent management and configuration
 * Uses @next/third-parties for optimized GA4 implementation
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId?: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Check if user has granted analytics consent
 */
export const hasAnalyticsConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const consent = localStorage.getItem('cookie-consent');
  return consent === 'accepted';
};

/**
 * Set user consent for analytics with Consent Mode v2
 * Includes all required parameters for Google Ads compatibility
 */
export const setAnalyticsConsent = (granted: boolean) => {
  if (typeof window === 'undefined' || !window.gtag) {
    // Retry after a short delay if gtag isn't loaded yet
    setTimeout(() => setAnalyticsConsent(granted), 100);
    return;
  }

  try {
    // Update consent with all Consent Mode v2 parameters
    window.gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
      ad_storage: granted ? 'granted' : 'denied',
      ad_user_data: granted ? 'granted' : 'denied',
      ad_personalization: granted ? 'granted' : 'denied',
    });

    // If consent is granted, send a page view to start tracking immediately
    if (granted) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        send_to: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
      });
    }
  } catch (error) {
    // Silently handle errors as requested
    console.debug('Analytics consent update failed:', error);
  }
};

/**
 * Initialize consent state when GA loads
 * Sets default consent state and applies saved preferences
 */
export const initializeConsent = () => {
  if (typeof window === 'undefined' || !window.gtag) return;

  try {
    // Set default consent state (denied by default for GDPR compliance)
    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500, // Wait up to 500ms for consent update
    });

    // Configure GA with privacy-friendly settings
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      anonymize_ip: true, // IP anonymization for GDPR
      send_page_view: true,
      // Enhanced measurement configuration
      enhanced_measurement: {
        scrolls: true,
        outbound_clicks: true,
        site_search: true,
        video_engagement: true,
        file_downloads: true,
        page_changes: true,
        form_interactions: true,
      },
    });

    // Apply saved consent preferences if they exist
    const hasConsent = hasAnalyticsConsent();
    if (hasConsent) {
      setAnalyticsConsent(true);
    }
  } catch (error) {
    // Silently handle errors
    console.debug('Analytics initialization failed:', error);
  }
};

/**
 * Custom hook to check consent status
 */
export const useAnalyticsConsent = () => {
  if (typeof window !== 'undefined') {
    return hasAnalyticsConsent();
  }
  return false;
};