import { StarIcon } from '@heroicons/react/20/solid'
import React from 'react'
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
const RatingStar = ({ratingNum}) => {
  return (
    <div className=" flex gap-1  items-center">
    {[0, 1, 2, 3, 4].map((rating) => (
      <StarIcon
        key={rating}
        className={classNames(
            ratingNum > rating ? "text-[#ffa707]" : "text-gray-200",
          "h-4 w-4 flex-shrink-0"
        )}
        aria-hidden="true"
      />
    ))}
  </div>
  )
}

export default RatingStar