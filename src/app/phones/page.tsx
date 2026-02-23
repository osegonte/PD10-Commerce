import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/sections/Footer";
import { getProductsByCategory } from "@/lib/products";

export default async function PhonesPage() {
  const products = await getProductsByCategory("phones");
  return (
    <>
      <Header alwaysDark />
      <div className="h-14 sm:h-16" />
      <ProductGrid title="Phones" products={products} />
      <Footer />
    </>
  );
}