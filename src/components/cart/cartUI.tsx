import React, { useState, createContext } from 'react';

const CartUIContext = createContext<string>('');

const CartUIProvider = ({ children }: { children: any }) => {
  const cartUIHook = useState<string>('checkout');
  return <CartUIContext.Provider value={cartUIHook}>{children}</CartUIContext.Provider>;
};

export { CartUIContext, CartUIProvider };
