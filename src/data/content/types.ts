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
