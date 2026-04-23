'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
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

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    smsConsent: false,
  });
  const [formStartedAt] = useState(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // === BLOCKLIST CHECK ===
    const _BLOCKED_PHONES = ['2168596131'];
    const _BLOCKED_EMAILS = ['susansmi@parallelaid.com'];
    const _BLOCKED_DOMAINS = ['parallelaid.com'];
    const _cp = (formData.phone || '').replace(/[^0-9]/g, '');
    const _ce = (formData.email || '').trim().toLowerCase();
    if (_BLOCKED_PHONES.includes(_cp) || _BLOCKED_EMAILS.includes(_ce) || _BLOCKED_DOMAINS.some(d => _ce.endsWith('@' + d))) {
      setSubmitted(true);
      return;
    }
    // === END BLOCKLIST ===
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
            page_url: typeof window !== 'undefined' ? window.location.href : '',
            site_domain: 'middlesexcountypestcontrol.com',
          },
        ,
          honeypot: (document.querySelector('input[name="honeypot"]') as HTMLInputElement)?.value || '',
          form_started_at: formStartedAt}),
      });
    } catch (err) {
      console.error('Webhook error:', err);
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-dark mb-2">We Received Your Request!</h3>
        <p className="text-gray-600">A member of our team will contact you shortly. For immediate assistance, call <a href={`tel:${PHONE_RAW}`} className="text-primary font-semibold">{PHONE}</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-dark mb-1" htmlFor="hpq-name">Full Name *</label>
          <input
            id="hpq-name" type="text" required
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-gray-300 rounded px-4 py-3 text-dark focus:outline-none focus:border-primary"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-dark mb-1" htmlFor="hpq-phone">Phone Number *</label>
          <input
            id="hpq-phone" type="tel" required
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border border-gray-300 rounded px-4 py-3 text-dark focus:outline-none focus:border-primary"
            placeholder="(732) 555-0100"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-dark mb-1" htmlFor="hpq-email">Email Address *</label>
        <input
          id="hpq-email" type="email" required
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          className="w-full border border-gray-300 rounded px-4 py-3 text-dark focus:outline-none focus:border-primary"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-dark mb-1" htmlFor="hpq-service">Service Needed</label>
        <select
          id="hpq-service"
          value={formData.service}
          onChange={e => setFormData({ ...formData, service: e.target.value })}
          className="w-full border border-gray-300 rounded px-4 py-3 text-dark focus:outline-none focus:border-primary"
        >
          <option value="">Select a service...</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* SMS / TCPA Consent */}
      <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4">
        <input
          type="checkbox" id="hpq-sms" required
          checked={formData.smsConsent}
          onChange={e => setFormData({ ...formData, smsConsent: e.target.checked })}
          className="mt-0.5 h-4 w-4 accent-primary flex-shrink-0 cursor-pointer"
        />
        <label htmlFor="hpq-sms" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
          <span className="font-semibold text-dark">I agree to receive text messages.</span> By checking this box, I consent to receive recurring automated SMS/text messages from {SITE_NAME} at the phone number provided. Message &amp; data rates may apply. Reply <strong>STOP</strong> to opt out. View our{' '}
          <Link href="/privacy" className="text-primary underline hover:no-underline">Privacy Policy</Link>.
        </label>
      </div>

      {/* Honeypot - hidden from real users */}
      <input
        type="text"
        name="honeypot"
        style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0, zIndex: -1 }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <button type="submit" className="bg-primary text-white px-8 py-4 rounded font-bold text-lg hover:bg-ctahover transition-colors">
        Get My Free Quote
      </button>
    </form>
  );
}
