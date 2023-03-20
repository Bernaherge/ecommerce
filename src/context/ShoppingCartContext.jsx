

import { useState, createContext } from "react";

export const ShoppingCartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <ShoppingCartContext.Provider value={[cart, setCart]}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

/*import { useState } from "react";
import { createContext } from "react";

export const createContext = createContext (null);


export const ShoppingCartProvider = ({children}) => {
  const [cart, setCart] = useState([]);  

return (
    <CounterContext.Provider value = {[cart, setCart]}>

        {children}
    </CounterContext.Provider>
);
};*/



