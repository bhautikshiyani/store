import Image from "next/image";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

const MyCart = () => {
  return (
    <div className="px-6">
      <div className=" hidden md:grid py-5 border-b gap-4 grid-cols-12">
        <div className="col-span-1 text-[13px] text-gray-400 font-semibold">
          Qty
        </div>
        <div className="col-span-4 text-[13px] text-gray-400 font-semibold">
          Product
        </div>
        <div className="col-span-2 text-[13px] text-gray-400 font-semibold">
          Price
        </div>
        <div className="col-span-2 text-[13px] text-gray-400 font-semibold">
          Text
        </div>
        <div className="col-span-2 text-[13px] text-gray-400 font-semibold">
          Total
        </div>
        <div className="col-span-1 text-[13px] text-gray-400 font-semibold">
          Remove
        </div>
      </div>
      <div className="py-5 grid gap-4 border-b">
        <div className="grid gap-4 grid-cols-6 md:grid-cols-12">
          <div className="col-span-1 flex items-center ">1</div>
          <div className="col-span-5 md:col-span-4">
            <div className="flex gap-3 items-center">
              <div className="flex-none">
                <Image
                  src="/assets/images/black-woman-cloth.png"
                  width={70}
                  height={70}
                  className="w-[70px] h-[70px] object-cover"
                />
              </div>
              <div>
                <span className="text-gray-800 text-[14px]">
                  Womens Summer Plus Size Lace Neckline Cold Shoulder Short
                  Sleeve
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-2 font-semibold md:flex items-center text-gray-800">
            <span className="block md:hidden text-[13px] text-gray-400 font-semibold">
              Price
            </span>
            $72.000
          </div>
          <div className="col-span-3 md:col-span-2 font-semibold md:flex items-center text-gray-800">
            <span className="block md:hidden text-[13px] text-gray-400 font-semibold">
              Text
            </span>
            $0.000
          </div>
          <div className="col-span-4 md:col-span-2 font-semibold md:flex items-center text-gray-900">
            <div className="block md:hidden text-[13px] text-gray-400 font-semibold">
              Total
            </div>
            $144.000
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center h-full justify-end">
              <button className="bg-[#f3af3d26] flex items-center hover:text-white hover:bg-red-500 transition duration-300 justify-center w-8 h-8 rounded-full text-red-500">
                <HiOutlineTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 py-5">
        <span className="text-[14px] font-medium text-gray-400">Subtotal</span>
        <span className=" font-semibold text-[18px] text-gray-900">
          $144.000
        </span>
      </div>
    </div>
  );
};

export default MyCart;
