// FILE: src/components/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  slug: string;
  condition?: string | null;
  storage?: string | null;
}

export default function ProductCard({ name, price, image, slug, condition, storage }: ProductCardProps) {
  return (
    <Link href={`/product/${slug}`} className="group block">
      <div
        className="relative w-full overflow-hidden bg-[#f2f2f0]"
        style={{ aspectRatio: "1 / 1" }}
      >
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            unoptimized
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="w-full h-full bg-[#e8e8e6]" />
        )}
      </div>

      <div className="pt-3">
        {/* Condition + storage badge */}
        {(condition || storage) && (
          <p className="text-[10px] tracking-[0.15em] uppercase text-[#aaa] mb-1">
            {[condition, storage].filter(Boolean).join(" · ")}
          </p>
        )}
        <p className="text-[#1a1a1a] text-[13px] leading-[1.45] font-light tracking-[0.01em]">
          {name}
        </p>
        <p className="text-[#1a1a1a] text-[13px] mt-[5px] font-light">
          {price}
        </p>
      </div>
    </Link>
  );
}