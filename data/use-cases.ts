export interface UseCase {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  icon: string
  gradient: string
}

export const useCases: UseCase[] = [
  {
    id: 'equipment-rental',
    title: 'Equipment Rental Companies',
    subtitle: 'Streamline Rental Operations',
    description: 'Manage pre/post rental inspections, document equipment condition, and track maintenance schedules with ease.',
    features: [
      'Pre/post rental inspections',
      'Damage documentation',
      'Maintenance tracking',
      'Automated condition reports'
    ],
    icon: 'Truck',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'property-management',
    title: 'Property Management',
    subtitle: 'Efficient Property Operations',
    description: 'Conduct thorough move-in/move-out inspections, manage maintenance requests, and ensure compliance checks.',
    features: [
      'Move-in/move-out inspections',
      'Maintenance requests',
      'Safety compliance checks',
      'Tenant communication logs'
    ],
    icon: 'Building2',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'fleet-management',
    title: 'Fleet Management',
    subtitle: 'Vehicle Health & Safety',
    description: 'Monitor vehicle conditions, conduct driver inspections, and document incidents for comprehensive fleet oversight.',
    features: [
      'Vehicle condition reports',
      'Driver inspections',
      'Incident documentation',
      'Maintenance scheduling'
    ],
    icon: 'Car',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Facilities',
    subtitle: 'Medical Equipment Compliance',
    description: 'Maintain equipment logs, conduct safety inspections, and ensure regulatory compliance in healthcare environments.',
    features: [
      'Equipment maintenance logs',
      'Safety inspections',
      'Compliance audits',
      'Regulatory reporting'
    ],
    icon: 'Heart',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    subtitle: 'Crop & Equipment Management',
    description: 'Monitor crop conditions, inspect agricultural equipment, and maintain quality assessment records for optimal yields.',
    features: [
      'Crop inspections',
      'Equipment checks',
      'Quality assessments',
      'Yield tracking'
    ],
    icon: 'Wheat',
    gradient: 'from-yellow-500 to-amber-500'
  },
  {
    id: 'construction',
    title: 'Construction',
    subtitle: 'Site Safety & Progress',
    description: 'Ensure site safety compliance, monitor equipment conditions, and document construction progress effectively.',
    features: [
      'Site safety inspections',
      'Equipment condition checks',
      'Progress documentation',
      'Safety compliance reports'
    ],
    icon: 'HardHat',
    gradient: 'from-orange-500 to-red-500'
  }
]