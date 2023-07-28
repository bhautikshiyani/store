import React, { useEffect, useState } from "react";
import TooltipSlider from "../RangeSlider/TooltipSlider";
import Select from "react-select";
import "rc-slider/assets/index.css";

const size = [
  {
    lable: "S",
  },
  {
    lable: "M",
  },
  {
    lable: "L",
  },
  {
    lable: "XL",
  },
  {
    lable: "XXL",
  },
  {
    lable: "3XL",
  },
  {
    lable: "4XL",
  },
];
const Fabric = [
  {
    lable: "Chenille",
  },
  {
    lable: "Cotton",
  },
  {
    lable: "Georgette",
  },
  {
    lable: "Crêpe",
  },
  {
    lable: "Canvas",
  },
];
const Color = [
  {
    name: "Black",
    color: "#CD5C5C",
  },
  {
    name: "White",
    color: "#F08080",
  },
  {
    name: "Blue",
    color: "#ef4444",
  },
  {
    name: "Yellow",
    color: "#fbbf24",
  },
  {
    name: "Pink",
    color: "#a3e635",
  },
  {
    name: "Sky",
    color: "#fb7185",
  },
  {
    name: "Gray",
    color: "#c026d3",
  },
  {
    name: "Green",
    color: "#6d28d9",
  },
  {
    name: "Red",
    color: "#38bdf8",
  },
];
const discount = [
  {
    type: "10% Off or more",
  },
  {
    type: "25% Off or more",
  },
  {
    type: "35% Off or more",
  },
  {
    type: "50% Off or more",
  },
  {
    type: "60% Off or more",
  },
  {
    type: "70% Off or more",
  },
];
const Brands = [
  {
    name: "Adidas",
  },
  {
    name: "Allen Solly",
  },
  {
    name: " Levi’s",
  },
  {
    name: "Fabindia",
  },
  {
    name: "Louis Philippe",
  },
  {
    name: "H&M",
  },
];
const Filter = () => {
  const [filter, setShowFilter] = useState(false);
  return (
    <>
      <div>
      {
        filter && 
        <div className="flex flex-col gap-3 md:hidden relative z-[2]">
          <Select
            className=""
            classNamePrefix=""
            placeholder="Select Brand"
            defaultValue={Color[0].name}
            isDisabled={false}
            isClearable={false}
            isSearchable={false}
            name="color"
            getOptionLabel={(options) => {
              return options["name"];
            }}
            getOptionValue={(options) => {
              return options["name"];
            }}
            options={Brands}
          />
          <Select
            className=""
            classNamePrefix=""
            placeholder="Select Color"
            isDisabled={false}
            isClearable={false}
            isSearchable={false}
            name="color"
            getOptionLabel={(options) => {
              return options["lable"];
            }}
            getOptionValue={(options) => {
              return options["lable"];
            }}
            options={size}
          />
          <Select
            className=""
            classNamePrefix=""
            defaultValue={Color[0].name}
            isDisabled={false}
            isClearable={false}
            isSearchable={false}
            name="color"
            placeholder="Select Fabric"
            getOptionLabel={(options) => {
              return options["lable"];
            }}
            getOptionValue={(options) => {
              return options["lable"];
            }}
            options={Fabric}
          />
          <Select
            className=""
            classNamePrefix=""
            defaultValue={Color[0].name}
            isDisabled={false}
            isClearable={false}
            isSearchable={false}
            name="color"
            placeholder="Select Color"
            getOptionLabel={(options) => {
              return options["name"];
            }}
            getOptionValue={(options) => {
              return options["name"];
            }}
            options={Color}
          />
        </div>
      }
        <div className="md:hidden block text-end pb-5">
          <button
            onClick={() => setShowFilter(!filter)}
            className="text-[12px] font-semibold text-end"
          >
            {filter ? "Hide Filter" : "Filter"}
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-4">
        <div className="border p-4">
          <h2 className="text-gray-900 font-semibold">Price range</h2>
          <div>
            <TooltipSlider
              range
              min={0}
              max={20}
              defaultValue={[3, 10]}
              tipFormatter={(value) => `${value}!`}
            />
            <div className="text-gray-500 text-[14px] flex justify-between">
              <span>100</span>
              <span>20000</span>
            </div>
          </div>
        </div>
        <div className="border p-4">
          <h2 className="text-gray-900 mb-4 font-semibold">Brands</h2>
          <div>
            {Brands.map((item, index) => {
              return (
                <div className="flex items-center mb-1 gap-2" key={index}>
                  <input className="rounded " type="checkbox" />
                  <span className="text-[14px] text-gray-700">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border p-4">
          <h2 className="text-gray-900 mb-4 font-semibold">Size</h2>
          <div>
            {size.map((item, index) => {
              return (
                <div className="flex items-center mb-1 gap-2" key={index}>
                  <input className="rounded " type="checkbox" />
                  <span className="text-[14px] text-gray-700">
                    {item.lable}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border p-4">
          <h2 className="text-gray-900 mb-4 font-semibold">Fabric</h2>
          <div>
            {Fabric.map((item, index) => {
              return (
                <div className="flex items-center mb-1 gap-2" key={index}>
                  <input className="rounded " type="checkbox" />
                  <span className="text-[14px] text-gray-700">
                    {item.lable}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border p-4">
          <h2 className="text-gray-900 mb-4 font-semibold">Discount</h2>
          <div>
            {discount.map((item, index) => {
              return (
                <div className="flex items-center mb-1 gap-2" key={index}>
                  <span className="text-[14px] text-gray-700">{item.type}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border p-4">
          <h2 className="text-gray-900 mb-4 font-semibold">Filter by color</h2>
          <div className="flex items-center gap-3 flex-wrap">
            {Color.map((item, index) => {
              return (
                <div className="flex items-center mb-1 gap-2" key={index}>
                  <button
                    className="w-6 h-6 rounded"
                    style={{ background: `${item.color}` }}
                  ></button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
