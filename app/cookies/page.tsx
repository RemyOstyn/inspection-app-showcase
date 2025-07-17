import { MarketingLayout } from "@/components/marketing-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - ProFieldWork",
  description: "ProFieldWork&apos;s cookie policy. Learn about the cookies we use and how to manage your cookie preferences.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.profieldwork.com/cookies",
  },
};

export default function CookiePolicyPage() {
  return (
    <MarketingLayout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
            <p className="mb-4">
              ProFieldWork uses cookies to enhance your browsing experience, analyze site usage, and assist in our marketing efforts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-medium mb-3">Strictly Necessary Cookies</h3>
            <p className="mb-4">
              These cookies are essential for the website to function properly. They cannot be switched off in our systems.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mb-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Session cookies:</strong> Enable basic website functionality</li>
                <li><strong>Security cookies:</strong> Authenticate users and prevent fraudulent use</li>
                <li><strong>Load balancing cookies:</strong> Distribute website traffic efficiently</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium mb-3">Functional Cookies</h3>
            <p className="mb-4">
              These cookies allow the website to provide enhanced functionality and personalization.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mb-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Theme preference:</strong> Remembers your light/dark mode selection</li>
                <li><strong>Language preference:</strong> Stores your preferred language</li>
                <li><strong>Form data:</strong> Temporarily stores form inputs to prevent data loss</li>
                <li><strong>User preferences:</strong> Remembers your settings and preferences</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium mb-3">Analytics Cookies</h3>
            <p className="mb-4">
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mb-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> Tracks website usage and performance</li>
                <li><strong>Page view tracking:</strong> Monitors popular content</li>
                <li><strong>User behavior analysis:</strong> Helps improve user experience</li>
                <li><strong>Conversion tracking:</strong> Measures form submissions and demo requests</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium mb-3">Marketing Cookies</h3>
            <p className="mb-4">
              These cookies track your activity across websites to deliver more relevant advertising.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mb-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Advertising cookies:</strong> Show relevant ads on other websites</li>
                <li><strong>Social media pixels:</strong> Enable social media integration and tracking</li>
                <li><strong>Retargeting cookies:</strong> Display ads to previous visitors</li>
                <li><strong>Campaign tracking:</strong> Measure marketing campaign effectiveness</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Third-Party Cookies</h2>
            <p className="mb-4">
              Some cookies on our website are set by third-party services:
            </p>
            
            <h3 className="text-xl font-medium mb-3">Calendly</h3>
            <p className="mb-4">
              When you schedule a demo, Calendly may set cookies to manage your booking preferences and session.
            </p>
            
            <h3 className="text-xl font-medium mb-3">Google Analytics</h3>
            <p className="mb-4">
              We use Google Analytics to analyze website traffic and user behavior. Google may use the data collected 
              to contextualize and personalize ads in its own advertising network.
            </p>
            
            <h3 className="text-xl font-medium mb-3">Email Marketing Platforms</h3>
            <p className="mb-4">
              Our newsletter and email campaigns may use tracking pixels to measure open rates and engagement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Cookie Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">Cookie Name</th>
                    <th className="border border-border p-3 text-left">Purpose</th>
                    <th className="border border-border p-3 text-left">Duration</th>
                    <th className="border border-border p-3 text-left">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">theme</td>
                    <td className="border border-border p-3">Stores user&apos;s theme preference (light/dark)</td>
                    <td className="border border-border p-3">Persistent</td>
                    <td className="border border-border p-3">Functional</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">_ga</td>
                    <td className="border border-border p-3">Google Analytics - distinguishes users</td>
                    <td className="border border-border p-3">2 years</td>
                    <td className="border border-border p-3">Analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">_gid</td>
                    <td className="border border-border p-3">Google Analytics - distinguishes users</td>
                    <td className="border border-border p-3">24 hours</td>
                    <td className="border border-border p-3">Analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">_gat</td>
                    <td className="border border-border p-3">Google Analytics - throttles request rate</td>
                    <td className="border border-border p-3">1 minute</td>
                    <td className="border border-border p-3">Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Managing Your Cookie Preferences</h2>
            
            <h3 className="text-xl font-medium mb-3">Browser Settings</h3>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Block all cookies</li>
              <li>Allow only first-party cookies</li>
              <li>Delete existing cookies</li>
              <li>Set cookies to expire when you close your browser</li>
            </ul>
            
            <p className="mb-4">
              <strong>Note:</strong> Disabling certain cookies may limit website functionality.
            </p>

            <h3 className="text-xl font-medium mb-3">Cookie Consent Banner</h3>
            <p className="mb-4">
              When you first visit our website, you&apos;ll see a cookie consent banner allowing you to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize your cookie preferences</li>
              <li>Learn more about our cookie policy</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Opt-Out Links</h3>
            <p className="mb-4">You can opt out of specific tracking services:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline cursor-pointer" target="_blank" rel="noopener noreferrer">
                  Google Analytics Opt-out
                </a>
              </li>
              <li>
                <a href="https://www.google.com/settings/ads" className="text-primary hover:underline cursor-pointer" target="_blank" rel="noopener noreferrer">
                  Google Ads Settings
                </a>
              </li>
              <li>
                <a href="https://optout.aboutads.info/" className="text-primary hover:underline cursor-pointer" target="_blank" rel="noopener noreferrer">
                  Digital Advertising Alliance Opt-out
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. How to Clear Cookies</h2>
            
            <h3 className="text-xl font-medium mb-3">Chrome</h3>
            <ol className="list-decimal pl-6 mb-4 space-y-1">
              <li>Click the three-dot menu → Settings</li>
              <li>Click &quot;Privacy and security&quot; → &quot;Clear browsing data&quot;</li>
              <li>Select &quot;Cookies and other site data&quot;</li>
              <li>Choose time range and click &quot;Clear data&quot;</li>
            </ol>

            <h3 className="text-xl font-medium mb-3">Firefox</h3>
            <ol className="list-decimal pl-6 mb-4 space-y-1">
              <li>Click the menu button → Options</li>
              <li>Select &quot;Privacy & Security&quot;</li>
              <li>Under &quot;Cookies and Site Data,&quot; click &quot;Clear Data&quot;</li>
              <li>Select what to clear and click &quot;Clear&quot;</li>
            </ol>

            <h3 className="text-xl font-medium mb-3">Safari</h3>
            <ol className="list-decimal pl-6 mb-4 space-y-1">
              <li>Click Safari → Preferences</li>
              <li>Select &quot;Privacy&quot; tab</li>
              <li>Click &quot;Manage Website Data&quot;</li>
              <li>Select &quot;Remove All&quot; or specific sites</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Mobile Devices</h2>
            <p className="mb-4">
              On mobile devices, cookies are managed through your browser settings. Most mobile browsers allow you to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Block cookies</li>
              <li>Clear stored cookies</li>
              <li>Manage site-specific permissions</li>
              <li>Use private/incognito browsing mode</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, 
              operational, or regulatory reasons. We will notify you of any material changes by posting the new 
              Cookie Policy on this page with a new effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Cookie Policy or our use of cookies, please contact us:
            </p>
            <ul className="list-none mb-4 space-y-2">
              <li><strong>Email:</strong> privacy@profieldwork.com</li>
              <li><strong>Address:</strong> Contact us for more information</li>
            </ul>
            <p className="mb-4">
              For more information about our data practices, please see our{" "}
              <a href="/privacy" className="text-primary hover:underline cursor-pointer">Privacy Policy</a>.
            </p>
          </section>
        </div>
      </div>
    </MarketingLayout>
  );
}