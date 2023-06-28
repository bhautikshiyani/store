import Slider from "@/components/Slider";
import TopHeader from "@/components/TopHeader/TopHeader";
import Banner from "@/components/Banner";
import Image from "next/image";
import ProductSlider from "@/components/Home/ProductSlider";

export default function Home() {
  return (
    <div>
      <Slider />
      <Banner />
      <div className="max-w-7xl mx-auto">
        <ProductSlider />
      </div>
    </div>
  );
}
