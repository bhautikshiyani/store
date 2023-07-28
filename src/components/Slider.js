import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Slide } from "react-slideshow-image";

const images = [
  {
    img: "/assets/images/offerslider3.avif",
  },
  {
    img: "/assets/images/offerslider1.avif",
  },
  {
    img: "/assets/images/offerslider2.avif",
  },
];
const Slider = () => {
  return (
    <div className="mb-7">
      <Slide
        autoplay={true}
        infinite={true}
        canSwipe={false}
        slidesToScroll={1}
        slidesToShow={1}
        arrows={false}
        indicators={true}
      >
        {images.map((items, index) => {
          return (
            <Link key={index} href={"#"}>
              <div className="each-slide-effect">
                <Image
                  priority={true}
                  alt="Offer Slider"
                  width={1980}
                  height={400}
                  src={items.img}
                />
              </div>
            </Link>
          );
        })}

        {/* <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images})` }}>
                    <span>Slide 3</span>
                </div>
            </div> */}
      </Slide>
    </div>
  );
};

export default Slider;
