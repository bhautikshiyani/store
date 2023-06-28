import Image from "next/image";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        className +
        " before:hidden !flex shadow-lg z-[1] !right-0 !bg-white items-center justify-center !w-[40px] !h-[40px]"
      }
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronRight className={" text-[20px] !text-black"} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        className +
        " before:hidden !flex shadow-lg z-[1] !left-0 !bg-white items-center justify-center !w-[40px] !h-[40px]"
      }
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronLeft className={" text-[20px] !text-black"} />
    </div>
  );
}

const ProductSlider = () => {
  var settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2> Responsive </h2>
      <Slider {...settings}>
        <div className="bg-white shadow-lg p-4 pb-2 ">
          <Image
            width={200}
            height={300}
            src="/assets/images/large (1).webp"
            alt=""
          />
          <h3 className="font-chronicle font-bold mt-2 text-center">
            Zimmermann
          </h3>
        </div>
        <div className="bg-white shadow-lg p-4 pb-2 ">
          <Image
            width={200}
            height={300}
            src="/assets/images/large (1).webp"
            alt=""
          />
          <h3 className="font-chronicle font-bold mt-2 text-center">
            Zimmermann
          </h3>
        </div>
        <div className="bg-white shadow-lg p-4 pb-2 ">
          <Image
            width={200}
            height={300}
            src="/assets/images/large (1).webp"
            alt=""
          />
          <h3 className="font-chronicle font-bold mt-2 text-center">
            Zimmermann
          </h3>
        </div>
        <div className="bg-white shadow-lg p-4 pb-2 ">
          <Image
            width={200}
            height={300}
            src="/assets/images/large (1).webp"
            alt=""
          />
          <h3 className="font-chronicle font-bold mt-2 text-center">
            Zimmermann
          </h3>
        </div>
        <div className="bg-white shadow-lg p-4 pb-2 ">
          <Image
            width={200}
            height={300}
            src="/assets/images/large (1).webp"
            alt=""
          />
          <h3 className="font-chronicle font-bold mt-2 text-center">
            Zimmermann
          </h3>
        </div>
        <div className="bg-white shadow-lg p-4 pb-2 ">
          <Image
            width={200}
            height={300}
            src="/assets/images/large (1).webp"
            alt=""
          />
          <h3 className="font-chronicle font-bold mt-2 text-center">
            Zimmermann
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default ProductSlider;
