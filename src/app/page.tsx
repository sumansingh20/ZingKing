'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
  trustBadges,
} from '@/data/brandContent';
import { addItemToCart } from '@/lib/cart';

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <main className="min-h-screen bg-brand-light">
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Premium spice spread"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e120f]/90 via-[#1e120f]/75 to-[#1e120f]/85" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-playfair text-5xl font-bold leading-tight text-[#FFF8E7] md:text-[64px]"
            >
              Bring Home the Taste of Tradition
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="mt-5 max-w-2xl text-lg text-[#FFF8E7]/85"
            >
              Crafted with purity, blended with passion. Zingking Masala delivers honest Indian spice flavor for homes, chefs, and food businesses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                href="/products"
                className="rounded-full bg-[#7B1E1E] px-8 py-4 text-sm font-semibold text-[#FFF8E7] shadow-lg shadow-[#7B1E1E]/30 transition hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Explore Products
              </Link>
              <Link
                href="/b2b"
                className="rounded-full border border-[#FFF8E7]/60 px-8 py-4 text-sm font-semibold text-[#FFF8E7] backdrop-blur transition hover:bg-[#FFF8E7]/10"
              >
                Become Distributor
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#4B2E2B]/10 bg-[#FFF8E7]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-5 md:grid-cols-4 md:px-8">
          {trustBadges.map((badge) => (
            <p key={badge} className="text-center text-sm font-semibold text-[#4B2E2B] md:text-base">
              {badge}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <SectionTitle
          title="Featured Products"
          subtitle="Five hero blends trusted by Indian kitchens and fast-scaling food businesses."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.sku}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              className="group overflow-hidden rounded-2xl border border-[#4B2E2B]/10 bg-white shadow-soft"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-[#F4A300] px-3 py-1 text-xs font-semibold text-[#4B2E2B]">
                  {product.weight}g pack
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-3xl text-[#4B2E2B]">{product.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#4B2E2B]/80">{product.shortDescription}</p>
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
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            title="Product Categories"
            subtitle="Structured portfolio for retail shelves, premium counters, and export channels."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categoryCards.map((card, index) => (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="overflow-hidden rounded-2xl border border-[#4B2E2B]/10"
              >
                <div className="relative h-44">
                  <Image src={card.image} alt={card.title} fill sizes="25vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-playfair text-2xl text-[#4B2E2B]">{card.title}</h3>
                  <p className="mt-2 text-sm text-[#4B2E2B]/80">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-playfair text-4xl text-[#4B2E2B] md:text-5xl">{brandStory.heading}</h2>
            <p className="mt-5 text-base leading-8 text-[#4B2E2B]/90 md:text-lg">{brandStory.summary}</p>
            <p className="mt-4 text-base leading-8 text-[#4B2E2B]/80 md:text-lg">{brandStory.detail}</p>
          </div>
          <div className="relative h-96 overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80"
              alt="Spice quality process"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/15" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            title="Quality Process"
            subtitle="A disciplined five-step process designed for consistency and food safety."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {qualitySteps.map((step, index) => (
              <div key={step.title} className="rounded-xl border border-[#4B2E2B]/10 bg-[#FFF8E7] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#7B1E1E]">Step {index + 1}</p>
                <h3 className="mt-2 font-playfair text-2xl text-[#4B2E2B]">{step.title}</h3>
                <p className="mt-2 text-sm text-[#4B2E2B]/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <SectionTitle title="Recipes" subtitle="Food-first inspiration built around your kitchen favorites." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {recipeCards.map((recipe, index) => (
            <motion.div
              key={recipe.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="overflow-hidden rounded-2xl border border-[#4B2E2B]/10 bg-white"
            >
              <div className="relative h-52">
                <Image src={recipe.image} alt={recipe.title} fill sizes="33vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-2xl text-[#4B2E2B]">{recipe.title}</h3>
                <p className="mt-2 text-sm text-[#4B2E2B]/80">{recipe.excerpt}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#7B1E1E]">
                  {recipe.prepTime} · Serves {recipe.serves}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#4B2E2B] py-20 text-[#FFF8E7]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle title="Testimonials" subtitle="What customers and business buyers say about Zingking Masala." light />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-2xl border border-[#F4A300]/20 bg-[#FFF8E7]/5 p-6 backdrop-blur">
                <p className="text-[#F4A300]">{'★'.repeat(item.rating)}</p>
                <p className="mt-4 text-sm leading-7 text-[#FFF8E7]/90">{item.quote}</p>
                <p className="mt-5 font-semibold">{item.name}</p>
                <p className="text-xs text-[#FFF8E7]/70">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#7B1E1E] to-[#4B2E2B] p-8 text-[#FFF8E7] md:p-12">
          <h2 className="font-playfair text-4xl md:text-5xl">B2B Distributor Program</h2>
          <p className="mt-4 max-w-3xl text-base text-[#FFF8E7]/85 md:text-lg">
            Grow your regional spice business with dedicated account support, volume pricing, and fast dispatch planning.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link href="/b2b" className="rounded-full bg-[#F4A300] px-7 py-3 text-sm font-semibold text-[#4B2E2B]">
              Apply As Distributor
            </Link>
            <a
              href={`https://wa.me/${contactMeta.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#FFF8E7]/60 px-7 py-3 text-sm font-semibold"
            >
              WhatsApp Sales
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle title="Latest From Blog" subtitle="SEO-ready content for consumers, retailers, and distributors." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="overflow-hidden rounded-2xl border border-[#4B2E2B]/10 bg-white">
                <div className="relative h-44">
                  <Image src={post.image} alt={post.title} fill sizes="33vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#7B1E1E]">
                    {new Date(post.date).toLocaleDateString('en-IN', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}{' '}
                    · {post.readTime}
                  </p>
                  <h3 className="mt-2 font-playfair text-2xl text-[#4B2E2B]">{post.title}</h3>
                  <p className="mt-2 text-sm text-[#4B2E2B]/80">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <h2 className={`font-playfair text-4xl md:text-5xl ${light ? 'text-[#FFF8E7]' : 'text-[#4B2E2B]'}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 md:text-lg ${light ? 'text-[#FFF8E7]/80' : 'text-[#4B2E2B]/80'}`}>
        {subtitle}
      </p>
    </div>
  );
}
