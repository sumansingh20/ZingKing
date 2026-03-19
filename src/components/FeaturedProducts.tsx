'use client'

import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const products = [
  {
    id: 1,
    name: 'Garam Masala',
    image: 'https://images.unsplash.com/photo-1596040227107-c4ed3ce2b5da?w=500&h=500&fit=crop&q=95',
    description: 'Rich & aromatic blend for authentic curries',
    color: '#8B0000',
    price: '₹199',
  },
  {
    id: 2,
    name: 'Kitchen King',
    image: 'https://images.unsplash.com/photo-1563883919193-f0c3abb74af9?w=500&h=500&fit=crop&q=95',
    description: 'Everyday versatile masala for daily needs',
    color: '#FFA500',
    price: '₹149',
  },
  {
    id: 3,
    name: 'Sabji Masala',
    image: 'https://images.unsplash.com/photo-1455521258545-146d8c50925d?w=500&h=500&fit=crop&q=95',
    description: 'Perfect for vegetable curries & gravies',
    color: '#5C4033',
    price: '₹179',
  },
  {
    id: 4,
    name: 'Biryani Masala',
    image: 'https://images.unsplash.com/photo-1434445269127-57efcad98e0f?w=500&h=500&fit=crop&q=95',
    description: 'Premium blend for royal biryani recipes',
    color: '#C41E3A',
    price: '₹249',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-gradient-to-b from-brand-light to-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl mb-4">
            Our <span className="gradient-text">Featured</span> Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handpicked spice blends that elevate every dish with authentic flavors
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 hover:gap-3 transition-all duration-300">
            View All Products <FiArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

function ProductCard({ product, index }: { product: any; index: number }) {
  return (
    <motion.div
      className="relative group h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative h-96 overflow-hidden rounded-3xl backdrop-blur-sm"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Premium Shadow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-secondary/30 via-brand-primary/20 to-brand-accent/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>

        {/* Card Content */}
        <div className="relative h-full rounded-3xl overflow-hidden">
          {/* Product Image */}
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          />

          {/* Premium Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent"
            initial={{ opacity: 0.4 }}
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          {/* Content - Always Visible */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
            {/* Top - Brand Mark */}
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 + 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-brand-secondary font-bold text-sm">⭐ Premium</span>
              </motion.div>
            </div>

            {/* Bottom - Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 + 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-playfair text-3xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-100 text-sm mb-4 line-clamp-2">{product.description}</p>

              <div className="flex items-center justify-between gap-4">
                <span className="text-brand-secondary font-bold text-2xl">{product.price}</span>
                <motion.button
                  className="px-6 py-2 bg-gradient-to-r from-brand-secondary to-brand-primary text-brand-light font-semibold rounded-lg text-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.08, boxShadow: '0 15px 30px rgba(123, 30, 30, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
