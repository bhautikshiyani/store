import Slider from "@/components/Slider";
import TopHeader from "@/components/TopHeader/TopHeader";
import Banner from "@/components/Banner";
import Image from "next/image";
import ProductSlider from "@/components/Home/ProductSlider";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Link from "next/link";
import LatestBrands from "@/components/Home/LatestBrands";
import ShopByCategory from "@/components/Home/ShopByCategory";
import { AiFillCaretRight } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Slider />
      <Banner />
      <div className="grid mt-5 sm:grid-cols-2">
        <div className="relative group">
          <img
            src="/assets/images/man1.jpg"
            className="object-cover w-full h-full max-h-[700px]"
          />
          <Link
            href="#"
            className="absolute group-hover:bg-black/[50%] trnasition duration-200 flex items-center justify-center text-white font-blair  drop-shadow-xl text-[24px] underline inset-0"
          >
            SHOP MAN'S
          </Link>
        </div>
        <div className="relative group">
          <img
            src="/assets/images/woman1.jpg"
            className="object-cover w-full h-full max-h-[700px]"
          />
          <Link
            href="#"
            className="absolute flex items-center group-hover:bg-black/[50%] trnasition duration-200 justify-center text-white font-blair  drop-shadow-xl text-[24px] underline inset-0"
          >
            SHOP WOMAN'S
          </Link>
        </div>
      </div>
      <div className="max-w-7xl py-4 mx-auto">
        <ProductSlider />
      </div>
      <div className="xl:max-w-5xl px-5 md:px-0 container gap-4 grid md:grid-cols-2 py-4 mx-auto">
        <div className="flex flex-col">
          <Image
            width={500}
            height={500}
            className="max-h-[314px] lg:max-h-[500px] h-full w-full object-cover"
            src="/assets/images/black-man.webp"
          />
          <div className="mt-7">
            <h2 className="text-[24px] lg:text-[26px] text-center font-medium font-chronicle">
            City Dressing
            </h2>
            <span className="text-[12px] font-semibold pb-2  flex items-center justify-center text-center leading-[20px]">
            SHOP THE EDIT 
              <AiFillCaretRight className="ml-1 text-[12px]" />
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            width={500}
            height={500}
            className="max-h-[314px] lg:max-h-[500px] h-full w-full object-cover"
            src="/assets/images/black-bag.webp"
          />
          <div className="mt-7">
            <h2 className="text-[24px] lg:text-[26px] text-center font-medium font-chronicle">
            LEMAIRE ’s Minimalist Style
            </h2>
            <span className="text-[12px] font-semibold pb-2  flex items-center justify-center text-center leading-[20px]">
            SHOP BAGS
              <AiFillCaretRight className="ml-1 text-[12px]" />
            </span>
          </div>
        </div>
        
      </div>
      <div className="max-w-7xl py-4 mx-auto">
        <ShopByCategory />
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
      <div className="xl:max-w-7xl px-5 md:px-0 container gap-4 grid md:grid-cols-3 py-4 mx-auto">
        <div className="flex flex-col">
          <Image
            width={500}
            height={500}
            className="max-h-[314px] lg:max-h-[500px] h-full w-full object-cover"
            src="/assets/images/Best-Beach-Vacation-Clothes-Women.webp"
          />
          <div className="mt-7">
            <h2 className="text-[24px] lg:text-[26px] text-center font-medium font-chronicle">
              Vacation Essentials
            </h2>
            <span className="text-[12px] font-semibold pb-2  flex items-center justify-center text-center leading-[20px]">
              SHOP ACCESSORIES
              <AiFillCaretRight className="ml-1 text-[12px]" />
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            width={500}
            height={500}
            className="max-h-[314px] lg:max-h-[500px] h-full w-full object-cover"
            src="/assets/images/16b76c55-f0bf-4505-b894-917320707e45-0712-MW-HP-promo-6-small-DESKTOP_result.webp"
          />
          <div className="mt-7">
            <h2 className="text-[24px] lg:text-[26px] text-center font-medium font-chronicle">
              Most-Wanted Salomon
            </h2>
            <span className="text-[12px] font-semibold pb-2  flex items-center justify-center text-center leading-[20px]">
              SHOP ACCESSORIES
              <AiFillCaretRight className="ml-1 text-[12px]" />
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            width={500}
            height={500}
            src="/assets/images/summer-outfit-ideas-for-men.png.webp"
            className="max-h-[314px] lg:max-h-[500px] h-full w-full object-cover"
          />
          <div className="mt-7">
            <h2 className="text-[24px] lg:text-[26px] text-center font-medium font-chronicle">
              Exclusive Missoni Mare
            </h2>
            <span className="text-[12px] font-semibold pb-2  flex items-center justify-center text-center leading-[20px]">
              SHOP ACCESSORIES
              <AiFillCaretRight className="ml-1 text-[12px]" />
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mt-8 mx-auto">
        <LatestBrands />
      </div>
    </div>
  );
}
