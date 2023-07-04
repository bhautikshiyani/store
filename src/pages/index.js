import Slider from "@/components/Slider";
import TopHeader from "@/components/TopHeader/TopHeader";
import Banner from "@/components/Banner";
import Image from "next/image";
import ProductSlider from "@/components/Home/ProductSlider";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Link from "next/link";
import LatestBrands from "@/components/Home/LatestBrands";

export default function Home() {
  return (
    <div>
      <Slider />
      <Banner />
      <div className="max-w-7xl py-4 mx-auto">
        <ProductSlider />
      </div>
      <div className="max-w-7xl py-4 mx-auto">
        <FeaturedProducts />
      </div>
      <div className="bg-[#ffb5cd] px-4 sm:px-0 py-12">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-2">
            <div className="flex justify-center flex-col">
              <h2 className="font-chronicle text-[36px]">Beauty</h2>
              <Link
                className="text-[16px] text-gray-700 transition-all duration-200 hover:underline font-helvetica"
                href="product"
              >
                See All
              </Link>
            </div>
            <div>
              <Image
                src="/assets/images/home_beaute.jpg"
                className="w-full"
                alt="home_benaute"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mt-8 mx-auto">
        <LatestBrands />
      </div>
    </div>
  );
}
