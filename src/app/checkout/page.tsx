'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { clearCart, getCartItems } from '@/lib/cart';

export default function CheckoutPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India',
    paymentMethod: 'cod',
    notes: '',
  });

  const cartItems = useMemo(() => getCartItems(), []);
  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );
  const tax = Math.round(subtotal * 0.05);
  const shippingCost = subtotal > 799 || subtotal === 0 ? 0 : 50;
  const totalAmount = subtotal + tax + shippingCost;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    if (cartItems.length === 0) {
      setError('Your cart is empty.');
      return;
    }

    try {
      setSubmitting(true);
      const payload = {
        customerName: form.customerName,
        customerEmail: form.customerEmail,
        customerPhone: form.customerPhone,
        shippingAddress: {
          street: form.street,
          city: form.city,
          state: form.state,
          pincode: form.pincode,
          country: form.country,
        },
        items: cartItems.map((item) => ({
          productId: item.productId,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
        subtotal,
        tax,
        shippingCost,
        totalAmount,
        paymentMethod: form.paymentMethod,
        notes: form.notes,
      };

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await response.json();
      if (!response.ok || !json.success) {
        throw new Error(json.error || 'Failed to place order');
      }

      clearCart();
      router.push(`/checkout/success?order=${json.data.orderNumber}`);
    } catch (submitError: any) {
      setError(submitError.message || 'Unable to place your order right now.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#FFF8E7] pt-24">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <h1 className="font-playfair text-5xl text-[#4B2E2B]">Checkout</h1>

        {cartItems.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-[#4B2E2B]/10 bg-white p-10 text-center">
            <p className="text-[#4B2E2B]">There are no items to checkout.</p>
            <Link href="/products" className="mt-6 inline-block rounded-full bg-[#7B1E1E] px-6 py-3 text-sm font-semibold text-[#FFF8E7]">
              Shop Now
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 grid gap-8 lg:grid-cols-3">
            <section className="space-y-4 lg:col-span-2">
              <div className="rounded-2xl border border-[#4B2E2B]/10 bg-white p-6">
                <h2 className="font-playfair text-3xl text-[#4B2E2B]">Delivery Details</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <Input label="Full Name" value={form.customerName} onChange={(v) => setForm((s) => ({ ...s, customerName: v }))} required />
                  <Input label="Email" type="email" value={form.customerEmail} onChange={(v) => setForm((s) => ({ ...s, customerEmail: v }))} required />
                  <Input label="Phone" value={form.customerPhone} onChange={(v) => setForm((s) => ({ ...s, customerPhone: v }))} required />
                  <Input label="Street Address" value={form.street} onChange={(v) => setForm((s) => ({ ...s, street: v }))} required />
                  <Input label="City" value={form.city} onChange={(v) => setForm((s) => ({ ...s, city: v }))} required />
                  <Input label="State" value={form.state} onChange={(v) => setForm((s) => ({ ...s, state: v }))} required />
                  <Input label="Pincode" value={form.pincode} onChange={(v) => setForm((s) => ({ ...s, pincode: v }))} required />
                  <Input label="Country" value={form.country} onChange={(v) => setForm((s) => ({ ...s, country: v }))} required />
                </div>
              </div>

              <div className="rounded-2xl border border-[#4B2E2B]/10 bg-white p-6">
                <h2 className="font-playfair text-3xl text-[#4B2E2B]">Payment</h2>
                <div className="mt-4 space-y-2 text-sm text-[#4B2E2B]">
                  <label className="flex items-center gap-3 rounded-lg border border-[#4B2E2B]/10 p-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={form.paymentMethod === 'cod'}
                      onChange={() => setForm((s) => ({ ...s, paymentMethod: 'cod' }))}
                    />
                    Cash on Delivery
                  </label>
                  <label className="flex items-center gap-3 rounded-lg border border-[#4B2E2B]/10 p-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={form.paymentMethod === 'online'}
                      onChange={() => setForm((s) => ({ ...s, paymentMethod: 'online' }))}
                    />
                    Online Payment (Order marked as pending)
                  </label>
                </div>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm((s) => ({ ...s, notes: e.target.value }))}
                  placeholder="Order notes (optional)"
                  className="mt-4 h-24 w-full rounded-lg border border-[#4B2E2B]/20 px-3 py-2 text-sm text-[#4B2E2B]"
                />
              </div>
            </section>

            <aside className="h-fit rounded-2xl border border-[#4B2E2B]/10 bg-white p-6 lg:sticky lg:top-24">
              <h2 className="font-playfair text-3xl text-[#4B2E2B]">Summary</h2>
              <div className="mt-4 space-y-2 text-sm text-[#4B2E2B]">
                <div className="flex justify-between"><span>Subtotal</span><span>Rs {subtotal}</span></div>
                <div className="flex justify-between"><span>GST</span><span>Rs {tax}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>{shippingCost === 0 ? 'Free' : `Rs ${shippingCost}`}</span></div>
                <div className="mt-2 border-t border-[#4B2E2B]/10 pt-2 font-semibold">
                  <div className="flex justify-between"><span>Total</span><span>Rs {totalAmount}</span></div>
                </div>
              </div>

              {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 w-full rounded-full bg-[#7B1E1E] px-5 py-3 text-sm font-semibold text-[#FFF8E7] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? 'Placing Order...' : 'Place Order'}
              </button>
            </aside>
          </form>
        )}
      </div>
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
