export type ProductCategory = 'basic' | 'blended' | 'premium' | 'export';

export type BrandProduct = {
  sku: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  category: ProductCategory;
  price: number;
  weight: number;
  stock: number;
  image: string;
  gallery: string[];
  ingredients: string[];
  bestFor: string[];
  certifications: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    sodium: number;
  };
};

// Verified Working Image URLs
export const heroImage =
  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1920&q=80';

export const brandStory = {
  heading: 'A Legacy Of Honest Spice Craft',
  summary:
    'Zingking Masala began as a family spice trading house and evolved into a modern FMCG brand that still follows old-school quality discipline. Every batch is sourced from trusted farms, cleaned in controlled facilities, and blended in small lots for consistent aroma.',
  detail:
    'Our blends are engineered for Indian kitchens, cloud kitchens, and restaurant operations. We prioritize lot-level traceability, moisture control, and aroma retention so that each pack performs reliably in home cooking as well as high-volume kitchens.',
};

export const trustBadges = [
  'FSSAI Certified',
  'ISO 22000 Facility',
  '100% Natural Spices',
  'No Added Preservatives',
];

export const qualitySteps = [
  {
    title: 'Sourcing',
    description: 'Direct procurement from vetted farms in Rajasthan, Kerala, and Andhra Pradesh.',
  },
  {
    title: 'Cleaning',
    description: 'Multi-stage cleaning with dust separation, metal detection, and moisture balancing.',
  },
  {
    title: 'Grinding',
    description: 'Low-heat grinding to protect volatile oils and preserve natural color.',
  },
  {
    title: 'Blending',
    description: 'Recipe-controlled blending with batch sampling and sensory checks.',
  },
  {
    title: 'Packaging',
    description: 'Hygienic nitrogen-flushed packs for shelf stability and freshness lock.',
  },
];

export const categoryCards = [
  {
    key: 'basic',
    title: 'Basic Spices',
    description: 'Single-origin essentials for daily cooking.',
    image: 'https://images.pexels.com/photos/4198021/pexels-photo-4198021.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    key: 'blended',
    title: 'Blended Masalas',
    description: 'Balanced flavor profiles for Indian gravies and sabzis.',
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1200&q=80',
  },
  {
    key: 'premium',
    title: 'Premium Range',
    description: 'Chef-grade spice blends for signature dishes.',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    key: 'export',
    title: 'Export Packs',
    description: 'Bulk and retail-ready packs for global distribution.',
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80',
  },
] as const;

