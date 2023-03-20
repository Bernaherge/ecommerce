import { Button } from "@chakra-ui/react";
import { useContext } from 'react';
import { ShoppingCartContext } from "../context/ShoppingCartContext";
const CarWidget = () => {
  const [cart, setCart] = useContext(ShoppingCartContext);

  const quantity = cart.reduce ((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  
  
  
  return (
    <div className="cart">
      <Button size="lg" variant="outline" colorScheme="dark blue">
       
       <span className="material-symbols-outlined">Carrtio</span>
      <samp>{quantity}</samp>

      </Button>
      
    </div>
  );
};


export default CarWidget;