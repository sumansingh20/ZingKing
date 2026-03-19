'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { products } from '@/data/brandContent';
import { addItemToCart } from '@/lib/cart';

type PriceFilter = 'all' | 'under-160' | '160-200' | 'above-200';

const categoryFilters = [
  { key: 'all', label: 'All Products' },
  { key: 'basic', label: 'Basic Spices' },
  { key: 'blended', label: 'Blended Masalas' },
  { key: 'premium', label: 'Premium Range' },
  { key: 'export', label: 'Export Packs' },
] as const;

const priceFilters = [
  { key: 'all', label: 'All Prices' },
  { key: 'under-160', label: 'Under Rs 160' },
  { key: '160-200', label: 'Rs 160 to Rs 200' },
  { key: 'above-200', label: 'Above Rs 200' },
] as const;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categoryFilters)[number]['key']>('all');
  const [selectedPrice, setSelectedPrice] = useState<PriceFilter>('all');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;

      let priceMatch = true;
      if (selectedPrice === 'under-160') priceMatch = product.price < 160;
      if (selectedPrice === '160-200') priceMatch = product.price >= 160 && product.price <= 200;
      if (selectedPrice === 'above-200') priceMatch = product.price > 200;

      return categoryMatch && priceMatch;
    });
  }, [selectedCategory, selectedPrice]);

  return (
    <main className="min-h-screen bg-[#FFF8E7] pt-24">
      <section className="bg-gradient-to-r from-[#7B1E1E] to-[#4B2E2B] py-16 text-[#FFF8E7]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h1 className="font-playfair text-5xl md:text-[64px]">Our Product Portfolio</h1>
          <p className="mt-4 max-w-3xl text-lg text-[#FFF8E7]/85">
            FMCG-ready masalas crafted for home kitchens, modern retail, and growing food businesses.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-8 lg:grid-cols-4">
        <aside className="rounded-2xl border border-[#4B2E2B]/10 bg-white p-6 lg:col-span-1 lg:h-fit lg:sticky lg:top-24">
          <h2 className="font-playfair text-2xl text-[#4B2E2B]">Filters</h2>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#7B1E1E]">Category</p>
            <div className="mt-3 space-y-2">
              {categoryFilters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setSelectedCategory(filter.key)}
                  className={`w-full rounded-lg px-4 py-2 text-left text-sm transition ${
                    selectedCategory === filter.key
                      ? 'bg-[#7B1E1E] text-[#FFF8E7]'
                      : 'bg-[#FFF8E7] text-[#4B2E2B] hover:bg-[#f9edd1]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#7B1E1E]">Price</p>
            <div className="mt-3 space-y-2">
              {priceFilters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setSelectedPrice(filter.key)}
                  className={`w-full rounded-lg px-4 py-2 text-left text-sm transition ${
                    selectedPrice === filter.key
                      ? 'bg-[#F4A300] text-[#4B2E2B]'
                      : 'bg-[#FFF8E7] text-[#4B2E2B] hover:bg-[#f9edd1]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedPrice('all');
            }}
            className="mt-8 w-full rounded-lg border border-[#7B1E1E] px-4 py-2 text-sm font-semibold text-[#7B1E1E] transition hover:bg-[#7B1E1E] hover:text-[#FFF8E7]"
          >
            Reset Filters
          </button>
        </aside>

        <div className="lg:col-span-3">
          <p className="mb-6 text-sm text-[#4B2E2B]/80">
            Showing {filteredProducts.length} of {products.length} products
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <motion.article
                key={product.sku}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-2xl border border-[#4B2E2B]/10 bg-white shadow-soft"
              >
                <div className="relative h-52">
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 1280px) 50vw, 33vw" className="object-cover" />
                  <span className="absolute right-3 top-3 rounded-full bg-[#F4A300] px-3 py-1 text-xs font-semibold text-[#4B2E2B]">
                    {product.weight}g
                  </span>
                </div>

                <div className="p-5">
                  <h2 className="font-playfair text-2xl text-[#4B2E2B]">{product.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#4B2E2B]/80">{product.longDescription}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.bestFor.map((item) => (
                      <span key={item} className="rounded-full bg-[#FFF8E7] px-2.5 py-1 text-xs font-medium text-[#7B1E1E]">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-xl font-bold text-[#7B1E1E]">Rs {product.price}</p>
                    <button
                      onClick={() =>
                        addItemToCart({
                          productId: product.slug,
                          sku: product.sku,
                          name: product.name,
                          image: product.image,
                          price: product.price,
                          weight: product.weight,
                        })
                      }
                      className="rounded-full bg-[#7B1E1E] px-4 py-2 text-xs font-semibold text-[#FFF8E7] transition hover:bg-[#61201f]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="mt-12 rounded-2xl border border-[#4B2E2B]/10 bg-white p-8 text-center text-[#4B2E2B]">
              No products matched the selected filters.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
