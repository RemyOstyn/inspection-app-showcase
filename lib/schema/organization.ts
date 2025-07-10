import { APP_NAME, APP_DESCRIPTION, CONTACT, SOCIAL_LINKS } from '@/lib/constants';

export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  logo: string;
  foundingDate: string;
  industry: string;
  email: string;
  telephone?: string;
  sameAs: string[];
  address: {
    '@type': string;
    addressCountry: string;
  };
}

export const organizationSchema: OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: APP_NAME,
  description: APP_DESCRIPTION,
  url: 'https://profieldwork.com',
  logo: 'https://profieldwork.com/images/pfw_logo.png',
  foundingDate: '2024',
  industry: 'Software Development',
  email: CONTACT.EMAIL,
  telephone: CONTACT.PHONE,
  sameAs: [
    SOCIAL_LINKS.LINKEDIN,
    SOCIAL_LINKS.TWITTER,
    SOCIAL_LINKS.GITHUB,
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
};

export function generateOrganizationSchema(): string {
  return JSON.stringify(organizationSchema, null, 2);
}