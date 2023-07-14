import React, { useEffect } from "react";
import { useState } from "react";
import { Dialog, Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  MagnifyingGlassIcon,
  SquaresPlusIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { BiUser } from "react-icons/bi";
import {
  BellIcon,
  ChevronDownIcon,
  HeartIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
  ShoppingBagIcon,
} from "@heroicons/react/20/solid";

import Link from "next/link";
import Image from "next/image";
import TopHeader from "./TopHeader/TopHeader";
import Nevbar from "./Nevbar";
import { Tooltip } from "react-tooltip";
import Cart from "./Cart";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding where your traffic is coming from",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers with our engagement tool",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: SquaresPlusIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
  { name: "View all products", href: "#", icon: RectangleGroupIcon },
];
const nevitem = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
  { name: "View all products", href: "#", icon: RectangleGroupIcon },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <TopHeader />
      <Tooltip id="header-tooltip" className="z-[999] !text-[12px]" />
      <div className=" px-[30px] pt-[10px] flex justify-between transition duration-300 ">
        <div className="divide-x flex items-center  gap-2">
          <div className="flex">
            <Link href="#" className="text-[11px] ">
              india
            </Link>
          </div>
          <div className="flex ">
            <select className="bg-white  text-[11px] pr-6 outline-none border-none py-0">
              <option>GBP £</option>
              <option>USD $</option>
              <option>EUR €</option>
              <option>INR $</option>
            </select>
          </div>
        </div>
        <div className="flex items-center">
          <Link href="#" className="text-gray-500 text-[10px]">
            Helpline +01 112 352 566
          </Link>
        </div>
      </div>
      <div className=" z-10 sticky top-0 bg-white border-b-2 border-black transition duration-300 ">
        <header className=" isolate z-10 bg-white">
          <div
            className={`mx-auto flex max-w-7xl gap-4  items-center justify-between p-6 ${
              scrollPosition > 10 ? " lg:py-4" : "  "
            }`}
          >
            <div className=" flex items-center  gap-8">
              <Link href="/" className="">
                <Image
                  src="/assets/icons/Wiestell Logo.png"
                  width={150}
                  style={{ width: "auto", height: "auto" }}
                  height={25}
                  className="max-w-[150px]"
                  alt="placeholder"
                />
              </Link>
            </div>
            <div className="flex-1 hidden md:block max-w-xl rounded-full overflow-hidden relative">
              <input
                type="text"
                placeholder="I am shopping for..."
                className="border text-[14px] border-black py-2 rounded-full w-full focus:border-black !outline-none pl-5 pr-10 "
              />
              <span className="w-10 flex items-center justify-center h-full top-0 bottom-0 right-1 absolute">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
              </span>
            </div>
            <div className="flex max-w-[200px] w-full justify-evenly items-center">
              <Link
                href="/wishlist"
                className="relative"
                data-tooltip-id="header-tooltip"
                data-tooltip-content="Wishlist"
              >
                <span className="absolute bg-black text-white text-[8px] flex items-center justify-center w-3 h-3  rounded-full top-[-4px] right-[-4px]">
                  0
                </span>

                <HeartIcon className="text-[14px] text-gray-500 w-5" />
              </Link>
              <div className="relative">
                <span className="absolute bg-black text-white text-[8px] flex items-center justify-center w-3 h-3  rounded-full top-[-4px] right-[-4px]">
                  0
                </span>

                <BellIcon className="text-[14px] text-gray-500 w-5" />
              </div>
              <div
                onClick={() => setOpenCart(!openCart)}
                className="relative cursor-pointer"
              >
                <ShoppingBagIcon className="text-[14px] text-gray-500 w-5" />
                <span className="absolute bg-black text-white text-[8px] flex items-center justify-center w-3 h-3  rounded-full top-[-4px] right-[-4px]">
                  0
                </span>

                <div
                  className={`${
                    openCart ? "opacity-100 visible" : "opacity-0 invisible"
                  } absolute w-[320px] trnasition duration-300 top-[31px] shadow-2xl left-[-265px] sm:left-[-250px] md:left-[-140px] z-[9999]`}
                >
                  <Cart />
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="group flex gap-2 items-center transition-all duration-300">
                <div className="flex  items-center transition-all duration-300 group-hover:shadow-md border group-hover:border-black rounded-full w-9 h-9 justify-center">
                  <BiUser className="text-gray-500 group-hover:text-black w-[21px] h-[21px]" />
                </div>
                <div className="flex divide-x items-center ">
                  <Link
                    href="/login"
                    className="text-[12px] px-2 transition-all duration-300 text-gray-400 font-medium hover:text-black"
                  >
                    Login
                  </Link>
                  <Link
                    href="/registration"
                    className="text-[12px] px-2 transition-all duration-300 text-gray-400 font-medium hover:text-black"
                  >
                    Registration
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <nav
              className={`mx-auto gap-6 flex max-w-7xl items-center justify-between px-6 py-3 md:pt-6 md:pb-0 lg:px-8 ${
                scrollPosition > 10 ? " lg:pt-2" : "  "
              }`}
              aria-label="Global"
            >
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <Nevbar scrollPosition={scrollPosition} />
              <div className="flex-1  md:hidden block max-w-xl rounded-full overflow-hidden relative">
                <input
                  type="text"
                  placeholder="I am shopping for..."
                  className="border border-black mt-px focus:border-black !outline-none text-[14px] py-2 rounded-full w-full  pl-5 pr-10 "
                />
                <span className="w-10 flex items-center justify-center h-full top-0 bottom-0 right-1 absolute">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
                </span>
              </div>
            </nav>
          </div>
          <Dialog
            as="div"
            className="md:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
            <Image width={40} height={40} src="/assets/icons/1024x1024 Icon.jpg" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Product
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...products, ...callsToAction].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Marketplace
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Company
                    </a>
                  </div>
                  <div className="md:hidden block py-4">
                    <div className="group flex gap-2 items-center transition-all duration-300">
                      <div className="flex  items-center transition-all duration-300 group-hover:shadow-md border group-hover:border-black rounded-full w-9 h-9 justify-center">
                        <BiUser className="text-gray-500 group-hover:text-black w-[21px] h-[21px]" />
                      </div>
                      <div className="flex divide-x items-center ">
                        <Link
                          href="/login"
                          className="text-[12px] px-2 transition-all duration-300 text-gray-400 font-medium hover:text-black"
                        >
                          Login
                        </Link>
                        <Link
                          href="/registration"
                          className="text-[12px] px-2 transition-all duration-300 text-gray-400 font-medium hover:text-black"
                        >
                          Registration
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </div>
    </>
  );
};

export default Header;
