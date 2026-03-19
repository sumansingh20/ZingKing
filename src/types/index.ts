// Product Types
export type ProductCategory = 'basic' | 'blended' | 'premium' | 'export';

export interface Product {
  _id?: string;
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
  isActive: boolean;
  nutrition: NutritionInfo;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sodium: number;
}

// Cart Types
export interface CartItem {
  productId: string;
  sku: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  weight: number;
}

// Order Types
export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
export type PaymentStatus = 'pending' | 'completed' | 'failed';
export type PaymentMethod = 'online' | 'cod';

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ShippingAddress {
  street: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface Order {
  _id?: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: ShippingAddress;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shippingCost: number;
  totalAmount: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentMethod: PaymentMethod;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Contact Types
export type ContactType = 'inquiry' | 'partnership' | 'feedback' | 'complaint';

export interface Contact {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  type: ContactType;
  isRead: boolean;
  isResolved: boolean;
  response?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Recipe Types
export interface Recipe {
  title: string;
  slug: string;
  image: string;
  prepTime: string;
  cookTime: string;
  serves: string;
  masala: string;
  excerpt: string;
  ingredients: string[];
  instructions: string[];
}

// Blog Types
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  readTime: string;
  author?: string;
  tags?: string[];
}

// Testimonial Types
export interface Testimonial {
  name: string;
  role: string;
  location?: string;
  rating: number;
  quote: string;
  image?: string;
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Admin Types
export interface Admin {
  _id?: string;
  email: string;
  name: string;
  role: 'admin' | 'superadmin';
  isActive: boolean;
  lastLogin?: Date;
  createdAt?: Date;
}
