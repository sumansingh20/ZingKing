'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck } from 'react-icons/fi'

const UnicornFeature = ({ text }: { text: string }) => (
  <motion.div
    className="flex items-center gap-4 group cursor-pointer"
    whileHover={{ x: 8 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-secondary to-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg"
      whileHover={{ scale: 1.2, rotate: 15 }}
    >
      <FiCheck className="text-brand-dark font-bold" size={18} />
    </motion.div>
    <span className="text-gray-700 font-poppins text-base font-medium group-hover:text-brand-secondary transition-colors duration-300">
      {text}
    </span>
  </motion.div>
)

export default function AboutSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-brand-light/30 to-white">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative overflow-hidden rounded-3xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[500px] bg-gray-300 overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1599599810694-b1a0707db91f?w=600&h=600&fit=crop&q=95"
                alt="Authentic spice blending"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-brand-primary/30 via-transparent to-brand-secondary/20"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-brand-secondary/20"
              initial={{ opacity: 0, scale: 0, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, y: -8 }}
            >
              <p className="text-xs text-brand-secondary font-semibold uppercase tracking-widest">Premium Quality</p>
              <p className="text-3xl font-playfair font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">100% Pure</p>
              <p className="text-xs text-gray-500 mt-2">Traditional processing methods</p>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-6 right-6 w-20 h-20 rounded-full border-2 border-brand-secondary/20 opacity-40"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ rotate: { duration: 20, repeat: Infinity }, scale: { duration: 3, repeat: Infinity } }}
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-brand-secondary font-bold text-sm uppercase tracking-widest inline-block"
                whileInView={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨ OUR HERITAGE
              </motion.span>
              
              <h2 className="font-playfair text-5xl md:text-6xl mt-4 mb-6 leading-tight">
                Bringing <span className="bg-gradient-to-r from-brand-primary via-red-600 to-brand-secondary bg-clip-text text-transparent">Authentic Taste</span> Since 2009
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-poppins font-light">
                Zingking Masala was born from a passion for authentic flavor and a commitment to uncompromising quality. What started as a small family spice business has grown into a trusted brand served in thousands of homes and restaurants across India and beyond.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-10 font-poppins font-light">
                Our philosophy is simple: Use the finest ingredients, preserve traditional methods, and deliver nothing but pure, unadulterated taste. Every batch is hand-monitored to ensure consistency and quality that exceeds expectations.
              </p>

              <div className="space-y-5 mb-10">
                <UnicornFeature text="Sourced from premium spice gardens in Kerala & Rajasthan" />
                <UnicornFeature text="Cold-ground using traditional stone mills (no heat damage)" />
                <UnicornFeature text="Zero additives, no anti-caking agents, no fillers ever" />
                <UnicornFeature text="Certified by ISO 22000 & FSSAI international standards" />
                <UnicornFeature text="Freshness guaranteed within 12 months of production" />
              </div>

              <motion.button
                className="flex items-center gap-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Our Full Story
                <motion.span
                  className="group-hover:translate-x-2 transition-transform duration-300"
                >
                  <FiArrowRight size={20} />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
