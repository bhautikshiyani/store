import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
const Banner = () => {
  return (
    <div className="relative h-[270px] md:h-auto  grid md:grid-cols-2">
      <video
        muted
        loop
        autoPlay
        src="/assets/videos/offer.mp4"
        className="absolute object-cover h-full w-full inset-0 hidden md:block"
      >
        <source src="/assets/videos/offer.mp4" type="video/mp4" />
      </video>
      <video
        muted
        loop
        autoPlay
        src="/assets/videos/offer-mobile.mp4"
        className="absolute block h-[270px] object-cover md:hidden"
      >
        <source src="/assets/videos/offer-mobile.mp4" type="video/mp4" />
      </video>
      <div></div>
      <div className="z-2 mt-20 md:mt-0 relative md:py-[39px] text-center font-blair ">
        <h2 className="text-[21px]">
          Up to <span className="text-[42px]">60%</span> Off
        </h2>
        <h3 className="text-[24px]">2,000＋ further reductions</h3>
        <div className="justify-center flex mt-4 items-center">

        <Link href="#" className="font-semibold  text-[14px] ">
          SHOP NOW{" "}
        </Link>
          <BsArrowRightShort className="font-semibold ml-1.5 text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
