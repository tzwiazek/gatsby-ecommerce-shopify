import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { CartInterface } from "../../shared/interfaces/components/cart.interface";

export type CartContextType = [
  CartInterface[],
  Dispatch<SetStateAction<CartInterface[]>>,
  (() => void),
  ((id: string) => void),
  ((id: string, num: number) => void)
]

const CartContext: React.Context<CartContextType> = React.createContext(null);

const CartProvider = ({children}: any) => {
  const [cart, setCart]: [CartInterface[], Dispatch<SetStateAction<CartInterface[]>>] = useState([]);

  useEffect(() => {
    let storedCart = reactLocalStorage.getObject("cart") as CartInterface[];
    if (Object.entries(storedCart).length === 0) {
      storedCart = []
    }
    setCart(storedCart)
  }, [])

  const emptyCart = (): void => {
    setCart([]);
    reactLocalStorage.setObject('cart', []);
  }

  const removeItemFromCart = (id: string): void => {
    const storedCart = reactLocalStorage.getObject("cart") as CartInterface[];
    Object.assign(storedCart).splice(Object.assign(storedCart).findIndex((cartItem: CartInterface) => cartItem.id === id), 1)
    setCart(storedCart);
    reactLocalStorage.setObject("cart", storedCart);
  }

  const changeItemQuantity = (id: string, num: number): void => {
    const storedCart = reactLocalStorage.getObject("cart") as CartInterface[];
    const currentItem = Object.assign(storedCart).findIndex((cartItem: CartInterface) => cartItem.id === id);
    storedCart[currentItem].quantity = storedCart[currentItem].quantity + num;

    if (storedCart[currentItem].quantity === 0) {
      removeItemFromCart(id);
    } else {
      setCart(storedCart);
      reactLocalStorage.setObject("cart", storedCart);
    }
  }

  return (
    <CartContext.Provider value={[cart, setCart, emptyCart, removeItemFromCart, changeItemQuantity]}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
