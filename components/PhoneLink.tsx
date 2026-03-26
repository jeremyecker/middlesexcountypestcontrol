'use client';

import { Phone } from 'lucide-react';

interface PhoneLinkProps {
  href: string;
  phone: string;
  className?: string;
  eventLabel?: string;
  iconSize?: number;
}

export default function PhoneLink({ href, phone, className, eventLabel = 'hero', iconSize = 20 }: PhoneLinkProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'generate_lead', { event_category: 'phone_click', event_label: eventLabel });
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      <Phone size={iconSize} />
      {phone}
    </a>
  );
}
