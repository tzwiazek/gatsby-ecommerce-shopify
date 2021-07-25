import React, { useContext } from "react"
import { Link } from "gatsby";
import { CartContext, CartContextType } from "../cart/cart-provider";
import Card from "./checkout-payment";
import Seo from "../seo";
import { CartTotal } from "../../shared/hooks/cart-total";
import { CartInterface } from "../../shared/interfaces/components/cart.interface";
import { ProductName } from "../products/product/product.styles";
import { Table, TR, TH, TD, Payment } from "./checkout.styles";

const CartDisplay = () => {
  const [cart]: CartContextType = useContext(CartContext)
  return <>{cart.length > 0 ? CheckoutDisplay(cart) : cartEmpty()}</>
}

const cartEmpty = () => {
  return (
    <section className="center">
      <p>Your cart is empty, fill it up!</p>
      <button className="pay-with-stripe">
        <Link style={{ color: "white" }} to="/">
          Back Home
        </Link>
      </button>
    </section>
  )
}

const CheckoutDisplay = (cart: CartInterface[]) => {
  return (
    <>
      <Seo title="Checkout page" />
      <Table>
        <tbody>
          <TR>
            <TH>Product</TH>
            <TH>Price</TH>
            <TH>Quantity</TH>
            <TH>Total</TH>
          </TR>
          {cart.map((item, index) => (
            <TR key={index}>
              <TD>
                <ProductName>{item.name}</ProductName>
              </TD>
              <TD>
                <h4 className="price">{item.price.formatted}</h4>
              </TD>
              <TD>
                <strong>{item.quantity}</strong>
              </TD>
              <TD>{item.quantity * Number(item.price.formatted)}</TD>
            </TR>
          ))}
        </tbody>
      </Table>

      <Payment>
        <Card />
        <div className="total">
          <div className="caption">
            <p>
              <strong>Subtotal:</strong>
            </p>
            <p>Shipping:</p>
            <p className="golden">Total:</p>
          </div>
          <div className="num">
            <p>
              <strong>{CartTotal(cart)}</strong>
            </p>
            <p>Free Shipping</p>
            <p className="golden">{CartTotal(cart)}</p>
          </div>
        </div>
      </Payment>
    </>
  )
}

export default CartDisplay;