export const products: BrandProduct[] = [
  {
    sku: 'ZK-GM-100',
    slug: 'garam-masala',
    name: 'Garam Masala',
    shortDescription: 'Classic warm spice blend for curries, dals, and marinades.',
    longDescription: 'Aromatic blend with coriander, black pepper, cumin, cinnamon, and clove for rich North Indian flavor.',
    category: 'blended',
    price: 185,
    weight: 100,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1615485925763-86786288908d?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&w=900&q=80',
      'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    ingredients: ['Coriander', 'Cumin', 'Black Pepper', 'Cinnamon', 'Clove', 'Cardamom'],
    bestFor: ['Paneer gravies', 'Dal tadka', 'Chicken curry'],
    certifications: ['FSSAI', 'ISO 22000'],
    nutrition: { calories: 352, protein: 11.2, carbs: 48.7, fat: 13.8, fiber: 16.4, sodium: 145 },
  },
  {
    sku: 'ZK-KK-100',
    slug: 'kitchen-king',
    name: 'Kitchen King',
    shortDescription: 'Everyday masala for rich and rounded sabzi flavor.',
    longDescription: 'All-purpose masala blend with fenugreek, turmeric, coriander, and select whole spices for daily cooking.',
    category: 'blended',
    price: 165,
    weight: 100,
    stock: 180,
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.unsplash.com/photo-1606787364406-a3cdf06c6d0c?auto=format&fit=crop&w=900&q=80',
    ],
    ingredients: ['Coriander', 'Cumin', 'Turmeric', 'Fenugreek', 'Black Pepper'],
    bestFor: ['Mixed veg', 'Paneer masala', 'Matar curry'],
    certifications: ['FSSAI', 'ISO 22000'],
    nutrition: { calories: 338, protein: 10.4, carbs: 51.2, fat: 11.7, fiber: 14.9, sodium: 188 },
  },
  {
    sku: 'ZK-SM-100',
    slug: 'sabji-masala',
    name: 'Sabji Masala',
    shortDescription: 'Bright and savory blend for dry and gravy vegetables.',
    longDescription: 'Balanced masala with earthy cumin, coriander, turmeric, and amchur for home-style vegetable dishes.',
    category: 'basic',
    price: 149,
    weight: 100,
    stock: 210,
    image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=900',
    gallery: [
      'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=900&q=80',
      'https://images.pexels.com/photos/5945904/pexels-photo-5945904.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    ingredients: ['Coriander', 'Cumin', 'Turmeric', 'Dry Mango', 'Red Chilli'],
    bestFor: ['Aloo gobi', 'Bhindi', 'Dry potato'],
    certifications: ['FSSAI'],
    nutrition: { calories: 329, protein: 9.3, carbs: 53.1, fat: 10.4, fiber: 13.1, sodium: 169 },
  },
  {
    sku: 'ZK-BM-100',
    slug: 'biryani-masala',
    name: 'Biryani Masala',
    shortDescription: 'Royal spice profile for layered biryanis and pulao.',
    longDescription: 'High-aroma blend built on cardamom, mace, nutmeg, clove, and black cumin for premium biryani flavor.',
    category: 'premium',
    price: 229,
    weight: 100,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=900&q=80',
    ],
    ingredients: ['Black Cumin', 'Cardamom', 'Mace', 'Clove', 'Cinnamon', 'Nutmeg'],
    bestFor: ['Chicken biryani', 'Veg dum biryani', 'Pulao'],
    certifications: ['FSSAI', 'ISO 22000'],
    nutrition: { calories: 361, protein: 12.6, carbs: 47.8, fat: 14.9, fiber: 15.7, sodium: 154 },
  },
  {
    sku: 'ZK-CM-100',
    slug: 'chhole-masala',
    name: 'Chhole Masala',
    shortDescription: 'Tangy and bold blend crafted for Punjabi chhole.',
    longDescription: 'Dark-roasted masala with amchur, pomegranate seed, and black cardamom for deep dhaba-style flavor.',
    category: 'blended',
    price: 175,
    weight: 100,
    stock: 140,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.pexels.com/photos/9609836/pexels-photo-9609836.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80',
    ],
    ingredients: ['Coriander', 'Cumin', 'Dry Mango', 'Anardana', 'Black Cardamom'],
    bestFor: ['Chhole', 'Rajma gravy', 'Street-style curry'],
    certifications: ['FSSAI', 'ISO 22000'],
    nutrition: { calories: 346, protein: 10.9, carbs: 50.5, fat: 12.2, fiber: 14.2, sodium: 176 },
  },
  {
    sku: 'ZK-TM-100',
    slug: 'tandoori-masala',
    name: 'Tandoori Masala',
    shortDescription: 'Smoky spice blend for authentic tandoori dishes.',
    longDescription: 'Rich blend with kashmiri chilli, ginger, garlic, and aromatic spices for vibrant red color and deep smoky flavor.',
    category: 'premium',
    price: 199,
    weight: 100,
    stock: 95,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=80',
    ],
    ingredients: ['Kashmiri Chilli', 'Ginger', 'Garlic', 'Cumin', 'Coriander', 'Paprika'],
    bestFor: ['Tandoori chicken', 'Paneer tikka', 'Kebabs'],
    certifications: ['FSSAI', 'ISO 22000'],
    nutrition: { calories: 318, protein: 9.8, carbs: 45.2, fat: 11.4, fiber: 12.8, sodium: 198 },
  },
  {
    sku: 'ZK-PM-100',
    slug: 'pav-bhaji-masala',
    name: 'Pav Bhaji Masala',
    shortDescription: 'Mumbai street-style blend for perfect pav bhaji.',
    longDescription: 'Authentic blend with fennel, dry mango, and special spices for that iconic Mumbai street food taste.',
    category: 'blended',
    price: 159,
    weight: 100,
    stock: 165,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    ingredients: ['Coriander', 'Cumin', 'Fennel', 'Dry Mango', 'Red Chilli', 'Kasuri Methi'],
    bestFor: ['Pav bhaji', 'Misal pav', 'Bhaji sandwiches'],
    certifications: ['FSSAI'],
    nutrition: { calories: 335, protein: 10.1, carbs: 49.8, fat: 11.9, fiber: 13.5, sodium: 182 },
  },
  {
    sku: 'ZK-TP-500',
    slug: 'turmeric-powder',
    name: 'Turmeric Powder',
    shortDescription: 'Pure haldi from Erode with high curcumin content.',
    longDescription: 'Premium quality turmeric powder sourced from Erode, Tamil Nadu. Known for its bright yellow color and health benefits.',
    category: 'basic',
    price: 135,
    weight: 500,
    stock: 250,
    image: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    ingredients: ['100% Pure Turmeric'],
    bestFor: ['Daily cooking', 'Golden milk', 'Marinades'],
    certifications: ['FSSAI', 'ISO 22000'],
    nutrition: { calories: 312, protein: 9.7, carbs: 67.1, fat: 3.2, fiber: 22.7, sodium: 27 },
  },
  {
    sku: 'ZK-RC-500',
    slug: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    shortDescription: 'Fiery Guntur chillies for authentic heat.',
    longDescription: 'Premium red chilli powder from Guntur with perfect balance of heat and color for Indian cooking.',
    category: 'basic',
    price: 165,
    weight: 500,
    stock: 200,
    image: 'https://images.unsplash.com/photo-1599909533601-aa75a0c3f5fe?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.pexels.com/photos/4198021/pexels-photo-4198021.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    ingredients: ['100% Pure Red Chilli'],
    bestFor: ['Curries', 'Chutneys', 'Pickles'],
    certifications: ['FSSAI'],
    nutrition: { calories: 282, protein: 13.5, carbs: 49.7, fat: 14.3, fiber: 34.8, sodium: 1640 },
  },
  {
    sku: 'ZK-CP-500',
    slug: 'coriander-powder',
    name: 'Coriander Powder',
    shortDescription: 'Fresh ground dhania for aromatic gravies.',
    longDescription: 'Freshly ground coriander seeds with earthy, citrus notes. Essential for Indian curries and chutneys.',
    category: 'basic',
    price: 125,
    weight: 500,
    stock: 220,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    ingredients: ['100% Pure Coriander'],
    bestFor: ['Gravies', 'Chutneys', 'Spice blends'],
    certifications: ['FSSAI', 'ISO 22000'],
    nutrition: { calories: 298, protein: 12.4, carbs: 54.9, fat: 17.8, fiber: 41.9, sodium: 35 },
  },
  {
    sku: 'ZK-MC-100',
    slug: 'meat-curry-masala',
    name: 'Meat Curry Masala',
    shortDescription: 'Robust blend for rich meat gravies.',
    longDescription: 'Specially crafted blend with bay leaf, black pepper, and aromatic spices for deep, flavorful meat curries.',
    category: 'premium',
    price: 219,
    weight: 100,
    stock: 85,
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    ingredients: ['Bay Leaf', 'Black Pepper', 'Cardamom', 'Cinnamon', 'Star Anise', 'Nutmeg'],
    bestFor: ['Mutton curry', 'Chicken korma', 'Keema'],
    certifications: ['FSSAI', 'ISO 22000'],
    nutrition: { calories: 355, protein: 11.8, carbs: 46.2, fat: 15.1, fiber: 15.9, sodium: 162 },
  },
  {
    sku: 'ZK-SB-1000',
    slug: 'sambar-powder',
    name: 'Sambar Powder',
    shortDescription: 'South Indian blend for authentic sambar.',
    longDescription: 'Traditional Tamil Nadu style sambar powder with roasted dal, dried chillies, and aromatic spices.',
    category: 'export',
    price: 245,
    weight: 1000,
    stock: 75,
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    ingredients: ['Toor Dal', 'Coriander', 'Red Chilli', 'Fenugreek', 'Curry Leaves', 'Asafoetida'],
    bestFor: ['Sambar', 'Rasam', 'Dal variations'],
    certifications: ['FSSAI', 'ISO 22000'],
    nutrition: { calories: 342, protein: 15.2, carbs: 52.1, fat: 9.8, fiber: 18.3, sodium: 145 },
  },
];

