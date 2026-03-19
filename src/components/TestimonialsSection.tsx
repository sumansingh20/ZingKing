'use client'

import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Home Chef',
    text: 'The quality of Zingking Masala is unmatched! My family loves the authentic taste. I will never switch brands.',
    rating: 5,
    image: 'https://api.placeholder.com/100x100',
  },
  {
    id: 2,
    name: 'Rajesh Patel',
    role: 'Restaurant Owner',
    text: 'As a restaurant owner, I need consistent quality. Zingking delivers exactly that. Highly recommended!',
    rating: 5,
    image: 'https://api.placeholder.com/100x100',
  },
  {
    id: 3,
    name: 'Asha Verma',
    role: 'Distributor',
    text: 'Partnering with Zingking was the best decision. Great support and fantastic customer demand.',
    rating: 5,
    image: 'https://api.placeholder.com/100x100',
  },
  {
    id: 4,
    name: 'Mehul Kumar',
    role: 'Export Business',
    text: 'Export quality that truly matches international standards. Zingking is our trusted partner globally.',
    rating: 5,
    image: 'https://api.placeholder.com/100x100',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-brand-dark via-brand-accent to-brand-primary relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full border-2 border-brand-secondary/20 opacity-30"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { duration: 30, repeat: Infinity }, scale: { duration: 4, repeat: Infinity } }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-32 h-32 rounded-full border-2 border-brand-secondary/10 opacity-20"
        animate={{ rotate: -360, scale: [1, 1.1, 1] }}
        transition={{ rotate: { duration: 25, repeat: Infinity }, scale: { duration: 5, repeat: Infinity } }}
      />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-brand-secondary/80 font-bold text-sm uppercase tracking-widest inline-block mb-4"
            whileInView={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⭐ TESTIMONIALS
          </motion.span>
          <h2 className="font-playfair text-5xl md:text-6xl mb-6 leading-tight text-white">
            Loved by <span className="text-brand-secondary">Thousands</span> <br />
            <span className="text-white/80 text-4xl md:text-5xl">of Happy Customers</span>
          </h2>
          <p className="text-brand-light/90 text-lg max-w-3xl mx-auto font-poppins font-light">
            Real voices from people who trust Zingking Masala for authentic, pure, and premium spices
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl border border-brand-secondary/30 shadow-2xl">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100, rotateY: 45 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -45 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
              className="px-8 md:px-16 py-16 md:py-20"
            >
              <TestimonialCard testimonial={testimonials[current]} />
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-10">
            <motion.button
              onClick={handlePrev}
              className="p-4 rounded-full bg-white/15 hover:bg-brand-secondary/40 text-white transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-brand-secondary/50 shadow-lg"
              whileHover={{ scale: 1.15, x: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots */}
            <div className="flex gap-3 items-center">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`rounded-full transition-all duration-300 backdrop-blur-md border ${
                    idx === current
                      ? 'w-10 h-4 bg-gradient-to-r from-brand-secondary to-yellow-400 border-white/40'
                      : 'w-4 h-4 bg-white/30 hover:bg-white/60 border-white/20'
                  }`}
                  whileHover={{ scale: 1.3 }}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              className="p-4 rounded-full bg-white/15 hover:bg-brand-secondary/40 text-white transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-brand-secondary/50 shadow-lg"
              whileHover={{ scale: 1.15, x: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Testimonial counter */}
          <div className="text-center mt-8">
            <p className="text-white/60 text-sm font-poppins">
              <span className="text-brand-secondary font-bold">{current + 1}</span> of <span className="text-brand-secondary font-bold">{testimonials.length}</span>
            </p>
          </div>
        </div>

        {/* Brand Trust Stats */}
        <motion.div
          className="mt-20 p-10 md:p-12 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-brand-secondary/20 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-12 text-white text-center">
            <motion.div whileInView={{ y: [10, 0] }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <motion.p 
                className="text-5xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-brand-secondary to-yellow-400 bg-clip-text text-transparent mb-3"
                whileInView={{ scale: [0.8, 1.1, 1] }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                4.9<span className="text-4xl">★</span>
              </motion.p>
              <p className="text-white/70 font-poppins text-lg">Average Rating</p>
            </motion.div>
            <motion.div whileInView={{ y: [10, 0] }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
              <motion.p 
                className="text-5xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-brand-secondary to-yellow-400 bg-clip-text text-transparent mb-3"
                whileInView={{ scale: [0.8, 1.1, 1] }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                5K+
              </motion.p>
              <p className="text-white/70 font-poppins text-lg">Verified Reviews</p>
            </motion.div>
            <motion.div whileInView={{ y: [10, 0] }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <motion.p 
                className="text-5xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-brand-secondary to-yellow-400 bg-clip-text text-transparent mb-3"
                whileInView={{ scale: [0.8, 1.1, 1] }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                98%
              </motion.p>
              <p className="text-white/70 font-poppins text-lg">Would Recommend</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Stars */}
      <div className="flex justify-center gap-2 mb-8">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <FiStar
              size={28}
              className="text-brand-secondary fill-brand-secondary drop-shadow-lg"
            />
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <motion.p 
        className="text-2xl md:text-3xl text-white mb-10 italic leading-relaxed font-playfair font-light"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        &ldquo;{testimonial.text}&rdquo;
      </motion.p>

      {/* Divider */}
      <motion.div 
        className="h-1 w-20 bg-gradient-to-r from-brand-secondary to-transparent mx-auto mb-8"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* Author */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="font-playfair text-2xl font-bold text-white mb-2">
          {testimonial.name}
        </p>
        <p className="text-brand-secondary font-poppins text-base tracking-wide font-semibold">
          {testimonial.role}
        </p>
      </motion.div>
    </motion.div>
  )
}
