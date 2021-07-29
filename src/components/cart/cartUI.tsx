import React, { useState, createContext } from "react";

const CartUIContext: React.Context<[string, React.Dispatch<React.SetStateAction<string>>]> = createContext(null);

const CartUIProvider = ({ children }) => {
  const cartUIHook: [string, React.Dispatch<React.SetStateAction<string>>] = useState("checkout");
  return (
    <CartUIContext.Provider value={cartUIHook}>
      {children}
    </CartUIContext.Provider>
  )
}

export { CartUIContext, CartUIProvider }
