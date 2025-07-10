import Script from 'next/script';
import { generateOrganizationSchema } from '@/lib/schema/organization';

export function OrganizationSchema() {
  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: generateOrganizationSchema(),
      }}
    />
  );
}