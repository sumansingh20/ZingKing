'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiBriefcase, FiTruck, FiDollarSign, FiHeadphones } from 'react-icons/fi'
import { useState } from 'react'

const b2bFeatures = [
  {
    icon: FiBriefcase,
    title: 'Distributor Partnership',
    description: 'Become our partner and grow your business with premium quality spices',
  },
  {
    icon: FiTruck,
    title: 'Bulk Orders',
    description: 'Special pricing for wholesale and bulk purchases',
  },
  {
    icon: FiDollarSign,
    title: 'Flexible Terms',
    description: 'Customized payment terms and delivery schedules',
  },
  {
    icon: FiHeadphones,
    title: '24/7 Support',
    description: 'Dedicated account managers for business partnerships',
  },
]

export default function B2BSection() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    location: '',
    phone: '',
    email: '',
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section className="section-padding bg-gradient-to-b from-white via-brand-light/20 to-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-secondary font-bold uppercase text-sm tracking-widest">🤝 B2B PARTNERSHIPS</span>
          </motion.div>
          <h2 className="font-playfair text-5xl md:text-6xl mb-6 mt-4 leading-tight">
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Scale Your Business
            </span>
            <br />
            with Zingking Masala
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto font-poppins font-light">
            Partner with India&apos;s fastest-growing authentic spice brand and unlock premium margins, dedicated support, and proven market demand
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {b2bFeatures.map((feature, idx) => (
            <B2BFeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>

        {/* Form Section */}
        <motion.div
          className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-16 border border-brand-secondary/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-10">
            <h3 className="font-playfair text-4xl md:text-5xl mb-3 bg-gradient-to-r from-brand-dark to-brand-primary bg-clip-text text-transparent">
              Get Started Today
            </h3>
            <p className="text-gray-700 text-lg font-poppins font-light">
              Fill out the form below and our business team will contact you within 24 hours
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <FormInput
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Business Name"
                name="business"
                value={formData.business}
                onChange={handleChange}
                required
              />
              <FormInput
                label="City / Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <FormInput
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl transition-all duration-300 tracking-wide"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(123, 30, 30, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Partnership Inquiry 
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <FiArrowRight size={22} />
              </motion.span>
            </motion.button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-8 font-poppins">
            ✓ We respect your privacy. We&apos;ll use your contact info only to respond to your partnership inquiry.
          </p>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <InfoCard
            title="Margin Benefits"
            description="Attractive profit margins for distributors and retailers"
          />
          <InfoCard
            title="Training & Support"
            description="Regular training programs for your sales team"
          />
          <InfoCard
            title="Marketing Materials"
            description="Complete marketing collateral and digital assets"
          />
        </motion.div>
      </div>
    </section>
  )
}

function B2BFeatureCard({ feature, index }: { feature: any; index: number }) {
  const Icon = feature.icon

  return (
    <motion.div
      className="group relative p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl border border-brand-secondary/10 hover:border-brand-secondary/30 transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Gradient background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          className="w-14 h-14 bg-gradient-to-br from-brand-secondary/20 to-brand-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-brand-secondary/30 group-hover:to-brand-secondary/20 transition-all duration-300"
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <Icon className="text-brand-secondary group-hover:text-brand-primary transition-colors duration-300" size={28} />
        </motion.div>
        <h4 className="font-playfair text-xl font-bold mb-3 text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
          {feature.title}
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed font-poppins font-light">
          {feature.description}
        </p>
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

function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  fullWidth = false,
}: {
  label: string
  name: string
  type?: string
  value: string
  onChange: (e: any) => void
  required?: boolean
  fullWidth?: boolean
}) {
  return (
    <motion.div className={fullWidth ? 'md:col-span-2' : ''}>
      <label className="block text-sm font-semibold text-brand-dark mb-3 uppercase tracking-wide">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <motion.input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/20 transition-all duration-300 bg-white/50 backdrop-blur-sm font-poppins"
        whileFocus={{ scale: 1.01 }}
      />
    </motion.div>
  )
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      className="relative p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl border border-brand-secondary/10 hover:border-brand-secondary/30 transition-all duration-300 text-center group overflow-hidden"
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Gradient background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      <div className="relative z-10">
        <h4 className="font-playfair text-2xl font-bold text-brand-dark mb-3 group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {title}
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed font-poppins font-light">
          {description}
        </p>
      </div>

      {/* Bottom accent */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-secondary to-transparent"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
