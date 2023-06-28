import React from 'react'

function TopHeader({scrollPosition}) {
  return (
    <div className={`bg-black py-2.5 text-xs text-center text-white ${scrollPosition > 10 ? 'hidden' : 'block'}`}>
        <p className='font'>
        <strong>SALE:</strong>{" "}
        2,000+ further reductions. Shop your favourite brands with up to 60% off. Plus, Toteme, Brunello Cucinelli and more just added.
        </p>

    </div>
  )
}

export default TopHeader
