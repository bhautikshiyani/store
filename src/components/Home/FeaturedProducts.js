import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import { HeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

function handleJQuery() {
  const owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 5,
    nav: false,
    items: 1,
    dots: true,
  });

  // Custom Nav

  $(".owl-carousel__next").click(() => owl.trigger("next.owl.carousel"));

  $(".owl-carousel__prev").click(() => owl.trigger("prev.owl.carousel"));
}

const sliderData = [
  {
    img: "/assets/images/placeholder.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
    oldPrice: "107.00",
    discount: "25%",
  },
  {
    img: "/assets/images/placeholder.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
  },
  {
    img: "/assets/images/placeholder.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "56.00",
    discount: "12%",
    oldPrice: "84.00",
  },
  {
    img: "/assets/images/placeholder.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
  },
  {
    img: "/assets/images/placeholder.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
  },
];
const FeaturedProducts = () => {
  const [wishlist, setWishlist] = useState(false);
  const option = {
    loop: true,
    margin: 20,
    dots: false,
    nav: false,
  };
  const responsive = {
    0: {
      items: 1,
    },
    575: {
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
    import("jquery").then(($) => {
      window.jQuery = $;
      import("owl.carousel").then(() => {
        handleJQuery();
      });
    });
  }, []);
  return (
    <div className="container mx-auto px-4 sm:px-0 mx-auto">
      <div className="border-b flex items-center justify-between pb-3 mb-6">
        <h3 className="font-semibold text-gray-700 text-[20px]">
          Featured Products
        </h3>
      </div>
      <div className="px-5 relative">
        <OwlCarousel
          className="owl-theme"
          loop
          dots={false}
          margin={15}
          responsive={responsive}
          option={option}
        >
          {sliderData.map((item, index) => {
            return (
              <div
                key={index}
                className="border z-[1] hover:before:border-t-violet-400 hover:before:w-full hover:before:h-full after:content-[''] before:content-['']  hover:before:border-e-violet-400 before:border-2 before:w-0 before:h-0 before:border-transparent before:top-0 before:left-0 before:absolute relative after:absolute after:z-[-1] before:z-[-1] border-animation hover:after:border-b-violet-400 hover:after:w-full hover:after:h-full hover:after:border-s-violet-400 after:border-2 after:w-0 after:h-0 after:border-transparent after:inset-0 after:absolute overflow-hidden px-4 transition-all duration-[0.5s]"
              >
                <div className="py-4 overflow-hidden relative z-[1] group/item">
                  <Link
                    href="#"
                    className="relative transition-all block after:absolute before:absolute overflow-hidden"
                  >
                    <Image
                      width={195}
                      height={195}
                      alt="placeholder"
                      className="group-hover/item:scale-105 transition-all"
                      src={item.img}
                    />
                    {item.discount && item.discount ? (
                      <span className="absolute top-1 left-1 text-white bg-red-600 font-semibold text-[10px] px-1.5 py-0.5">
                        {item.discount}
                      </span>
                    ) : (
                      <></>
                    )}
                    <div className="top-1 group-hover/item:translate-x-0 transition duration-[0.4s] translate-x-[50px] absolute right-1">
                      <button
                        onClick={() => setWishlist(!wishlist)}
                        className="bg-white mb-2 shadow-lg border flex items-center justify-center w-8 h-8"
                      >
                        {wishlist ? (
                          <AiFillHeart className="w-4 text-violet-600" />
                        ) : (
                          <AiOutlineHeart className="w-4 text-gray-500" />
                        )}
                      </button>
                    </div>

                    <button className="absolute ease-in-out group overflow-hidden h-[35px] transition duration-[0.3s] hover:opacity-100 group-hover/item:translate-y-0 translate-y-[101%] text-center bottom-0 w-full bg-black opacity-70">
                      <span className="text-white ease-in-out ransition duration-[0.4s] group-hover:mt-[-35px] h-[35px] flex items-center justify-center font-semibold text-xs">
                        Add To cart
                      </span>

                      <span className="h-[35px] flex items-center justify-center">
                        <AiOutlineShoppingCart className="w-5 text-white mx-auto" />
                      </span>
                    </button>
                  </Link>
                  <div className="p-4 pb-2">
                    <Link
                      href="#"
                      className="text hover:text-violet-600 transition-all duration-300 text-gray-700 text-[12px] text-center"
                    >
                      {item.title}
                    </Link>
                    <div className="cursor-default text-center mt-3">
                      <span className="font-bold text-gray-700 group-hover/item:text-violet-600">
                        ${item.price}
                      </span>
                      {item.oldPrice && item.oldPrice ? (
                        <span className="text-gray-500 ml-[-44px] group-hover/item:ml-1 transition-all duration-[0.5s] group-hover/item:opacity-100 opacity-0 line-through text-[14px]">
                          ${item.oldPrice}
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
        <div className="owl-carousel__nav w-full flex items-center gap-3 ">
          <div className="owl-carousel__prev dark:bg-[#0c1a32] bg-white z-[3] absolute left-0 top-[50%] translate-y-[-50%] rounded w-8 h-8 flex items-center justify-center cursor-pointer shadow-sm hover:bg-violet-600 hover:text-white transition duration-200 text-orange">
            <FaArrowLeft />
          </div>
          <div className="owl-carousel__next dark:bg-[#0c1a32] bg-white z-[3] absolute right-0 top-[50%] translate-y-[-50%] rounded w-8 h-8 flex items-center justify-center cursor-pointer shadow-sm hover:bg-violet-600 hover:text-white transition duration-200 text-orange">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
