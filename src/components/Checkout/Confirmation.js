import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

const Confirmation = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-[32px] mb-8 font-semibold font-helvetica">Your order has been received</h2>
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <CheckIcon className="h-8 w-8 text-green-600" aria-hidden="true" />
      </div>
      <spna className="text-gray-700 text-[16px] mt-7 block">Thank you for purchase !</spna>
      <span className="block text-gray-800 mb-2 text-[18px] mt-3">Your order ID is : <span className="font-semibold">24234950234</span></span>
      <p className="text-gray-600">
        You will receive an order Confirmation email with details of your order
      </p>
    </div>
  );
};

export default Confirmation;
