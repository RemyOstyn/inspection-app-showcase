// Application constants

export const APP_NAME = 'ProFieldWork';
export const APP_DESCRIPTION = 'Transform your field operations with an offline-first inspection platform that works anywhere, syncs seamlessly, and adapts to your business needs.';

// Routes (single page with anchor links)
export const ROUTES = {
  HOME: '/',
  FEATURES: '/#key-features',
  INDUSTRIES: '/#use-cases',
  DEMO: '/#product-showcase',
  CONTACT: '/#contact',
  PRIVACY: '/privacy',
  TERMS: '/terms',
} as const;




// Benefits with core value propositions
export const BENEFITS = [
  {
    id: 'reduce-risk',
    title: 'Reduce Operational Risk',
    benefits: [
      'Eliminate missed inspections',
      'Reliable data capture',
    ],
  },
  {
    id: 'increase-efficiency',
    title: 'Increase Efficiency',
    benefits: [
      'Streamlined inspection process',
      'Instant report generation',
    ],
  },
  {
    id: 'improve-compliance',
    title: 'Improve Compliance',
    benefits: [
      'Complete audit trail',
      'Automated compliance reporting',
    ],
  },
  {
    id: 'scale-operations',
    title: 'Scale Your Operations',
    benefits: [
      'Support unlimited users',
      'Works anywhere',
    ],
  },
] as const;

// Trust signals (commented out - app in development)
// export const TRUST_SIGNALS = {
//   COMPANIES: 'Working demo available',
//   UPTIME: 'Enterprise-grade infrastructure',
//   DATA_LOSS: 'Secure offline-first architecture',
// } as const;

// Pricing tiers
export const PRICING_TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For small teams testing the waters',
    price: 29,
    period: 'month' as const,
    features: [
      'Up to 5 users',
      'Basic form builder',
      'Mobile app access',
      'Cloud storage (5GB)',
      'Email support',
    ],
    cta: 'Start Free Trial',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses',
    price: 79,
    period: 'month' as const,
    isPopular: true,
    features: [
      'Up to 50 users',
      'Advanced form builder',
      'Custom workflows',
      'Cloud storage (50GB)',
      'Analytics dashboard',
      'Priority support',
      'API access',
    ],
    cta: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions with white-labeling',
    price: 0, // Custom pricing
    period: 'month' as const,
    features: [
      'Unlimited users',
      'White-label options',
      'Custom integrations',
      'Unlimited storage',
      'Advanced analytics',
      'Dedicated support',
      'SLA guarantee',
      'On-premise deployment',
    ],
    cta: 'Contact Sales',
  },
] as const;

// Contact information
export const CONTACT = {
  EMAIL: 'contact@profieldwork.com',
  PHONE: '+1 (555) 000-0000',
  ADDRESS: 'Contact us for more information',
} as const;

// Social links
export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/profieldwork',
  LINKEDIN: 'https://linkedin.com/company/profieldwork',
  GITHUB: 'https://github.com/profieldwork',
} as const;

// SEO keywords
export const SEO_KEYWORDS = [
  'offline inspection app',
  'field inspection software',
  'white label inspection platform',
  'custom form builder app',
  'offline data collection',
  'mobile inspection solution',
] as const;

// Animation durations (in milliseconds)
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const;

// Breakpoints (matches Tailwind CSS)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;