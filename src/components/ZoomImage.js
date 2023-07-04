import Image from "next/image";
import React, { useState } from "react";

const ZoomImage = ({ src, alt }) => {
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <figure
      onMouseMove={handleMouseMove}
      className="group relative rounded max-w-[500px]  w-full h-full max-h-[500px]  bg-no-repeat overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: backgroundPosition,
        }}
        className="absolute opacity-0 group-hover:opacity-100  bg-no-repeat  inset-0"
      ></div>

      <Image
        width={500}
        height={500}
        style={{ width: "auto", height: "auto" }}
        src={src}
        alt={alt}
        className="group-hover:opacity-0 transition duration-500 !h-full max-h-[500px] mx-auto"
      />
    </figure>
  );
};

export default ZoomImage;
