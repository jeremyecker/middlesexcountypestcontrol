'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Clock, Shield, CheckCircle } from 'lucide-react';
import { PHONE, PHONE_RAW, SITE_NAME, WEBHOOK_URL } from '@/lib/data';

const services = [
  'Bed Bug Extermination',
  'Rodent Control',
  'Cockroach Extermination',
  'Ant Control',
  'Termite Treatment',
  'Mosquito Control',
  'Wasp & Bee Removal',
  'Tick Control',
  'Flea Extermination',
  'Wildlife Removal',
  'Commercial Pest Control',
  'Other',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    smsConsent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'contact_form',
        event_label: formData.service || 'general',
      });
    }

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: formData.name,
          customer_phone: formData.phone,
          customer_email: formData.email,
          lead_source: 'website',
          api_source: 'middlesexcountypestcontrol.com',
          website: 'middlesexcountypestcontrol.com',
          status: 'new',
          sms_consent: formData.smsConsent,
          lead_metadata: {
            pest_type: formData.service || 'general',
            message: formData.message,
            page_url: typeof window !== 'undefined' ? window.location.href : '',
            site_domain: 'middlesexcountypestcontrol.com',
          },
        }),
      });
    } catch (err) {
      console.error('Webhook error:', err);
    }

    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Middlesex County Pest Control</h1>
          <p className="text-blue-100 text-lg max-w-2xl">Same-day service available throughout Middlesex County, NJ. Call us now or book online.</p>
        </div>
      </section>

      <section className="section-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Book a Service or Free Inspection</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-dark mb-2">We Received Your Request!</h3>
                  <p className="text-gray-600">A member of our team will contact you shortly to confirm your appointment. For immediate assistance, call us at <a href={`tel:${PHONE_RAW}`} className="text-primary font-semibold">{PHONE}</a>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1" htmlFor="name">Full Name *</label>
                    <input
                      id="name" type="text" required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-gray-300 rounded px-4 py-3 text-dark focus:outline-none focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1" htmlFor="email">Email Address *</label>
                    <input
                      id="email" type="email" required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-300 rounded px-4 py-3 text-dark focus:outline-none focus:border-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1" htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone" type="tel" required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded px-4 py-3 text-dark focus:outline-none focus:border-primary"
                      placeholder="(732) 555-0100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1" htmlFor="service">Service Needed</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="w-full border border-gray-300 rounded px-4 py-3 text-dark focus:outline-none focus:border-primary"
                    >
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1" htmlFor="message">Message</label>
                    <textarea
                      id="message" rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-gray-300 rounded px-4 py-3 text-dark focus:outline-none focus:border-primary"
                      placeholder="Describe your pest problem or any questions..."
                    />
                  </div>

                  {/* SMS / TCPA Consent */}
                  <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <input
                      type="checkbox" id="smsConsent" required
                      checked={formData.smsConsent}
                      onChange={e => setFormData({ ...formData, smsConsent: e.target.checked })}
                      className="mt-0.5 h-4 w-4 accent-primary flex-shrink-0 cursor-pointer"
                    />
                    <label htmlFor="smsConsent" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                      <span className="font-semibold text-dark">I agree to receive text messages.</span> By checking this box, I consent to receive recurring automated SMS/text messages from Middlesex County Pest Control at the phone number provided above. Message &amp; data rates may apply. Message frequency varies. Reply <strong>STOP</strong> to opt out at any time. Reply <strong>HELP</strong> for assistance. View our{' '}
                      <Link href="/privacy" className="text-primary underline hover:no-underline">Privacy Policy</Link>.
                    </label>
                  </div>

                  <button type="submit" className="bg-primary text-white px-8 py-4 rounded font-bold text-lg hover:bg-ctahover transition-colors">
                    Book Now
                  </button>
                </form>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-navy rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="flex flex-col gap-5">
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="flex items-center gap-4 hover:text-gray-200 transition-colors"
                    onClick={() => {
                      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
                        (window as any).gtag('event', 'generate_lead', { event_category: 'phone_click', event_label: 'contact_page' });
                      }
                    }}
                  >
                    <div className="bg-primary rounded-full p-3"><Phone size={20} /></div>
                    <div>
                      <p className="text-sm text-blue-200">Phone</p>
                      <p className="text-xl font-bold">{PHONE}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-full p-3"><Clock size={20} /></div>
                    <div>
                      <p className="text-sm text-blue-200">Hours</p>
                      <p className="font-bold">Same-Day Emergency Service</p>
                      <p className="text-blue-100 text-sm">Monday–Saturday</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-full p-3"><Shield size={20} /></div>
                    <div>
                      <p className="text-sm text-blue-200">Service Area</p>
                      <p className="font-bold">All of Middlesex County, NJ</p>
                      <p className="text-blue-100 text-sm">All 25 municipalities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-lightgray rounded-xl p-6">
                <h3 className="font-bold text-dark mb-4">What to Expect</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "We'll call you within 60 minutes of your submission",
                    'Same-day and next-day appointments available',
                    'Upfront pricing — no surprises',
                    'Licensed, insured technician at your door',
                    'Full explanation of treatment and process',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-dark mb-3">Service Area</h3>
                <p className="text-gray-600 text-sm mb-3">We serve all 25 municipalities of Middlesex County, NJ including:</p>
                <div className="flex flex-wrap gap-2">
                  {['Edison', 'Woodbridge', 'Old Bridge', 'New Brunswick', 'Piscataway', 'Sayreville', 'Perth Amboy', 'East Brunswick', 'Monroe', 'North Brunswick'].map(town => (
                    <span key={town} className="bg-lightgray text-dark text-xs px-2 py-1 rounded">{town}</span>
                  ))}
                  <Link href="/locations" className="bg-primary text-white text-xs px-2 py-1 rounded hover:bg-ctahover">All 25 →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
