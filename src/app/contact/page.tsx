'use client';

import { useState } from 'react';
import { contactMeta } from '@/data/content';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'inquiry' }),
      });
      const json = await response.json();

      if (!response.ok || !json.success) {
        throw new Error(json.error || 'Failed to send message');
      }

      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setStatus('success');
      setMessage('Your message has been sent. Our team will contact you shortly.');
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'Unable to send your message right now.');
    }
  }

  return (
    <main className="min-h-screen bg-[#FFF8E7] pt-24">
      <section className="bg-gradient-to-r from-[#7B1E1E] to-[#4B2E2B] py-16 text-[#FFF8E7]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h1 className="font-playfair text-5xl md:text-[64px]">Contact Zingking Masala</h1>
          <p className="mt-4 max-w-3xl text-lg text-[#FFF8E7]/85">
            Reach out for retail orders, distributor support, and brand collaborations.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#4B2E2B]/10 bg-white p-6 md:p-8">
          <h2 className="font-playfair text-3xl text-[#4B2E2B]">Send Message</h2>
          <p className="mt-2 text-sm text-[#4B2E2B]/80">All fields are required for fast support response.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <Input label="Full Name" value={form.name} onChange={(v) => setForm((s) => ({ ...s, name: v }))} required />
            <Input label="Email" type="email" value={form.email} onChange={(v) => setForm((s) => ({ ...s, email: v }))} required />
            <Input label="Phone" value={form.phone} onChange={(v) => setForm((s) => ({ ...s, phone: v }))} required />
            <Input label="Subject" value={form.subject} onChange={(v) => setForm((s) => ({ ...s, subject: v }))} required />

            <label className="block text-sm text-[#4B2E2B]">
              <span className="mb-1 block font-medium">Message</span>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                className="h-28 w-full rounded-lg border border-[#4B2E2B]/20 px-3 py-2"
              />
            </label>

            {message && (
              <p className={`text-sm ${status === 'success' ? 'text-green-700' : 'text-red-700'}`}>{message}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full rounded-full bg-[#7B1E1E] px-5 py-3 text-sm font-semibold text-[#FFF8E7] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-[#4B2E2B]/10 bg-white p-6">
            <h2 className="font-playfair text-3xl text-[#4B2E2B]">Contact Details</h2>
            <ul className="mt-4 space-y-2 text-sm text-[#4B2E2B]/85">
              <li>Phone: {contactMeta.phone}</li>
              <li>Email: {contactMeta.email}</li>
              <li>Address: {contactMeta.address}</li>
            </ul>
            <a
              href={`https://wa.me/${contactMeta.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-full bg-[#25D366] px-5 py-2 text-sm font-semibold text-white"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#4B2E2B]/10 bg-white">
            <iframe
              title="Zingking location map"
              src={contactMeta.mapEmbed}
              loading="lazy"
              className="h-80 w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function Input({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm text-[#4B2E2B]">
      <span className="mb-1 block font-medium">{label}</span>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-[#4B2E2B]/20 px-3 py-2"
      />
    </label>
  );
}
