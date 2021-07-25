import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import CartDisplay from "../components/checkout/checkout-cart"
import { CartUIProvider, CartUIContext } from "../components/cart/cartUI"
import { Loading, Success } from "../components/checkout/checkout.styles"

function displayCartUIContext(context: string): JSX.Element {
  if (context === "checkout") {
    return (
      <CartDisplay />
    )
  } else if (context === "loading") {
    return (
      <Loading>
        <h2>Loading...</h2>
      </Loading>
    )
  } else if (context === "success") {
    return (
      <Success>
        <h2>Success!</h2>
        <p>
          Thank you for your purchase. You will be receiving your items in4 business days.
        </p>
        <p>Forgot something?</p>
        <button className="pay-with-stripe">
          <Link style={{ color: "white" }} to="/">
            Back to Home
          </Link>
        </button>
      </Success>
    )
  } else if (context === "failure") {
    return (
      <section>
        <p>
          Oops, something went wrong. Redirecting you to your cart to try again.
        </p>
      </section>
    )
  }
}

const Cart = () => {
  return (
    <Layout>
      <SEO title="Cart" />
      <CartUIProvider>
        <hr />
        <h1>Your Cart</h1>
        <CartUIContext.Consumer>
          {context => displayCartUIContext(context[0])}
        </CartUIContext.Consumer>
      </CartUIProvider>
    </Layout>
  )
}

export default Cart;
