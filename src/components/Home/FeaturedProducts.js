import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import { HeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const FeaturedProducts = () => {
  return (
    <div>
      <h2 className="text-[24px] font-semibold">Featured Products</h2>
      <div>
        <div className="border px-4">
          <div className="py-4 group/item">
            <div className="relative overflow-hidden">
              <Image
                width={195}
                height={195}
                className=""
                src={"/assets/images/watch.png"}
              />
              <span className="absolute top-0 text-white bg-red-600 font-semibold text-[12px] px-1.5 py-0.5">
                -25%
              </span>
              <div className="top-0 absolute right-0">
                <button className="bg-white mb-2 shadow-lg flex items-center justify-center w-10 h-10">
                  <HeartIcon className="w-5 text-gray-500" />
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
            </div>
            <div>
              <h6>
                Fossil Men's Grant Stainless Steel Quartz Chronograph Watch
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
