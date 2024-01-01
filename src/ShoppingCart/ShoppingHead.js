import React from 'react'
import CartData from './CartData'
import Headerfile from './Headerfile'


const ShoppingHead = () => {
    const {productItems} =CartData

  return (
    <div>
        <Headerfile/>
    </div>
  )
}

export default ShoppingHead