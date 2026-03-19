'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  CartItem,
  getCartItems,
  removeCartItem,
  updateCartItemQuantity,
} from '@/lib/cart';

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const sync = () => setItems(getCartItems());
    sync();
    window.addEventListener('storage', sync);
    window.addEventListener('zingking-cart-updated', sync as EventListener);

    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('zingking-cart-updated', sync as EventListener);
    };
  }, []);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const shipping = subtotal > 799 || subtotal === 0 ? 0 : 50;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  return (
    <main className="min-h-screen bg-[#FFF8E7] pt-24">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <h1 className="font-playfair text-5xl text-[#4B2E2B]">Your Cart</h1>

        {items.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-[#4B2E2B]/10 bg-white p-10 text-center">
            <p className="text-[#4B2E2B]">Your cart is empty.</p>
            <Link href="/products" className="mt-6 inline-block rounded-full bg-[#7B1E1E] px-6 py-3 text-sm font-semibold text-[#FFF8E7]">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <section className="space-y-4 lg:col-span-2">
              {items.map((item) => (
                <article key={item.productId} className="grid grid-cols-[96px_1fr] gap-4 rounded-2xl border border-[#4B2E2B]/10 bg-white p-4 md:grid-cols-[120px_1fr]">
                  <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-28 md:w-28">
                    <Image src={item.image} alt={item.name} fill sizes="120px" className="object-cover" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h2 className="font-playfair text-2xl text-[#4B2E2B]">{item.name}</h2>
                        <p className="text-xs text-[#4B2E2B]/70">{item.weight}g pack · SKU {item.sku}</p>
                      </div>
                      <button
                        onClick={() => {
                          removeCartItem(item.productId);
                          setItems(getCartItems());
                        }}
                        className="text-xs font-semibold text-[#7B1E1E]"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-[#4B2E2B]/20">
                        <button
                          onClick={() => {
                            updateCartItemQuantity(item.productId, item.quantity - 1);
                            setItems(getCartItems());
                          }}
                          className="px-3 py-1 text-[#4B2E2B]"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-sm text-[#4B2E2B]">{item.quantity}</span>
                        <button
                          onClick={() => {
                            updateCartItemQuantity(item.productId, item.quantity + 1);
                            setItems(getCartItems());
                          }}
                          className="px-3 py-1 text-[#4B2E2B]"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-semibold text-[#7B1E1E]">Rs {item.price * item.quantity}</p>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <aside className="h-fit rounded-2xl border border-[#4B2E2B]/10 bg-white p-6 lg:sticky lg:top-24">
              <h2 className="font-playfair text-3xl text-[#4B2E2B]">Order Summary</h2>
              <div className="mt-6 space-y-3 text-sm text-[#4B2E2B]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs {subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5%)</span>
                  <span>Rs {tax}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `Rs ${shipping}`}</span>
                </div>
                <div className="border-t border-[#4B2E2B]/10 pt-3 text-base font-semibold">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span>Rs {total}</span>
                  </div>
                </div>
              </div>

              <Link href="/checkout" className="mt-6 block rounded-full bg-[#7B1E1E] px-5 py-3 text-center text-sm font-semibold text-[#FFF8E7]">
                Proceed to Checkout
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
