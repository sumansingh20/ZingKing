export type CartItem = {
  productId: string;
  sku: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  weight: number;
};

const CART_KEY = 'zingking_cart_v1';

function isBrowser() {
  return typeof window !== 'undefined';
}

function dispatchCartUpdate() {
  if (!isBrowser()) return;
  window.dispatchEvent(new CustomEvent('zingking-cart-updated'));
}

export function getCartItems(): CartItem[] {
  if (!isBrowser()) return [];

  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveCartItems(items: CartItem[]) {
  if (!isBrowser()) return;
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  dispatchCartUpdate();
}

export function addItemToCart(item: Omit<CartItem, 'quantity'>, quantity = 1) {
  const current = getCartItems();
  const existingIndex = current.findIndex((entry) => entry.productId === item.productId);

  if (existingIndex >= 0) {
    current[existingIndex] = {
      ...current[existingIndex],
      quantity: current[existingIndex].quantity + quantity,
    };
  } else {
    current.push({ ...item, quantity });
  }

  saveCartItems(current);
}

export function updateCartItemQuantity(productId: string, quantity: number) {
  const current = getCartItems();
  if (quantity <= 0) {
    const filtered = current.filter((item) => item.productId !== productId);
    saveCartItems(filtered);
    return;
  }

  const next = current.map((item) =>
    item.productId === productId ? { ...item, quantity } : item
  );
  saveCartItems(next);
}

export function removeCartItem(productId: string) {
  const current = getCartItems();
  const filtered = current.filter((item) => item.productId !== productId);
  saveCartItems(filtered);
}

export function clearCart() {
  saveCartItems([]);
}

export function getCartCount() {
  return getCartItems().reduce((sum, item) => sum + item.quantity, 0);
}

export function getCartSubtotal() {
  return getCartItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
}
