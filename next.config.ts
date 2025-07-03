import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/case-studies',
        destination: '/',
        permanent: false,
      },
      {
        source: '/partners',
        destination: '/',
        permanent: false,
      },
      {
        source: '/components-test',
        destination: '/',
        permanent: false,
      },
    ]
  },
  // Exclude specific pages from build output
  outputFileTracingExcludes: {
    '*': [
      'app/(marketing)/case-studies/**/*',
      'app/(marketing)/partners/**/*',
      'app/components-test/**/*',
    ],
  },
};

export default nextConfig;
