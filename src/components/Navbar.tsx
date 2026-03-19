'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiMenu, FiShoppingCart, FiX } from 'react-icons/fi';
import { getCartCount } from '@/lib/cart';

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

  useEffect(() => {
    const sync = () => setCartCount(getCartCount());
    const onScroll = () => setIsScrolled(window.scrollY > 16);
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

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all ${
        isScrolled
          ? 'border-[#4B2E2B]/15 bg-[#FFF8E7]/95 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="font-playfair text-3xl font-bold tracking-wide text-[#7B1E1E]">
          Zingking
          <span className="ml-1 text-base font-semibold uppercase tracking-[0.2em] text-[#F4A300]">
            Masala
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-[#4B2E2B] transition hover:text-[#7B1E1E]">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/cart" className="relative rounded-full border border-[#4B2E2B]/20 p-2 text-[#4B2E2B] transition hover:border-[#7B1E1E] hover:text-[#7B1E1E]">
            <FiShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 rounded-full bg-[#7B1E1E] px-1.5 py-0.5 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            href="/products"
            className="hidden rounded-full bg-[#7B1E1E] px-5 py-2 text-sm font-semibold text-[#FFF8E7] md:inline-block"
          >
            Buy Now
          </Link>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-full border border-[#4B2E2B]/20 p-2 text-[#4B2E2B] lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[#4B2E2B]/10 bg-[#FFF8E7] px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#4B2E2B] hover:bg-[#f6e9cb]"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-[#7B1E1E] px-5 py-2 text-center text-sm font-semibold text-[#FFF8E7]"
            >
              Buy Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
