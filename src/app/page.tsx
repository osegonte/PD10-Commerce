import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import NewArrivalsFetcher from "@/components/sections/NewArrivalsFetcher";
import Footer from "@/components/sections/Footer";
import ScamBanner from "@/components/layout/ScamBanner";

export default function Home() {
  return (
    <>
      <ScamBanner />
      <Header />
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <NewArrivalsFetcher />
      <Footer />
    </>
  );
}