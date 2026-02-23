// FILE: src/app/product/[slug]/page.tsx
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import ProductGallery from "@/components/ProductGallery";
import AddToCartButton from "@/components/AddToCartButton";
import { getProductBySlug } from "@/lib/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const specRows = [
    { label: "Condition", value: product.condition },
    { label: "Storage",   value: product.storage   },
    { label: "RAM",       value: product.ram        },
    { label: "Color",     value: product.color      },
    { label: "Warranty",  value: product.warranty   },
  ].filter((r) => r.value);

  const inBoxItems = product.in_box
    ? product.in_box.split(",").map((s) => s.trim()).filter(Boolean)
    : [];

  return (
    <>
      <Header alwaysDark />

      <section className="bg-white pt-14 sm:pt-16 pb-16 sm:pb-24">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

            {/* ── Left: Image gallery ── */}
            <ProductGallery
              images={product.images ?? []}
              name={product.name}
            />

            {/* ── Right: Product info ── */}
            <div className="lg:sticky lg:top-24">

              {/* Category breadcrumb */}
              <p className="text-[#8a8580] text-[11px] tracking-[0.25em] uppercase mb-3">
                {product.category}
              </p>

              {/* Name */}
              <h1 className="text-[#1a1a1a] text-[26px] sm:text-[30px] font-light leading-[1.2] mb-2">
                {product.name}
              </h1>

              {/* Condition badge */}
              {product.condition && (
                <p className="inline-block text-[10px] tracking-[0.15em] uppercase text-[#6b6560] border border-neutral-200 px-3 py-1 mb-4">
                  {product.condition}
                </p>
              )}

              {/* Price */}
              <p className="text-[#1a1a1a] text-[22px] mb-6 font-light">
                ₦{Number(product.price).toLocaleString()}
              </p>

              {/* Out of stock badge */}
              {!product.in_stock && (
                <p className="inline-block text-[11px] tracking-[0.15em] uppercase text-red-400 border border-red-200 px-3 py-1 mb-6">
                  Out of stock
                </p>
              )}

              {/* Add to Cart */}
              <AddToCartButton product={product} />

              <div className="h-px bg-neutral-100 my-8" />

              {/* Description */}
              {product.description && (
                <div className="mb-8">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#8a8580] mb-3">
                    About this item
                  </p>
                  <p className="text-[#6b6560] text-[14px] leading-[1.9] font-light">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Specs table */}
              {specRows.length > 0 && (
                <div className="mb-8">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#8a8580] mb-3">
                    Specifications
                  </p>
                  <div className="divide-y divide-neutral-100">
                    {specRows.map((row) => (
                      <div key={row.label} className="flex justify-between py-3">
                        <span className="text-[12px] tracking-[0.08em] uppercase text-[#aaa]">
                          {row.label}
                        </span>
                        <span className="text-[13px] text-[#1a1a1a] font-light">
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What's in the box */}
              {inBoxItems.length > 0 && (
                <div className="mb-8">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#8a8580] mb-3">
                    What&apos;s in the Box
                  </p>
                  <div className="flex flex-col gap-2">
                    {inBoxItems.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
                        <span className="text-[13px] text-[#6b6560] font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="h-px bg-neutral-100 my-8" />

              {/* Delivery info */}
              <div className="mb-8">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#8a8580] mb-3">
                  Delivery
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-[13px] text-[#6b6560] font-light">
                    3–7 days delivery nationwide
                  </p>
                  <p className="text-[13px] text-[#6b6560] font-light">
                    Pickup available — contact us to arrange
                  </p>
                </div>
              </div>

              {/* Trust badges */}
              <div className="bg-[#f8f8f8] p-5 flex flex-col gap-2">
                {[
                  "Verified by RATELS",
                  "Secure checkout",
                  "Return policy available",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-[#1a1a1a] text-[11px]">✔</span>
                    <span className="text-[12px] text-[#6b6560] font-light">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}