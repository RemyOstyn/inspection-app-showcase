'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { initializeGA4, setAnalyticsConsent, hasAnalyticsConsent } from '@/lib/analytics';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Set initial consent state when gtag is available
    const checkConsent = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const hasConsent = hasAnalyticsConsent();
        setAnalyticsConsent(hasConsent);
      }
    };
    
    // Check immediately and also after a small delay to ensure gtag is loaded
    checkConsent();
    const timeoutId = setTimeout(checkConsent, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  const handleGALoad = () => {
    initializeGA4(measurementId);
    
    // Apply current consent settings
    const hasConsent = hasAnalyticsConsent();
    setAnalyticsConsent(hasConsent);
  };

  if (!measurementId) {
    console.warn('Google Analytics measurement ID not provided');
    return null;
  }

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        onLoad={handleGALoad}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Default consent to denied
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
          });
          
          gtag('js', new Date());
        `}
      </Script>
    </>
  );
}