import Image from "next/image";
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

    <Slide slidesToScroll={1} slidesToShow={1} arrows={false} indicators={true}>
      {images.map((items, index) => {
        return (
          <div key={index} className="each-slide-effect">
            <Image width={1980} height={400} src={items.img} />
          </div>
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
