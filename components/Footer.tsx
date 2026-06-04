import Link from 'next/link';
import { Phone, Clock, Shield } from 'lucide-react';
import { PHONE, PHONE_RAW, SITE_NAME, TAGLINE } from '@/lib/data';

const serviceLinks = [
  { href: '/services/bed-bugs', label: 'Bed Bug Extermination' },
  { href: '/services/rodents', label: 'Rodent Control' },
  { href: '/services/cockroaches', label: 'Cockroach Extermination' },
  { href: '/services/ants', label: 'Ant Control' },
  { href: '/services/termites', label: 'Termite Treatment' },
  { href: '/services/mosquitoes', label: 'Mosquito Control' },
  { href: '/services/wasps', label: 'Wasp & Bee Removal' },
  { href: '/services/ticks', label: 'Tick Control' },
  { href: '/services/fleas', label: 'Flea Extermination' },
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'All Services' },
  { href: '/commercial', label: 'Commercial' },
  { href: '/wildlife', label: 'Wildlife Removal' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/credentials', label: 'Credentials' },
  { href: '/residential', label: 'Residential' },
];

const townLinks = [
  { href: '/edison', label: 'Edison' },
  { href: '/woodbridge', label: 'Woodbridge' },
  { href: '/old-bridge', label: 'Old Bridge' },
  { href: '/new-brunswick', label: 'New Brunswick' },
  { href: '/piscataway', label: 'Piscataway' },
  { href: '/sayreville', label: 'Sayreville' },
  { href: '/perth-amboy', label: 'Perth Amboy' },
  { href: '/east-brunswick', label: 'East Brunswick' },
  { href: '/north-brunswick', label: 'North Brunswick' },
  { href: '/south-brunswick', label: 'South Brunswick' },
];

const networkLinks = [
  { href: 'https://essexcountypestcontrol.com', label: 'Essex County Pest Control' },
  { href: 'https://buggedoutny.com', label: 'Bugged Out Pest Management' },
  { href: 'https://resteasypestcontrol.com', label: 'Rest Easy Pest Control' },
  { href: 'https://nycpestcontrolnearme.com', label: 'NYC Pest Control Near Me' },
  { href: 'https://bronxcountypestcontrol.com', label: 'Bronx County Pest Control' },
  { href: 'https://burlingtoncountypestcontrolnearme.com', label: 'Burlington County Pest Control' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <div className="mb-4">
              <span className="font-bold text-primary tracking-[0.12em] text-lg uppercase block">Middlesex County</span>
              <div className="h-[2px] bg-primary w-full my-1" />
              <span className="font-bold text-white tracking-[0.08em] text-sm uppercase block">Pest Control</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {TAGLINE}. Licensed and insured pest control experts serving all 25 municipalities of Middlesex County, NJ.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={`tel:${PHONE_RAW}`} className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
                <Phone size={14} className="text-primary flex-shrink-0" />
                {PHONE}
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock size={14} className="text-primary flex-shrink-0" />
                Same-Day Emergency Service
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Shield size={14} className="text-primary flex-shrink-0" />
                Licensed & Insured in NJ
              </div>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Our Services</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2 mb-6">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Service Areas */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="flex flex-col gap-2 mb-4">
              {townLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/locations" className="text-primary text-sm hover:underline">
              View All 25 Towns &rarr;
            </Link>
          </div>
        </div>

        {/* Network */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Pest Control Network</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {networkLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>&copy; {year} {SITE_NAME}. All Rights Reserved. | Partner of Rest Easy Pest Control</p>
          <p>Licensed Pest Control | Middlesex County, NJ | NJ DEP Licensed</p>
        </div>
      </div>
    </footer>
  );
}
