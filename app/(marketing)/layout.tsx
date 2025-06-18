import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Offline-First Mobile Inspection Platform",
    template: "%s | Inspection Platform",
  },
  description: "Transform your field operations with an offline-first inspection platform that works anywhere, syncs seamlessly, and adapts to your business needs.",
  keywords: [
    "offline inspection app",
    "field inspection software", 
    "white label inspection platform",
    "custom form builder app",
    "offline data collection",
    "mobile inspection solution",
  ],
  authors: [{ name: "Inspection Platform" }],
  creator: "Inspection Platform",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inspection-platform.com",
    title: "Offline-First Mobile Inspection Platform",
    description: "Transform your field operations with an offline-first inspection platform that works anywhere, syncs seamlessly, and adapts to your business needs.",
    siteName: "Inspection Platform",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offline-First Mobile Inspection Platform",
    description: "Transform your field operations with an offline-first inspection platform that works anywhere, syncs seamlessly, and adapts to your business needs.",
    creator: "@inspectionplatform",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md"
      >
        Skip to content
      </a>
      <div className="relative flex min-h-screen flex-col">
        <main id="main-content" className="flex-1">
          {children}
        </main>
      </div>
    </>
  );
}