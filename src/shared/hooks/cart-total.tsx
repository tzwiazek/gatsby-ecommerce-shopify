import { CartInterface } from "../interfaces/components/cart.interface";

export const CartTotal = (cart: CartInterface[]) => {
  return cart.reduce((acc: number, next: CartInterface) =>
    acc + next.quantity * Number(next.price.formatted), 0);
}