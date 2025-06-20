export interface PricingTier {
  id: string
  name: string
  description: string
  price: string
  annualPrice?: string
  period: 'month' | 'year'
  features: string[]
  isPopular?: boolean
  cta: string
  href: string
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For small teams testing the waters',
    price: '29',
    annualPrice: '23',
    period: 'month',
    features: [
      'Up to 5 users',
      'Basic form builder',
      'Mobile app access',
      'Cloud storage (5GB)',
      'Email support',
    ],
    cta: 'Start Free Trial',
    href: '/signup?plan=starter',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses',
    price: '79',
    annualPrice: '63',
    period: 'month',
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
    href: '/signup?plan=professional',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions with white-labeling',
    price: 'Custom',
    period: 'month',
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
    href: '/contact?type=enterprise',
  },
]