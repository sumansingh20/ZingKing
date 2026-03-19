import Link from 'next/link';

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const params = await searchParams;
  const orderNumber = params.order;

  return (
    <main className="min-h-screen bg-[#FFF8E7] pt-24">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center md:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#7B1E1E]">Order Confirmed</p>
        <h1 className="mt-4 font-playfair text-5xl text-[#4B2E2B]">Thank You For Your Purchase</h1>
        <p className="mt-4 text-[#4B2E2B]/80">
          Your order has been placed successfully.
          {orderNumber ? ` Reference: ${orderNumber}.` : ''}
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/products" className="rounded-full bg-[#7B1E1E] px-6 py-3 text-sm font-semibold text-[#FFF8E7]">
            Continue Shopping
          </Link>
          <Link href="/contact" className="rounded-full border border-[#7B1E1E] px-6 py-3 text-sm font-semibold text-[#7B1E1E]">
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}
