import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL = 'https://omcdxpqhnrhgnkxafgtn.supabase.co/functions/v1/webhook-middlesex';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (body.honeypot || body._hp) return NextResponse.json({ success: true });
    const formStartedAt = body.form_started_at || body._ts;
    if (formStartedAt && Date.now() - Number(formStartedAt) < 3000) return NextResponse.json({ success: true });
    const normalized = {
      ...body,
      name: body.name || body.customer_name || '',
      phone: (body.phone || body.customer_phone || '').replace(/\D/g, ''),
      service: body.service || body.pest_type || body.pest || 'General Pest Control',
      source: 'middlesexcountypestcontrol.com',
      sms_consent: body.sms_consent ?? body.smsConsent ?? false,
    };
    try {
      await fetch(WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(normalized) });
    } catch (e) { console.error('Webhook failed:', e); }
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ success: true });
  }
}
