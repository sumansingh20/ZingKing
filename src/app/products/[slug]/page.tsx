'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiBox,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiHeart,
  FiMinus,
  FiPlus,
  FiShare2,
  FiShield,
  FiStar,
  FiTruck,
} from 'react-icons/fi';
import { products } from '@/data/brandContent';
import { addItemToCart } from '@/lib/cart';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products.find((p) => p.slug === slug);

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'nutrition'>('description');

  if (!product) {
    return (
      <main className="min-h-screen bg-[#FFF8E7] pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-4xl text-[#4B2E2B]">Product Not Found</h1>
          <Link href="/products" className="mt-4 inline-block text-[#7B1E1E] font-semibold">
            ← Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const allImages = [product.image, ...product.gallery];
  const relatedProducts = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItemToCart({
        productId: product.slug,
        sku: product.sku,
        name: product.name,
        image: product.image,
        price: product.price,
        weight: product.weight,
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#FFF8E7] pt-24">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-8">
        <nav className="flex items-center gap-2 text-sm text-[#4B2E2B]/60">
          <Link href="/" className="hover:text-[#7B1E1E]">Home</Link>
          <FiChevronRight className="w-4 h-4" />
          <Link href="/products" className="hover:text-[#7B1E1E]">Products</Link>
          <FiChevronRight className="w-4 h-4" />
          <span className="text-[#4B2E2B]">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image Gallery */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-white shadow-lg"
            >
              <Image
                src={allImages[activeImage]}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="rounded-full bg-[#F4A300] px-4 py-2 text-sm font-bold text-[#4B2E2B]">
                  {product.weight}g Pack
                </span>
                {product.category === 'premium' && (
                  <span className="rounded-full bg-[#7B1E1E] px-4 py-2 text-sm font-bold text-white">
                    Premium Quality
                  </span>
                )}
              </div>

              {/* Navigation Arrows */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImage((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[#4B2E2B] hover:bg-white transition-colors"
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImage((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[#4B2E2B] hover:bg-white transition-colors"
                  >
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </motion.div>

            {/* Thumbnail Gallery */}
            {allImages.length > 1 && (
              <div className="mt-4 flex gap-4">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === index ? 'border-[#7B1E1E] ring-2 ring-[#7B1E1E]/20' : 'border-transparent'
                    }`}
                  >
                    <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Category */}
              <span className="text-sm font-semibold text-[#7B1E1E] uppercase tracking-widest">
                {product.category} Masala
              </span>

              {/* Title */}
              <h1 className="font-playfair text-4xl md:text-5xl text-[#4B2E2B] mt-2">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 fill-[#F4A300] text-[#F4A300]" />
                  ))}
                </div>
                <span className="text-[#4B2E2B]/60">(4.8 · 234 reviews)</span>
              </div>

              {/* Price */}
              <div className="mt-6">
                <p className="text-4xl font-bold text-[#7B1E1E]">₹{product.price}</p>
                <p className="text-sm text-[#4B2E2B]/60 mt-1">Inclusive of all taxes · MRP</p>
              </div>

              {/* Short Description */}
              <p className="mt-6 text-lg text-[#4B2E2B]/80 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Quantity & Add to Cart */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center border border-[#4B2E2B]/20 rounded-full">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-12 h-12 flex items-center justify-center text-[#4B2E2B] hover:bg-[#4B2E2B]/5 rounded-l-full transition-colors"
                  >
                    <FiMinus />
                  </button>
                  <span className="w-12 text-center font-semibold text-[#4B2E2B]">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-12 h-12 flex items-center justify-center text-[#4B2E2B] hover:bg-[#4B2E2B]/5 rounded-r-full transition-colors"
                  >
                    <FiPlus />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#7B1E1E] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#5B1515] transition-colors shadow-lg shadow-[#7B1E1E]/20"
                >
                  <FiBox className="w-5 h-5" />
                  Add to Cart
                </button>

                <button className="w-12 h-12 flex items-center justify-center border border-[#4B2E2B]/20 rounded-full text-[#4B2E2B] hover:bg-[#4B2E2B]/5 transition-colors">
                  <FiHeart />
                </button>

                <button className="w-12 h-12 flex items-center justify-center border border-[#4B2E2B]/20 rounded-full text-[#4B2E2B] hover:bg-[#4B2E2B]/5 transition-colors">
                  <FiShare2 />
                </button>
              </div>

              {/* Features */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: FiShield, text: '100% Pure & Natural' },
                  { icon: FiTruck, text: 'Free Delivery Above ₹499' },
                  { icon: FiCheck, text: 'FSSAI Certified' },
                  { icon: FiBox, text: 'Secure Packaging' },
                ].map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3 text-sm text-[#4B2E2B]">
                    <feature.icon className="w-5 h-5 text-[#7B1E1E]" />
                    {feature.text}
                  </div>
                ))}
              </div>

              {/* Best For */}
              <div className="mt-8">
                <h3 className="font-semibold text-[#4B2E2B] mb-3">Best For:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.bestFor.map((item) => (
                    <span key={item} className="px-4 py-2 bg-[#F4A300]/10 text-[#4B2E2B] rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-6 flex items-center gap-4">
                {product.certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                    <FiShield className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="flex border-b border-[#4B2E2B]/20">
            {[
              { key: 'description', label: 'Description' },
              { key: 'ingredients', label: 'Ingredients' },
              { key: 'nutrition', label: 'Nutrition Facts' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`px-6 py-4 font-semibold text-sm transition-colors border-b-2 -mb-[2px] ${
                  activeTab === tab.key
                    ? 'border-[#7B1E1E] text-[#7B1E1E]'
                    : 'border-transparent text-[#4B2E2B]/60 hover:text-[#4B2E2B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8">
            {activeTab === 'description' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-lg max-w-none text-[#4B2E2B]/80"
              >
                <p>{product.longDescription}</p>
                <h4 className="text-[#4B2E2B] mt-6">How to Use:</h4>
                <p>Add 1-2 teaspoons of {product.name} during the final stages of cooking for best aroma. For marinades, mix with oil or yogurt and let it rest for 30 minutes before cooking.</p>
                <h4 className="text-[#4B2E2B] mt-6">Storage Instructions:</h4>
                <p>Store in a cool, dry place away from direct sunlight. Keep the container tightly closed after each use to preserve freshness and aroma.</p>
              </motion.div>
            )}

            {activeTab === 'ingredients' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {product.ingredients.map((ingredient) => (
                    <div key={ingredient} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-[#4B2E2B]/10">
                      <div className="w-8 h-8 rounded-full bg-[#F4A300]/20 flex items-center justify-center">
                        <FiCheck className="w-4 h-4 text-[#7B1E1E]" />
                      </div>
                      <span className="text-[#4B2E2B]">{ingredient}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-[#4B2E2B]/60">
                  * All ingredients are 100% natural and sourced from premium farms across India. No artificial colors, preservatives, or additives.
                </p>
              </motion.div>
            )}

            {activeTab === 'nutrition' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md"
              >
                <div className="bg-white rounded-2xl border border-[#4B2E2B]/10 overflow-hidden">
                  <div className="bg-[#7B1E1E] text-white p-4">
                    <h3 className="font-semibold">Nutrition Facts</h3>
                    <p className="text-sm text-white/80">Per 100g serving</p>
                  </div>
                  <div className="divide-y divide-[#4B2E2B]/10">
                    {[
                      { label: 'Energy', value: `${product.nutrition.calories} kcal` },
                      { label: 'Protein', value: `${product.nutrition.protein}g` },
                      { label: 'Carbohydrates', value: `${product.nutrition.carbs}g` },
                      { label: 'Fat', value: `${product.nutrition.fat}g` },
                      { label: 'Fiber', value: `${product.nutrition.fiber}g` },
                      { label: 'Sodium', value: `${product.nutrition.sodium}mg` },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between p-4">
                        <span className="text-[#4B2E2B]/70">{item.label}</span>
                        <span className="font-semibold text-[#4B2E2B]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-playfair text-3xl text-[#4B2E2B] mb-8">You May Also Like</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relProduct) => (
                <Link
                  key={relProduct.slug}
                  href={`/products/${relProduct.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#4B2E2B]/10 hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relProduct.image}
                      alt={relProduct.name}
                      fill
                      sizes="25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-playfair text-xl text-[#4B2E2B] group-hover:text-[#7B1E1E] transition-colors">
                      {relProduct.name}
                    </h3>
                    <p className="text-lg font-bold text-[#7B1E1E] mt-2">₹{relProduct.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
