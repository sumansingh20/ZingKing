'use client'

import { motion } from 'framer-motion'
import { FiCheck, FiAward, FiGlobe, FiShield, FiDroplet } from 'react-icons/fi'

const features = [
  {
    icon: FiDroplet,
    title: '100% Natural',
    description: 'No artificial additives, preservatives, or chemical enhancers',
    color: '#8B0000',
  },
  {
    icon: FiShield,
    title: 'No Preservatives',
    description: 'Pure spices with natural shelf life preservation methods',
    color: '#FFA500',
  },
  {
    icon: FiAward,
    title: 'Traditional Grinding',
    description: 'Slow-ground using traditional stone grinding methods',
    color: '#5C4033',
  },
  {
    icon: FiGlobe,
    title: 'Export Quality',
    description: 'Certified and tested for international food standards',
    color: '#C41E3A',
  },
]

export default function WhyZingking() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-brand-light/20 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-brand-secondary/5 blur-3xl opacity-40"
        animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-80 h-80 rounded-full bg-brand-primary/5 blur-3xl opacity-30"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
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
            className="text-brand-secondary font-bold text-sm uppercase tracking-widest inline-block mb-4"
            whileInView={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨ OUR COMMITMENT
          </motion.span>
          <h2 className="font-playfair text-5xl md:text-6xl mb-6 leading-tight">
            Why Choose <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Zingking Masala?</span>
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto font-poppins font-light">
            Premium quality you can trust, authentic taste you will love, and pure ingredients you deserve
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          className="p-10 md:p-16 bg-gradient-to-br from-brand-dark via-brand-accent to-brand-primary rounded-3xl shadow-2xl border border-brand-secondary/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Decorative overlay */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />

          <div className="grid md:grid-cols-4 gap-8 text-white relative z-10">
            <StatItem number="50K+" label="Happy Customers" delay={0} />
            <StatItem number="15+" label="Years of Excellence" delay={0.1} />
            <StatItem number="20+" label="Product Varieties" delay={0.2} />
            <StatItem number="25" label="Export Countries" delay={0.3} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const Icon = feature.icon

  return (
    <motion.div
      className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-md hover:bg-white border border-brand-secondary/10 hover:border-brand-secondary/30 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-md"
          style={{ backgroundColor: feature.color + '15' }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <Icon size={36} style={{ color: feature.color }} className="group-hover:scale-110 transition-transform duration-300" />
        </motion.div>
        
        <h3 className="font-playfair text-2xl font-bold mb-3 text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
          {feature.title}
        </h3>
        
        <p className="text-gray-700 text-base leading-relaxed font-poppins font-light mb-5">
          {feature.description}
        </p>

        <motion.div
          className="inline-flex items-center gap-2 text-brand-secondary font-semibold bg-brand-secondary/10 px-4 py-2 rounded-full"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.12 + 0.3 }}
          viewport={{ once: true }}
          whileHover={{ x: 5, backgroundColor: 'rgba(244, 163, 0, 0.15)' }}
        >
          <FiCheck size={18} />
          <span className="text-sm font-medium">Verified Quality</span>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-secondary to-transparent"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

function StatItem({ number, label, delay = 0 }: { number: string; label: string; delay?: number }) {
  return (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div 
        className="text-5xl md:text-6xl font-playfair font-bold mb-3 bg-gradient-to-r from-brand-secondary to-yellow-400 bg-clip-text text-transparent"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, delay, repeat: Infinity }}
      >
        {number}
      </motion.div>
      <motion.div
        className="h-1 w-0 mx-auto mb-3 bg-gradient-to-r from-brand-secondary to-transparent group-hover:w-12 transition-all duration-300"
      />
      <p className="text-white/90 font-poppins text-lg font-medium tracking-wide">{label}</p>
    </motion.div>
  )
}
