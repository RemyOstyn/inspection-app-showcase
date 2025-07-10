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
    subtitle: 'Offline Inspection App',
    description: 'Our offline inspection app works without internet. Complete field inspections anywhere, store data locally, and sync automatically when connected.',
    icon: 'CloudOff',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'form-builder',
    title: 'Your Forms, Your Way',
    subtitle: 'Custom Inspection Forms',
    description: 'Build custom inspection forms with our drag-and-drop form builder. Create dynamic field inspection software forms tailored to your industry needs.',
    icon: 'FileText',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'dashboard',
    title: 'See Everything, Everywhere',
    subtitle: 'Field Inspection Software Dashboard',
    description: 'Monitor your mobile inspection platform in real-time. Track field inspections, analyze trends, and access comprehensive inspection analytics.',
    icon: 'LayoutDashboard',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'media-capture',
    title: 'Pictures Tell the Story',
    subtitle: 'Mobile Inspection Media Capture',
    description: 'Capture photos and videos directly in the offline inspection app. Add annotations to custom inspection forms and document field conditions with visual evidence.',
    icon: 'Camera',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'sync',
    title: 'Always In Sync',
    subtitle: 'Offline Data Synchronization',
    description: 'Our field inspection software features intelligent sync. Work offline with the inspection app and automatically sync data when connectivity returns.',
    icon: 'RefreshCw',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'white-label',
    title: 'Your Brand, Not Ours',
    subtitle: 'White Label Inspection Software',
    description: 'Deploy white label inspection software with your branding. Customize the mobile inspection platform with your logo, colors, and complete brand identity.',
    icon: 'Palette',
    gradient: 'from-pink-500 to-rose-500'
  }
]