// Brand Colors
export const COLORS = {
  primary: '#7B1E1E',
  secondary: '#F4A300',
  accent: '#4B2E2B',
  light: '#FFF8E7',
  dark: '#2B1B18',
  gold: '#C7A043',
  white: '#FFFFFF',
  black: '#000000',
} as const;

// Brand Information
export const BRAND = {
  name: 'Zingking Masala',
  tagline: 'Bring Home the Taste of Tradition',
  description: 'Premium Indian spices and blended masalas for authentic flavor',
  founded: 2009,
  certifications: ['FSSAI', 'ISO 22000'],
} as const;

// Contact Information
export const CONTACT = {
  phone: '+91 79038 35951',
  email: 'sales@zingkingmasala.com',
  whatsapp: '917903835951',
  address: 'Patna, Bihar 800001, India',
  workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
} as const;

// Social Media Links
export const SOCIAL = {
  instagram: 'https://instagram.com/zingkingmasala',
  facebook: 'https://facebook.com/zingkingmasala',
  youtube: 'https://youtube.com/@zingkingmasala',
  twitter: 'https://twitter.com/zingkingmasala',
} as const;

// Navigation Items
export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Recipes', href: '/recipes' },
  { name: 'About', href: '/about' },
  { name: 'B2B', href: '/b2b' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
] as const;

// Product Categories
export const PRODUCT_CATEGORIES = [
  { key: 'all', label: 'All Products' },
  { key: 'basic', label: 'Basic Spices' },
  { key: 'blended', label: 'Blended Masalas' },
  { key: 'premium', label: 'Premium Range' },
  { key: 'export', label: 'Export Packs' },
] as const;

// Price Filters
export const PRICE_FILTERS = [
  { key: 'all', label: 'All Prices' },
  { key: 'under-150', label: 'Under Rs 150' },
  { key: '150-200', label: 'Rs 150 - Rs 200' },
  { key: 'above-200', label: 'Above Rs 200' },
] as const;

// Shipping Configuration
export const SHIPPING = {
  freeShippingThreshold: 799,
  standardShippingCost: 50,
  expressShippingCost: 100,
  taxRate: 0.05, // 5% GST
} as const;

// Image Placeholders (Verified Working Unsplash URLs)
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1920&q=80',
  about: 'https://images.unsplash.com/photo-1596040227107-c4ed3ce2b5da?auto=format&fit=crop&w=1400&q=80',
  spices: {
    turmeric: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&w=900&q=80',
    redChilli: 'https://images.unsplash.com/photo-1599909533601-aa75a0c3f5fe?auto=format&fit=crop&w=900&q=80',
    coriander: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
    cumin: 'https://images.unsplash.com/photo-1599909533601-aa75a0c3f5fe?auto=format&fit=crop&w=900&q=80',
  },
  categories: {
    basic: 'https://images.pexels.com/photos/4198021/pexels-photo-4198021.jpeg?auto=compress&cs=tinysrgb&w=1200',
    blended: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1200&q=80',
    premium: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200',
    export: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80',
  },
} as const;

// SEO Configuration
export const SEO = {
  title: 'Zingking Masala | Premium Indian Spices And Blended Masalas',
  description: 'Zingking Masala offers authentic Indian spices, blended masalas, and distributor-ready FMCG packs. FSSAI certified quality for homes, restaurants, and retail.',
  keywords: 'Zingking Masala, Indian spices, blended masala, garam masala, kitchen king, biryani masala, chhole masala, spice manufacturer India',
  ogImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80',
} as const;
