import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const nav = [
  {
    title: "Univers",
    page: [
      {
        name: "Brands",
        href: "#",
      },
      {
        name: "Bags",
        href: "#",
      },
      {
        name: "Bags & accessories",
        href: "#",
      },
      {
        name: "New arrivals ",
        href: "#",
      },
      {
        name: "Trends",
        href: "#",
      },
      {
        name: "Large sizes",
        href: "#",
      },
    ],
  },
  {
    title: "QUICK LINKS",
    page: [
      {
        name: "Support Policy Page",
        href: "#",
      },
      {
        name: "Return Policy Page",
        href: "#",
      },
      {
        name: "About Us",
        href: "#",
      },
      {
        name: "Privacy Policy Page",
        href: "#",
      },
      {
        name: "Term Conditions Page",
        href: "#",
      },
    ],
  },
  {
    title: "MY ACCOUNT",
    page: [
      {
        name: "Login",
        href: "/login",
      },
      {
        name: "Order History",
        href: "#",
      },
      {
        name: "My Wishlist",
        href: "#",
      },
      {
        name: "Track Order",
        href: "#",
      },
      {
        name: "Term Conditions Page",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div>
      <div className="sm:grid xl:max-w-7xl container px-4 mx-auto py-7 sm:grid-cols-2">
        <div className="flex">
          <input
            placeholder="Sign up to our emails"
            className="border  w-full border-black px-3 py-2.5"
          />
          <button className="bg-black w-[200px] text-white px-8 py-2.5 border border-black">
            SIGN UP
          </button>
        </div>
        <div className="flex mt-4 sm:mt-0  w-full items-center sm:justify-end">
          <ul className="flex w-full justify-evenly sm:justify-end   item gap-2">
            <li>
              <Link
                href="#"
                className="text-white bg-black flex items-center justify-center text-[17px] rounded-full w-8 h-8 block"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white bg-black flex items-center justify-center text-[17px] rounded-full w-8 h-8 block"
              >
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white bg-black flex items-center justify-center text-[17px] rounded-full w-8 h-8 block"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white bg-black flex items-center justify-center text-[17px] rounded-full w-8 h-8 block"
              >
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white bg-black flex items-center justify-center text-[17px] rounded-full w-8 h-8 block"
              >
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-200 py-6">
        <div className="xl:max-w-7xl container px-4 mx-auto grid  sm:grid-cols-2 lg:grid-cols-4">
          {nav.map((item, index) => {
            return (
              <div key={index} className="font-sans">
                <h2 className="font-semibold relative after:absolute after:left-0 after:bottom-[-4px] after:h-[1px] after:bg-gray-800 after:w-[40px] text-[15px] mb-4 text-gray-800">
                  {item.title}
                </h2>
                <ul>
                  {item.page.map((item, index) => {
                    return (
                      <li key={index} className="mb-2">
                        <Link
                          href={item.href}
                          className="text-gray-600 text-[13px]  relative after:absolute after:content-[' '] hover:after:scale-x-100 hover:after:origin-left after:bg-gray-600 after:bottom-[-5px] after:h-[1px] after:rounded-[2px]  after:left-0 after:right-0 after:origin-right border-animation-time after:scale-x-0"
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div>
            {/* <div>
              <h2 className="font-semibold text-[15px] mb-3 text-gray-400">
                FOLLOW US
              </h2>
              <div>
                <ul className="flex items-center justify-between">
                  <li>
                    <Link
                      href="#"
                      className="text-white bg-[#3b5998] flex items-center justify-center text-[17px] rounded-full w-8 h-8 block"
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white bg-[#1da1f2] flex items-center justify-center text-[17px] rounded-full w-8 h-8 block"
                    >
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white bg-[#bd32a2] flex items-center justify-center text-[17px] rounded-full w-8 h-8 block"
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white bg-[#ff0000] flex items-center justify-center text-[17px] rounded-full w-8 h-8 block"
                    >
                      <FaYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white bg-[#0070ac] flex items-center justify-center text-[17px] rounded-full w-8 h-8 block"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="">
              <h2 className="font-semibold text-[15px] mb-3 text-gray-800 relative after:absolute after:left-0 after:bottom-[-4px] after:h-[1px] after:bg-gray-800 after:w-[40px]">
                MOBILE APPS
              </h2>
              <div className="flex flex-col gap-2">
                <div>
                  <span className="text-gray-600 text-[13px] mb-4  ">
                    Download our Android App
                  </span>
                  <Link href="#" className="mt-1.5 block">
                    <Image
                      width={150}
                      alt="playstore"
                      height={40}
                      src="/assets/icons/play.png"
                    />
                  </Link>
                </div>
                <div className="">
                  <span className="text-gray-600 text-[13px] mb-4 ">
                    Download our Android App
                  </span>
                  <Link href="#" className="mt-1.5 block">
                    <Image
                      width={150}
                      alt="appstore"
                      height={40}
                      src="/assets/icons/app.png"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="xl:max-w-7xl py-5 px-4 border-t border-gray-300 sm:flex justify-between items-center container mx-auto">
          <div className="flex gap-1">
            <h2 className="font-semibold text-[14px]  text-gray-800 ">
              Shopping to
            </h2>
            <span className="text-[14px]  text-gray-600 "> United Kingdom</span>
          </div>
          
         
            <div className="flex mt-2 sm:mt-0 gap-1">
              <h2 className="font-semibold text-[14px]  text-gray-800 ">
                Customer Service
              </h2>
              <span className="text-[14px] text-gray-600 ">
                {" "}
                t: +44 (0)20 7022 0432
              </span>
            </div>
          
        </div>
      </div>

      <div className="bg-gray-200  ">
        <div className="xl:max-w-7xl py-5 px-4 border-t border-gray-300 flex justify-between items-center container mx-auto">
          <span className="text-black text-[14px] font-sans">
          COPYRIGHT © 2023, Wiestell Ltd.
          </span>
          <div>
            <ul className="flex justify-end gap-2 items-center">
              <li>
                <Image
                  width={150}
                  alt="card"
                  height={12}
                  src="/assets/icons/card.png"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
