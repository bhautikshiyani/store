import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
console.log("rrewrwer" , State)
const AddNewAddress = ({open , setOpen}) => {


  const cancelButtonRef = useRef(null);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-[600px] ">
                  <div className="flex items-center py-4 px-6 border justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-[20px] font-medium font-sans leading-6 text-dark800"
                    >
                      New Address
                    </Dialog.Title>
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="px-[25px]  font-sans py-[20px]">
                    <div className="py-4 flex flex-col gap-4">
                      <div className="grid grid-cols-12">
                        <div className="col-span-12 sm:col-span-2">
                          <span className="text-dark800 text-[13px]">
                            Address
                          </span>
                        </div>
                        <div className="col-span-12 sm:col-span-10">
                          <textarea
                            placeholder="Your Address"
                            id="about"
                            name="about"
                            rows={3}
                            className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-12">
                        <div className="col-span-12 sm:col-span-2">
                          <span className="text-dark800 text-[13px]">
                            Postal Code
                          </span>
                        </div>
                        <div className="col-span-12 sm:col-span-10">
                          <input
                            type="text"
                            placeholder="Your Postal Code"
                            className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-12">
                        <div className="col-span-12 sm:col-span-2">
                          <span className="text-dark800 text-[13px]">
                            Country
                          </span>
                        </div>
                        <div className="col-span-12 sm:col-span-10">
                          <Select
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 6,
                              colors: {
                                ...theme.colors,
                                primary25: "#e9e9e9",
                                primary: "black",
                              },
                            })}
                            classNamePrefix="custom-input"
                            options={Country.getAllCountries()}
                            getOptionLabel={(options) => {
                              return options["name"];
                            }}
                            getOptionValue={(options) => {
                              return options["name"];
                            }}
                            value={selectedCountry}
                            onChange={(item) => {
                              setSelectedCountry(item);
                            }}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-12">
                        <div className="col-span-12 sm:col-span-2">
                          <span className="text-dark800 text-[13px]">
                            State
                          </span>
                        </div>
                        <div className="col-span-12 sm:col-span-10">
                          <Select
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 6,
                              colors: {
                                ...theme.colors,
                                primary25: "#e9e9e9",
                                primary: "black",
                              },
                            })}
                            classNamePrefix="custom-input"
                            options={State?.getStatesOfCountry(
                              selectedCountry?.isoCode
                            )}
                            getOptionLabel={(options) => {
                              return options["name"];
                            }}
                            getOptionValue={(options) => {
                              return options["name"];
                            }}
                            value={selectedState}
                            onChange={(item) => {
                              setSelectedState(item);
                            }}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-12">
                        <div className="col-span-12 sm:col-span-2">
                          <span className="text-dark800 text-[13px]">City</span>
                        </div>
                        <div className="col-span-12 sm:col-span-10">
                          <Select
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 6,
                              colors: {
                                ...theme.colors,
                                primary25: "#e9e9e9",
                                primary: "black",
                              },
                            })}
                            className=""
                            classNamePrefix="custom-input"
                            options={City.getCitiesOfState(
                              selectedState?.countryCode,
                              selectedState?.isoCode
                            )}
                            getOptionLabel={(options) => {
                              return options["name"];
                            }}
                            getOptionValue={(options) => {
                              return options["name"];
                            }}
                            value={selectedCity}
                            onChange={(item) => {
                              setSelectedCity(item);
                            }}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-12">
                        <div className="col-span-12 sm:col-span-2">
                          <span className="text-dark800 text-[13px]">
                            Phone Number
                          </span>
                        </div>
                        <div className="col-span-12 sm:col-span-10">
                          <input
                            type="number"
                            placeholder="Your Number"
                            className="block w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" sm:flex px-5 pb-5 sm:flex-row-reverse">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default AddNewAddress;
