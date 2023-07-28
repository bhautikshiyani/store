import Image from "next/image";
import React from "react";

const Payment = () => {
  return (
      <div className="px-6">
        <h4 className="text-grya-900 font-semibold border-b py-4">
          Coupon Code
        </h4>
        <div className=" py-7">
          <div className="relative">
            <input
              id="couponcode"
              name="couponcode"
              type="couponcode"
              placeholder="Have coupun code? Apply here"
              required
              className="block w-full  border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            <button className="bg-black text-white py-2 top-0 right-0 absolute px-4">
              Apply
            </button>
          </div>
        </div>
        <h4 className="text-grya-900 font-semibold border-b py-4">
          Select a payment option
        </h4>
        <div className="flex p-4 mt-4 items-start gap-4 rounded border border-orange-200 bg-orange-100/[30%]">
          <div>
            <input type="radio" name="payment" />
          </div>
          <div className="py-0.5">
            <h4 className="text-grya-900 mb-2 text-[14px] font-semibold ">
              Credit or debit card
            </h4>
            <Image
              width={300}
              alt="paymenticon"
              height={36}
              src="/assets/icons/payment-icons.webp"
            />
          </div>
        </div>
        <div className="flex p-4 mt-4 items-start gap-4 rounded border border-orange-200 bg-orange-100/[30%]">
          <div>
            <input type="radio" name="payment" />
          </div>
          <div className="py-0.5">
            <h4 className="text-grya-900  text-[14px] font-semibold ">
              Cash on Delivery
            </h4>
          </div>
        </div>
        
      </div>
  );
};

export default Payment;