export const recipeCards = [
  {
    title: 'Paneer Butter Masala',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80',
    prepTime: '35 min',
    serves: '4',
    masala: 'Garam Masala',
    excerpt: 'Creamy tomato gravy finished with butter, kasuri methi, and a warm garam masala note.',
  },
  {
    title: 'Lucknowi Biryani',
    image: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1200',
    prepTime: '70 min',
    serves: '6',
    masala: 'Biryani Masala',
    excerpt: 'Fragrant long-grain rice layered with saffron milk, caramelized onions, and aromatic whole spices.',
  },
  {
    title: 'Amritsari Chhole',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=1200&q=80',
    prepTime: '45 min',
    serves: '5',
    masala: 'Chhole Masala',
    excerpt: 'Slow-cooked chickpeas in robust masala gravy with tea infusion for iconic dhaba depth.',
  },
  {
    title: 'Tandoori Chicken',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1200&q=80',
    prepTime: '4 hrs',
    serves: '4',
    masala: 'Tandoori Masala',
    excerpt: 'Yogurt-marinated chicken with smoky tandoori spices, grilled to perfection.',
  },
  {
    title: 'Mumbai Pav Bhaji',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80',
    prepTime: '40 min',
    serves: '4',
    masala: 'Pav Bhaji Masala',
    excerpt: 'Street-style mixed vegetable mash served with buttery toasted pav bread.',
  },
  {
    title: 'Dal Tadka',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    prepTime: '30 min',
    serves: '4',
    masala: 'Kitchen King',
    excerpt: 'Yellow lentils tempered with cumin, garlic, and aromatic spices for comfort food at its best.',
  },
];

