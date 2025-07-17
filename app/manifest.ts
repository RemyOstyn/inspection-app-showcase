import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ProFieldWork - Offline-First Mobile Inspection Solution',
    short_name: 'ProFieldWork',
    description: 'Transform your field operations with an offline-first inspection platform that works anywhere, syncs seamlessly, and adapts to your business needs.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    orientation: 'portrait',
    scope: '/',
    lang: 'en',
    dir: 'ltr',
    categories: ['business', 'productivity', 'utilities'],
    icons: [
      {
        src: '/images/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/images/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/images/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/images/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    shortcuts: [
      {
        name: 'Schedule Demo',
        short_name: 'Demo',
        description: 'Schedule a personalized demo of ProFieldWork',
        url: '/#contact',
        icons: [
          {
            src: '/images/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      },
      {
        name: 'Features',
        short_name: 'Features',
        description: 'Explore ProFieldWork features',
        url: '/#key-features',
        icons: [
          {
            src: '/images/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    ],
    screenshots: [
      {
        src: '/images/mobile/mobile_dashboard-portrait.webp',
        sizes: '1419x2796',
        type: 'image/webp',
        form_factor: 'narrow',
        label: 'Mobile Dashboard - Manage inspections on the go'
      },
      {
        src: '/images/mobile/mobile_form-portrait.webp', 
        sizes: '1419x2796',
        type: 'image/webp',
        form_factor: 'narrow',
        label: 'Dynamic Form Builder - Customize for any industry'
      },
      {
        src: '/images/web_dashboard.webp',
        sizes: '1424x770',
        type: 'image/webp',
        form_factor: 'wide',
        label: 'Web Dashboard - Comprehensive analytics and management'
      }
    ],
    related_applications: [
      {
        platform: 'webapp',
        url: 'https://www.profieldwork.com/'
      }
    ],
    prefer_related_applications: false,
    display_override: ['standalone', 'minimal-ui', 'browser']
  }
}