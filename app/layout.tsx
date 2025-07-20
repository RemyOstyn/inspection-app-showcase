import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { CookieConsent } from "@/components/cookie-consent";
import { AnalyticsInitializer } from '@/components/analytics-initializer';
import { ClientScripts } from '@/components/analytics/client-scripts';
import { RecaptchaProvider } from '@/components/forms/recaptcha-provider';
import { ThemeColorManager } from '@/components/theme-color-manager';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.profieldwork.com"),
  title: "ProFieldWork - Offline Inspection Software",
  description: "Enterprise-grade offline inspection platform that works anywhere. Customizable forms, white-label ready, and trusted by 500+ companies worldwide.",
  robots: "index, follow",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'placeholder-verification-code',
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RecaptchaProvider>
            <ThemeColorManager />
            {children}
            <Toaster />
            <CookieConsent />
            <AnalyticsInitializer />
            <ClientScripts gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
          </RecaptchaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
