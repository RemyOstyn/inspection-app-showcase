// Core application types

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'inspector';
  avatar?: string;
}

export interface Inspection {
  id: string;
  title: string;
  description?: string;
  status: 'pending' | 'in_progress' | 'completed' | 'reviewed';
  assignedTo: string;
  createdAt: Date;
  updatedAt: Date;
  dueDate?: Date;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

export interface InspectionForm {
  id: string;
  name: string;
  fields: FormField[];
  industry: string;
  version: number;
  isActive: boolean;
}

export interface FormField {
  id: string;
  type: 'text' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file' | 'number' | 'date';
  label: string;
  required: boolean;
  options?: string[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
}

export interface MediaAsset {
  id: string;
  type: 'image' | 'video' | 'document';
  url: string;
  filename: string;
  size: number;
  inspectionId: string;
  uploadedAt: Date;
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  useCases: string[];
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  industry: string;
  rating: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  client: {
    name: string;
    logo?: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: 'month' | 'year';
  features: string[];
  isPopular?: boolean;
  cta: string;
}

// API Response types
export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  status: 'success' | 'error';
}

export interface PaginatedResponse<T = unknown> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Form types
export interface ContactForm {
  name: string;
  email: string;
  company: string;
  industry: string;
  message: string;
}

export interface DemoRequest {
  name: string;
  email: string;
  company: string;
  industry: string;
  phone?: string;
  preferredDate?: string;
  requirements?: string;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}