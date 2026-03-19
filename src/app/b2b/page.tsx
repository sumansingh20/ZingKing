'use client';

import { useState } from 'react';

const benefits = [
  'Dedicated regional account manager',
  'Volume-based pricing slabs',
  'Co-branded point-of-sale support',
  'Priority dispatch and replenishment',
];

export default function B2BPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    name: '',
    business: '',
    contact: '',
    email: '',
    city: '',
    notes: '',
  });

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.contact,
          subject: `B2B Partnership Request - ${form.business}`,
          message: `Business: ${form.business}\nCity: ${form.city}\nNotes: ${form.notes}`,
          type: 'partnership',
        }),
      });

      const json = await response.json();
      if (!response.ok || !json.success) {
        throw new Error(json.error || 'Failed to submit application');
      }

      setStatus('success');
      setMessage('Application submitted. Our distributor team will contact you in 24 hours.');
      setForm({ name: '', business: '', contact: '', email: '', city: '', notes: '' });
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'Unable to submit right now.');
    }
  }

  return (
    <main className="min-h-screen bg-[#FFF8E7] pt-24">
      <section className="bg-gradient-to-r from-[#7B1E1E] to-[#4B2E2B] py-16 text-[#FFF8E7]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h1 className="font-playfair text-5xl md:text-[64px]">Distributor And B2B Program</h1>
          <p className="mt-4 max-w-3xl text-lg text-[#FFF8E7]/85">
            Build a high-trust spice business with premium SKUs, strong demand, and supply support.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#4B2E2B]/10 bg-white p-6 md:p-8">
          <h2 className="font-playfair text-3xl text-[#4B2E2B]">Why Partner With Zingking</h2>
          <ul className="mt-5 space-y-3 text-sm text-[#4B2E2B]/90">
            {benefits.map((item) => (
              <li key={item} className="rounded-lg bg-[#FFF8E7] px-4 py-3">{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-[#4B2E2B]/10 bg-white p-6 md:p-8">
          <h2 className="font-playfair text-3xl text-[#4B2E2B]">Apply Now</h2>
          <form onSubmit={submitForm} className="mt-6 space-y-4">
            <Input label="Your Name" value={form.name} onChange={(v) => setForm((s) => ({ ...s, name: v }))} required />
            <Input label="Business Name" value={form.business} onChange={(v) => setForm((s) => ({ ...s, business: v }))} required />
            <Input label="Contact Number" value={form.contact} onChange={(v) => setForm((s) => ({ ...s, contact: v }))} required />
            <Input label="Email" type="email" value={form.email} onChange={(v) => setForm((s) => ({ ...s, email: v }))} required />
            <Input label="City" value={form.city} onChange={(v) => setForm((s) => ({ ...s, city: v }))} required />
            <label className="block text-sm text-[#4B2E2B]">
              <span className="mb-1 block font-medium">Business Notes</span>
              <textarea
                value={form.notes}
                onChange={(e) => setForm((s) => ({ ...s, notes: e.target.value }))}
                className="h-24 w-full rounded-lg border border-[#4B2E2B]/20 px-3 py-2"
                placeholder="Current channel reach, expected monthly volume, or key requirements"
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
              {status === 'loading' ? 'Submitting...' : 'Submit Partnership Request'}
            </button>
          </form>
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
