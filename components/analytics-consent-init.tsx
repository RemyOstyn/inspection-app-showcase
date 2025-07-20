'use client';

import { useEffect } from 'react';
import { initializeAnalyticsConsent } from '@/lib/analytics';

export function AnalyticsConsentInit() {
  useEffect(() => {
    // Initialize consent mode before GA loads
    initializeAnalyticsConsent();
  }, []);

  return null;
}