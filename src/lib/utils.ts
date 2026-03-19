import { type ClassValue, clsx } from 'clsx';

// Combine class names with clsx
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Format price in Indian Rupees
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price).replace('₹', 'Rs ');
}

// Format date in Indian format
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

// Generate slug from string
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate Indian phone number
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
}

// Validate Indian pincode
export function isValidPincode(pincode: string): boolean {
  const pincodeRegex = /^[1-9][0-9]{5}$/;
  return pincodeRegex.test(pincode);
}

// Calculate shipping cost
export function calculateShipping(subtotal: number): number {
  return subtotal >= 799 ? 0 : 50;
}

// Calculate tax (5% GST)
export function calculateTax(subtotal: number): number {
  return Math.round(subtotal * 0.05);
}

// Calculate total
export function calculateTotal(subtotal: number): {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
} {
  const tax = calculateTax(subtotal);
  const shipping = calculateShipping(subtotal);
  return {
    subtotal,
    tax,
    shipping,
    total: subtotal + tax + shipping,
  };
}

// Debounce function
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Get random items from array
export function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Capitalize first letter
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Format order number
export function formatOrderNumber(orderNumber: string): string {
  return orderNumber.toUpperCase();
}

// Check if string is empty or whitespace
export function isEmpty(str: string | null | undefined): boolean {
  return !str || str.trim().length === 0;
}
