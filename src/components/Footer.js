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
        href:'#'
      },
      {
        name: "Bags",
        href:'#'
      },
      {
        name: "Bags & accessories",
        href:'#'
      },
      {
        name: "New arrivals ",
        href:'#'
      },
      {
        name: "Trends",
        href:'#'
      },
      {
        name: "Large sizes",
        href:'#'
      },
    ],
  },
  {
    title: "QUICK LINKS",
    page: [
      {
        name: "Support Policy Page",
        href:'#'
      },
      {
        name: "Return Policy Page",
        href:'#'
      },
      {
        name: "About Us",
        href:'#'
      },
      {
        name: "Privacy Policy Page",
        href:'#'
      },
      {
        name: "Term Conditions Page",
        href:'#'
      },
    ],
  },
  {
    title: "MY ACCOUNT",
    page: [
      {
        name: "Login",
        href:'/login'
      },
      {
        name: "Order History",
        href:'#'
      },
      {
        name: "My Wishlist",
        href:'#'
      },
      {
        name: "Track Order",
        href:'#'
      },
      {
        name: "Term Conditions Page",
        href:'#'
      },
    ],
  },
];

const Footer = () => {
  return (
    <div>
      <div className="bg-[#212129] py-6">
        <div className="xl:max-w-7xl container px-4 mx-auto grid  sm:grid-cols-2 lg:grid-cols-4">
          {nav.map((item, index) => {
            return (
              <div key={index} className="font-sans">
                <h2 className="font-semibold text-[15px] mb-4 text-gray-400">
                  {item.title}
                </h2>
                <ul>
                  {item.page.map((item, index) => {
                    return (
                      <li key={index} className="mb-2">
                        <Link
                          href={item.href}
                          className="text-gray-200 text-[13px]  relative after:absolute after:content-[' '] hover:after:scale-x-100 hover:after:origin-left after:bg-white after:bottom-[-5px] after:h-[1px] after:rounded-[2px]  after:left-0 after:right-0 after:origin-right border-animation-time after:scale-x-0"
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
            <div>
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
            </div>
            <div className="mt-8">
              <h2 className="font-semibold text-[15px] mb-3 text-gray-400">
                MOBILE APPS
              </h2>
              <div className="flex gap-2">
                <Link href="#">
                  <Image width={200} alt="playstore" height={40} src="/assets/icons/play.png" />
                </Link>
                <Link href="#">
                  <Image width={200} alt="appstore" height={40} src="/assets/icons/app.png" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#17171f] py-5">
        <div className="xl:max-w-7xl px-4 flex justify-between items-center container mx-auto">
          <span className="text-white text-[14px] font-sans">
            © Wiestell 2021
          </span>
          <div>
            <ul className="flex justify-end gap-2 items-center">
              <li>
                <Image width={150} alt="card" height={12} src="/assets/icons/card.png" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
