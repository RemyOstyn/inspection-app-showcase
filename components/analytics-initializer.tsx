'use client';

import { useEffect } from 'react';
import { initializeConsent } from '@/lib/analytics-utils';

export function AnalyticsInitializer() {
  useEffect(() => {
    // Initialize consent when the component mounts
    const timer = setTimeout(() => {
      initializeConsent();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}