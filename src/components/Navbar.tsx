'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiShoppingCart, FiX, FiPhone, FiSearch  } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { getCartCount } from '@/lib/cart';
import { contactMeta } from '@/data/content';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Recipes', href: '/recipes' },
  { name: 'About', href: '/about' },
  { name: 'B2B', href: '/b2b' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const sync = () => setCartCount(getCartCount());
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    sync();
    onScroll();

    window.addEventListener('storage', sync);
    window.addEventListener('zingking-cart-updated', sync as EventListener);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('zingking-cart-updated', sync as EventListener);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHomePage = pathname === '/';
  const headerStyle = isScrolled || !isHomePage
    ? 'bg-white/95 backdrop-blur-lg border-[#4B2E2B]/10 shadow-sm'
    : 'bg-transparent border-transparent';

  const textStyle = isScrolled || !isHomePage ? 'text-[#4B2E2B]' : 'text-white';
  const logoStyle = isScrolled || !isHomePage ? 'text-[#7B1E1E]' : 'text-white';

  return (
    <>
      {/* Top Bar */}
      <div className={`hidden lg:block transition-all ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'}`}>
        <div className="bg-[#7B1E1E] text-white text-sm py-2">
          <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <FiPhone className="w-4 h-4" />
                <a href={`tel:${contactMeta.phone}`}>{contactMeta.phone}</a>
              </span>
              <span className="text-white/60">|</span>
              <span>Free Delivery on Orders Above ₹499</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`https://wa.me/${contactMeta.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#F4A300] transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
              <span className="text-white/60">|</span>
              <Link href="/admin" className="hover:text-[#F4A300] transition-colors">
                Dealer Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${headerStyle} ${
          !isScrolled && isHomePage ? 'lg:top-[40px]' : 'top-0'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <span className={`font-playfair text-3xl font-bold tracking-wide transition-colors ${logoStyle}`}>
                Zingking
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#F4A300]"></span>
            </div>
            <span className={`text-sm font-semibold uppercase tracking-[0.15em] transition-colors ${
              isScrolled || !isHomePage ? 'text-[#F4A300]' : 'text-[#F4A300]'
            }`}>
              Masala
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${textStyle} ${
                    isActive ? 'text-[#7B1E1E]' : 'hover:text-[#7B1E1E]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7B1E1E]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button
              className={`hidden md:flex w-10 h-10 rounded-full items-center justify-center transition-colors ${
                isScrolled || !isHomePage
                  ? 'text-[#4B2E2B] hover:bg-[#4B2E2B]/10'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Search"
            >
              <FiSearch className="w-5 h-5" />
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className={`relative flex w-10 h-10 rounded-full items-center justify-center transition-colors ${
                isScrolled || !isHomePage
                  ? 'text-[#4B2E2B] hover:bg-[#4B2E2B]/10'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <FiShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-1 -top-1 min-w-[20px] h-5 rounded-full bg-[#7B1E1E] px-1.5 flex items-center justify-center text-[10px] font-bold text-white"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>

            {/* Buy Now Button */}
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7B1E1E] to-[#9B2E2E] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#7B1E1E]/25 hover:shadow-xl hover:shadow-[#7B1E1E]/30 transition-all"
            >
              Shop Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className={`lg:hidden flex w-10 h-10 rounded-full items-center justify-center transition-colors ${
                isScrolled || !isHomePage
                  ? 'text-[#4B2E2B] hover:bg-[#4B2E2B]/10'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-[#4B2E2B]/10 bg-white lg:hidden overflow-hidden"
            >
              <div className="mx-auto max-w-7xl px-4 py-6">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-[#7B1E1E]/10 text-[#7B1E1E]'
                            : 'text-[#4B2E2B] hover:bg-[#FFF8E7]'
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-[#4B2E2B]/10">
                  <Link
                    href="/products"
                    className="block w-full rounded-full bg-gradient-to-r from-[#7B1E1E] to-[#9B2E2E] px-6 py-3 text-center text-base font-semibold text-white"
                  >
                    Shop Now
                  </Link>

                  <a
                    href={`https://wa.me/${contactMeta.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 flex items-center justify-center gap-2 rounded-full border border-[#25D366] px-6 py-3 text-base font-semibold text-[#25D366]"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="mt-6 text-center text-sm text-[#4B2E2B]/60">
                  <p>Call us: {contactMeta.phone}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
