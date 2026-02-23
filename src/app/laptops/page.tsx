import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/sections/Footer";
import { getProductsByCategory } from "@/lib/products";

export default async function LaptopsPage() {
  const products = await getProductsByCategory("laptops");
  return (
    <>
      <Header alwaysDark />
      <div className="h-14 sm:h-16" />
      <ProductGrid title="Laptops" products={products} />
      <Footer />
    </>
  );
}