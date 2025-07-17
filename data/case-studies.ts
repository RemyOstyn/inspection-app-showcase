export interface CaseStudyResult {
  metric: string;
  label: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  testimonial: CaseStudyTestimonial;
  image?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "freightplus",
    title: "FreightPlus Transforms Large Freight Inspections with Offline-First Solution",
    company: "FreightPlus",
    industry: "Freight Forwarding & Logistics",
    challenge: "As a freight forwarder specializing in shipping large loads, FreightPlus faced significant challenges with onsite inspections. Their inspectors frequently visited remote locations with no internet connectivity, making it impossible to document large freight conditions, capture photos, and generate reports in real-time. This created risks in moving high-value cargo and delayed the shipping process.",
    solution: "We developed a completely offline-first mobile inspection app with custom forms tailored for large freight documentation. The solution includes photo capture with annotations, custom checklists for different cargo types, and automatic data synchronization when internet becomes available. The app works seamlessly whether inspectors are in remote warehouses, shipping yards, or anywhere without connectivity.",
    results: [],
    testimonial: {
      quote: "",
      author: "",
      role: ""
    },
    image: "/images/case-study-freightplus.webp"
  }
];