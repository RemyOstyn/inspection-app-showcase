// Application constants

export const APP_NAME = 'InspectionPro';
export const APP_DESCRIPTION = 'Transform your field operations with an offline-first inspection platform that works anywhere, syncs seamlessly, and adapts to your business needs.';

// Routes
export const ROUTES = {
  HOME: '/',
  FEATURES: '/features',
  INDUSTRIES: '/industries',
  PRICING: '/pricing',
  DEMO: '/demo',
  CONTACT: '/contact',
  RESOURCES: '/resources',
  PARTNERS: '/partners',
  CASE_STUDIES: '/case-studies',
  PRIVACY: '/privacy',
  TERMS: '/terms',
} as const;

// Industry routes
export const INDUSTRY_ROUTES = {
  EQUIPMENT_RENTAL: '/industries/equipment-rental',
  PROPERTY_MANAGEMENT: '/industries/property-management',
  FLEET_MANAGEMENT: '/industries/fleet-management',
  HEALTHCARE: '/industries/healthcare',
  AGRICULTURE: '/industries/agriculture',
  CONSTRUCTION: '/industries/construction',
} as const;

// Features
export const FEATURES = [
  {
    id: 'offline-first',
    title: 'Never Lose Data Again',
    description: 'Offline-first architecture ensures your data is always safe',
    icon: 'shield-check',
  },
  {
    id: 'custom-forms',
    title: 'Your Forms, Your Way',
    description: 'Dynamic form builder adapts to any workflow',
    icon: 'form-input',
  },
  {
    id: 'real-time-dashboard',
    title: 'See Everything, Everywhere',
    description: 'Real-time dashboard provides instant insights',
    icon: 'dashboard',
  },
  {
    id: 'media-capture',
    title: 'Pictures Tell the Story',
    description: 'Capture and manage photos, videos, and documents',
    icon: 'camera',
  },
  {
    id: 'smart-sync',
    title: 'Always In Sync',
    description: 'Intelligent synchronization when connectivity returns',
    icon: 'refresh-cw',
  },
  {
    id: 'white-label',
    title: 'Your Brand, Not Ours',
    description: 'Complete white-label customization options',
    icon: 'palette',
  },
] as const;

// Industries
export const INDUSTRIES = [
  {
    id: 'equipment-rental',
    name: 'Equipment Rental',
    slug: 'equipment-rental',
    description: 'Streamline pre/post rental inspections and damage documentation',
    icon: 'truck',
    useCases: [
      'Pre/post rental inspections',
      'Damage documentation',
      'Maintenance tracking',
    ],
  },
  {
    id: 'property-management',
    name: 'Property Management',
    slug: 'property-management',
    description: 'Efficient move-in/out inspections and maintenance requests',
    icon: 'building',
    useCases: [
      'Move-in/move-out inspections',
      'Maintenance requests',
      'Safety compliance checks',
    ],
  },
  {
    id: 'fleet-management',
    name: 'Fleet Management',
    slug: 'fleet-management',
    description: 'Comprehensive vehicle condition reports and driver inspections',
    icon: 'car',
    useCases: [
      'Vehicle condition reports',
      'Driver inspections',
      'Incident documentation',
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare Facilities',
    slug: 'healthcare',
    description: 'Equipment maintenance logs and compliance audits',
    icon: 'heart-pulse',
    useCases: [
      'Equipment maintenance logs',
      'Safety inspections',
      'Compliance audits',
    ],
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    slug: 'agriculture',
    description: 'Crop inspections and quality assessments',
    icon: 'wheat',
    useCases: [
      'Crop inspections',
      'Equipment checks',
      'Quality assessments',
    ],
  },
  {
    id: 'construction',
    name: 'Construction',
    slug: 'construction',
    description: 'Site safety inspections and progress documentation',
    icon: 'hard-hat',
    useCases: [
      'Site safety inspections',
      'Equipment condition',
      'Progress documentation',
    ],
  },
] as const;

// Benefits with metrics
export const BENEFITS = [
  {
    id: 'reduce-risk',
    title: 'Reduce Operational Risk',
    metrics: [
      '60% reduction in missed inspections',
      'Zero data loss guarantee',
    ],
  },
  {
    id: 'increase-efficiency',
    title: 'Increase Efficiency',
    metrics: [
      '80% faster inspection completion',
      'Instant report generation',
    ],
  },
  {
    id: 'improve-compliance',
    title: 'Improve Compliance',
    metrics: [
      '100% audit trail',
      'Automated compliance reporting',
    ],
  },
  {
    id: 'scale-operations',
    title: 'Scale Your Operations',
    metrics: [
      'Support 1000+ concurrent users',
      'Works in 50+ countries',
    ],
  },
] as const;

// Trust signals
export const TRUST_SIGNALS = {
  COMPANIES: '500+ companies worldwide',
  INSPECTIONS: '10 million+ inspections completed',
  UPTIME: '99.9% uptime for 3 years',
  DATA_LOSS: 'Zero data loss incidents',
} as const;

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
  EMAIL: 'hello@inspectionpro.com',
  PHONE: '+1 (555) 123-4567',
  ADDRESS: '123 Tech Street, San Francisco, CA 94105',
} as const;

// Social links
export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/inspectionpro',
  LINKEDIN: 'https://linkedin.com/company/inspectionpro',
  GITHUB: 'https://github.com/inspectionpro',
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