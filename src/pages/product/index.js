import Filter from "@/components/Filter/Filter";
import Pagination from "@/components/Pagination";
import ScrollButton from "@/components/ScrollButton";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
const fliterdata = [
  {
    img: "/assets/images/top-1.jpg",
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
    img: "/assets/images/top-1.jpg",
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
    price: "92.00",
  },
  {
    img: "/assets/images/top-1.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
    oldPrice: "107.00",
    discount: "25%",
  },
  {
    img: "/assets/images/top-1.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
    oldPrice: "107.00",
    discount: "25%",
  },
  {
    img: "/assets/images/top-1.jpg",
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
    img: "/assets/images/top-1.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
    oldPrice: "107.00",
    discount: "25%",
  },
  {
    img: "/assets/images/top-1.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
    oldPrice: "107.00",
    discount: "25%",
  },
  {
    img: "/assets/images/top-1.jpg",
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
    img: "/assets/images/top-1.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
    oldPrice: "107.00",
    discount: "25%",
  },
  {
    img: "/assets/images/top-1.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
    oldPrice: "107.00",
    discount: "25%",
  },
  {
    img: "/assets/images/top-1.jpg",
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
    img: "/assets/images/top-1.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
    oldPrice: "107.00",
    discount: "25%",
  },
  {
    img: "/assets/images/top-1.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
    oldPrice: "107.00",
    discount: "25%",
  },
  {
    img: "/assets/images/top-1.jpg",
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
    img: "/assets/images/top-1.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
    oldPrice: "107.00",
    discount: "25%",
  },
  {
    img: "/assets/images/top-1.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
    oldPrice: "107.00",
    discount: "25%",
  },
  {
    img: "/assets/images/top-1.jpg",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
    oldPrice: "107.00",
    discount: "25%",
  },
];
const Product = () => {
  const [wishlist, setWishlist] = useState(false);

  return (
    <>
      <div className="md:flex container mx-auto gap-4 py-10 xl:max-w-7xl px-5">
        <div className="w-full md:w-[250px] ">
          <Filter />
        </div>
        <div className="w-full flex-1">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-1">
            {fliterdata.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border z-[1] hover:shadow-lg  relative overflow-hidden px-4 transition-all duration-[0.5s]"
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
                        className="group-hover/item:scale-105 h-[195px] w-[195px] object-contain transition-all"
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
                            <AiFillHeart className="w-4 text-black" />
                          ) : (
                            <AiOutlineHeart className="w-4 text-gray-500" />
                          )}
                        </button>
                      </div>

                      <button className="absolute ease-in-out group overflow-hidden h-[35px] transition duration-[0.3s] hover:opacity-100 group-hover/item:translate-y-0 translate-y-[103%] text-center bottom-0 w-full bg-black opacity-70">
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
                        href="/productdetail"
                        className="text hover:text-black transition-all duration-300 text-gray-700 text-[12px] text-center"
                      >
                        {item.title}
                      </Link>
                      <div className="cursor-default text-center mt-3">
                        <span className="font-bold text-gray-700 group-hover/item:text-black">
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
          </div>
          <Pagination />
        </div>
      </div>
      <ScrollButton className="fixed right-10 bottom-10 bg-white w-7 h-7  items-center justify-center trnasition duration-300 shadow-md rounded hover:text-white hover:bg-black" />
    </>
  );
};

export default Product;
