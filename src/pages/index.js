import Slider from "@/components/Slider";
import TopHeader from "@/components/TopHeader/TopHeader";
import Banner from "@/components/Banner";
import Image from "next/image";
import ProductSlider from "@/components/Home/ProductSlider";
import FeaturedProducts from "@/components/Home/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <Slider />
      <Banner />
      <div className="max-w-7xl mx-auto">
        <ProductSlider />
      </div>
      <div className="max-w-7xl py-4 mx-auto">
        <FeaturedProducts />
      </div>
    </div>
  );
}
