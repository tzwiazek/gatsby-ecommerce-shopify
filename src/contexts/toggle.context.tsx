import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

export const ToggleContext = createContext<{
  menuVisible: boolean;
  setMenuVisible: Dispatch<SetStateAction<boolean>>;
  cartVisible: boolean;
  setCartVisible: Dispatch<SetStateAction<boolean>>;
}>({
  menuVisible: false,
  setMenuVisible: () => false,
  cartVisible: false,
  setCartVisible: () => false
});

export const ToggleProvider = ({ children }: { children: any }) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [cartVisible, setCartVisible] = useState<boolean>(false);

  return (
    <ToggleContext.Provider value={{ menuVisible, setMenuVisible, cartVisible, setCartVisible }}>
      {children}
    </ToggleContext.Provider>
  );
};
