export interface Feature {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  gradient: string
}

export const features: Feature[] = [
  {
    id: 'offline-first',
    title: 'Never Lose Data Again',
    subtitle: 'Offline-First Architecture',
    description: 'Work seamlessly without internet connection. All data is stored locally and syncs automatically when you\'re back online.',
    icon: 'CloudOff',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'form-builder',
    title: 'Your Forms, Your Way',
    subtitle: 'Dynamic Form Builder',
    description: 'Create custom inspection forms with our intuitive drag-and-drop builder. No coding required, infinite possibilities.',
    icon: 'FileText',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'dashboard',
    title: 'See Everything, Everywhere',
    subtitle: 'Real-Time Dashboard',
    description: 'Get instant insights with comprehensive analytics. Monitor inspections, track trends, and make data-driven decisions.',
    icon: 'LayoutDashboard',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'media-capture',
    title: 'Pictures Tell the Story',
    subtitle: 'Media Capture & Management',
    description: 'Capture photos, videos, and annotations directly in the app. Document issues with visual evidence that speaks volumes.',
    icon: 'Camera',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'sync',
    title: 'Always In Sync',
    subtitle: 'Intelligent Synchronization',
    description: 'Smart conflict resolution ensures your data is always up-to-date. Automatic background sync keeps teams aligned.',
    icon: 'RefreshCw',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'white-label',
    title: 'Your Brand, Not Ours',
    subtitle: 'White-Label Capabilities',
    description: 'Make it yours with complete branding customization. From logos to color schemes, deliver a seamless brand experience.',
    icon: 'Palette',
    gradient: 'from-pink-500 to-rose-500'
  }
]