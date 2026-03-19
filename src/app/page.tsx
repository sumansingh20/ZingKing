'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FiAward,
  FiBox,
  FiCheck,
  FiChevronRight,
  FiClock,
  FiHeart,
  FiCheckCircle,
  FiMapPin,
  FiPhone,
  FiPlay,
  FiSend,
  FiShield,
  FiStar,
  FiTruck,
  FiUsers,
} from 'react-icons/fi';
import {
  blogPosts,
  brandStory,
  categoryCards,
  contactMeta,
  heroImage,
  products,
  qualitySteps,
  recipeCards,
  testimonials,
} from '@/data/content';
import { addItemToCart } from '@/lib/cart';
import SafeImage from '@/components/ui/SafeImage';

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <main className="min-h-screen bg-brand-light overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <SafeImage
            src={heroImage}
            alt="Premium spice spread"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e120f]/95 via-[#1e120f]/80 to-[#1e120f]/70" />

        {/* Floating Spice Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#F4A300]/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#F4A300]/20 px-4 py-2 text-[#F4A300] mb-6"
            >
              <FiAward className="w-4 h-4" />
              <span className="text-sm font-medium">FSSAI & ISO 22000 Certified</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-playfair text-5xl font-bold leading-tight text-[#FFF8E7] md:text-[72px]"
            >
              Bring Home the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A300] to-[#FFD700]">
                Taste of Tradition
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="mt-6 max-w-2xl text-lg text-[#FFF8E7]/90 leading-relaxed md:text-xl"
            >
              Premium quality spices crafted with 100% natural ingredients. Trusted by 10 lakh+ Indian families and 500+ restaurants nationwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7B1E1E] to-[#9B2E2E] px-8 py-4 text-base font-semibold text-[#FFF8E7] shadow-lg shadow-[#7B1E1E]/40 transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                Explore Products
                <FiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/b2b"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#FFF8E7]/60 px-8 py-4 text-base font-semibold text-[#FFF8E7] backdrop-blur transition-all hover:bg-[#FFF8E7]/10 hover:border-[#FFF8E7]"
              >
                <FiUsers className="w-5 h-5" />
                Become Distributor
              </Link>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '10L+', label: 'Happy Customers' },
                { value: '500+', label: 'Partner Stores' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-[#F4A300]">{stat.value}</p>
                  <p className="text-sm text-[#FFF8E7]/70">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#FFF8E7]/60"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest">SCROLL</span>
            <div className="w-6 h-10 border-2 border-[#FFF8E7]/40 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-[#F4A300] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="border-y border-[#4B2E2B]/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: FiShield, text: 'FSSAI Certified', color: 'text-green-600' },
              { icon: FiAward, text: 'ISO 22000 Facility', color: 'text-blue-600' },
              { icon: FiCheckCircle, text: '100% Natural Spices', color: 'text-emerald-600' },
              { icon: FiHeart, text: 'No Preservatives', color: 'text-red-600' },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center justify-center gap-3">
                <badge.icon className={`w-6 h-6 ${badge.color}`} />
                <p className="text-sm font-semibold text-[#4B2E2B] md:text-base">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-[#7B1E1E] uppercase tracking-widest"
            >
              Our Collection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-4xl md:text-5xl text-[#4B2E2B] mt-2"
            >
              Featured Products
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-[#4B2E2B]/80 max-w-2xl"
            >
              Premium spice blends trusted by Indian kitchens and professional chefs
            </motion.p>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-flex items-center gap-2 text-[#7B1E1E] font-semibold hover:gap-3 transition-all"
          >
            View All Products
            <FiChevronRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.slice(0, 8).map((product, index) => (
            <motion.article
              key={product.sku}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-[#4B2E2B]/10 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Link href={`/products/${product.slug}`}>
                <div className="relative h-56 overflow-hidden">
                  <SafeImage
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="rounded-full bg-[#F4A300] px-3 py-1 text-xs font-bold text-[#4B2E2B]">
                      {product.weight}g
                    </span>
                    {product.category === 'premium' && (
                      <span className="rounded-full bg-[#7B1E1E] px-3 py-1 text-xs font-bold text-white">
                        Premium
                      </span>
                    )}
                  </div>

                  {/* Quick View */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold text-[#4B2E2B]">
                      <FiPlay className="w-3 h-3" /> Quick View
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 fill-[#F4A300] text-[#F4A300]" />
                  ))}
                  <span className="text-xs text-[#4B2E2B]/60 ml-1">(4.8)</span>
                </div>

                <Link href={`/products/${product.slug}`}>
                  <h3 className="font-playfair text-2xl text-[#4B2E2B] hover:text-[#7B1E1E] transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="mt-2 text-sm text-[#4B2E2B]/70 line-clamp-2">{product.shortDescription}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-[#7B1E1E]">₹{product.price}</p>
                    <p className="text-xs text-[#4B2E2B]/60">Inclusive of all taxes</p>
                  </div>
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
                    className="rounded-full bg-[#7B1E1E] p-3 text-white hover:bg-[#5B1515] transition-colors shadow-lg shadow-[#7B1E1E]/20"
                  >
                    <FiBox className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#7B1E1E] text-white px-8 py-3 rounded-full font-semibold"
          >
            View All Products
            <FiChevronRight />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-[#FFF8E7] to-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#7B1E1E] uppercase tracking-widest">
              Why Zingking
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#4B2E2B] mt-2">
              The Zingking Difference
            </h2>
            <p className="mt-4 text-lg text-[#4B2E2B]/80 max-w-2xl mx-auto">
              What makes us the trusted choice for millions of Indian families
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: FiCheckCircle,
                title: '100% Pure Spices',
                description: 'No artificial colors, no preservatives, no adulteration. Just pure natural spices.',
                color: 'bg-green-50 text-green-600',
              },
              {
                icon: FiShield,
                title: 'Quality Certified',
                description: 'FSSAI approved, ISO 22000 certified facility with strict quality controls.',
                color: 'bg-blue-50 text-blue-600',
              },
              {
                icon: FiMapPin,
                title: 'Farm Fresh Sourcing',
                description: 'Direct procurement from trusted farms in Kerala, Rajasthan & Andhra Pradesh.',
                color: 'bg-orange-50 text-orange-600',
              },
              {
                icon: FiTruck,
                title: 'Fast Delivery',
                description: 'Pan-India delivery with secure packaging to preserve freshness.',
                color: 'bg-purple-50 text-purple-600',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 border border-[#4B2E2B]/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-playfair text-2xl text-[#4B2E2B] mb-3">{feature.title}</h3>
                <p className="text-[#4B2E2B]/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#7B1E1E] uppercase tracking-widest">
              Browse Categories
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#4B2E2B] mt-2">
              Shop By Category
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categoryCards.map((card, index) => (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
              >
                <div className="relative h-72">
                  <SafeImage src={card.image} alt={card.title} fill sizes="25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e120f]/90 via-[#1e120f]/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair text-2xl text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-white/80 mb-4">{card.description}</p>
                  <span className="inline-flex items-center gap-2 text-[#F4A300] font-semibold text-sm group-hover:gap-3 transition-all">
                    Shop Now <FiChevronRight />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <SafeImage
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80"
                  alt="Spice quality process"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-[#7B1E1E] text-white p-6 rounded-2xl shadow-xl"
              >
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm text-white/80">Years of Excellence</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-[#7B1E1E] uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl text-[#4B2E2B] mt-2 mb-6">
                {brandStory.heading}
              </h2>
              <p className="text-lg text-[#4B2E2B]/90 leading-relaxed mb-4">{brandStory.summary}</p>
              <p className="text-[#4B2E2B]/80 leading-relaxed mb-8">{brandStory.detail}</p>

              <div className="space-y-4">
                {[
                  'Sourced from premium spice gardens',
                  'Cold-ground using traditional mills',
                  'Zero additives or fillers',
                  'ISO 22000 certified facility',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F4A300]/20 flex items-center justify-center">
                      <FiCheck className="w-4 h-4 text-[#7B1E1E]" />
                    </div>
                    <span className="text-[#4B2E2B]">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 bg-[#7B1E1E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5B1515] transition-colors"
              >
                Learn More About Us
                <FiChevronRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="bg-[#4B2E2B] py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#F4A300] uppercase tracking-widest">
              Our Process
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-white mt-2">
              From Farm to Your Kitchen
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              A 5-step quality process ensuring every pack meets premium standards
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {qualitySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-[#F4A300] flex items-center justify-center mb-4 font-bold text-[#4B2E2B]">
                  {index + 1}
                </div>
                <h3 className="font-playfair text-xl text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/70">{step.description}</p>
                {index < qualitySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-[#F4A300]">
                    <FiChevronRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-sm font-semibold text-[#7B1E1E] uppercase tracking-widest">
                Recipe Ideas
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl text-[#4B2E2B] mt-2">
                Cook With Zingking
              </h2>
              <p className="mt-4 text-lg text-[#4B2E2B]/80 max-w-2xl">
                Delicious recipes crafted by expert chefs using our premium spices
              </p>
            </div>
            <Link
              href="/recipes"
              className="hidden md:inline-flex items-center gap-2 text-[#7B1E1E] font-semibold hover:gap-3 transition-all"
            >
              View All Recipes
              <FiChevronRight />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recipeCards.map((recipe, index) => (
              <motion.article
                key={recipe.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-white border border-[#4B2E2B]/10 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <SafeImage
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white text-sm">
                    <span className="flex items-center gap-1">
                      <FiClock className="w-4 h-4" /> {recipe.prepTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiUsers className="w-4 h-4" /> Serves {recipe.serves}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#7B1E1E] uppercase tracking-wide">
                    Uses {recipe.masala}
                  </span>
                  <h3 className="font-playfair text-2xl text-[#4B2E2B] mt-2 group-hover:text-[#7B1E1E] transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#4B2E2B]/70 line-clamp-2">{recipe.excerpt}</p>
                  <Link
                    href="/recipes"
                    className="inline-flex items-center gap-2 mt-4 text-[#7B1E1E] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    View Recipe <FiChevronRight />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-[#FFF8E7] to-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#7B1E1E] uppercase tracking-widest">
              Testimonials
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#4B2E2B] mt-2">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-[#4B2E2B]/10 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 text-[#F4A300] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-[#4B2E2B]/80 leading-relaxed mb-6">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7B1E1E] flex items-center justify-center text-white font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#4B2E2B]">{item.name}</p>
                    <p className="text-sm text-[#4B2E2B]/60">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <SafeImage
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2000&q=80"
              alt="B2B Partnership"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#7B1E1E]/95 to-[#4B2E2B]/90" />
            <div className="relative z-10 p-12 md:p-20">
              <div className="max-w-2xl">
                <span className="text-[#F4A300] font-semibold uppercase tracking-widest text-sm">
                  For Business
                </span>
                <h2 className="font-playfair text-4xl md:text-5xl text-white mt-4 mb-6">
                  Partner With Zingking
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Join our network of 500+ distributors and retailers. Get exclusive pricing, marketing support, and dedicated account management.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/b2b"
                    className="inline-flex items-center gap-2 bg-[#F4A300] text-[#4B2E2B] px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors"
                  >
                    Become a Distributor
                    <FiChevronRight />
                  </Link>
                  <a
                    href={`https://wa.me/${contactMeta.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
                  >
                    <FiPhone className="w-5 h-5" />
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />

      {/* Blog Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-sm font-semibold text-[#7B1E1E] uppercase tracking-widest">
                From Our Blog
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl text-[#4B2E2B] mt-2">
                Spice Knowledge Hub
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-2 text-[#7B1E1E] font-semibold hover:gap-3 transition-all"
            >
              View All Posts
              <FiChevronRight />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-white border border-[#4B2E2B]/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <SafeImage
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-[#7B1E1E] uppercase tracking-wide">
                    {post.readTime}
                  </p>
                  <h3 className="mt-2 font-playfair text-xl text-[#4B2E2B] group-hover:text-[#7B1E1E] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#4B2E2B]/70 line-clamp-2">{post.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="bg-[#FFF8E7] py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
        <span className="text-sm font-semibold text-[#7B1E1E] uppercase tracking-widest">
          Stay Updated
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl text-[#4B2E2B] mt-2 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-[#4B2E2B]/80 mb-8">
          Get recipes, cooking tips, and exclusive offers delivered to your inbox
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-6 py-4 rounded-full border border-[#4B2E2B]/20 focus:outline-none focus:border-[#7B1E1E] focus:ring-2 focus:ring-[#7B1E1E]/20"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-2 bg-[#7B1E1E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5B1515] transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : (
              <>
                Subscribe <FiSend className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-green-600 font-medium">Thank you for subscribing!</p>
        )}
      </div>
    </section>
  );
}
