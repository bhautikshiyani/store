import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
const manCatagory = [
  {
    name: "MEN’S JUST IN ",
    img: "/assets/images/placeholder.jpg",
  },
  {
    name: "MEN’S DESIGNERS  ",
    img: "/assets/images/placeholder.jpg",
  },
  {
    name: "MEN’S BAGS  ",
    img: "/assets/images/placeholder.jpg",
  },
  {
    name: "MEN’S ACCESSORIES  ",
    img: "/assets/images/placeholder.jpg",
  },
  {
    name: "MEN’S CLOTHING  ",
    img: "/assets/images/placeholder.jpg",
  },

  {
    name: "MEN’S SHOES  ",
    img: "/assets/images/placeholder.jpg",
  },
  {
    name: "EVENT DRESSING ",
    img: "/assets/images/placeholder.jpg",
  },
  {
    name: "VACATION ",
    img: "/assets/images/placeholder.jpg",
  },
];
const ShopByCategory = () => {
  return (
    <div className="">
      <div className="border-b px-4  flex items-center justify-between pb-3  mb-8 ">
        <h3 className="font-semibold text-gray-700 text-[20px]">
          SHOP BY CATEGORY
        </h3>
      </div>
      <div className="grid divide-x px-0 sm:grid-cols-2">
        <div className="md:grid md:grid-cols-2 gap-x-5 px-6">
          {manCatagory.map((item, index) => {
            return (
              <div
                key={index}
                className="hover:shadow-lg trnasition duration-300 mb-2"
              >
                <div>
                  <Image
                    width={300}
                    height={300}
                    className="md:max-w-[300px] object-cover w-full  h-full max-h-[300px]"
                    src={item.img}
                  />
                  <span className="pt-2 text-[12px] font-semibold pb-2  flex items-center justify-center text-center leading-[20px]">
                    {item.name}{" "}
                    <AiFillCaretRight className="ml-1 text-[12px]" />
                  </span>
                </div>
              </div>
            );
          })}
          <div className="col-span-2 border-t py-5">
            <Link
              href="#"
              className="pt-2 text-[14px] font-semibold pb-2  flex items-center justify-center text-center leading-[20px]"
            >
              MEN’S SALE
              <AiFillCaretRight className="ml-1 text-[12px]" />
            </Link>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 gap-x-5 px-6">
          {manCatagory.map((item, index) => {
            return (
              <div
                key={index}
                className="hover:shadow-lg  trnasition duration-300 mb-2"
              >
                <div>
                  <Image
                    width={300}
                    height={300}
                    className="md:max-w-[300px] object-cover w-full  h-full max-h-[300px]"
                    src={item.img}
                  />
                  <span className="pt-2 text-[12px] font-semibold pb-2  flex items-center justify-center text-center leading-[20px]">
                    {item.name}{" "}
                    <AiFillCaretRight className="ml-1 text-[12px]" />
                  </span>
                </div>
              </div>
            );
          })}
          <div className="col-span-2  border-t py-5">
            <Link
              href="#"
              className="pt-2 text-[14px] font-semibold pb-2  flex items-center justify-center text-center leading-[20px]"
            >
              MEN’S SALE
              <AiFillCaretRight className="ml-1 text-[12px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
