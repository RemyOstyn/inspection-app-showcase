"use client";

import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

interface ClientScriptsProps {
  gaId?: string;
  delay?: number;
}

export function ClientScripts({ gaId, delay = 3000 }: ClientScriptsProps) {
  const [shouldLoadScripts, setShouldLoadScripts] = useState(false);
  const [userConsent, setUserConsent] = useState(false);

  useEffect(() => {
    // Check if user has given consent (from cookie consent component)
    const hasConsent = localStorage.getItem('cookie-consent') === 'true';
    setUserConsent(hasConsent);

    if (!hasConsent) {
      return;
    }

    // Delay loading scripts
    const timer = setTimeout(() => {
      setShouldLoadScripts(true);
    }, delay);

    // Also load on user interaction
    const handleUserInteraction = () => {
      setShouldLoadScripts(true);
      clearTimeout(timer);
    };

    // Listen for user interactions
    const events = ['click', 'scroll', 'keydown', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    return () => {
      clearTimeout(timer);
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [delay, userConsent]);

  // Listen for consent changes
  useEffect(() => {
    const handleStorageChange = () => {
      const hasConsent = localStorage.getItem('cookie-consent') === 'true';
      setUserConsent(hasConsent);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (!userConsent || !shouldLoadScripts || !gaId) {
    return null;
  }

  return <GoogleAnalytics gaId={gaId} />;
}