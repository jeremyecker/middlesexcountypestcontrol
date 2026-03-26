'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { PHONE, PHONE_RAW, TAGLINE } from '@/lib/data';

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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Topbar - navy */}
      <div className="bg-navy text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-white" />
            <a href={`tel:${PHONE_RAW}`} className="hover:text-blue-200 transition-colors font-medium">
              {PHONE}
            </a>
            <span className="hidden sm:inline text-blue-300 mx-2">|</span>
            <span className="hidden sm:inline text-blue-100">{TAGLINE}</span>
          </div>
          <div className="text-white font-semibold text-xs">24/7 Emergency Service</div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="font-bold text-primary tracking-[0.12em] text-lg sm:text-xl uppercase">
              Middlesex County
            </span>
            <div className="h-[2px] bg-primary w-full my-0.5" />
            <span className="font-bold text-dark tracking-[0.08em] text-sm sm:text-base uppercase">
              Pest Control
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-dark">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-primary transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 w-56 bg-white shadow-lg border border-gray-100 rounded mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/services" className="block px-4 py-2 text-sm font-semibold text-primary border-b hover:bg-lightgray">
                  All Services
                </Link>
                {serviceLinks.map(link => (
                  <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm hover:bg-lightgray hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/locations" className="hover:text-primary transition-colors">Locations</Link>
            <Link href="/commercial" className="hover:text-primary transition-colors">Commercial</Link>
            <Link href="/wildlife" className="hover:text-primary transition-colors">Wildlife</Link>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex bg-primary text-white px-5 py-2 rounded font-semibold hover:bg-ctahover transition-colors text-sm"
          >
            Book Now
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-4 flex flex-col gap-3 text-sm font-medium">
              <Link href="/" className="py-2 border-b hover:text-primary" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/services" className="py-2 border-b hover:text-primary" onClick={() => setMenuOpen(false)}>Services</Link>
              {serviceLinks.map(link => (
                <Link key={link.href} href={link.href} className="py-1 pl-4 text-gray-600 hover:text-primary" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link href="/locations" className="py-2 border-b hover:text-primary" onClick={() => setMenuOpen(false)}>Locations</Link>
              <Link href="/commercial" className="py-2 border-b hover:text-primary" onClick={() => setMenuOpen(false)}>Commercial</Link>
              <Link href="/wildlife" className="py-2 border-b hover:text-primary" onClick={() => setMenuOpen(false)}>Wildlife</Link>
              <Link href="/blog" className="py-2 border-b hover:text-primary" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link href="/about" className="py-2 border-b hover:text-primary" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/contact" className="py-2 border-b hover:text-primary" onClick={() => setMenuOpen(false)}>Contact</Link>
              <Link
                href="/contact"
                className="mt-2 bg-primary text-white text-center py-3 rounded font-semibold hover:bg-ctahover"
                onClick={() => setMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
