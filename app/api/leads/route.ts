import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = 'https://omcdxpqhnrhgnkxafgtn.supabase.co';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Honeypot check
    if (body.honeypot || body._hp) {
      return NextResponse.json({ success: true, message: 'Thank you!' });
    }

    // 2. Timing check (< 3s = likely bot)
    const formStartedAt = body.form_started_at || body._ts;
    if (formStartedAt && Date.now() - Number(formStartedAt) < 3000) {
      return NextResponse.json({ success: true, message: 'Thank you!' });
    }

    // 3. Accept all field name variants used across the network
    const name = String(body.name || body.customer_name || '').trim();
    const phone = String(body.phone || body.customer_phone || '').trim();
    const pest_type = String(
      body.pest_type || body.service || body.pest || body.service_type || body.description || 'General Pest Control'
    ).trim();
    const zip = String(body.zip || body.zip_code || '').trim();
    const email = body.email ? String(body.email).trim() : null;

    // 4. Required field validation
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: 'Name and phone are required.' },
        { status: 400 }
      );
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid 10-digit phone number.' },
        { status: 400 }
      );
    }

    // 5. Write to Supabase marketing_leads (if service role key is available)
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const host = request.headers.get('host') || 'website';
    if (serviceKey) {
      try {
        const dbResp = await fetch(`${SUPABASE_URL}/rest/v1/marketing_leads`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${serviceKey}`,
            apikey: serviceKey,
            Prefer: 'return=minimal',
          },
          body: JSON.stringify({
            customer_name: name,
            customer_phone: cleanPhone,
            customer_email: email,
            website: body.page_url || null,
            lead_source: host,
            api_source: host,
            description: pest_type || null,
            status: 'new',
          }),
        });
        if (!dbResp.ok) {
          const errText = await dbResp.text();
          console.error('Supabase write error:', dbResp.status, errText);
        }
      } catch (dbErr) {
        console.error('Supabase exception:', dbErr instanceof Error ? dbErr.message : String(dbErr));
      }
    }

    // 6. Fire CRM webhook (sends lead to SS)
    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone: cleanPhone,
          email,
          zip,
          pest_type,
          sms_consent: body.sms_consent ?? true,
          source: 'website',
          page_url: body.page_url || null,
        }),
      }).catch((e) => console.error('Webhook error:', e));
    }

    return NextResponse.json({ success: true, message: "Thank you! We'll be in touch shortly." });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
