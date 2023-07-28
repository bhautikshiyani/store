import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
const Pagination = () => {
  return (
   
      
      <div className=" flex flex-1 items-center mt-6 bg-white py-3 justify-end">
        
        <div>
          <nav
            className="isolate inline-flex gap-2 rounded shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className=" rounded inline-flex items-center rounded px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
           
            <a
              href="#"
              aria-current="page"
              className=" rounded z-10 inline-flex items-center bg-black px-4 py-2 text-[12px] font-medium text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className=" rounded inline-flex items-center px-4 py-2 text-[12px] font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
           
            <span className=" rounded inline-flex items-center px-4 py-2 text-[12px] font-medium text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className=" rounded hidden items-center px-4 py-2 text-[12px] font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className=" rounded inline-flex items-center px-4 py-2 text-[12px] font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
           
            <a
              href="#"
              className=" rounded inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
 
  );
};

export default Pagination;
