import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosClose } from "react-icons/io";
const cartData = [
  {
    name: "Women's Embellished Tiered Sequin Jacket Dress",
    image: "/assets/images/black-woman-jacket.png",
    price: "$99.000",
    qunt: "1x",
  },
  {
    name: "Women's Embellished Tiered Sequin Jacket Dress",
    image: "/assets/images/black-woman-jacket.png",
    price: "$99.000",
    qunt: "1x",
  },
  {
    name: "Women's Embellished Tiered Sequin Jacket Dress",
    image: "/assets/images/black-woman-jacket.png",
    price: "$99.000",
    qunt: "1x",
  },
  {
    name: "Women's Embellished Tiered Sequin Jacket Dress",
    image: "/assets/images/black-woman-jacket.png",
    price: "$99.000",
    qunt: "1x",
  },
  {
    name: "Women's Embellished Tiered Sequin Jacket Dress",
    image: "/assets/images/black-woman-jacket.png",
    price: "$99.000",
    qunt: "1x",
  },
];
const Cart = () => {
  return (
    <div className="bg-white border  max-w-[320px] w-full">
      <h2 className="text-[#1b1b28] p-4 font-sans  font-semibold text-gray-800 border-b text-[16px] ">
        Cart Items
      </h2>
      <div className=" max-h-[300px] p-4 custom-scroll overflow-auto grid gap-3">
        {cartData.map((item, index) => {
          return (
            <div key={index} className="flex items-start gap-3">
              <div className="w-[60px] flex-none h-[60px]">
                <Image
                  src={item.image}
                  width={60}
                  height={60}
                  className="max-w-[60px] flex-1 w-full max-h-[60px] object-cover"
                />
              </div>
              <div>
                <h4 className="text-[#292933] text-[13px] font-sans font-semibold text">
                  {item.name}
                </h4>
                <div>
                  <span className="text-[14px] text-gray-500">1x</span>
                  <span className="text-[14px] text-gray-500 ml-2 font-sans">
                    {item.price}
                  </span>
                </div>
              </div>
              <button className="">
                <IoIosClose />
              </button>
            </div>
          );
        })}
      </div>
      <div className="p-4 px-8 border-t border-b flex item-center justify-between">
          <span className="text-gray-600 text-[14px]">Subtotal</span>
          <span className="text-dark font-semibold font-sans">260.000</span>
      </div>
      <div className="grid grid-cols-2 p-4 px-8 gap-5">
        <Link href="#" className="text-black block text-center px-2 border text-[12px] py-3 hover:bg-black hover:text-white transition duration-300">
          View cart
        </Link>
        <Link href="/checkout" className="text-black border text-center px-2 text-[12px] py-3 bg-black text-white transition duration-300">
         Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
