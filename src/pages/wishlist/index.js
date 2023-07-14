import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Tooltip } from "react-tooltip";
const wishlistData = [
  {
    img: "/assets/images/top-1.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
    oldPrice: "107.00",
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
  {
    img: "/assets/images/top-1.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
    oldPrice: "107.00",
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
const Wishlist = () => {
  return (
    <div className="container mx-auto xl:max-w-7xl  px-4 py-9">
      <Tooltip id="my-tooltip" place="left" className="z-[999] !text-[12px]" />

      <h2 className="text-[#292933] font-semibold text-[20px] font-sans">
        Wishlist
      </h2>
      <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-7">
        {wishlistData.map((item, index) => {
          return (
            <div
              key={index}
              className="border hover:shadow-xl  z-[1]  relative  border-animation  overflow-hidden px-4 transition-all duration-[0.5s]"
            >
              <div className="py-4 overflow-hidden relative z-[1] group/item">
                <Link
                  href="/productdetail"
                  className="relative transition-all block after:absolute before:absolute overflow-hidden"
                >
                  <Image
                    width={195}
                    height={195}
                    alt="placeholder"
                    className="group-hover/item:scale-105 h-[195px] w-[195px] mx-auto object-contain transition-all"
                    src={item.img}
                  />

                  <div
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Remove from Wishlist"
                    className="top-1 group-hover/item:translate-x-0 transition duration-[0.4s] translate-x-[50px] absolute right-1"
                  >
                    <button className="bg-white mb-2 hover:bg-red-600 hover:text-white text-gray-600 transition duration-300 shadow-lg  flex items-center justify-center w-8 h-8">
                      <MdOutlineDeleteForever />
                    </button>
                  </div>

                  <button className="absolute  ease-in-out group overflow-hidden h-[35px] transition duration-[0.3s] hover:opacity-100 group-hover/item:translate-y-0 translate-y-[103%] text-center bottom-0 w-full bg-black opacity-70">
                    <span className="text-white ease-in-out ransition duration-[0.4s] h-[35px] flex items-center justify-center font-semibold text-xs">
                      Add To cart
                    </span>

                    {/* <span className="h-[35px] flex items-center justify-center">
                      <AiOutlineShoppingCart className="w-5 text-white mx-auto" />
                    </span> */}
                  </button>
                </Link>
                <div className="p-4 pb-2">
                  <Link
                    href="/productdetail"
                    className="text hover:text-black transition-all duration-300 text-gray-700 text-[12px] text-center"
                  >
                    {item.title}
                  </Link>
                  <div className="cursor-default flex items-center justify-center text-center mt-3">
                    <span className="font-bold text-gray-700 group-hover/item:text-black">
                      ${item.price}
                    </span>
                    {item.oldPrice && item.oldPrice ? (
                      <span className="text-gray-500 ml-1  line-through text-[14px]">
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
      </div>
    </div>
  );
};

export default Wishlist;
