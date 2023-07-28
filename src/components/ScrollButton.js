import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = ({className , text}) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = window.pageYOffset; // Use window.pageYOffset to get the scroll position
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []); // Empty dependency array to run this effect only once when the component mounts

  return (
    <button className={className} onClick={scrollToTop} style={{ display: visible ? "flex" : "none" }}>
      <AiOutlineArrowUp />
      {text ? text : ""}
    </button>
  );
};

export default ScrollButton;