export const blogPosts = [
  {
    slug: 'how-to-store-spices-for-maximum-aroma',
    title: 'How To Store Spices For Maximum Aroma',
    excerpt: 'Learn practical storage rules that protect spice oils, color, and flavor in Indian kitchens.',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80',
    date: '2026-03-05',
    readTime: '6 min read',
  },
  {
    slug: 'difference-between-garam-masala-and-kitchen-king',
    title: 'Garam Masala Vs Kitchen King: When To Use Each',
    excerpt: 'A practical guide for home cooks and chefs to choose the right blend for each recipe stage.',
    image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '2026-03-11',
    readTime: '5 min read',
  },
  {
    slug: 'fssai-and-iso-what-they-mean-for-your-kitchen',
    title: 'FSSAI And ISO: What They Mean For Your Kitchen',
    excerpt: 'Understand quality standards and how certifications improve safety and consistency in masalas.',
    image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=1200&q=80',
    date: '2026-03-15',
    readTime: '7 min read',
  },
  {
    slug: 'health-benefits-of-turmeric-in-daily-cooking',
    title: 'Health Benefits Of Turmeric In Daily Cooking',
    excerpt: 'Discover the science behind turmeric and how to maximize its benefits in everyday meals.',
    image: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&w=1200&q=80',
    date: '2026-03-18',
    readTime: '8 min read',
  },
] as const;

export const testimonials = [
  {
    name: 'Ritika Malhotra',
    role: 'Home Chef, Gurgaon',
    rating: 5,
    quote: 'The consistency is excellent. My paneer and dal now have the same depth every single time.',
  },
  {
    name: 'Chef Manoj Arora',
    role: 'Cloud Kitchen Operator, Noida',
    rating: 5,
    quote: 'We switched to Zingking for our bulk operations and reduced flavor variation across daily batches.',
  },
  {
    name: 'Ameen Qureshi',
    role: 'Distributor, Hyderabad',
    rating: 5,
    quote: 'Retailers like the packaging quality and repeat demand is strong in both premium and value segments.',
  },
  {
    name: 'Priya Sharma',
    role: 'Food Blogger, Mumbai',
    rating: 5,
    quote: 'Zingking masalas have become my go-to for recipe videos. The aroma and color are always perfect.',
  },
  {
    name: 'Rajan Pillai',
    role: 'Restaurant Owner, Bangalore',
    rating: 5,
    quote: 'We serve 200+ plates daily and Zingking ensures our signature dishes taste the same every time.',
  },
  {
    name: 'Sunita Devi',
    role: 'Homemaker, Jaipur',
    rating: 5,
    quote: 'After trying Zingking, I stopped making my own masalas. The quality matches homemade perfectly.',
  },
] as const;

export const contactMeta = {
  phone: '+91 98100 77881',
  email: 'sales@zingkingmasala.com',
  whatsapp: '919810077881',
  address: 'Sector 63, Noida, Uttar Pradesh 201301',
  mapEmbed: 'https://www.google.com/maps?q=Noida+Sector+63&output=embed',
};

export const b2bBenefits = [
  'Dedicated regional account manager',
  'Volume-based pricing slabs with up to 30% margins',
  'Co-branded point-of-sale support materials',
  'Priority dispatch and replenishment',
  'Marketing support for local promotions',
  'Flexible payment terms for established partners',
  'Training sessions for retail staff',
  'Quarterly business reviews and growth planning',
];

export const companyStats = [
  { number: '15+', label: 'Years Experience' },
  { number: '500+', label: 'Retail Partners' },
  { number: '12', label: 'Product SKUs' },
  { number: '10L+', label: 'Happy Customers' },
];
