// Dummy data — uses category images as product images for proof of concept.

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category: string;
  condition: string | null;
  storage: string | null;
  ram: string | null;
  color: string | null;
  warranty: string | null;
  in_box: string | null;
  images: string[];
  slug: string;
  in_stock: boolean;
  stock: number;
  created_at: string;
  sizes: string[];
}

// Alias so existing components that import DBProduct don't break
export type DBProduct = Product;

const ALL_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "iPhone 17",
    description: "Brand new iPhone 17. Stunning camera, all-day battery, latest A-series chip. Direct deal, no middleman.",
    price: 620000,
    category: "phones",
    condition: "New",
    storage: "128GB",
    ram: "8GB",
    color: "Black",
    warranty: "1 year",
    in_box: "Phone, Cable, Documentation",
    images: ["/categories/phones.jpg"],
    slug: "iphone-17",
    in_stock: true,
    stock: 1,
    created_at: new Date().toISOString(),
    sizes: [],
  },
  {
    id: "2",
    name: "MacBook Air M2",
    description: "Thin, silent, fast. The M2 chip handles everything from lectures to video editing without breaking a sweat.",
    price: 420000,
    category: "laptops",
    condition: "UK Used",
    storage: "256GB",
    ram: "8GB",
    color: "Midnight",
    warranty: "3 months",
    in_box: "Laptop, Charger",
    images: ["/categories/laptops.jpg"],
    slug: "macbook-air-m2",
    in_stock: true,
    stock: 1,
    created_at: new Date().toISOString(),
    sizes: [],
  },
  {
    id: "3",
    name: "iPad (Base)",
    description: "Perfect for note-taking, reading, and streaming. Lightweight and powerful enough for every student.",
    price: 180000,
    category: "student-essentials",
    condition: "UK Used",
    storage: "64GB",
    ram: "4GB",
    color: "Silver",
    warranty: "1 month",
    in_box: "iPad, Cable, Charger",
    images: ["/categories/student-essentials.jpg"],
    slug: "ipad-base",
    in_stock: true,
    stock: 1,
    created_at: new Date().toISOString(),
    sizes: [],
  },
  {
    id: "4",
    name: "EcoFlow Power Bank",
    description: "Never run out of juice. High-capacity EcoFlow power bank — fast charging, multiple ports, built to last.",
    price: 45000,
    category: "ghetto-essentials",
    condition: "New",
    storage: null,
    ram: null,
    color: "Black",
    warranty: "6 months",
    in_box: "Power Bank, Cable, Manual",
    images: ["/categories/ghetto-essentials.jpg"],
    slug: "ecoflow-power-bank",
    in_stock: true,
    stock: 3,
    created_at: new Date().toISOString(),
    sizes: [],
  },
];

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return ALL_PRODUCTS.filter((p) => p.category === category && p.in_stock);
}

export async function getAllProducts(): Promise<Product[]> {
  return ALL_PRODUCTS.filter((p) => p.in_stock);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return ALL_PRODUCTS.find((p) => p.slug === slug) ?? null;
}