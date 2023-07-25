import Confirmation from "@/components/Checkout/Confirmation";
import MyCart from "@/components/Checkout/MyCart";
import Payment from "@/components/Checkout/Payment";
import ShippingInfo from "@/components/Checkout/ShippingInfo";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsArrowLeft, BsCheck2Circle, BsTruck } from "react-icons/bs";
import { GoCreditCard } from "react-icons/go";
import { LiaMapMarkedSolid } from "react-icons/lia";
const CheckOut = () => {
  const [cartStep, setCartStep] = useState(1);
  const handlecart = () => {
    setCartStep(cartStep + 1);
  };
  const handleBackcart = () => {
    setCartStep(cartStep - 1);
  };
  return (
    <div className="py-14 px-4">
      <div className="grid container  xl:max-w-4xl mx-auto grid-cols-4  sm:gap-6">
        <div className="text-black border-b-black flex gap-3 border border-b-[6px] px-3 py-5 flex-col items-center">
          <AiOutlineShoppingCart className="text-[24px] sm:text-[40px] " />
          <span className="font-medium font-sans text-[14px] hidden md:block">
            1. My Cart
          </span>
        </div>
        <div
          className={`${
            cartStep === 2 || cartStep === 3 || cartStep === 4
              ? "border-b-black text-black"
              : "text-gray-400"
          }  flex gap-3 border border-b-[6px] px-3 py-5 flex-col items-center`}
        >
          <LiaMapMarkedSolid className="text-[24px] sm:text-[40px] " />
          <span className="font-medium font-sans hidden md:block text-[14px]">
            2. Shipping info
          </span>
        </div>

        <div
          className={` ${
            cartStep === 3 || cartStep === 4
              ? "border-b-black text-black"
              : "text-gray-400"
          }  flex gap-3  border border-b-[6px] px-3 py-5 flex-col items-center`}
        >
          <GoCreditCard className="text-[24px] sm:text-[40px] " />
          <span className="font-medium font-sans hidden md:block text-[14px]">
            3. Payment
          </span>
        </div>
        <div
          className={` ${
            cartStep === 4 ? "border-b-black text-black" : "text-gray-400"
          } flex gap-3  border border-b-[6px] px-3 py-5 flex-col items-center`}
        >
          <BsCheck2Circle className="text-[24px] sm:text-[40px] " />
          <span className="font-medium font-sans hidden md:block text-[14px]">
            4. Confirmation
          </span>
        </div>
      </div>
      <div className={`${cartStep === 3 ? "grid lg:grid-cols-12 gap-7" :" "} container mx-auto  mt-7 xl:max-w-6xl`}>
        <div className={` border ${cartStep === 3 ? "order-2 lg:order-1  lg:col-span-8 " :" "}`}>
          {cartStep === 1 ? (
            <MyCart />
          ) : cartStep === 2 ? (
            <ShippingInfo />
          ) : cartStep === 3 ? (
            <Payment />
          ) : (
            <Confirmation />
          )}
          <div className="p-6">
            <div className="grid sm:grid-cols-2">
              <div className="hidden sm:flex items-center">
                <button className="text-gray-500  flex items-center gap-2 hover:text-black transition duration-300">
                  <BsArrowLeft /> Return to shop
                </button>
              </div>
              <div className="flex gap-3 justify-end">
                {cartStep !== 1 && (
                  <button
                    onClick={handleBackcart}
                    className="bg-white  px-3 py-2"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={handlecart}
                  className="bg-black text-white px-3 py-2"
                >
                  Continue to Shipping
                </button>
              </div>
            </div>
          </div>
        </div>
        <div  className={`px-4 border py-4 ${cartStep === 3 ? "order-1 lg:order-2 lg:col-span-4 block" :" hidden"}`}>
          <div className="flex items-center mb-3">
            <h3 class="text-[16px] flex-1 font-medium font-sans leading-6 text-dark800">
              Summary
            </h3>
            <span className="bg-red-500 py-1 px-3 text-[12px] text-white">
              1 Items
            </span>
          </div>
          <div className="pt-4">
            <div className="text-gray-500 py-3 border-b font-medium flex text-[13px]">
              <span className="flex-1">Product</span>
              <span>Total</span>
            </div>
            <div className="border-b border-gray-100 flex items-center py-4">
              <span className="text-gray-800 flex-1">
                Under Armour Men's Charged Assert 9 Running Shoe ×{" "}
                <span className="font-semibold text-black">1</span>
              </span>
              <span className="text-red-700">$97.200</span>
            </div>
            <div className="border-b">
              <div className="flex items-center py-1.5">
                <span className="text-gray-800  flex-1 font-semibold ">
                  Subtotal
                </span>
                <span className="text-red-700">$97.200</span>
              </div>
              <div className="flex items-center py-1.5">
                <span className="text-gray-800  flex-1 font-semibold">Tax</span>
                <span className="text-red-700">$97.200</span>
              </div>
              <div className="flex items-center py-1.5">
                <span className="text-gray-800  flex-1 font-semibold">
                  Total Shipping
                </span>
                <span className="text-red-700">$97.200</span>
              </div>
            </div>
            <div className="flex items-center py-4">
              <span className="text-gray-800  flex-1 font-semibold">Total</span>
              <span className="text-red-700 font-bold">$97.200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
