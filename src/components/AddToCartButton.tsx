// FILE: src/components/AddToCartButton.tsx
"use client";

import { useState } from "react";
import type { DBProduct } from "@/lib/products";
import { useCartStore } from "@/lib/cartStore";

interface Props {
  product: DBProduct;
}

export default function AddToCartButton({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = () => {
    if (!product.in_stock) return;
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images?.[0] ?? "",
      size: null,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="space-y-4">

      {/* Quantity */}
      <div>
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#8a8580] mb-3">Quantity</p>
        <div className="flex items-center border border-neutral-200 w-fit">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center text-[#6b6560] hover:text-[#1a1a1a] transition-colors text-lg"
          >
            −
          </button>
          <span className="w-10 text-center text-[14px] text-[#1a1a1a] select-none">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-10 flex items-center justify-center text-[#6b6560] hover:text-[#1a1a1a] transition-colors text-lg"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAdd}
        disabled={!product.in_stock}
        className={`w-full py-4 text-[13px] tracking-[0.15em] uppercase transition-all duration-300 ${
          added
            ? "bg-[#2a6a3a] text-white"
            : product.in_stock
            ? "bg-[#1a1a1a] text-white hover:bg-[#333]"
            : "bg-neutral-100 text-[#aaa] cursor-not-allowed"
        }`}
      >
        {!product.in_stock ? "Out of Stock" : added ? "Added to Cart ✓" : "Add to Cart"}
      </button>
    </div>
  );
}