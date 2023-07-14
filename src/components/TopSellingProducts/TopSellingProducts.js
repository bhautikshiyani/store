import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    img: "/assets/images/watch.png",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "$450.000",
    oldprice: "$90.000",
    link: "#",
  },
  {
    img: "/assets/images/black-woman-cloth.png",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "$450.000",
    oldprice: "$90.000",
    link: "#",
  },
  {
    img: "/assets/images/watch.png",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "$450.000",
    oldprice: "$90.000",
    link: "#",
  },
  {
    img: "/assets/images/black-woman-cloth.png",
    title: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    price: "$450.000",
    oldprice: "$90.000",
    link: "#",
  },
];

const TopSellingProducts = () => {
  return (
    <div className="border ">
      <h3 className="font-semibold  p-4 text-[14px]">Top Selling Products</h3>
      <div className="px-4">
        {data.map((item, index) => {
          return (
            <div key={index} className="py-3">
              <Link
                className="grid grid-cols-12 hover:shadow-lg transition duration-300 block px-2 py-1"
                href={item.link}
              >
                <div className="px-2.5 col-span-5 lg:col-span-4">
                  <Image
                    className="lg:h-[80px] object-contain w-[100%] max-h-[100%] xs:h-[80px] sm:h-[150px ] h-[150px]"
                    src={item.img}
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" col-span-7 lg:col-span-8">
                  <h3 className="text hover:text-black transition duration-300 leading-[16px] text-[13px] text-gray-700 mb-3 mt-2">
                    {item.title}
                  </h3>
                  <div className="flex lg:block xl:flex items-center gap-2">
                    <span className="text-[14px] font-bold text-black">
                      {item.price}
                    </span>
                    <span className="text-gray-500 block  font-bold line-through text-[14px]">
                      {item.oldprice}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopSellingProducts;
