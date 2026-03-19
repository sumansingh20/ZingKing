const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String,
  ingredients: [String],
  weight: Number,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  fiber: Number,
  sodium: Number,
  certifications: [String],
  bestFor: [String],
  storage: String,
  shelfLife: String,
  stock: Number,
  sku: String,
});

const sampleProducts = [
  {
    name: 'Garam Masala',
    description:
      'A blend of warming spices including cinnamon, cardamom, cloves, and black pepper. Perfect for curries, biryanis, and traditional Indian dishes.',
    price: 299,
    category: 'blended',
    image:
      'https://images.unsplash.com/photo-1596040299390-9f39c60c55d5?w=400',
    ingredients: [
      'Cumin',
      'Coriander',
      'Black Pepper',
      'Cinnamon',
      'Cardamom',
      'Clove',
      'Bay Leaf',
    ],
    weight: 100,
    calories: 251,
    protein: 10.5,
    carbs: 55.2,
    fat: 8.3,
    fiber: 13.3,
    sodium: 300,
    certifications: ['FSSAI', 'ISO 9001'],
    bestFor: ['Curries', 'Biryanis', 'Dals', 'Breads'],
    storage: 'Keep in cool, dry place away from sunlight',
    shelfLife: '18 months',
    stock: 150,
    sku: 'ZING-001',
  },
  {
    name: 'Kitchen King Masala',
    description:
      'All-purpose masala blend for everyday cooking. Use in sabzi, bhindi, paneer, and vegetable dishes.',
    price: 249,
    category: 'everyday',
    image:
      'https://images.unsplash.com/photo-1569718212e3-3a95ffb51b7b?w=400',
    ingredients: [
      'Cumin',
      'Coriander',
      'Turmeric',
      'Chili',
      'Fenugreek',
      'Asafetida',
    ],
    weight: 100,
    calories: 245,
    protein: 9.8,
    carbs: 52.1,
    fat: 7.9,
    fiber: 12.5,
    sodium: 250,
    certifications: ['FSSAI', 'ISO 9001'],
    bestFor: ['Vegetables', 'Paneer', 'Lentils', 'Daily Cooking'],
    storage: 'Store in airtight container',
    shelfLife: '18 months',
    stock: 200,
    sku: 'ZING-002',
  },
  {
    name: 'Biryani Masala',
    description:
      'Premium blend specially crafted for aromatic biryanis and pulao. Contains whole spices for authentic flavor.',
    price: 399,
    category: 'premium',
    image:
      'https://images.unsplash.com/photo-1596040299390-9f39c60c55d5?w=400',
    ingredients: [
      'Bay Leaf',
      'Cinnamon',
      'Cardamom',
      'Clove',
      'Black Pepper',
      'Cumin',
      'Star Anise',
    ],
    weight: 100,
    calories: 263,
    protein: 11.2,
    carbs: 58.3,
    fat: 9.1,
    fiber: 14.8,
    sodium: 320,
    certifications: ['FSSAI', 'ISO 9001', 'Organic'],
    bestFor: ['Biryani', 'Pulao', 'Meat Curries', 'Special Occasions'],
    storage: 'Keep refrigerated in glass jars',
    shelfLife: '24 months',
    stock: 75,
    sku: 'ZING-003',
  },
  {
    name: 'Sambar Powder',
    description:
      'South Indian spice blend used in sambar, curries, and pickles. Rich in flavor and authentic taste.',
    price: 199,
    category: 'everyday',
    image:
      'https://images.unsplash.com/photo-1569718212e3-3a95ffb51b7b?w=400',
    ingredients: [
      'Coriander',
      'Fenugreek',
      'Cumin',
      'Black Pepper',
      'Chili',
      'Asafetida',
    ],
    weight: 100,
    calories: 248,
    protein: 9.5,
    carbs: 53.8,
    fat: 8.1,
    fiber: 13.2,
    sodium: 280,
    certifications: ['FSSAI'],
    bestFor: ['Sambar', 'Rasam', 'South Indian Curries'],
    storage: 'Cool, dry storage recommended',
    shelfLife: '18 months',
    stock: 120,
    sku: 'ZING-004',
  },
  {
    name: 'Chaat Masala',
    description:
      'Tangy and spicy blend perfect for chaats, fruits, and snacks. Adds zing to every bite.',
    price: 179,
    category: 'everyday',
    image:
      'https://images.unsplash.com/photo-1596040299390-9f39c60c55d5?w=400',
    ingredients: [
      'Mango Powder',
      'Cumin',
      'Coriander',
      'Black Salt',
      'Chili',
      'Asafetida',
    ],
    weight: 100,
    calories: 241,
    protein: 8.9,
    carbs: 51.2,
    fat: 7.6,
    fiber: 12.1,
    sodium: 2100,
    certifications: ['FSSAI'],
    bestFor: ['Chaats', 'Fruits', 'Snacks', 'Yogurt'],
    storage: 'Airtight container away from moisture',
    shelfLife: '12 months',
    stock: 180,
    sku: 'ZING-005',
  },
];

async function seedProducts() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    const Product = mongoose.model('Product', productSchema);

    // Clear existing products (optional)
    // await Product.deleteMany({});

    const createdProducts = await Product.insertMany(sampleProducts, {
      ordered: false,
    }).catch((error) => {
      console.warn('⚠️  Some products already exist, skipping duplicates');
    });

    console.log('✅ Sample products seeded successfully');
    console.log(`📦 Total products in database: ${await Product.countDocuments()}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

seedProducts();
