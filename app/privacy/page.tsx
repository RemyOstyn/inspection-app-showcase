import { MarketingLayout } from "@/components/marketing-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ProFieldWork",
  description: "ProFieldWork&aposs privacy policy. Learn how we collect, use, and protect your personal information.",
  robots: "index, follow",
};

export default function PrivacyPolicyPage() {
  return (
    <MarketingLayout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3">Personal Information</h3>
            <p className="mb-4">
              When you interact with ProFieldWork, we may collect the following personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Company information (company name, industry, role)</li>
              <li>Communication preferences</li>
              <li>Demo request information</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referral sources</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use your personal information for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Providing and improving our services</li>
              <li>Responding to inquiries and demo requests</li>
              <li>Sending newsletters and marketing communications (with consent)</li>
              <li>Analyzing website usage and performance</li>
              <li>Ensuring security and preventing fraud</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies and similar technologies to enhance your experience. For detailed information, 
              please see our <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a>.
            </p>
            
            <h3 className="text-xl font-medium mb-3">Cookie Categories</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
              <li><strong>Functional cookies:</strong> Remember your preferences (theme, language)</li>
              <li><strong>Analytics cookies:</strong> Help us understand website usage</li>
              <li><strong>Marketing cookies:</strong> Used for targeted advertising (with consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
            <p className="mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Service providers:</strong> Companies that help us operate our business</li>
              <li><strong>Business partners:</strong> With your consent for joint marketing</li>
              <li><strong>Legal authorities:</strong> When required by law or to protect our rights</li>
              <li><strong>Business transfers:</strong> In case of merger, acquisition, or sale</li>
            </ul>
            
            <p className="mb-4">
              We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your personal information</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
            
            <p className="mb-4">
              To exercise these rights, please contact us at{" "}
              <a href="mailto:privacy@profieldwork.com" className="text-primary hover:underline cursor-pointer">
                privacy@profieldwork.com
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide our services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. International Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Third-Party Services</h2>
            <p className="mb-4">Our website may integrate with third-party services:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Calendly:</strong> For demo scheduling</li>
              <li><strong>Analytics providers:</strong> For website analytics</li>
              <li><strong>Email services:</strong> For newsletter delivery</li>
            </ul>
            <p className="mb-4">
              These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Children&aposs Privacy</h2>
            <p className="mb-4">
              Our service is not intended for children under 13. We do not knowingly collect 
              personal information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time. We will notify you of any 
              material changes by email or through our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <p className="mb-4">
              If you have questions about this privacy policy, please contact us:
            </p>
            <ul className="list-none mb-4 space-y-2">
              <li><strong>Email:</strong> privacy@profieldwork.com</li>
              <li><strong>Address:</strong> Contact us for more information</li>
            </ul>
          </section>
        </div>
      </div>
    </MarketingLayout>
  );
}