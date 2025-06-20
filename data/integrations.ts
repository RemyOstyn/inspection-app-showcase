import { LucideIcon, Database, Settings, BarChart3, Cloud, FileText, Zap } from "lucide-react";

export interface Integration {
  name: string;
  logo: string;
}

export interface IntegrationCategory {
  category: string;
  description: string;
  integrations: Integration[];
  icon: LucideIcon;
}

export interface IntegrationFeature {
  title: string;
  description: string;
}

export const integrationCategories: IntegrationCategory[] = [
  {
    category: "ERP Systems",
    description: "Seamlessly sync inspection data with your enterprise resource planning",
    integrations: [
      { name: "SAP", logo: "/logos/sap.svg" },
      { name: "Oracle", logo: "/logos/oracle.svg" },
      { name: "Microsoft Dynamics", logo: "/logos/dynamics.svg" },
      { name: "NetSuite", logo: "/logos/netsuite.svg" }
    ],
    icon: Database
  },
  {
    category: "Asset Management",
    description: "Keep your asset records updated with real-time inspection data",
    integrations: [
      { name: "IBM Maximo", logo: "/logos/maximo.svg" },
      { name: "Infor EAM", logo: "/logos/infor.svg" },
      { name: "Asset Panda", logo: "/logos/assetpanda.svg" },
      { name: "UpKeep", logo: "/logos/upkeep.svg" }
    ],
    icon: Settings
  },
  {
    category: "Business Intelligence",
    description: "Transform inspection data into actionable insights",
    integrations: [
      { name: "Power BI", logo: "/logos/powerbi.svg" },
      { name: "Tableau", logo: "/logos/tableau.svg" },
      { name: "Looker", logo: "/logos/looker.svg" },
      { name: "Qlik", logo: "/logos/qlik.svg" }
    ],
    icon: BarChart3
  },
  {
    category: "Cloud Storage",
    description: "Automatically backup inspection reports and media",
    integrations: [
      { name: "AWS S3", logo: "/logos/aws.svg" },
      { name: "Google Drive", logo: "/logos/gdrive.svg" },
      { name: "Dropbox", logo: "/logos/dropbox.svg" },
      { name: "OneDrive", logo: "/logos/onedrive.svg" }
    ],
    icon: Cloud
  },
  {
    category: "Document Management",
    description: "Archive and organize inspection documentation",
    integrations: [
      { name: "SharePoint", logo: "/logos/sharepoint.svg" },
      { name: "DocuSign", logo: "/logos/docusign.svg" },
      { name: "Box", logo: "/logos/box.svg" },
      { name: "Confluence", logo: "/logos/confluence.svg" }
    ],
    icon: FileText
  },
  {
    category: "Workflow Automation",
    description: "Trigger automated workflows based on inspection results",
    integrations: [
      { name: "Zapier", logo: "/logos/zapier.svg" },
      { name: "Make", logo: "/logos/make.svg" },
      { name: "Power Automate", logo: "/logos/powerautomate.svg" },
      { name: "Workato", logo: "/logos/workato.svg" }
    ],
    icon: Zap
  }
];

export const integrationFeatures: IntegrationFeature[] = [
  {
    title: "REST API",
    description: "Full-featured API for custom integrations"
  },
  {
    title: "Webhooks",
    description: "Real-time event notifications"
  },
  {
    title: "Single Sign-On",
    description: "SAML 2.0 and OAuth support"
  },
  {
    title: "Data Export",
    description: "Export to CSV, Excel, PDF formats"
  }
];