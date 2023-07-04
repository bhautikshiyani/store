import React from "react";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import {
  CurrencyDollarIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import ProductDetailSlider from "@/components/ProductDetail/ProductDetailSlider";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { MdAdd, MdOutlineShoppingBag, MdRemove } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
const product = {
  name: "Calvin Klein Women's Scuba Sleeveless Princess Seamed Sheath Dress",
  price: "$35",
  rating: 3.9,
  reviewCount: 512,
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Women", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      id: 1,
      imageSrc: "/assets/images/top-1.jpg",
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc: "/assets/images/top-2.jpg",
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: "/assets/images/top-3.jpg",
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: "/assets/images/top-4.jpg",
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: "/assets/images/top-5.jpg",
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: "/assets/images/top-6.jpg",
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: "/assets/images/top-7.jpg",
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    {
      name: "Heather Grey",
      bgColor: "bg-gray-400",
      selectedColor: "ring-gray-400",
    },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ],
  description: `
      <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
      <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
    `,
  details: [
    "Only the best materials",
    "Ethically and locally made",
    "Pre-washed and pre-shrunk",
    "Machine wash cold with similar colors",
  ],
};
const policies = [
  {
    name: "International delivery",
    icon: GlobeAmericasIcon,
    description: "Get your order in 2 years",
  },
  {
    name: "Loyalty rewards",
    icon: CurrencyDollarIcon,
    description: "Don't look at other tees",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white">
      <div className="pb-16 pt-6 sm:pb-24">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <ol role="list" className="flex items-center space-x-4">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-4 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    viewBox="0 0 6 20"
                    aria-hidden="true"
                    className="h-5 w-auto text-gray-300"
                  >
                    <path
                      d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 md:max-w-7xl md:px-8">
          <div className="md:grid md:grid-cols-2 md:gap-x-8">
            <div className="mt-8 md:mt-0">
              <div className=" max-w-[500px] mx-auto">
                <ProductDetailSlider img={product.images} />
              </div>
            </div>
            <div>
              <div className="md:col-span-5 md:col-start-8">
                <div className="flex justify-between">
                  <h1 className="text-[16px] font-semibold text-gray-900">
                    {product.name}
                  </h1>
                </div>
                <div className="mt-4">
                  <h2 className="sr-only">Reviews</h2>
                  <div className="flex items-center">
                    <div className=" flex gap-1 items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            product.rating > rating
                              ? "text-[#ffa707]"
                              : "text-gray-200",
                            "h-4 w-4 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    <div className="ml-4 flex">
                      <span className="text-xs font-medium text-gray-400 font-sans">
                        ( {product.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="flex items-center">
                      <Image
                        width={18}
                        height={18}
                        alt="qua"
                        src="/assets/icons/qua.svg"
                      />
                      <span className="text-[#d00906] ml-2 text-[14px] ">
                        Product Inquiry
                      </span>
                    </div>
                    <div className="text-gray-400 hover:text-gray-600 text-[14px] flex items-center trnasition duration-300 ml-2 text-[14px] ">
                      <FaRegHeart className="mr-2" />
                      <span className=" ">Product Inquiry</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="text-[13px] mr-[24px] text-gray-400">
                      Brand
                    </span>
                    <span className="font-semibold text-gray-600 text-[13px]">
                      En'or
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:col-span-5">
                <form>
                  <div>
                    <h2 className="font-medium text-[13px] text-gray-400">
                      Color
                    </h2>
                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-2"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a color
                      </RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {product.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedColor,
                                active && checked ? "ring ring-offset-1" : "",
                                !active && checked ? "ring-2" : "",
                                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.bgColor,
                                "h-6 w-6 rounded-full border border-black border-opacity-10"
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                  {/* Size picker */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <h2 className=" font-medium text-[13px] text-gray-400">
                        Size
                      </h2>
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        See sizing chart
                      </a>
                    </div>
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-2"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a size
                      </RadioGroup.Label>
                      <div className="grid grid-cols-3 gap-3 sm:grid-cols-7 sm:max-w-[370px]">
                        {product.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            className={({ active, checked }) =>
                              classNames(
                                size.inStock
                                  ? "cursor-pointer focus:outline-none"
                                  : "cursor-not-allowed opacity-25",
                                active
                                  ? "ring-2 ring-indigo-500 ring-offset-2"
                                  : "",
                                checked
                                  ? "border-transparent bg-indigo-600 text-white hover:bg-indigo-700"
                                  : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                                "flex items-center justify-center rounded-md border py-3 px-3 text-xs font-medium uppercase sm:flex-1"
                              )
                            }
                            disabled={!size.inStock}
                          >
                            <RadioGroup.Label as="span">
                              {size.name}
                            </RadioGroup.Label>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex mt-4 items-center">
                    <span className="mr-[24px] text-[13px] text-gray-400">
                      Quantity
                    </span>
                    <div className="flex items-center">
                      <button className="w-8 h-8 hover:bg-[#e2e6ea] transition duration-300 flex items-center justify-center text-gray-800 bg-[#f5f5f5] ">
                        <MdRemove />
                      </button>
                      <span className="text-gray-800 w-[45px] block text-center">
                        1
                      </span>
                      <button className="w-8 h-8 hover:bg-[#e2e6ea] transition duration-300 flex items-center justify-center text-gray-800 bg-[#f5f5f5] ">
                        <MdAdd />
                      </button>
                    </div>
                  </div>
                  <div className="flex mt-4 items-center">
                    <span className="mr-[14px] text-[13px] text-gray-400">
                      Total Price
                    </span>
                    <h2 className="text-[20px] font-semibold text-violet-600">
                      {product.price}
                    </h2>
                  </div>
                  <div className="mt-8 flex gap-2">

                  <button
                    type="submit"
                    className=" flex items-center w-[130px] justify-center  border border-transparent bg-indigo-600 px-6 py-2 text-[13px] font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-0"
                  >
                  <MdOutlineShoppingBag className="mr-1"/>  Add to cart
                  </button>
                  <button
                    type="submit"
                    className=" flex items-center w-[130px] justify-center  border border-transparent bg-indigo-600 px-6 py-2 text-[13px] font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-0"
                  >
                   <AiOutlineShoppingCart className="mr-1"/>
                     Buy Now
                  </button>
                  </div>
                </form>
                {/* Product details */}
                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">
                    Description
                  </h2>
                  <div
                    className="prose prose-sm mt-4 text-gray-500"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h2 className="text-sm font-medium text-gray-900">
                    Fabric &amp; Care
                  </h2>
                  <div className="prose prose-sm mt-4 text-gray-500">
                    <ul role="list">
                      {product.details.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Policies */}
                <section aria-labelledby="policies-heading" className="mt-10">
                  <h2 id="policies-heading" className="sr-only">
                    Our Policies
                  </h2>
                  <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {policies.map((policy) => (
                      <div
                        key={policy.name}
                        className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                      >
                        <dt>
                          <policy.icon
                            className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="mt-4 text-sm font-medium text-gray-900">
                            {policy.name}
                          </span>
                        </dt>
                        <dd className="mt-1 text-sm text-gray-500">
                          {policy.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
