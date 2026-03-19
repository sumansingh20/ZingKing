import mongoose from 'mongoose';

export interface IProduct {
  _id?: string;
  name: string;
  description: string;
  price: number;
  category: 'everyday' | 'blended' | 'premium';
  image: string;
  images?: string[];
  ingredients: string[];
  weight: number; // in grams
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sodium: number;
  certifications: string[];
  bestFor: string[];
  storage: string;
  shelfLife: string;
  stock: number;
  sku: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema = new mongoose.Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a product name'],
      trim: true,
      maxlength: [100, 'Product name cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
      min: [0, 'Price cannot be negative'],
    },
    category: {
      type: String,
      enum: ['everyday', 'blended', 'premium'],
      default: 'everyday',
    },
    image: {
      type: String,
      required: [true, 'Please provide a product image'],
    },
    images: [String],
    ingredients: [String],
    weight: {
      type: Number,
      required: true, // in grams
    },
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
    stock: {
      type: Number,
      default: 100,
      min: 0,
    },
    sku: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model<IProduct>('Product', ProductSchema);
