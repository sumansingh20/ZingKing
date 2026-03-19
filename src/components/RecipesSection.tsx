'use client'

import { motion } from 'framer-motion'
import { FiClock, FiUsers, FiArrowRight } from 'react-icons/fi'

const recipes = [
  {
    id: 1,
    title: 'Paneer Butter Masala',
    image: 'https://images.unsplash.com/photo-1601886727692-87dc5bc5eb50?w=500&h=400&fit=crop&q=95',
    time: '30 mins',
    servings: '4',
    description: 'Creamy tomato curry with paneer blocks in silky buttery sauce',
    masala: 'Garam Masala, Kitchen King',
  },
  {
    id: 2,
    title: 'Chole Bhature',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop&q=95',
    time: '45 mins',
    servings: '6',
    description: 'Deep-fried bread with spiced chickpea curry - a North Indian classic',
    masala: 'Kitchen King, Sabji Masala',
  },
  {
    id: 3,
    title: 'Hyderabadi Biryani',
    image: 'https://images.unsplash.com/photo-1585268341612-cd09db224ee4?w=500&h=400&fit=crop&q=95',
    time: '90 mins',
    servings: '8',
    description: 'Fragrant basmati rice with tender meat in layers of pure spice',
    masala: 'Biryani Masala, Garam Masala',
  },
  {
    id: 4,
    title: 'Veggie Tikka Curry',
    image: 'https://images.unsplash.com/photo-1626083927389-fc8581748a1d?w=500&h=400&fit=crop&q=95',
    time: '35 mins',
    servings: '4',
    description: 'Grilled vegetables in aromatic tomato and yogurt sauce',
    masala: 'Kitchen King, Sabji Masala',
  },
]

export default function RecipesSection() {
  return (
    <section className="section-padding bg-white">
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
            Authentic <span className="gradient-text">Recipes</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover mouth-watering recipes from our culinary experts
          </p>
        </motion.div>

        {/* Recipes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe, idx) => (
            <RecipeCard key={recipe.id} recipe={recipe} index={idx} />
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
          <button className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
            View All Recipes <FiArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

function RecipeCard({ recipe, index }: { recipe: any; index: number }) {
  return (
    <motion.div
      className="group rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col bg-white backdrop-blur-sm transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
      style={{
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
      }}
    >
      {/* Premium Shadow on Hover */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-br from-brand-secondary/20 to-brand-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur -z-10"
      ></motion.div>

      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-300">
        <motion.img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.5 }}
        />

        {/* Premium Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/30 to-transparent"
          initial={{ opacity: 0.3 }}
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.3 }}
        ></motion.div>

        {/* Quick Info Badge */}
        <motion.div
          className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-secondary text-brand-dark text-xs font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.12 + 0.2 }}
          viewport={{ once: true }}
        >
          ⏱ {recipe.time}
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <motion.h3
          className="font-playfair text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.12 + 0.1 }}
          viewport={{ once: true }}
        >
          {recipe.title}
        </motion.h3>

        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
          {recipe.description}
        </p>

        {/* Meta Info */}
        <div className="flex gap-6 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ color: '#F4A300' }}
          >
            <div className="w-8 h-8 rounded-full bg-brand-secondary/10 flex items-center justify-center">
              <FiClock size={16} className="text-brand-secondary" />
            </div>
            <span className="font-medium">{recipe.time}</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ color: '#F4A300' }}
          >
            <div className="w-8 h-8 rounded-full bg-brand-secondary/10 flex items-center justify-center">
              <FiUsers size={16} className="text-brand-secondary" />
            </div>
            <span className="font-medium">{recipe.servings}</span>
          </motion.div>
        </div>

        {/* Masala Tag */}
        <div className="mb-6">
          <p className="text-xs text-gray-500 mb-3 font-bold tracking-wide uppercase">Pairs with:</p>
          <div className="flex flex-wrap gap-2">
            {recipe.masala.split(', ').map((m: string) => (
              <motion.span
                key={m}
                className="px-3 py-1.5 bg-gradient-to-r from-brand-secondary/10 to-brand-primary/10 text-brand-secondary text-xs rounded-full font-semibold border border-brand-secondary/20 hover:border-brand-secondary/50 transition-all cursor-pointer"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(244, 163, 0, 0.15)' }}
              >
                {m}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Button */}
        <motion.button
          className="mt-auto w-full py-3 font-semibold rounded-lg bg-gradient-to-r from-brand-secondary/10 to-brand-primary/10 text-brand-secondary border border-brand-secondary/30 hover:border-brand-secondary transition-all duration-300"
          whileHover={{
            scale: 1.02,
            backgroundColor: 'rgba(244, 163, 0, 0.2)',
            boxShadow: '0 8px 16px rgba(244, 163, 0, 0.2)'
          }}
          whileTap={{ scale: 0.98 }}
        >
          View Recipe
        </motion.button>
      </div>
    </motion.div>
  )
}
