import Image from "next/image";
import React from "react";
import RatingStar from "../RatingStar";

const data = [
  {
    avatar: "/assets/images/avtar-1.jpg",
    name: "Paul K. Jensen",
    date: "08-03-2021",
    rating: 5,
    dis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    variant: "Black",
  },
  {
    avatar: "/assets/images/avtar-1.jpg",
    name: "Paul K. Jensen",
    date: "08-03-2021",
    rating: 5,
    dis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    variant: "Black",
  },
];

const ReviewsAndRatings = () => {
  return (
    <div className="border">
      <h3 className="font-semibold p-5 text-[14px]">Reviews & Ratings</h3>
      <div className="px-5">
        <div className="px-5 py-9 mb-4 flex flex-col sm:flex-row justify-between border-[#f3af3d] border bg-[#f3af3d26]">
          <div className="flex items-center mb-4 sm:mb-0">
            <div>
              <span className="font-medium text-[34px] leading-[27px] mr-4">
                5
              </span>
              <span className="text-[13px] ">out of 5.0</span>
            </div>
            <div className="flex flex-col flex-1 sm:flex-0 sm:flex-row  items-end">
              <div className="mx-3">
                <RatingStar ratingNum={5} />
              </div>
              <span className="text-[13px]  ">(1 reviews)</span>
            </div>
          </div>
          <div className="text-end">

          <button className="bg-[#f3af3d] text-white hover:bg-[#e0a800] transition duration-300 leading-[20px] px-5 text-[14px] py-2.5">
            Rate this Product
          </button>
          </div>
        </div>
        <div className="py-3">
          <span className="opacity-70 text-[13px] sm:text-[16px] font-semibold text-center block">
            There have been no reviews for this product yet.
          </span>
        </div>
        <div className=" divide-y ">
          {data.map((item, index) => {
            return (
              <div className="flex py-5">
                <div className="w-[50px] h-[50px] flex-none mr-3">
                  <Image
                    src={item.avatar}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-[#1b1b28] text-[14px] sm:text-[15px]">{item.name}</h4>
                  <span className="text-[13px] mb-1 block text-[#1b1b28] opacity-60">
                    {item.date}
                  </span>
                  <RatingStar ratingNum={item.rating} />
                  <p className="text-[13px] sm:text-[14px] block my-3 text-[#1b1b28] ">
                    {item.dis}
                  </p>
                  <span className="text-[12px] text-gray-500">
                    Variation : {item.variant}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewsAndRatings;
