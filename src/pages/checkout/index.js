import MyCart from '@/components/Checkout/MyCart';
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsArrowLeft, BsCheck2Circle, BsTruck } from 'react-icons/bs';
import { GoCreditCard } from "react-icons/go";
import { LiaMapMarkedSolid } from "react-icons/lia";
const CheckOut = () => {
  return (
    <div className='py-14 px-4'>
    <div className='grid container  xl:max-w-4xl mx-auto grid-cols-5  sm:gap-6'>
        <div className='text-black border-b-black flex gap-3 border border-b-[6px] px-3 py-5 flex-col items-center'>
            <AiOutlineShoppingCart className='text-[24px] sm:text-[40px] ' />
            <span className='font-medium font-sans text-[14px] hidden md:block'>1. My Cart</span>
        </div>
        <div className='text-gray-400 flex gap-3 border border-b-[6px] px-3 py-5 flex-col items-center'>
            <LiaMapMarkedSolid className='text-[24px] sm:text-[40px] ' />
            <span className='font-medium font-sans hidden md:block text-[14px]'>2. Shipping info</span>
        </div>
        <div className='text-gray-400 flex gap-3  border border-b-[6px] px-3 py-5 flex-col items-center'>
            <BsTruck className='text-[24px] sm:text-[40px] ' />
            <span className='font-medium font-sans hidden md:block text-[14px]'>3. Delivery info</span>
        </div>
        <div className='text-gray-400 flex gap-3  border border-b-[6px] px-3 py-5 flex-col items-center'>
            <GoCreditCard className='text-[24px] sm:text-[40px] ' />
            <span className='font-medium font-sans hidden md:block text-[14px]'>4. Payment</span>
        </div>
        <div className='text-gray-400 flex gap-3  border border-b-[6px] px-3 py-5 flex-col items-center'>
            <BsCheck2Circle className='text-[24px] sm:text-[40px] ' />
            <span className='font-medium font-sans hidden md:block text-[14px]'>5. Confirmation</span>
        </div>
    </div>
   
    <div className='container  xl:max-w-6xl border mt-7 mx-auto'>
    <MyCart />
        <div className='p-6'>
          <div className='grid sm:grid-cols-2'>
            <div className='hidden sm:flex items-center'>
                <button className='text-gray-500  flex items-center gap-2 hover:text-black transition duration-300'>
                  <BsArrowLeft /> Return to shop
                </button>
            </div>
            <div className='flex gap-3 justify-end'>
              <button className='bg-white  px-3 py-2'>
                Back
              </button>
              <button className='bg-black text-white px-3 py-2'>
              Continue to Shipping
              </button>
            </div>
          </div>
        </div>
    </div>

</div>
  )
}

export default CheckOut