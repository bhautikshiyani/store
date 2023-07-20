import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import { LiaPlusSolid } from "react-icons/lia";
import AddNewAddress from "../AddNewAddress";

const addess = [
  {
    addess: "3947 West Side Avenue Hackensack, NJ 07601",
    postalcode: "1254",
    city: "College",
    state: "Alaska",
    country: "United States",
    phone: "201-287-7714",
  },
  {
    addess: "3947 West Side Avenue Hackensack, NJ 07601",
    postalcode: "1254",
    city: "College",
    state: "Alaska",
    country: "United States",
    phone: "201-287-7714",
  },
];

const ShippingInfo = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 ">
      {addess.map((item, index) => {
        return (
          <div className="sm:flex border mb-6 w-full">
            <div className="flex-1 p-4 flex items-start">
              <div className="pr-5 py-[2px] flex">
                <input type="radio" name="addressselect" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-1">
                  <div className="min-w-[80px] sm:min-w-[150px]">
                    <span className="font-medium text-[12px] md:text-[16px] text-gray-500">Address</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-[13px] md:text-[16px]">{item.addess}</span>
                  </div>
                </div>
                <div className="flex flex-1">
                  <div className="min-w-[80px] sm:min-w-[150px]">
                    <span className="font-medium text-[12px] md:text-[16px] text-gray-500">Phone</span>
                  </div>
                  <div className="flex-1">
                    <span  className="text-[13px] md:text-[16px]">{item.phone}</span>
                  </div>
                </div>
                <div className="flex flex-1">
                  <div className="min-w-[80px] sm:min-w-[150px]">
                    <span className="font-medium text-[12px] md:text-[16px] text-gray-500">State</span>
                  </div>
                  <div className="flex-1">
                    <span  className="text-[13px] md:text-[16px]">{item.state}</span>
                  </div>
                </div>
                <div className="flex flex-1">
                  <div className="min-w-[80px] sm:min-w-[150px]">
                    <span className="font-medium text-[12px] md:text-[16px] text-gray-500">City</span>
                  </div>
                  <div className="flex-1">
                    <span  className="text-[13px] md:text-[16px]">{item.city}</span>
                  </div>
                </div>
                <div className="flex flex-1">
                  <div className="min-w-[80px] sm:min-w-[150px]">
                    <span className="font-medium text-[12px] md:text-[16px] text-gray-500">Country</span>
                  </div>
                  <div className="flex-1">
                    <span  className="text-[13px] md:text-[16px]">{item.country}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 text-end ">
              <button className="bg-gray-800 text-[14px] transition duration-300 hover:bg-black text-white px-5 py-2">
                Chnage
              </button>
            </div>
          </div>
        );
      })}
      <button onClick={()=> setOpen(true)} className="border p-5 bg-light w-full flex flex-col items-center">
      <BsPlusLg className="text-[26px] mb-3" />
        <span className="font-semibold text-[15px] bold text-center">Add New Address</span>
      </button>
      <AddNewAddress open={open} setOpen={setOpen} />
    </div>
  );
};

export default ShippingInfo;
