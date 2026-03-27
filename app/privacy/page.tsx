import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, SITE_NAME, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: `Privacy Policy | Middlesex County Pest Control`,
  description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, and protect your information.`,
  alternates: { canonical: `${DOMAIN}/privacy` },
  openGraph: { url: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-dark text-white py-12">
        <div className="container-main">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-400 mt-2">Last Updated: March 2025</p>
        </div>
      </section>

      <section className="section-light">
        <div className="container-main">
          <div className="max-w-3xl mx-auto prose prose-gray max-w-none">

            <h2 className="text-2xl font-bold text-dark mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Middlesex County Pest Control ("we," "our," or "us") operates the website located at {DOMAIN} (the "Site"). This Privacy Policy describes how we collect, use, and share information about you when you use our Site, contact us, or use our services.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We collect information you voluntarily provide to us, including:</p>
            <ul className="text-gray-700 mb-6 list-disc pl-6 space-y-2">
              <li>Name, phone number, and email address submitted through our contact form</li>
              <li>Service address and pest concern details provided with a service inquiry</li>
              <li>Communications you send to us via email or phone</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              We also collect certain information automatically when you visit our Site, including IP address, browser type, pages viewed, and referring URL, through standard web server logs and analytics tools (Google Analytics 4).
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="text-gray-700 mb-6 list-disc pl-6 space-y-2">
              <li>Respond to service inquiries and schedule pest control appointments</li>
              <li>Communicate with you about your service requests</li>
              <li>Send service reminders and follow-up communications</li>
              <li>Improve our website and services</li>
              <li>Comply with applicable legal requirements</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark mb-4">SMS / Text Message Communications (TCPA)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By providing your mobile phone number and checking the SMS consent checkbox on our contact form, you agree to receive text messages from Middlesex County Pest Control regarding your service inquiry, appointment scheduling, and service reminders.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Message frequency varies. Message and data rates may apply. You may opt out at any time by replying <strong>STOP</strong> to any text message we send. For help, reply <strong>HELP</strong> or contact us at {PHONE}.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not sell your mobile phone number or text messaging consent to third parties. Your consent to receive text messages is not a condition of purchasing any service.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4">Sharing Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not sell your personal information. We may share information with service providers who assist in operating our website and conducting our business, under confidentiality agreements. We may also disclose information when required by law or to protect the rights, property, or safety of our customers, employees, or the public.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4">Cookies and Analytics</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our Site uses Google Analytics 4 to collect anonymized usage data to help us understand how visitors use our Site. Google Analytics uses cookies to collect information such as pages viewed, time on site, and traffic sources. You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We use reasonable administrative, technical, and physical security measures to protect your information. However, no internet transmission is completely secure, and we cannot guarantee the absolute security of information transmitted to or from our Site.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You may contact us at any time to request access to, correction of, or deletion of personal information we hold about you. To exercise these rights, contact us at {PHONE}.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. When we do, we will update the "Last Updated" date at the top of this page. Your continued use of the Site after any changes constitutes your acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-lightgray rounded-lg p-6">
              <p className="font-semibold text-dark">{SITE_NAME}</p>
              <p className="text-gray-600">Middlesex County, NJ</p>
              <p className="text-gray-600">Phone: <a href={`tel:7328565142`} className="text-primary hover:underline">{PHONE}</a></p>
              <p className="text-gray-600">Website: <a href={DOMAIN} className="text-primary hover:underline">{DOMAIN}</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
