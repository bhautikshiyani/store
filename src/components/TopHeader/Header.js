import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import TopHeader from ".";
import Link from "next/link";
import Image from "next/image";

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="border-b-2 ">
      <TopHeader />
      <header className="relative isolate z-10 bg-white">
        <div className="grid px-[30px] pt-[10px] grid-cols-2">
          <div className="divide-x flex items-center  gap-2">
            <div className="flex">
              <Link href="#" className="text-[11px] ">
                india
              </Link>
            </div>
            <div className="flex">
              <select className="bg-white  text-[11px] pr-6 outline-none border-none py-0">
                <option>GBP £</option>
                <option>USD $</option>
                <option>EUR €</option>
                <option>HKD $</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-end divide-x  ">
            <div className="px-2 flex items-center">
              <span className="text-[11px] text-black">Sign In</span>
            </div>
            <div className="flex items-center gap-1 px-2">
              <span className="text-[11px]">Wishlist</span>
              <AiFillHeart className="text-gray-800" />
            </div>
            <div className="px-2 flex items-center">
              <span className="text-[11px]">Loyalty</span>
            </div>
            <div className="relative flex items-center px-2 pr-2.5">
              <FaCartShopping />
              <span className="absolute bg-violet-600 text-white text-[8px] flex items-center justify-center w-3 h-3  rounded-full top-[-4px] right-[3px]">
                0
              </span>
            </div>
            <div className="px-2">
              <FaMagnifyingGlass />
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className=" flex items-center mx-auto  gap-8">
            <Link href="#" className="font-helvetica font-noraml opacity-50">
              MEN
            </Link>
            <Link href="#" className="">
              <Image
                src="/assets/icons/Wiestell Logo.png"
                width={150}
                height={25}
                className=""
              />
            </Link>
            <Link href="#" className="font-helvetica">
              WOMAN
            </Link>
          </div>
        </div>
        <div className="relative">
          <nav
            className="mx-auto  flex max-w-7xl items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Popover>
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  SALE
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 -translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-1"
                >
                  <Popover.Panel className="absolute inset-x-0 top-[70px] -z-10 bg-white  shadow-lg ring-1 ring-gray-900/5">
                    <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                    
                      <div class="flex flex-col gap-1 font-[300] text-[11px] font-helvetica">
                        <p class="underline mb-2">SALE</p>
                        <div className="flex gap-10">
                          <div className="flex flex-col">
                            <a href="womens/sale" class="main-link">
                              SHOP ALL
                            </a>
                            <a href="womens/sale/accessories">ACCESSORIES</a>
                            <a href="womens/sale/clothing/activewear">
                              ACTIVEWEAR
                            </a>
                            <a href="womens/sale/bags">BAGS</a>
                            <a href="womens/sale/clothing/beachwear">
                              BEACHWEAR
                            </a>
                            <a href="womens/sale/clothing/coats">COATS</a>
                            <a href="womens/sale/clothing/dresses">
                              DRESSES
                            </a>{" "}
                            <a href="womens/sale/homeware">HOMEWARE</a>{" "}
                            <a href="womens/us-sale/clothing/jackets">
                              JACKETS
                            </a>{" "}
                            <a href="womens/us-sale/clothing/jeans">JEANS</a>{" "}
                          </div>
                          <div className="flex flex-col">
                            <a href="womens/sale" class="main-link">
                              SHOP ALL
                            </a>
                            <a href="womens/sale/accessories">ACCESSORIES</a>
                            <a href="womens/sale/clothing/activewear">
                              ACTIVEWEAR
                            </a>
                            <a href="womens/sale/bags">BAGS</a>
                            <a href="womens/sale/clothing/beachwear">
                              BEACHWEAR
                            </a>
                            <a href="womens/sale/clothing/coats">COATS</a>
                            <a href="womens/sale/clothing/dresses">
                              DRESSES
                            </a>{" "}
                            <a href="womens/sale/homeware">HOMEWARE</a>{" "}
                            <a href="womens/us-sale/clothing/jackets">
                              JACKETS
                            </a>{" "}
                            <a href="womens/us-sale/clothing/jeans">JEANS</a>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 font-[300] text-[11px] font-helvetica">
                        <p class="underline mb-2">Clothing size</p>{" "}
                        <a href="womens/sale/clothing" class="main-link">
                          SHOP ALL
                        </a>{" "}
                        <a href="womens/sale?q=%3A%3AclothesSize%3A10000">
                          One size
                        </a>{" "}
                        <a href="womens/sale?q=%3A%3AclothesSize%3A10271">
                          3XS
                        </a>{" "}
                        <a href="womens/sale?q=%3A%3AclothesSize%3A10001">
                          XXS
                        </a>{" "}
                        <a href="womens/sale?q=%3A%3AclothesSize%3A10002">XS</a>{" "}
                        <a href="womens/sale?q=%3A%3AclothesSize%3A10003">S</a>{" "}
                        <a href="womens/sale?q=%3A%3AclothesSize%3A10004">M</a>{" "}
                        <a href="womens/sale?q=%3A%3AclothesSize%3A10005">L</a>{" "}
                        <a href="womens/sale?q=%3A%3AclothesSize%3A10006">XL</a>{" "}
                        <a href="womens/sale?q=%3A%3AclothesSize%3A10007">
                          XXL
                        </a>{" "}
                        <a href="womens/sale?q=%3A%3AclothesSize%3A10272">
                          3XL
                        </a>{" "}
                      </div>
                      <div className="flex flex-col gap-1 font-[300] text-[11px] font-helvetica">
                        
                          {" "}
                          <p class="underline mb-2">Shoe Size</p>{" "}
                          <a href="womens/sale/shoes" class="main-link">
                            SHOP ALL
                          </a>{" "}
                          <a href="womens/sale?q=%3A%3AshoesSize%3A10134%3AshoesSize%3A10135">
                            EU 34
                          </a>{" "}
                          <a href="womens/sale?q=%3A%3AshoesSize%3A10135%3AshoesSize%3A10136%3AshoesSize%3A10137">
                            EU 35
                          </a>{" "}
                          <a href="womens/sale?q=%3A%3AshoesSize%3A10137%3AshoesSize%3A10016%3AshoesSize%3A10017">
                            EU 36
                          </a>{" "}
                          <a href="womens/sale?q=%3A%3AshoesSize%3A10017%3AshoesSize%3A10018%3AshoesSize%3A10019">
                            EU 37
                          </a>{" "}
                          <a href="womens/sale?q=%3A%3AshoesSize%3A10021%3AshoesSize%3A10020%3AshoesSize%3A10022">
                            EU 38
                          </a>{" "}
                          <a href="womens/sale?q=%3A%3AshoesSize%3A10021%3AshoesSize%3A10022%3AshoesSize%3A10023">
                            EU 39
                          </a>{" "}
                          <a href="womens/sale?q=%3A%3AshoesSize%3A10024%3AshoesSize%3A10026%3AshoesSize%3A10025">
                            EU 40
                          </a>{" "}
                          <a href="womens/sale?q=%3A%3AshoesSize%3A10025%3AshoesSize%3A10026%3AshoesSize%3A10124">
                            EU 41
                          </a>{" "}
                          <a href="womens/sale?q=%3A%3AshoesSize%3A10124%3AshoesSize%3A10125">
                            EU 42
                          </a>{" "}
                       
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>

              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Features
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Company
              </a>
            </Popover.Group>
          </nav>
        </div>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
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
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Header;
