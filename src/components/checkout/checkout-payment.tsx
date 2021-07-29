import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import { CartContext, CartContextType } from "../cart/cart-provider";
import { CartUIContext } from "components/cart/cartUI";
import Checkout from "./checkout";
import { CardStyled } from "./checkout.styles";

const Payment = () => {
  const [email, updateEmail]: [string, Dispatch<SetStateAction<string>>] = useState("");
  const [complete, updateComplete]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const [cart, , emptyCart]: CartContextType = useContext(CartContext);
  const [updateCartUI]: [string, React.Dispatch<React.SetStateAction<string>>] = useContext(CartUIContext);

  return (
    <CardStyled>
      <button className="empty-btn" onClick={() => emptyCart()}>Empty Cart</button>
      <h3>Please enter your payment details:</h3>
      <label htmlFor="email">Email</label>
      <br />
      <input
        id="email"
        type="email"
        value={email}
        onChange={event => updateEmail(event.target.value)}
        placeholder="name@example.com"
      />
      <br />
      <label htmlFor="card">Credit Card</label>
      <br />
      <small>
        Test using this credit card:
        <span className="cc-number"> 4242 4242 4242 4242</span>, and enter any 5 digits for the zip code
      </small>
      <StripeProvider apiKey="pk_test_51J4opuDC7y7WZSIzduurTII5oItC72Ma5VOXcBzzPMt75YAL60nu6zCFlOD5a8uLZ2SOx6pF5ZervT8HwGG6o1FF00DQyH2MhE">
        <Elements>
          <Checkout
            updateComplete={updateComplete}
            email={email}
            complete={complete}
            cart={cart}
            emptyCart={emptyCart}
            updateCartUI={updateCartUI}
          ></Checkout>
        </Elements>
      </StripeProvider>
    </CardStyled>
  )
}

const Failure = () => {
  return (
    <>
      <h3>Oh No!</h3>
      <p>Something went wrong!</p>
      <button>Please try again</button>
    </>
  )
}

const Loading = () => {
  return (
    <>
      <h4>Please hold, we are filling up your cart with goodies</h4>
      <p>Placeholder image</p>
    </>
  )
}

const Success = () => {
  return <h4>Success!</h4>
}

const Card = () => {
  const [cartUIStatus]: [string, React.Dispatch<React.SetStateAction<string>>] = useContext(CartUIContext)
  return (
    <>
      {cartUIStatus === "checkout" ? <Payment /> : null}
      {cartUIStatus === "failure" ? <Failure /> : null}
      {cartUIStatus === "loading" ? <Loading /> : null}
      {cartUIStatus === "success" ? <Success /> : null}
    </>
  )
}

export default Card
