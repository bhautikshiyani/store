



import React, { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ZoomImage from '../ZoomImage';
import Image from 'next/image';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !bg-white !rounded-full !block`}
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <HiArrowRight className='text-[18px] text-black' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
       className={`${className} !bg-white !rounded-full !block`}
    //   style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <HiArrowLeft className='text-[18px] text-black' />
    </div>
  );
}



const ProductDetailSlider = ({ img }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    
    slidesToScroll: 1
  };

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);

  return (
    <div>
    <div className='h-[500px]'>

      <Slider {...settings} asNavFor={nav2} ref={slider1Ref}>
        {
          img.map((item, index) => {
            return (
              <div key={index} className='block '>
                <ZoomImage
                  alt={item.imageAlt}
                  src={`${item.imageSrc}`}
                />
              </div>
            )
          })
        }
      </Slider>
    </div>
      <div className='tumbline px-8'>
        <Slider
          asNavFor={nav1}
          ref={slider2Ref}
          adaptiveHeight={true}
          slidesToShow={4}
          infinite={false}
          swipeToSlide={true}
          focusOnSelect={true}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
        >
          {
            img.map((item, index) => {
              return (
                <Image width={100} height={90} key={index} className='h-[90px] object-cover'  style={{width:'auto' , height:'auto'}} src={item.imageSrc} alt={item.imageAlt} />
              )
            })
          }
        </Slider>
      </div>
    </div>
  );
};

export default ProductDetailSlider;

