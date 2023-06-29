import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
const Banner = () => {
  return (
    <div className="relative grid grid-cols-2">
      <video
        muted
        loop
        autoPlay
        src="/assets/videos/offer.mp4"
        className="absolute"
      >
        <source src="/assets/videos/offer.mp4" type="video/mp4" />
      </video>
      <div></div>
      <div className="z-2 relative py-12 text-center font-blair ">
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
