import { APP_NAME, APP_DESCRIPTION, CONTACT } from '@/lib/constants';

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
  url: 'https://www.profieldwork.com',
  logo: 'https://www.profieldwork.com/images/pfw_logo.webp',
  foundingDate: '2024',
  industry: 'Software Development',
  email: CONTACT.EMAIL,
  telephone: CONTACT.PHONE,
  sameAs: [
    // Social links temporarily removed during SEO optimization
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
};

export function generateOrganizationSchema(): string {
  return JSON.stringify(organizationSchema, null, 2);
}