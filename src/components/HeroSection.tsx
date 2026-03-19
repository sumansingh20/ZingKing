'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end center'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <section
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Premium Background with Real Spice Imagery */}
      <div className="absolute inset-0 z-0">
        {/* Background Image - Real Spices Top View */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1596040227107-c4ed3ce2b5da?w=1200&h=800&fit=crop&q=95"
            alt="Premium Spices Background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Premium Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/90"></div>
        </motion.div>

        {/* Subtle Accent Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Floating Spice Particles */}
      <FloatingParticles />

      {/* Premium Content Section */}
      <div className="relative z-10 container-max px-4 md:px-8 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          <p className="text-brand-secondary font-semibold text-sm md:text-base tracking-widest mb-6 uppercase">
            ✨ Authentic Indian Masalas ✨
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-brand-light leading-tight">
            Bring Home the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-yellow-400 to-brand-secondary">Taste of Tradition</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="text-base md:text-lg text-brand-light/85 mb-10 max-w-2xl mx-auto font-poppins leading-relaxed"
        >
          Crafted from the finest spices with authentic Indian recipes. Premium quality, zero compromise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Premium Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(123, 30, 30, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary text-base font-semibold px-10 py-4 rounded-lg bg-gradient-to-r from-brand-primary to-brand-accent text-brand-light shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore Products
          </motion.button>

          {/* Premium Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 248, 231, 0.1)' }}
            whileTap={{ scale: 0.98 }}
            className="text-base font-semibold px-10 py-4 rounded-lg border-2 border-brand-light text-brand-light hover:bg-brand-light/5 transition-all duration-300 backdrop-blur-sm"
          >
            Become Distributor
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-brand-light/60">
            <span className="text-sm font-poppins">Scroll to explore</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FloatingParticles() {
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    size: 4 + Math.random() * 8,
  }))

  return (
    <div className="absolute inset-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-brand-secondary/30"
          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: ['0%', '-100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}
