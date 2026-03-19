import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { contactMeta } from '@/data/brandContent';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#4B2E2B] text-[#FFF8E7]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <p className="font-playfair text-3xl">Zingking Masala</p>
          <p className="mt-4 text-sm leading-7 text-[#FFF8E7]/80">
            Premium Indian spice brand built for trust, flavor consistency, and long-term business growth.
          </p>
          <a
            href={`https://wa.me/${contactMeta.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white"
          >
            <FaWhatsapp /> WhatsApp Us
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F4A300]">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-[#FFF8E7]/80">
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/recipes">Recipes</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F4A300]">Business</p>
          <ul className="mt-4 space-y-2 text-sm text-[#FFF8E7]/80">
            <li><Link href="/b2b">Distributor Program</Link></li>
            <li><Link href="/contact">Contact Sales</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/checkout">Checkout</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F4A300]">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-[#FFF8E7]/80">
            <li>{contactMeta.phone}</li>
            <li>{contactMeta.email}</li>
            <li>{contactMeta.address}</li>
          </ul>
          <div className="mt-4 flex gap-3 text-lg text-[#FFF8E7]">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#FFF8E7]/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-[#FFF8E7]/70 md:flex-row md:items-center md:justify-between md:px-8">
          <p>Copyright {year} Zingking Masala. All rights reserved.</p>
          <p>FSSAI Licensed · ISO 22000 Facility · Made in India</p>
        </div>
      </div>
    </footer>
  );
}
