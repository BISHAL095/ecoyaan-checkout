import { createContext, useState } from "react";

export const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState(null);

  return (
    <CheckoutContext.Provider value={{ cart, setCart, address, setAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
}