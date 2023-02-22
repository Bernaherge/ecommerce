import { Button } from "@chakra-ui/react";
import React from 'react'

const CartWidget = () => {
  return (
    <div>
      <span>🛒</span>
      <span> 4 </span>

      <span><Button colorScheme='blue'>Carrito</Button></span>


    </div>
  )
}


export default CartWidget;