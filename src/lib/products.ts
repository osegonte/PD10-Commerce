// Dummy data — swap getProductsByCategory with real Supabase query when admin is ready.

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

const ALL_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "iPhone 13 Pro Max",
    description: "Excellent condition. No scratches, battery health 89%. Original packaging included.",
    price: 450000,
    category: "phones",
    condition: "UK Used",
    storage: "256GB",
    ram: "6GB",
    color: "Sierra Blue",
    warranty: "3 months",
    in_box: "Phone, Charger, Cable",
    images: ["/products/iphone-13-pro.webp"],
    slug: "iphone-13-pro-max",
    in_stock: true,
    stock: 1,
    created_at: new Date().toISOString(),
    sizes: [],
  },
  {
    id: "2",
    name: "MacBook Air M1",
    description: "Super fast, silent, and lightweight. Battery health 91%. Perfect for students and creatives.",
    price: 380000,
    category: "laptops",
    condition: "UK Used",
    storage: "256GB",
    ram: "8GB",
    color: "Space Grey",
    warranty: "1 month",
    in_box: "Laptop, Charger",
    images: ["/products/macbook-air-m1.webp"],
    slug: "macbook-air-m1",
    in_stock: true,
    stock: 1,
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