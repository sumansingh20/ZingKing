'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone, FiSend, FiArrowUp } from 'react-icons/fi';
import { contactMeta } from '@/data/content';

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#3D2420] to-[#2A1815] text-[#FFF8E7]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <h2 className="font-playfair text-3xl font-bold">
                <span className="text-[#F4A300]">Zingking</span> Masala
              </h2>
            </Link>
            <p className="mt-4 text-sm leading-7 text-[#FFF8E7]/80 max-w-md">
              Premium Indian spice brand built for trust, flavor consistency, and long-term business growth.
              Trusted by 10 lakh+ families and 500+ restaurants across India.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm font-semibold mb-3">Subscribe to our newsletter</p>
              {subscribed ? (
                <p className="text-green-400 text-sm">Thank you for subscribing!</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-2.5 rounded-l-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-[#F4A300]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#F4A300] text-[#4B2E2B] rounded-r-full font-semibold text-sm hover:bg-[#FFB820] transition-colors"
                  >
                    <FiSend className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {[
                { icon: FaWhatsapp, href: `https://wa.me/${contactMeta.whatsapp}`, color: 'hover:bg-[#25D366]' },
                { icon: FaInstagram, href: 'https://instagram.com/zingkingmasala', color: 'hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]' },
                { icon: FaFacebookF, href: 'https://facebook.com/zingkingmasala', color: 'hover:bg-[#1877F2]' },
                { icon: FaYoutube, href: 'https://youtube.com/@zingkingmasala', color: 'hover:bg-[#FF0000]' },
                { icon: FaTwitter, href: 'https://twitter.com/zingkingmasala', color: 'hover:bg-[#1DA1F2]' },
                { icon: FaLinkedinIn, href: 'https://linkedin.com/company/zingkingmasala', color: 'hover:bg-[#0A66C2]' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F4A300] mb-5">Quick Links</p>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'Recipes', href: '/recipes' },
                { label: 'About Us', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#FFF8E7]/80 hover:text-[#F4A300] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F4A300] mb-5">For Business</p>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Become Distributor', href: '/b2b' },
                { label: 'Wholesale Inquiry', href: '/b2b' },
                { label: 'Export Partners', href: '/b2b' },
                { label: 'Franchise', href: '/b2b' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#FFF8E7]/80 hover:text-[#F4A300] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F4A300] mb-5">Contact Us</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-[#F4A300] flex-shrink-0 mt-0.5" />
                <span className="text-[#FFF8E7]/80">{contactMeta.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-[#F4A300]" />
                <a href={`tel:${contactMeta.phone}`} className="text-[#FFF8E7]/80 hover:text-white transition-colors">
                  {contactMeta.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-[#F4A300]" />
                <a href={`mailto:${contactMeta.email}`} className="text-[#FFF8E7]/80 hover:text-white transition-colors">
                  {contactMeta.email}
                </a>
              </li>
            </ul>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${contactMeta.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#20BD5A] transition-colors"
            >
              <FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="border-t border-[#FFF8E7]/10">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#FFF8E7]/60">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              FSSAI Licensed
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              ISO 22000:2018 Certified
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Made in India
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              100% Natural
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FFF8E7]/10 bg-[#1A0F0D]">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-[#FFF8E7]/50">
            <p>© {year} Zingking Masala Pvt. Ltd. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="hover:text-[#FFF8E7] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#FFF8E7] transition-colors">Terms of Service</Link>
              <Link href="/refund" className="hover:text-[#FFF8E7] transition-colors">Refund Policy</Link>
              <Link href="/shipping" className="hover:text-[#FFF8E7] transition-colors">Shipping Info</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#7B1E1E] text-white shadow-lg hover:bg-[#5B1515] transition-colors flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
