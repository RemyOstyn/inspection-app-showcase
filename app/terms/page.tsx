import { MarketingLayout } from "@/components/marketing-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - ProFieldWork",
  description: "ProFieldWork&apos;s terms of service. Review our terms and conditions for using our website and services.",
  robots: "index, follow",
};

export default function TermsOfServicePage() {
  return (
    <MarketingLayout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using the ProFieldWork website (&quot;Website&quot;), you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <p className="mb-4">
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily access the materials on ProFieldWork&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
            <p className="mb-4">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by ProFieldWork at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Website Availability</h2>
            <p className="mb-4">
              ProFieldWork strives to ensure that the website is available 24/7. However, we do not guarantee that:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The website will be continuously available</li>
              <li>The website will be error-free</li>
              <li>Defects will be corrected immediately</li>
              <li>The website will be compatible with all hardware and software</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. User Account and Registration</h2>
            <p className="mb-4">
              When you create an account or provide information through our website, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your information</li>
              <li>Keep your account credentials secure</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Prohibited Uses</h2>
            <p className="mb-4">You may not use our website:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>For any unlawful purpose or to solicit others to unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
              <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
              <li>For any obscene or immoral purpose</li>
              <li>To interfere with or circumvent the security features of our website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Content and Intellectual Property</h2>
            <p className="mb-4">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of ProFieldWork or its content suppliers and is protected by intellectual property laws.
            </p>
            <p className="mb-4">
              You may not reproduce, distribute, display, sell, lease, transmit, create derivative works from, translate, modify, reverse-engineer, disassemble, decompile or otherwise exploit this website&apos;s content without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Privacy Policy</h2>
            <p className="mb-4">
              Your privacy is important to us. Please review our{" "}
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>, 
              which also governs your use of the website, to understand our practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Demo and Trial Services</h2>
            <p className="mb-4">
              ProFieldWork may offer demo or trial access to our services. These are provided &quot;as is&quot; and:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Are for evaluation purposes only</li>
              <li>May have limited functionality</li>
              <li>Are subject to availability</li>
              <li>May be terminated at any time</li>
              <li>Do not include technical support unless specified</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall ProFieldWork or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ProFieldWork&apos;s website, even if ProFieldWork or a ProFieldWork authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Disclaimer</h2>
            <p className="mb-4">
              The materials on ProFieldWork&apos;s website are provided on an &apos;as is&apos; basis. ProFieldWork makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="mb-4">
              Further, ProFieldWork does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Third-Party Links</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites or services that are not owned or controlled by ProFieldWork.
            </p>
            <p className="mb-4">
              ProFieldWork has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that ProFieldWork shall not be responsible or liable for any damage or loss caused by the use of any such content, goods, or services available on such websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless ProFieldWork, its officers, directors, employees, agents, and third parties, for any losses, costs, liabilities and expenses relating to or arising out of your use of or inability to use the website, any user postings made by you, your violation of any terms of this Agreement, your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
            <p className="mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which ProFieldWork operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Changes to Terms</h2>
            <p className="mb-4">
              ProFieldWork reserves the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p className="mb-4">
              What constitutes a material change will be determined at our sole discretion. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">16. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-none mb-4 space-y-2">
              <li><strong>Email:</strong> legal@profieldwork.com</li>
              <li><strong>Address:</strong> Contact us for more information</li>
            </ul>
          </section>
        </div>
      </div>
    </MarketingLayout>
  );
}