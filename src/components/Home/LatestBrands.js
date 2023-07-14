import Image from "next/image";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import $ from "jquery";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
const LatestBrands = () => {
  const responsive = {
    0: {
      items: 1,
    },
    430: {
      items: 2,
    },
    768: {
      items: 3,
    },
    900: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  
  };

  useEffect(() => {
    import("owl.carousel").then(() => {
      const owl = $(".owl-carousel2");
      owl.owlCarousel({
        loop: true,
        margin: 5,
        nav: true,
        items: 1,
        dots: false,
      });

      // Custom Nav

      $(".owl-carousel2__next").click(() => owl.trigger("next.owl.carousel"));

      $(".owl-carousel2__prev").click(() => owl.trigger("prev.owl.carousel"));
    });
  }, []);
  return (
    <div className="container mx-auto px-4 sm:px-0">
      <div className="border-b flex items-center justify-between pb-3">
        <h3 className="font-semibold text-gray-700 text-[20px]">
          Latest Brands
        </h3>
      </div>
      <div className="px-5 py-4 relative">
        <OwlCarousel
          className="owl-theme owl-carousel2"
          dots={true}
          margin={15}
          autoplay={true}
          autoplayTimeout={2000}
          responsive={responsive}
        > 
          <div className="bg-white shadow-lg p-4 pb-2">
            <Image
              width={200}
              height={300}
              src="/assets/images/brands/Alexander-McQueen_Logo (1).png"
              alt="placeholder"
            />
          </div>
          <div className="bg-white shadow-lg p-4 pb-2">
            <Image
              width={300}
              height={300}
              src="/assets/images/brands/Balmain_Logo.png"
              alt="placeholder"
            />
          </div>
          <div className="bg-white shadow-lg p-4 pb-2">
            <Image
              width={300}
              height={300}
              src="/assets/images/brands/Burberry_Logo.png"
              alt="placeholder"
            />
          </div>
          <div className="bg-white shadow-lg p-4 pb-2">
            <Image
              width={300}
              height={300}
              src="/assets/images/brands/Fendi_Logo.png"
              alt="placeholder"
            />
          </div>
          <div className="bg-white shadow-lg p-4 pb-2">
            <Image
              width={300}
              height={300}
              src="/assets/images/brands/Givenchy_Logo.png"
              alt="placeholder"
            />
          </div>
          <div className="bg-white shadow-lg p-4 pb-2">
            <Image
              width={300}
              height={300}
              src="/assets/images/brands/Jacquemus_Logo-1.png"
              alt="placeholder"
            />
          </div>
          <div className="bg-white shadow-lg p-4 pb-2">
            <Image
              width={300}
              height={300}
              src="/assets/images/brands/Moncler_Logo.png"
              alt="placeholder"
            />
          </div>
          <div className="bg-white shadow-lg p-4 pb-2">
            <Image
              width={300}
              height={300}
              src="/assets/images/brands/Off-White_Logo.png"
              alt="placeholder"
            />
          </div>
          <div className="bg-white shadow-lg p-4 pb-2">
            <Image
              width={300}
              height={300}
              src="/assets/images/brands/Stone-Island_Logo.png"
              alt="placeholder"
            />
          </div>
          <div className="bg-white shadow-lg p-4 pb-2">
            <Image
              width={300}
              height={300}
              src="/assets/images/brands/Valentino_Logo.png"
              alt="placeholder"
            />
          </div>
          <div className="bg-white shadow-lg p-4 pb-2">
            <Image
              width={300}
              height={300}
              src="/assets/images/brands/Versace_Logo.png"
              alt="placeholder"
            />
          </div>

        </OwlCarousel>
        <div className="owl-carousel2__nav w-full flex items-center gap-3">
          <div className="owl-carousel2__prev white:bg-[#0c1a32] bg-white z-[3] absolute left-0 top-[50%] translate-y-[-50%] rounded w-8 h-8 flex items-center justify-center cursor-pointer shadow-sm hover:bg-black hover:text-white transition duration-200 text-orange">
            <FaArrowLeft />
          </div>
          <div className="owl-carousel2__next white:bg-[#0c1a32] bg-white z-[3] absolute right-0 top-[50%] translate-y-[-50%] rounded w-8 h-8 flex items-center justify-center cursor-pointer shadow-sm hover:bg-black hover:text-white transition duration-200 text-orange">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBrands;
