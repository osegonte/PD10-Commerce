// FILE: src/components/ProductGrid.tsx
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import type { DBProduct } from "@/lib/products";

const SHOP_CATEGORIES = [
  { label: "All",                href: "/phones"             },
  { label: "Phones",             href: "/phones"             },
  { label: "Laptops",            href: "/laptops"            },
  { label: "Student Essentials", href: "/student-essentials" },
  { label: "Ghetto Essentials",  href: "/ghetto-essentials"  },
];

interface ProductGridProps {
  title: string;
  products: DBProduct[];
}

export default function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <section className="bg-white min-h-[60vh]">

      {/* Category filter bar */}
      <div className="border-b border-neutral-200">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center gap-0 overflow-x-auto">
          {SHOP_CATEGORIES.map((cat) => {
            const isActive = cat.label === title;
            return (
              <Link
                key={cat.label}
                href={cat.href}
                className={`
                  relative shrink-0 px-4 py-4 text-[12px] tracking-[0.04em] transition-colors duration-200
                  ${isActive
                    ? "text-[#1a1a1a] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1a1a1a]"
                    : "text-[#8a8580] hover:text-[#1a1a1a]"
                  }
                `}
              >
                {cat.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20 py-4 flex items-center justify-between border-b border-neutral-100">
        <p className="text-[11px] tracking-[0.12em] uppercase text-[#8a8580]">
          {products.length} {products.length === 1 ? "product" : "products"}
        </p>
        <p className="text-[11px] tracking-[0.12em] uppercase text-[#8a8580] hidden sm:block">
          Sort by: <span className="text-[#1a1a1a]">Latest</span>
        </p>
      </div>

      {/* Grid */}
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20 py-8">
        {products.length === 0 ? (
          <div className="py-32 text-center">
            <p className="text-[#8a8580] text-[13px] tracking-[0.15em] uppercase">
              No products yet
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-[1px] gap-y-10">
            {products.map((product) => (
              <div key={product.id} className="bg-white px-2 sm:px-3">
                <ProductCard
                  name={product.name}
                  price={`₦${Number(product.price).toLocaleString()}`}
                  image={product.images?.[0] ?? ""}
                  slug={product.slug}
                  condition={product.condition}
                  storage={product.storage}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}